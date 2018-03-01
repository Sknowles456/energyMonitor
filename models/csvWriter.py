import csv
from cloudant.client import Cloudant
import cloudant
from datetime import datetime
import time
client = Cloudant("c7fbaee1-29d4-499c-a1ce-490285596944-bluemix","186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269",account="c7fbaee1-29d4-499c-a1ce-490285596944-bluemix",connect=True)
csvFile = open("occupancy.csv", "wb")
writer = csv.writer(csvFile, delimiter=',')

print('Databases: {0}'.format(client.all_dbs()))
my_db=client['rooms']
i=0

for document in my_db:
	try:
		writerObj = [];
		date = str(datetime.fromtimestamp(document['timestamp']))
		print(date)
		year = date[:4]
		print(year)
		writerObj.append(year)
		month = date[6:7] 
		print(month)
		writerObj.append(month)
		day = date[8:10]
		print(day)
		writerObj.append(day)
		hour = date[11:13]
		print(hour)
		writerObj.append(hour)
		minutes=date[14:16]
		print(minutes)
		writerObj.append(minutes)
		writerObj.append(document['occupied'])
		i += 1
		writer.writerow(writerObj)
		if i%4 == 0:
			time.sleep(1)
	except:
		print("issue")
# Disconnect from the server
csvFile.close();
client.disconnect()