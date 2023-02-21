import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getNewArrivalBooks():Observable<any>{
    return this.http.get("https://api.itbook.store/1.0/new");
  }

  getBookDetails(isbn13:any):Observable<any>{
    return this.http.get(`https://api.itbook.store/1.0/books/${isbn13}`);
  }


}
