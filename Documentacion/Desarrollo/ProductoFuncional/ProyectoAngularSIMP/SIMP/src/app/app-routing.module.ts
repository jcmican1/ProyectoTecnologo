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
import { LsProveedorComponent } from './Componentes/crud/ls-proveedor/ls-proveedor.component';
import { EdProveedorComponent } from './Componentes/crud/ed-proveedor/ed-proveedor.component';
import { LsMotivoComponent } from './Componentes/crud/ls-motivo/ls-motivo.component';
import { EdMotivoComponent } from './Componentes/crud/ed-motivo/ed-motivo.component';
import { LsUbicacionComponent } from './Componentes/crud/ls-ubicacion/ls-ubicacion.component';
import { EdUbicacionComponent } from './Componentes/crud/ed-ubicacion/ed-ubicacion.component';
import { LsExistenciasComponent } from './Componentes/crud/ls-existencias/ls-existencias.component';
import { EdExistenciasComponent } from './Componentes/crud/ed-existencias/ed-existencias.component';
import { LsMovimientoComponent } from './Componentes/crud/ls-movimiento/ls-movimiento.component';
import { EdMovimientoComponent } from './Componentes/crud/ed-movimiento/ed-movimiento.component';

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

  { path:'proveedores', component: LsProveedorComponent},
  { path:'proveedores/editar/:id', component: EdProveedorComponent},
  { path:'proveedores/agregar', component:EdProveedorComponent},

  { path:'motivo', component: LsMotivoComponent},
  { path:'motivo/editar/:id', component:EdMotivoComponent },
  { path:'motivo/agregar', component: EdMotivoComponent },

  { path:'ubicacion-almacen', component: LsUbicacionComponent },
  { path:'ubicacion-almacen/editar/:id', component: EdUbicacionComponent },
  { path:'ubicacion-almacen/agregar', component:EdUbicacionComponent },

  { path:'existencias', component:LsExistenciasComponent },
  { path:'existencias/editar/:id', component:EdExistenciasComponent },
  { path:'existencias/agregar', component:EdExistenciasComponent },

  { path:'movimiento', component:LsMovimientoComponent },
  { path:'movimiento/editar/:id', component:EdMovimientoComponent },
  { path:'movimiento/agregar', component:EdMovimientoComponent },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
