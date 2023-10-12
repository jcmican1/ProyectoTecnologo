import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { RolModel } from 'src/app/Modelos/Rol.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent {
  RolBusqueda = "";
  RolModel: Observable<RolModel[]> | undefined;

  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.RolModel = this.UsuariosService.obtenerRols();
  }

  borrarRol(id: string) {
    this.UsuariosService.borrarRol(id).subscribe(data => {
      console.log(data);
      alert(data)
      this.ngOnInit()
    })
  }

  buscarRol() {
    this.RolModel = this.UsuariosService.obtenerRol(this.RolBusqueda)
  }

}
