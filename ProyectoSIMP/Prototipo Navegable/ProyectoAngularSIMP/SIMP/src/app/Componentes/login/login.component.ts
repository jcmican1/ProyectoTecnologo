import { Component } from '@angular/core';
import { UsuariosLRService } from 'src/app/servicios/tablas-crud.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private UsuariosLRServiceAA: UsuariosLRService, private router: Router) { }
  DatosUsuario={
    Correo:'',
    Clave:''
  };

  logeo(){

    this.UsuariosLRServiceAA.seleccionar(this.DatosUsuario.Correo).subscribe(result => {
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
