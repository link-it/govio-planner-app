import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiClient, IRequestOptions, IRawRequestOptions } from './api.client';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenAPIService {

  private proxyPath: string;

  constructor( private http: ApiClient) 
  {
    this.proxyPath = "/"
  }

  getList(name: string, options?: IRequestOptions, pageUrl: string = '') : Observable<any> {
    let url = `${this.proxyPath}${name}`;

    if (pageUrl) {
      url = pageUrl;
    }

    return this.http.get<any>(url, options, !!pageUrl);
  }

  getDetails(name: string, id: any, type?: string, options?: IRequestOptions) {
    if(!options) options = {};
    
    const _url = type ? `${this.proxyPath}${name}/${id}/${type}` : `${this.proxyPath}${name}/${id}`;
    return this.http.get<any>(_url, options);
  }

  saveElement(name: string, body: Object, options?: IRequestOptions) {
    if(!options) options = {};
    
    const _url = `${this.proxyPath}${name}`;
    return this.http.post<any>(_url, body, options);
  }

  updateElement(name: string, id: any, body: Object, options?: IRequestOptions) {
    if(!options) options = {};
    options.headers = new HttpHeaders();
    options.headers = options.headers.set('Content-type', 'application/json-patch+json');

    const _url = `${this.proxyPath}${name}/${id}`;
    return this.http.patch<any>(_url, body, options);
  }

  updateElementRelated(name: string, id: any, related: string, body: Object, options?: IRequestOptions) {
    if(!options) options = {};
    options.headers = new HttpHeaders();
    options.headers = options.headers.set('Content-type', 'application/json-patch+json');

    const _url = `${this.proxyPath}${name}/${id}/${related}`;
    return this.http.patch<any>(_url, body, options);
  }

  putElementRelated(name: string, id: any, related: string, body: Object, options?: IRequestOptions) {
    if(!options) options = {};
    options.headers = new HttpHeaders();
    // options.headers = options.headers.set('Content-type', 'application/json');

    const _url = `${this.proxyPath}${name}/${id}/${related}`;
    return this.http.put<any>(_url, body, options);
  }

  deleteElement(name: string, id: any, options?: IRequestOptions) {
    if(!options) options = {};
    
    const _url = `${this.proxyPath}${name}/${id}`;
    return this.http.delete<any>(_url, options);
  }

  deleteElementRelated(name: string, id: any, related: string, options?: IRequestOptions) {
    if(!options) options = {};
    
    const _url = `${this.proxyPath}${name}/${id}/${related}`;
    return this.http.delete<any>(_url, options);
  }

  upload(name: string, body: any, options?: IRequestOptions) {
    if (!options) options = {};
    options.headers = new HttpHeaders();
    // options.headers = options.headers.set('Content-type', 'multipart/form-data');

    const _url = `${this.proxyPath}${name}`;
    return this.http.post<any>(_url, body, options);
  }

  download(name: string, id: any, type?: string) {
    const _url = type ? `${this.proxyPath}${name}/${id}/${type}` : `${this.proxyPath}${name}/${id}`;
    return this.http.getContentRaw(_url);
  }
}
