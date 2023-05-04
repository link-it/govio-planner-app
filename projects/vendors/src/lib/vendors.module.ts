import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule, ScrollDispatcher } from '@angular/cdk/overlay';
import { CdkScrollableModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MarkdownModule } from 'ngx-markdown';
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgSelectModule } from '@ng-select/ng-select';

const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.mm,
  rating: RATING.g,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderColor: 'rgba(255, 255, 255, 1)',
  hasBorder: true, // Set this flag to true to have a border by default
};

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    PortalModule,
    OverlayModule,
    CdkScrollableModule,
    DragDropModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MarkdownModule.forRoot(),
    GravatarModule.forRoot(gravatarConfig),
    InfiniteScrollModule,
    NgSelectModule,
    NgxChartsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    PortalModule,
    OverlayModule,
    CdkScrollableModule,
    DragDropModule,
    TooltipModule,
    ModalModule,
    MarkdownModule,
    GravatarModule,
    InfiniteScrollModule,
    NgSelectModule,
    NgxChartsModule
  ],
})
export class VendorsModule {
}
