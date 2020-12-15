export interface VoluntaryModel {
  id: number;
  nome: string;
  dataNascimento: string;
  sexo: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    complemento: string;
    uf: string;
    CEP: string;
  };
  profissao: string;
  telefone: string;
  telefoneFx: string;
  email: string;
  imgUrlPrincipal: string;
  nomeIg: string;
  pastor: string;
  chekbox1Profissao: boolean;
  chekbox2Intercessor: boolean;
  chekbox3Cuidador: boolean;
  chekbox4: boolean;
  chekbox5Aconselhamento: boolean;
  especialidade: string;
  servicoOferecido: string;
  imagesDocUrl: {
    imgRG: string;
    imgCPF: string;
    imgComprovResidencia: string;
    imgCartaIgreja: string;
  };
  dataCad: string;
  status: VoluntaryStatus;
}

export enum VoluntaryStatus {
  ACTIVE = 'ACTIVE',
  IN_CONTRACTING = 'IN_CONTRACTING',
  INACTIVE = 'INACTIVE',
  STAND_BY = 'STAND_BY',
}
