import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConfig } from '../../core/api/api-config.class';
import { ICharacterItemResponse, ICharacterResponse } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private api: ApiConfig
  ) { }

  public findAll(q?: any): Observable<ICharacterResponse[]> {
    return this.api.get<{ results: ICharacterResponse[] }>('character', q || {})
      .pipe(
        map((res) => res.results)
      );
  }

  public findMultiple(ids: string): Observable<ICharacterResponse[]> {
    return this.api.get<ICharacterResponse[]>(`character/${ids}`).pipe(
      map(e => {
        if (e?.length) {
          return e;
        } else {
          return [e] as unknown as ICharacterResponse[];
        }
      })
    )
  }

  public findById(id: number | string): Observable<ICharacterItemResponse> {
    return this.api.get(`character/${id}`)
  }

}
