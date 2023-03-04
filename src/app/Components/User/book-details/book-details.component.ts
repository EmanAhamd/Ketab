import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { BookService } from 'src/app/Core/Services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  Id:any;
  bookDetails:any={};
  selectedQuantity:any;
  isLogged:boolean = false;

  constructor(
    private bookService:BookService, 
    private Route:ActivatedRoute,
    private router:Router,
    public authService:AuthService)
    {
    this.Id = Route.snapshot.paramMap.get('id');
    bookService.getBookDetails(this.Id).subscribe((res) =>{
      this.bookDetails = res;
      console.log("id = ",this.Id);
    })
  }

  addToCart(){
    this.authService.currentUserData.subscribe(() =>{
      if(this.authService.currentUserData.getValue() == null){
        this.isLogged = false;
        this.router.navigate(['/login'])
      }else{
        alert("success")
        this.isLogged = true;
      }
    })
  }
 

  getQuantityValue(value:any){
    console.log("value",value);
    // this.bookService.testQuantity = value;
    // localStorage.setItem("booksQuantityValue",value)
  }


  
}
