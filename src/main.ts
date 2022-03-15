import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

/**
 * Code genéré dû à la version 12 de Angular
 */
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }

