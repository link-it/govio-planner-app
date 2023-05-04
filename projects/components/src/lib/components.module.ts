import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';

import { HeadBarComponent } from './head-bar/head-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpidComponent } from './spid/spid.component';
import { YesnoDialogBsComponent } from './dialogs/yesno-dialog-bs/yesno-dialog-bs.component';
import { MultiSnackbarComponent } from './dialogs/multi-snackbar/multi-snackbar.component';
import { TextBoxHighlighterComponent } from './text-box-highlighter/text-box-highlighter.component';

// UI
import { BreadcrumbModule } from './ui/breadcrumb/breadcrumb.module';
import { BoxMessageModule } from './ui/box-message/box-message.module';
import { BoxSpinnerModule } from './ui/box-spinner/box-spinner.module';
import { FormReadonlyModule } from './ui/form-readonly/form-readonly.module';
import { DataTypeModule } from './ui/data-type/data-type.module';
import { DataViewModule } from './ui/data-view/data-view.module';
import { BoxCollapseModule } from './ui/box-collapse/box-collapse.module';
// import { SearchBarModule } from './ui/search-bar/search-bar.module';
import { SearchBarFormModule } from './ui/search-bar-form/search-bar-form.module';
import { ItemTypeModule } from './ui/item-type/item-type.module';
import { ItemRowModule } from './ui/item-row/item-row.module';
import { InputHelpModule } from './ui/input-help/input-help.module';
import { AddEditValueModule } from './ui/add-edit-value/add-edit-value.module';
import { AppSwitcherModule } from './ui/app-switcher/app-switcher.module';
import { FileUploaderModule } from './ui/file-uploader/file-uploader.module';
import { PhotoBase64Module } from './ui/photo-base64/photo-base64.module';
import { FlexTableModule } from './flex-table/flex-table.module';

// Pipes
import { PluralTranslatePipe } from './pipes/plural-translate.pipe';
import { PropertyFilterPipe } from './pipes/service-filters';
import { OrderByPipe } from './pipes/ordeby.pipe';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MapperPipe } from './pipes/mapper.pipe';

// Directives
import { RouterLinkMatchDirective } from './directives/router-link-match.directive';
import { HtmlAttributesDirective } from './directives/html-attr.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { TextUppercaseModule } from './directives/uppercase.module';
import { TextLowercaseModule } from './directives/lowercase.module';
import { CountUpeModule } from './directives/count-up.module';
import { MarkAsteriskModule } from './directives/mark-asterisk.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VendorsModule,

    // UI
    BreadcrumbModule,
    BoxMessageModule,
    BoxSpinnerModule,
    FormReadonlyModule,
    DataTypeModule,
    DataViewModule,
    BoxCollapseModule,
    // SearchBarModule,
    SearchBarFormModule,
    ItemTypeModule,
    ItemRowModule,
    InputHelpModule,
    AddEditValueModule,
    AppSwitcherModule,
    FileUploaderModule,
    PhotoBase64Module,
    FlexTableModule,

    // Directives
    TextUppercaseModule,
    TextLowercaseModule,
    CountUpeModule,
    MarkAsteriskModule
  ],
  declarations: [
    HeadBarComponent,
    SpinnerComponent,
    SpidComponent,
    YesnoDialogBsComponent,
    MultiSnackbarComponent,
    TextBoxHighlighterComponent,

    // Pipes
    PluralTranslatePipe,
    PropertyFilterPipe,
    OrderByPipe,
    HighlighterPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    MapperPipe,

    // Directives
    RouterLinkMatchDirective,
    HtmlAttributesDirective,
    ClickOutsideDirective
  ],
  exports: [
    // UI
    BreadcrumbModule,
    BoxMessageModule,
    BoxSpinnerModule,
    FormReadonlyModule,
    DataTypeModule,
    DataViewModule,
    BoxCollapseModule,
    // SearchBarModule,
    SearchBarFormModule,
    ItemTypeModule,
    ItemRowModule,
    InputHelpModule,
    AddEditValueModule,
    AppSwitcherModule,
    FileUploaderModule,
    PhotoBase64Module,
    FlexTableModule,

    HeadBarComponent,
    SpinnerComponent,
    SpidComponent,
    // YesnoDialogComponent,
    YesnoDialogBsComponent,
    MultiSnackbarComponent,
    TextBoxHighlighterComponent,

    // Pipes
    PluralTranslatePipe,
    PropertyFilterPipe,
    OrderByPipe,
    HighlighterPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    MapperPipe,

    // Directives
    RouterLinkMatchDirective,
    HtmlAttributesDirective,
    ClickOutsideDirective,
    TextUppercaseModule,
    TextLowercaseModule,
    CountUpeModule,
    MarkAsteriskModule    
  ]
})
export class ComponentsModule { }
