import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../service/chart.service';
import { Chart } from 'chart.js/auto';

interface PaymentTypeCounts {
  creditoAVista: number;
  creditoParcelado: number;
  debito: number;
}


@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData().subscribe(data => {
      const paymentTypeCounts = this.calculatePaymentTypeCounts(data);
      this.createChart(paymentTypeCounts);
    });
  }

  private calculatePaymentTypeCounts(data: any[]): PaymentTypeCounts {
    const counts: PaymentTypeCounts = {
      creditoAVista: 0,
      creditoParcelado: 0,
      debito: 0
    };
  
    data.forEach(item => {
      const paymentType = item.paymentType;
      if (paymentType === 'Crédito à vista') {
        counts.creditoAVista += item.grossAmount;
      } else if (paymentType === 'Crédito parcelado') {
        counts.creditoParcelado += item.grossAmount;
      } else if (paymentType === 'Débito') {
        counts.debito += item.grossAmount;
      }
    });
  
    return counts;
  }

  private createChart(paymentTypeCounts: PaymentTypeCounts) {
    const labels = Object.keys(paymentTypeCounts);
    const amounts = Object.values(paymentTypeCounts);

    const ctx: CanvasRenderingContext2D = this.elemento.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: amounts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        // Adicione suas opções de gráfico aqui, se necessário
      }
    });
  }
}
