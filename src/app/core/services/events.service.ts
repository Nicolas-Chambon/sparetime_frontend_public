import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

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

  userEvent(): Observable<any> {
    return this.httpClient.post(`http://www.workshop.tsukiru.com/eventUser/
    ${ this.localStorage.getItem('user-id') }`, {
      location: this.localStorage.getItem('location'),
    }).pipe(catchError(EventsService.handleError));
  }

  trendingEvents(): Observable<any> {
    return this.httpClient.post(
      "http://www.workshop.tsukiru.com/events",
      {
      location: this.localStorage.getItem('location'),
      }).pipe(catchError(EventsService.handleError));
  }
}
