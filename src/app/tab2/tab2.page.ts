import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  positions = null;

  constructor() {
    Geolocation.watchPosition({timeout: 10}, this.addPosition);
  }

  registerPosition = (position) => {
    // const pos = localStorage.getItem('positions');
    // const posParse = JSON.parse(pos);
    // if(posParse){
    //   posParse.unshift(position);
    //   localStorage.setItem('positions', JSON.stringify([posParse]));
    // }else{
    //   localStorage.setItem('positions', JSON.stringify([position]));
    // }

    // J'ai essayé de stocker plusieurs positions dans un tableau, mais pas réussi

    localStorage.setItem('positions', JSON.stringify(position));
  };

  getPositions = async () => {
    this.positions = localStorage.getItem('positions');
    console.log(this.positions);
  };

  addPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    const position = {
      latitude : coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
      date: coordinates.timestamp
    };
    console.log(position);
    this.registerPosition(position);
    this.getPositions();
  };

}
