import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './../../materil.module';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoadButtonComponent } from './load-button/load-button.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ]
})
export class HomeModule { }
