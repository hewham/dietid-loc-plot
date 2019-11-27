import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

// service to parse & load csv data files
// uses papa-parse package

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor(
    private papa: Papa
  ) { }

  parseCSV(csvFile) {
    // returns json from csv
    return new Promise<[any]>((resolve) => {
      this.papa.parse(csvFile, {
        download: true,
        complete: function(results) {
          resolve(results.data);
        }
      });
    });
  }

  parseCSVToJSON(csvFile) {
    return new Promise(async (resolve) => {
      let rawParse:[any] = await this.parseCSV(csvFile);
      let titles = rawParse.shift();
      let items = [];
      for(let i in rawParse) {
        items.push(this.buildLibraryObject(titles, rawParse[i]));
      }
      resolve(items);
    })
  }

  buildLibraryObject(titles, item) {
    let obj = {};
    for(let i in titles) {
      obj[titles[i].toLowerCase()] = item[i];
    }
    return obj;
  }

}
