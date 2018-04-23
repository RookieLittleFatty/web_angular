import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DesignPlatformComponent} from './design-platform.component';
import {HomeModule} from './home/home.module';
import {RepositoryModule} from './repository/repository.module';
import {ReportCenterModule} from "./report-center/report-center.module";
import {TaskModule} from './task/task.module';

const routes: Routes = [{
  path: '', component: DesignPlatformComponent, children: [
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'project', loadChildren: './project/project.module#ProjectModule'},
    {path: 'repository', loadChildren: './repository/repository.module#RepositoryModule'},
    {path: 'reportCenter', loadChildren: './report-center/report-center.module#ReportCenterModule'},
    {path: 'task', loadChildren: './task/task.module#TaskModule'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DesignPlatformRoutingModule {}
