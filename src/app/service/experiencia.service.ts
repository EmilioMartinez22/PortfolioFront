import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'https://cryptic-oasis-50694.herokuapp.com/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detail/${id}`);
  }

  public detailName(empresa: string): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detailname/${empresa}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }
}