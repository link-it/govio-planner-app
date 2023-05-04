import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { ComponentsModule } from 'projects/components/src/lib/components.module';

import { ExpirationFilesComponent } from './expiration-files.component';
import { ExpirationFilesRoutingModule } from './expiration-files-routing.module';
import { ExpirationFileDetailsModule } from './expiration-file-details/expiration-file-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    VendorsModule,
    ComponentsModule,
    ExpirationFilesRoutingModule,
    ExpirationFileDetailsModule
  ],
  declarations: [
    ExpirationFilesComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpirationFilesModule { }
