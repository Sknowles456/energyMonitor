from cloudant.client import Cloudant
import time
#Variables
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
notifDB = client['notifs']
notifList = []
selector = {
      "_id": {
         "$gt": 0
      }
}
lightScore = {
	"Dark":1,
	"Dull":2,
	"Good Light":3,
	"Bright":4,
	"Extremeley Bright":5
}
# FUNCTIONS
def connectToDatabase(table, selector):
	dbConnection = client[table]
	result = dbConnection.get_query_result(selector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
	time.sleep(1)
	
	return result
	
def uploadToDatabase(notifList):
	doc = {
	"timestamp":int(time.time()),
	"notifications":notifList
	}
	docUpload = notifDB.create_document(doc)
	if docUpload:
		print("Uploaded document to notifications table",notifList)
	
def encodeLighting(lightScore,index):
	encode = lightScore[index]

	return encode
	
def occupancyEvaluation(inProb, outProb):
	if(inProb > outProb ):
		notifList.append("TAKE ACTION AS EXPECTED TO BE IN")
	elif(inProb < outProb):
		notifList.append("NO ACTION AS EXPECTED TO BE OUT- override manual controls if wrong. Potential actions below;")
	else:
		notifList.append("System unsure please manually adjust if needed")
	
def targetVsFutureTemp(futureResult, userTargetResult):
	tempDif = variableDifferences(futureResult['docs'][0]['Temperature'], userTargetResult['docs'][0]['temperature'])
	if(tempDif > 1):
		notifList.append("Future temperature will be high than the target by %s reduce temp "%round(tempDif,2))
	elif(tempDif < -1):
		notifList.append("Future temperature will be lower than the target by %s increase temp "%round(tempDif,2))
	else:
		notifList.append("Temperature is within acceptable ranges")

def targetVsFutureHum(futureResult,userTargetResult):
	humDif = variableDifferences(futureResult['docs'][0]['Humidity'],userTargetResult['docs'][0]['humidity'])
	if(humDif > 2.5):
		notifList.append("Future Humidity will be higher than the target by %s reduce humidity by ventilation "%round(humDif,2))
	elif(humDif < -2.5):
		notifList.append("Future Humidity will be lower than the target by %s prevent ventilation "%round(humDif,2))
	else:
		notifList.append("Humidity is within acceptable ranges")
		
def variableDifferences(x,y):

	return x-y
	
def lightingEvaluation(currentScore,targetScore):
	if(currentScore > targetScore):
		notifList.append("Turning down the lighting to meet user targets from %s to %s"%(latestLightStatus,userTargetResult['docs'][0]['light']))
	elif(currentScore < targetScore):
		notifList.append("Turning up lighting to meet user targets from %s to %s"%(latestLightStatus,userTargetResult['docs'][0]['light']))


########  MAIN ########
roomResult = connectToDatabase('rooms',selector)
latestLightStatus = roomResult['docs'][0]['light']
futureResult = connectToDatabase('model',selector)
userTargetResult = connectToDatabase('preferences',selector)

occupancyEvaluation(futureResult['docs'][0]['Occupancy']['in'],futureResult['docs'][0]['Occupancy']['out'])
targetVsFutureTemp(futureResult,userTargetResult)
targetVsFutureHum(futureResult, userTargetResult)
currentScore = encodeLighting(lightScore,latestLightStatus)
targetScore = encodeLighting(lightScore,userTargetResult['docs'][0]['light'])
lightingEvaluation(currentScore,targetScore)

######### NOTIFICATION UPLOAD #########
uploadToDatabase(notifList)
