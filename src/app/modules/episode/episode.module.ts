import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';

@NgModule({
  declarations: [
    EpisodeRoutingModule.components,
    EpisodeCharactersComponent,
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
  ]
})
export class EpisodeModule { }
