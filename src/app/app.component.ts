import { Component, OnInit } from '@angular/core';
import { FintualApiService } from './services/fintual-api.service';
import { FundChartComponent } from "./components/fund-chart/fund-chart.component";
import { FundSelectorComponent } from "./components/fund-selector/fund-selector.component";
import { DateFilterComponent } from "./components/date-filter/date-filter.component";

@Component({
  selector: 'app-root',
  imports: [FundChartComponent, FundSelectorComponent, DateFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FintualApiService],
})
export class AppComponent implements OnInit {
  datos: { date: string, price: number }[] = [];
  fondos: { id: number, name: string }[] = [];
  private fondoIds = [186, 187, 188, 15077];
  fondoId = this.fondoIds[0];

  fromDate: string = '';
  toDate: string = '';

  constructor(private fintualApiService: FintualApiService) {}

  ngOnInit(): void {
    this.loadFondoIds();
  }

  loadFondoIds() {
    this.fondoIds.forEach(fondoId => {
      this.fintualApiService.getFundName(fondoId).subscribe((data) => {
        this.fondos = [...this.fondos, { id: fondoId, name: data }];
      });
    });
    this.loadDatos();
  }

  loadDatos() {
    this.fintualApiService.getAssetDays(this.fondoId).subscribe((data) => {
      this.datos = data;
    });
  }

  onDateFilterChanged(dates: { fromDate: string, toDate: string }) {
    this.fromDate = dates.fromDate;
    this.toDate = dates.toDate;

    if (this.fromDate && this.toDate) {
      this.applyDateFilter();
    } else {
      this.loadDatos();
    }
  }

  applyDateFilter() {
    this.fintualApiService.getAssetDaysWithRange(this.fondoId, this.fromDate, this.toDate)
      .subscribe((data) => {
        this.datos = data;
      });
  }

  onFondoChange(fondoId: number) {
    this.fondoId = fondoId;
    if (this.fromDate && this.toDate) {
      this.applyDateFilter();
    } else {
      this.loadDatos();
    }
  }

  resetDateFilter() {
    this.fromDate = '';
    this.toDate = '';
    this.loadDatos();
  }
  
}