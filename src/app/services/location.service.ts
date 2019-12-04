import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  findDistance(lat1, lng1, lat2, lng2) {
    //returns distance in miles between 2 latlng points
    let p = 0.017453292519943295;    // Math.PI / 180
    let cos = Math.cos;
    let a = 0.5 - cos((lat2 - lat1) * p)/2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lng1 - lng2) * p))/2;
    return 12742 * Math.asin( Math.sqrt(a) ) * 0.62137119; // 2 * R; R = 6371 km; 0.62137119 Miles = 1 Km
  }

  formatAddresses(libraries) {
    for(let i in libraries) {
      let ad = "";
      libraries[i].address ? ad += libraries[i].address + ", " : null ;
      libraries[i].city ? ad += libraries[i].city + " " : null ;
      libraries[i].state ? ad += libraries[i].state : null ;
      libraries[i].zip ? ad += ", " + libraries[i].zip : null ;
      libraries[i].formattedAddress = ad;
    }
    return libraries;
  }

}
