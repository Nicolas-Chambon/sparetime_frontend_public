import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

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

  login(username: string): Observable<any> {
    return this.httpClient.request(
      'POST',
      'http://www.workshop.tsukiru.com/login',
      {
        body: {
          username
        }
      }
    ).pipe(
      catchError(AuthenticationService.handleError)
    );
  }

  me(id: number, location: string): Observable<any> {
    return this.httpClient.request(
      'POST',
      `http://www.workshop.tsukiru.com/me/${ id }`,
      {
        body: {
          location
        }
      }
    ).pipe(
      catchError(AuthenticationService.handleError)
    );
  }
}
