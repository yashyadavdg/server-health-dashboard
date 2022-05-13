import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import meminfo from "../../db/meminfo.json";
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import { FormBuilder, Validators} from '@angular/forms';  

@Component({
    selector: 'app-memusage',
    templateUrl: './memusage.component.html',
  styleUrls: ['./memusage.component.css']
})
export class MemusageComponent implements OnInit {

    public activeField: number;
    public dataFields: string[] = ["logd", "workflowd", "hms", "pfed", "dgsyncd", "eventd", "evLogger", "discoveryd", "connectord", "pmd", "remed", "pbed", "multisyncd", "contentd", "inspectd", "lighttpd", "clientmgr", "icapd", "netconfd", "java", "eventsyncd", "mipd","systemd"];
    public chartData: any;
    private host: any;
    private svg: any;
    private htmlElement: HTMLElement;
    public data: number[] = [];
    public ilabel:string = "logd";

    private margin = { top: 10, right: 10, bottom: 15, left: 25 };
    public width: number;
    public height: number;
    private x: any;
    private y: any;
    private line: d3Shape.Line<[number, number]>; // this is line definition
    private xwidth = 55;
    private yheight = 5;

    submitted = false;
    oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration'];
    oppoSuitsForm = this.fb.group({
        name: ['', [Validators.required]],
      });

    constructor(public elRef: ElementRef,
        public fb: FormBuilder) {
        this.htmlElement = this.elRef.nativeElement;
        this.chartData = { data: [], locationName: '' };
        this.activeField = 0;
    }

    ngOnInit(): void {
        console.log('LineChartComponent:ngOnInit');
        this.setup();
        this.updateGraphData();
      }

      public handleError = (controlName: string, errorName: string) => {
        return this.oppoSuitsForm.controls[controlName].hasError(errorName);
      };
      
      onSubmit() {
        this.submitted = true;
        // alert(JSON.stringify(this.oppoSuitsForm.value));
        this.activeField = this.dataFields.indexOf(this.oppoSuitsForm.value.name);
        console.log(this.oppoSuitsForm.value.name)
        this.updateGraphData();
      }
    
      /**
       * Kick off all initialization processes
       */
      private setup(): void {
        console.log('LineChartComponent:setup');
        this.chartData.data = meminfo;
        this.buildSvg();
      }

       /**
   * Configures the SVG element
   */
  private buildSvg(): void {
    console.log('LineChartComponent:buildSvg');
    this.host = d3.select(this.htmlElement);
    let svgElement: any = this.htmlElement.getElementsByClassName('svg-chart')[0];
    
    // Do some automatic scaling for the chart
    this.width = svgElement.clientWidth - this.margin.left - this.margin.right;
    this.height = svgElement.clientHeight * 0.90 - this.margin.top - this.margin.bottom;
    this.svg = this.host.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.svg
      .append("text")
      .text(this.chartData.locationName) // set watermark
      .attr("y", "50%") // set the location of the text with respect to the y-axis
      .style("fill", "#0000AA") // set the font color
      .style("font-size", "2.3em")
      .style("font-weight", "bold")
      .attr("alignment-baseline", "middle")
      .attr("text-anchor", "middle")
  }

  /**
   * Execute the methods necessary to update the graph with 
   * the data retrieved from the JSON file
   * @param obsData
   */
  public updateGraphData(): void {
    // console.log('LineChartComponent:updateGraphData');
    // Iterate to the next set of available data
    // this.activeField = this.dataFields.indexOf(e.target.value);

    // Remove the current line form the chart
    this.clearChartData();
    
    // Build the data array for chart where the values of 
    // interest are put date and value fields
    this.data = this.buildChartData();

    // Configuring line path
    this.configureXaxis();
    this.configureYaxis();

    // Create the line for the chart and add it 
    this.drawLineAndPath();
  }

  /**
   * Removes all lines and axis from the chart so we can
   * create new ones based on the data
   */
  private clearChartData(): void {
    // console.log('LineChartComponent:clearChartData');
    if (this.chartData !== null
      && this.chartData.data.length > 0) {
      this.svg.selectAll('g').remove();
      this.svg.selectAll('path').remove();
    }
  }
  
/**
   * Creates the chart data array by selecting the
   * appropriate data based on the user selection
   * Returns an array of objects with a date and 
   * value property
   */
  private buildChartData(): any[] {
    console.log(this.activeField);
    let data: any = [];
    if (this.chartData != null
      && this.chartData.data != null) {
      let value: any = null;
      let tickx: any = null;
      let ticky: any = null;

      // Extract the desired data from the JSON object
      this.chartData.data.forEach((d:any) => {
        if (this.activeField === 0){
          value = d.logd;
          tickx = 54;
          ticky = 10;
        }
        else if (this.activeField === 1){
          value = d.workflowd;
          tickx = 47;
          ticky = 2;
        }
        else if (this.activeField === 2){
          value = d.hms;
          tickx = 406;
          ticky = 2;
        }
        else if (this.activeField === 3) {
            value = d.pfed;
            tickx = 860;
            ticky = 30;
        }
        else if (this.activeField === 4) {
            value = d.dgsyncd;
            tickx = 64;
            ticky = 2;
        }
        else if (this.activeField === 5) {
            value = d.eventd;
            tickx = 172;
            ticky = 10;
        }
        else if (this.activeField === 6) {
            value = d.evLogger;
            tickx = 51;
            ticky = 2;
        }
        else if (this.activeField === 7) {
            value = d.discoveryd;
            tickx = 53;
            ticky = 2;
        }
        else if (this.activeField === 8) {
            value = d.connectord;
            tickx = 13;
            ticky = 2;
        }
        else if (this.activeField === 9) {
            value = d.pmd;
            tickx = 792;
            ticky = 2;
        }
        else if (this.activeField === 10) {
            value = d.remed;
            tickx = 218;
            ticky = 2;
        }
        else if (this.activeField === 11) {
            value = d.pbed;
            tickx = 853;
            ticky = 50;
        }
        else if (this.activeField === 12) {
            value = d.multisyncd;
            tickx = 140;
            ticky = 2;
        }
        else if (this.activeField === 13) {
            value = d.contentd;
            tickx = 55;
            ticky = 10;
        }
        else if (this.activeField === 14) {
            value = d.inspectd;
            tickx = 640;
            ticky = 15;
        }
        else if (this.activeField === 15) {
            value = d.lighttpd;
            tickx = 323;
            ticky = 2;
        }
        else if (this.activeField === 16) {
            value = d.clientmgr;
            tickx = 288;
            ticky = 10;
        }
        else if (this.activeField === 17) {
            value = d.icapd;
            tickx = 122;
            ticky = 10;
        }
        else if (this.activeField === 18) {
            value = d.netconfd;
            tickx = 456;
            ticky = 10;
        }
        else if (this.activeField === 19) {
            value = d.java;
            tickx = 1000;
            ticky = 20;
        }
        else if (this.activeField === 20) {
            value = d.eventsyncd;
            tickx = 125;
            ticky = 10;
        }
        else if (this.activeField === 21) {
            value = d.mipd;
            tickx = 125;
            ticky = 2;
        }
        else if (this.activeField === 22) {
            value = d.systemd;
            tickx = 573;
            ticky = 10;
        }

        if (value !== null) {
          data.push(
            {
              time: d.time,
              value: value
            });
            this.xwidth = tickx;
            this.yheight = ticky;
        }
      });
    }

    return data;
  }
  
  /**
   * Configures the Y-axis based on the data values
   */
  private configureYaxis(): void {
    // range of data configuring
    let yRange: any[] = [0,this.yheight];
    // If we have data then make the Y range one less than the
    // smallest value so we have space between the bottom-most part
    // of the line and the X-axis
    if (yRange && yRange.length > 1
      && yRange[0] !== yRange[yRange.length - 1]) {
      yRange[0] -= 1;
    }
    this.y = d3Scale.scaleLinear()
      .range([this.height, 0])
      .domain(yRange);

    // Add the Y-axis definition to the left part of the chart
    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));

  }

  /**
   * Configures the X-axis based on the time series
   */
  private configureXaxis(): void {
    // console.log('LineChartComponent:configureXaxis');
    // range of data configuring, in this case we are
    // showing data over a period of time
    this.x = d3Scale.scaleTime()
      .range([0, this.width])
      .domain([1,60]);

    // Add the X-axis definition to the bottom of the chart
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

  }

  /**
   * Configures and draws the line on the graph
   */
  private drawLineAndPath() {
    // console.log('LineChartComponent:drawLineAndPath');
    // Create a line based on the X and Y values (date and value)
    // from the data
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.time))
      .y((d: any) => this.y(d.value));

    // Configure the line's look and data source
    this.svg.append('path')
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", this.line);
  }
}
