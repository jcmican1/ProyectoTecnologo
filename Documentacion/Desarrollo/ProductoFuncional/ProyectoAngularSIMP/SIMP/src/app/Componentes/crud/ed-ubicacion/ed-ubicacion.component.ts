import { Component, OnInit } from '@angular/core';
import { UbicacionModel } from 'src/app/Modelos/UbicacionAlmacen.module';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ed-ubicacion',
  templateUrl: './ed-ubicacion.component.html',
  styleUrls: ['./ed-ubicacion.component.css']
})
export class EdUbicacionComponent implements OnInit {

  id=''
  ubicacion = new UbicacionModel("","");

  constructor(
    private ubicacionService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id']
     if(this.id){
      console.log("Editar");
      this.ubicacionService.obtenerUbicacion(this.id).subscribe(data=>{
        this.ubicacion = data[0]
      })
     } else {
      console.log('Crear');
     }
  }

  onSubmit(){
    console.log('onSubmit');
    
    if(this.ubicacion.IdUbicacionAlmacen){
      this.ubicacionService.actualizarUbicacion(this.ubicacion).subscribe(data=>{
        alert(data)
        this.router.navigate(['/ubicacion-almacen'])
      })
    } else {
      console.log('Creando');
      this.ubicacionService.agregarUbicacion(this.ubicacion).subscribe(data=>{
        alert(data)
        this.router.navigate(['/ubicacion-almacen'])
      })
    }
  }

}
