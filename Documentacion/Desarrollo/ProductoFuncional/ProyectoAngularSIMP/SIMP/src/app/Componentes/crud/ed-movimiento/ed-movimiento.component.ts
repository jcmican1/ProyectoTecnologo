import { Component, OnInit } from '@angular/core';
import { MovimientoModel } from 'src/app/Modelos/Movimiento.model';
import { UsuariosService } from 'src/app/servicios/Usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ed-movimiento',
  templateUrl: './ed-movimiento.component.html',
  styleUrls: ['./ed-movimiento.component.css']
})
export class EdMovimientoComponent implements OnInit {

  id=''
  movimiento= new MovimientoModel("","","","","","","","","");

  constructor(
    private movimientoService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
      this.id = this.route.snapshot.params['id']
      if(this.id){
        console.log("Editar");
        this.movimientoService.obtenerMovimiento(this.id).subscribe(data=>{
          this.movimiento = data [0]
        })
      } else {
        console.log("Crear");
      }
  }

  onSubmit(){
    console.log('onSubmit');
    
    if(this.movimiento.IdMovimiento){
      this.movimientoService.actualizarMovimiento(this.movimiento).subscribe(data=>{
        alert(data)
        this.router.navigate(['/movimiento'])
      })
    } else {
      console.log('Creando');
      this.movimientoService.agregarMovimiento(this.movimiento).subscribe(data=>{
        alert(data)
        this.router.navigate(['/movimiento'])
      })
    }
  }
}
