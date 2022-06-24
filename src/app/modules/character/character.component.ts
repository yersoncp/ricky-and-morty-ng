import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICharacterResponse } from '../../services/character/character.interface';
import { CharacterState } from '../../state/character/character.reducer';
import * as charactersSelectors from './../../state/character/character.selector'
import * as charactersActions from './../../state/character/character.action'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {

  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(charactersSelectors.getCharactersLoaded)
  );
  public readonly characterList$: Observable<ICharacterResponse[]> = this.store.pipe(
    select(charactersSelectors.getAllCharacters)
  );

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<CharacterState>,
  ) { }

  ngOnInit(): void {
    this.init();
    this.route.queryParams
      .subscribe(params => {
        if ((params as any)?.search) {
          this.loadCharacters({
            name: (params as any)?.search
          });
        } else {
          this.loadCharacters();
        }
      }
    );
  }

  public init(): void {
    this.store.dispatch(charactersActions.Init());
  }
  public loadCharacters(q?: any): void {
    this.store.dispatch(charactersActions.LoadCharacters(q));
  }

}
