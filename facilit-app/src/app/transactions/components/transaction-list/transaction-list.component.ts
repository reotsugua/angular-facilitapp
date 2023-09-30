import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/model/transaction.model';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  dataSource: MatTableDataSource<Transaction>;
  displayedColumns: string[] = [
    'id',
    'date',
    'paymentType',
    'grossAmount',
    'netAmount',
    'status'
  ];

  selectedTransaction: Transaction | null;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor(
  private transactionService: TransactionService,
  private dialog: MatDialog
) {
  this.dataSource = new MatTableDataSource<Transaction>();
  this.selectedTransaction = null;
}

showTransactionDetails(transaction: Transaction) {
  const dialogRef = this.dialog.open(TransactionDialogComponent, {
    width: '400px', // Adjust the width as needed
    data: transaction
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
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
