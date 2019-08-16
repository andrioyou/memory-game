import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, DragDropModule, MatFormFieldModule, MatSelectModule],
  exports: [HeaderComponent, HomePageComponent]
})
export class SharedModule {}
