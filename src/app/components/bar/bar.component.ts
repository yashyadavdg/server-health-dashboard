import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import vol from "../../db/volumeinfo.json";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {  

  private data = vol;

  private svg: any;
  private margin = 90;
  private width = 500 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
  }

  ngAfterViewInit() {
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {

    console.log(data)
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Filesystem))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-size", "1.3em")

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 80])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y))
      .style("font-size", "0.2em");

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", (d: { Filesystem: string; }) => x(d.Filesystem))
      .attr("y", (d: { Use: d3.NumberValue; }) => y(d.Use))
      .attr("width", x.bandwidth())
      .attr("height", (d: { Use: d3.NumberValue; }) => this.height - y(d.Use))
      .attr("fill", "#5a6782");
  }

}
