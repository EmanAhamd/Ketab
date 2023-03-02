import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';



@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {

  isLogged:boolean = false;
  constructor(public authService:AuthService, private router:Router){

    authService.currentUserData.subscribe(() =>{
      if(authService.currentUserData.getValue() == null){
        this.isLogged = false;
      }else{
        this.isLogged = true;
      }
    })
  }

logout(){
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentRole");
  this.router.navigate(['/login'])
}

}
