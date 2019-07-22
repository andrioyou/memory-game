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

  it('current image element should be greater or equal 0', () => {
    const comp = new GuessWindowComponent();
    const currentEl = comp.currentEl;
    expect(currentEl).toBeGreaterThanOrEqual(0);
  });

  it('initial win status is false', () => {
    const comp = new GuessWindowComponent();
    const win = comp.win;
    expect(win).toBeFalsy();
  });

  it('after complete method was triggered win should be true', () => {
    const comp = new GuessWindowComponent();
    comp.complete();
    const win = comp.win;
    expect(win).toBeTruthy();
  });
});
