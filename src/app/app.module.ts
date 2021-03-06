import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerModule,
} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardPage } from './dashboard/dashboard.page';
import * as SideMenuComponents from './side-menu-content/components';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    SideMenuComponents.CompleteOrderPage,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
