import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

const MAPQUEST_BATCH_GEOCODE_URL = "https://open.mapquestapi.com/geocoding/v1/batch";
const MAPQUEST_API_KEY = "	1EjpsmaiCeRJPNyfpHon4xBv6BTZdQo6"; //hewham2
// const MAPQUEST_API_KEY = "a9H3grKAooGzDscrWWSzKmIdExvgHkMm"; //hewham (expired)

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {

  constructor(
    private httpService: HttpService
  ) {}

  addLatLngs(locations, batchSize = 3, limitBatches = true) {
    // adds latitude and longitude to array of locations
    return new Promise(async (resolve) => {
      let chunks = this.chunkArray(locations, batchSize);
      let chunkedLocations = [];
      for(let chunk of chunks) {
        chunkedLocations.push(await this.batchGeocode(chunk));
        if(limitBatches) {
          break; // limits to one request
        }
      }
      resolve([].concat.apply([], chunkedLocations));
    })
  }

  batchGeocode(locations) {
    // uses mapquest batch geocoding service. Limit of 100 locations per request
    return new Promise(async (resolve) => {
      let url = MAPQUEST_BATCH_GEOCODE_URL + "?key=" + MAPQUEST_API_KEY;
      for (let location of locations) {
        // format spaces to be url friendly with "+"
        location.addressFormatted = location.address.replace(/ /g,"+");
        location.cityFormatted = location.city.replace(/ /g,"+");
        let loc = location.addressFormatted + "," + location.cityFormatted + "," + location.state + "," + location.zip;
        // append location to url request params
        url = url + "&location=" + loc;
      }
      let res:any = await this.httpService.get(url);
      for(let i in res.results) {
        locations[i].latitude = res.results[i].locations[0].latLng.lat;
        locations[i].longitude = res.results[i].locations[0].latLng.lng;
      }
      resolve(locations);
    })
  }

  chunkArray (array, length) {
    // chunks an array into an array of arrays, with length limit for smaller arrays
    let temp = [];
    let i = 0;
    let n = array.length;
    while (i < n) {
      temp.push(array.slice(i, i += length));
    }
    return temp;
  }

}



