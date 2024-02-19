import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportesModel } from 'src/app/Modelos/Reportes.model';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  ReportesModel: Observable<ReportesModel[]> | undefined

  constructor(
    private ReportesService: ReportesService) { }


  ngOnInit() {
    this.ReportesModel = this.ReportesService.obtenerReportes();

  }
}