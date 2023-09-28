import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    TransactionListComponent
  ]
})
export class TransactionsModule { }
