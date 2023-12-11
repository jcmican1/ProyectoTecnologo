import { Component, OnInit } from '@angular/core';
import { MotivoModel } from 'src/app/Modelos/Motivo.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ed-motivo',
  templateUrl: './ed-motivo.component.html',
  styleUrls: ['./ed-motivo.component.css']
})
export class EdMotivoComponent implements OnInit {

  id=''
  motivo = new MotivoModel("","");

  constructor(
    private motivoService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if(this.id){
      console.log("Editar");
      this.motivoService.obtenerMotivo(this.id).subscribe(data=>{
        this.motivo = data as MotivoModel;
      })
    } else {
      console.log("Crear");
    }
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.motivo.IdMotivo){
      this.motivoService.actualizarMotivo(this.motivo).subscribe(data=>{
        alert(data)
        this.router.navigate(['/motivo'])
      })
    } else {
      console.log('Creando');
      this.motivoService.agregarMotivo(this.motivo).subscribe(data=>{
        alert(data)
        this.router.navigate(['/motivo'])
      })
    }
  }
}
