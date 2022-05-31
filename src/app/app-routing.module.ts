import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EditarEducacionComponent } from './educacion/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { EditarPersonaComponent } from './foto/editar-persona/editar-persona.component';

import { ProdGuardService  as guard} from './guards/prod-guard.service';
import { IndexComponent } from './index/index.component';
import { EditarProyectosComponent } from './proyectos/editar-proyectos/editar-proyectos.component';
import { EditarComponent } from './skill/editar/editar.component';
import { NuevoComponent } from './skill/nuevo/nuevo.component';



const routes: Routes = [
  {path: '', component : IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'nuevaSkill', component: NuevoComponent},
  {path: 'editarpersona/:id', component: EditarPersonaComponent },
  {path: 'editarexperiencia/:id', component: EditarExperienciaComponent },
  {path: 'editareducacion/:id', component: EditarEducacionComponent},
  {path: 'editarproyecto/:id', component: EditarProyectosComponent},
  {path: 'check/:id', component: EditarComponent},
  {path:'**',redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
