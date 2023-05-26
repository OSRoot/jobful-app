import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email!: string;
  password!: string;
  login_form!: FormGroup
  sign_up_form: any;
  // ################# END ##################################

  constructor() { }
  // ################# END ##################################

  ngOnInit() {
    this.login_form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }


  // ########## handle the password visibilty ###############
  _password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################
}
