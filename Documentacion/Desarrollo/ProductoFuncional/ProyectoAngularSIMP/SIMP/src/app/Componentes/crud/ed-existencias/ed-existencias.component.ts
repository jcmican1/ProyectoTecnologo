import { Component, OnInit } from '@angular/core';
import { ExistenciasModel } from 'src/app/Modelos/Existencias.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ed-existencias',
  templateUrl: './ed-existencias.component.html',
  styleUrls: ['./ed-existencias.component.css']
})
export class EdExistenciasComponent implements OnInit {

  id=''

  existencias= new ExistenciasModel("","","","","","","","");

  constructor(
    private existenciasService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
      this.id= this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.existenciasService.obtenerExistencia(this.id).subscribe(data=>{
          this.existencias = data as ExistenciasModel;
        })
      } else {
        console.log("Crear");
        
      }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.existencias.IdExistencias){
      this.existenciasService.actualizarExistencia(this.existencias).subscribe(data=>{
        alert(data)
        this.router.navigate(['/existencias'])
      })
    } else {
      console.log('Creando');
      this.existenciasService.agregarExistencia(this.existencias).subscribe(data=>{
        alert(data)
        this.router.navigate(['/existencias'])
      })
    } 
  }
}
