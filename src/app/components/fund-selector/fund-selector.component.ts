import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fund-selector',
  imports: [CommonModule],
  templateUrl: './fund-selector.component.html',
  styleUrl: './fund-selector.component.css'
})
export class FundSelectorComponent {
  @Input() fondos: { id: number, name: string }[] = [];
  @Input() selectedFondoId: number = 0;
  @Output() fondoSeleccionado = new EventEmitter<number>();

  onChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = Number(selectElement.value);
    this.fondoSeleccionado.emit(selectedId);
  }

}
