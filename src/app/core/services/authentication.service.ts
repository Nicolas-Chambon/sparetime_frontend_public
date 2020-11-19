import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {}

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

  login(username: string, location: string): Observable<any> {
    return this.httpClient.request(
      'POST',
      'http://www.workshop.tsukiru.com/login',
      {
        body: {
          username
        }
      }
    ).pipe(
      catchError(AuthenticationService.handleError),
      tap(data => {
        this.localStorage.setItem('user-id', data?.id);
        this.localStorage.setItem('location', location);
      })
    );
  }

  me(): Observable<any> {
    return this.httpClient.request(
      'POST',
      `http://www.workshop.tsukiru.com/me/
      ${ this.localStorage.getItem('user-id') }`,
      {
        body: {
          location: this.localStorage.getItem('location')
        }
      }
    ).pipe(
      catchError(AuthenticationService.handleError),
      map(data => {
        return {
          ...data,
          location: this.localStorage.getItem('location')
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.localStorage.getItem('user-id');
  }

  logout(): void {
    this.localStorage.removeItem('user-id');
  }
}
