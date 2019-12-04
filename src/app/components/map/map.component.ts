import { Input, Component, OnInit } from '@angular/core';

const GOOGLE_MARKER_ICON_URL = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input('lat') lat: any;
  @Input('lng') lng: any;
  @Input('libraries') libraries: any;
  @Input('currentLocation') currentLocation: any;


  blueMarker = GOOGLE_MARKER_ICON_URL + '|4286f4';
  redMarker = GOOGLE_MARKER_ICON_URL + '|FF0000';
  greenMarker = GOOGLE_MARKER_ICON_URL + '|00FF00';

  constructor() {}

  ngOnInit() {
    this.init();
  }

  async init() {
    
  }

}
