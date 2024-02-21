import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';

import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';
import { UsuarioModel } from 'src/app/Modelos/Usuarios.model';
import { Observable } from 'rxjs';

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

  UsuarioModel: Observable<UsuarioModel[]> | undefined;
  idUsuario: any;

  constructor(
    private movimientoService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private Sesion: CompartidosService
  ) { }

  ngOnInit() {
    this.movimientoService.obtenerNavUser(this.Sesion.Correo).subscribe(
      (usuarios: UsuarioModel[]) => {
        if (usuarios && usuarios.length > 0) {
          let primerUsuario = usuarios[0];
          let idUsuario = primerUsuario.idUsuario;
          this.idUsuario = idUsuario   //este hace cosas automaticas  
          console.log('Id de Usuario:', idUsuario);
        } else {
          console.log('No se obtuvieron usuarios o la lista está vacía.');
        }
      },
      error => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
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
      this.movimiento.IdUsuario == this.idUsuario
      console.log('====================================');
      console.log(this.movimiento);
      console.log('====================================');
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
      this.movimiento.IdUsuario == this.idUsuario
      console.log('====================================');
      console.log(this.movimiento);
      console.log('====================================');
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
