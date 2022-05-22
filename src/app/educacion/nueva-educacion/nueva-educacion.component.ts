import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaEducacionComponent } from '../lista-educacion/lista-educacion.component';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  nombre: '';
  descripcion: '';
  imagenUrl: '';
  entrada: number = null;
  salida: number = null;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router,
    public dialogRef: MatDialogRef<ListaEducacionComponent>,
  ) { }

  ngOnInit(): void {

  }


  CrearEducacion(): void {
    const educacion = new Educacion(this.nombre, this.descripcion, this.imagenUrl,this.entrada,this.salida);
    this.educacionService.save(educacion).subscribe(
      data => {
        this.toastr.success('Experiencia Creada', 'OK', {
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








