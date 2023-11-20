import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { Transaction } from 'src/app/interfaces/client';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{

  displayedColumns: string[] = ['icon', 'description', 'date', 'state','setting'];

  @Input() dataSource!: Transaction[];

  ngOnInit(): void {
    this.dataSource = this.dataSource.slice(0,5);
  }

}
