import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoudticketapiService {
  private baseUrl = 'https://app.ticketmaster.com/discovery/v2';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/discovery/v2/events`);
  }



}
