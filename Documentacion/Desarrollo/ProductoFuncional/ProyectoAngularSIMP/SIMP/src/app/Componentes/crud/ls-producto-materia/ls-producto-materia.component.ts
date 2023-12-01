import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { ProductoMateriaModel } from 'src/app/Modelos/Producto_Materia.model';

@Component({
  selector: 'app-ls-producto-materia',
  templateUrl: './ls-producto-materia.component.html',
  styleUrls: ['./ls-producto-materia.component.css']
})
export class LsProductoMateriaComponent implements OnInit {

  UnidadBusqueda = ""
  productosMateria: ProductoMateriaModel[] = []
  messageError:string = ''

  constructor(private productosMateriaService: ProductosService){}

  ngOnInit() {
      this.productosMateriaService.obtenerProductoMaterias().subscribe(data=>{
        if (Array.isArray(data)) {
          this.productosMateria = data;
        }else if (typeof data === 'string') {
          this.productosMateria = []
          this.messageError = data
        }
      }
    );
  }

  borrarProductoMateria(IdProductoMateria: string){
    this.productosMateriaService.eliminarProductoMateria(IdProductoMateria).subscribe(data=>{
      this.productosMateriaService.obtenerProductoMaterias().subscribe(data=>{
          if (Array.isArray(data)) {
            this.productosMateria = data;
          }else if (typeof data === 'string') {
            this.productosMateria = []
            this.messageError = data
          }
        }
      )
    })
  }

}
