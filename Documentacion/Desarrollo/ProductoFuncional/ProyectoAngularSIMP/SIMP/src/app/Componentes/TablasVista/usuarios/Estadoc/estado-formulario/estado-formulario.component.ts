import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { EstadoModelo } from 'src/app/Modelos/Estado.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-estado-formulario',
  templateUrl: './estado-formulario.component.html',
  styleUrls: ['./estado-formulario.component.css']
})
export class EstadoFormularioComponent {

  id = ''
  EstadoModelo = new EstadoModelo("", "");

  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if (this.id) {
      console.log("EDITAR");

      this.UsuariosService.obtenerEstado(this.id).subscribe(data => {
        this.EstadoModelo = data[0]
      }, error => {
        console.log(error);
      })
    }else{
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.EstadoModelo.IdEstado) {
      this.UsuariosService.actualizarEstado(this.EstadoModelo).subscribe(data => {
        alert(data)
        this.router.navigate(['/Estado'])
      })
    } else {
      console.log('crear');
      this.UsuariosService.agregarEstado(this.EstadoModelo).subscribe(data => {
        alert(data)
        this.router.navigate(['/Estado'])
      })
    }
  }
}
