import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'https://cryptic-oasis-50694.herokuapp.com/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id}`);
  }

  public detailName(institucion: string): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detailname/${institucion}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyectoURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
}