import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { AuthInterceptor  } from './data-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

import { RouterModule } from '@angular/router';
import { Approute } from './app-routes';
import { LoginPage } from './components/login-page/login-page';
import {MatInputModule,MatButtonModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { HeaderPage } from './components/header-page/header-page';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { Question1Component } from './components/question1/question1.component';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,DashboardComponent,HeaderPage, FooterComponent, Question1Component
  ],
  imports: [
    BrowserModule,HttpClientModule,MatInputModule,MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [ DataService, SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard, NotAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
