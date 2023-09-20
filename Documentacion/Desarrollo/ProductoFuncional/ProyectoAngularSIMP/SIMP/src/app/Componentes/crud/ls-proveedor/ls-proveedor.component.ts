import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedorModel } from 'src/app/Modelos/Proveedor.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ls-proveedor',
  templateUrl: './ls-proveedor.component.html',
  styleUrls: ['./ls-proveedor.component.css']
})
export class LsProveedorComponent implements OnInit {

  proveedor: Observable<ProveedorModel[]> | undefined

  constructor(private proveedorService: UsuariosService){}

  ngOnInit() {
    this.proveedor=this.proveedorService.obtenerProveedores();
  }

  borrarProveedor(id:string){
    this.proveedorService.borrarProveedor(id).subscribe(data=>{
      console.log(data);
    })
    this.proveedor=this.proveedorService.obtenerProveedores();
  }
}
