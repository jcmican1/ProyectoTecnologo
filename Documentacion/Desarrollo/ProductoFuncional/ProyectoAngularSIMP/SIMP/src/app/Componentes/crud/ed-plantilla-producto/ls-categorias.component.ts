import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/Modelos/Categoria.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-ls-categorias',
  templateUrl: './ls-categorias.component.html',
  styleUrls: ['./ls-categorias.component.css']
})
export class LsCategoriasComponent implements OnInit {

  CategoriaBusqueda = ""
  categorias: Observable<CategoriaModel[]> | undefined

  constructor(private categoriasService: ProductosService){}

  ngOnInit() {
      this.categorias = this.categoriasService.obtenerCategorias();
  }

  buscarCategoria(){
    this.categorias = this.categoriasService.obtenerCategoria(this.CategoriaBusqueda)
  }

  borrarCategoria(id:string){
    this.categoriasService.eliminarCategoria(id).subscribe(data=>{
      console.log(data);
    })

    this.categorias = this.categoriasService.obtenerCategorias()
  }

}
