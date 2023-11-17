import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
} from 'ng-apexcharts';

import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgApexchartsModule ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public chart!: ApexChart;
  public grid!: ApexGrid;
  public series!: ApexAxisChartSeries;
  public dataLabels!: ApexDataLabels;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;

  @Input() colorsInput: string[] = [];
  @Input() nameIcon: string = 'home';
  @Input() tittle: string = '';
  @Input() dataSeries: number[] = [];  

  public myBgc: object = {};
  public value: number = 0;
  public valuePercentage: number = 0;

  ngOnInit(): void {
    this.initChartData();
    this.myBgc = {
      backgroundColor: this.colorsInput[0],
      outlineColor: this.colorsInput[0],
    };
  }

  public initChartData(): void {
    for(let i=0; i < this.dataSeries.length; i++){
      this.value += this.dataSeries[i];
    }

    this.chart= {
      type: 'area',
      toolbar: {
        show: false
      }
    },
    this.dataLabels= { enabled: false },
    this.series = [
      {
        name: this.tittle,
        data: this.dataSeries
      },
    ];    
    this.yaxis = { show: false };
    this.xaxis = {
      labels: { show: false }
    };
    
    this.grid = {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    };

  }
}
