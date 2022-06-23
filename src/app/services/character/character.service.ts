import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConfig } from '../../core/api/api-config.class';
import { ICharacterResponse } from './character.interface';

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

}
