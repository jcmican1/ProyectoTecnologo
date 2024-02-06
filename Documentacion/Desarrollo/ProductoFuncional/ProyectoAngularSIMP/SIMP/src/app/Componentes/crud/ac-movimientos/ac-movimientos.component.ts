import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';
import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';
import { UsuarioModel } from 'src/app/Modelos/Usuarios.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movimiento',
  templateUrl: './ac-movimientos.component.html',
  styleUrls: ['./ac-movimientos.component.css']
})
export class AcMovimientosComponent implements OnInit {
  movimientoForm!: FormGroup;
  idMovimiento!: string; 

  UsuarioModel: Observable<UsuarioModel[]> | undefined;
  idUsuario: any;
  constructor(private formBuilder: FormBuilder,
     private usuariosService: UsuariosService,
     private Sesion: CompartidosService) { }

  ngOnInit() {
    this.usuariosService.obtenerNavUser(this.Sesion.Correo).subscribe(
      (usuarios: UsuarioModel[]) => {
        if (usuarios && usuarios.length > 0) {
          const primerUsuario = usuarios[0];
          const idUsuario = primerUsuario.idUsuario;
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

    this.movimientoForm = this.formBuilder.group({
      IdMovimiento: [''],
      fechaMovimiento: [''],
      cantidadProducto: [''],
      idMotivo: [''],
      idProductoMateriaPrima: [''],
      idUsuario: [''],
      tipoMovimiento: ['']
    });

    if (this.idMovimiento) {
      this.usuariosService.obtenerMovimiento(this.idMovimiento).subscribe(
        movimiento => {
          if (movimiento) {
            this.movimientoForm.patchValue({
              IdMovimiento: movimiento.IdMovimiento,
              fechaMovimiento: movimiento.FechaMovimiento,
              cantidadProducto: movimiento.CantidadProducto,
              idMotivo: movimiento.IdMotivo,
              idProductoMateriaPrima: movimiento.IdProductoMateriaPrima,
              idUsuario: movimiento.IdUsuario,
              tipoMovimiento: movimiento.TipoMovimiento
            });
          }
        },
        error => {
          console.error('Error al obtener los datos del movimiento:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.movimientoForm.valid) {
      const idMovimiento = this.movimientoForm.get('IdMovimiento')?.value;
  
      if (idMovimiento) {
        const movimiento = new MovimientoEDModel(
          idMovimiento,
          this.movimientoForm.get('fechaMovimiento')?.value,
          this.movimientoForm.get('cantidadProducto')?.value,
          this.movimientoForm.get('idMotivo')?.value,
          this.movimientoForm.get('idProductoMateriaPrima')?.value,
          this.movimientoForm.get('idUsuario')?.value,
          this.movimientoForm.get('tipoMovimiento')?.value
        );
        this.usuariosService.actualizarMovimiento(movimiento).subscribe(
          () => {
            console.log('Movimiento actualizado con éxito');
          },
          error => {
            console.error('Error al actualizar el movimiento:', error);
          }
        );
      } else {
        console.error('El ID del movimiento no está definido');
      }
    } else {
      console.error('El formulario no es válido');
    }
  }
}