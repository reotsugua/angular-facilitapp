import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  template: '<div>Chart data: {{ chartData | json }}</div>'
})
export class ChartComponent implements OnInit {
  chartData: any[] = [];  

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getData().subscribe(data => {
      this.chartData = data;
    });
  }
}
