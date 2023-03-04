import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-children-arabic-books',
  templateUrl: './children-arabic-books.component.html',
  styleUrls: ['./children-arabic-books.component.css']
})
export class ChildrenArabicBooksComponent {
  term: string = '';
  ArabicBooks: any[] = [];
  Chips:string[]=['3 to 6 years ', '6 to 10 years', 'Favourite Characters'];

  constructor(private bookService: BookService) {
    this.bookService.getAllChildABooks().subscribe((res) =>{
      console.log("res",res);
      this.ArabicBooks = res;
    });
  }
  getAllArabic(){
    this.bookService.getAllChildABooks().subscribe((res) =>{
      console.log("res",res);
      this.ArabicBooks = res;
    });
  }
  getCategoryBooks(name:string){
    this.bookService.getChildABooksCategories(name).subscribe((res) =>{
      console.log("category", res);
      this.ArabicBooks = res;
      
    })
  
}

}
