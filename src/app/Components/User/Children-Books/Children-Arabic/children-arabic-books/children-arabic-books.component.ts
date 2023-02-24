import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-children-arabic-books',
  templateUrl: './children-arabic-books.component.html',
  styleUrls: ['./children-arabic-books.component.css']
})
export class ChildrenArabicBooksComponent {
  term: string = '';
  FilteriedBooks: any[] = [];
  chips: any[] = ["All"];
  constructor(private myBookService: BookService) {
    this.ArabicBooks.forEach(item => {
      if (!this.chips.includes(item.category)) {
        this.chips.push(item.category)
      }
    });
    this.FilteriedBooks = this.ArabicBooks
  }
  ArabicBooks: any[] = this.myBookService.ArabicBooks;

  filterByCategory(chip: any) {
    if (chip === "All") {
      this.FilteriedBooks = this.ArabicBooks;
    } else
      this.FilteriedBooks = this.ArabicBooks.filter(item => item.category.toLocaleLowerCase().includes(chip.toLocaleLowerCase()));
  }

}
