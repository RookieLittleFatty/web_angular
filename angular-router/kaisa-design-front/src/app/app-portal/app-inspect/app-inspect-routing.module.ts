import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppInspectComponent} from "./app-inspect.component";

const routes: Routes = [
  {path: '', component: AppInspectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppInspectRoutingModule {}
