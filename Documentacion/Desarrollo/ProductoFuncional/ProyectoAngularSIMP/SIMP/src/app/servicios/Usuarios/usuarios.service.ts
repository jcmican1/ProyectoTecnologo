import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../Modelos/Usuarios.model';
import { EstadoModelo } from '../../Modelos/Estado.model';
import { RolModel } from '../../Modelos/Rol.model';
import { MotivoModel } from '../../Modelos/Motivo.model';
import { ExistenciasModel } from '../../Modelos/Existencias.model';
import { MovimientoModel
 } from 'src/app/Modelos/Movimiento.model';
import { MovimientoEDModel } from '../../Modelos/Movimiento-ed.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  getTiposMovimiento() {
    throw new Error('Method not implemented.');
  }
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
  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.url + '/usuarios');
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
  //Motivo
  obtenerMotivos(){
    return this.http.get<MotivoModel[]>(this.url+'/motivo');
  }
  obtenerMotivo(id:string){
    return this.http.get<MotivoModel>(`${this.url}/motivo/${id}`);
  }
  agregarMotivo(motivo: MotivoModel){
    return this.http.post<string>(`${this.url}/motivo/agregar`, motivo);
  }
  actualizarMotivo(motivo: MotivoModel){
    return this.http.put<string>(`${this.url}/motivo/actualizar/${motivo.IdMotivo}`, motivo);
  }
  borrarMotivo(id:string){
    return this.http.delete<string>(`${this.url}/motivo/borrar/${id}`);
  }

  //Existencias
  obtenerExistencias(){
    return this.http.get<ExistenciasModel[]>(this.url+`/existencias`);
  }
  obtenerExistencia(id:string){
    return this.http.get<ExistenciasModel>(`${this.url}/existencias/${id}`);
  }
  agregarExistencia(existencias: ExistenciasModel){
    return this.http.post<string>(`${this.url}/existencias/agregar`, existencias);
  }
  actualizarExistencia(existencias: ExistenciasModel){
    return this.http.put<string>(`${this.url}/existencias/actualizar/${existencias.IdExistencias}`, existencias);
  }
  borrarExistencia(id:string){
    return this.http.delete<string>(`${this.url}/existencias/borrar/${id}`);
  }

  //Movimiento
  obtenerMovimientos(){
    return this.http.get<MovimientoEDModel[]>(this.url+`/movimiento`);
  }
  obtenerMovimiento(id:string){
    return this.http.get<MovimientoEDModel>(`${this.url}/movimiento/${id}`);
  }
  obtenerMovimientosls(){
    return this.http.get<MovimientoModel[]>(this.url+`/movimiento`);
  }
  obtenerMovimientols(id:string){
    return this.http.get<MovimientoModel>(`${this.url}/movimiento/${id}`);
  }
  agregarMovimiento(movimiento: MovimientoEDModel){
    return this.http.post<string>(`${this.url}/movimiento/agregar`, movimiento);
  }
  actualizarMovimiento(movimiento: MovimientoEDModel){
    return this.http.put<string>(`${this.url}/movimiento/actualizar/${movimiento.IdMovimiento}`, movimiento);
  }
  borrarMovimiento(id:string){
    return this.http.delete<string>(`${this.url}/movimiento/borrar/${id}`);
  }

  //Productos
  obtenerProductos(){
    return this.http.get<any[]>(this.url+'/Existencias');
  }
}
