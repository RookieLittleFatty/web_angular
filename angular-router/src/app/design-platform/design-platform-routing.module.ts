import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DesignPlatformComponent} from './design-platform.component';
import {HomeModule} from './home/home.module';

const routes: Routes = [{
  path: '', component: DesignPlatformComponent, children: [
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'project', loadChildren: './project/project.module#ProjectModule'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DesignPlatformRoutingModule {}
