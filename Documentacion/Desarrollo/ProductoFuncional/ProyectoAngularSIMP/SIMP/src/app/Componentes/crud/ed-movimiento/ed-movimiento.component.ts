import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ed-movimiento',
  templateUrl: './ed-movimiento.component.html',
  styleUrls: ['./ed-movimiento.component.css']
})
export class EdMovimientoComponent implements OnInit {
  id = ''
  movimiento = new MovimientoEDModel("", "", "", "", "", "", "");
  motivos: any[] = [];
  productos: any[] = [];

  constructor(
    private movimientoService: UsuariosService, 
    private route: ActivatedRoute,
    private router: Router
     ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.movimientoService.obtenerMovimiento(this.id).subscribe(data => {
        this.movimiento = data
      }, error => {
        console.log(error);
      })
    } else {
      console.log("Crear");
    }

    this.movimientoService.obtenerMotivos().subscribe((data: any[]) => (this.motivos = data));
    this.movimientoService.obtenerProductos().subscribe((data: any[]) => (this.productos = data));
  }

  onSubmit() {
    
    console.log('onSubmit');
    console.log('id para actualizar', this.movimiento.IdMovimiento);

    if (this.movimiento.IdMovimiento) {
      console.log('Movimiento-a-actualizar', this.movimiento);
      
      this.movimientoService.actualizarMovimiento(this.movimiento).subscribe(
        (data) => {
          alert(data);
          this.router.navigate(['/movimiento']);
        },
        (error) => {
          console.error('Error:', error);
          alert('Hubo un error al actualizar el movimiento. Por favor, inténtalo de nuevo.');
        }
      );
    } else {
      console.log('Movimiento-a-agregar', this.movimiento);
      this.movimientoService.agregarMovimiento(this.movimiento).subscribe(
        (data: any) => {
          alert(data.mensaje);
          this.router.navigate(['/movimiento']);
        },
        (error: any) => {
          console.error('Error:', error);
          alert('Hubo un error al agregar el movimiento. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }
}
