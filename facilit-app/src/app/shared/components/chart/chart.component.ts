import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { CardData } from './card-data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  private apiUrl = 'http://localhost:3000/items'; // Altere a URL da sua API conforme necessário

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
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

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false, // Torna o gráfico responsivo
      responsive: true // Habilita a responsividade
    };

    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Quantidade',
            data: quantities,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: chartOptions
    });
  }
}
