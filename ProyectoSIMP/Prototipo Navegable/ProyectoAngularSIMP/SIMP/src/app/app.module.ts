import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { InventarioGeneralComponent } from './Componentes/TablasVista/inventario-general/inventario-general.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EntradasInventarioComponent } from './Componentes/TablasVista/entradas-inventario/entradas-inventario.component';
import { RestaurarClaveComponent } from './Componentes/restaurar-clave/restaurar-clave.component';
import { PlantillaProductoComponent } from './Componentes/TablasVista/plantilla-producto/plantilla-producto.component';
import { SalidasComponent } from './Componentes/TablasVista/salidas/salidas.component';
import { ProductoMateriaPrimaComponent } from './Componentes/TablasVista/producto-materia-prima/producto-materia-prima.component';
import { UsuariosComponent } from './Componentes/TablasVista/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InventarioGeneralComponent,
    LoginComponent,
    EntradasInventarioComponent,
    RestaurarClaveComponent,
    PlantillaProductoComponent,
    SalidasComponent,
    ProductoMateriaPrimaComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
