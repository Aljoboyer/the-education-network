import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  hidetwo = true;
  name = '';
  password = '';
  password2 = '';
  phone = '';
  email2 = ''


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private AuthHandler: AuthServiceService) { }

  ngOnInit(): void {
  }

  SignUpSubmit(){

    this.AuthHandler.RegisterHandler(this.email2, this.password, this.name,)

  }
}
