import { Component } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit():void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => res
    )
  }
}
