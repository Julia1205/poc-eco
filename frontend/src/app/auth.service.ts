// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://db:3000/api'; // Ajustez l'URL selon votre configuration

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        // Stockez le token JWT dans le localStorage ou un service dédié
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    // Supprimez le token JWT du localStorage
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Vérifiez si un token JWT est présent
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}