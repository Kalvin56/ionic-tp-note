import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { DatetimeOptions } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  body: string;
  date: Date = new Date();

  constructor() {
    console.log(LocalNotifications.getPending());
  }

  createNotif() {
    LocalNotifications.schedule({
        notifications: [
            {
                id: 1,
                title: 'TEST',
                schedule: {
                    at : new Date(this.date)
                },
                body: this.body
            },
        ],
    });
  }

}
