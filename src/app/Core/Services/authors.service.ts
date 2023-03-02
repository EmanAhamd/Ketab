import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }
  getTopAuthors(): Observable<any> {
    return this.http.get("https://localhost:7248/api/Authors");
  }

  getAuthorDetails(name: any): Observable<any> {
    return this.http.get(`https://localhost:7248/api/Authors/${name}`);
  }


}
