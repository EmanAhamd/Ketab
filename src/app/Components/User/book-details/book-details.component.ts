import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Core/Services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  Id:any;
  bookDetails:any;
  selectedQuantity:any;
  

  constructor(private bookService:BookService, private Route:ActivatedRoute ){
    this.Id = Route.snapshot.paramMap.get('id');
    bookService.getBookDetails(this.Id).subscribe((res) =>{
      this.bookDetails = res;
      console.log("id",this.Id);
    })
    
    
  }
  getQuantityValue(value:any){
    console.log("value",value);
    // this.bookService.testQuantity = value;
    // localStorage.setItem("booksQuantityValue",value)
  }


  
}
