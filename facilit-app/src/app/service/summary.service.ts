import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../model/summary.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private summaryUrl = 'http://localhost:3000/summary'; // Atualize com sua URL

  constructor(private http: HttpClient) {}

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.summaryUrl);
  }
}
