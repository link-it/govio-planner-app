import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovioFileDetailsComponent } from './govio-file-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GovioFileDetailsComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GovioFileDetailsRoutingModule {}
