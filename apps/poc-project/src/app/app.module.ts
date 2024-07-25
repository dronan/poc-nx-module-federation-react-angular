// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebComponentWrappeModule } from './web-component-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NxWelcomeComponent,
    WebComponentWrappeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
