import { Component, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/Modelos/Categoria.model';
import { UnidadMedidaModel } from 'src/app/Modelos/Unidad_Medida.model';

@Component({
  selector: 'app-ed-producto-materia-prima',
  templateUrl: './ed-producto-materia-prima.component.html',
  styleUrls: ['./ed-producto-materia-prima.component.css']
})
export class EdProductoMateriaPrimaComponent implements OnInit {

  id=''

  productoMateriaPrima = new ProductoMateriaPrimaModel("","","","","", "", "");

  categorias: CategoriaModel[] = []
  unidades:  UnidadMedidaModel [] = []

  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.productoService.obtenerCategorias().subscribe(data=>{
      this.categorias = data
    })

    this.productoService.obtenerUnidadMedidas().subscribe(data=>{
      this.unidades = data
    })

      this.id= this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.productoService.obtenerProductoMateriaPrima(this.id).subscribe(data=>{
          this.productoMateriaPrima = data[0]

          const categoriaEncontrada = this.categorias.find(categoria => categoria.DescripcionCategoria === this.productoMateriaPrima.DescripcionCategoria)
          if(categoriaEncontrada){
            this.productoMateriaPrima.IdCategoria = categoriaEncontrada.IdCategoria
          }

          const unidadEncontrada = this.unidades.find(unidad => unidad.UnidadMedida === this.productoMateriaPrima.UnidadMedida)
          if(unidadEncontrada){
            this.productoMateriaPrima.IdUnidadMedida = unidadEncontrada.IdUnidadMedida
          }
        })
      } else {
        console.log("Crear");
      }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.productoMateriaPrima.IdProductoMateriaPrima){
      this.productoService.actualizarProductoMateriaPrima(this.productoMateriaPrima).subscribe(data=>{
        alert(data)
        this.router.navigate(['/ProductoMateria'])
      })
    } else {
      console.log('Creando');
      this.productoService.agregarProductoMateriaPrima(this.productoMateriaPrima).subscribe(data=>{
        alert(data)
        this.router.navigate(['/ProductoMateria'])
      })
    }
  }
}
