import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  hidetwo = true;
  password = '';
  email2 = ''

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private AuthServices: AuthServiceService) { }

  ngOnInit(): void {
  }

  LoginHandler(){
    console.log('login Data', {
      password: this.password,
      email: this.email2
    })
    this.AuthServices.LoginHandler(this.email2, this.password)
  }

}
