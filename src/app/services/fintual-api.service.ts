import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FintualApiService {
  private baseUrl = 'https://fintual.cl/api/real_assets/';

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del fondo (solo 'date' y 'price')
  getAssetDays(fondoId: number): Observable<any[]> {
    const url = `${this.baseUrl}${fondoId}/days`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data.map((d: any) => ({
          date: d.attributes.date,
          price: d.attributes.price,
        }));
      })
    );
  }
  
  // Método para obtener los datos del fondo con rango de fechas
  getAssetDaysWithRange(fondoId: number, fromDate: string, toDate: string): Observable<any[]> {
    const url = `${this.baseUrl}${fondoId}/days?from_date=${fromDate}&to_date=${toDate}`;

    return this.http.get<any>(url).pipe(
      map(response => response.data.map((d: any) => ({
        date: d.attributes.date,
        price: d.attributes.price
      })))
    );
  }

  // Método para obtener el nombre del fondo
  getFundName(fondoId: number): Observable<string> {
    const url = `${this.baseUrl}${fondoId}`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data.attributes.name;
      })
    );
  }
}
