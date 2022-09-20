import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GameDataService } from '../game-data.service';
import { Game } from './Game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private cart:GameCartService,private gameDataService:GameDataService) { }
  
  
  
  
  games: Game[]= [];

  ngOnInit(): void {
    this.gameDataService.getAll()
    .subscribe(games => this.games = games);
  }


  maxReached(m:string):void{
    alert(m);
  }


  addToCart(game:Game):void{
    this.cart.addtoCart(game);
    game.stock -= game.quantity;
    game.quantity = 0;
  }



}
