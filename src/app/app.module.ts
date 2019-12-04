//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//components
import { LibraryInfoComponent } from './components/library-info/library-info.component';

//page components
import { HomeComponent } from './pages/home/home.component';

//npm modules
import { AgmCoreModule } from '@agm/core';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LibraryInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
