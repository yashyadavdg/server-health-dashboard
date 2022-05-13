import { Component, OnInit } from '@angular/core';
import statusinfo from '../../db/statusinfo.json';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  data = statusinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
