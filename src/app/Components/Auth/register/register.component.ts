import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(){}

  registerForm :FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(3), Validators.required, Validators.pattern('^[A-Z][a-z]+')]),
    lastName : new FormControl(null,[Validators.minLength(3), Validators.required, Validators.pattern('^[A-Z][a-z]+')]),
    phone : new FormControl(null,[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    Address : new FormControl(null,[Validators.required]),
    Email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')])
  });

  submitForm(formData:any){
    console.log(formData.value);
  }

}
