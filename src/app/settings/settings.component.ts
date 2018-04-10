import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  responses:any;

  constructor(private _dataService: DataService) { //allow the dataservice object to be accessable in the component.

  }

  addPreferences(submission){
    this._dataService.postPreferences(submission) //pass on form data to the postPrefences method in the data services object.
    .subscribe(res => this.responses = res);
  }

  ngOnInit() {
  }

}
