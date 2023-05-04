import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpirationFileDetailsComponent } from './expiration-file-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ExpirationFileDetailsComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpirationFileDetailsRoutingModule {}
