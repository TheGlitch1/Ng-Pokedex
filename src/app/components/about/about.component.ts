import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonInfo } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http:HttpClient) { }

  public routeParam: string | undefined;
  public pokemonObs : Observable<PokemonInfo> | undefined;

  ngOnInit(): void {
    this.routeParam = this.router.snapshot.params.id
    this.initPokemonData();

  }

  private initPokemonData(): void{
     this.pokemonObs = this.http.get<PokemonInfo>('https://pokeapi.co/api/v2/pokemon/'+ this.routeParam);

  }
}
