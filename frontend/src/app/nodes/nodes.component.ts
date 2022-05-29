import { Component, OnInit } from '@angular/core';
import {Product,TopSelling,} from './table-data';


@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  topSelling:Product[];

  constructor() {
    this.topSelling=TopSelling;
 }

  ngOnInit(): void {
  }

}
