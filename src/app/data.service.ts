import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  result:any; // shared global variable.

  constructor(private _http: Http) { // instanciate the HTTP service used to call the api.

  }
/*When a component calls the data service module it acts like an object. and call these methods by
dataservice.methodName(args**); that will call the http request to the api get the result and
return it o the calling function.*/
  getDatabases(){
    return this._http.get("/api/databases")
    .map(result=> this.result = result.json().data);
  }//.json() noSQL Databse outputs to json format so we have to ensure that, it remains so after its been collected by the api and passed here


  getNotifications(){
    return this._http.get("/api/notifications")
    .map(result=> this.result = result.json());
  }

  deleteNotifications(id){
    return this._http.delete('/api/deleteNotifications/'+id) //this is how data is passed via a url. the api is set up to take ID as a parameter.
    .map(result=> this.result = result.json().data);
  }

  getCurrentStatus(){
    return this._http.get("/api/currentStatus")
    .map(result=> this.result = result.json());
  }

  postPreferences(submission){
    return this._http.post("/api/definedVars", submission)
    .map(result => this.result = result.json()); //.map(take the result from the api and saves it in our global)
  }

  getGraphData(startDate,endDate){
    return this._http.get("/api/graphData/"+startDate+"/"+endDate)
    .map(result=> this.result = result.json());

}

  getUserDefined(){
    return this._http.get("/api/getUserVariables")
    .map(result=>this.result = result.json());
  }

  getFutureDataService(){
    return this._http.get("/api/futureData")
    .map(result=>this.result = result.json());
  }
}
