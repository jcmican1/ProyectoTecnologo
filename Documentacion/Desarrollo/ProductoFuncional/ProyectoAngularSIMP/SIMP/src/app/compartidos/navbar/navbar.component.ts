import { Component } from '@angular/core';
import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/Modelos/Usuarios.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  UsuarioModel: Observable<UsuarioModel[]> | undefined;
  constructor(
    private Sesion: CompartidosService,
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('====================================');
    console.log("Correo", this.Sesion.Correo);
    console.log('====================================');
    console.log('====================================');
    console.log(this.UsuarioModel);
    console.log('====================================');
    this.UsuarioModel = this.UsuariosService.obtenerNavUser(this.Sesion.Correo)
    console.log('====================================');
    console.log(this.UsuarioModel);
    console.log('====================================');
  }

  Cerrarsession() {
    this.Sesion.Sesion = false
    this.Sesion.deleteToken()
  }

}
