import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExistenciasModel } from 'src/app/Modelos/Existencias.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ls-existencias',
  templateUrl: './ls-existencias.component.html',
  styleUrls: ['./ls-existencias.component.css']
})
export class LsExistenciasComponent implements OnInit {

  existencias: Observable<ExistenciasModel[]> | undefined

  constructor(private existenciasService: UsuariosService){}

  ngOnInit() {
      this.existencias = this.existenciasService.obtenerExistencias();
  }
  
  borrarExistencias(id:string){
    this.existenciasService.borrarExistencia(id).subscribe(data=>{
      console.log(data);
    })

    this.existencias = this.existenciasService.obtenerExistencias()
  }

}
