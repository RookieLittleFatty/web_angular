import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
      { path: 'tree', component: LeftComponent, outlet: 'left' },
      { path: ':id', component: RightComponent}
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {

}
