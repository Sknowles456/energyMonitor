webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.databases = [];
        this._dataService.getDatabases()
            .subscribe(function (res) { return _this.databases = res; });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__charts_charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__graph_graph_component__["a" /* GraphComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'allNotifications',
                        component: __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_component__["a" /* NotificationsComponent */]
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'reports',
                        component: __WEBPACK_IMPORTED_MODULE_11__reports_reports_component__["a" /* ReportsComponent */]
                    }, {
                        path: 'settings',
                        component: __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */]
                    }, {
                        path: 'charts',
                        component: __WEBPACK_IMPORTED_MODULE_13__charts_charts_component__["a" /* ChartsComponent */]
                    }, {
                        path: 'graph',
                        component: __WEBPACK_IMPORTED_MODULE_14__graph_graph_component__["a" /* GraphComponent */]
                    },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart{\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      display: block;\r\n\r\n}\r\n.grid{\r\n      padding-left: 10%;\r\n      padding-right: 10%;\r\n\r\n}\r\n.feedbackText{\r\n  color:black;\r\n  font-size:16px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"graph\" class=\"text-center container-fluid\">\n\n  <form #dateChartForm=\"ngForm\" (ngSubmit)=\"getChartData(dateChartForm.value)\">\n    <label>Start Date</label>\n    <input type=\"date\" name=\"startDate\" ngModel/>\n    <label>End Date</label>\n    <input type=\"date\" name=\"endDate\"  ngModel/>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!dateChartForm.form.valid\">Submit</button>\n  </form>\n\n  <div class=\"text-center\" *ngIf=\"date1\">\n    <h3 class=\"muted\">{{date1}} / {{date2}}</h3>\n  </div>\n\n  <div class=\"container-fluid grid\" style=\"margin:auto; display:inline-block\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-5\">\n        <div class=\"card\" >\n          <canvas id=\"canvas4\"class=\"chart\" >{{chart4}}</canvas>\n          <h3>Lighting</h3>\n          <div class=\"feedbackText\"*ngFor=\"let feedback of lightingFeedback\">\n            <p>{{feedback}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-5\">\n        <div class=\"card\" >\n          <canvas id=\"canvas\" class=\"card-top chart\">{{chart}}</canvas>\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">Occupancy</h3>\n            <div class=\"feedbackText\" *ngFor=\"let feedback of occupancyFeedback\">\n              <p>{{feedback}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-5\">\n        <div class=\"text-center\" >\n        <canvas id=\"canvas2\" class=\"chart\">{{chart2}}</canvas>\n        <h3>Temperature</h3>\n        <div class=\"feedbackText\"*ngFor=\"let feedback of tempFeedback\">\n          <p>{{feedback}}</p>\n        </div>\n        </div>\n      </div>\n      <div class=\"col-xs-5\">\n         <div class=\"text-center\" >\n          <canvas id=\"canvas3\" class=\"chart\">{{chart3}}</canvas>\n          <h3>Humidity</h3>\n          <div class=\"feedbackText\" *ngFor=\"let feedback of humidityFeedback\">\n            <p>{{feedback}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom__ = __webpack_require__("../../../../chartjs-plugin-zoom/src/chart.zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(_dataService, _element) {
        var _this = this;
        this._dataService = _dataService;
        this._element = _element;
        this.occupancyFeedback = [];
        this.tempFeedback = [];
        this.humidityFeedback = [];
        this.lightingFeedback = [];
        this._dataService.getUserDefined()
            .subscribe(function (res) {
            _this.userData = {
                "temperature": res['data'].map(function (res) { return res.temperature; }),
                "humidity": res['data'].map(function (res) { return res.humidity; }),
                "light": res['data'].map(function (res) { return res.light; })
            };
        });
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.createCharts();
        this.cont = document.getElementById("canvas");
    };
    ChartsComponent.prototype.getChartData = function (formData) {
        this.date1 = formData.startDate;
        this.date2 = formData.endDate;
        var epochStart = 0;
        var epochEnd = 0;
        if (formData.startDate) {
            epochStart = new Date(formData.startDate).getTime();
            epochEnd = new Date(formData.endDate).getTime();
        }
        this.createCharts(epochStart, epochEnd);
    };
    ChartsComponent.prototype.createCharts = function (startDate, endDate) {
        var _this = this;
        if (startDate === void 0) { startDate = 0; }
        if (endDate === void 0) { endDate = 0; }
        //########### DESTROY EXISTING CHART REFS ############################
        if (this.chart) {
            this.chart.destroy();
        }
        ;
        if (this.chart2) {
            this.chart2.destroy();
        }
        ;
        if (this.chart3) {
            this.chart3.destroy();
        }
        ;
        if (this.chart4) {
            this.chart4.destroy();
        }
        ;
        this._dataService.getGraphData(startDate, endDate)
            .subscribe(function (res) {
            //IF date is selected
            var startDateString;
            var endDateString;
            if (startDate == 0) {
                var endEpoch = new Date().getTime();
                var startEpoch = endEpoch - 86400000;
                startDateString = new Date(startEpoch);
                endDateString = new Date(endEpoch);
            }
            else {
                startDateString = new Date(startDate);
                endDateString = new Date(endDate);
                startDateString = startDateString.toString();
                endDateString = endDateString.toString();
                startDateString = startDateString.substring(0, 10);
                endDateString = endDateString.substring(0, 10);
            }
            //################### OCCUPANCY LOOP CHECK ############################
            var occupancyIn = 0;
            var occupancyOut = 0;
            for (var i = 0; i < res['data'].length; i++) {
                if (res['data'][i]['occupied'] == "Empty") {
                    occupancyOut += 1;
                }
                else {
                    occupancyIn += 1;
                }
            }
            ;
            //###################### CHART 1 OCCUPANCY #################################
            _this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(_this.cont, {
                type: 'pie',
                data: {
                    datasets: [{
                            data: [occupancyIn, occupancyOut],
                            backgroundColor: ["green", "red"],
                            label: "Living Occupancy"
                        }],
                    labels: ["Occupied", "Empty"]
                },
                options: {
                    responsive: false
                }, title: {
                    display: true,
                    text: 'Occupancy Daily'
                }
            });
            //########### FEED BACK #######################
            if (res['data'].length > 0) {
                _this.occupancyFeedback = [];
                _this.occupancyFeedback.push("The Property has been vacant for approximatley " + (occupancyOut * 5) + " minutes between" + startDateString + " and " + endDateString);
                _this.occupancyFeedback.push("The Property has NOT been vacant for approximatley " + (occupancyIn * 5) + " minutes between" + startDateString + " and " + endDateString);
                if (occupancyOut > occupancyIn) {
                    _this.occupancyFeedback.push("More time is spent outside of this Room");
                }
                else if (occupancyOut == occupancyIn) {
                    _this.occupancyFeedback.push("Equal time is spent In and Out of this Room");
                }
                else {
                    _this.occupancyFeedback.push("This is a frequently used room");
                }
                ;
            }
            else {
                _this.occupancyFeedback.push("No Data Available");
            }
            ;
            //######### TEMPERATURE TARGET LOOP CHECK ###############################
            var belowTarget = 0;
            var aboveTarget = 0;
            var onTarget = 0;
            var maxTemp = 0;
            var minTemp = 0;
            var averageTemp = 0;
            var ctx = document.getElementById("canvas2");
            minTemp = res['data'][0]['temp'];
            maxTemp = res['data'][0]['temp'];
            for (var i = 0; i < res['data'].length; i++) {
                averageTemp = averageTemp + parseInt(res['data'][i]['temp']);
                if (res['data'][i]['temp'] > maxTemp) {
                    maxTemp = res['data'][i]['temp'];
                }
                ;
                if (res['data'][i]['temp'] < minTemp) {
                    minTemp = res['data'][i]['temp'];
                }
                ;
                if ((res['data'][i]['temp'] - _this.userData['temperature']) < -2) {
                    belowTarget += 1;
                }
                else if ((res['data'][i]['temp'] - _this.userData['temperature']) > 2) {
                    aboveTarget += 1;
                }
                else {
                    onTarget += 1;
                }
            }
            ;
            var averageTempResult = averageTemp / res['data'].length;
            //########################### CHART 2 Temperature Targets #############################"
            _this.chart2 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(ctx, {
                type: 'pie',
                data: {
                    datasets: [{
                            data: [belowTarget, aboveTarget, onTarget],
                            backgroundColor: ["green", "red", "blue"],
                            label: "Status"
                        }],
                    labels: ["belowTarget", "aboveTarget", "onTarget - " + _this.userData['temperature']]
                },
                options: {
                    responsive: false
                }, title: {
                    display: true,
                    text: 'Targets Daily'
                }
            });
            //####################### FEEDBACK ###########################
            _this.tempFeedback = [];
            if (res['data'].length > 0) {
                _this.tempFeedback.push("The MAXIMUM temperature reached between " + startDateString + " - " + endDateString + " is " + maxTemp);
                _this.tempFeedback.push("The MINIMUM temperature reached between " + startDateString + " - " + endDateString + " is " + minTemp);
                _this.tempFeedback.push("The AVERAGEtemperature reached between " + startDateString + " - " + endDateString + " is " + averageTempResult);
                if (belowTarget > aboveTarget) {
                    _this.tempFeedback.push("The room is more frequently below expectations");
                }
                else if (belowTarget == aboveTarget) {
                    _this.tempFeedback.push("The room has extreme fluctations around the expected temperature");
                }
                else {
                    _this.tempFeedback.push("This room is being over utilised with its energy usage");
                }
                ;
            }
            else {
                _this.tempFeedback.push("NO Data Available");
            }
            ;
            //################## HUMIDITY LOOP CHECK #############################
            var belowTargetHum = 0;
            var aboveTargetHum = 0;
            var onTargetHum = 0;
            var minHum;
            var maxHum;
            var averageHum = 0;
            ;
            minHum = res['data'][0]['humidity'];
            maxHum = res['data'][0]['humidity'];
            var ctx3 = document.getElementById("canvas3");
            for (var i = 0; i < res['data'].length; i++) {
                if (res['data'][i]['humidity'] > maxHum) {
                    maxHum = res['data'][i]['humidity'];
                }
                ;
                if (res['data'][i]['humidity'] < minHum) {
                    minHum = res['data'][i]['humidity'];
                }
                ;
                averageHum = averageHum + parseInt(res['data'][i]['humidity']);
                console.log(res['data'][i]['humidity']);
                if (res['data'][i]['humidity'] < 60) {
                    belowTargetHum += 1;
                }
                else if ((res['data'][i]['humidity'] - _this.userData['humidity']) > 5) {
                    aboveTargetHum += 1;
                }
                else {
                    onTargetHum += 1;
                }
            }
            ;
            console.log("avergaehum" + averageHum);
            console.log("reslength" + res['data'].length);
            var averageHumResult = averageHum / res['data'].length;
            //############################### Humidity Chart ########################################
            _this.chart3 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(ctx3, {
                type: 'pie',
                data: {
                    datasets: [{
                            data: [belowTargetHum, aboveTargetHum, onTargetHum],
                            backgroundColor: ["green", "red", "blue"],
                            label: "Status"
                        }],
                    labels: ["Danger < 60%", "aboveTarget", "onTarget - " + _this.userData['humidity']]
                },
                options: {
                    responsive: false
                }, title: {
                    display: true,
                    text: 'Targets Daily'
                }
            });
            //############## FEED BACK #######################
            _this.humidityFeedback = [];
            if (res['data'].length > 0) {
                _this.humidityFeedback.push("The MAXIMUM temperature reached between " + startDateString + " - " + endDateString + " is " + maxHum);
                _this.humidityFeedback.push("The MINIMUM temperature reached between " + startDateString + " - " + endDateString + " is " + minHum);
                _this.humidityFeedback.push("The AVERAGE temperature reached between " + startDateString + " - " + endDateString + " is " + averageHumResult);
                if (belowTargetHum > aboveTargetHum) {
                    _this.humidityFeedback.push("The rooms humidity is more frequently below expectations");
                }
                else {
                    _this.humidityFeedback.push("This room has too much moisture for a prolonged period");
                }
                ;
                if (averageHumResult > 70) {
                    _this.humidityFeedback.push("The room needs to be vented more to prevent mildew build up");
                }
                ;
            }
            else {
                _this.humidityFeedback.push("NO Data Available");
            }
            ;
            //##################### Lighting Levels ########################
            var lighting = [];
            lighting['Dull'] = 0;
            lighting['Good Light'] = 0;
            lighting['Bright'] = 0;
            lighting['Extremeley Bright'] = 0;
            lighting['Dark'] = 0;
            var ctx4 = document.getElementById("canvas4");
            for (var i = 0; i < res['data'].length; i++) {
                if (res['data'][i]['light'] == "Dark") {
                    lighting['Dark'] += 1;
                }
                else if (res['data'][i]['light'] == "Dull") {
                    lighting['Dull'] += 1;
                }
                else if (res['data'][i]['light'] == "Dark") {
                    lighting['Dark'] += 1;
                }
                else if (res['data'][i]['light'] == "Good Light") {
                    lighting['Good Light'] += 1;
                }
                else if (res['data'][i]['light'] == "Bright") {
                    lighting['Bright'] += 1;
                }
                else if (res['data'][i]['light'] == "Extremeley Bright") {
                    lighting['Extremeley Bright'] += 1;
                }
            }
            ;
            var labels = ["Dull", "Dark", "Good Light", "Bright", "Extremeley Bright"];
            for (var i = 0; i < labels.length; i++) {
                if (labels[i] == _this.userData['light']) {
                    labels[i] = "Target -" + _this.userData['light'].toString();
                }
            }
            //######################## Lighting Chart ################################################
            _this.chart4 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(ctx4, {
                type: 'pie',
                data: {
                    datasets: [{
                            data: [lighting['Dull'], lighting['Dark'], lighting['Good Light'], lighting['Bright'], lighting['Extremeley Bright']],
                            backgroundColor: ["grey", "black", "green", "orange", "yellow"],
                            label: "Status"
                        }],
                    labels: labels
                },
                options: {
                    responsive: false
                }, title: {
                    display: true,
                    text: 'Targets Daily'
                }
            });
            //##################### Lighitng Feeback #####################
            _this.lightingFeedback = [];
            if (res['data'].length > 0) {
                if (lighting['Extremely Bright']) {
                    _this.lightingFeedback.push("There have been periods of extremeley bright lighting, use natural light where possible");
                }
                var lightingPercent = 0;
                if (lighting[_this.userData['light']]) {
                    lightingPercent = (lighting[_this.userData['light']] / res['data'].length) * 100;
                }
                _this.lightingFeedback.push('The target lighting has been reached ' + lightingPercent + '  of the time');
            }
            else {
                _this.lightingFeedback.push("NO Data Available");
            }
            ;
        });
        /*END OF CHART METHOD*/
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-charts',
            template: __webpack_require__("../../../../../src/app/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ChartsComponent);
    return ChartsComponent;
}()); /* END OF CLASS*/



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getDatabases = function () {
        var _this = this;
        return this._http.get("/api/databases")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getNotifications = function () {
        var _this = this;
        return this._http.get("/api/notifications")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.deleteNotifications = function (id) {
        var _this = this;
        console.log("/api/deleteNotifications/" + id);
        return this._http.delete('/api/deleteNotifications/' + id)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getCurrentStatus = function () {
        var _this = this;
        return this._http.get("/api/currentStatus")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.postPreferences = function (submission) {
        var _this = this;
        return this._http.post("/api/definedVars", submission)
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.getGraphData = function (startDate, endDate) {
        var _this = this;
        console.log("1 " + startDate + "enddate " + endDate);
        return this._http.get("/api/graphData/" + startDate + "/" + endDate)
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.getUserDefined = function () {
        var _this = this;
        console.log("Entered ther Dataservice");
        return this._http.get("/api/getUserVariables")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.getFutureDataService = function () {
        var _this = this;
        console.log("retrieving latest future data predictions");
        return this._http.get("/api/futureData")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"graph\" class=\"text-center\">\n  <form #dateForm=\"ngForm\" (ngSubmit)=\"getGraphData(dateForm.value)\">\n    <label>Start Date</label>\n    <input type=\"date\" name=\"startDate\" value=\"0\" ngModel/>\n    <label>End Date</label>\n    <input type=\"date\" name=\"endDate\" value=\"0\" ngModel/>\n    <select name=\"graphType\" ngModel>\n      <option value=\"Temperature\">Temperature</option>\n      <option value=\"Humidity\">Humidity</option>\n    </select>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!dateForm.form.valid\">Submit</button>\n  </form>\n  <div>\n    <button class=\"btn btn-primary\"  value='Charts' (click)=\"resetZoom()\">Reset Zoom/Pan</button>\n  </div>\n  <div >\n    <canvas id=\"canvas\">{{chart}}</canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom__ = __webpack_require__("../../../../chartjs-plugin-zoom/src/chart.zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_annotation__ = __webpack_require__("../../../../chartjs-plugin-annotation/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_annotation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_annotation__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphComponent = /** @class */ (function () {
    function GraphComponent(_dataService, _element) {
        var _this = this;
        this._dataService = _dataService;
        this._element = _element;
        this._dataService.getUserDefined()
            .subscribe(function (res) {
            _this.userData = {
                "temperature": res['data'].map(function (res) { return res.temperature; }),
                "humidity": res['data'].map(function (res) { return res.humidity; }),
                "light": res['data'].map(function (res) { return res.temp; })
            };
        });
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.createGraph(0, 0);
        this.cont = document.getElementById("canvas");
    };
    GraphComponent.prototype.resetZoom = function () {
        this.chart.resetZoom();
    };
    GraphComponent.prototype.getGraphData = function (formData) {
        console.log(formData);
        var epochStart = 0;
        var epochEnd = 0;
        this.chart.destroy();
        if (formData.startDate) {
            epochStart = new Date(formData.startDate).getTime();
            epochEnd = new Date(formData.endDate).getTime();
        }
        var graph = formData.graphType.toString();
        this.createGraph(epochStart, epochEnd, graph);
    };
    GraphComponent.prototype.createGraph = function (startDate, endDate, status) {
        var _this = this;
        if (status === void 0) { status = 'Temperature'; }
        this._dataService.getGraphData(startDate, endDate)
            .subscribe(function (res) {
            var userVar = [];
            var resDates = [];
            var graphVar = [];
            var outsideGraphVar = [];
            var userGraphVar;
            var timestamp;
            var annotationValue = 0;
            var min = 0;
            var max = 0;
            if (status == 'Temperature') {
                graphVar = res['data'].map(function (res) { return res.temp; });
                outsideGraphVar = res['data'].map(function (res) { return res.outside_temp; });
                userGraphVar = _this.userData['temperature'];
                max = 30;
            }
            else if (status == 'Humidity') {
                graphVar = res['data'].map(function (res) { return res.humidity; });
                outsideGraphVar = res['data'].map(function (res) { return res.outside_humidity; });
                userGraphVar = _this.userData['humidity'];
                max = 100;
            }
            timestamp = res['data'].map(function (res) { return res.timestamp; });
            timestamp.forEach(function (res) {
                var jsDate = new Date(res * 1000);
                resDates.push(jsDate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
            });
            _this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(_this.cont.getContext('2d'), {
                type: 'line',
                data: {
                    labels: resDates,
                    datasets: [
                        {
                            label: "Inside",
                            data: graphVar,
                            borderColor: 'blue',
                            fill: false
                        },
                        {
                            label: "Outside",
                            data: outsideGraphVar,
                            borderColor: 'red',
                            fill: false
                        },
                        {
                            label: "Target ",
                            borderColor: 'green',
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Housing Data'
                    },
                    legend: {
                        display: true
                    },
                    layout: {
                        padding: {
                            bottom: 150,
                            left: 20,
                            right: 20,
                            top: 50
                        }
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true,
                                scaleLabel: {
                                    labelString: 'Temperature C'
                                },
                                ticks: {
                                    min: min,
                                    max: max
                                }
                            }]
                    },
                    pan: {
                        enabled: true,
                    },
                    zoom: {
                        enabled: true,
                        mode: 'y'
                    },
                    annotation: {
                        drawTime: 'afterDatasetsDraw',
                        annotations: [{
                                type: 'line',
                                id: 'userLine',
                                drawTime: 'afterDatasetsDraw',
                                mode: 'horizontal',
                                scaleID: 'y-axis-0',
                                value: userGraphVar,
                                borderColor: 'green',
                                borderWidth: 2
                            }]
                    }
                }
            }); /*END OF CHART*/
        }); /* END OF SERVICE CALL*/
    }; /* END OF METHOD */
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], GraphComponent);
    return GraphComponent;
}()); /* END OF CLASS*/



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\" *ngIf=\"currentStatus\">\n    <h1 class=\"display-1\">Welcome to Energy Saver</h1>\n    <div class=\"w-150\"></div>\n    <h3>Property</h3>\n    <div ><b>Property:</b> {{currentStatus[0]['room']}}</div>\n    <div ><b>Occupancy:</b> {{currentStatus[0]['occupied']}}</div>\n    <div ><b>DateTime:</b> {{currentStatus[0]['timestamp']* 1000 | date:'yy-MMM-dd h:mm '}}</div>\n\n    <!-- Force next columns to break to new line -->\n    <div class=\"w-150\"></div>\n    <h3>Inside Status</h3>\n    <div ><b>Temperature:</b> {{currentStatus[0]['temp']}}&deg;C</div>\n    <div><b>Humidity:</b> {{currentStatus[0]['humidity']}}%</div>\n    <div ><b>Lumos:</b> {{currentStatus[0]['light']}}</div><!--ng if for an image of a bulb or somthing-->\n\n    <!-- Force next columns to break to new line -->\n    <div class=\"w-150\"></div>\n    <h3>Outside Status</h3>\n    <div ><b>Outside Humidity:</b> {{currentStatus[0]['outside_humidity']}}</div>\n    <div ><b>UV Level:</b> {{currentStatus[0]['outside_UV']}}</div>\n    <div ><b>Weather:</b> <img src='{{path}}' height=\"30\" width=\"30\" /></div>\n    <div ><b>Outside Temperature:</b> {{currentStatus[0]['outside_temp']}}&deg;C</div>\n\n    <div class=\"w-150\"></div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"...\" alt=\"Future Info\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Predictions in 1hr</h4>\n        <p class=\"card-text\">The future prediction in  an hours time.</p>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li><b>Temperature:</b>\n        <p>{{futureData[0]['Temperature']| number : '1.2-2'}}</p></li>\n        <li><b>Humidity:</b><p> {{futureData[0]['Humidity']| number : '1.2-2'}}</p></li>\n        <li><b>Empty:</b><p> {{futureData[0]['Occupancy']['out']| number : '1.2-2'}}%</p></li>\n      </ul>\n    </div>\n    <div ><b>Humidity:</b><p> {{futureData[0]['Humidity']| number : '1.2-2'}}</p></div>\n    <div ><b>Occupied:</b><p> {{futureData[0]['Occupancy']['in']| number : '1.2-2'}}%</p></div>\n    <div ><b>Empty:</b><p> {{futureData[0]['Occupancy']['out']| number : '1.2-2'}}%</p></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService) {
        this._dataService = _dataService;
        this.currentStatus = [];
        this.helperArray = [];
        this.futureData = [];
        this.getCurrentStatus();
        this.getFutureData();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.futureId = setInterval(function () {
            _this.getFutureData();
        }, 300000);
        this.id = setInterval(function () {
            _this.getCurrentStatus();
        }, 300000);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
            clearInterval(this.futureId);
        }
    };
    HomeComponent.prototype.getCurrentStatus = function () {
        var _this = this;
        this._dataService.getCurrentStatus()
            .subscribe(function (res) {
            _this.currentStatus = res;
            _this.helperArray = _this.currentStatus['data']['docs'];
            _this.currentStatus = _this.helperArray;
            _this.path = '../../assets/' + _this.currentStatus[0]['outlook'] + '.svg';
        });
    };
    HomeComponent.prototype.getFutureData = function () {
        var _this = this;
        this._dataService.getFutureDataService()
            .subscribe(function (res) {
            _this.futureData = res['data'];
            console.log(res);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-bar:hover {\r\n  opacity:0.5;\r\n  color:black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class = \"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">EnergySAVE</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"icon-bar \"><a href=\"#\">Home</a></li>\n        <li class=\"icon-bar \"><a href ='/reports'>Reports</a></li>\n        <li class=\"icon-bar\"><a href ='/settings'>Settings</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" role =\"button\">Notifications <span class=\"badge\" *ngIf=\"notifications\">{{notifications.total}}</span>\n        <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\" style=\"width:300px;\">\n          <div *ngFor=\"let notifs of notifications.data.docs\" style=\"padding-left:10px;padding-right:10px;\" class=\"view overlay\">\n            <li >{{notifs.notifications[0]|slice:0:30}}...</li>\n            <hr>\n          </div>\n          <li><a routerLink=\"/allNotifications\">see More</a></li>\n        </ul>\n      </li>\n      </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_dataService) {
        this._dataService = _dataService;
        this.notifications = [];
        this.splitArray = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNavNotifications();
        setInterval(function () {
            _this.getNavNotifications();
        }, 300000);
    };
    NavigationComponent.prototype.getNavNotifications = function () {
        var _this = this;
        this._dataService.getNotifications()
            .subscribe(function (res) {
            _this.notifications = res;
            _this.splitArray = _this.notifications['data']['docs'].slice(0, 5);
            _this.notifications['data']['docs'] = _this.splitArray;
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive\">\n  <thead class=\"blue-grey\">\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\" style=\"max-width:50%\">Description</th><span></span>\n    <th scope=\"col\">Time</th><span></span>\n    <th scope=\"col\">remove</th>\n  </tr>\n  </thead>\n  <tbody class=\"table-striped table-hover\" *ngFor=\"let notifs of allNotifications.data.docs | paginate:{ itemsPerPage :5, currentPage: p}\">\n    <tr>\n      <th scope=\"row\"> </th>\n      <td style=\"max-width:50%\">{{notifs.notifications}}</td><span></span>\n      <td>{{notifs.timestamp * 1000 | date:'yyyy-MM-dd HH:mm:ss '}}</td><span></span>\n      <td ><button class=\"btn btn-primary\" (click)= 'deleteNotification($event)' value='{{notifs._id}},{{notifs._rev}}'>Remove(Double-Click)</button></td>\n    </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"p =$event\" class=\"text-center\"></pagination-controls>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(_dataService) {
        this._dataService = _dataService;
        this.allNotifications = [];
        this.deleteConfirmation = [];
    }
    NotificationsComponent.prototype.deleteNotification = function (event) {
        var _this = this;
        console.log(event.target.value);
        this._dataService.deleteNotifications(event.target.value)
            .subscribe(function (res) {
            _this.deleteConfirmation = res;
            _this.getNotifications();
        });
    };
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this._dataService.getNotifications()
            .subscribe(function (res) { return _this.allNotifications = res; });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container:hover .overlay{\r\n  opacity:0.8;\r\n}\r\n.container-fluid{\r\n    text-align: center;\r\n    margin:-40px;\r\n}\r\n.container{\r\n  float:left;\r\n  width:45%;\r\n  text-align: center;\r\n  margin:40px;\r\n}\r\n.overlay{\r\n  width:45%;\r\n  height:90%;\r\n  opacity:0;\r\n  -webkit-transition:.8s ease;\r\n  transition:.8s ease;\r\n  background-color:#daec4c;\r\n  position:absolute;\r\n  top:55px;\r\n  border-radius:10;\r\n  border-style:outset;\r\n}\r\n.image {\r\n  display: block;\r\n  width: 100%;\r\n  height: 80%;\r\n}\r\n.text{\r\n  color: black;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 30%;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<a href=\"/graph\">\r\n    <div class=\"container\">\r\n      <img src=\"../assets/graphpic.PNG\" class=\"image\">\r\n      <div class=\"overlay\">\r\n        <div class=\"text\">\r\n          <p>Line Graphs</p>\r\n          <p>View Temperature and Humidity on a line graph, displaying Inside Status, Outside Status and  Target status.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</a>\r\n\r\n<a href=\"/charts\">\r\n  <div class=\"container\">\r\n    <img src=\"../assets/graphpic.PNG\" class=\"image\">\r\n    <div class=\"overlay\">\r\n      <div class=\"text\">\r\n        <p>Pie Charts</p>\r\n        <p>Pie Charts displaying usage consumption and feedback on its use.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(_dataService, _element) {
        this._dataService = _dataService;
        this._element = _element;
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ReportsComponent);
    return ReportsComponent;
}()); /* END OF CLASS*/



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2> User Preferences </h2>\n  <form #preferenceForm=\"ngForm\" (ngSubmit)=\"addPreferences(preferenceForm.value)\">\n    <div class=\"form-group\">\n      <label>Property</label>\n      <select name=\"property\" required ngModel>\n        <option name=\"sho1\" value=\"sho1\">55 Heathwood, Bournemouth</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Temperature(&deg;C)</label>\n      <input type=\"number\" name=\"definedTemp\" min=\"15\" max=\"28\" placeholder=\"21\" class=\"form-control\" required ngModel>\n      <p class=\"text-muted\">The room temperature you wish to aim for</p>\n    </div>\n    <div class=\"form-group\">\n      <label>Humidity (%)</label>\n      <input type=\"number\" name=\"definedHumidity\" class=\"form-control\" min=\"60\" max=\"90\" placeholder=\"70\" required ngModel>\n      <p class=\"text-muted\">The room humidity you wish to have.</p>\n    </div>\n    <div class=\"form-group\">\n      <label>Light Level</label>\n      <select name=\"lumos\"  required ngModel>\n        <option name=\"dark\" value=\"Dark\" >Dark</option>\n        <option name=\"dull\" value=\"Dull\" >Dull</option>\n        <option name=\"dark\" value=\"Bright\" >Bright</option>\n        <option name=\"dark\" value=\"veryBright\" >Very Bright</option>\n      </select>\n      <p class=\"text-muted\">The room lumos you wish to have</p>\n    </div>\n    <button  type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!preferenceForm.form.valid\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_dataService) {
        this._dataService = _dataService;
    }
    SettingsComponent.prototype.addPreferences = function (submission) {
        var _this = this;
        this._dataService.postPreferences(submission)
            .subscribe(function (res) { return _this.responses = res; });
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map