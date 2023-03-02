import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleService {

  currentUserRole:any = new BehaviorSubject(localStorage.getItem("currentRole"));
  currentUserData:any = new BehaviorSubject(localStorage.getItem("currentUser")); //second here
  role:any;
  
  
  constructor() { }

  cheakRole(){
    let encodedToken:any = localStorage.getItem("currentUser");
    let decodedToken:any = jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);

    let rolesArray = this.currentUserData.getValue()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    for (let i = 0; i < rolesArray.length; i++) {
      if(rolesArray[i] == "ADMIN"){
        this.currentUserRole.next(rolesArray[i])
      }
      
    }
    localStorage.setItem("currentRole", this.currentUserRole.getValue())

  }


}
