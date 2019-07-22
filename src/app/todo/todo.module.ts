import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// forms
import { FormsModule } from '@angular/forms';

// routing
import { TodoRoutingModule } from './todo-routing.module';

// components
import { ListComponent } from './list/list.component';
import { ModalComponent } from './list/modal/modal.component';

// services
import { TodoService } from './todo.service';

// mask
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ListComponent, ModalComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule, NgxMaskModule.forRoot()],
  providers: [TodoService]
})
export class TodoModule {}
