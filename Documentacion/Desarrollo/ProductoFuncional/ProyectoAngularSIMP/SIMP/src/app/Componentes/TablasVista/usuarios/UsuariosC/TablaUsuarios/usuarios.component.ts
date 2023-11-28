import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/Modelos/Usuarios.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {
  usuarioBusqueda = "";
  UsuarioModel: Observable<UsuarioModel[]> | undefined;

  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.UsuarioModel = this.UsuariosService.obtenerUsuarios();
  }

  borrarUsuarios(id: string) {
    this.UsuariosService.borrarUsuario(id).subscribe(data => {
      console.log(data);
      alert(data)
      this.ngOnInit()
    })
  }

  buscarUsuario() {
    this.UsuarioModel = this.UsuariosService.obtenerUsuario(this.usuarioBusqueda)
  }
}
