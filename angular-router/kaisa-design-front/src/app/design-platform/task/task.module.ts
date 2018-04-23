import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TaskRoutingModule} from './task-routing.module';
import {TaskComponent} from './task.component';
import {ModalModule, BsDatepickerModule} from "ngx-bootstrap";
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, TaskRoutingModule, ModalModule.forRoot(), BsDatepickerModule.forRoot()],
  declarations: [TaskComponent]
})
export class TaskModule {}
