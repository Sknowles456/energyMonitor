import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService}  from '../data.service';
import * as Chart from 'chart.js'
import 'rxjs/add/operator/map';
import 'chartjs-plugin-zoom';
import 'chartjs-plugin-annotation';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  userData:any;
  chart;

  constructor(private _dataService: DataService, private _element: ElementRef) { //ElementRef is needed for access to body elements, to retrieve their context.
    this._dataService.getUserDefined()
    .subscribe(res=>{
      this.userData = {
        "temperature":  res['data'].map(res => res.temperature),
        "humidity":  res['data'].map(res => res.humidity),
      };
    });
  }

  ngOnInit() {
    this.createGraph(0,0);
  }

  resetZoom(){//resets the zoom and panning on the graph.
    this.chart.resetZoom()
  }

  getGraphData(formData){ //retrieve data between specified dates.
    var epochStart = 0;
    var epochEnd = 0;
    var graph = formData.graphType.toString();// graph type is temperature or humidity settings on the UI
    this.chart.destroy();//destroy refs to the chart or it will still exist in memory.
    if(formData.startDate){ //if no time has been set select current time.
      epochStart = new Date(formData.startDate).getTime();
      epochEnd = new Date(formData.endDate).getTime();
    }
    this.createGraph(epochStart, epochEnd, graph);
  }

  createGraph(startDate,endDate,status = 'Temperature'){
    this._dataService.getGraphData(startDate,endDate)
    .subscribe(res => {
      let userVar = []
      let resDates = []
      let graphVar = [];
      let outsideGraphVar=[];
      let userGraphVar:any;
      let timestamp:any;
      let annotationValue = 0;
      var min =0;
      var max = 0;

      if(status == 'Temperature'){//organising the data to its relevant store ready to be displayed.
        graphVar = res['data'].map(res => res.temp)
        outsideGraphVar = res['data'].map(res => res.outside_temp)
        userGraphVar = this.userData['temperature']
        max = 40;
      }
      else if(status == 'Humidity'){
        graphVar = res['data'].map(res => res.humidity)
        outsideGraphVar = res['data'].map(res => res.outside_humidity)
        userGraphVar = this.userData['humidity']
        max = 100;
      }
      timestamp = res['data'].map(res => res.timestamp)
      timestamp.forEach((res)=>{//Loop through each timestamp in the dataset and convert epoch to ddmmyyy hhmm
        let jsDate = new Date(res * 1000)
        resDates.push(jsDate.toLocaleTimeString('en',{year:'numeric', month:'short', day:'numeric',hour: '2-digit', minute:'2-digit'}))
      })
        // Defining Graph Configurations
      var context = document.getElementById("canvas");
      this.chart = new Chart(context,{
        type:'line',
        data:{
          labels:resDates,
          datasets:[
            {
            label:"Inside",
            data:graphVar,
            borderColor:'blue',
            fill: false
          },
          {
          label:"Outside",
          data:outsideGraphVar,
          borderColor:'red',
          fill: false
        },
        {
        label:"Target ",
        borderColor:'green',
        fill: false
      }
          ]
        },
        options:{
          responsive:true,
          title:{
            display:true,
            text:'Housing Data'
          },
          legend:{
            display: true
          },
          layout:{
            padding:{
              bottom:150,
              left:20,
              right:20,
              top:50
            }
          },
        scales:{
          xAxes:[{
            display: true
          }],
          yAxes:[{
            display: true,
            scaleLabel:{
              labelString:'Temperature C'
            },
           ticks: {
                   min:min,
                   max:max
                    }
                  }]
                },
          pan:{
            enabled:true,
            mode:'x'
          },
          zoom:{
            enabled:true,
            mode:'y'
          },
          annotation:{
            drawTime: 'afterDatasetsDraw',
            annotations:[{
              type:'line',
              id:'userLine',
              drawTime:'afterDatasetsDraw',
              mode:'horizontal',
              scaleID:'y-axis-0',
              value:userGraphVar,
              borderColor:'green',
              borderWidth:2
            }]
          }

        }
      }); /*END OF CHART*/

    });/* END OF SERVICE CALL*/

  }/* END OF METHOD */

}/* END OF CLASS*/
