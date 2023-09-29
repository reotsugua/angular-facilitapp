import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = 'http://localhost:3000/items'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // New method to get data for a specific payment type
  getDataByPaymentType(paymentType: string): Observable<any[]> {
    const url = `${this.apiUrl}?paymentType=${paymentType}`;
    return this.http.get<any[]>(url);
  }
}
