import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }
  getTopAuthors(): Observable<any> {
    return this.http.get("https://api.itbook.store/1.0/new");
  }
}
