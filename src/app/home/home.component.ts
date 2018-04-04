import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentStatus = [];
  helperArray = [];
  futureData=[];
  path:any;
  id:any;
  futureId:any;
  lastUpdate:any;
  constructor(private _dataService: DataService){
        this.getCurrentStatus();
        this.getFutureData();
        this.currentStatus=[];
  }

  ngOnInit() {

    this.futureId = setInterval(()=>{
      this.getFutureData();
    },300000 );

    this.id = setInterval(()=>{
      this.getCurrentStatus();
    },300000 );
  }
    ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
      clearInterval(this.futureId);
    }
  }
  getCurrentStatus(){
    this._dataService.getCurrentStatus()
    .subscribe(res =>{
        var date = new Date();

        if (date.getMinutes() <= 9 ){
          this.lastUpdate = date.getHours()+":0"+date.getMinutes()+":"+date.getSeconds();
        }
        else{
          this.lastUpdate = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        }

       this.currentStatus = res;
       this.helperArray = this.currentStatus['data']['docs'];
       this.currentStatus = this.helperArray;
       this.path= '../../assets/'+this.currentStatus[0]['outlook']+'.svg';
     });
  }
  getFutureData(){
    this._dataService.getFutureDataService()
    .subscribe(res=>{this.futureData = res['data'];
     console.log(res)});
  }
}
