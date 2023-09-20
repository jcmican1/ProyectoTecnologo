import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MotivoModel } from 'src/app/Modelos/Motivo.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-ls-motivo',
  templateUrl: './ls-motivo.component.html',
  styleUrls: ['./ls-motivo.component.css']
})
export class LsMotivoComponent implements OnInit {

  motivo: Observable<MotivoModel[]> | undefined

  constructor(private motivoService: UsuariosService){}

  ngOnInit() {
      this.motivo = this.motivoService.obtenerMotivos();
  }

  borrarMotivo(id: string){
    this.motivoService.borrarMotivo(id).subscribe(data=>{
      console.log(data);
    })
    
    this.motivo = this.motivoService.obtenerMotivos()
  }
 
}
