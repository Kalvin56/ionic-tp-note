import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    public toastController: ToastController,
  ) {
    this.presentToast();
  }

  async presentToast() {
    const status = await Network.getStatus();
    const toast = await this.toastController.create({
      message:`Network : ${status.connectionType}`,
      duration: 2000
    });
    toast.present();
  }

}
