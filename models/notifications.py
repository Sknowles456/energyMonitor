from cloudant.client import Cloudant
import time
## Database Connection and Tables
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
roomDB= client['rooms']
futureDB = client['model']
userTargetsDB = client['preferences']
notifDB = client['notifs']

############# GET LAST ROOM DATA ################
recentSelector = {
      "_id": {
         "$gt": 0
      }
}
roomResult = roomDB.get_query_result(recentSelector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
latestLightStatus = roomResult['docs'][0]['light']
time.sleep(1)
##################### GET FUTURE PREDICTIONS #################
recentSelector = {
      "_id": {
         "$gt": 0
      }
}
futureResult = futureDB.get_query_result(recentSelector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
time.sleep(1)
##################### GET USER DEFINED TARGETS #################
userTargetResult = userTargetsDB.get_query_result(recentSelector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
time.sleep(1)

############## Data Assessment for Actuator adjustments #########
# 						Based Off Decision Tables				#
#################################################################
notifList = []
# Is User going to be home.
inProb = futureResult['docs'][0]['Occupancy']['in']
outProb = futureResult['docs'][0]['Occupancy']['out']
if(inProb > outProb ):
	notifList.append("TAKE ACTION AS EXPECTED TO BE IN")
elif(inProb < outProb):
	notifList.append("NO ACTION AS EXPECTED TO BE OUT- override manual controls if wrong. Potential actions below;")
else:
	notifList.append("System unsure please manually adjust if needed")

if(futureResult['docs'][0]['Temperature'] - userTargetResult['docs'][0]['temperature'] > 1):
	tempDif = futureResult['docs'][0]['Temperature'] - userTargetResult['docs'][0]['temperature']
	notifList.append("Future temperature will be high than the target by %s reduce temp "%tempDif)
elif(futureResult['docs'][0]['Temperature'] - userTargetResult['docs'][0]['temperature'] < -1):
	tempDif =  userTargetResult['docs'][0]['temperature'] - futureResult['docs'][0]['Temperature']
	notifList.append("Future temperature will be lower than the target by %s increase temp "%tempDif)
else:
	notifList.append("Temperature is within acceptable ranges")

lightScore = {
	"Dark":1,
	"Dull":2,
	"Good Light":3,
	"Bright":4,
	"Extremeley Bright":5
}
currentScore = lightScore[latestLightStatus]
targetScore = lightScore[userTargetResult['docs'][0]['light']]

if(currentScore > targetScore):
	notifList.append("Turning down the lighting to meet user targets from %s to %s"%(latestLightStatus,userTargetResult['docs'][0]['light']))
elif(currentScore < targetScore):
	notifList.append("Turning up lighting to meet user targets from %s to %s"%(latestLightStatus,userTargetResult['docs'][0]['light']))


if(futureResult['docs'][0]['Humidity'] - userTargetResult['docs'][0]['humidity'] > 2.5):
	humDif = futureResult['docs'][0]['Humidity'] - userTargetResult['docs'][0]['humidity']
	notifList.append("Future Humidity will be higher than the target by %s reduce humidity by ventilation "%tempDif)
elif(futureResult['docs'][0]['Humidity'] - userTargetResult['docs'][0]['humidity'] < -2.5):
	humDif =  userTargetResult['docs'][0]['humidity'] - futureResult['docs'][0]['Humidity']
	notifList.append("Future Humidity will be lower than the target by %s prevent ventilation "%humDif)
else:
	notifList.append("Humidity is within acceptable ranges")

###################### NOTIFICATION UPLOAD #####################
doc = {
	"timestamp":int(time.time()),
	"notifications":notifList
}
docUpload = notifDB.create_document(doc)
if docUpload:
	print("Uploaded document to notifications table",notifList)
