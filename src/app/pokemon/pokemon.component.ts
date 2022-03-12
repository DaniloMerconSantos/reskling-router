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
  temFavorito: boolean = false;
  favoritos: RootObject[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: HomeService
  ) { }

  ngOnInit(): void {
    this.nomePokemon =  this.route.snapshot.params.nome;
    this.pokemonService.obterDetalhes(this.nomePokemon)
    .subscribe((poke)=>{
      this.dataSoucer.push(poke);
      this.verificarFavorito(this.dataSoucer[0]);
    })
  }

  addFavorito(data: RootObject) {
    if(this.verificarFavorito(data)) {
      this.favoritos = this.favoritos.filter(value=>{
        return value.id != data.id;
      })
      console.log(this.favoritos);
      if(this.favoritos.length == 0 ){
        localStorage.removeItem('favoritos');
        return this.temFavorito = false;
      }
      this.favoritos.push(data);

      return localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
    this.favoritos.push(data);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    this.temFavorito = true;
  }

  verificarFavorito(data: RootObject) {
    var pokemons = localStorage.getItem('favoritos');

    if(pokemons && data){
      var array: [] = JSON.parse(pokemons);

      const poke = array.filter(value=>{
        return value['id'] === data.id;
      })
      if(poke.length > 0) return this.temFavorito = true;
    }
    return  this.temFavorito = false;
  }

  removeFavorito() {
    // this.favoritos.splice()
  }
}
