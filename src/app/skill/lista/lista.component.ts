import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { NuevoComponent } from '../nuevo/nuevo.component';
import {MatMenuTrigger} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  
    skills: Skill[] = [];
    roles: string[];
    skill: Skill = null;
    isAdmin = false;
  
    constructor(
      private skillService: SkillService,
      private toastr: ToastrService,
      private tokenService: TokenService,
      public dialog: MatDialog,
      ) { }
  
    ngOnInit() {
      this.cargarSkills();
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach( rol => {
        if(rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      })
    }
  
    cargarSkills(): void {
      this.skillService.lista().subscribe(
        data => {
          this.skills = data;
        },
        err => {
          console.log(err);
        }
      );
    }
  
    borrar(id: number) {
      this.skillService.delete(id).subscribe(
        data => {
          this.toastr.success('Producto Eliminado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarSkills();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }

    agregarSkill(): void {
      const dialogRef = this.dialog.open(NuevoComponent, {restoreFocus: false});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    
  
  }