import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Summary } from 'src/app/shared/models/summary.model';
import { Items } from 'src/app/shared/models/items.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getTotalAmountOfSales(): Observable<Summary> {
    return this.http.get<Summary>(`${environment.apiUrl}summary`);
  }

  getLastActivities(): Observable<Items[]> {
    return this.http.get<Items[]>(`${environment.apiUrl}items`);
  }


}
