import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeRoutingModule } from './episode-routing.module';

@NgModule({
  declarations: [
    EpisodeRoutingModule.components,
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
  ]
})
export class EpisodeModule { }
