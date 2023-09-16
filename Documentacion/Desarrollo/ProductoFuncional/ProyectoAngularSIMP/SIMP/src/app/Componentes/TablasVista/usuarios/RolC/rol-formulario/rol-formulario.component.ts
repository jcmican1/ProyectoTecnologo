import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { RolModel } from 'src/app/Modelos/Rol.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';


@Component({
  selector: 'app-rol-formulario',
  templateUrl: './rol-formulario.component.html',
  styleUrls: ['./rol-formulario.component.css']
})
export class RolFormularioComponent {

  id = ''
  RolModel = new RolModel("", "");

  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if (this.id) {
      this.UsuariosService.obtenerRol(this.id).subscribe(data => {
        this.RolModel = data[0]
      }, error => {
        console.log(error);
      })
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.RolModel.IdRol) {
      this.UsuariosService.actualizarRol(this.RolModel).subscribe(data => {
        alert(data)
        this.router.navigate(['/Rol'])
      })
    } else {
      this.UsuariosService.agregarRol(this.RolModel).subscribe(data => {
        alert(data)
        this.router.navigate(['/Rol'])
      })
    }
  }
}
