import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';


@Component({
  selector: 'app-ed-movimiento',
  templateUrl: './ed-movimiento.component.html',
  styleUrls: ['./ed-movimiento.component.css']
})
export class EdMovimientoComponent implements OnInit {
  movimiento = new MovimientoEDModel("", "", "", "", "", "", "");
  motivos: any[] = [];
  productos: any[] = [];
  usuarios: any[] = [];

  constructor(
    private movimientoService: UsuariosService,
    private productoService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Crear");

    this.movimientoService.obtenerMotivos().subscribe((data: any[]) => (this.motivos = data));
    this.movimientoService.obtenerProductosMateriaPrima().subscribe((data: any[]) => (this.productos = data));
    // this.movimientoService.obtenerUsuarios().subscribe((data: any[]) => (this.usuarios = data));
  }

  onSubmit() {
    console.log('onSubmit');
    console.log('Movimiento-a-agregar', this.movimiento);

    this.movimientoService.agregarMovimiento(this.movimiento).subscribe(
      (data: any) => {
        alert(data.mensaje);
        this.router.navigate(['/exitencias']);
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Hubo un error al agregar el movimiento. Por favor, inténtalo de nuevo.');
      }
    );
  }
}
