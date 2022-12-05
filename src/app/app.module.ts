import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  //modules, pipes and directives that are used in this module
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  //modules that are used in this module which are not made by this module
  //we need to import the modules irrespective of whether we are showing them with routing or as domain modules
  //the order of modules imported is the order at which the routing is checked
  //in order to lazy load the modules, we need to remove the imports and add the lazy loading in app-routing.module.ts
  imports: [BrowserModule, AppRoutingModule],
  //services that are used in this module (deprecated way of adding services)
  providers: [],
  //only used by root module to bootstrap the application and display components
  bootstrap: [AppComponent],
})
export class AppModule {}
