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
import sys
###################### Variables ##############################
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
selector = {
      "_id": {
         "$gt": 0
      }
}
previousSelector = {
      "timestamp": {
         "$gt": int(time.time()-3600)
      }
}
lightObject = {
	"Dark":0,
	"Dull":1,
	"Good Light":2,
	"Bright":3,
	"Extremeley Bright":4
}
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
labelEncoder = LabelEncoder()
linearModel= LinearRegression()
supportModel = SVR()
NBModel = GaussianNB()

################# Functions / Methods ######################
def connectToDatabase(table, selector):
	dbConnection = client[table]
	result = dbConnection.get_query_result(selector,raw_result=True,sort=[{"timestamp":"desc"}],limit=1)
	time.sleep(1)

	return result

def generateObject(databaseResult, previousResult):
	outside_humidity= str(databaseResult['docs'][0]['outside_humidity'])
	if(databaseResult['docs'][0]['occupied'] == 'Empty'):
		Occupancy= 0
	else:
		Occupancy= 1
	Light= databaseResult['docs'][0]['light']
	Outlook= databaseResult['docs'][0]['outlook']

	date = str(datetime.datetime.fromtimestamp(databaseResult['docs'][0]['timestamp']))
	year = int(date[:4])
	month = int(date[6:7])
	day = int(date[8:10])
	theWeekDay = datetime.datetime(year,month,day)
	weekday = theWeekDay.weekday()
	hour = date[11:13]

	dataObject = {
	"insideTemp": databaseResult['docs'][0]['temp'],
	"light": lightObject[Light],
	"UV": float(databaseResult['docs'][0]['outside_UV']),
	"outside_temp": databaseResult['docs'][0]['outside_temp'],
	"humidity": databaseResult['docs'][0]['humidity'],
	"month": float(month),
	"day": float(day),
	"weekday":float(weekday),
	"hour":float(hour),
	"outside_humidity":float(outside_humidity[:2]),
	"hr_before": previousResult['docs'][0]['temp'],
	"hr_beforeHum" : previousResult['docs'][0]['humidity'],
	"outlook" : float(outlookObject[Outlook]),
	"occupancy" : float(Occupancy)
	}
	print(dataObject['insideTemp'])

	return dataObject

def predictionArray(dataObject,type):
	if(type == 'humidity'):
		hr_before = dataObject['hr_beforeHum']
	elif(type == 'temp'):
		hr_before = dataObject['hr_before']
#temp,humidity,light,outlook,outside_UV,outside_temp,outside_hum, Month, Day, weekday, hour, occupancy, hr_before, hr_after
	predictionList = [dataObject['insideTemp'],dataObject['humidity'],dataObject['light'],
	dataObject['outlook'],dataObject['UV'],dataObject['outside_temp'],dataObject['outside_humidity'],
	dataObject['month'],dataObject['day'],dataObject['weekday'],dataObject['hour'],
	dataObject['occupancy'],hr_before]

	print("predictionList",predictionList)

	return predictionList

def readCsv(filePath):
	file = pd.read_csv(filePath)

	return file

def sanitizeTarget(targetData,encoder):
	targetData.drop('hr_after', axis=1,inplace=True)


	return targetData

def targetAttr(targetData):
	targetY = targetData.hr_after.tolist()

	return targetY

def dateListGen():
	current_time = str(datetime.datetime.now())

	month = int(current_time[5:7])
	day = int(current_time[8:10])
	hour= int(current_time[11:13])
	minute= int(current_time[14:16])
	weekday= datetime.datetime.weekday(datetime.datetime.now())
	dateList = np.array([month,day,weekday,hour,minute])
	dateList = dateList.reshape(1,-1)

	return dateList

def predictionUpload(humResult,tempResult,NBP):
	doc = {
		"Humidity": HumResult[0],
		"Temperature": TempResult[0],
		"Occupancy":{
			"in":NBP[0][0],
			"out":NBP[0][1]
		},
		"timestamp": int(time.time())
	}
	my_database = client['model']
	upload = my_database.create_document(doc)
	if upload:
		print ("Successful")

# Retrieve and Format Data
databaseResult = connectToDatabase('rooms',selector)# Get current Status
previousResult = connectToDatabase('rooms',selector)# Get status 1 hour ago
dataObject = generateObject(databaseResult,previousResult)#create the data object full of the needed data

###################### HUMIDITY Linear MODEL ############################
targetData = readCsv('models/TrainingDataHumidity.csv') # read the csv file
#print targetData.isnull().any()
targetY = targetAttr(targetData) #separate the target fields
targetData = sanitizeTarget(targetData,labelEncoder) # ensure data if of the needed format
linearModel.fit(targetData,targetY)

#Performance Metrics to Compare models success
#Linear has less margin of error
HumPredictions = linearModel.predict(targetData)
print ("humidity mae: ",mean_absolute_error(targetY,HumPredictions))
print ("humidity RMSE:",mean_squared_error(targetY,HumPredictions))

##################### TEMPERATURE support vector Regresson MODEL ###################################
targetDataTemp = readCsv('models/TrainingDataTemp.csv')
#print targetDataTemp.isnull().any()
targetTempY = targetAttr(targetDataTemp)
targetDataTemp = sanitizeTarget(targetDataTemp, labelEncoder)
supportModel.fit(targetDataTemp,targetTempY)
# Performance Metrics
TempPredictions = supportModel.predict(targetDataTemp)
print ("Temperature Model Performance MAE: ",mean_absolute_error(targetTempY,TempPredictions))
print ("Temperature Model Performance RMSE: ",mean_squared_error(targetTempY,TempPredictions))

####################### OCCUPANCY Naive Bayes MODEL #####################################
#Retrieve and clean the Data
targetDataOcc = pd.read_csv('models/TrainingDataOccupancy.csv')
targetDataOcc.Occupancy = labelEncoder.fit_transform(targetDataOcc.Occupancy)
targetOccY = targetDataOcc.Occupancy.tolist()
targetDataOcc.drop('Occupancy', axis=1,inplace=True)
NBModel.fit(targetDataOcc,targetOccY)

while True:
	############## Temp ########
	predictList = np.array(predictionArray(dataObject,'temp'))
	predictList = predictList.reshape(1,-1)
	#Predictions
	TempResult = supportModel.predict(predictList)
	print ("Temperature Result: ", TempResult)
	############ Humidity #####
	predictList = np.array(predictionArray(dataObject,'humidity')) # create the dataset that will be used for prediction
	predictList = predictList.reshape(1,-1)
	## Prediction
	HumResult = linearModel.predict(predictList)
	print ("Hum Result: ", HumResult)
	############ Occupancy #########
	dateList = dateListGen()
	NBP= NBModel.predict_proba(dateList)
	print ("Probability of [Out & In]",NBP)

	predictionUpload(HumResult,TempResult,NBP)
	time.sleep(300)
