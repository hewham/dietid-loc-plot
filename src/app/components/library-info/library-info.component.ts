import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-info',
  templateUrl: './library-info.component.html',
  styleUrls: ['./library-info.component.css']
})
export class LibraryInfoComponent implements OnInit {

  @Input('library') library: any;

  constructor() {}

  ngOnInit() {
    this.init();
  }

  async init() {

  }

}
