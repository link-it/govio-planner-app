import { AfterContentChecked, AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';

import { ConfigService } from 'projects/tools/src/lib/config.service';
import { Tools } from 'projects/tools/src/lib/tools.service';
import { EventsManagerService } from 'projects/tools/src/lib/eventsmanager.service';
import { PageloaderService } from 'projects/tools/src/lib/pageloader.service';
import { OpenAPIService } from 'projects/govio-planner/src/services/openAPI.service';

import { SearchBarFormComponent } from 'projects/components/src/lib/ui/search-bar-form/search-bar-form.component';

import moment from 'moment';

@Component({
  selector: 'app-expiration-files',
  templateUrl: 'expiration-files.component.html',
  styleUrls: ['expiration-files.component.scss']
})
export class ExpirationFilesComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {
  static readonly Name = 'ExpirationFilesComponent';
  readonly model: string = 'expiration-files';

  @ViewChild('searchBarForm') searchBarForm!: SearchBarFormComponent;

  Tools = Tools;

  config: any;
  filesConfig: any;

  files: any[] = [];
  page: any = {};
  _links: any = {};

  _isEdit: boolean = false;
  _editCurrent: any = null;

  _hasFilter: boolean = true;
  _formGroup: UntypedFormGroup = new UntypedFormGroup({});
  _filterData: any[] = [];

  _preventMultiCall: boolean = false;

  _spin: boolean = true;
  desktop: boolean = false;

  _useRoute : boolean = true;

  _message: string = 'APP.MESSAGE.NoResults';
  _messageHelp: string = 'APP.MESSAGE.NoResultsHelp';
  _messageUnimplemented: string = 'APP.MESSAGE.Unimplemented';
  _messageNoResponseUnimplemented: string = 'APP.MESSAGE.NoResponseUnimplemented';

  _error: boolean = false;

  showHistory: boolean = true;
  showSearch: boolean = true;
  showSorting: boolean = true;

  sortField: string = 'id';
  sortDirection: string = 'desc';
  sortFields: any[] = [
    { field: 'id', label: 'APP.LABEL.Id', icon: '' }
  ];

  searchFields: any[] = [
    { field: 'filename', label: 'APP.LABEL.Filename', type: 'string', condition: 'like' }
  ];

  breadcrumbs: any[] = [
    { label: 'APP.TITLE.ExpirationFiles', url: '', type: 'title', icon: 'topic' }
  ];

  statusList: any = [
    { label: 'APP.STATUS.CREATED', value: 'CREATED', order: 1 },
    { label: 'APP.STATUS.PROCESSING', value: 'PROCESSING', order: 2 },
    { label: 'APP.STATUS.PROCESSED', value: 'PROCESSED', order: 3 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private configService: ConfigService,
    public tools: Tools,
    private eventsManagerService: EventsManagerService,
    private pageloaderService: PageloaderService,
    public apiService: OpenAPIService
  ) {
    this.config = this.configService.getConfiguration();

    this._initSearchForm();
  }

  @HostListener('window:resize') _onResize() {
    this.desktop = (window.innerWidth >= 992);
  }

  ngOnInit() {
    this.configService.getConfig(this.model).subscribe(
      (config: any) => {
        this.filesConfig = config;
      }
    );
  }

  ngOnDestroy() {}

  ngAfterViewInit() {
    if (!(this.searchBarForm && this.searchBarForm._isPinned())) {
      setTimeout(() => {
        this._loadFiles();
      }, 100);
    }
  }

  ngAfterContentChecked(): void {
    this.desktop = (window.innerWidth >= 992);
  }

  _setErrorMessages(error: boolean) {
    this._error = error;
    if (this._error) {
      this._message = 'APP.MESSAGE.ERROR.Default';
      this._messageHelp = 'APP.MESSAGE.ERROR.DefaultHelp';
    } else {
      this._message = 'APP.MESSAGE.NoResults';
      this._messageHelp = 'APP.MESSAGE.NoResultsHelp';
    }
  }

  _initSearchForm() {
    this._formGroup = new UntypedFormGroup({
      creation_date_from: new UntypedFormControl(''),
      creation_date_to: new UntypedFormControl(''),
      filename: new UntypedFormControl(''),
      status: new UntypedFormControl('')
    });
  }

  _loadFiles(query: any = null, url: string = '') {
    this._setErrorMessages(false);
    
    let aux: any;
    if (!url) {
      this.files = [];
      const sort: any = { sort: this.sortField, sort_direction: this.sortDirection}
      query = { ...query, embed: ['uploader'], ...sort };
      aux = { params: this._queryToHttpParams(query) };
    }

    this._spin = true;
    this.apiService.getList(this.model, aux, url).subscribe({
      next: (response: any) => {
        this.page = response.page;
        this._links = response._links;

        if (response.items) {
          const _list: any = response.items.map((file: any) => {
            const _file = this._prepareFileData(file);
            const element = {
              id: file.id,
              source: { ..._file }
            };
            return element;
          });
          this.files = (url) ? [...this.files, ..._list] : [..._list];
          this._preventMultiCall = false;
          this._spin = false;
        }
        Tools.ScrollTo(0);
      },
      error: (error: any) => {
        this._setErrorMessages(true);
        this._preventMultiCall = false;
        this._spin = false;
        // Tools.OnError(error);
      }
    });
  }

  _prepareFileData(data: any) {
    const _uploader = data._embedded['uploader'];

    let _file: any = {
      ...data,
      user: _uploader
    };

    return _file;
  }

  _queryToHttpParams(query: any) : HttpParams {
    let httpParams = new HttpParams();

    Object.keys(query).forEach(key => {
      if (query[key]) {
        let _dateTime = '';
        switch (key)
        {
          case 'creation_date_from':
            _dateTime = moment(query[key]).utc().format();
            httpParams = httpParams.set(key, _dateTime);
            break;
          case 'creation_date_to':
            _dateTime = moment(query[key]).utc().add(23, 'h').add(59, 'm').add(59, 's').format();
            httpParams = httpParams.set(key, _dateTime);
            break;
          case 'filename':
            httpParams = httpParams.set('q', query[key]);
            break;
          default:
            httpParams = httpParams.set(key, query[key]);
        }
      }
    });
    
    return httpParams; 
  }

  __loadMoreData() {
    if (this._links && this._links.next && !this._preventMultiCall) {
      this._preventMultiCall = true;
      this._loadFiles(null, this._links.next.href);
    }
  }

  _onNew() {
    if (this._useRoute) {
      this.router.navigate([this.model, 'new']);
    } else {
      this._isEdit = true;
    }
  }

  _onEdit(event: any, param: any) {
    if (this._useRoute) {
      if (this.searchBarForm) {
        this.searchBarForm._pinLastSearch();
      }
      this.router.navigate([this.model, param.id]);
    } else {
      this._isEdit = true;
      this._editCurrent = param;
    }
  }

  _onCloseEdit() {
    this._isEdit = false;
  }

  _dummyAction(event: any, param: any) {
    console.log(event, param);
  }

  _onSubmit(form: any) {
    if (this.searchBarForm) {
      this.searchBarForm._onSearch();
    }
  }

  _onSearch(values: any) {
    this._filterData = values;
    this._loadFiles(this._filterData);
  }

  _resetForm() {
    this._filterData = [];
    this._loadFiles(this._filterData);
  }

  _onSort(event: any) {
    this.sortField = event.sortField;
    this.sortDirection = event.sortBy;
    this._loadFiles(this._filterData);
  }

  _timestampToMoment(value: number) {
    return value ? new Date(value) : null;
  }

  onBreadcrumb(event: any) {
    this.router.navigate([event.url]);
  }

  _resetScroll() {
    Tools.ScrollElement('container-scroller', 0);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
