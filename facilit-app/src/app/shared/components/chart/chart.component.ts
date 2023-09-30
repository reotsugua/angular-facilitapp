import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CardData } from '../../model/card-data.model';
import { ChartService } from '../../service/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData().subscribe((data: any[]) => {
      const cardBrandCounts = this.calculateCardBrandCounts(data);
      this.createChart(cardBrandCounts);
    });
  }

  private calculateCardBrandCounts(data: any[]): CardData[] {
    const cardBrandCounts: CardData[] = [];
    data.forEach(item => {
      const cardBrand = item.cardBrand;
      const existingCardBrand = cardBrandCounts.find(c => c.cardBrand === cardBrand);
      if (existingCardBrand) {
        existingCardBrand.quantity++;
      } else {
        cardBrandCounts.push({ cardBrand: cardBrand, quantity: 1 });
      }
    });
    return cardBrandCounts;
  }

  private createChart(cardBrandCounts: CardData[]) {
    const labels = cardBrandCounts.map(item => item.cardBrand);
    const quantities = cardBrandCounts.map(item => item.quantity);

    // Use a predefined set of colors or add more as needed
    const colors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'];

    const backgroundColors = colors.slice(0, labels.length);

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
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Quantidade',
            data: quantities,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors.map(color => color.replace('0.2', '1')),
            borderWidth: 1
          }
        ]
      },
      options: chartOptions
    });
  }
}
