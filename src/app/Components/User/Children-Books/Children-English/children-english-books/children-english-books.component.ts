import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-children-english-books',
  templateUrl: './children-english-books.component.html',
  styleUrls: ['./children-english-books.component.css']
})
export class ChildrenEnglishBooksComponent {
  term: string = '';
  EnglishBooks: any[] = [];
  Chips:string[]=['3 to 6 years ', '6 to 10 years ', 'Educational'];
  // toggle:boolean= true;
  // backColor:string = 'disActive'

  constructor(private bookService: BookService) {
    this.bookService.getAllChildEBooks().subscribe((res) =>{
      console.log("res",res);
      this.EnglishBooks = res;
    });
  }
  getAllEnglish(){
    this.bookService.getAllChildEBooks().subscribe((res) =>{
      console.log("res",res);
      this.EnglishBooks = res;
    });
  }
  getCategoryBooks(name:string){
    this.bookService.getChildEBooksCategories(name).subscribe((res) =>{
      console.log("category", res);
      this.EnglishBooks = res;
    });
    // this.toggle =!this.toggle;
    // this.backColor = this.toggle ? 'disActive' : 'active'
  }

}
