import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-arabic-books',
  templateUrl: './arabic-books.component.html',
  styleUrls: ['./arabic-books.component.css']
})
export class ArabicBooksComponent {
  isLogged:boolean = false;
  term: string = '';
  ArabicBooks: any[] = [];
  Chips:string[]=['ادب عربى', 'أدب مترجم', 'تاريخ  وسياسة', 'ريادة أعمال'];

  constructor(private bookService: BookService,
    private authService:AuthService, 
    private cartService:CartService, 
    private router:Router) {
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

addToCart(bookId:any, book:any){
  this.authService.currentUserData.subscribe(() =>{
    if(this.authService.currentUserData.getValue() == null){
      this.isLogged = false;
      this.router.navigate(['/login'])
    }else{
      this.isLogged = true;
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
