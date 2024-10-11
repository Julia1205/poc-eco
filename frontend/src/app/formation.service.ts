// formation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://db:3000/api'; // Ajustez l'URL selon votre configuration

  constructor(private http: HttpClient) {}

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/formations`);
  }

  addFormation(formation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/formations`, formation);
  }

  getFormationStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/stats`);
  }
}