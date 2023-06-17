import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './Layout/aside/aside.component';
import { MainComponent } from './Layout/main/main.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { MainPageComponent } from './SmartAttendance/Component/Dashboard/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Libraries/angular-material/angular-material.module';
import { LoginComponent } from './Layout/login/login/login.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FirstLoginComponent } from './Layout/login/first-login/first-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    MainPageComponent,
    FirstLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgxQRCodeModule,
    // FlatpickrModule.forRoot(),
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
