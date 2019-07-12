import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
    component.ngOnInit();
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
});
