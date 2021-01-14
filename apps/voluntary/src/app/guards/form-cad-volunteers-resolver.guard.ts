import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VoluntaryModel } from '../../../../../libs/data/src/lib/data';
import { VoluntaryService } from '../volunteers/services/voluntary.service';


@Injectable({
  providedIn: 'root',
})
export class FormCadVolunteersResolverGuard implements Resolve<VoluntaryModel> {

  constructor(private voluntaryService: VoluntaryService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<VoluntaryModel>  {
    const idVoluntary = route.params['id']
    console.log(idVoluntary);

    if (route.params && idVoluntary) {

     return this.voluntaryService.getVolunteersPorId(idVoluntary)
    }

    return of({
      id: null,
      nome: null,
      dataNascimento: null,
      sexo: null,
      endereco: {
        rua: null,
        numero: null,
        bairro: null,
        cidade: null,
        complemento: null,
        uf: null,
        CEP: null,
      },
      profissao: null,
      telefone: null,
      telefoneFx: null,
      email: null,
      imgUrlPrincipal: '',
      nomeIg: null,
      pastor: null,
      chekbox1Profissao: null,
      chekbox2Intercessor: null,
      chekbox3Cuidador: null,
      chekbox4: null,
      chekbox5Aconselhamento: null,
      especialidade: null,
      servicoOferecido: null,
      imagesDocUrl: {
        imgRG: '',
        imgCPF: '',
        imgComprovResidencia: '',
        imgCartaIgreja: '',
      },
      dataCad: null,
      status: null,
    });
  }
}
