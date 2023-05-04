import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';
import { ComponentsModule } from 'projects/components/src/lib/components.module';

import { GovioFilesComponent } from './govio-files.component';
import { GovioFilesRoutingModule } from './govio-files-routing.module';
import { GovioFileDetailsModule } from './govio-file-details/govio-file-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    VendorsModule,
    ComponentsModule,
    GovioFilesRoutingModule,
    GovioFileDetailsModule
  ],
  declarations: [
    GovioFilesComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GovioFilesModule { }
