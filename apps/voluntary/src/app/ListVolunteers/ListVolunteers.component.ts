import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { VoluntaryModel } from '../../../../../libs/data/src/lib/data';
import { VoluntaryService } from '../services/voluntary.service';

@Component({
  selector: 'app-ListVolunteers',
  templateUrl: './ListVolunteers.component.html',
  styleUrls: ['./ListVolunteers.component.css'],
  providers: [VoluntaryService]
})
export class ListVolunteersComponent implements OnInit {

  public volunteers: VoluntaryModel[];
  public volunteers$: Observable<VoluntaryModel[]>;
  public voluntary: VoluntaryModel;
  public volunteersObservable: Observable<VoluntaryModel[]>;
  private subjectPesquisa: Subject<String> = new Subject<String>();
  constructor( private VoluntaryService: VoluntaryService,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      // this.VoluntaryService.getVolunteers().subscribe(
      //   (resposta: VoluntaryModel[]) => (this.volunteers = resposta),
      //   (err) => console.log('ERRO', err)
      // )
      this.volunteers$ = this.VoluntaryService.getVolunteers();

      this.volunteersObservable = this.subjectPesquisa
        .pipe(debounceTime(1000))
        .pipe(distinctUntilChanged())
        .pipe(
          switchMap((termo: string) => {
            return this.VoluntaryService.pesquisaVoluntary(termo);
          })
        );

      this.volunteersObservable.subscribe(
        (volunteers: VoluntaryModel[]) => (this.volunteers = volunteers),
        (error: any) => console.log(error),
        () => console.log('Evento concluido')
      );
    }

    public pesquisa(termoDaPesquisa: String): void {
      this.subjectPesquisa.next(termoDaPesquisa);
    }

}
