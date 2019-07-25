import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './containers/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeadlineComponent } from './components/headline/headline.component';

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, HeadlineComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomePageComponent]
})
export class SharedModule {}
