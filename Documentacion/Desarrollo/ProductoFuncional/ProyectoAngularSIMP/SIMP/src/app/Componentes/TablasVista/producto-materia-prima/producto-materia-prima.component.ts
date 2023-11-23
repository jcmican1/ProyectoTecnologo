import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
@Component({
  selector: 'app-producto-materia-prima',
  templateUrl: './producto-materia-prima.component.html',
  styleUrls: ['./producto-materia-prima.component.css']
})
export class ProductoMateriaPrimaComponent {
  ProductosMateriaPrimaBusqueda = "";
  ProductosMateriaPrimaModel: ProductoMateriaPrimaModel[] = []
  messageError:string = ''

  constructor(
    private ProductosService: ProductosService) { }



  ngOnInit() {
    this.ProductosService.obtenerProductosMateriaPrima().subscribe(data=>{
        if (Array.isArray(data)) {
          this.ProductosMateriaPrimaModel = data;
        }else if (typeof data === 'string') {
          this.ProductosMateriaPrimaModel = []
          this.messageError = data
        }
      }
      );
  }

  buscarProductoMateriaPrima(){
    this.ProductosService.obtenerProductoMateriaPrima(this.ProductosMateriaPrimaBusqueda).subscribe(data=>{
      if (Array.isArray(data)) {
        this.ProductosMateriaPrimaModel = data;
      }else if (typeof data === 'string') {
        this.ProductosMateriaPrimaModel = []
        this.messageError = data
      }
    }
    )
  }

  borrarProductoMateriaPrima(id: string){
    this.ProductosService.eliminarProductoMateriaPrima(id).subscribe((data) => {
      this.ProductosService.obtenerProductosMateriaPrima().subscribe(data=>{
        if (Array.isArray(data)) {
          this.ProductosMateriaPrimaModel = data;
        }else if (typeof data === 'string') {
          this.ProductosMateriaPrimaModel = []
          this.messageError = data
        }
      }
    );
    })
  }

}
