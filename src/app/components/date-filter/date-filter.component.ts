import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  imports: [FormsModule],
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.css'
})
export class DateFilterComponent {
  fromDate: string = '';
  toDate: string = '';

  @Output() dateRangeSelected = new EventEmitter<{ fromDate: string, toDate: string }>();

  applyDateFilter() {
    if (!this.fromDate || !this.toDate) {
      alert('Por favor selecciona ambas fechas.');
      return;
    }
    if (new Date(this.fromDate) > new Date(this.toDate)) {
      alert('La fecha de inicio no puede ser mayor que la fecha de fin.');
      return;
    }

    this.dateRangeSelected.emit({ fromDate: this.fromDate, toDate: this.toDate });
  }

  resetDateFilter() {
    this.fromDate = '';
    this.toDate = '';
    this.dateRangeSelected.emit({ fromDate: '', toDate: '' });
  }
  
}
