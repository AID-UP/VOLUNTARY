import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { VoluntaryService } from 'src/app/volunteers/services/voluntary.service';
import { VoluntaryModel } from '../../../../../../../libs/data/src/lib/data';

import { alertAnimation } from '../../../services/alert.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['./../../../app.component.css', './form-cad.component.css'],
  providers: [VoluntaryService],
  animations: [alertAnimation],
})
export class FormCadComponent implements OnInit {
  alertState: string = 'hide';

  public Voluntary: VoluntaryModel;
  public formulario: FormGroup; // formulario em questão

  fieldsetProfissionaisFIF: boolean = false;
  fieldsetCuidadoresFIF: boolean = false;

  alertSuccess: boolean = true;
  alertDanger: boolean;
  alertMessage: string;
  alertActivated: any;
  alertStyle: any;
  style: any;

  constructor(
    private voluntaryService: VoluntaryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {}

  public toggle(view?: String) {
    this.alertState = this.alertService.toggle(view);
  }

  ngOnInit(): void {
    this.Voluntary = this.route.snapshot.data['voluntary']; // recebe os dados capturados do guard e guarda na variável voluntary
    // console.log('o que vem do guard', this.Voluntary);

    this.formulario = this.formBuilder.group({
      _id: this.Voluntary._id,
      nome: [
        this.Voluntary.nome,
        [Validators.required, Validators.minLength(3)],
      ],
      dataNascimento: [this.Voluntary.dataNascimento, [Validators.required]],
      sexo: [this.Voluntary.sexo, [Validators.required]],
      endereco: this.formBuilder.group({
        rua: [this.Voluntary.endereco.rua],
        numero: [this.Voluntary.endereco.numero],
        bairro: [this.Voluntary.endereco.bairro],
        cidade: [this.Voluntary.endereco.cidade],
        complemento: [this.Voluntary.endereco.complemento],
        uf: [this.Voluntary.endereco.uf],
        CEP: [this.Voluntary.endereco.CEP],
      }),
      profissao: [this.Voluntary.profissao, [Validators.required]],
      telefone: [this.Voluntary.telefone],
      telefoneFx: [this.Voluntary.telefoneFx],
      email: [this.Voluntary.email, [Validators.required, Validators.email]],
      nomeIg: [this.Voluntary.nomeIg, [Validators.required]],
      pastor: [this.Voluntary.pastor, [Validators.required]],
      chekbox1Profissao: [this.Voluntary.chekbox1Profissao],
      chekbox2Intercessor: [this.Voluntary.chekbox2Intercessor],
      chekbox3Cuidador: [this.Voluntary.chekbox3Cuidador],
      chekbox4: [this.Voluntary.chekbox4],
      chekbox5Aconselhamento: [this.Voluntary.chekbox5Aconselhamento],
      especialidade: [this.Voluntary.especialidade],
      servicoOferecido: [this.Voluntary.servicoOferecido],
      imgUrlPrincipal: [null], //this.Voluntary.imgUrlPrincipal
      imagesDocUrl: this.formBuilder.group({
        imgRG: [null], //this.Voluntary.imagesDocUrl.imgRG
        imgCPF: [null], //this.Voluntary.imagesDocUrl.imgCPF
        imgComprovResidencia: [null], //this.Voluntary.imagesDocUrl.imgComprovResidencia
        imgCartaIgreja: [null], //this.Voluntary.imagesDocUrl.imgCartaIgreja
      }),
      dataCad: [this.Voluntary.dataCad],
      status: [this.Voluntary.status],
    });
  }

  setRadioProficional() { // nos casos em que está sendo feito a atualização de um formulário, é verificado se o radio está ativo e ativa o o radio do fomulário que será atualizado
    this.fieldsetProfissionaisFIF =
      this.formulario.value.chekbox1Profissao === true ? false : true;
  }
  setRadioCuidador() {  // nos casos em que está sendo feito a atualização de um formulário, é verificado se o radio está ativo e ativa o o radio do fomulário que será atualizado
    this.fieldsetProfissionaisFIF =
    this.fieldsetCuidadoresFIF =
      this.formulario.value.chekbox3Cuidador === true ? false : true;
  }

  async onSubmit() {  // função executada no clicar do botão principal

    if (this.formulario.valid) {  //só entra neste if se passar por todas as validações

      if (!this.Voluntary._id) {  // só entra neste if se não tiver id, pq se tiver id se trata de uma atualização de cadastro
        this.salveVoluntaryCTRL();  // função que cria um novo voluntário nas bases de dados
      } else {
        this.UpdateVoluntaryCTRL(this.formulario.value); // função que atualiza os dados de uma base existente
      }
    } else {  // se não passar pelas validações
      this.activAlert('danger', 'Atenção, preencha os campos obrigatórios');
      console.log('formulario invalido');
      Object.keys(this.formulario.controls).forEach((campo) => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  //atualiza os dados dos
  public UpdateVoluntaryCTRL(VoluntaryDataFormUpdated: VoluntaryModel) {
    this.voluntaryService.updateVoluntaryID(VoluntaryDataFormUpdated).subscribe(
      (voluntary) => {
        this.activAlert(
          'success',
          `Os dados do ${this.formulario.value.nome} foram alterados com sucesso`
          );

        console.log(`Os dados do ${this.Voluntary.nome} foram alterados com sucesso`);
      },
      (error) =>{
        this.activAlert('danger', `Os dados do ${this.formulario.value.nome} não puderam ser alterados`)

        console.error(
          `Os dados do ${this.Voluntary.nome} não puderam ser alterados: => Relatório: ${error}`
        )}
    );
  }
  public salveVoluntaryCTRL() {
    if (this.formulario !== undefined) {
      this.voluntaryService.saveVoluntary(this.formulario.value).subscribe(
        (voluntary) => {
          this.activAlert(
            'success',
            `os dados de ${this.formulario.value.nome} foram cadastrados com sucesso!`
          ),
            console.log(
              `Os dados do ${this.Voluntary.nome} foram salvos com sucesso`
            ),
            this.formulario.reset(); // reseta formulário
        },
        (error) => {
          this.activAlert(
            'danger',
            'Por algum motivo os dados não puderam ser salvos'
          );
          console.error(
            `Os dados do ${this.Voluntary.nome} não puderam ser salvos: => Relatório: ${error}`
          );
        }
      );
    }
  }

  // FUNÇÕES DE CONTROLES DE ALERTS

  public activAlert(typeAlert: string, mensagem: string) {
    (this.alertState = this.alertService.toggle('show')),
      this.alertService.content(mensagem),
      (this.style = this.alertService.style(typeAlert))

      setTimeout(() => {  //fecha o alert após 7 segundos
        this.toggle('hide')
      }, 7000);


  }
  // FUNÇÃO DE ESTILIZAÇÃO DE ALERTS
  public typeStyle() {
    let alertStyle = this.alertService.style('');
    return {
      success: alertStyle == 'success',
      warning: alertStyle == 'warning',
      information: alertStyle == 'information',
      danger: alertStyle == 'danger',
    };
  }
  // FUNÇÕES DE VALIDAÇÃO DE FORMULÁRIO

  public aplicaCss(campo: string | (string | number)[]) {
    return {
      'is-invalid':
        this.formulario.get(campo).invalid &&
        (this.formulario.get(campo).touched ||
          this.formulario.get(campo).dirty),
      'is-valid': this.formulario.get(campo).valid
    };
  }

  // quando o cliente clica para atualizar ou cadastrar um voluntário a aplicação chama o guard para
}
