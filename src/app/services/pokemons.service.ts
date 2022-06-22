import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResponse } from '../models/reqresponse';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  public data: any[] = [];

  loadPokemon(id: number) {
    const link = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<ReqResponse>(link);
  }
  public name: string = '';

  loadName(name: string) {
    this.name = name;
  }

  public n: number = 1;
  loadListPokemons() {
    let listPokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${this.name}`;
    this.http.get<ReqResponse>(url).subscribe((res) => {
      listPokemon = {
        id: this.n,
        name: res.name,
        abilities: res.abilities.map((e) => e.ability.name),
        avatar: res.sprites.front_default,
      };
      this.data.push(listPokemon);
      this.n++;
    });
    return this.data;
  }

  
  removePokemon(n: number) {
    let newList;
    console.log(n);
    this.data.map(e => {
      if (e.id === n) {
        this.data = this.data.filter(res => res.id !== n);
        console.log(this.data);
      }
    })
  }
}
