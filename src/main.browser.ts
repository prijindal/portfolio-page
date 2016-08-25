import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

let _decorateComponentRef = function identity(value) { return value; };

if (process.env.ENV === 'production') {
  // Production
  disableDebugTools();
  enableProdMode();
  require('offline-plugin/runtime').install()

} else {

  _decorateComponentRef = (cmpRef) => {
    let _ng = (<any>window).ng;
    enableDebugTools(cmpRef);
    (<any>window).ng.probe = _ng.probe;
    (<any>window).ng.coreTokens = _ng.coreTokens;
    return cmpRef;
  };

}

platformBrowserDynamic().bootstrapModule(AppModule);
