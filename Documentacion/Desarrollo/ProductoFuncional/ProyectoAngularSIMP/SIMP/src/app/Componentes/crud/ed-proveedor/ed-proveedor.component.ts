import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from 'src/app/Modelos/Proveedor.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ed-proveedor',
  templateUrl: './ed-proveedor.component.html',
  styleUrls: ['./ed-proveedor.component.css']
})
export class EdProveedorComponent implements OnInit{

  id=''
  proveedor=new ProveedorModel("","","","");

  constructor(
    private porveedorService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
    if(this.id){
      console.log("Editar");
      this.porveedorService.obtenerProveedor(this.id).subscribe(data=>{
        this.proveedor=data[0]
      })
    } else {
      console.log("Crear");
    }
  }

  onSubmit(){
    console.log('onSubmit');
    if (this.proveedor.NITProveedor){
      this.porveedorService.actualizarProveedor(this.proveedor).subscribe(data=>{
        alert(data)
        this.router.navigate(['/proveedores'])
      })
    } else {
      console.log('Creando');
      this.porveedorService.agregarProveedor(this.proveedor).subscribe(data=>{
        alert(data)
        this.router.navigate(['/proveedores'])
      })
    }
  }
}
