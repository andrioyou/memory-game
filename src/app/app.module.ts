import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
