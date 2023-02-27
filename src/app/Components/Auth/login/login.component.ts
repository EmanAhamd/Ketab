import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){}

  loginForm :FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null,[Validators.required])
  });

  logSubmit(formData:any){
    console.log(formData.value);
  }
}
