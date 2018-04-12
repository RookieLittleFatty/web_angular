import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import {RepositoryComponent} from './repository.component';
import {RepositoryRoutingModule} from './repository-routing.module';
import { DocumentComponent } from './document/document.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DocLeftComponent } from './document/doc-left/doc-left.component';
import { DocModuleComponent } from './document/doc-module/doc-module.component';
import { ModuleListComponent } from './document/module-list/module-list.component';
import { DocDetailComponent } from './document/doc-detail/doc-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, ModalModule.forRoot(), PaginationModule.forRoot(), RepositoryRoutingModule],
  declarations: [RepositoryComponent, DocumentComponent, StatisticsComponent, DocLeftComponent, DocModuleComponent, ModuleListComponent, DocDetailComponent],
  providers: []
})
export class RepositoryModule {}
