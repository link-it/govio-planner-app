import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovioFilesComponent } from './govio-files.component';
import { GovioFileDetailsComponent } from './govio-file-details/govio-file-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: { breadcrumb: 'GovIOFiles' },
        component: GovioFilesComponent
      },
      {
        path: ':id',
        data: { breadcrumb: ':id' },
        component: GovioFileDetailsComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GovioFilesRoutingModule {}
