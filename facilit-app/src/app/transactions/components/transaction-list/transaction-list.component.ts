import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/model/transaction.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  dataSource: MatTableDataSource<Transaction>;
  displayedColumns: string[] = ['id', 'cardBrand', 'paymentNode', 'date', 'status'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
