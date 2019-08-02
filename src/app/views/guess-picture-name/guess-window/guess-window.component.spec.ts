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

  it('initially current image element should be greater or equal 0', () => {
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

  it('after restart values should be set to default', () => {
    component.win = true;
    component.message = 'test';
    component.currentEl = 100500;
    component.restart();
    expect(component.win).toEqual(false);
    expect(component.message).toEqual('Guess picture name');
    expect(component.currentEl).toEqual(0);
  });

  it('component should import pictures', () => {
    expect(component.pictures.length).toBeGreaterThanOrEqual(1);
  });

  it('nextPicture method should switch to next item if present', () => {
    expect(component.pictures.length).toBeGreaterThanOrEqual(2);
    if (component.pictures.length > 2) {
      const currentEl = component.currentEl;
      component.nextPicture();
      expect(component.currentEl).toEqual(currentEl + 1);
    }
  });

  it('nextPicture method should complete game if not more items present', () => {
    component.currentEl = component.pictures.length - 1;
    component.nextPicture();
    expect(component.win).toEqual(true);
    expect(component.message).toEqual('Сongratulations! you won!');
  });
});
