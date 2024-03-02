import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { MovimientoEDModel } from 'src/app/Modelos/Movimiento-ed.model';

@Component({
  selector: 'app-movimiento',
  templateUrl: './ac-movimientos.component.html',
  styleUrls: ['./ac-movimientos.component.css']
})
export class AcMovimientosComponent implements OnInit {
  movimientoForm!: FormGroup;
  idMovimiento!: string; 
  movimiento: MovimientoEDModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

    this.idMovimiento = this.route.snapshot.params['id'];

    if (this.idMovimiento) {
      this.usuariosService.obtenerMovimiento(this.idMovimiento).subscribe(
        movimiento => {
          if (movimiento) {
            this.movimiento = movimiento;
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
    if (this.movimientoForm.valid && this.movimiento) {
      const idMovimiento = this.movimientoForm.get('IdMovimiento')?.value;

      const movimientoActualizado = new MovimientoEDModel(
        idMovimiento,
        this.movimientoForm.get('fechaMovimiento')?.value,
        this.movimientoForm.get('cantidadProducto')?.value,
        this.movimientoForm.get('idMotivo')?.value,
        this.movimientoForm.get('idProductoMateriaPrima')?.value,
        this.movimientoForm.get('idUsuario')?.value,
        this.movimientoForm.get('tipoMovimiento')?.value
      );

      this.usuariosService.actualizarMovimiento(movimientoActualizado).subscribe(
        () => {
          alert('Movimiento actualizado con éxito');
          this.router.navigate(['/movimiento']);
        },
        error => {
          console.error('Error al actualizar el movimiento:', error);
          alert('Hubo un error al actualizar el movimiento. Por favor, inténtalo de nuevo.');
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}


