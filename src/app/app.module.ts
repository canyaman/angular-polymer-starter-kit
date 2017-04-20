import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PolymerModule } from '@codebakery/origami';
import { AppElementsModule, IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional
// There are many collections to import, such as iron, paper, and gold elements

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { View404Component } from './view404/view404.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component,
    View404Component
],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    PolymerModule,
    // Optional modules to help reduce markup complexity
    AppElementsModule,
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
