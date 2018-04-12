import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [{
  path: '', component: ProjectComponent,
}, {
  path: '', children: [{
    path: 'detail', component: ProjectDetailComponent
  }],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class ProjectRoutingModule {}
