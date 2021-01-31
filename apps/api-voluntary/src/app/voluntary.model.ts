export interface VoluntaryModelB {
   id: number;
   nome: string;
   sexo: string;
   dataNascimento: string;
   profissao: string;
   cepVo: string;
   logradouroVo: string;
   numeroVo: string;
   bairroVo: string;
   cidadeVo: string;
   ufVo: string;
   complementoVo: string;
   CEPVo: string;
   instituicao: string;
   nomeIg: string;
   telefoneIg: string;
   cepIg: string;
   logradouroIg: string;
   numeroIg: string;
   bairroIg: string;
   cidadeIg: string;
   complementoIg: string;
   ufIg: string;
   pastor: string;
   telefonePa: string;
   cepPa: string;
   logradouroPa: string;
   numeroPa: string;
   cidadePa: string;
   bairroPa: string;
   complementoPa: string;
   ufPa: string;
   servicoOferecido: string;
   disponibilidade: string;
   assiduidade: string;
   diponivel: boolean;
   outrasInformacoes: string;
   email: string;
   telefoneVo: string;
   imgUrl: string;
   dataCad: string;
   status: VoluntaryStatus
}

export enum VoluntaryStatus{
  ACTIVE = 'ACTIVE',
  IN_CONTRACTING = 'IN_CONTRACTING',
  INACTIVE ='INACTIVE',
  STAND_BY ='STAND_BY'
}