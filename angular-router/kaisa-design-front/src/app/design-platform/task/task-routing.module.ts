import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task.component';


const routes: Routes = [{
  path: '', component: TaskComponent,
}, {
  path: '', children: [{
    path: 'create', component: TaskComponent
  }],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TaskRoutingModule {}
