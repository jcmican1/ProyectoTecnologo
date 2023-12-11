import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';

@Component({
  selector: 'app-movimiento',
  templateUrl: './ac-movimientos.component.html',
  styleUrls: ['./ac-movimientos.component.css']
})
export class AcMovimientosComponent implements OnInit {
  movimientoForm!: FormGroup;
  idMovimiento!: string;  // Asegúrate de obtener este valor de alguna manera

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.movimientoForm = this.formBuilder.group({
      IdMovimiento: [''],
      fechaMovimiento: [''],
      cantidadProducto: [''],
      idMotivo: [''],
      idProductoMateriaPrima: [''],
      idUsuario: [''],
      tipoMovimiento: ['']
    });

    // Asegúrate de que idMovimiento se inicializa correctamente antes de esto
    if (this.idMovimiento) {
      // Obtén los datos del movimiento y establece los valores del formulario
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