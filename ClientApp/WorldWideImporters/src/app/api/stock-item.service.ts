import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { StockItem } from "../models/stock-item";

@Injectable({
  providedIn: 'root'
})
export class StockItemService {
  // API path
  base_path = 'http://localhost:3000/StockItems';

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


  createItem(item): Observable<StockItem> {
    return this.http
      .post<StockItem>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<StockItem> {
    return this.http
      .get<StockItem>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<StockItem[]> {
    return this.http
      .get<StockItem[]>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<StockItem> {
    return this.http
      .put<StockItem>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(id) {
    return this.http
      .delete<StockItem>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}