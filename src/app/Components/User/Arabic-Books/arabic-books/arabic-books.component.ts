import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-arabic-books',
  templateUrl: './arabic-books.component.html',
  styleUrls: ['./arabic-books.component.css']
})
export class ArabicBooksComponent {
  term: string = '';
  ArabicBooks: any[] = [];
  Chips:string[]=['ادب عربى', 'أدب مترجم', 'تاريخ  وسياسة', 'ريادة أعمال','قواميس ومراجع','مصر القديمة'];

  constructor(private bookService: BookService) {
    this.bookService.getAllArabicBooks().subscribe((res) =>{
      console.log("res",res);
      this.ArabicBooks = res;
    });
  }
  getAllArabic(){
    this.bookService.getAllArabicBooks().subscribe((res) =>{
      console.log("res",res);
      this.ArabicBooks = res;
    });
  }
  getCategoryBooks(name:string){
    this.bookService.getArabicBooksCategories(name).subscribe((res) =>{
      console.log("category", res);
      this.ArabicBooks = res;
      
    })
  
}
}
