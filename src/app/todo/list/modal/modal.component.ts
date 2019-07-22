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
  @Output() addNewItem = new EventEmitter<{ item: Item; index: number | null }>();
  @Output() closeModal = new EventEmitter();
  @Input() inputItem: Item | null = null;
  @Input() inputItemIndex: number | null = null;
  private initialLoad = true;
  item: Item | null = null;
  name = '';
  type = '';
  dateTodo = '';

  curentIndex: number | null = null; // For editing item
  todayDate = '';

  constructor(private eRef: ElementRef) {}

  // close modal if clicked outside of it
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target) && !this.initialLoad) {
      this.closeModal.emit();
    } else {
      this.initialLoad = false;
    }
  }

  ngOnInit() {
    this.setTodayDate();

    // If we are editing the item
    if (this.inputItem && this.inputItemIndex !== null) {
      this.curentIndex = this.inputItemIndex;
      this.setFormValues();
    }
  }

  private formatDate(date: string) {
    if (!date) {
      return '';
    }
    return date.substr(0, 2) + '/' + date.substr(2, 2) + '/' + date.substr(4, 4);
  }

  private unformatDate(date: string) {
    return (date = date.replace('/', ''));
  }

  setFormValues() {
    if (this.inputItem) {
      this.name = this.inputItem.name;
      this.type = this.inputItem.type;
      this.dateTodo = this.unformatDate(this.inputItem.dateTodo);
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
      // set object
      const item: Item = {
        name: this.todoForm.value.name,
        type: this.todoForm.value.type,
        dateCreated: this.formatDate(this.todoForm.value.dateCreated),
        dateTodo: this.formatDate(this.todoForm.value.dateTodo)
      };
      this.item = item;

      // pass item
      let i;
      this.curentIndex || this.curentIndex === 0 ? (i = this.curentIndex) : (i = null);
      this.addNewItem.emit({
        item: this.item,
        index: i
      });

      // reset
      this.reset();
    }
  }

  reset() {
    if (this.todoForm) {
      this.todoForm.reset();
    }
    this.item = null;
    this.setTodayDate();
  }
}
