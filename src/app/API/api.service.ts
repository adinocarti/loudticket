import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = '/api/discovery/v2/';  //

  constructor(private http: HttpClient) {}

  getAllEvents(options?: {
    countryCode?: string;
    keyword?: string;
    size?: number;
    page?: number;
  }): Observable<any> {
    let params = new HttpParams().set('apikey', environment.ticketmasterApiKey);

    if (options) {
      if (options.countryCode) {
        params = params.set('countryCode', options.countryCode);
      }
      if (options.keyword) {
        params = params.set('keyword', options.keyword);
      }
      if (options.size != null) {
        params = params.set('size', options.size.toString());
      }
      if (options.page != null) {
        params = params.set('page', options.page.toString());
      }
    }

    return this.http.get<any>(`${this.baseUrl}events.json`, { params });
  }
}
