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
  modal = false;
  message$: Observable<string> | null = null;
  itemToEdit: Item | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.list = this.todoService.getList();
    this.message$ = this.todoService.message;
    // this.todoService.setList([
    //   {
    //     index: 0,
    //     name: 'First item',
    //     type: 'Home things',
    //     dateCreated: '01/01/2000',
    //     dateTodo: '01/01/2020',
    //   }
    // ]);
  }

  syncList() {
    this.todoService.setList(this.list);
  }

  addItem(item: Item) {
    item.index = this.list.length;
    this.list.push(item);
    this.syncList();
    this.closeModal();
  }

  removeItem(i: number) {
    this.list.splice(i, 1);
    this.syncList();
  }

  editItem(i: number) {
    console.log('Edit item - ' + i);
    this.itemToEdit = this.list[i];
    this.openModal();
  }

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  onCloseModal() {
    console.log('onCloseModal');
  }
}
