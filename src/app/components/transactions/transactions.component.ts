import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { Transaction } from 'src/app/interfaces/transaction';
import { transaccionesMock } from 'src/app/mocks/transaction.mock';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  // private transactionService: TransactionService = inject(TransactionService);
  private subs: Subscription = new Subscription();
  
  displayedColumns: string[] = ['icon', 'name', 'date', 'state','setting'];
  dataSource: Transaction[] = transaccionesMock;

  
  ngOnInit(): void {
    // TODO: API, subscribirse, traer la info, guardarla en Transaction
    this.dataSource = transaccionesMock;

  }  

  ngOnDestroy() {
    this.subs.unsubscribe();
  }  

}
