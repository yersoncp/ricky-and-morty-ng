import { Action, createAction, props } from '@ngrx/store';
import { ICharacterResponse } from '../../services/character/character.interface';

export enum CharacterActionsTypes {
  INIT = '[Character] Init',
  LOAD_CHARACTERS = '[Character] Load Characters',
  LOAD_CHARACTERS_SUCCESS = '[Character] Load Characters Success',
  LOAD_CHARACTERS_FAILURE = '[Character] Load Characters Failure',
}
export const Init = createAction(CharacterActionsTypes.INIT);

export const LoadCharacters = createAction(
  CharacterActionsTypes.LOAD_CHARACTERS,
  props<{ filter?: any }>()
);

export const LoadCharactersSuccess = createAction(
  CharacterActionsTypes.LOAD_CHARACTERS_SUCCESS,
  props<{ data: ICharacterResponse[] }>()
);

export const LoadCharactersFailure = createAction(
  CharacterActionsTypes.LOAD_CHARACTERS_FAILURE,
  props<{ error: string | null }>()
);
