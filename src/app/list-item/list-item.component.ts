import { TaskManagementService } from './../task-management.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() data: string;
  @Input() listName: string;
  @Input() last: any;

  constructor(public taskManagement: TaskManagementService) {}

  ngOnInit(): void {}

  deleteItem() {
    this.taskManagement.deleteListItem(this.listName, this.data);
  }

  moveItem() {
    this.taskManagement.moveListItem(this.listName, this.data);
  }
}
