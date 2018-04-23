import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppTodoComponent} from "./app-todo.component";
import {AppTodoRoutingModule} from "./app-todo-routing.module";
import {AppCommonModule} from "../app-common/app-common.module";

@NgModule({
  imports: [CommonModule, AppTodoRoutingModule, AppCommonModule],
  declarations: [AppTodoComponent]
})
export class AppTodoModule {}
