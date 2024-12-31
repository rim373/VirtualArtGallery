import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://127.0.0.1:8000'; // Backend URL

  constructor(private http: HttpClient) {}

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Event/${eventId}`);}

  // PUT request for updating an event
  updateEvent(eventId: number, updatedEvent: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-event/${eventId}`, updatedEvent);
  }


}
