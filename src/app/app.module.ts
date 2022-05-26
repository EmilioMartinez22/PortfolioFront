import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { ListaComponent } from './skill/lista/lista.component';
import { EditarComponent } from './skill/editar/editar.component';
import { NuevoComponent } from './skill/nuevo/nuevo.component';
import { HeaderComponent } from './header/header.component';
import { AcercaComponent } from './acerca/acerca.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia/nueva-experiencia.component';
import { ListaExperienciaComponent } from './experiencia/lista-experiencia/lista-experiencia.component';
import { EditarEducacionComponent } from './educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './educacion/nueva-educacion/nueva-educacion.component';
import { ListaEducacionComponent } from './educacion/lista-educacion/lista-educacion.component';
import { EditarProyectosComponent } from './proyectos/editar-proyectos/editar-proyectos.component';
import { NuevoProyectosComponent } from './proyectos/nuevo-proyectos/nuevo-proyectos.component';
import { ListaProyectosComponent } from './proyectos/lista-proyectos/lista-proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FotoComponent } from './foto/foto.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditarPersonaComponent } from './foto/editar-persona/editar-persona.component';
import { EditarFooterComponent } from './footer/editar-footer/editar-footer.component';
import { EditarDescripcionComponent } from './acerca/editar-descripcion/editar-descripcion.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ListaComponent,
    EditarComponent,
    NuevoComponent,
    HeaderComponent,
    AcercaComponent,
    EditarExperienciaComponent,
    NuevaExperienciaComponent,
    ListaExperienciaComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    ListaEducacionComponent,
    EditarProyectosComponent,
    NuevoProyectosComponent,
    ListaProyectosComponent,
    FooterComponent,
    BannerComponent,
    FotoComponent,
    EditarPersonaComponent,
    EditarFooterComponent,
    EditarDescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  entryComponents: [NuevoComponent]
})
export class AppModule { }