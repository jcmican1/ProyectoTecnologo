import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantillaProductoModel } from 'src/app/Modelos/Plantilla_Producto.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-plantilla-producto',
  templateUrl: './plantilla-producto.component.html',
  styleUrls: ['./plantilla-producto.component.css']
})
export class PlantillaProductoComponent {
  PlantillaBusqueda = ""
  plantillaProductos: PlantillaProductoModel[] = []
  messageError:string = ''


  constructor(private plantillaService: ProductosService){}

  ngOnInit() {
    this.plantillaService.obtenerPlantillaProductos().subscribe(data=>{
      if (Array.isArray(data)) {
        this.plantillaProductos = data;
      }else if (typeof data === 'string') {
        this.plantillaProductos = []
        this.messageError = data
      }
    }
  );
}

buscarPlantillaProducto(){
  this.plantillaService.obtenerPlantillaProducto(this.PlantillaBusqueda).subscribe(data=>{
    if (Array.isArray(data)) {
      this.plantillaProductos = data;
    }else if (typeof data === 'string') {
      this.plantillaProductos = []
      this.messageError = data
    }
  }
)
}

borrarPlantillaProducto(id:string){
  this.plantillaService.eliminarPlantillaProducto(id).subscribe(data=>{
    this.plantillaService.obtenerPlantillaProductos().subscribe(data=>{
        if (Array.isArray(data)) {
          this.plantillaProductos = data;
        }else if (typeof data === 'string') {
          this.plantillaProductos = []
          this.messageError = data
        }
      }
    )
  })
}

}
