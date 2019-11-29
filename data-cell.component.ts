import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {

  @Input() row;
  @Input() col;

  constructor() { }

  ngOnInit() {
  }

}
