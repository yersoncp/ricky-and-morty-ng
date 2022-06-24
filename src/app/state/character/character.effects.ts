import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, concatMap } from "rxjs";
import { CharacterService } from "../../services/character/character.service";
import * as characterActions from './character.action'

@Injectable()
export class CharactersEffects {

  constructor(
    private readonly actions$: Actions,
    private characterService: CharacterService,
  ) {}

  public readonly loadCharacters$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.LoadCharacters),
      concatMap((query: any) => {
        return this.characterService.findAll({ name: query?.name }).pipe(
          map(data => characterActions.LoadCharactersSuccess({ data })),
          catchError((error: string | null ) => of(characterActions.LoadCharactersFailure({ error })))
        )
      }
      )
    );
  });
}
