import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntradasInventarioComponent } from './Componentes/TablasVista/entradas-inventario/entradas-inventario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { InventarioGeneralComponent } from './Componentes/TablasVista/inventario-general/inventario-general.component';
import { PlantillaProductoComponent } from './Componentes/TablasVista/plantilla-producto/plantilla-producto.component';
import { ProductoMateriaPrimaComponent } from './Componentes/TablasVista/producto-materia-prima/producto-materia-prima.component';
import { SalidasComponent } from './Componentes/TablasVista/salidas/salidas.component';
import { AppComponent } from './app.component';
import { FormularioUsuariosComponent } from './Componentes/TablasVista/usuarios/UsuariosC/formulario-usuarios/formulario-usuarios.component';
import { UsuariosComponent } from './Componentes/TablasVista/usuarios/UsuariosC/TablaUsuarios/usuarios.component';
import { RolFormularioComponent } from './Componentes/TablasVista/usuarios/RolC/rol-formulario/rol-formulario.component';
import { EstadoFormularioComponent } from './Componentes/TablasVista/usuarios/Estadoc/estado-formulario/estado-formulario.component';
import { RolComponent } from './Componentes/TablasVista/usuarios/RolC/TablaRol/rol.component';
import { EstadoComponent } from './Componentes/TablasVista/usuarios/Estadoc/TablaEstado/estado.component';



const routes: Routes = [
  { path: 'Login', component: LoginComponent },

  { path: 'Entradas', component: EntradasInventarioComponent },
  { path: 'Inventario', component: InventarioGeneralComponent },
  { path: 'Plantilla', component: PlantillaProductoComponent },
  { path: 'ProductoMateria', component: ProductoMateriaPrimaComponent },
  { path: 'Salidas', component: SalidasComponent },
  
  { path: 'Usuarios', component: UsuariosComponent },
  { path: 'FormularioUsuario/editar/:id', component: FormularioUsuariosComponent }, 
  { path: 'FormularioUsuario/agregar', component: FormularioUsuariosComponent }, 

  { path: 'Rol', component: RolComponent }, 
  { path: 'FormularioRol/editar/:id', component: RolFormularioComponent }, 
  { path: 'FormularioRol/agregar', component: RolFormularioComponent }, 

  { path: 'Estado', component: EstadoComponent }, 
  { path: 'FormularioEstado/editar/:id', component: EstadoFormularioComponent }, 
  { path: 'FormularioEstado/agregar', component: EstadoFormularioComponent }, 

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
