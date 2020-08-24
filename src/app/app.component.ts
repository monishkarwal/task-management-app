import { TaskManagementService } from './task-management.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-management-app';

  lists: string[] = [];

  constructor(public taskManagement: TaskManagementService) {
    this.lists = taskManagement.getAllListItems();
  }

  addToList(listName) {
    this.taskManagement.addToAllList(listName);
  }

  deleteFromList(listName) {
    this.taskManagement.deleteFromAllList(listName);
  }
}
