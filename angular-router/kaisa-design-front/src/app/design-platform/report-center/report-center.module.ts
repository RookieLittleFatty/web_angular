import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReportCenterComponent} from "./report-center.component";
import {ReportCenterRoutingModule} from "./report-center-routing.module";

@NgModule({
  imports: [CommonModule, ReportCenterRoutingModule],
  declarations: [ReportCenterComponent]
})
export class ReportCenterModule {}
