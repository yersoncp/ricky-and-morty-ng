import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConfig } from '../../core/api/api-config.class';
import { ILocationResponse } from './location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private api: ApiConfig
  ) { }

  public findAll(q?: any): Observable<ILocationResponse[]> {
    return this.api.get<{ results: ILocationResponse[] }>('location', q || {})
      .pipe(
        map((res) => res.results)
      );
  }

}
