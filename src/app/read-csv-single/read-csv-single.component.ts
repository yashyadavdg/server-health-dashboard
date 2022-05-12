import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-csv-single',
  templateUrl: './read-csv-single.component.html',
  styleUrls: ['./read-csv-single.component.css']
})
export class ReadCsvSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lines:string[][] = []; //for headings
  linesR:string[][] = []; // for rows

  //File upload function
  changeListener(files: FileList) {
    //console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0)!;
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      //File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);

        //Table Headings
        let headers:string= allTextLines[0].split(',');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          console.log(data[j]);
          tarr.push(data[j]);
        }
        //Push headings to array variable
        this.lines.push(tarr);

        // Table Rows
        let tarrR:string[] = [];

        let arrl = allTextLines.length - 1;
        let rows = [];
        for (let i = 1; i < arrl; i++) {
          rows.push(allTextLines[i].split(','));
        }

        for (let j = 0; j < arrl-1; j++) {
          console.log(rows[j]);
          tarrR.push(rows[j]);
        }
        //Push rows to array variable
        this.linesR.push(tarrR);
      }
    }
  }
}
