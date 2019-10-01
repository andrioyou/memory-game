import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';

// ngxs
import { NgxsModule } from '@ngxs/store';
import { TableState } from './store/table.state';

// components
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { PropertyToLabelPipe } from './pipes/property-to-label.pipe';

@NgModule({
  declarations: [TableContainerComponent, TableComponent, PropertyToLabelPipe],
  imports: [CommonModule, SharedModule, TableRoutingModule, NgxsModule.forFeature([TableState])]
})
export class TableModule {}
