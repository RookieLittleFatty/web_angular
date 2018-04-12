import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {DesignPlatformComponent} from './design-platform.component';
import {DesignPlatformRoutingModule} from './design-platform-routing.module';

@NgModule({
  imports: [CommonModule, DesignPlatformRoutingModule],
  declarations: [DesignPlatformComponent, HeaderComponent],
  providers:[]
})
export class DesignPlatformModule {}
