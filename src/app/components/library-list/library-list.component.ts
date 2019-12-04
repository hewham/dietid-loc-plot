import { ViewChild, Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @Input('libraries') libraries: any;
  @Output() onClick = new EventEmitter();

  dataSource = new MatTableDataSource<any>();
  displayedColumns = [ 'library'];

  constructor() {}

  ngOnInit() {
    this.init();
  }

  async init() {
    this.dataSource.data = this.libraries;
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}
