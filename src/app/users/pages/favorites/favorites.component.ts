import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  public pokemons: any[] = [];
  constructor(private pokemon: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemon.data;
  }

  getId(id: number) {
    this.pokemon.removePokemon(id);
    this.pokemons = this.pokemon.data;
  }
}
