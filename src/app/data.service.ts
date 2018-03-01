import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  result:any;
  constructor(private _http: Http) { }

  getDatabases(){
    return this._http.get("/api/databases")
    .map(result=> this.result = result.json().data);
  }

  getNotifications(){
    return this._http.get("/api/notifications")
    .map(result=> this.result = result.json());
  }

  deleteNotifications(id){
    console.log("/api/deleteNotifications/"+id);
    return this._http.delete('/api/deleteNotifications/'+id)
    .map(result=> this.result = result.json().data);
  }

  getCurrentStatus(){
    return this._http.get("/api/currentStatus")
    .map(result=> this.result = result.json());
  }

  postPreferences(submission){
    return this._http.post("/api/definedVars", submission)
    .map(result => this.result = result.json());
  }

  getGraphData(startDate,endDate){
    console.log("1 "+startDate+"enddate "+endDate);
    return this._http.get("/api/graphData/"+startDate+"/"+endDate)
    .map(result=> this.result = result.json());

}

  getUserDefined(){
    console.log("Entered ther Dataservice");
    return this._http.get("/api/getUserVariables")
    .map(result=>this.result = result.json());
  }

  getFutureDataService(){
    console.log("retrieving latest future data predictions")
    return this._http.get("/api/futureData")
    .map(result=>this.result = result.json());
  }
}
