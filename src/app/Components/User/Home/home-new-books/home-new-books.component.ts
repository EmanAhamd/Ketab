import { Component } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';
BookService

@Component({
  selector: 'app-home-new-books',
  templateUrl: './home-new-books.component.html',
  styleUrls: ['./home-new-books.component.css']
})
export class HomeNewBooksComponent {
  newArrivals:any[] = [];

  constructor(private bookService:BookService){
    bookService.getNewArrivalBooks().subscribe((res) => {
      // let response = res.title;
      this.newArrivals = res.slice(0,4);
      // .slice(10,18);
      
      console.log(res);
      // console.log(this.newArrivals);
      
      
    });

  }
}
