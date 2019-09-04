import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWindowComponent } from './guess-window.component';
import { ImageComponent } from '../image/image.component';
import { InfoComponent } from '../info/info.component';
import { LettersComponent } from '../letters/letters.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

describe('GuessWindowComponent', () => {
  let component: GuessWindowComponent;
  let fixture: ComponentFixture<GuessWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWindowComponent, ImageComponent, InfoComponent, LettersComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component should import pictures', () => {
    expect(component.pictures.length).toBeGreaterThanOrEqual(1);
  });
});
