import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  currentUserData:any = new BehaviorSubject(localStorage.getItem("currentUser")); //here first time 
  helper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  login(loginData:any):Observable<any>{
    return this.http.post(`https://localhost:7248/api/userlogin`, loginData)
  }

  register(registerData:any):Observable<any>{
    return this.http.post(`https://localhost:7248/api/User`, registerData)
  }

  saveCurrentUserData(){
    let encodedToken:any = localStorage.getItem("currentUser");

    let decodedToken:any = jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);
    console.log(this.currentUserData.getValue());
    
  }

  isLogExpiered(){
    let token = localStorage.getItem("currentUser");
    return !this.helper.isTokenExpired(token);
  }


}
