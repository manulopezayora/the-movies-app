import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { ForbidenPageComponent } from './shared/pages/forbiden-page/forbiden-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ForbidenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
