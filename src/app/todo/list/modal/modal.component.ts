import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ElementRef, HostListener } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm: NgForm | null = null;
  @Output() addNewItem = new EventEmitter<Item>();
  @Output() closeModal = new EventEmitter();
  @Input() inputItem: Item | null = null;
  item: Item | null = null;
  todayDate = '';

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeModal.emit();
    }
  }

  ngOnInit() {
    this.setTodayDate();
    if (this.inputItem) {
    }
  }

  setTodayDate() {
    const today = new Date();
    const dd = ('0' + today.getDate()).slice(-2);
    const mm = ('0' + (today.getMonth() + 1)).slice(-2);
    const yyyy = today.getFullYear();
    this.todayDate += dd + mm + yyyy;
  }

  onSubmit() {
    if (this.todoForm && this.todoForm.valid) {
      const item: Item = {
        name: this.todoForm.value.name,
        type: this.todoForm.value.type,
        dateCreated: this.changeDateFormat(this.todoForm.value.dateCreated),
        dateTodo: this.changeDateFormat(this.todoForm.value.dateTodo)
      };
      this.item = item;
      this.addNewItem.emit(this.item);
      this.reset();
    }
  }

  changeDateFormat(date: string) {
    if (!date) {
      return '';
    }
    return date.substr(0, 2) + '/' + date.substr(2, 2) + '/' + date.substr(4, 4);
  }

  reset() {
    if (this.todoForm) {
      this.todoForm.reset();
    }
    this.item = null;
    this.setTodayDate();
  }
}
