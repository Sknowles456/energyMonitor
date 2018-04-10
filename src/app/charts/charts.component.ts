import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService}  from '../data.service';
import * as Chart from 'chart.js'
import 'rxjs/add/operator/map';
import 'chartjs-plugin-zoom';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
  userData:any;
  chartOcc:any;
  chartTemp:any;
  chartHumidity:any;
  chartLight:any;
  occupancyFeedback=[];
  tempFeedback=[];
  humidityFeedback=[];
  lightingFeedback=[];
    //When the page is constructed get the users variables and allow access to the html body and dataservice.ts
    constructor(private _dataService: DataService, private _element: ElementRef) {
      this._dataService.getUserDefined()
      .subscribe(res=>{
        this.userData = {
          "temperature":  res['data'].map(res => res.temperature),
          "humidity":  res['data'].map(res => res.humidity),
           "light": res['data'].map(res => res.light)
        };
      });
    }
      //create charts once the page is loaded
    ngOnInit() {
      this.createCharts();

    }

    //converts the default form params or user specified into epoch.
    getChartData(formData){
      var date1 = formData.startDate;
      var date2 = formData.endDate;
      var epochStart = 0;
      var epochEnd = 0;
      if(formData.startDate){
        epochStart = new Date(formData.startDate).getTime();
        epochEnd = new Date(formData.endDate).getTime();
      }
      this.createCharts(epochStart, epochEnd);//creates charts with these epoch times.
    }

    //Chart references need to be destroyed to prevent a reload and the previous chart still exists.
    destroyLightChart(){
      if(this.chartLight){
        this.chartLight.destroy();
      };
    }
    destroyTempChart(){
      if(this.chartTemp){
        this.chartTemp.destroy();
      };
    }
    destroyOccChart(){
      if(this.chartOcc){
        this.chartOcc.destroy();
      };
    }
    destroyHumChart(){
      if(this.chartHumidity){
        this.chartHumidity.destroy();
      };
    }
    //Date casting so it can be used in the user feedback and be manipulated easily.eg:substring
    dateCasting(startDate,endDate){
      var startDateString;
      var endDateString;
      if(startDate == 0){
        var endEpoch = new Date().getTime();
        var startEpoch= endEpoch - 86400000;
        startDateString = new Date(startEpoch);
        endDateString = new Date(endEpoch);
      }else{
        startDateString = new Date(startDate);
        endDateString = new Date(endDate);
      }
      startDateString = startDateString.toString();
      endDateString = endDateString.toString();
      startDateString = startDateString.substring(0,10);
      endDateString = endDateString.substring(0,10);

      return [startDateString,endDateString]
    }

    //loops through the data checking if the user was in or out and tallying the frequency
    occupancyCheck(data){
      var occupancyIn =0;
      var occupancyOut =0;
      for(var i=0; i < data.length; i++){
        if(data[i]['occupied'] == "Empty"){
          occupancyOut += 1;
        }else{
          occupancyIn += 1;
        }
      };
      return [occupancyIn,occupancyOut];
    }

    //Occupancy chart generation enabling the config.
    createOccChart(occupancyIn,occupancyOut){
      var cont = document.getElementById("canvas");
      this.chartOcc = new Chart(cont,{
        type:'pie',
        data:{
          datasets:[{
            data:[occupancyIn,occupancyOut],
            backgroundColor:["green","red"],
            label:"Living Occupancy"
          }],
          labels:["Occupied","Empty"]
        },
        options:{
          responsive:false
        },title:{
          display:true,
          text:'Occupancy Daily'
        }
      });
    }

    //Feedback on the occupancy tally with understandable an format to the user
    occupancyFeedbackGeneration(data,occupancyIn,occupancyOut,startDateString,endDateString){
      if(data.length > 0){
        this.occupancyFeedback = [];
        this.occupancyFeedback.push("The Property has been vacant for approximatley "+(occupancyOut *  5 / 60).toFixed(2)+" hours between "+startDateString+" and "+endDateString);
        this.occupancyFeedback.push("The Property has NOT been vacant for approximatley "+(occupancyIn *  5/ 60).toFixed(2)+" hours between "+startDateString+" and "+endDateString);
         if(occupancyOut > occupancyIn){
           this.occupancyFeedback.push("More time is spent outside of this Room");
         }
         else if(occupancyOut == occupancyIn){
              this.occupancyFeedback.push("Equal time is spent In and Out of this Room");
         }
         else{
             this.occupancyFeedback.push("This is a frequently used room");
         };
     }
     else{
        this.occupancyFeedback.push("No Data Available");
     };
    }

    /*a tally of temperature of how often
      user has been on their target and info extraction
      on the mix man and average temp of the household*/
    temperatureMinMaxAvg(data){
      var belowTarget = 0;
      var aboveTarget = 0;
      var onTarget = 0;
      var maxTemp = 0;
      var minTemp = 0;
      var averageTemp =0;
      minTemp = data[0]['temp'];
      maxTemp = minTemp;
       for(var i=0; i < data.length; i++){
         averageTemp = averageTemp + parseInt(data[i]['temp']);
         if(data[i]['temp'] > maxTemp){
           maxTemp = data[i]['temp']
         };
         if(data[i]['temp']< minTemp){
           minTemp = data[i]['temp']
         };
         if((data[i]['temp'] - this.userData['temperature']) < -2 ){
           belowTarget += 1;
         }else if((data[i]['temp'] - this.userData['temperature']) > 2){
           aboveTarget += 1;
         }else{
           onTarget +=1
         }

       };
       var averageTempResult = averageTemp/data.length;
       var averageTempResultSubed = averageTempResult.toString().substring(0,4);

       return [minTemp,maxTemp,averageTempResultSubed,aboveTarget,belowTarget,onTarget]
    }

    //enable the temperature charts config
    createTemperatureChart(tempTuple){
      var ctx = document.getElementById("canvas2");
      this.chartTemp = new Chart(ctx,{
        type:'pie',
        data:{
          datasets:[{
            data:[tempTuple[3],tempTuple[4],tempTuple[5]],
            backgroundColor:["green","red","blue"],
            label:"Status"
          }],
          labels:["belowTarget","aboveTarget","onTarget - "+this.userData['temperature']]
        },
        options:{
          responsive:false
        },title:{
          display:true,
          text:'Targets Daily'
        }
      });
    }

    //feedback generated based off the temperature tally and user targets.
    temperatureFeedbackGeneration(data, tempTuple, endDateString,startDateString){
      this.tempFeedback = [];
      if(data.length > 0){
          this.tempFeedback.push("The MAXIMUM temperature reached between "+ startDateString +" - "+endDateString+" is " + tempTuple[1]);
          this.tempFeedback.push("The MINIMUM temperature reached between "+ startDateString +" - "+endDateString+" is " + tempTuple[0]);
          this.tempFeedback.push("The AVERAGEtemperature reached between "+ startDateString +" - "+endDateString+" is " + tempTuple[2]);
          if(tempTuple[3] > tempTuple[4]){
            this.tempFeedback.push("The room is more frequently below expectations");
          }
          else if(tempTuple[3] == tempTuple[4]){
               this.tempFeedback.push("The room has extreme fluctations around the expected temperature");
          }
          else if((tempTuple[5] < tempTuple[4])&&(tempTuple[5] < tempTuple[3])){
               this.tempFeedback.push("The room maintains its target well");
          }
          else{
              this.tempFeedback.push("This room is being over utilised with its energy usage");
          };
      }else{
        this.tempFeedback.push("NO Data Available");
      };

    }

    /*a tally of humidity of how often
      user has been on their target and info extraction
      on the mix man and average temp of the household*/
    humidityMinMaxAvg(data){
      var belowTargetHum=0;
      var aboveTargetHum=0;
      var onTargetHum =0;
      var averageHum = 0;;
      var  minHum = data[0]['humidity'];
      var  maxHum = minHum;

      for(var i=0; i < data.length; i++){
        if(data[i]['humidity'] > maxHum){
          maxHum = data[i]['humidity']
        };
        if(data[i]['humidity']< minHum){
          minHum = data[i]['humidity']
        };
        averageHum = averageHum + parseInt(data[i]['humidity']);

        if(data[i]['humidity'] < 60 ){
          belowTargetHum += 1;
        }else if((data[i]['humidity'] - this.userData['humidity']) > 5){
          aboveTargetHum += 1;
        }else{
          onTargetHum +=1
        }
      };

      var averageHumResult = averageHum / data.length; // Errors occured when trying to manipulate the data and assign to the same variable so use variable holder
      var averageHumResultSubed = averageHumResult.toString().substring(0,4); // same error so using extra vars.

      return [minHum,maxHum,averageHumResultSubed,aboveTargetHum,belowTargetHum,onTargetHum]
    }

      //The humidity chart configuration enabled by this method.
    createHumidityChart(humidityTuple){
        var ctx3 = document.getElementById("canvas3");
        this.chartHumidity = new Chart(ctx3,{
        type:'pie',
        data:{
          datasets:[{
            data:[humidityTuple[4],humidityTuple[3],humidityTuple[5]],
            backgroundColor:["green","red","blue"],
            label:"Status"
          }],
          labels:["Danger < 60%","aboveTarget","onTarget - "+this.userData['humidity']]
        },
        options:{
          responsive:false
        },title:{
          display:true,
          text:'Targets Daily'
        }
      });
    }

      humidityFeedbackGeneration(data, humidityTuple, endDateString, startDateString){
        this.humidityFeedback = [];
        if(data.length > 0){
            this.humidityFeedback.push("The MAXIMUM temperature reached between "+ startDateString +" - "+endDateString+" is " + humidityTuple[1]);
            this.humidityFeedback.push("The MINIMUM temperature reached between "+ startDateString +" - "+endDateString+" is " + humidityTuple[0]);
            this.humidityFeedback.push("The AVERAGE temperature reached between "+ startDateString +" - "+endDateString+" is " + humidityTuple[2]);
            if(humidityTuple[4] > humidityTuple[3]){
              this.humidityFeedback.push("The rooms humidity is more frequently below expectations");
            }
            else{
                this.humidityFeedback.push("This room has too much moisture for a prolonged period");
            };
            if(humidityTuple[2] > 70){
              this.humidityFeedback.push("The room needs to be vented more to prevent mildew build up");
            };
        }else{
          this.humidityFeedback.push("NO Data Available");
        };
      }

      lightingLabels(){
        var labels = ["Dull","Dark","Good Light","Bright","Extremeley Bright"];
          for(var i=0; i < labels.length; i++){
            if(labels[i] == this.userData['light']){
              labels[i] = "Target -"+this.userData['light'].toString();
            }
          }
          return labels
      }

      lightingTargetCheck(data){
        var lighting=[];
        lighting['Dull'] = 0;
        lighting['Good Light'] = 0;
        lighting['Bright'] = 0;
        lighting['Extremeley Bright']=0;
        lighting['Dark'] = 0;


        for(var i=0; i < data.length; i++){
          if(data[i]['light'] == "Dark" ){
            lighting['Dark'] += 1;
          }
          else if(data[i]['light'] == "Dull" ){
            lighting['Dull'] += 1;
          }
          else if(data[i]['light'] == "Dark" ){
            lighting['Dark'] += 1;
          }
          else if(data[i]['light'] == "Good Light" ){
            lighting['Good Light'] += 1;
          }
          else if(data[i]['light'] == "Bright" ){
            lighting['Bright'] += 1;
          }
          else if(data[i]['light'] == "Extremeley Bright" ){
            lighting['Extremeley Bright'] += 1;
          }
        };
        return lighting
      }

      createLightingChart(lighting,labels){
        var ctx4 = document.getElementById("canvas4");
        this.chartLight = new Chart(ctx4,{
          type:'pie',
          data:{
            datasets:[{
              data:[lighting['Dull'],lighting['Dark'],lighting['Good Light'],lighting['Bright'],lighting['Extremeley Bright']],
              backgroundColor:["grey","black","green","orange","yellow"],
              label:"Status"
            }],
            labels:labels
          },
          options:{
            responsive:false
          },title:{
            display:true,
            text:'Targets Daily'
          }
        });
      }

      lightFeedbackGeneration(data,lighting){
        this.lightingFeedback = [];
        if(data.length > 0){
            if(lighting['Extremely Bright']){
              this.lightingFeedback.push("There have been periods of extremeley bright lighting, use natural light where possible");
            }
            var lightingPercent = 0;
            if(lighting[this.userData['light']]){
              lightingPercent = (lighting[this.userData['light']] / data.length)*100;
              var lightingPercentSubed = lightingPercent.toString().substring(0,4);
            }
          this.lightingFeedback.push('The target lighting has been reached '+lightingPercentSubed+'  of the time');
        }
        else{
          this.lightingFeedback.push("NO Data Available");
        };
      }

    //The main method that calls graph enablement, data collection and variable instantiation
    createCharts(startDate = 0,endDate =0){
      //########### DESTROY EXISTING CHART REFS ############################
       this.destroyLightChart();
       this.destroyOccChart();
       this.destroyTempChart();
       this.destroyHumChart();

      this._dataService.getGraphData(startDate,endDate)
      .subscribe(res=>{
        var dateTuple = this.dateCasting(startDate,endDate);
        var startDateString = dateTuple[0];
        var endDateString = dateTuple[1];

          //################### OCCUPANCY LOOP CHECK ############################
        var occupancyTuple = this.occupancyCheck(res['data']);
        var occupancyIn = occupancyTuple[0];
        var occupancyOut = occupancyTuple[1];
          //###################### CHART 1 OCCUPANCY #################################
        this.createOccChart(occupancyIn,occupancyOut);
        //########### FEED BACK #######################
        this.occupancyFeedbackGeneration(res['data'],occupancyIn,occupancyOut,startDateString,endDateString);
        //######### TEMPERATURE TARGET LOOP CHECK ###############################
        var tempTuple = this.temperatureMinMaxAvg(res['data']); //min,max,avg,above,below,on
        //########################### CHART 2 Temperature Targets #############################"
        this.createTemperatureChart(tempTuple);
        //####################### FEEDBACK ###########################
        this.temperatureFeedbackGeneration(res['data'], tempTuple, endDateString,startDateString)
        //################## HUMIDITY LOOP CHECK #############################
        var humidityTuple = this.humidityMinMaxAvg(res['data']);//min,max,avg,above,below,on
        //############################### Humidity Chart ########################################
        this.createHumidityChart(humidityTuple);
        //############## FEED BACK #######################
        this.humidityFeedbackGeneration(res['data'], humidityTuple, endDateString,startDateString);
        //##################### Lighting Levels ########################
        var lightTuple = this.lightingTargetCheck(res['data']);
        var lightLabels = this.lightingLabels();
        //######################## Lighting Chart ################################################
        this.createLightingChart(lightTuple,lightLabels);
        //##################### Lighitng Feeback #####################
        this.lightFeedbackGeneration(res['data'],lightTuple);
      });
      /*END OF CHART METHOD*/
    }

  }/* END OF CLASS*/
