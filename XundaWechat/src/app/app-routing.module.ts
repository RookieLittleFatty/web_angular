import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitPlanComponent} from './visit-plan/visit-plan.component';
import {VisitListComponent} from './visit-list/visit-list.component';
import {VisitDetailComponent} from './visit-detail/visit-detail.component';
const routes: Routes = [
  {path: '', component: VisitPlanComponent},
  {path: '', children: [
      {path: 'visitList', component: VisitListComponent},
      {path: 'visitList', children: [
          {path: ':id', component: VisitDetailComponent},
        ]},
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
