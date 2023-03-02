import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';


@Component({
  selector: 'app-english-books',
  templateUrl: './english-books.component.html',
  styleUrls: ['./english-books.component.css']
})
export class EnglishBooksComponent {
  term: string = '';
  EnglishBooks: any[] = [];

  constructor(private bookService: BookService) {
    this.bookService.getAllEnglishBooks().subscribe((res) =>{
      console.log("res",res);
      this.EnglishBooks = res;
    });
  }
  getAllEnglish(){
    this.bookService.getAllEnglishBooks().subscribe((res) =>{
      console.log("res",res);
      this.EnglishBooks = res;
    });
  }
  getCategoryBooks(name:string){
    this.bookService.getEnglishBooksCategories(name).subscribe((res) =>{
      console.log("category", res);
      this.EnglishBooks = res;
      
    })
  }

}
