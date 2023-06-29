import { Component } from '@angular/core';
import { UsuariosLRService } from '../../servicios/tablas-crud.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private UsuariosLRService : UsuariosLRService, private router: Router) { }
  DatosUsuario={
    Correo:'',
    Clave:''
  };

  logeo(){

    this.UsuariosLRService.seleccionar(this.DatosUsuario.Correo).subscribe(result => {
        if (Object.keys(result).length > 0) {
        // Redirige a la página del menú
        this.router.navigate(['Inventario']);
      }else{
        alert("Login insatisfactorio");
      }
    }
  ); 
  
  }
}
