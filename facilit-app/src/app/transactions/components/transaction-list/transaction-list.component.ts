import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Transaction>;
  displayedColumns: string[] = [
    'id',
    'cardBrand',
    'paymentNode',
    
    'date',
    'status'
  ];
  @ViewChild('input') input!: MatInput;  // Add '!' to indicate that it will be initialized

  constructor(private transactionService: TransactionService) {
    this.dataSource = new MatTableDataSource<Transaction>();
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    // 'input' is now initialized and ready to use
    // You can do something with 'this.input' here if needed
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
