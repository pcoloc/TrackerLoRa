import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {


  name = 'Angular 5';
  displayedColumns = ['Name', 'Age']
  dataSource = [{name:'Sara',age:17}, {name: 'John', age: 20}]
  dataSourceEmpty = []
  constructor() {

 }

  ngOnInit(): void {
  }

}
