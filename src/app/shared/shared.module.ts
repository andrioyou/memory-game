import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomePageComponent]
})
export class SharedModule {}
