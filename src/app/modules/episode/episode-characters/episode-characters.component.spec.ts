import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCharactersComponent } from './episode-characters.component';

describe('EpisodeCharactersComponent', () => {
  let component: EpisodeCharactersComponent;
  let fixture: ComponentFixture<EpisodeCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
