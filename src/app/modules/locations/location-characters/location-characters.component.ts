import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterResponse } from '../../../services/character/character.interface';
import { CharacterService } from '../../../services/character/character.service';

@Component({
  selector: 'app-location-characters',
  templateUrl: './location-characters.component.html',
  styleUrls: ['./location-characters.component.less']
})
export class LocationCharactersComponent implements OnInit {
  characterList: ICharacterResponse[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    const ids = this.activatedRoute.snapshot.paramMap.get('id');
    if (ids) {
      this.characterService.findMultiple(ids).subscribe(res => this.characterList = res)
    }
  }

}
