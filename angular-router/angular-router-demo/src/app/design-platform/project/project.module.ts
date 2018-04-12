import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule],
  declarations: [ProjectComponent, ProjectDetailComponent]
})
export class ProjectModule {}
