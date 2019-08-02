import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MemoryGameComponent } from './memory-game.component';

describe('MemoryGameComponent', () => {
  let component: MemoryGameComponent;
  let fixture: ComponentFixture<MemoryGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemoryGameComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryGameComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('image items are clickable initially', () => {
    expect(component.gridClickable).toBeTruthy();
  });

  it('images URLS array should be greater 32 to ensure grid will work with any supported size (max 8x8)', () => {
    expect(component.images.length).toBeGreaterThanOrEqual(32);
  });

  it('grid images array is contain items with images', () => {
    expect(component.gridImages.length).toBeGreaterThan(0);
  });

  it('startStopwatch method shoud start stopwatchInterval', () => {
    component.startStopwatch();
    expect(component.stopwatchInterval).not.toEqual(null);
  });

  it('stopStopwatch method shoud stop stopwatchInterval', () => {
    component.startStopwatch();
    component.stopStopwatch();
    expect(component.stopwatchInterval).toEqual(null);
  });

  it('after changing grid size should be performed properties reset', () => {
    component.changeGridSize(6);
    expect(component.stopwatchInterval).toEqual(null);
    expect(component.stopwatch).toEqual(0);
    expect(component.compareIndex).toEqual(null);
    expect(component.comparePictureId).toEqual(null);
    expect(component.score).toEqual(0);
  });

  it('after clicking the item, stopwatch should start', () => {
    const debugElement = fixture.debugElement;
    debugElement.query(By.css('.item:nth-child(1)')).triggerEventHandler('click', null);
    expect(component.stopwatchInterval).not.toEqual(null);
  });

  it('after clicking the right pair of images, score should increase', () => {
    const compiled = fixture.debugElement.nativeElement;
    const picturesEls = compiled.querySelectorAll('.item');

    // click first picture
    const pictureWithId = picturesEls[0];
    pictureWithId.click();

    // get picture with same id
    const currentPicId = component.gridImages[0].pictureId;
    let nextPicIndex = null;
    component.gridImages.forEach((picture, index) => {
      if (index === 0) {
        return;
      }
      if (currentPicId === picture.pictureId) {
        nextPicIndex = index;
      }
    });
    expect(nextPicIndex).not.toEqual(null);

    // click picture with same id
    if (nextPicIndex) {
      const pictureWithSameId = picturesEls[nextPicIndex];
      pictureWithSameId.click();
    }
    expect(component.score).not.toEqual(0);
  });

  it('if all pictures are opened, game should complete', () => {
    component.gridImages.forEach(picture => {
      picture.opened = true;
    });

    component.checkGridComplete();
    fixture.detectChanges();
    expect(component.gridCompleted).toBeTruthy();
  });

  it('should reset on restart button click', () => {
    component.gridCompleted = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('.popup button');
    button.click();
    expect(component.gridCompleted).toEqual(false);
    expect(component.stopwatch).toEqual(0);
    expect(component.stopwatchInterval).toEqual(null);
    expect(component.score).toEqual(0);
  });
});
