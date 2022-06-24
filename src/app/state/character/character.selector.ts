import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState, CHARACTER_FEATURE_KEY } from './character.reducer';

export const getCharactersState = createFeatureSelector<CharacterState>(CHARACTER_FEATURE_KEY);

export const getCharactersLoaded = createSelector(
  getCharactersState,
  (state: CharacterState) => state.loaded
);

export const getCharactersError = createSelector(
  getCharactersState,
  (state: CharacterState) => state.error
);

export const getAllCharacters  = createSelector(
  getCharactersState,
  (state: CharacterState) => state.characters
);
