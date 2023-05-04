import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexTableComponent } from './flex-table.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FlexTableComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FlexTableComponent
  ]
})
export class FlexTableModule { }
