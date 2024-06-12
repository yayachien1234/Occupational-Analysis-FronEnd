import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleComponent } from './multiple/multiple.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { IndustryTrendsComponent } from './industry-trends/industry-trends.component';
import { GraduatesComponent } from './graduates/graduates.component';
// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleComponent,
    HomeComponent,
    SingleComponent,
    IndustryTrendsComponent,
    GraduatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
