import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-stage01',
  templateUrl: './stage01.page.html',
  styleUrls: ['./stage01.page.scss'],
})
export class Stage01Page implements OnInit {

  Overview!: string;
  Title!: string;
  Bio!: string;
  HourlyRate!: number;
  Rating!: number;
  Country!: string;
  City!: string;
  Street!: string;
  PhoneNumber!: string;
  Cv!: FormData;
  Photo!: FormData;

  form_data!: FormGroup;
  form_profile!: FormGroup
  // ########################################################
  constructor(

  ) { }
  // ########################################################

  ngOnInit() {
    this.form_data = new FormGroup({
      Title: new FormControl('', Validators.required),
      Overview: new FormControl('', Validators.required),
      Bio: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
      HourlyRate: new FormControl('', Validators.required),
      Rating: new FormControl('', Validators.required),
      Cv: new FormControl('', Validators.required),
      Photo: new FormControl('', Validators.required),
    })

    this.handle_data_form()
  }

  update_form() {
    this.handle_data_form()
  }

  handle_data_form() {

    // Save Form data in the storage
    const full_form: object = {
      Title: this.Title,
      Overview: this.Overview,
      Bio: this.Bio,
      Country: this.Country,
      City: this.City,
      PhoneNumber: this.PhoneNumber,
      Street: this.Street,
      HourlyRate: this.HourlyRate,
      Rating: this.Rating,
      Cv: this.Cv,
      Photo: this.Photo
    }
    // Set new Data to the local storage;
    localStorage.setItem('All_info', JSON.stringify(full_form))




    // send Form to the backend
  }


  ion_change_cv(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      const formData = new FormData();
      formData.append('file', file)
      console.log(formData);

    }

  }

  on_submit(data: any) {
    console.log(data);

  }


  ion_change_photo(event: any) {
    console.log(this.Photo);
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('photo', file)
    }

  }

}
