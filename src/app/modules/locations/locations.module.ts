import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCharactersComponent } from './location-characters/location-characters.component';

@NgModule({
  declarations: [
    LocationsRoutingModule.components,
    LocationCharactersComponent,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
