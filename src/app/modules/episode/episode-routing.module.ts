import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeComponent,
  },
  {
    path: 'character/:id',
    component: EpisodeCharactersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {
  static components = [
    EpisodeComponent,
  ];
}
