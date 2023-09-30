
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { ResumeTransComponent } from './components/resume-trans/resume-trans.component';
import { CurrencyFormatPipe } from './components/pipe/currency-format.pipe';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartsComponent } from './components/pie-charts/pie-charts.component';




@NgModule({
  declarations: [
    ChartComponent,
    ResumeTransComponent,
    CurrencyFormatPipe,
    LineChartComponent,
    PieChartsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChartComponent,
    ResumeTransComponent,
    CurrencyFormatPipe,
    LineChartComponent,
    PieChartsComponent
  ]
})
export class SharedModule { }
