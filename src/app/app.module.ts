import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { WorkModule } from './work';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    WorkModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [

  ]
})
export class AppModule {}
