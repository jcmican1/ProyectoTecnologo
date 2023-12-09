import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';


import { UsuarioModel } from '../../Modelos/Usuarios.model';
import { UsuariosService } from '../../servicios/Usuarios/usuarios.service';
import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UsuarioModel = new UsuarioModel("", "", "", "", "", "", "");

  
  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private Sesion:CompartidosService
  ) { }
  

  ngOnInit(): void {
    if (this.Sesion.Sesion) {
      this.router.navigate([''])
    }
  }

  logeo() {
    this.UsuariosService.obtenerUsuariologin(this.UsuarioModel).subscribe(data => {
      if (data) {
        this.Sesion.Sesion = true
        this.router.navigate([''])
      }else{
        alert("Logeo no posible  \n" + data)
      }
    })
  }

}
