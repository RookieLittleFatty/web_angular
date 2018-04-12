import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LeftSideComponent } from './project-detail/left-side/left-side.component';
import { MeetingComponent } from './project-detail/meeting/meeting.component';
import { ItinerantDetectiveComponent } from './project-detail/itinerant-detective/itinerant-detective.component';
import { ProjectInfoComponent } from './project-detail/project-info/project-info.component';
import {CommonService} from '../../common/common.service';
import { ProjectFileComponent } from './project-detail/project-file/project-file.component';
import { DataAnalysisComponent } from './project-detail/data-analysis/data-analysis.component';

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(), PaginationModule.forRoot(), FormsModule, ProjectRoutingModule],
  declarations: [ProjectComponent, ProjectDetailComponent, LeftSideComponent, MeetingComponent, ItinerantDetectiveComponent, ProjectInfoComponent, ProjectFileComponent, DataAnalysisComponent],
  providers: [CommonService]
})
export class ProjectModule {}
