import { Component } from '@angular/core';
import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private Sesion: CompartidosService
  ) { }

  Cerrarsession() {
    this.Sesion.Sesion = false
    this.Sesion.deleteToken()
  }

}
