import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);

    // Obtendo dia, mês e ano
    const day = this.formatNumber(date.getDate());
    const month = this.formatNumber(date.getMonth() + 1);  // Os meses são baseados em zero, então adicionamos 1
    const year = date.getFullYear().toString().slice(-2);  // Pegando os últimos 2 dígitos do ano

    return `${day}/${month}/${year}`;
  }

  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
