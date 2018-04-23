import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppTodoComponent} from "./app-todo.component";

const routes: Routes = [
  {path: '', component: AppTodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTodoRoutingModule {}
