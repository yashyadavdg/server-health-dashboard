import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTopChartComponent } from './single-top-chart/single-top-chart.component';
import { ReadCsvSingleComponent } from './read-csv-single/read-csv-single.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTopChartComponent,
    ReadCsvSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
