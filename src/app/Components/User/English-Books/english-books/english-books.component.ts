import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { BookService } from 'src/app/Core/Services/book.service';




@Component({
  selector: 'app-english-books',
  templateUrl: './english-books.component.html',
  styleUrls: ['./english-books.component.css']
})
export class EnglishBooksComponent {
  term: string = '';
  isLogged:boolean = false;
  EnglishBooks: any[] = [];
  Chips:string[]=['Art', 'Health', 'Fiction', 'Science','Travel','History'];
  // toggle:boolean= true;
  // backColor:string = 'disActive'

  constructor(
    private bookService: BookService,
    private authService:AuthService, 
    private cartService:CartService, 
    private router:Router)
    {
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
    });
    // this.toggle =!this.toggle;
    // this.backColor = this.toggle ? 'disActive' : 'active'
  }


  addToCart(bookId:any, book:any){
    this.authService.currentUserData.subscribe(() =>{
      if(this.authService.currentUserData.getValue() == null){
        this.isLogged = false;
        this.router.navigate(['/login'])
      }else{
        this.isLogged = true;
        // this.cartService.cartLength++
        //send it to DB
        let userId = localStorage.getItem("userId");
        let amount = 1;

        let cartData = {
          userId:userId,
          bookId:bookId,
          amount:amount
        }
        this.cartService.addToShoppingCart(cartData).subscribe((res)=>{
          alert("successfully Added")
        })
      }
    })
    
  }

}
