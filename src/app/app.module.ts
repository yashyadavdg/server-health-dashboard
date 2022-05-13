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
import { DemonsstatusComponent } from './demonsstatus/demonsstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    DashboardComponent,
    CpuusageComponent,
    MemusageComponent,
    DemonsstatusComponent
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
