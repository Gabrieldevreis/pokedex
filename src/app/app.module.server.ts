import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// Modules
import { PagesModule } from './pages/pages.module';

// Components

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    PagesModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
