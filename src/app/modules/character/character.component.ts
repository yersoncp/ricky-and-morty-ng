import { Component, OnInit } from '@angular/core';
import { ICharacterResponse } from '../../services/character/character.interface';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {

  characterList: ICharacterResponse[] = [];

  constructor(
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  private getAllCharacter() {
    this.characterService.findAll().subscribe(res => this.characterList = res)
  }

}
