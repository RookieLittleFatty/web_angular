import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppInspectComponent} from "./app-inspect.component";
import {AppInspectRoutingModule} from "./app-inspect-routing.module";
import {AppCommonModule} from "../app-common/app-common.module";

@NgModule({
  imports: [CommonModule, AppInspectRoutingModule, AppCommonModule],
  declarations: [AppInspectComponent]
})
export class AppInspectModule {}
