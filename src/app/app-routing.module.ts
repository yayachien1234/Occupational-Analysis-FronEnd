import { MultipleComponent } from './multiple/multiple.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { IndustryTrendsComponent } from './industry-trends/industry-trends.component';
import { GraduatesComponent } from './graduates/graduates.component';
// import { TestComponent } from './test/test.component';
// import { MultipleComponent } from "./multiple/multiple.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'single', component: SingleComponent },
  { path: 'trends', component: IndustryTrendsComponent },
  { path: 'graduates', component: GraduatesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
