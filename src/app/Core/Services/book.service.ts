import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  EnglishBooks:any[] =[
    {id:1, title: 'Alchemy Of Souls', category: 'Literature & Fiction',price:'15$', img: 'https://www.nautiljon.com/images/drama/00/99/alchemy_of_souls_6799.webp'},
    
    {id:8, title: 'Are You Human Too?', category: 'Science & Technology',price:'15$', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Are_You_Human%3F.jpg/250px-Are_You_Human%3F.jpg'},

    {id:4, title: 'Dali And Cocky Prince', category: 'Art',price:'15$', img: 'https://www.nautiljon.com/images/drama/00/05/dali_and_the_cocky_prince_5750.webp'},

    {id:2, title: 'Racet Boyes', category: 'Health',price:'15$', img: 'https://thefangirlverdict.com/wp-content/uploads/2021/08/Racket-Boys-001.jpg'},

    {id:3, title: 'Moon Loveres', category: 'History',price:'15$', 
    img: 'https://m.media-amazon.com/images/M/MV5BNmVmZWRmMjctZDk3OS00MzNlLTllNjAtZmI3YmJhNDRmZTc4XkEyXkFqcGdeQXVyNjgzNjE2MzY@._V1_FMjpg_UX1000_.jpg'},

    {id:7, title: 'Train To Busan', category: 'Travel',price:'15$', img: 'https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg'},

    
    {id:4, title: 'Dali And Cocky Prince', category: 'Art',price:'15$', img: 'https://www.nautiljon.com/images/drama/00/05/dali_and_the_cocky_prince_5750.webp'},

    {id:2, title: 'Racet Boyes', category: 'Health',price:'15$', img: 'https://thefangirlverdict.com/wp-content/uploads/2021/08/Racket-Boys-001.jpg'},


  ]

  constructor(private http:HttpClient) { }

  getNewArrivalBooks():Observable<any>{
    return this.http.get("https://api.itbook.store/1.0/new");
  }

  getBookDetails(isbn13:any):Observable<any>{
    return this.http.get(`https://api.itbook.store/1.0/books/${isbn13}`);
  }

  

}
