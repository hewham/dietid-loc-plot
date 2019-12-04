import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  // service to parse & load csv data files
  // uses papa-parse package

  constructor(
    private papa: Papa
  ) { }

  parseCSV(csvFile) {
    // parses csv file using papaparse
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
    // more discreet csv parse, specifically for kansas library csv. Builds library object array.
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
    obj['state'] = "KS";
    return obj;
  }

}
