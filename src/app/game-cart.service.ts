import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private _cartList: Game[] = [];


  cartList: BehaviorSubject<Game[]> = new BehaviorSubject(this._cartList);


  constructor() { }


  addtoCart(game: Game){
    let item = this._cartList.find((v) => v.name == game.name);
    if(!item){
      this._cartList.push({... game});
      
    }else{
      item.quantity+=game.quantity;
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList);
  }
}
