import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full' },
  {
    path: 'character',
    loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule),
  },
  {
    path: 'episode',
    loadChildren: () => import('./modules/episode/episode.module').then(m => m.EpisodeModule),
  },
  {
    path: 'locations',
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
