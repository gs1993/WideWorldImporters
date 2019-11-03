import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { Order } from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // API path
  base_path = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  createItem(item): Observable<Order> {
    return this.http
      .post<Order>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Order> {
    return this.http
      .get<Order>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Order> {
    return this.http
      .put<Order>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(id) {
    return this.http
      .delete<Order>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
