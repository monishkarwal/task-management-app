import { TaskManagementService } from './../task-management.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() listName: string;
  @Input() last: any;

  listItems: any[];

  constructor(public taskManagement: TaskManagementService) {}

  ngOnInit(): void {
    console.log(this.listName);

    this.listItems = this.taskManagement.getListItems(this.listName);
  }

  addToList(input) {
    this.taskManagement.addListItem(this.listName, input);
  }

  deleteList() {
    this.taskManagement.deleteFromAllList(this.listName);
  }
}
