import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterResponse } from '../../../services/character/character.interface';
import { CharacterService } from '../../../services/character/character.service';

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
  styleUrls: ['./episode-characters.component.less']
})
export class EpisodeCharactersComponent implements OnInit {

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
