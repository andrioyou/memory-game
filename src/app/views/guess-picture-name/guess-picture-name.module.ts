import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

// routing
import { GuessPictureNameRoutingModule } from './guess-picture-name-routing.module';

// Components
import { LettersComponent } from './letters/letters.component';
import { GuessWindowComponent } from './guess-window/guess-window.component';
import { ImageComponent } from './image/image.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [LettersComponent, GuessWindowComponent, ImageComponent, InfoComponent],
  imports: [CommonModule, GuessPictureNameRoutingModule, SharedModule],
  providers: []
})
export class GuessPictureNameModule {}
