import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})




export class ListaProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    this.cargarProyecto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.proyectoService.delete(id).subscribe(
      data => {
        this.toastr.success('Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProyecto();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
