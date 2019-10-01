import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryGameRoutingModule } from './memory-game-routing.module';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
  declarations: [MemoryGameComponent],
  imports: [CommonModule, SharedModule, MemoryGameRoutingModule]
})
export class MemoryGameModule {}
