import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'https://cryptic-oasis-50694.herokuapp.com/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educacionURL + `detail/${id}`);
  }

  public detailName(institucion: string): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educacionURL + `detailname/${institucion}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.educacionURL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + `delete/${id}`);
  }
}