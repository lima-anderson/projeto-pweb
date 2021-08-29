import { Injectable } from '@angular/core';
import {Professor} from "../model/professor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  URL_PROFESSORES = 'http://localhost:3000/professores';

  constructor(private  httpClient: HttpClient) {

  }


  listar(): Observable<Professor[]>{
   return this.httpClient.get<Professor[]>(this.URL_PROFESSORES);
  }

  inserir(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>(this.URL_PROFESSORES, professor)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Professor>(`${this.URL_PROFESSORES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Professor> {
    return this.httpClient.get<Professor>(`${this.URL_PROFESSORES}/${id}`)
  }

  atualizar(professor: Professor): Observable<Professor> {
    return this.httpClient.put<Professor>(`${this.URL_PROFESSORES}/${professor.id}`, professor);

  }
}
