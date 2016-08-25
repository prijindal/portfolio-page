import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './work.routes';

import { WorkComponent } from './work.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    WorkComponent
  ],
  bootstrap: [
    WorkComponent
  ],
  providers: [

  ]
})
export class WorkModule {}
