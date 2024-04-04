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
  motivos: any[] = [];
  productos: any[] = [];

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
            this.actualizarFormulario(); // Llamada a la función para actualizar el formulario
          }
        },
        error => {
          console.error('Error al obtener los datos del movimiento:', error);
        }
      );
    }

    this.usuariosService.obtenerMotivos().subscribe((data: any[]) => (this.motivos = data));
    this.usuariosService.obtenerProductosMateriaPrima().subscribe((data: any[]) => (this.productos = data));
  }

  actualizarFormulario() {
    this.movimientoForm.patchValue({
      IdMovimiento: this.movimiento?.IdMovimiento || '',
      fechaMovimiento: this.movimiento?.FechaMovimiento || '',
      cantidadProducto: this.movimiento?.CantidadProducto || '',
      idMotivo: this.movimiento?.IdMotivo || '',
      idProductoMateriaPrima: this.movimiento?.IdProductoMateriaPrima || '',
      idUsuario: this.movimiento?.IdUsuario || '',
      tipoMovimiento: this.movimiento?.TipoMovimiento || ''
    });
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