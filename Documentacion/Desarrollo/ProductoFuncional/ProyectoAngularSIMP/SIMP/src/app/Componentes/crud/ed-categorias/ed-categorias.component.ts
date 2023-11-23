import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/Modelos/Categoria.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-ed-categorias',
  templateUrl: './ed-categorias.component.html',
  styleUrls: ['./ed-categorias.component.css']
})
export class EdCategoriasComponent implements OnInit {

  id=''

  categorias= new CategoriaModel("","");

  constructor(
    private categoriasService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
      this.id= this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.categoriasService.obtenerCategoria(this.id).subscribe(data=>{
          this.categorias = data[0]
        })
      } else {
        console.log("Crear");

      }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.categorias.IdCategoria){
      this.categoriasService.actualizarCategoria(this.categorias).subscribe(data=>{
        alert(data)
        this.router.navigate(['/categorias'])
      })
    } else {
      console.log('Creando');
      this.categoriasService.agregarCategoria(this.categorias).subscribe(data=>{
        alert(data)
        this.router.navigate(['/categorias'])
      })
    }
  }
}
