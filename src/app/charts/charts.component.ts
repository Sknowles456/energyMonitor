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
  date1:any;
  date2:any;
  userData:any;
  chart:any;
  chart2:any;
  chart3:any;
  chart4:any;
  chart5:any;
  chart6:any;
  cont;
  graphData:any;
  occupancyFeedback=[];
  tempFeedback=[];
  humidityFeedback=[];
  lightingFeedback=[];

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

    ngOnInit() {
      this.createCharts();
      this.cont = document.getElementById("canvas");
    }

    getChartData(formData){
      this.date1 = formData.startDate;
      this.date2 = formData.endDate;
      var epochStart = 0;
      var epochEnd = 0;
      if(formData.startDate){
        epochStart = new Date(formData.startDate).getTime();
        epochEnd = new Date(formData.endDate).getTime();
      }
      this.createCharts(epochStart, epochEnd);

    }

    createCharts(startDate = 0,endDate =0){
//########### DESTROY EXISTING CHART REFS ############################
       if(this.chart){
         this.chart.destroy();

       };
       if(this.chart2){
         this.chart2.destroy();

       };
       if(this.chart3){
         this.chart3.destroy();

       };
       if(this.chart4){
         this.chart4.destroy();

       };

      this._dataService.getGraphData(startDate,endDate)
      .subscribe(res=>{
//################### OCCUPANCY LOOP CHECK ############################
        var occupancyIn = 0;
        var occupancyOut = 0;
       for(var i=0; i < res['data'].length; i++){
         if(res['data'][i]['occupied'] == "Empty"){
           occupancyOut += 1;
         }else{
           occupancyIn += 1;
         }
       };
//###################### CHART 1 OCCUPANCY #################################
      this.chart = new Chart(this.cont,{
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
//########### FEED BACK #######################
      if(res['data'].length > 0){
        this.occupancyFeedback = [];
        this.occupancyFeedback.push("The Property has been vacant for approximatley "+(occupancyOut *  5)+" minutes between"+startDate+" and "+endDate);
        this.occupancyFeedback.push("The Property has NOT been vacant for approximatley "+(occupancyIn *  5)+" minutes between"+startDate+" and "+endDate);
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
//######### TEMPERATURE TARGET LOOP CHECK ###############################
      var belowTarget = 0;
      var aboveTarget = 0;
      var onTarget = 0;
      var maxTemp = 0;
      var minTemp = 0;
      var averageTemp =0;
      var ctx = document.getElementById("canvas2");
      minTemp = res['data'][0]['temp'];
      maxTemp = res['data'][0]['temp'];
       for(var i=0; i < res['data'].length; i++){
         averageTemp = averageTemp + parseInt(res['data'][i]['temp']);
         if(res['data'][i]['temp'] > maxTemp){
           maxTemp = res['data'][i]['temp']
         };
         if(res['data'][i]['temp']< minTemp){
           minTemp = res['data'][i]['temp']
         };
         if((res['data'][i]['temp'] - this.userData['temperature']) < -2 ){
           belowTarget += 1;
         }else if((res['data'][i]['temp'] - this.userData['temperature']) > 2){
           aboveTarget += 1;
         }else{
           onTarget +=1
         }

       };
       var averageTempResult = averageTemp/res['data'].length;
//########################### CHART 2 Temperature Targets #############################"
      this.chart2 = new Chart(ctx,{
        type:'pie',
        data:{
          datasets:[{
            data:[belowTarget,aboveTarget,onTarget],
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
//####################### FEEDBACK ###########################
  this.tempFeedback = [];
  if(res['data'].length > 0){
      this.tempFeedback.push("The MAXIMUM temperature reached between "+ startDate +" - "+endDate+" is " + maxTemp);
      this.tempFeedback.push("The MINIMUM temperature reached between "+ startDate +" - "+endDate+" is " + minTemp);
      this.tempFeedback.push("The AVERAGEtemperature reached between "+ startDate +" - "+endDate+" is " + averageTempResult);
      if(belowTarget > aboveTarget){
        this.tempFeedback.push("The room is more frequently below expectations");
      }
      else if(belowTarget == aboveTarget){
           this.tempFeedback.push("The room has extreme fluctations around the expected temperature");
      }
      else{
          this.tempFeedback.push("This room is being over utilised with its energy usage");
      };
  }else{
    this.tempFeedback.push("NO Data Available");
  };
//################## HUMIDITY LOOP CHECK #############################
    var belowTargetHum=0;
    var aboveTargetHum=0;
    var onTargetHum =0;
    var minHum;
    var maxHum;
    var averageHum = 0;;
    minHum = res['data'][0]['humidity'];
    maxHum = res['data'][0]['humidity'];
    var ctx3 = document.getElementById("canvas3");
    for(var i=0; i < res['data'].length; i++){
      if(res['data'][i]['humidity'] > maxHum){
        maxHum = res['data'][i]['humidity']
      };
      if(res['data'][i]['humidity']< minHum){
        minHum = res['data'][i]['humidity']
      };
      averageHum = averageHum + parseInt(res['data'][i]['humidity']);
      console.log(res['data'][i]['humidity']);
      if(res['data'][i]['humidity'] < 60 ){
        belowTargetHum += 1;
      }else if((res['data'][i]['humidity'] - this.userData['humidity']) > 5){
        aboveTargetHum += 1;
      }else{
        onTargetHum +=1
      }
    };
    console.log("avergaehum" +averageHum);
    console.log("reslength" + res['data'].length);
    var averageHumResult = averageHum / res['data'].length;
//############################### Humidity Chart ########################################
    this.chart3 = new Chart(ctx3,{
      type:'pie',
      data:{
        datasets:[{
          data:[belowTargetHum,aboveTargetHum,onTargetHum],
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
//############## FEED BACK #######################
  this.humidityFeedback = [];
  if(res['data'].length > 0){
      this.humidityFeedback.push("The MAXIMUM temperature reached between "+ startDate +" - "+endDate+" is " + maxHum);
      this.humidityFeedback.push("The MINIMUM temperature reached between "+ startDate +" - "+endDate+" is " + minHum);
      this.humidityFeedback.push("The AVERAGE temperature reached between "+ startDate +" - "+endDate+" is " + averageHumResult);
      if(belowTargetHum > aboveTargetHum){
        this.humidityFeedback.push("The rooms humidity is more frequently below expectations");
      }
      else{
          this.humidityFeedback.push("This room has too much moisture for a prolonged period");
      };
      if(averageHumResult > 70){
        this.humidityFeedback.push("The room needs to be vented more to prevent mildew build up");
      };
  }else{
    this.humidityFeedback.push("NO Data Available");
  };
//##################### Lighting Levels ########################
    var lighting=[];
    lighting['Dull'] = 0;
    lighting['Good Light'] = 0;
    lighting['Bright'] = 0;
    lighting['Extremeley Bright']=0;
    lighting['Dark'] = 0;

    var ctx4 = document.getElementById("canvas4");
    for(var i=0; i < res['data'].length; i++){
      if(res['data'][i]['light'] == "Dark" ){
        lighting['Dark'] += 1;
      }
      else if(res['data'][i]['light'] == "Dull" ){
        lighting['Dull'] += 1;
      }
      else if(res['data'][i]['light'] == "Dark" ){
        lighting['Dark'] += 1;
      }
      else if(res['data'][i]['light'] == "Good Light" ){
        lighting['Good Light'] += 1;
      }
      else if(res['data'][i]['light'] == "Bright" ){
        lighting['Bright'] += 1;
      }
      else if(res['data'][i]['light'] == "Extremeley Bright" ){
        lighting['Extremeley Bright'] += 1;
      }
    };
    var labels = ["Dull","Dark","Good Light","Bright","Extremeley Bright"];
      for(var i=0; i < labels.length; i++){
        if(labels[i] == this.userData['light']){
          labels[i] = "Target -"+this.userData['light'].toString();
        }
      }
//######################## Lighting Chart ################################################
    this.chart4 = new Chart(ctx4,{
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
//##################### Lighitng Feeback #####################
    this.lightingFeedback = [];
    if(res['data'].length > 0){
        if(lighting['Extremely Bright']){
          this.lightingFeedback.push("There have been periods of extremeley bright lighting, use natural light where possible");
        }
        var lightingPercent = 0;
        if(lighting[this.userData['light']]){
          lightingPercent = (lighting[this.userData['light']] / res['data'].length)*100;
        }
      this.lightingFeedback.push('The target lighting has been reached '+lightingPercent+'  of the time');
    }
    else{
      this.lightingFeedback.push("NO Data Available");
    };
// ################## TIMEING ###############################
       var currentTime = +new Date();
       var currentDate = new Date();
       var seconds = (currentDate.getHours()*3600000) + (currentDate.getMinutes()*60000);
       console.log(currentTime);
       console.log(currentDate.getHours());
       console.log(currentDate.getMinutes());

      });
      /*END OF CHART METHOD*/
    }
  }/* END OF CLASS*/
