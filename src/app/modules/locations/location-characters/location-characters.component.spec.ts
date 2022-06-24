import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCharactersComponent } from './location-characters.component';

describe('LocationCharactersComponent', () => {
  let component: LocationCharactersComponent;
  let fixture: ComponentFixture<LocationCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
