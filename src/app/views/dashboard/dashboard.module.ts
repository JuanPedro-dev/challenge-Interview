import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AsideComponent } from 'src/app/components/aside/aside.component';
import { BalanceComponent } from 'src/app/components/balance/balance.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PaymentTableComponent } from 'src/app/components/payment-table/payment-table.component';
import { TransactionsComponent } from 'src/app/components/transactions/transactions.component';

import { RouterLink } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { ChartComponent } from 'src/app/components/chart/chart.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AsideComponent,
    BalanceComponent,
    NavbarComponent,
    PaymentTableComponent,
    TransactionsComponent,
    CardComponent,
    ChartComponent,
    RouterLink,
  ]
})
export class DashboardModule { }
