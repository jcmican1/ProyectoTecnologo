import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario-general',
  templateUrl: './inventario-general.component.html',
  styleUrls: ['./inventario-general.component.css']
})
export class InventarioGeneralComponent {
articulos={
  codigo : 1,
  descripcion:"holass",
  precio:100

};
art={
  codigo : 1,
  descripcion:"holass",
  precio:100

};
baja(){

}

seleccionar(){

}
busqueda(){
  this.articulos={
    codigo: 2 ,
    descripcion:"holass",
    precio:100
  }
}

}
