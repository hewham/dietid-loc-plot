import { Component, OnInit } from '@angular/core';

import { ParseService } from '../../services/parse.service';
import { GeocoderService } from '../../services/geocoder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libraries: any = [];

  constructor(
    private parseService: ParseService,
    private geocoderService: GeocoderService
  ) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.getData();
    await this.addLatLngs();
    console.log("Libraries: ", this.libraries);
  }

  getData() {
    return new Promise(async (resolve) => {
      this.libraries = await this.parseService.parseCSVToJSON("assets/data/kansas_libs.csv");
      resolve();
    })
  }

  addLatLngs() {
    this.geocoderService.add(this.libraries);
  }

}
