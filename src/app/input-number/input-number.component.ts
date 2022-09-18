import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input() 
  quantity: number;

  @Input()
  max:number;


  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }


  downQuantity(): void{
    if(this.quantity > 0)
        this.quantity--;
        this.quantityChange.emit(this.quantity);
}

  upQuantity(): void{
      if(this.quantity < this.max){
        this.quantity++;
        this.quantityChange.emit(this.quantity);
      }
      else{
        this.maxReached.emit("se alcanzo el maximo");
      }  
      
  }


  




}
