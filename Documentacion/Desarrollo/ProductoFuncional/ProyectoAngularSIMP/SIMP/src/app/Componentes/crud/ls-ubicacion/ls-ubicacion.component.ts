import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UbicacionModel } from 'src/app/Modelos/UbicacionAlmacen.module';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ls-ubicacion',
  templateUrl: './ls-ubicacion.component.html',
  styleUrls: ['./ls-ubicacion.component.css']
})
export class LsUbicacionComponent implements OnInit {

  ubicacion: Observable<UbicacionModel[]> | undefined

  constructor(private ubicacionService: UsuariosService){}

  ngOnInit(): void {
      this.ubicacion = this.ubicacionService.obtenerUbicaciones();
  }

  borrarUbicacion(id: string){
    this.ubicacionService.borrarUbicacion(id).subscribe(data=>{
      console.log(data);
    })

    this.ubicacion = this.ubicacionService.obtenerUbicaciones()
  }

}
