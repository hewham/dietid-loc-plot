import { Component, OnInit } from '@angular/core';

import { ParseService } from '../../services/parse.service';
import { GeocoderService } from '../../services/geocoder.service';
import { LocationService } from '../../services/location.service';

const DEFAULT_MAPQUEST_BATCH_SIZE = 10;
const DEFAULT_LIMIT_MAPQUEST_BATCHES = true;

const EXAMPLE_LAT = 38.5119;
const EXAMPLE_LNG = -98.4842;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // starting center of map
  lat = EXAMPLE_LAT;
  lng = EXAMPLE_LNG;

  currentLocation = {
    lat: EXAMPLE_LAT,
    lng: EXAMPLE_LNG
  }

  libraries: any = [];
  selectedLibrary: any = null;

  loadAll = false;
  batchSize: number = DEFAULT_MAPQUEST_BATCH_SIZE;
  limitBatches: boolean = DEFAULT_LIMIT_MAPQUEST_BATCHES;

  isLoaded: boolean = false;

  constructor(
    private parseService: ParseService,
    private geocoderService: GeocoderService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    this.isLoaded = false;
    await this.getData();
    await this.addLatLngs();
    this.findDistance();
    this.sortByDistance();
    this.formatAddresses();
    this.isLoaded = true;
  }

  getData() {
    return new Promise(async (resolve) => {
      this.libraries = await this.parseService.parseCSVToJSON("assets/data/kansas_libs.csv");
      resolve();
    })
  }

  addLatLngs() {
    return new Promise(async (resolve) => {
      this.libraries = await this.geocoderService.addLatLngs(this.libraries, this.batchSize, this.limitBatches);
      resolve();
    });
  }

  findDistance() {
    // calculate library distance from map center
    for(let i in this.libraries) {
      this.libraries[i].distance = this.locationService.findDistance(this.lat, this.lng, this.libraries[i].latitude, this.libraries[i].longitude);
    }
    return;
  }

  sortByDistance() {
    // sort libraries by distance from map center
    this.libraries.sort((a, b) => {
      return a.distance - b.distance
    });
    return;
  }

  formatAddresses() {
    // make addresses standardizeds and readable
    this.libraries = this.locationService.formatAddresses(this.libraries);
  }

  onOpenLibrary(library) {
    this.selectedLibrary = library;
    this.updateActive(library);
    this.lat = library.latitude;
    this.lng = library.longitude;
  }

  updateActive(library){
    for(let i in this.libraries) {
      this.libraries[i].active = false;
    }

    this.libraries.map((el,i)=>{
      if(el.latitude == library.latitude && el.longitude == library.longitude){
        this.libraries[i].active = true;
      }
    })
  }

  reload() {
    if(this.loadAll) {
      this.batchSize = 100;
      this.limitBatches = false;
    } else {
      this.batchSize = DEFAULT_MAPQUEST_BATCH_SIZE;
      this.limitBatches = DEFAULT_LIMIT_MAPQUEST_BATCHES;
    }
    this.init();
  }

}
