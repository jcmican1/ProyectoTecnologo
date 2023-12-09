import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';
import { CategoriaModel } from 'src/app/Modelos/Categoria.model';
import { UnidadMedidaModel } from 'src/app/Modelos/Unidad_Medida.model';
import { ProductoMateriaModel } from 'src/app/Modelos/Producto_Materia.model';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  //productos materia prima
  obtenerProductosMateriaPrima() {
    return this.http.get<ProductoMateriaPrimaModel[]>(this.url + '/materia-prima');
  }

  obtenerProductoMateriaPrima(idProductoMateriaPrima: string) {
    return this.http.get<ProductoMateriaPrimaModel[]>(`${this.url}/materia-prima/${idProductoMateriaPrima}`);
  }

  agregarProductoMateriaPrima(ProductoMateriaPrimaModel: ProductoMateriaPrimaModel) {
    return this.http.post<string>(`${this.url}/materia-prima/agregar`, ProductoMateriaPrimaModel);
  }

  actualizarProductoMateriaPrima(ProductoMateriaPrimaModel: ProductoMateriaPrimaModel) {
    return this.http.put<string>(`${this.url}/materia-prima/actualizar/${ProductoMateriaPrimaModel.IdProductoMateriaPrima}`, ProductoMateriaPrimaModel)
  }

  eliminarProductoMateriaPrima(idProductoMateriaPrima: string) {
    return this.http.delete<string>(`${this.url}/materia-prima/borrar/${idProductoMateriaPrima}`)
  }


  //categorias
  obtenerCategorias() {
    return this.http.get<CategoriaModel[]>(this.url + '/categoria');
  }

  obtenerCategoria(idCategoria: string) {
    return this.http.get<CategoriaModel[]>(`${this.url}/categoria/${idCategoria}`);
  }

  agregarCategoria(CategoriaModel: CategoriaModel) {
    return this.http.post<string>(`${this.url}/categoria/agregar`, CategoriaModel);
  }

  actualizarCategoria(CategoriaModel: CategoriaModel) {
    return this.http.put<string>(`${this.url}/categoria/actualizar/${CategoriaModel.IdCategoria}`, CategoriaModel)
  }

  eliminarCategoria(idCategoria: string) {
    return this.http.delete<string>(`${this.url}/categoria/borrar/${idCategoria}`)
  }

  //unidad medida
  obtenerUnidadMedidas() {
    return this.http.get<UnidadMedidaModel[]>(this.url + '/unidad-medida');
  }

  obtenerUnidadMedida(idUnidadMedida: string) {
    return this.http.get<UnidadMedidaModel[]>(`${this.url}/unidad-medida/${idUnidadMedida}`);
  }

  agregarUnidadMedida(UnidadMedidaModel: UnidadMedidaModel) {
    return this.http.post<string>(`${this.url}/unidad-medida/agregar`, UnidadMedidaModel);
  }

  actualizarUnidadMedida(UnidadMedidaModel: UnidadMedidaModel) {
    return this.http.put<string>(`${this.url}/unidad-medida/actualizar/${UnidadMedidaModel.IdUnidadMedida}`, UnidadMedidaModel)
  }

  eliminarUnidadMedida(idUnidadMedida: string) {
    return this.http.delete<string>(`${this.url}/unidad-medida/borrar/${idUnidadMedida}`)
  }

  //plantilla producto has producto materia prima
  obtenerProductoMaterias() {
    return this.http.get<ProductoMateriaModel[]>(this.url + '/producto-materia');
  }

  agregarProductoMateria(ProductoMateriaModel: ProductoMateriaModel) {
    return this.http.post<string>(`${this.url}/producto-materia/agregar`, ProductoMateriaModel);
  }

  eliminarProductoMateria(IdProductoMateria: string) {
    return this.http.delete<string>(`${this.url}/producto-materia/borrar/${IdProductoMateria}`)
  }

}
