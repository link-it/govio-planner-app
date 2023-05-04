import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpirationFilesComponent } from './expiration-files.component';
import { ExpirationFileDetailsComponent } from './expiration-file-details/expiration-file-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: { breadcrumb: 'ExpirationFiles' },
        component: ExpirationFilesComponent
      },
      {
        path: ':id',
        data: { breadcrumb: ':id' },
        component: ExpirationFileDetailsComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpirationFilesRoutingModule {}
