import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: Item[] = this.todoService.getList();
  editableItem: Item | null = null;
  editableItemIndex!: number;
  listStatus$: Observable<string> = this.todoService.status;
  modalOpened = false;

  constructor(private todoService: TodoService) {}

  syncList() {
    this.todoService.setList(this.list);
  }

  addItem(item: Item) {
    this.list.push(item);
    this.syncList();
    this.closeModal();
  }

  editItem(item: Item) {
    this.list[this.editableItemIndex] = item;
    this.syncList();
    this.closeModal();
    this.editableItem = null;
  }

  removeSelectedItem(i: number) {
    this.list.splice(i, 1);
    this.syncList();
  }

  editSelectedItem(i: number) {
    this.editableItem = this.list[i];
    this.editableItemIndex = i;
    this.openModal();
  }

  openModal() {
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
  }
}
