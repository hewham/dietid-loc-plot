import { Injectable } from '@angular/core';

// declare var require: any;
// var NodeGeocoder = require('node-geocoder');
// var geocoderOptions = {
//   provider: 'geocodio'
// };

// var geocoder = NodeGeocoder(geocoderOptions);

declare const google;

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {

  constructor() {}

  async add(items) {
    let loc = items[0].address + ", " + items[0].city;
    console.log("Loc: ", loc);
    let one = await this.geocode(loc);
    console.log("GEOCODE: ", one);
  }

  // geocode(loc) {
  //   return new Promise((resolve) => {
  //     geocoder.geocode({
  //       address:loc.address, 
  //       city: loc.city, 
  //       zipcode: loc.zipcode
  //     }, (err, res) => {
  //       resolve(res);
  //     })
  //   })
  // }

  geocode(loc){
    //Get lat lng, detailed info from general location
    return new Promise((resolve) => {
      try{
      // console.log("IN GOOGLE GEOCODER");
       var geocoder = new google.maps.Geocoder();
       var request = {
         address: loc
       };
       geocoder.geocode(request, function(data, status) {
         var location = <any>{};
         // location = loc;
         if (status == google.maps.GeocoderStatus.OK) {
           if (data[0] != null) {
             location.latitude = data[0].geometry.location.lat();
             location.longitude = data[0].geometry.location.lng();
             var components = data[0].address_components;
             location.address = data[0].formatted_address;
             resolve(location);
           } else {
             console.log("No address available");
           }
         }
       });
      }catch(err) {
        throw new Error(err);
      }
      });
     }

}



