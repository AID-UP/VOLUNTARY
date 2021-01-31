import * as mongoose from 'mongoose'; 

export const VoluntarySchema = new mongoose.Schema({
  nome: String,
  dataNascimento: String,
  sexo: String,
  endereco: {
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    complemento: String,
    uf: String,
    CEP: String,
  },
  profissao: String,
  telefone: String,
  telefoneFx: String,
  email: String,
  imgUrlPrincipal: String,
  nomeIg: String,
  pastor: String,
  chekbox1Profissao: Boolean,
  chekbox2Intercessor: Boolean,
  chekbox3Cuidador: Boolean,
  chekbox4: Boolean,
  chekbox5Aconselhamento: Boolean,
  especialidade: String,
  servicoOferecido: String,
  imagesDocUrl: {
    imgRG: String,
    imgCPF: String,
    imgComprovResidencia: String,
    imgCartaIgreja: String,
  },
  dataCad: String,
  status: String

}

)

