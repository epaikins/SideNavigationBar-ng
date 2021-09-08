import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DummyComps1Component } from './components/dummy-comps1/dummy-comps1.component';
import { DummyComps2Component } from './components/dummy-comps2/dummy-comps2.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DummyComps1Component,
    DummyComps2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
