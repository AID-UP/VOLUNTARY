import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoluntaryService } from 'src/app/services/voluntary.service';
import { ActivatedRoute } from '@angular/router';
import { VoluntaryModel } from '../../../../../../libs/data/src/lib/data';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['../../app.component.css', './form-cad.component.css'],
  providers: [VoluntaryService],
})
export class FormCadComponent implements OnInit {
  public formulario: FormGroup; // formulario em questão
  // tslint:disable-next-line: max-line-length
  public idVoluntary: number = this.route.snapshot.params.id; // se o formulario for acessado pelo perfil do voluntário essa variável recebe o id do voluntario
  public VoluntaryData: VoluntaryModel; // se o formulario for acessado pelo perfil do voluntário essa variável recebe os dados do voluntario em questão, o do no id

  fieldsetProfissionaisFIF: boolean = false;
  fieldsetCuidadoresFIF: boolean = false;

  constructor(
    private voluntaryService: VoluntaryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('id do voluntário', this.idVoluntary);
    if (this.idVoluntary) {
      this.GetVoluntary(this.idVoluntary);
    }

    this.formulario = this.formBuilder.group({
      id: null,
      nome: [null, [Validators.required, Validators.minLength(3)]],
      dataNascimento: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      endereco: this.formBuilder.group({
        rua: [null],
        numero: [null],
        bairro: [null],
        cidade: [null],
        complemento: [null],
        uf: [null],
        CEP: [null],
      }),
      profissao: [null, [Validators.required]],
      telefone: [null],
      telefoneFx: [null],
      email: [null, [Validators.required, Validators.email]],
      nomeIg: [null, [Validators.required]],
      pastor: [null, [Validators.required]],
      chekbox1Profissao: [false],
      chekbox2Intercessor: [false],
      chekbox3Cuidador: [false],
      chekbox4: [false],
      chekbox5Aconselhamento: [false],
      especialidade: [null],
      servicoOferecido: [null],
      imgUrlPrincipal: [null],
      imagesDocUrl: this.formBuilder.group({
        imgRG: [null],
        imgCPF: [null],
        imgComprovResidencia: [null],
        imgCartaIgreja: [null],
      }),
      dataCad: [null],
      status: ['ACTIVE'],
    });
  }

  setRadioProficional() {
    this.fieldsetProfissionaisFIF =
      this.formulario.value.chekbox1Profissao === true ? false : true;
  }
  setRadioCuidador() {
    this.fieldsetCuidadoresFIF =
      this.formulario.value.chekbox3Cuidador === true ? false : true;
  }

   async onSubmit() {
    if (this.formulario.valid) {
      if (!this.idVoluntary) {
        this.salveVoluntaryCTRL();
      } else {
        this.UpdateVoluntaryCTRL(this.formulario.value);

      }
    } else {
      console.log('formulario invalido');
      Object.keys(this.formulario.controls).forEach((campo) => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  async GetVoluntary(idVoluntary: number) {
    // pega esse id e busca os dados dele no banco
    try {
      this.voluntaryService
        .getVolunteersPorId(idVoluntary).subscribe(
          (resposta: any) => {
            (this.VoluntaryData = resposta), //pega os dados do banco e guarda dentro da VoluntaryData para serem populados no formulário
              this.populaDadosForm(this.VoluntaryData);
          },
          (error: any) => console.log(error)
        )

    } catch{
      (error: any) => console.log(error)
    }
  }
  //atualiza os dados dos
  public UpdateVoluntaryCTRL(VoluntaryDataFormUpdated: VoluntaryModel) {
    this.voluntaryService
      .updateVoluntaryID(VoluntaryDataFormUpdated)
      .subscribe((voluntary) =>{

        alert(`Os dados do ${VoluntaryDataFormUpdated.nome} foram salvos com sucesso`)

      }
      );
  }

  // se não, cadastre como um novo voluntário
  public salveVoluntaryCTRL() {
    if (this.formulario !== undefined) {
      this.voluntaryService.saveVoluntary(this.formulario.value).subscribe(
        (voluntary) => {
          console.log(voluntary);
          // reseta formulário
          this.formulario.reset();
        },
        (err: any) =>
          alert(
            `O voluntário não pode ser cadastrado, ocorreu o seguinte erro ${err}`
          )
      );
    }
  }

  // FUNÇÕES DE VALIDAÇÃO DE FORMULÁRIO

  public aplicaCss(campo: string | (string | number)[]) {
    return {
      'is-invalid':
        this.formulario.get(campo).invalid &&
        (this.formulario.get(campo).touched ||
          this.formulario.get(campo).dirty),
      'is-valid': this.formulario.get(campo).valid,
    };
  }

  public async populaDadosForm(dataVoluntary: VoluntaryModel) {

    try {
      await this.formulario.patchValue({
        id: dataVoluntary.id,
        nome: dataVoluntary.nome,
        dataNascimento: dataVoluntary.dataNascimento,
        sexo: dataVoluntary.sexo,
        endereco:{
        rua: dataVoluntary.endereco.rua,
        numero: dataVoluntary.endereco.numero,
        bairro: dataVoluntary.endereco.bairro,
        cidade: dataVoluntary.endereco.cidade,
        complemento: dataVoluntary.endereco.complemento,
        uf: dataVoluntary.endereco.uf,
        CEP: dataVoluntary.endereco.CEP,
        },
        profissao: dataVoluntary.profissao,
        telefone: dataVoluntary.telefone,
        telefoneFx: dataVoluntary.telefoneFx,
        email: dataVoluntary.email,
        nomeIg: dataVoluntary.nomeIg,
        pastor: dataVoluntary.pastor,
        chekbox1Profissao: dataVoluntary.chekbox1Profissao,
        chekbox2Intercessor: dataVoluntary.chekbox2Intercessor,
        chekbox3Cuidador: dataVoluntary.chekbox3Cuidador,
        chekbox4: dataVoluntary.chekbox4,
        chekbox5Aconselhamento: dataVoluntary.chekbox5Aconselhamento,
        especialidade: dataVoluntary.especialidade,
        servicoOferecido: dataVoluntary.servicoOferecido,
        imagesDocUrl:{
        imgRG: dataVoluntary.imagesDocUrl.imgRG,
        imgCPF: dataVoluntary.imagesDocUrl.imgCPF,
        imgComprovResidencia: dataVoluntary.imagesDocUrl.imgComprovResidencia,
        imgCartaIgreja: dataVoluntary.imagesDocUrl.imgCartaIgreja,
        },
        dataCad: dataVoluntary.dataCad,
        status: dataVoluntary.status,
        imgUrlPrincipal: dataVoluntary.imgUrlPrincipal,
      });
    } catch (error) { console.log("DEU ERRO PARA POPULAR OS DADOS NO FORMULARIO:  ",error);
    }
  }
}

/*documentos de consulta
      https: //www.ramosdainformatica.com.br/programacao/angularjs/como-usar-api-rest-com-httpclient-no-angular-8/
      https: //medium.com/@fernandoevangelista_28291/consumindo-api-rest-com-httpclient-no-angular-8-62c5d733ffb6
*/
