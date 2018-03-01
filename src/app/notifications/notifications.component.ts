import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  allNotifications = [];
  deleteConfirmation = [];
    constructor(private _dataService: DataService){
    }

    deleteNotification(event){
      console.log(event.target.value);
      this._dataService.deleteNotifications(event.target.value)
      .subscribe(res => this.deleteConfirmation = res);
      this.getNotifications();

    }
    getNotifications(){
      this._dataService.getNotifications()
      .subscribe(res => this.allNotifications = res);
    }

  ngOnInit() {
    this.getNotifications();
  }

}
