import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
} from 'ng-apexcharts';

import { NgApexchartsModule } from 'ng-apexcharts';

import { MatIconModule } from '@angular/material/icon';
import { Transaction } from 'src/app/interfaces/client';


@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgApexchartsModule ],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  public chart!: ApexChart;
  public plotOptions!: ApexPlotOptions;
  public stroke!: ApexStroke;
  public dataLabels!: ApexDataLabels;
  public legend!: ApexLegend;
  public colors!: any[];
  public series!: ApexAxisChartSeries;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;

  @Input() dataCredits!: Transaction[];
  @Input() dataDebits!: Transaction[];

  public myBgc: object = {};

  ngOnInit(): void {
    this.initChartData();
  }

  public initChartData(): void {

    this.chart= {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    this.plotOptions = {
      bar: {
        columnWidth: '30%',
        borderRadius: 4
      }
    },
    this.stroke = {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    this.dataLabels= { enabled: false },
    this.legend = {
      position: 'top',
      horizontalAlign: 'right',
      show: true,
      offsetX: -15,
      offsetY: -15,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 10,
        height: 10,
        radius: 50
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    this.colors = ['#282f65', '#38d2ed'],

    this.series = [
      {
        name: 'Débito',
        data: this.dataDebits.map(debit => debit.amount)
      },
      {
        name: 'Crédito',
        data: this.dataCredits.map(debit => debit.amount)
      }
    ];    
    this.yaxis = { show: false };
    this.xaxis = {
      labels: { show: false }
    };
  }
}
