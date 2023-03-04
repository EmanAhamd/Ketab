import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { BookService } from 'src/app/Core/Services/book.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartItems:any[]= [];
  Total!:number;

  items:any[]=[];
  quantity:any;
  totalItem:number=0;
  
  constructor(private cartService:CartService, private bookService:BookService){
    let userId = localStorage.getItem("userId");
    cartService.getUserShoppingCart(userId).subscribe((response) => {
      this.cartItems = response;
      this.Total = cartService.getCartTotal();
      console.log("res get all from cart", response);
    });

}


  clearCart(){
    let userId = localStorage.getItem("userId");
    this.cartService.DeleteAllItems(userId).subscribe();
    this.cartItems = [];
    alert("Cleared")
  }

  deletItem(index:any, bookId:any){
    let userId = localStorage.getItem("userId");
    this.cartService.DeleteShoppingCartItem(bookId,userId).subscribe()
    this.cartItems.splice(index,1);
    alert("Deleted")
  }

  
  getQuantityValue(bookId:any ,value:any){
    this.quantity = value;
    let userId = localStorage.getItem("userId");
        let cartData = {
          userId:userId,
          bookId:bookId,
          amount:value
        }
        this.cartService.updateShoppingCart(cartData).subscribe((res)=>{
          console.log("response",res);
          this.Total =this.cartService.getCartTotal();
          
        })
        
  }


}
