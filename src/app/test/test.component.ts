import { Component, OnInit } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { withLatestFrom, map, tap } from 'rxjs/operators';

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
  initial$: Observable<User[]> = of(usersInput).pipe(
    tap(users => {
      this.modifiedSubject.next(users);
    })
  );

  ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    EDIT: 'edit'
  };
  actionSubject = new BehaviorSubject<string>('');
  action$ = this.actionSubject.asObservable();

  actionUserSubject = new BehaviorSubject<User>(usersInput[0]);
  actionUser$ = this.actionUserSubject.asObservable();

  modifiedSubject = new BehaviorSubject<User[]>([]);
  modified$ = this.modifiedSubject.asObservable();

  users$!: Observable<User[]>;

  constructor() {}

  ngOnInit() {
    this.users$ = this.action$.pipe(
      withLatestFrom(this.actionUser$, this.initial$, this.modified$),
      map(([action, actionUser, initial, modified]) => {
        const users = this.doAction(action, actionUser, initial, modified);
        this.updateModified(users);
        return users;
      })
    );
  }

  addUser() {
    this.actionUserSubject.next({
      id: 4,
      name: 'Vita'
    });
    this.actionSubject.next(this.ACTIONS.ADD);
  }

  deleteUser() {
    this.actionUserSubject.next({
      id: 3,
      name: 'Liubko'
    });
    this.actionSubject.next(this.ACTIONS.DELETE);
  }

  editUser() {
    this.actionUserSubject.next({
      id: 1,
      name: 'Andriuha'
    });
    this.actionSubject.next(this.ACTIONS.EDIT);
  }

  updateModified(modified: User[]) {
    this.modifiedSubject.next(modified);
  }

  doAction(action: string, actionUser: User, initial: User[], modified: User[]) {
    switch (action) {
      case this.ACTIONS.ADD:
        modified.push(actionUser);
        return modified;
      case this.ACTIONS.DELETE:
        modified = modified.filter(user => user.id !== actionUser.id);
        return modified;
      case this.ACTIONS.EDIT:
        const i = modified.findIndex(user => user.id === actionUser.id);
        if (i > -1) {
          modified[i] = actionUser;
        }
        return modified;
    }
    return modified;
  }
}
