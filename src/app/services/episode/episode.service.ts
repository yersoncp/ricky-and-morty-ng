import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConfig } from '../../core/api/api-config.class';
import { IEpisodioResponse } from './episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(
    private api: ApiConfig
  ) { }

  public findAll(q?: any): Observable<IEpisodioResponse[]> {
    return this.api.get<{ results: IEpisodioResponse[] }>('episode', q || {})
      .pipe(
        map((res) => res.results)
      );
  }

}
