import { Component } from '@angular/core';
import { CompartidosService } from './servicios/Compartidos/compartidos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIMP';
  constructor(public Sesion:CompartidosService) {} 
}
