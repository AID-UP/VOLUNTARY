import { Component, OnInit } from '@angular/core';
import { VoluntaryService } from '../services/voluntary.service';
import { ActivatedRoute } from '@angular/router';
import { VoluntaryModel } from '../../../../../libs/data/src/lib/data';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css'],
  providers: [VoluntaryService],
})
export class MypageComponent implements OnInit {
 
  public voluntary: VoluntaryModel;
  public idVoluntary: number;
  img: any;

  constructor(
    private VoluntaryService: VoluntaryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getVoluntaryMyPage();
  }

  public async getVoluntaryMyPage() {
    this.idVoluntary = await this.route.snapshot.params['id'];
    try {
      await this.VoluntaryService.getVolunteersPorId(
        this.idVoluntary
      ).subscribe(
        (resposta) => (this.voluntary = resposta),
        (error) => error
      );
    } catch (error) {
      (error) => error;
    }
  }
}
