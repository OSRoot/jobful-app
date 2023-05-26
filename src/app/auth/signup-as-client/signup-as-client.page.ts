import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup-as-client',
  templateUrl: './signup-as-client.page.html',
  styleUrls: ['./signup-as-client.page.scss'],
})
export class SignupAsClientPage implements OnInit {


  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'text',
      placeholder: 'Phone',

      attributes: {
        maxlength: 11,
      },
    },
    {
      type: 'textarea',
      placeholder: 'About your problem',
    },
  ];


  role: string = 'client'
  username!: string;
  fName!: string;
  lName!: string;
  email!: string;
  password!: string;

  sign_up_form!: FormGroup;
  // ################# END ##################################

  constructor(
    private router: Router,
    private loader: LoadingController,
    private alert_ctrl: AlertController
  ) { }

  // ################# END ##################################

  ngOnInit() {
    this.sign_up_form = new FormGroup({
      username: new FormControl('', Validators.required),
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  // ################# END ##################################

  async sign_up_freelancer() {
    // Simple Validation
    let check1: string = this.username
    let check2: string = this.fName
    let check3: string = this.lName
    let check4 = this.email
    let check5 = this.password


    // ####################################
    // ######## Sign up Stage       #######
    // ####################################

    const user: object = {
      role: this.role,
      username: this.username,
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      password: this.password
    }



    // ####################################


  }
  // ########## handle the password visibilty ###############
  _password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################

  logger() {
    console.log(this.username);

  }

  // ############## Alert Controller ######################

  async show_alert_email() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'email is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }



  async show_alert_email2() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Email format invalid',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_password() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'password is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }
  async show_alert_phone() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your phone number correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_fname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your first name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_lname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your last name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

}
