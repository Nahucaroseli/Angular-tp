import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameHomeComponent } from './game-home/game-home.component';
import { FormsModule } from '@angular/forms';
import { GameContactComponent } from './game-contact/game-contact.component';
import {AppRoutingModule} from './app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameHomeComponent,
    GameContactComponent,
    InputNumberComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
