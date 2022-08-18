import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

// import { Amplify } from 'aws-amplify';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { HttpInterceptorProviders } from './interceptors/interceptor-provider';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgxSpinnerModule } from 'ngx-spinner';

// Amplify.configure(environment.cognito);

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AmplifyAngularModule,
    AmplifyAuthenticatorModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,NgxSpinnerModule
  ],
  providers: [AmplifyService, AuthGuard, HttpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
