import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionDialogComponent } from './components/transaction-dialog/transaction-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { DownloadCsvButtonComponent } from './components/download-csv-button/download-csv-button.component';





@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDialogComponent,
    DownloadCsvButtonComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [
    TransactionListComponent,
    TransactionDialogComponent,
    DownloadCsvButtonComponent
  ]
})
export class TransactionsModule { }
