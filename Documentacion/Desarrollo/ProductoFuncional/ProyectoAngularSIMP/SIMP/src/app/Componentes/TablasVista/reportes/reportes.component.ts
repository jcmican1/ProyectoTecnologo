import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportesModel } from 'src/app/Modelos/Reportes.model';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes: ReportesModel[] = [];

  constructor(
    private ReportesService: ReportesService) { }


  ngOnInit(): void {
    this.fetchReportes();

  }
  fetchReportes(): void {
    this.ReportesService.obtenerReportes().subscribe(
      (data: ReportesModel[]) => {
        this.reportes = data;
        this.renderBarChart();
      },
    );
  }

  renderBarChart(): void {
    const canvas: any= document.getElementById('barChart');
    const ctx = canvas.getContext('2d');

    const nombresProductos = this.reportes.map(reporte => reporte.NombreProducto);
    const totalVendido = this.reportes.map(reporte => parseFloat(reporte.TotalVendido));

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nombresProductos,
        datasets: [{
          label: 'Total Vendido',
          data: totalVendido,
          backgroundColor: 'rgba(6, 23, 39)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}