import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Game } from './game-list/Game';


const URL ='https://632a208d1090510116bbd099.mockapi.io/api/v1/games';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http:HttpClient) { }


  public getAll():Observable<Game[]>{
    return this.http.get<Game[]>(URL).pipe(tap((games:Game[]) => games.forEach(game => game.quantity=0)));
  }

}
