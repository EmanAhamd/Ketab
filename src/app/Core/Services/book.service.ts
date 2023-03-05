import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  testQuantity:any[]=[];
  constructor(private http: HttpClient) { }


  getNewArrivalBooks(): Observable<any> {
    return this.http.get("https://localhost:7248/api/books/getByNewArrival") ;

  }


  BestSeller(): Observable<any> {

    return this.http.get("https://localhost:7248/api/bookBestSeller") ;
  }

  getBookDetails(id: any): Observable<any> {
    return this.http.get(`https://localhost:7248/api/books/${id}`);
  }

  getAllEnglishBooks():Observable<any>{
    return this.http.get(`https://localhost:7248/api/books/getByMainCategory?getByMainCategory=English`);
  }

getEnglishBooksCategories(name:string):Observable<any>{
  return this.http.get(
    `https://localhost:7248/api/books/getByMainCategoryByCategoryname?MainCategory=English&Categoryname=${name}`)
}

getAllArabicBooks():Observable<any>{
  return this.http.get(`https://localhost:7248/api/books/getByMainCategory?getByMainCategory=Arabic`);
}

getArabicBooksCategories(name:string):Observable<any>{
return this.http.get(
  `https://localhost:7248/api/books/getByMainCategoryByCategoryname?MainCategory=Arabic%20&Categoryname=${name}`)
}


getAllChildEBooks():Observable<any>{
  return this.http.get(`https://localhost:7248/api/books/getByMainCategory?getByMainCategory=ChildE`);
}

getChildEBooksCategories(name:string):Observable<any>{
  return this.http.get(
    `https://localhost:7248/api/books/getByMainCategoryByCategoryname?MainCategory=ChildE&Categoryname=${name}`)
  }



  getAllReview():Observable<any>{
  return this.http.get(`https://localhost:7248/api/Review/getAll`);
}


getAllChildABooks():Observable<any>{
  return this.http.get(`https://localhost:7248/api/books/getByMainCategory?getByMainCategory=ChildA`);
}



getChildABooksCategories(name:string):Observable<any>{
  return this.http.get(
    `https://localhost:7248/api/books/getByMainCategoryByCategoryname?MainCategory=ChildA&Categoryname=${name}`)
  }

}
