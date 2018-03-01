import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService}  from '../data.service';
import * as Chart from 'chart.js'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  constructor(private _dataService: DataService, private _element: ElementRef) {

  }

  ngOnInit() {

  }


}/* END OF CLASS*/
