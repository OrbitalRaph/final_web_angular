import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../models/stats';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  statistiquesUrl = 'http://localhost:3000/statistiques';

  constructor(private http: HttpClient) { }
  
  getCharacterCountByElement(): Observable<Stats[]> {
    const url = `${this.statistiquesUrl}/elements`;
    return this.http.get<Stats[]>(url);
  }

  getCharacterCountByWeaponType(): Observable<Stats[]> {
    const url = `${this.statistiquesUrl}/weapons`;
    return this.http.get<Stats[]>(url);
  }

  getCharacterCountByRarity(): Observable<Stats[]> {
    const url = `${this.statistiquesUrl}/rarities`;
    return this.http.get<Stats[]>(url);
  }
}
