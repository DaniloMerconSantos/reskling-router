import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../home/home.service';
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
  type: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: HomeService
  ) { }

  ngOnInit(): void {
    this.nomePokemon =  this.route.snapshot.params.nome;
    this.pokemonService.obterDetalhes(this.nomePokemon)
    .subscribe((poke)=>{
      this.dataSoucer.push(poke);
    })

  }

}
