import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  private static handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = { error: error.error.message };
    } else {
      // Server-side errors
      errorMessage = { error: error.message };
    }
    return of(errorMessage);
  }

  userEvent(id: number, location: string): Observable<any> {
    return this.httpClient.post(`http://www.workshop.tsukiru.com/eventUser/${ id }`, {
      location,
    }).pipe(catchError(EventsService.handleError));
  }

  trendingEvents(location: string): Observable<any> {
    return this.httpClient.post(
      "http://www.workshop.tsukiru.com/events",
      {
      location,
      }).pipe(catchError(EventsService.handleError));
  }
}
