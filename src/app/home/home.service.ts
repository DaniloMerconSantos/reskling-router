import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://pokeapi.co/api/v2/pokemon/'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  listPokemon(): Observable<any> {
    return this.http.get(API);
  }

  incrementListPokemon(count: number): Observable<any> {
    const params = new HttpParams().append('limit', count.toString());
    return this.http.get(API, { params });
  }

  obterDetalhes (url: string): Observable<any> {
    return this.http.get(url);
  }

}
