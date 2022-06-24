import { Action, createReducer, on } from "@ngrx/store";
import { ICharacterResponse } from "../../services/character/character.interface";
import * as CharacterActions from './character.action'

export const CHARACTER_FEATURE_KEY = 'characters';
export interface CharacterState {
  characters: ICharacterResponse[];
  loaded: boolean;
  error?: string | null;
}

export const initialCharacterState: CharacterState = {
  characters: [],
  loaded: false,
  error: null,
};

const charactersReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.Init, (state: CharacterState) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(CharacterActions.LoadCharacters, (state: CharacterState) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(CharacterActions.LoadCharactersSuccess, (state: CharacterState, { data } : { data: ICharacterResponse[] }) => ({
    ...state,
    characters: data,
    loaded: true,
    error: null,
  })),

  on(CharacterActions.LoadCharactersFailure, (state: CharacterState, { error }: { error: string | null }) => ({
    ...state,
    error,
  })),
);

export function reducer(state: CharacterState | undefined, action: Action) {
  return charactersReducer(state, action);
}
