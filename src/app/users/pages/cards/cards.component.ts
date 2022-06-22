import { Component, Input, OnInit } from '@angular/core'
import { PokemonsService } from 'src/app/services/pokemons.service'
import { ReqUser } from 'src/app/models/response'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  
  data: any[] = []

  public Pokemons: ReqUser[] = []

  constructor(private pokemons: PokemonsService) {}

  ngOnInit(): void {
    this.loadListPokemon(1);
    this.loadListPokemon(2);
    this.loadListPokemon(3);
    this.loadListPokemon(4);
    this.loadListPokemon(5);
    this.loadListPokemon(6);
    this.loadListPokemon(7);
    this.loadListPokemon(8);
    this.loadListPokemon(9);
    this.loadListPokemon(10);
    this.loadListPokemon(11);
    this.loadListPokemon(12);
    this.loadListPokemon(13);
    this.loadListPokemon(14);
    this.loadListPokemon(15);
    this.loadListPokemon(16);
    this.loadListPokemon(17);
    this.loadListPokemon(18);
    this.loadListPokemon(19);
  }
  loadListPokemon(id: number) {
    let dataPokemon;

      this.pokemons.loadPokemon(id).subscribe((res) => {
        dataPokemon = {
          id: res.id,
          name: res.name,
          abilities: res.abilities.map((e) => e.ability.name),
          avatar: res.sprites.front_default,
        }
        this.data.push(dataPokemon)
      })
  }

  getName(name: string) {
    this.pokemons.loadName(name);
    this.pokemons.loadListPokemons();
  }
}
