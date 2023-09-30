// download-csv-button.component.ts

import { Component } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-download-csv-button',
  template: `
    <button class="btn btn-success btn-sm" (click)="downloadCsv()">Baixar CSV</button>
  `
})
export class DownloadCsvButtonComponent {
  constructor(private transactionService: TransactionService) {}

  downloadCsv() {
    this.transactionService.getTransactions().subscribe(data => {
      const csvContent = this.convertJsonToCsv(data);
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  private convertJsonToCsv(jsonData: any[]): string {
    if (!jsonData || jsonData.length === 0) {
      return '';
    }
  
    const header = Object.keys(jsonData[0]).join(',');
    const rows = jsonData.map(item => Object.values(item).join(',')).join('\n');
  
    return `${header}\n${rows}`;
  }
  
}
