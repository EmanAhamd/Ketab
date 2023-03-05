import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { AuthService } from 'src/app/Core/Services/auth.service';



@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {

  isLogged:boolean = false;
  cartLength:any;

  constructor(public authService:AuthService, private router:Router, public cartService:CartService){

    authService.currentUserData.subscribe(() =>{
      if(authService.currentUserData.getValue() == null){
        this.isLogged = false;
      }else{
        this.isLogged = true;
      }
    });
    this.cartLength =cartService.items.length
  }


logout(){
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentRole");
  localStorage.removeItem("userId");
  this.router.navigate(['/login'])
}
}


