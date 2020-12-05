import { VoluntaryModel } from '../shared/voluntary.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class VoluntaryService {
 

  constructor(private http: HttpClient) {}

  // pega todos os voluntários
  public getVolunteers(): Promise<VoluntaryModel[]> {
    return this.http
      .get('/api/volunteers')
      .toPromise()
      .then((resposta: VoluntaryModel[]) => resposta);
  }
  // Busca os dados do voluntário pelo seu ID
  public getVolunteersPorId(id: number): Promise<VoluntaryModel> {
    return this.http
      .get(`/api/volunteers?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0];
      })
      .catch((err) => console.log('ERRO', err));
  }

  // CAMPO DE BUSCA na tela principal (precisa de ajuste)
  public pesquisaVoluntary(termo: string): Observable<VoluntaryModel[]> {
    return this.http
      .get(`/api/volunteers?nome_like=${termo}`)
      .pipe(retry(10))
      .pipe(map((resposta: any) => resposta));
  }

  // Headers para fazer o post de o put
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

    // CHAMADAS CONSTRUIDAS PARA RESTORNOS QUE AINDA NÃO EXISTEM NA API

  // CADASTRO VOLUNTÁRIOS
  public saveVoluntary(voluntary: VoluntaryModel): Observable<VoluntaryModel> {
    return this.http
      .post<VoluntaryModel>(
        `/api/volunteers`,
        JSON.stringify(voluntary),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Atualiza um voluntário
  public updateVoluntaryID(
    voluntary: VoluntaryModel
  ): Observable<VoluntaryModel> {
    return this.http
      .put<VoluntaryModel>(
        `/api/volunteers/${voluntary.id}`,
        JSON.stringify(voluntary),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // deleta um voluntário
  public deleteVoluntary(voluntary: VoluntaryModel) {
    return this.http
      .delete<VoluntaryModel>(
        `/api/volunteers/${voluntary.id}`,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Manipulação de erros
  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
