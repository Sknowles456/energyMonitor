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
import { SettingsComponent } from './settings/settings.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphComponent } from './graph/graph.component';
//import components and modules used

@NgModule({//declaring the components used, these are files related to the variable weve imported through. ./app.component
  declarations: [
    AppComponent,
    NavigationComponent,
    NotificationsComponent,
    HomeComponent,
    SettingsComponent,
    ChartsComponent,
    GraphComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([ // This is how the pages are rooted too, we state the path and the component that path leads too.
      {
        path: 'allNotifications',
        component: NotificationsComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
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
  providers: [DataService],// the scripts that are used for middleware these are the express scripts. linking front end and the api.
  bootstrap: [AppComponent]
})
export class AppModule { }
