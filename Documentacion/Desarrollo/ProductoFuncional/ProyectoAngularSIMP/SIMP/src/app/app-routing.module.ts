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
import { VistaCentralComponent } from './Componentes/TablasVista/vista-central/vista-central.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Restaurar', component: RestaurarClaveComponent },

  { path: 'VistaCentralComponent/Entradas', component: EntradasInventarioComponent },
  { path: 'VistaCentralComponent/Inventario', component: InventarioGeneralComponent },
  { path: 'VistaCentralComponent/Plantilla', component: PlantillaProductoComponent },
  { path: 'VistaCentralComponent/ProductoMateria', component: ProductoMateriaPrimaComponent },
  { path: 'VistaCentralComponent/Salidas', component: SalidasComponent },
  { path: 'VistaCentralComponent/Usuarios', component: UsuariosComponent },
  { path: 'VistaCentralComponent', component: UsuariosComponent },

  { path: '', redirectTo: '/simp', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
