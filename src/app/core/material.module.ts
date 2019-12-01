import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, 
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatCheckboxModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule, 
  MatTableModule,
  MatPaginatorModule,
  MatSortModule, 
  MatDialogModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
   CommonModule, 
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatDatepickerModule,
   MatNativeDateModule, 
   MatCheckboxModule,
   MatIconModule,
   MatTabsModule,
   MatCardModule,
   MatSelectModule, 
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatDialogModule,
   MatGridListModule,
   MatSlideToggleModule,
   MatExpansionModule,
   MatMenuModule,
   MatProgressSpinnerModule, 
   
  ],

  exports: [
   CommonModule,
   MatToolbarModule, 
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatDatepickerModule,
   MatNativeDateModule, 
   MatCheckboxModule,
   MatIconModule,
   MatTabsModule,
   MatCardModule,
   MatSelectModule, 
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatDialogModule,
   MatGridListModule,
   MatSlideToggleModule,
   MatExpansionModule,
   MatMenuModule,
   MatProgressSpinnerModule
   ],
})
export class CustomMaterialModule { }

//! The space you see in both imports and exports shows the modules that I'm not sure if we are using yet until I've covered through the entire code...