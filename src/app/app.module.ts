import { TaskManagementService } from './task-management.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ListItemComponent],
  imports: [BrowserModule],
  providers: [TaskManagementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
