import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { AuthGuard } from './auth.guard';
import { HttpInterceptorProviders } from './interceptors/interceptor-provider';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MinimalProvider, minimalProviderFactory } from './minimal-provider';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AmplifyAngularModule,
    AmplifyAuthenticatorModule,
    AppRoutingModule,
    FormsModule,SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [AuthGuard, HttpInterceptorProviders, {
    provide: APP_INITIALIZER, useFactory: minimalProviderFactory,deps:[MinimalProvider], multi:true
  }],
  bootstrap: [AppComponent],

})
export class AppModule {}
