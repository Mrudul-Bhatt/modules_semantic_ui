import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  //modeules, pipes and directives that are used in this module
  declarations: [AppComponent],
  //modules that are used in this module which are not made by this module
  imports: [BrowserModule, AppRoutingModule, ElementsModule, CollectionsModule],
  //services that are used in this module (deprecated way of adding services)
  providers: [],
  //only used by root module to bootstrap the application and display components
  bootstrap: [AppComponent],
})
export class AppModule {}
