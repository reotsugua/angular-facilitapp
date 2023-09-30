import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DailySales } from '../../model/card-data.model';
import { ChartService } from '../../service/chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData().subscribe(data => {
      const dailySales = this.calculateDailySales(data);
      this.createChart(dailySales);
    });
  }

  private calculateDailySales(data: any[]): DailySales[] {
    const dailySales: DailySales[] = [];
    const initialDate = new Date('2021-05-25');

    for (let i = 0; i <= 6; i++) {
      const currentDate = new Date(initialDate);
      currentDate.setDate(initialDate.getDate() + i);
      const formattedDate = currentDate.toISOString().split('T')[0];

      dailySales.push({ date: formattedDate, totalGrossAmount: 0, totalNetAmount: 0 });
    }

    data.forEach(item => {
      const itemDate = new Date(item.date).toISOString().split('T')[0];
      const dailySale = dailySales.find(d => d.date === itemDate);

      if (dailySale) {
        dailySale.totalGrossAmount += item.grossAmount;
        dailySale.totalNetAmount += item.netAmount;
      }
    });

    return dailySales;
  }

  private createChart(dailySales: DailySales[]) {
    const labels = dailySales.map(item => item.date);
    const grossAmounts = dailySales.map(item => item.totalGrossAmount);
    const netAmounts = dailySales.map(item => item.totalNetAmount);

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false,
      responsive: true
    };

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Valor Bruto',
            data: grossAmounts,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Total Valor Líquido',
            data: netAmounts,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: chartOptions
    });
  }
}
