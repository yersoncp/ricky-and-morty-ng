import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterItemResponse } from '../../../services/character/character.interface';
import { CharacterService } from '../../../services/character/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.less']
})
export class CharacterDetailComponent implements OnInit {

  characterSingle: ICharacterItemResponse | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.findById(id).subscribe(res => this.characterSingle = res)
    }
  }

}
