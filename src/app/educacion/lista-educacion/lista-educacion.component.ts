import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { NuevaEducacionComponent } from '../nueva-educacion/nueva-educacion.component';

@Component({
  selector: 'app-lista-educacion',
  templateUrl: './lista-educacion.component.html',
  styleUrls: ['./lista-educacion.component.css']
})

export class ListaEducacionComponent implements OnInit {

  titulos: Educacion[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.cargarEducacion();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.titulos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      data => {
        this.toastr.success('Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEducacion();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  agregarEducacion(): void {
    const dialogRef = this.dialog.open(NuevaEducacionComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
