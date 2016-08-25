import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work.component';

export const routes: Routes = [
  { path: 'work', component: WorkComponent },
];


export const routing = RouterModule.forChild(routes);
