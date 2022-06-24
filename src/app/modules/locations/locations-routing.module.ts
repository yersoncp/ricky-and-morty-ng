import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationCharactersComponent } from './location-characters/location-characters.component';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
  },
  {
    path: 'character/:id',
    component: LocationCharactersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {
  static components = [
    LocationsComponent,
  ];
}
