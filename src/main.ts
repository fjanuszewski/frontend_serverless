import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { environment } from './environments/environment';

/**
 * Con esta invocación se establece la conexión de la aplicación con AWS-COGNITO
 */
Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
