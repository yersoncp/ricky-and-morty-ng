import { Component, OnInit } from '@angular/core';
import { ILocationResponse } from '../../services/location/location.interface';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.less']
})
export class LocationsComponent implements OnInit {

  locationList: ILocationResponse[] = [];

  constructor(
    private locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  private getAllCharacter() {
    this.locationService.findAll().subscribe(res => this.locationList = res)
  }

}
