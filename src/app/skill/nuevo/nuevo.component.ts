import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';
  porcentaje: number = null;
  imagenUrl:'';

  constructor(
    private skillService: SkillService,
    private toastr: ToastrService,
    private router: Router,
    public dialogRef: MatDialogRef<ListaComponent>,
  ) { }

  ngOnInit(): void {
    
  }

  CrearSkill(): void {
    const skill = new Skill(this.nombre, this.porcentaje, this.imagenUrl);
    this.skillService.save(skill).subscribe(
      data => {
        this.toastr.success('Skill Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }
  


}
