import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesData: ChartData<'line'> = {
    labels: ["Node1-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1", "Node2-Router1"],
            datasets : [{
                label: "Top distancias de las relaciones",
                backgroundColor: [
                    "#028ee1",
                    "#92d7ef",
                ],
                data: [600, 500, 400, 300, 200, 100, 50, 30, 20, 10, 5, 3]
            }]
  };
  barChartType: ChartType = 'bar';
  chartOptions: ChartOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top distancia recorrida en un enlace',
      },
    },
  };
}
