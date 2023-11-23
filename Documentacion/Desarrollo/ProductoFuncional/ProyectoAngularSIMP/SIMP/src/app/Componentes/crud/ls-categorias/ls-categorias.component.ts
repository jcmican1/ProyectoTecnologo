import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CategoriaModel } from 'src/app/Modelos/Categoria.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-ls-categorias',
  templateUrl: './ls-categorias.component.html',
  styleUrls: ['./ls-categorias.component.css']
})
export class LsCategoriasComponent implements OnInit {

  CategoriaBusqueda = ""
  categorias: CategoriaModel[] = []
  messageError: string = ''

  constructor(private categoriasService: ProductosService){}

  ngOnInit() {
      this.categoriasService.obtenerCategorias().subscribe(data=>{
        if (Array.isArray(data)) {
          this.categorias = data;
        }else if (typeof data === 'string') {
          this.categorias = []
          this.messageError = data
        }
      });
  }

  buscarCategoria(){
    this.categoriasService.obtenerCategoria(this.CategoriaBusqueda).subscribe(data=> {
      if (Array.isArray(data)) {
        this.categorias = data;
      }else if (typeof data === 'string') {
        this.categorias = []
        this.messageError = data
      }
    })
  }

  borrarCategoria(id:string){
    this.categoriasService.eliminarCategoria(id)
    .subscribe((data) => {
      this.categoriasService.obtenerCategorias().subscribe(data => {
        if (Array.isArray(data)) {
          this.categorias = data;
        }else if (typeof data === 'string') {
          this.categorias = []
          this.messageError = data
        }
      });
    });
  }

}
