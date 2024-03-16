import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { UsuarioModel } from '../../Modelos/Usuarios.model';
import { EstadoModelo } from '../../Modelos/Estado.model';
import { RolModel } from '../../Modelos/Rol.model';
import { Usuario_has_notificacionesModel } from '../../Modelos/Usuarios_has_Notificaciones.model';
import { NotificacionesModel } from '../../Modelos/Notificacione.model';
import { ProveedorModel } from '../../Modelos/Proveedor.model';
import { MotivoModel } from '../../Modelos/Motivo.model';
import { UbicacionModel } from '../../Modelos/UbicacionAlmacen.module';
import { ExistenciasModel } from '../../Modelos/Existencias.model';
import { MovimientoModel } from '../../Modelos/Movimiento.model';
import { MovimientoEDModel } from '../../Modelos/Movimiento-ed.model';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Estado
  obtenerEstados() {
    return this.http.get<EstadoModelo[]>(this.url + '/estados');
  }

  obtenerEstado(idEstado: string) {
    return this.http.get<EstadoModelo[]>(`${this.url}/estados/${idEstado}`);
  }

  agregarEstado(EstadoModelo: EstadoModelo) {
    return this.http.post<string>(`${this.url}/estados/agregar`, EstadoModelo);
  }

  actualizarEstado(EstadoModelo: EstadoModelo) {
    return this.http.put<string>(`${this.url}/estados/actualizar/${EstadoModelo.IdEstado}`, EstadoModelo)
  }

  borrarEstado(idEstado: string) {
    return this.http.delete<string>(`${this.url}/estados/borrar/${idEstado}`)
  }

  //Rol
  obtenerRols() {
    return this.http.get<RolModel[]>(this.url + '/roles');
  }

  obtenerRol(IdRol: string) {
    return this.http.get<RolModel[]>(`${this.url}/roles/${IdRol}`);
  }

  agregarRol(RolModel: RolModel) {
    return this.http.post<string>(`${this.url}/roles/agregar`, RolModel);
  }

  actualizarRol(RolModel: RolModel) {
    return this.http.put<string>(`${this.url}/roles/actualizar/${RolModel.IdRol}`, RolModel)
  }

  borrarRol(IdRol: string) {
    return this.http.delete<string>(`${this.url}/roles/borrar/${IdRol}`)
  }

  //Usuarios

  obtenerUsuario(idUsuario: string) {
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios/${idUsuario}`);
  }

  obtenerNavUser(Correo: string) {
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios/Correo/${Correo}`);
  }

  obtenerUsuariologin(UsuarioModel: UsuarioModel) {
    return this.http.post<string>(`${this.url}/login`, UsuarioModel);
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

  // Obtener lista de usuarios
  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.url + '/usuarios');
  }

  //Poder cambiar contraseña
  RecuperarClave(UsuarioModel: UsuarioModel) {
    return this.http.put<string>(`${this.url}/login/RecuperarClave`, UsuarioModel)
  }

  //Usuarios_has_notificaciones

  obtenerUsuario_has_notificaciones() {
    return this.http.get<Usuario_has_notificacionesModel[]>(this.url + '/usuario-notificaciones');
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
    return this.http.get<NotificacionesModel[]>(this.url + '/notificaciones');
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

  //Proveedor

  obtenerProveedores() {
    return this.http.get<ProveedorModel[]>(this.url + '/proveedor');
  }
  obtenerProveedor(id: string) {
    return this.http.get<ProveedorModel[]>(`${this.url}/proveedor/${id}`);
  }
  agregarProveedor(proveedor: ProveedorModel) {
    return this.http.post<string>(`${this.url}/proveedor/agregar`, proveedor);
  }
  actualizarProveedor(proveedor: ProveedorModel) {
    return this.http.put<string>(`${this.url}/proveedor/actualizar/${proveedor.NITProveedor}`, proveedor);

  }
  borrarProveedor(id: string) {
    return this.http.delete<string>(`${this.url}/proveedor/borrar/${id}`);
  }

  //UbicacionAlmacen

  obtenerUbicaciones() {
    return this.http.get<UbicacionModel[]>(this.url + `/ubicacion-almacen`);
  }
  obtenerUbicacion(id: string) {
    return this.http.get<UbicacionModel[]>(`${this.url}/ubicacion-almacen/${id}`);
  }
  agregarUbicacion(ubicacion: UbicacionModel) {
    return this.http.post<string>(`${this.url}/ubicacion-almacen/agregar`, ubicacion);
  }
  actualizarUbicacion(ubicacion: UbicacionModel) {
    return this.http.put<string>(`${this.url}/ubicacion-almacen/actualizar/${ubicacion.IdUbicacionAlmacen}`, ubicacion);
  }
  borrarUbicacion(id: string) {
    return this.http.delete<string>(`${this.url}/ubicacion-almacen/borrar/${id}`);
  }

  //Motivo
  obtenerMotivos() {
    return this.http.get<MotivoModel[]>(this.url + '/motivo');
  }
  obtenerMotivo(id: string) {
    return this.http.get<MotivoModel>(`${this.url}/motivo/${id}`);
  }
  agregarMotivo(motivo: MotivoModel) {
    return this.http.post<string>(`${this.url}/motivo/agregar`, motivo);
  }
  actualizarMotivo(motivo: MotivoModel) {
    return this.http.put<string>(`${this.url}/motivo/actualizar/${motivo.IdMotivo}`, motivo);
  }
  borrarMotivo(id: string) {
    return this.http.delete<string>(`${this.url}/motivo/borrar/${id}`);
  }

  //Existencias
  obtenerExistencias() {
    return this.http.get<ExistenciasModel[]>(this.url + `/existencias`);
  }
  obtenerExistencia(id: string) {
    return this.http.get<ExistenciasModel>(`${this.url}/existencias/${id}`);
  }
  agregarExistencia(existencias: ExistenciasModel) {
    return this.http.post<string>(`${this.url}/existencias/agregar`, existencias);
  }
  actualizarExistencia(existencias: ExistenciasModel) {
    return this.http.put<string>(`${this.url}/existencias/actualizar/${existencias.IdExistencias}`, existencias);
  }
  borrarExistencia(id: string) {
    return this.http.delete<string>(`${this.url}/existencias/borrar/${id}`);
  }

  //Movimiento
  obtenerMovimientos() {
    return this.http.get<MovimientoEDModel[]>(this.url + `/movimiento`);
  }
  obtenerMovimiento(id: string) {
    return this.http.get<MovimientoEDModel>(`${this.url}/movimiento/${id}`);
  }
  obtenerMovimientosls() {
    return this.http.get<MovimientoModel[]>(this.url + `/movimiento`);
  }
  obtenerMovimientols(id: string) {
    return this.http.get<MovimientoModel>(`${this.url}/movimiento/${id}`);
  }
  agregarMovimiento(movimiento: MovimientoEDModel) {
    return this.http.post<string>(`${this.url}/movimiento/agregar`, movimiento);
  }
  actualizarMovimiento(movimiento: MovimientoEDModel) {
    return this.http.put<string>(`${this.url}/movimiento/actualizar/${movimiento.IdMovimiento}`, movimiento);
  }
  borrarMovimiento(id: string) {
    return this.http.delete<string>(`${this.url}/movimiento/borrar/${id}`);
  }

  obtenerProductosMateriaPrima() {
    return this.http.get<ProductoMateriaPrimaModel[]>(this.url + '/materia-prima');
  }

  obtenerProductoMateriaPrima(idProductoMateriaPrima: string) {
    return this.http.get<ProductoMateriaPrimaModel[]>(`${this.url}/materia-prima/${idProductoMateriaPrima}`);
  }

}
