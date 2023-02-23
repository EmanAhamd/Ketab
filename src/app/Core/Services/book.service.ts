import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http:HttpClient) { }

  ArabicBooks: any[] = [
    { id: 1, title: 'دجال', category: 'ادب عربى', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },
    { id: 2, title: 'نداء البرية', category: 'أدب مترجم', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },

    { id: 3, title: 'يهود مصر', category: 'تاريخ وسياسة', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },

    { id: 4, title: 'سر الثراء', category: 'ريادة أعمال', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },

    { id: 5, title: 'كيف نفهم النحو', category: 'قواميس ومراجع', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },

    { id: 6, title: "ملك من ذهب", category: 'مصر القديمة', price: '15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' },

  ]

  getNewArrivalBooks():Observable<any>{
    return this.http.get("https://api.itbook.store/1.0/new");
  }

  getBookDetails(isbn13:any):Observable<any>{
    return this.http.get(`https://api.itbook.store/1.0/books/${isbn13}`);
  }

  

}
