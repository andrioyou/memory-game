import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = 'TODO List';
  list: Item[] = [];
  modalOpened = false;
  status$: Observable<string> | null = null;
  editableItem: Item | null = null;
  editableItemIndex: number | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.list = this.todoService.getList();
    this.status$ = this.todoService.status;
  }

  syncList() {
    this.todoService.setList(this.list);
  }

  addItem(event: { item: Item; index: number | null }) {
    let i = null;
    const item = event.item;
    if (event.index || event.index === 0) {
      i = event.index;
    }
    if (i || i === 0) {
      this.list[i] = item;
    } else {
      this.list.push(item);
    }
    this.syncList();
    this.closeModal();
  }

  removeItem(i: number) {
    this.list.splice(i, 1);
    this.syncList();
  }

  editItem(i: number) {
    this.editableItem = this.list[i];
    this.editableItemIndex = i;
    this.openModal();
  }

  openModal() {
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
    this.editableItem = null;
  }
}
