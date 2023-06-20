import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasInventarioComponent } from './Componentes/TablasVista/entradas-inventario/entradas-inventario.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  { path: 'Entradas', component: EntradasInventarioComponent },
  { path: 'Login', component: LoginComponent },

  // { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
