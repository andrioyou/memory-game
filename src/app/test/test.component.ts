import { Component, OnInit } from '@angular/core';
import { of, Observable, Subject, merge } from 'rxjs';
import { scan } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
}

const usersInput: User[] = [
  {
    id: 2,
    name: 'Katya'
  },
  {
    id: 1,
    name: 'Andrew'
  },
  {
    id: 3,
    name: 'Liubko'
  }
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  usersInput$: Observable<User[]> = of(usersInput);

  ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    EDIT: 'edit'
  };
  actionSubject = new Subject<any>();
  // actionSubject = new Subject<{ name: string, user: User }>();
  action$ = this.actionSubject.asObservable();

  users$!: Observable<User[]>;

  constructor() {}

  ngOnInit() {
    this.users$ = merge(this.usersInput$, this.action$).pipe(
      scan((users: User[], action: { name: string; user: User }) => {
        return this.doAction(users, action);
      })
    );
  }

  addUser() {
    this.actionSubject.next({
      name: this.ACTIONS.ADD,
      user: {
        id: 4 + Math.random(),
        name: 'Vita'
      }
    });
  }

  deleteUser() {
    this.actionSubject.next({
      name: this.ACTIONS.DELETE,
      user: {
        id: 1,
        name: 'Andrew'
      }
    });
  }

  editUser() {
    this.actionSubject.next({
      name: this.ACTIONS.EDIT,
      user: {
        id: 2,
        name: 'Katerina'
      }
    });
  }

  doAction(users: User[], action: { name: string; user: User }): User[] {
    switch (action.name) {
      case this.ACTIONS.ADD:
        return [...users, action.user];
      case this.ACTIONS.DELETE:
        return users.filter(user => user.id !== action.user.id);
      case this.ACTIONS.EDIT:
        const i = users.findIndex(user => user.id === action.user.id);
        if (i > -1) {
          users[i] = action.user;
        }
        return users;
    }
    return users;
  }
}
