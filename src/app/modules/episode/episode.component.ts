import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if ((params as any)?.search) {
          this.getAllEpisode({
            name: (params as any)?.search
          })
        } else {
          this.getAllEpisode()
        }
      }
      );
  }

  private getAllEpisode(q?: any) {
    this.episodeService.findAll(q).subscribe(res => this.episodioList = res)
  }

  getIds(urls: string[]) {
    return urls && urls
      .map((e: any) => e.split('/').reverse()[0])
      .join(',')
  }

}
