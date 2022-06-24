import { ActionReducerMap } from '@ngrx/store';

/**
 * Import reducers
 */
import * as fromCharacter from './character/character.reducer';

/**
 * Import Efects
 */
import { CharactersEffects } from './character/character.effects';

export const effects = [
  CharactersEffects,
];

export const reducers: ActionReducerMap<any> = {
  characters: fromCharacter.reducer,
};
