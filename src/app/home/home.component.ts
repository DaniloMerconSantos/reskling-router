import { Router } from '@angular/router';
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
    private pokemonService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pokemonService.listPokemon()
    .subscribe(poke => {
      this.dataSouce = poke.results;
      this.detahlesPokemon(poke.results);
    })
  }

  detahlesPokemon(data: {name: string}[]) {
    data.map((details: {name: string}, index: any) => {
      this.pokemonService.obterDetalhes(details.name)
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

  goPage(row: pokemon) {
    this.router.navigate(['/pokemon', row.name]);
  }

}
