import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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




  search_query: string = '';
  items: any[] = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];
  filtered_items: any[] = [];

  constructor(
    private router: Router,
    private loader: LoadingController,
    private alert_ctrl: AlertController
  ) { }


  onSearchInput() {
    this.filtered_items = this.items.filter(item => item.title.toLowerCase().includes(this.search_query.toLowerCase()));
  }


  async login() {
    let loader = await this.loader.create({
      message: 'Loading...',
      spinner: 'lines-sharp',
      duration: 1000,
      mode: 'ios'
    });
    await loader.present()
    await this.router.navigate(['/login'])
  }



  async show_alert() {
    let alert = await this.alert_ctrl.create({
      header: 'Message',
      message: 'This Feature will be available soon',
      buttons: [
        { text: 'Ok', role: 'cancel' },
        {
          text: 'leave a message', handler: async () => {
            let alert = await this.alert_ctrl.create({
              header: 'Enter your message',
              inputs: [
                { type: 'checkbox', value: 'I Know the Developper' },
                { placeholder: 'What do you want?', type: 'text', value: 'Type..' }
              ],
              buttons: [
                { text: 'Send message', handler: (data) => { console.log(data.value) } },
                { text: 'Cancel', role: 'cancel' }
              ]
            });
            await alert.present()
          }
        }
      ]
    });
    await alert.present()
  }
}
