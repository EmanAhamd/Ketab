import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';
import jwtDecode from 'jwt-decode';
import { AdminRoleService } from 'src/app/Core/Services/admin-role.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private auth:AuthService,
    private adminRoleService:AdminRoleService, 
    private router:Router){}

  loginForm :FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null,[Validators.required])
  });

  logSubmit(formData:any){
    if(formData.valid){
      this.auth.login(formData.value).subscribe((res) => {
        if(res.token){
          localStorage.setItem("currentUser", res.token);
          this.auth.saveCurrentUserData();
          this.adminRoleService.cheakRole();

          let encodedToken:any = localStorage.getItem("currentUser");
          let decodedToken:any = jwtDecode(encodedToken);
          var role:any = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          console.log(role);
          for (let i = 0; i < role.length; i++) {
            if(role[i] == 'ADMIN'){
              this.router.navigate(['/admin']);
            }else{
              this.router.navigate(['/home'])
            }
          }
        }
      })
      this.clearForm()
    }
  }

  clearForm(){
    this.loginForm.reset();
  }
}
