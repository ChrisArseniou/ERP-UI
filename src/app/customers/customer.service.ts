import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { ICustomer } from "./customer";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerUrl = 'https://localhost:7123/api/Customer';

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customerUrl)
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
