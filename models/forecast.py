import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import mean_squared_error
from sklearn.metrics import accuracy_score
from sklearn.svm import SVR
from cloudant.client import Cloudant
from sklearn.naive_bayes import GaussianNB
import time
import datetime
######################Connect to Database##############################
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
database= client['rooms']
selector = {
      "_id": {
         "$gt": 0
      }
}
# GET latest Housing Status
databaseResult = database.get_query_result(selector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)

#GET 1 hr previously from Data Set
previousSelector = {
      "timestamp": {
         "$gt": int(time.time()-3600)
      }
}
previousResult = database.get_query_result(previousSelector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
################ Sanitize the Data fit for the models input ##################
#Set Results from GETs to variables
insideTemp= databaseResult['docs'][0]['temp']
Light= databaseResult['docs'][0]['light']
Outlook= databaseResult['docs'][0]['outlook']
UV= float(databaseResult['docs'][0]['outside_UV'])
outside_temp= databaseResult['docs'][0]['outside_temp']
humidity= databaseResult['docs'][0]['humidity']
dateTime= databaseResult['docs'][0]['timestamp']
outside_humidity= str(databaseResult['docs'][0]['outside_humidity'])
outside_humidity=float(outside_humidity[:2])
if(databaseResult['docs'][0]['occupied'] == 'Empty'):
	Occupancy= 0
else:
	Occupancy= 1
hr_before= previousResult['docs'][0]['temp']
hr_beforeHum = previousResult['docs'][0]['humidity']
#The Encoder changes strings to these corresponding values.
# On next .csv update add this to the csvWriter instead of here.
lightObject = {
	"Dark":0,
	"Dull":1,
	"Good Light":2,
	"Bright":3,
	"Extremeley Bright":4
}
Light = lightObject[Light]

outlookObject={
	"clear":0,
	"partlycloudy":5,
	"fog":2,
	"rain":6,
	"mostlycloudy":4,
	"cloudy":1,
	"hazy":3,
	"snow":7
}
Outlook = outlookObject[Outlook]
Occupancy = float(Occupancy)

###################### HUMIDITY Linear MODEL ############################
#Retrieve the file and check print out any faulty attributes
targetData = pd.read_csv('models/trainingDataHum.csv')
#print targetData.isnull().any()

targetY = targetData.Hr_after.tolist()
targetData.drop('Hr_after', axis=1,inplace=True)
targetData.drop('RoomID', axis=1,inplace=True)

labelEncoder = LabelEncoder()
targetData.Occupancy = labelEncoder.fit_transform(targetData.Occupancy)
targetData.Outlook = labelEncoder.fit_transform(targetData.Outlook)
targetData.Light = labelEncoder.fit_transform(targetData.Light)

#Outlook= labelEncoder.fit_transform(Outlook)

linearModel= LinearRegression()
linearModel.fit(targetData,targetY)

predictList = np.array([insideTemp,Light,Outlook,UV,outside_temp,humidity,dateTime,outside_humidity,Occupancy,hr_beforeHum])
predictList = predictList.reshape(1,-1)
print "Humidity Prediction List ",predictList

#Performance Metrics to Compare models success
#Linear has less margin of error
HumPredictions = linearModel.predict(targetData)
print mean_absolute_error(targetY,HumPredictions)
print mean_squared_error(targetY,HumPredictions)

## Prediction
HumResult = linearModel.predict(predictList)
print "Hum Result: ", HumResult



##################### TEMPERATURE support vector Regresson MODEL ###################################
targetDataTemp = pd.read_csv('models/trainingDataTemp.csv')
#print targetDataTemp.isnull().any()
targetTempY = targetDataTemp.Hr_after.tolist()
targetDataTemp.drop('Hr_after', axis=1,inplace=True)
targetDataTemp.drop('RoomID', axis=1,inplace=True)
labelEncoderTemp = LabelEncoder()
targetDataTemp.Occupancy = labelEncoderTemp.fit_transform(targetDataTemp.Occupancy)
targetDataTemp.Outlook = labelEncoderTemp.fit_transform(targetDataTemp.Outlook)
targetDataTemp.Light = labelEncoderTemp.fit_transform(targetDataTemp.Light)

supportModel = SVR()
supportModel.fit(targetDataTemp,targetTempY)

# Performance Metrics
TempPredictions = supportModel.predict(targetDataTemp)
print "Temperature Model Performance MAE: ",mean_absolute_error(targetTempY,TempPredictions)
print "Temperature Model Performance RMSE: ",mean_squared_error(targetTempY,TempPredictions)
predictList = np.array([insideTemp,Light,Outlook,UV,outside_temp,humidity,dateTime,outside_humidity,Occupancy,hr_before])
predictList = predictList.reshape(1,-1)
#Predictions
TempResult = supportModel.predict(predictList)
print "Temperature Result: ", TempResult


####################### OCCUPANCY Naive Bayes MODEL #####################################
current_time = str(datetime.datetime.now())
year = int(current_time[:4])
month = int(current_time[5:7])
day = int(current_time[8:10])
hour= int(current_time[11:13])
minute= int(current_time[14:16])
dateList = np.array([year,month,day,hour,minute])
dateList = dateList.reshape(1,-1)
print "The Date Array ", dateList

#Retrieve and clean the Data
targetDataOcc = pd.read_csv('models/trainingDataOcc.csv')
labelEncoderOcc = LabelEncoder()
targetDataOcc.Occupancy = labelEncoderOcc.fit_transform(targetDataOcc.Occupancy)
targetOccY = targetDataOcc.Occupancy.tolist()
targetDataOcc.drop('Occupancy', axis=1,inplace=True)

NBModel = GaussianNB()
NBModel.fit(targetDataOcc,targetOccY)

NBP= NBModel.predict_proba(dateList)
print"Probability of [Out & In]",NBP
NB= NBModel.predict(dateList)

print "The Prediction",NB

################### PREDICTION UPLOAD #####################################
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
doc = {
	"Humidity": HumResult[0],
	"Temperature": TempResult[0],
	"Occupancy":{
		"in":NBP[0][0],
		"out":NBP[0][1]
	}
}
my_database = client['model']
upload = my_database.create_document(doc)
if upload:
	print ("Successful")
