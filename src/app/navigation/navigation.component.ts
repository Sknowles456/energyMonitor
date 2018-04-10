import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  notifications = [];

    constructor(private _dataService: DataService){//data service needed in constructor to allow http access.

    }

  ngOnInit() {
    this.getNavNotifications();// on load get notifcations
    setInterval(()=>{ // every 5 minutes update the number of notifcations there are, this the interval of the model/notifcation python script.
      this.getNavNotifications();
    },300000 );
  }

  getNavNotifications(){
    this._dataService.getNotifications()
    .subscribe(res => {
      this.notifications = res;
      var splitArray = this.notifications['data']['docs'].slice(0,5); // slice the array so that we display only 5 of the total.(shown in nav drop down.)
      this.notifications['data']['docs'] = splitArray;

    });
  }/*End of Method*/

}/*end of class*/
