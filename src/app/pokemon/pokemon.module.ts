import { MatCardModule } from '@angular/material/card';
import { MaterialExampleModule } from './../../materil.module';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './../home/home-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';



@NgModule({
  declarations: [
    PokemonComponent
  ],
  exports:[PokemonComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatCardModule
  ]
})
export class PokemonModule { }
