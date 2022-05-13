import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor() {
    this.showtab = 0;
   }
  showtab = -1;
  ngOnInit(): void {
  }

  changeTab(tabName: string): void {
    switch (tabName) {
      case "cpuusage" : this.showtab = 0; break;
      case "memusage" : this.showtab = 4; break;
      case "storage" : this.showtab = 2; break;
      case "crashes" : this.showtab = 3; break;
      default: this.showtab = -1; break;
    }
    console.log("Tab: " + this.showtab);
  }
}
