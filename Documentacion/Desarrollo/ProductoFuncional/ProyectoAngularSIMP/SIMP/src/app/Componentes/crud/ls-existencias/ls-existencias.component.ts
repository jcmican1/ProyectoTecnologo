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

  existencias: ExistenciasModel[] = []
  messageError:string = ''

  constructor(private existenciasService: UsuariosService){}

  ngOnInit() {
      this.existenciasService.obtenerExistencias().subscribe(data=>{
        if (Array.isArray(data)) {
          this.existencias = data;
        }else if (typeof data === 'string') {
          this.existencias = []
          this.messageError = data
        }
      }
    );
  }

  borrarExistencias(id:string){
    this.existenciasService.borrarExistencia(id).subscribe(data=>{
      this.existenciasService.obtenerExistencias().subscribe(data=>{
          if (Array.isArray(data)) {
            this.existencias = data;
          }else if (typeof data === 'string') {
            this.existencias = []
            this.messageError = data
          }
        }
      )
    })
  }

}
