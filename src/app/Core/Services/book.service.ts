import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  EnglishBooks:any[] =[
    {id:1, title: 'Alchemy Of Souls', category: 'Fiction',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},
    {id:2, title: 'Racet Boyes', category: 'Health',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:3, title: 'Moon Loveres', category: 'History',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:4, title: 'Dali And Cocky Prince', category: 'Art',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:5, title: 'Little Women', category: 'Literature', price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:6, title: "I'm Not Robot", category: 'Science',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:7, title: 'Train To Busan', category: 'Travel',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

    {id:8, title: 'Are You Human Too?', category: 'Technology',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'},

  ]

  constructor(private http:HttpClient) { }

  getNewArrivalBooks():Observable<any>{
    return this.http.get("https://api.itbook.store/1.0/new");
  }

  getBookDetails(isbn13:any):Observable<any>{
    return this.http.get(`https://api.itbook.store/1.0/books/${isbn13}`);
  }

  

}
