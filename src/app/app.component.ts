import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AdminRoleService } from './Core/Services/admin-role.service';
import { AuthService } from './Core/Services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ketab';
  faCoffee = faCoffee;
  isNotAdmin:boolean = true;

  constructor(public authService:AuthService, private adminRoleService:AdminRoleService){
    adminRoleService.currentUserData.subscribe(() =>{
      if (adminRoleService.currentUserData.getValue() !== null) {

        adminRoleService.currentUserRole.subscribe(()=>{
          let currentRole = adminRoleService.currentUserRole.getValue();
          if (currentRole == "ADMIN") {
            this.isNotAdmin= false;
            console.log("is admin");
          }else{
            this.isNotAdmin = true;
          }
        })
      }else{
        this.isNotAdmin = true;
      }
    })
  }



  
}
