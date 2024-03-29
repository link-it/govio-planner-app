import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

import { TranslateService } from '@ngx-translate/core';

import { Tools } from 'projects/tools/src/lib/tools.service';
import { ConfigService } from 'projects/tools/src/lib/config.service';

import { environment } from '../environments/environment.prod';
import { registerLocaleData } from '@angular/common';

import localeEn from '@angular/common/locales/en-GB';
import localeIt from '@angular/common/locales/it';

declare const $: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'govio-planner';

  @ViewChild('watermark', { read: ElementRef }) watermark!: ElementRef;

  Tools = Tools;

  _config: any = null;

  constructor(
    private router: Router,
    private observer: BreakpointObserver,
    private translate: TranslateService,
    private configService: ConfigService,
    private tools: Tools,
  ) {
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeIt, 'it');

    Tools.Versione = `Ver. ${environment.version}`;

    this._config = this.configService.getConfiguration();

    /* Lang */
    const defaultLanguage = 'it';
    this.translate.setDefaultLang(defaultLanguage);

    this.translate.use(defaultLanguage);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  ngAfterContentChecked() {
  }

  _dummyAction(event: any, param: any) {
    console.log(event, param);
  }
}
