import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { ComponentsModule } from 'projects/components/src/lib/components.module';
import { HasPermissionModule } from '../../../directives/has-permission/has-permission.module';

import { ExpirationFileDetailsComponent } from './expiration-file-details.component';
import { ExpirationFileDetailsRoutingModule } from './expiration-file-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    VendorsModule,
    ComponentsModule,
    HasPermissionModule,
    ExpirationFileDetailsRoutingModule
  ],
  declarations: [
    ExpirationFileDetailsComponent
  ],
  exports: [ExpirationFileDetailsComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpirationFileDetailsModule { }
