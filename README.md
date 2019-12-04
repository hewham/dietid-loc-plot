# DietidLocPlot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

<hr>

## Steps To Run

* install node, npm, and angular cli
  * NODE: https://nodejs.org/en/
  * ANGULAR: Run `$ npm install @angular/cli -g` after installing node
* Clone repo
* cd into directory and run `$ npm install`
* Run `$ npm start` for a dev server. Navigate to `http://localhost:4200/` in your browser.

<hr>

## Services Used
* Angular 8
* AGM (Angular Google Maps) | Map, Marker plotting
* MapQuest Api | Geocoding
* PapaParse | CSV file reading in JS

<hr>

## Notes
* MapQuest Geocoder is inaccurate. Tested other paid geocoders that provider much more accurate results. Doesn't effect bulk of project.
* MapQuest API Free Plan is limited to 15k requests per month. There are 400 libraries. This means it is used up very quickly. It is limited by default, but you have the option to load them all. Only do this a couple of times, or the API access will be used up.