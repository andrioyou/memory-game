import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { SharedModule } from '@app/shared/shared.module';

// components
import { CreatorComponent } from './components/creator/creator.component';
import { FormComponent } from './components/form/form.component';
import { FormCreatorContainerComponent } from './container/form-creator-container/form-creator-container.component';
import { FormControlComponent } from './components/form/form-control/form-control.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsListComponent } from './components/forms-list/forms-list.component';

// services
import { FormsListService } from './services/forms-list.service';
import { BuilderService } from './services/builder.service';

@NgModule({
  declarations: [
    CreatorComponent,
    FormComponent,
    FormCreatorContainerComponent,
    FormControlComponent,
    DashboardComponent,
    FormsListComponent
  ],
  imports: [CommonModule, FormCreatorRoutingModule, SharedModule],
  providers: [FormsListService, BuilderService]
})
export class FormCreatorModule {}
