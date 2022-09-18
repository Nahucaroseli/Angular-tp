import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from './Game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private cart:GameCartService) { }
  games: Game[] = [
    {
      image:"assets/img/download.png",
      name:'Grand Theft Auto 5',
      gender:'Open World',
      price:50,
      stock:0,
      clearance:true,
      quantity:0,
    },
    {
      image:"assets/img/Call-of-Duty-2021.jpg",
      name:'Call of Duty',
      gender:'Shooter',
      price:70,
      stock:3,
      clearance:false,
      quantity:0,
    },
  ];


  ngOnInit(): void {
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
