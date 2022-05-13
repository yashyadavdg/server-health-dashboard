import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component'
import { PieComponent } from './components/pie/pie.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CpuusageComponent } from './components/cpuusage/cpuusage.component';
import { MemusageComponent } from './components/memusage/memusage.component';
import { StatusComponent } from './components/status/status.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component'

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    DashboardComponent,
    CpuusageComponent,
    MemusageComponent,
    StatusComponent,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
