import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Item } from './interfaces/item.interface';

describe('TodoService', () => {
  let service: TodoService = new TodoService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
    service = new TodoService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get list should return empty array if not data in localstorage', () => {
    const result = service.getList();
    expect(result).toEqual([]);
  });

  it('get list should return array of data if data is present in localstorage', () => {
    localStorage.clear();
    const items: Item[] = [
      {
        name: 'test',
        type: 'test',
        dateCreated: 'test',
        dateTodo: 'test'
      }
    ];
    service.setList(items);
    const result = service.getList();
    expect(result).toEqual(items);
    localStorage.clear();
  });

  it('status should return observable with string message', () => {
    service.status.subscribe(data => {
      expect(typeof data).toBe('string');
    });
  });

  it('should return empty list if browser doesnt support localstorage', () => {
    spyOn<any>(service, 'getBrowserSupport').and.returnValue(false);
    expect(service.getList()).toEqual([]);
  });
});
