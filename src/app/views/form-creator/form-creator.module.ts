import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreatorRoutingModule } from './form-creator-routing.module';

// components
import { CreatorComponent } from './components/creator/creator.component';
import { ElementComponent } from './components/element/element.component';
import { FormComponent } from './components/form/form.component';
import { FormCreatorContainerComponent } from './container/form-creator-container/form-creator-container.component';

// services
import { FormControlService } from './services/form-control.service';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [CreatorComponent, ElementComponent, FormComponent, FormCreatorContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, FormCreatorRoutingModule],
  providers: [FormControlService, FormService]
})
export class FormCreatorModule {}
