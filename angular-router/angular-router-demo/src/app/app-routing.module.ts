import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {DesignPlatformModule} from './design-platform/design-platform.module';
// import {DesignPlatformModule} from './design-platform/design-platform.module';
// import {LoginModule} from './login/login.module';

const ROUTERS: Routes = [
  {path: '',  redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'designPlatform', loadChildren: './design-platform/design-platform.module#DesignPlatformModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
