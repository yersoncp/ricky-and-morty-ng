import { Component, OnInit } from '@angular/core';
import { IEpisodioResponse } from '../../services/episode/episode.interface';
import { EpisodeService } from '../../services/episode/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.less']
})
export class EpisodeComponent implements OnInit {

  episodioList: IEpisodioResponse[] = [];

  constructor(
    private episodeService: EpisodeService,
  ) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  private getAllCharacter() {
    this.episodeService.findAll().subscribe(res => this.episodioList = res)
  }

}
