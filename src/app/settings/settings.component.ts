import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  responses:any;

  constructor(private _dataService: DataService) {

  }

  addPreferences(submission){
    this._dataService.postPreferences(submission)
    .subscribe(res => this.responses = res);
  }

  ngOnInit() {
  }

}
