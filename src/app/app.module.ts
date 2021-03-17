import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { EstablecimientoService } from './establecimientos/establecimiento.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: './clientes', pathMatch: 'full' },
  { path: 'directivas',component:DirectivaComponent  },
  { path: 'clientes', component:ClientesComponent },
  { path: 'establecimientos', component:EstablecimientosComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    EstablecimientosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ClienteService,EstablecimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
