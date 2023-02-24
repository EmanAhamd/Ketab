import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-children-english-books',
  templateUrl: './children-english-books.component.html',
  styleUrls: ['./children-english-books.component.css']
})
export class ChildrenEnglishBooksComponent {
  term: string = '';
  FilteriedBooks: any[] = [];
  chips: any[] = ["All"];

  constructor(private bookService: BookService) {
    this.EnglishBooks.forEach(item => {
      if (!this.chips.includes(item.category)) {
        this.chips.push(item.category)
      }
    });
    this.FilteriedBooks = this.EnglishBooks;
  }

  EnglishBooks: any[] = this.bookService.EnglishBooks;


  filterByCategory(chip: any) {
    if (chip === "All") {
      this.FilteriedBooks = this.EnglishBooks;
    } else
      this.FilteriedBooks = this.EnglishBooks.filter(item => item.category.toLocaleLowerCase().includes(chip.toLocaleLowerCase()));
  }
}
