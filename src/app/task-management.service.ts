import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  allLists: string[] = ['Todos', 'Pending', 'Done'];

  localDB = {
    Todos: ['Item 1', 'Item 2', 'Item 3'],
    Pending: ['Item 1', 'Item 2', 'Item 3'],
    Done: [],
  };

  getAllListItems() {
    return this.allLists;
  }

  addToAllList(listName) {
    this.allLists.push(listName);
    this.localDB[listName] = [];
  }

  deleteFromAllList(listName) {
    let index: number = this.allLists.indexOf(listName);
    if (index !== -1) {
      this.allLists.splice(index, 1);
      delete this.localDB[listName];
    }
  }

  getListItems(listName) {
    return this.localDB[listName];
  }

  addListItem(listName, input) {
    if (this.localDB[listName]) {
      this.localDB[listName].push(input);
    } else {
      console.log('Not Found');
      this.localDB[listName] = [input];
      console.log(this.localDB);
    }
  }

  deleteListItem(listName, input) {
    let temp = this.localDB[listName];
    let index = temp.indexOf(input);
    temp.splice(index, 1);
    this.localDB[listName] = temp;
  }

  moveListItem(listName, input) {
    this.deleteListItem(listName, input);
    let nextList = this.allLists[this.allLists.indexOf(listName) + 1];
    this.addListItem(nextList, input);
  }

  constructor() {}
}
