import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuessPictureNameRoutingModule } from './guess-picture-name-routing.module';

// Components
import { LettersComponent } from './letters/letters.component';
import { GuessWindowComponent } from './guess-window/guess-window.component';
import { ImageComponent } from './image/image.component';
import { InfoComponent } from './info/info.component';

// Services
import { PicturesService } from './pictures.service';

// Material
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [LettersComponent, GuessWindowComponent, ImageComponent, InfoComponent],
  imports: [CommonModule, GuessPictureNameRoutingModule, MatButtonModule, DragDropModule],
  providers: [PicturesService]
})
export class GuessPictureNameModule {}
