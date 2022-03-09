import { PokemonComponent } from './pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule),
  data: {
    title: 'Home'
  }
},
{
  path: 'pokemon/:nome',
  component: PokemonComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
