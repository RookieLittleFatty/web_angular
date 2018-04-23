import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RepositoryComponent} from './repository.component';
import {DocDetailComponent} from './document/doc-detail/doc-detail.component';
import {ModuleListComponent} from "./document/module-list/module-list.component";
import {DocModuleComponent} from "./document/doc-module/doc-module.component";
const routes: Routes = [
  { path: '', component: RepositoryComponent, children: [
      {path: '', redirectTo: 'docModule', pathMatch: 'full'},
      {path: 'moduleList', component: ModuleListComponent},
      {path: 'docModule', component: DocModuleComponent}
    ]
  },
  { path: '', children: [
      {path: 'docDetail', component: DocDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule {}
