import { ViewChild, Component, OnInit } from '@angular/core';
// import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

import { ParseService } from '../../services/parse.service';
import { GeocoderService } from '../../services/geocoder.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // dataSource = new MatTableDataSource<any>();
  // displayedColumns = [ 'library'];

  title = 'My first AGM project';
  lat = 38.5119;
  lng = -98.4842;

  libraries: any = [];
  selectedLibrary: any = null;

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
    await this.getData();
    await this.addLatLngs();
    this.findDistance();
    this.sortByDistance();
    this.formatAddresses();
    // this.dataSource.data = this.libraries;
    // this.dataSource.paginator = this.paginator;
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
      this.libraries = await this.geocoderService.addLatLngs(this.libraries);
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
    for(let i in this.libraries) {
      let ad = "";
      this.libraries[i].address ? ad += this.libraries[i].address + ", " : null ;
      this.libraries[i].city ? ad += this.libraries[i].city + " " : null ;
      this.libraries[i].state ? ad += this.libraries[i].state : null ;
      this.libraries[i].zip ? ad += ", " + this.libraries[i].zip : null ;
      this.libraries[i].formattedAddress = ad;
    }
  }

  onOpenLibrary(library) {
    console.log("onOpenLibrary: ", library);
    this.selectedLibrary = library;
    this.lat = library.latitude;
    this.lng = library.longitude;
  }

}
