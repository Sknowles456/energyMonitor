import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule}  from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {DataService}  from './data.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotificationsComponent,
    HomeComponent,
    ReportsComponent,
    SettingsComponent,
    ChartsComponent,
    GraphComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: 'allNotifications',
        component: NotificationsComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },{
        path: 'settings',
        component: SettingsComponent
      },{
        path: 'charts',
        component: ChartsComponent
      },{
        path: 'graph',
        component: GraphComponent
      },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
