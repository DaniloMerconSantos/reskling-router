import { HomeService } from './../home/home.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from './detalhe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  nomePokemon:string = '';
  dataSoucer:RootObject[]= [];

  constructor(
    private route: HttpParams,
    private pokemonService: HomeService
  ) { }

  ngOnInit(): void {
    // this.nomePokemon =  this.route.get('nome');
    // console.log(this.nomePokemon)
    // this.pokemonService.obterDetalhes(this.nomePokemon)
    // .subscribe((poke)=>{
    //   this.dataSoucer = poke;
    // })

  }

}
