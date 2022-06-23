import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';

@NgModule({
  declarations: [
    LocationsRoutingModule.components,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
