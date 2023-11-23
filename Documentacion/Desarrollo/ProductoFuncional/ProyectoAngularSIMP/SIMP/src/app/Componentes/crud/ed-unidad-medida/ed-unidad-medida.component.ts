import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { UnidadMedidaModel } from 'src/app/Modelos/Unidad_Medida.model';

@Component({
  selector: 'app-ed-unidad-medida',
  templateUrl: './ed-unidad-medida.component.html',
  styleUrls: ['./ed-unidad-medida.component.css']
})
export class EdUnidadMedidaComponent implements OnInit {

  id=''

  unidades= new UnidadMedidaModel("","");

  constructor(
    private unidadesService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
      this.id= this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.unidadesService.obtenerUnidadMedida(this.id).subscribe(data=>{
          this.unidades = data[0]
        })
      } else {
        console.log("Crear");

      }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.unidades.IdUnidadMedida){
      this.unidadesService.actualizarUnidadMedida(this.unidades).subscribe(data=>{
        alert(data)
        this.router.navigate(['/unidades'])
      })
    } else {
      console.log('Creando');
      this.unidadesService.agregarUnidadMedida(this.unidades).subscribe(data=>{
        alert(data)
        this.router.navigate(['/unidades'])
      })
    }
  }
}
