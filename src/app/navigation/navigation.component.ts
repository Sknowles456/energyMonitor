import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  notifications = [];
  splitArray = [];
    constructor(private _dataService: DataService){

    }
  ngOnInit() {
    this.getNavNotifications();
    setInterval(()=>{
      this.getNavNotifications();
    },300000 );
  }
  getNavNotifications(){
    this._dataService.getNotifications()
    .subscribe(res => {
      this.notifications = res;
      this.splitArray = this.notifications['data']['docs'].slice(0,5);
      this.notifications['data']['docs'] = this.splitArray;

    });
  }
}
