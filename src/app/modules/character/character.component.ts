import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if ((params as any)?.search) {
          this.getAllCharacter({
            name: (params as any)?.search
          })
        } else {
          this.getAllCharacter()
        }
      }
    );
  }

  private getAllCharacter(q?: any) {
    this.characterService.findAll(q).subscribe(res => this.characterList = res)
  }

}
