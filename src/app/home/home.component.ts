import { pokemon } from './pokemon';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'Imagens'];
  dataSouce: pokemon[] = [];
  countPage: number = 20;
  constructor(
    private pokemonService: HomeService
  ) { }

  ngOnInit(): void {
    this.pokemonService.listPokemon()
    .subscribe(poke => {
      this.dataSouce = poke.results;
      this.detahlesPokemon(poke.results);
    })
  }

  detahlesPokemon(data: {url: string}[]) {
    data.map((details: {url: string}, index: any) => {
      this.pokemonService.obterDetalhes(details.url)
      .subscribe( details => {
        this.dataSouce[index].detalhes = details;
      })
    })
  }

  load () {
    this.countPage = this.countPage + 20;
    this.pokemonService.incrementListPokemon(this.countPage)
    .subscribe(poke => {
      this.dataSouce = poke.results;
      this.detahlesPokemon(poke.results);
    })
  }

}
