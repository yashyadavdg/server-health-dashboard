import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showtab = 0;

  constructor() { }

  ngOnInit(): void {
  }

  openCity(tabName: string): void {
    switch (tabName) {
      case "cpuusage" : this.showtab = 0; break;
      case "memusage" : this.showtab = 4; break;
      case "storage" : this.showtab = 2; break;
      case "crashes" : this.showtab = 3; break;
      default: this.showtab = -1; break;
    }
  }
}
