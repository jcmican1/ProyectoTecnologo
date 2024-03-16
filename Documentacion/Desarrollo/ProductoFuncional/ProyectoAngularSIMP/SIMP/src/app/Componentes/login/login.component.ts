import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../Modelos/Usuarios.model';
import { UsuariosService } from '../../servicios/Usuarios/usuarios.service';
import { CompartidosService } from 'src/app/servicios/Compartidos/compartidos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UsuarioModel = new UsuarioModel("", "", "", "", "", "", "","");
  showForgotPasswordForm: boolean = false;
  correo: string = '';
  palabraClave: string = '';

  constructor(
    private UsuariosService: UsuariosService,
    private router: Router,
    private Sesion: CompartidosService
  ) { }

  ngOnInit(): void {
    if (this.Sesion.Sesion) {
      this.router.navigate([''])
    }
  }

  logeo() {
    this.Sesion.deleteToken()
    this.UsuariosService.obtenerUsuariologin(this.UsuarioModel).subscribe(data => {
      if (data == "Usuario no activo, contacta con el administrador" || data == "No existe el usuario, contacta con el administrador" || data == "Por favor escribe tu correo" || data == "Por favor escribe tu clave" || data == "Contraseña incorrecta" || data == "No existe el usuario") {
        alert(data)
      } else {
        this.Sesion.saveToken(data);
        this.Sesion.Sesion = true
        this.Sesion.Correo = this.UsuarioModel.Correo
        this.router.navigate([''])
      }
    })
  }

  showForgotPasswordFormMetodo() {
    this.showForgotPasswordForm = true;
  }

  RecuperarClave() {

    this.UsuariosService.RecuperarClave(this.UsuarioModel).subscribe(Respuesta => {
      if (Respuesta == "Se actualizó correctamente la contraseña"){
        alert(Respuesta)
        this.router.navigate(['/Login'])
      }else{
        alert(Respuesta)
      }
    });
  }
}
