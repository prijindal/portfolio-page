import { Routes, RouterModule } from '@angular/router';

import { FourOFour } from './404/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'work',
    pathMatch: 'full'
  },
  { path: '**', component: FourOFour },
];


export const routing = RouterModule.forRoot(routes);
