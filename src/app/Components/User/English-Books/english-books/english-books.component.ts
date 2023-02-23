import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';


@Component({
  selector: 'app-english-books',
  templateUrl: './english-books.component.html',
  styleUrls: ['./english-books.component.css']
})
export class EnglishBooksComponent {

  
constructor(private bookService:BookService){
  
}
EnglishBooks:any[] = this.bookService.EnglishBooks;
  
}
