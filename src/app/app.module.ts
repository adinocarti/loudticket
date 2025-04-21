import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { Tab1Page } from './tab1/tab1.page';

@NgModule({
  declarations: [
    AppComponent,
    ExploreContainerComponent,
    Tab1Page
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
