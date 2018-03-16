import csv
from cloudant.client import Cloudant
import cloudant
from datetime import datetime
import time
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
csvFile = open("TrainingData.csv", "wb")
writer = csv.writer(csvFile, delimiter=',')

print('Databases: {0}'.format(client.all_dbs()))
my_db=client['rooms']
i=0

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
#insideTemp, Light, Outlook, UV,outsidetemp,humidity,dateTime,outsideHum,occupancy, hr before, hour after.
for document in my_db:
	print(document)
	try:
		writerObj = [];
		writerObj.append(document['temp'])
		writerObj.append(document['humidity'])
		light = lightObject[document['light']]
		writerObj.append(light)
		outlook = outlookObject[document['outlook']]
		writerObj.append(outlook)
		writerObj.append(document['outside_UV'])
		writerObj.append(document['outside_temp'])
		outsideHum = document['outside_humidity'][:-1]
		print int(outsideHum)
		writerObj.append(document['outside_humidity'])
		date = str(datetime.fromtimestamp(document['timestamp']))
		print(date)
		year = int(date[:4])
		month = int(date[6:7]) 
		print(month)
		writerObj.append(month)
		day = int(date[8:10])
		print(day)
		writerObj.append(day)
		theWeekDay = datetime(year,month,day)
		weekday = (theWeekDay.weekday() + 1)
		writerObj.append(weekday)
		hour = date[11:13]
		print(hour)
		writerObj.append(hour)
		if document['occupied'] == 'Empty':
			occupancy = 0
		elif document['occupied'] == 'Occupied':
			occupancy= 1
		print occupancy
		i += 1
		writerObj.append(occupancy)
		writer.writerow(writerObj)
		if i%4 == 0:
			time.sleep(1)
	except:
		print("issue")
# Disconnect from the server
csvFile.close();
client.disconnect()