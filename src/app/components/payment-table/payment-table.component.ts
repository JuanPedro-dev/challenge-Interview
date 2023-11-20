import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

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
export class PaymentTableComponent implements OnInit {
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

  dataSource!: Invoice[];
  @Input() dataInvoices!: Invoice[];
checked: any;

  ngOnInit(): void {
    this.dataSource = this.dataInvoices;
  }

  onCheckboxChange(element: any) {
    element.isChecked = !element.isChecked;
}

}
