import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { UsuarioModel } from '../../Modelos/Usuarios.model';
import { EstadoModelo } from 'src/app/Modelos/Estado.model';
import { RolModel } from 'src/app/Modelos/Rol.model';
import { Usuario_has_notificacionesModel } from 'src/app/Modelos/Usuarios_has_Notificaciones.model';
import { NotificacionesModel } from 'src/app/Modelos/Notificacione.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url='http://localhost:3000';

  constructor(private http: HttpClient) { }
  // Estado
  obtenerEstados() {
    return this.http.get<EstadoModelo[]>(this.url+'/estados');
  }

  obtenerEstado(idEstado: string) {
    return this.http.get<EstadoModelo[]>(`${this.url}/estados/${idEstado}`);
  }

  agregarEstado(EstadoModelo: EstadoModelo) {
    return this.http.post<string>(`${this.url}/estados/agregar`, EstadoModelo);
  }

  actualizarEstado(EstadoModelo: EstadoModelo) {
    return this.http.put<string>(`${this.url}/estados/actualizar/${EstadoModelo.idEstado}`, EstadoModelo)
  }

  borrarEstado(idEstado: string) {
    return this.http.delete<string>(`${this.url}/estados/borrar/${idEstado}`)
  }

  //Rol
  obtenerRols() {
    return this.http.get<RolModel[]>(this.url+'/roles');
  }

  obtenerRol(IdRol: string) {
    return this.http.get<RolModel[]>(`${this.url}/roles/${IdRol}`);
  }

  agregarRol(RolModel: RolModel) {
    return this.http.post<string>(`${this.url}/roles/agregar`, EstadoModelo);
  }

  actualizarRol(RolModel: RolModel) {
    return this.http.put<string>(`${this.url}/roles/actualizar/${RolModel.IdRol}`, RolModel)
  }

  borrarRol(IdRol: string) {
    return this.http.delete<string>(`${this.url}/roles/borrar/${IdRol}`)
  }

  //Usuarios
  
  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.url+'/usuarios');
  }

    obtenerUsuario(idUsuario: string) {
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios/${idUsuario}`);
  }

  obtenerUsuariologin(UsuarioModel: UsuarioModel) {
    return this.http.post<string>(`${this.url}/usuarios/login`, UsuarioModel);
  }

  agregarUsuario(UsuarioModel: UsuarioModel) {
    return this.http.post<string>(`${this.url}/usuarios/agregar`, UsuarioModel);
  }

  actualizarUsuario(UsuarioModel: UsuarioModel) {
    return this.http.put<string>(`${this.url}/usuarios/actualizar/${UsuarioModel.idUsuario}`, UsuarioModel)
  }

  borrarUsuario(idUsuario: string) {
    return this.http.delete<string>(`${this.url}/usuarios/borrar/${idUsuario}`)
  }

  //Usuarios_has_notificaciones

  obtenerUsuario_has_notificaciones() {
    return this.http.get<Usuario_has_notificacionesModel[]>(this.url+'/usuario-notificaciones');
  }

  obtenerUsuario_has_notificacion(Usuario_idUsuario: string) {
    return this.http.get<Usuario_has_notificacionesModel[]>(`${this.url}/usuario-notificaciones/${Usuario_idUsuario}`);
  }

  agregarUsuario_has_notificaciones(Usuario_has_notificacionesModel: Usuario_has_notificacionesModel) {
    return this.http.post<string>(`${this.url}/usuario-notificaciones/agregar`, Usuario_has_notificacionesModel);
  }

  actualizarUsuario_has_notificaciones(Usuario_has_notificacionesModel: Usuario_has_notificacionesModel) {
    return this.http.put<string>(`${this.url}/usuario-notificaciones/actualizar/${Usuario_has_notificacionesModel.Usuario_idUsuario}`, Usuario_has_notificacionesModel)
  }

  borrarUsuario_has_notificaciones(Usuario_idUsuario: string) {
    return this.http.delete<string>(`${this.url}/usuario-notificaciones/borrar/${Usuario_idUsuario}`)
  }

  // Notificaciones

  obtenerNotificaciones() {
    return this.http.get<NotificacionesModel[]>(this.url+'/notificaciones');
  }

  obtenerNotificacion(idNotificaciones: string) {
    return this.http.get<NotificacionesModel[]>(`${this.url}/notificaciones/${idNotificaciones}`);
  }

  agregarNotificaciones(NotificacionesModel: NotificacionesModel) {
    return this.http.post<string>(`${this.url}/notificaciones/agregar`, NotificacionesModel);
  }

  actualizarNotificaciones(NotificacionesModel: NotificacionesModel) {
    return this.http.put<string>(`${this.url}/notificaciones/actualizar/${NotificacionesModel.idNotificaciones}`, NotificacionesModel)
  }

  borrarNotificaciones(idNotificaciones: string) {
    return this.http.delete<string>(`${this.url}/notificaciones/borrar/${idNotificaciones}`)
  }
}
