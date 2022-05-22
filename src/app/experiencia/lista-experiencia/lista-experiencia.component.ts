import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevaExperienciaComponent } from '../nueva-experiencia/nueva-experiencia.component';




@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css']
})
export class ListaExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  experiencia: Experiencia = null;
  roles: string[];
  isAdmin = false;


  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.cargarExperiencia();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {
        this.toastr.success('Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarExperiencia();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  agregarExperiencia(): void {
    const dialogRef = this.dialog.open(NuevaExperienciaComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}












  
    