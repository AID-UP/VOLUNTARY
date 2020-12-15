import { Component, OnInit, Injectable, Input } from '@angular/core';
import { VoluntaryService } from '../services/voluntary.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { VoluntaryModel } from '../../../../../libs/data/src/lib/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [VoluntaryService],
})
@Injectable()
export class MainComponent implements OnInit {
  public volunteers: VoluntaryModel[];
  public volunteers$: Observable<VoluntaryModel[]>
  public voluntary: VoluntaryModel;
  public volunteersObservable: Observable<VoluntaryModel[]>;
  private subjectPesquisa: Subject<String> = new Subject<String>();

  constructor(
    private VoluntaryService: VoluntaryService,
    private route: ActivatedRoute
  ) {}

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
      () => console.log('Evento comcluido')
    );
  }

  public pesquisa(termoDaPesquisa: String): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }
}
