import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {
    allNotifications = [];

    constructor(private _dataService: DataService){
    }

    deleteNotification(event){ // the button click sends an event to this method and the value is the document id, this is used to delete theough the api.
      this._dataService.deleteNotifications(event.target.value)
      .subscribe(res => {
        this.getNotifications(); // get the notifcations after the delete so the page automatically refreshes to the user.
      });
    }

    getNotifications(){
      this._dataService.getNotifications()
      .subscribe(res => this.allNotifications = res);
    }

  ngOnInit() {
    this.getNotifications();
  }

}/*End of Class*/
