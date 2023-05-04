import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { ComponentsModule } from 'projects/components/src/lib/components.module';
import { HasPermissionModule } from '../../../directives/has-permission/has-permission.module';

import { GovioFileDetailsComponent } from './govio-file-details.component';
import { GovioFileDetailsRoutingModule } from './govio-file-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    VendorsModule,
    ComponentsModule,
    HasPermissionModule,
    GovioFileDetailsRoutingModule
  ],
  declarations: [
    GovioFileDetailsComponent
  ],
  exports: [GovioFileDetailsComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GovioFileDetailsModule { }
