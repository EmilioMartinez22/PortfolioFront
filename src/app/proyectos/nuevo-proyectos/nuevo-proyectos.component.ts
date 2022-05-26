import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaProyectosComponent } from '../lista-proyectos/lista-proyectos.component';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-nuevo-proyectos',
  templateUrl: './nuevo-proyectos.component.html',
  styleUrls: ['./nuevo-proyectos.component.css']
})
export class NuevoProyectosComponent implements OnInit {

  institucion: '';
  descripcion: '';
  imagenUrl: '';
  anio: number = null;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router,
    public dialogRef: MatDialogRef<ListaProyectosComponent>
  ) { }

  ngOnInit(): void {
  }


  CrearProyecto(): void {
    const proyecto = new Proyecto(this.institucion, this.descripcion, this.imagenUrl,this.anio);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        this.toastr.success('Proyecto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
