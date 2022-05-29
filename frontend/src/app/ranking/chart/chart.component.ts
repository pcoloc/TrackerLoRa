import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
      }
    ]
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '',
      },
      legend: {
        display: false
      },
    },
  };

  showLoader!: boolean;
  totalPosts!: number;
  categories: string[] = [];
  counts: number[] = [];

}
