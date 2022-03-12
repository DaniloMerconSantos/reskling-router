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
    let favoritos = [];
    var pokemonsStorage = localStorage.getItem('favoritos');

    if (pokemonsStorage !== null) {
      favoritos = JSON.parse(pokemonsStorage);
    }
    favoritos.push(data);

    const encontrado = favoritos.includes(data.id);

    if (encontrado) {
      this.verificarFavorito(favoritos);
      return;
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
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

  deletarPokemon(data: RootObject) {
    let favoritos = [];
    const storage = localStorage.getItem('favoritos');

    if (storage !== null) {
      favoritos = JSON.parse(storage);
    }

    const dado = favoritos.filter((dados: any) => dados.id != data.id);
    localStorage.setItem('favoritos', JSON.stringify(dado));
    this.temFavorito = false;
  }

}
