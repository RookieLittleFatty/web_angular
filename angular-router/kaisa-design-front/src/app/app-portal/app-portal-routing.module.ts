import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppPortalComponent} from "./app-portal.component";

const routes: Routes = [
  {path: '', component: AppPortalComponent, children: [
      {path: '', redirectTo: '/appPortal/meeting', pathMatch: 'full'},
      {path: 'meeting', loadChildren: './app-meeting/app-meeting.module#AppMeetingModule'},
      {path: 'inspect', loadChildren: './app-inspect/app-inspect.module#AppInspectModule'},
      {path: 'todo', loadChildren: './app-todo/app-todo.module#AppTodoModule'}
    ]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPortalRoutingModule {}




