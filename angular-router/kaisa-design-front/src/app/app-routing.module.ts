import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTERS: Routes = [
  {path: '',  redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'designPlatform', loadChildren: './design-platform/design-platform.module#DesignPlatformModule'},
  {path: 'appPortal', loadChildren: './app-portal/app-portal.module#AppPortalModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
