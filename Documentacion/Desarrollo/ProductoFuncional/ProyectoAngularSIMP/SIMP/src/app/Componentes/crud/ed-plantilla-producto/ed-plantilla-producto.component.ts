import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantillaProductoModel } from 'src/app/Modelos/Plantilla_Producto.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-ed-plantilla-producto',
  templateUrl: './ed-plantilla-producto.component.html',
  styleUrls: ['./ed-plantilla-producto.component.css']
})
export class EdPlantillaProductoComponent implements OnInit {

  id=''

  plantillas= new PlantillaProductoModel("","","");

  constructor(
    private plantillasService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
      this.id= this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.plantillasService.obtenerPlantillaProducto(this.id).subscribe(data=>{
          this.plantillas = data[0]
        })
      } else {
        console.log("Crear");

      }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.plantillas.IdPlantillaProducto){
      this.plantillasService.actualizarPlantillaProducto(this.plantillas).subscribe(data=>{
        alert(data)
        this.router.navigate(['/Plantilla'])
      })
    } else {
      console.log('Creando');
      this.plantillasService.agregarPlantillaProducto(this.plantillas).subscribe(data=>{
        alert(data)
        this.router.navigate(['/Plantilla'])
      })
    }
  }
}
