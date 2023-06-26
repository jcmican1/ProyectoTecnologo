import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntradasInventarioComponent } from './Componentes/TablasVista/entradas-inventario/entradas-inventario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RestaurarClaveComponent } from './Componentes/restaurar-clave/restaurar-clave.component';
import { InventarioGeneralComponent } from './Componentes/TablasVista/inventario-general/inventario-general.component';
import { PlantillaProductoComponent } from './Componentes/TablasVista/plantilla-producto/plantilla-producto.component';
import { ProductoMateriaPrimaComponent } from './Componentes/TablasVista/producto-materia-prima/producto-materia-prima.component';
import { SalidasComponent } from './Componentes/TablasVista/salidas/salidas.component';
import { UsuariosComponent } from './Componentes/TablasVista/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'Entradas', component: EntradasInventarioComponent },
  { path: 'Login', component: LoginComponent },

  { path: 'Restaurar', component: RestaurarClaveComponent },
  { path: 'Inventario', component: InventarioGeneralComponent },
  { path: 'Plantilla', component: PlantillaProductoComponent },
  { path: 'ProductoMateria', component: ProductoMateriaPrimaComponent },
  { path: 'Salidas', component: SalidasComponent },
  { path: 'Usuarios', component: UsuariosComponent },

  { path: '', redirectTo: '/simp', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
