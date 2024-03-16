import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { UsuarioModel } from 'src/app/Modelos/Usuarios.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent {

  id = ''
  UsuarioModel = new UsuarioModel("", "", "", "", "", "", "", "");

  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if (this.id) {
      console.log("EDITAR");
      this.UsuariosService.obtenerUsuario(this.id).subscribe(data => {
        this.UsuarioModel = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.UsuarioModel.idUsuario) {
      this.UsuariosService.actualizarUsuario(this.UsuarioModel).subscribe(data => {
        alert(data)
        this.router.navigate(['/Usuarios'])
      })
    } else {
      console.log('crear');
      this.UsuariosService.agregarUsuario(this.UsuarioModel).subscribe(data => {
        alert(data)
        this.router.navigate(['/Usuarios'])
      })
    }
  }
}