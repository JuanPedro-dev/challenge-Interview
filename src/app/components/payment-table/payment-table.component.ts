import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Subscription } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import { invoiceMock } from 'src/app/mocks/invoices.mock';
import { Invoice } from 'src/app/interfaces/invoices';

@Component({
  selector: 'app-payment-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatTableModule,
  ],
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss'],
})
export class PaymentTableComponent implements OnInit, OnDestroy {
  // private invoiceService: InvoiceService = inject(InvoiceService);
  private subs: Subscription = new Subscription();

  displayedColumns: string[] = [
    'icon',
    'global',
    'fees',
    'date',
    'parcial',
    'rate',
    'action',
    'setting',
  ];
  dataSource: Invoice[] = [];
  checked = false;

  ngOnInit(): void {
    // TODO: API, subscribirse, traer la info, guardarla en invoice
    this.dataSource = invoiceMock;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
