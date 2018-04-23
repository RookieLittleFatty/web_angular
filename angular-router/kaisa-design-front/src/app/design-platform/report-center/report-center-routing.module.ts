import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ReportCenterComponent} from "./report-center.component";

const routes: Routes = [
  { path: '', component: ReportCenterComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportCenterRoutingModule {}
