import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersComponent } from './letters.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

describe('LettersComponent', () => {
  let component: LettersComponent;
  let fixture: ComponentFixture<LettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LettersComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initially correct letters list should be empty', () => {
    const comp = new LettersComponent();
    const listLength = comp.correctLettersList.length;
    expect(listLength).toBe(0);
  });

  it('should emit event if correct letters list is equal to initial word', () => {
    component.correctLettersList = 'test'.split('');
    component.word = 'test';
    spyOn(component.solved, 'emit');
    component.checkResult();
    expect(component.solved.emit).toHaveBeenCalled();
  });

  it('should not emit event if correct letters list is not matching to initial word', () => {
    component.correctLettersList = 'qwerty'.split('');
    component.word = 'test';
    spyOn(component.solved, 'emit');
    component.checkResult();
    expect(component.solved.emit).not.toHaveBeenCalled();
  });
});
