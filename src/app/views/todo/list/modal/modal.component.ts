import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ElementRef, HostListener } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm!: NgForm;
  @Input() inputItem: Item | null = null;
  @Output() addItem = new EventEmitter<Item>();
  @Output() editItem = new EventEmitter<Item>();
  @Output() closeModal = new EventEmitter();

  initialLoad = true;
  isEditing = false;
  item!: Item;
  name = '';
  type = '';
  dateTodo = '';
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
    if (this.inputItem) {
      this.isEditing = true;
      this.setFormValues(this.inputItem);
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

  setFormValues(inputItem: Item) {
    this.name = inputItem.name;
    this.type = inputItem.type;
    this.dateTodo = this.unformatDate(inputItem.dateTodo);
  }

  setTodayDate() {
    const today = new Date();
    const dd = ('0' + today.getDate()).slice(-2);
    const mm = ('0' + (today.getMonth() + 1)).slice(-2);
    const yyyy = today.getFullYear();

    this.todayDate += dd + mm + yyyy;
  }

  onSubmit() {
    // set item
    this.item = {
      name: this.todoForm.value.name,
      type: this.todoForm.value.type,
      dateCreated: this.formatDate(this.todoForm.value.dateCreated),
      dateTodo: this.formatDate(this.todoForm.value.dateTodo)
    };

    // pass item
    this.isEditing ? this.editItem.emit(this.item) : this.addItem.emit(this.item);

    // reset
    this.closeModal.emit();
  }
}
