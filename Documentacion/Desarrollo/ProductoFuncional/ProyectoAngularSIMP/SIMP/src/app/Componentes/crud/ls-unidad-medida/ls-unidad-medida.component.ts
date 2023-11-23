import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { UnidadMedidaModel } from 'src/app/Modelos/Unidad_Medida.model';

@Component({
  selector: 'app-ls-unidad-medida',
  templateUrl: './ls-unidad-medida.component.html',
  styleUrls: ['./ls-unidad-medida.component.css']
})
export class LsUnidadMedidaComponent implements OnInit {

  UnidadBusqueda = ""
  unidades: UnidadMedidaModel[] = []
  messageError:string = ''

  constructor(private unidadService: ProductosService){}

  ngOnInit() {
      this.unidadService.obtenerUnidadMedidas().subscribe(data=>{
        if (Array.isArray(data)) {
          this.unidades = data;
        }else if (typeof data === 'string') {
          this.unidades = []
          this.messageError = data
        }
      }
    );
  }

  buscarUnidadMedida(){
    this.unidadService.obtenerUnidadMedida(this.UnidadBusqueda).subscribe(data=>{
      if (Array.isArray(data)) {
        this.unidades = data;
      }else if (typeof data === 'string') {
        this.unidades = []
        this.messageError = data
      }
    }
  )
  }

  borrarUnidadMedida(id:string){
    this.unidadService.eliminarUnidadMedida(id).subscribe(data=>{
        this.unidadService.obtenerUnidadMedidas().subscribe(data=>{
          if (Array.isArray(data)) {
            this.unidades = data;
          }else if (typeof data === 'string') {
            this.unidades = []
            this.messageError = data
          }
        }
      )
    })
  }

}
