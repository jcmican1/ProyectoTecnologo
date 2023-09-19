import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovimientoModel } from 'src/app/Modelos/Movimiento.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ls-movimiento',
  templateUrl: './ls-movimiento.component.html',
  styleUrls: ['./ls-movimiento.component.css']
})
export class LsMovimientoComponent implements OnInit {

  movimiento: Observable<MovimientoModel[]> | undefined

  constructor(private movimientoService: UsuariosService){}

  ngOnInit() {
      this.movimiento = this.movimientoService.obtenerMovimientos();
  }

  borrarMovimiento(id:string){
    this.movimientoService.borrarMovimiento(id).subscribe(data=>{
      console.log(data);
    })
    this.movimiento = this.movimientoService.obtenerMovimientos()
  }

}
