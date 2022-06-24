import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if ((params as any)?.search) {
          this.getAllLocations({
            name: (params as any)?.search
          })
        } else {
          this.getAllLocations()
        }
      }
    );
  }

  private getAllLocations(q?: any) {
    this.locationService.findAll(q).subscribe(res => {
      this.locationList = res
    })
  }

  getIds(urls: string[]) {
    return urls && urls
      .map((e: any) => e.split('/').reverse()[0])
      .join(',')
  }

}
