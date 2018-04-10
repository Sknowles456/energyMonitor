import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentStatus = [];
  futureData=[];
  path='';
    lastUpdate='';
  id:any;
  futureId:any;


  constructor(private _dataService: DataService){ // when page is contrcuted get the future and current status values to populate the 3 panels.
        this.getCurrentStatus();
        this.getFutureData();
  }

  ngOnInit() { //once the page has loaded activate the interval for page refresh. saving the id value of the interval.
    this.futureId = setInterval(()=>{
      this.getFutureData();
    },300000 );

    this.id = setInterval(()=>{
      this.getCurrentStatus();
    },300000 );
  }

    ngOnDestroy() { //Once the page has been left destroy the intervals to prevent value reloads when not on the page. waste of resources and pointless.
    if (this.id) {
      clearInterval(this.id);
      clearInterval(this.futureId);
    }
  }

  getCurrentStatus(){
    this._dataService.getCurrentStatus()
    .subscribe(res =>{
        var date = new Date();
        if (date.getMinutes() <= 9 ){// javascript getMinutes function doesnt retrieve 2 digits 0-9. the date displayed looks unusual so this is to improve usability.
          this.lastUpdate = date.getHours()+":0"+date.getMinutes()+":"+date.getSeconds();
        }
        else{
          this.lastUpdate = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        }
       this.currentStatus = res['data']['docs'];
       this.path= '../../assets/'+this.currentStatus[0]['outlook']+'.svg';
     });
  }

  getFutureData(){
    this._dataService.getFutureDataService()
    .subscribe(res=>{
      this.futureData = res['data'];
      console.log(res)
   });
  }

}/*End of Class*/
