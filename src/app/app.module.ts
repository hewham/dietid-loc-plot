//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//components
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryInfoComponent } from './components/library-info/library-info.component';
import { MapComponent } from './components/map/map.component';

//page components
import { HomeComponent } from './pages/home/home.component';

//npm modules
import { AgmCoreModule } from '@agm/core';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LibraryListComponent,
    LibraryInfoComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUHueS0hNaKbcMy6INCTFWdI9q-CGYP7M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
