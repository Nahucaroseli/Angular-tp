import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameContactComponent } from './game-contact/game-contact.component';
import { GameHomeComponent } from './game-home/game-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameHomeComponent,
  },
  {
    path: 'about',
    component: GameContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}