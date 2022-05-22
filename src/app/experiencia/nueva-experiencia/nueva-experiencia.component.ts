import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaExperienciaComponent } from '../lista-experiencia/lista-experiencia.component';
import { Experiencia } from 'src/app/models/experiencia';


@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {


  empresa: '';
  descripcion: '';
  imagenUrl: '';
  entrada: number = null;
  salida: number = null;

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router,
    public dialogRef: MatDialogRef<ListaExperienciaComponent>,
  ) { }

  ngOnInit(): void {
    
  }

  CrearExperiencia(): void {
    const experiencia = new Experiencia(this.empresa, this.descripcion, this.imagenUrl,this.entrada,this.salida);
    this.experienciaService.save(experiencia).subscribe(
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
