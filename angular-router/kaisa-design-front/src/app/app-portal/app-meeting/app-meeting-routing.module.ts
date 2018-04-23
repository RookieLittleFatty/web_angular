import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MeetingHomeComponent} from "./meeting-home/meeting-home.component";
import {AppMeetingDetailComponent} from "./app-meeting-detail/app-meeting-detail.component";

const routes: Routes = [
  {path: '', component: MeetingHomeComponent},
  {path: '', children: [
      {path: 'detail/:id', component: AppMeetingDetailComponent}
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMeetingRoutingModule {}
