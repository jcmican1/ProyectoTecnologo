import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidosService {
  Sesion: boolean = false;

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  constructor() { }
}
