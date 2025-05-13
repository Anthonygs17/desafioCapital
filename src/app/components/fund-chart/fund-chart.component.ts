import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle, ApexGrid } from 'ng-apexcharts';

@Component({
  selector: 'app-fund-chart',
  imports: [NgApexchartsModule],
  templateUrl: './fund-chart.component.html',
  styleUrl: './fund-chart.component.css'
})
export class FundChartComponent implements OnChanges {
  @Input() data: { date: string, price: number }[] = [];

  chartSeries: ApexAxisChartSeries = [];
  chartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    title: ApexTitleSubtitle;
  } = {
    chart: {
      type: 'line',
      height: 550,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    title: {
      text: 'Historial de Precio del Fondo'
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd MMM yy',
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => '$ ' + val
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data?.length) {
      this.renderChart(this.data);
    }
  }

  // Método para renderizar el gráfico
  private renderChart(data: { date: string, price: number }[]) {
    const ordenados = data.slice().reverse();

    this.chartSeries = [
      {
        name: 'Precio',
        data: ordenados.map(d => [new Date(d.date).getTime(), d.price])
      }
    ];

  }

}
