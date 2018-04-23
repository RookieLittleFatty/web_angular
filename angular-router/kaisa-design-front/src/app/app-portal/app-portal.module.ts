import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppPortalComponent} from "./app-portal.component";
import {AppPortalRoutingModule} from "./app-portal-routing.module";

@NgModule({
  imports: [CommonModule, AppPortalRoutingModule],
  declarations: [AppPortalComponent],
})
export class AppPortalModule {}
