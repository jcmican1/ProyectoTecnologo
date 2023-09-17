import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { EstadoModelo } from 'src/app/Modelos/Estado.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  EstadoBusqueda = "";
  EstadoModelo: Observable<EstadoModelo[]> | undefined;

  constructor(
  private UsuariosService: UsuariosService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.EstadoModelo = this.UsuariosService.obtenerEstados();
  }

  borrarEstado(id: string) {
    this.UsuariosService.borrarEstado(id).subscribe(data => {
      console.log(data);
      alert(data)
      this.ngOnInit()
    })
  }

  buscarEstado(){
    this.EstadoModelo = this.UsuariosService.obtenerEstado(this.EstadoBusqueda)
  }

}
