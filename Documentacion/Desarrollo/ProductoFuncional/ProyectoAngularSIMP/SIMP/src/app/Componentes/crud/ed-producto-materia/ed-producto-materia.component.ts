import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { ProductoMateriaModel } from 'src/app/Modelos/Producto_Materia.model';
import { PlantillaProductoModel } from 'src/app/Modelos/Plantilla_Producto.model';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';

@Component({
  selector: 'app-ed-producto-materia',
  templateUrl: './ed-producto-materia.component.html',
  styleUrls: ['./ed-producto-materia.component.css']
})
export class EdProductoMateriaComponent implements OnInit {

  id=''

  productoMateria= new ProductoMateriaModel("","", "", "" , "");

  plantillaProducto: PlantillaProductoModel[] = []
  productoMateriaPrima: ProductoMateriaPrimaModel[] = []

  constructor(
    private productoMateriaService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.productoMateriaService.obtenerPlantillaProductos().subscribe(data => {
      this.plantillaProducto = data
    })
    this.productoMateriaService.obtenerProductosMateriaPrima().subscribe(data => {
      this.productoMateriaPrima = data
    })
  }
  onSubmit(){
    console.log('onSubmit');
    console.log('Creando');
      this.productoMateriaService.agregarProductoMateria(this.productoMateria).subscribe(data=>{
        alert(data)
        this.router.navigate(['/productosMateria'])
      })
    }
}
