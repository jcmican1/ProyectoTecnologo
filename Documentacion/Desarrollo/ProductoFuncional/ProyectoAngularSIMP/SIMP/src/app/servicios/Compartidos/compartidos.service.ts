import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidosService {
  Sesion: boolean = false;

  Correo= ""
  rol=""
  
  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem('token');
    this.getToken
  }

  constructor() { }
}
