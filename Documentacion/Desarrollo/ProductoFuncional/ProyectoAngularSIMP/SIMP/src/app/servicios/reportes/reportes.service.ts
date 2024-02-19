import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportesModel } from 'src/app/Modelos/Reportes.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  obtenerReportes() {
    return this.http.get<ReportesModel[]>(this.url + '/reportes');
  }
  
}


