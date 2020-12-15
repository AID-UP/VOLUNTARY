import { VoluntaryStatus } from './voluntary.model';
import { Injectable } from '@nestjs/common';
import { VoluntaryModel } from 'libs/data/src/lib/data';

@Injectable()
export class AppService {
  VOLUNTEERS: VoluntaryModel[] = [
    {
      id: 1,
      nome: 'Adriana da Silva Meluieer Bragança',
      sexo: 'Feminino',
      dataNascimento: '1995-06-19',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      imgUrlPrincipal: './assets/volu2.jpeg',
      chekbox1Profissao: false,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: null,
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 4,
      nome: 'Bruna Medeiros ',
      sexo: 'F',
      dataNascimento: '1995-06-21',
      profissao: 'cabelereira',
      endereco: {
        CEP: '21458965',
        rua: 'Rua Novo Oeste',
        numero: '2823',
        bairro: 'MeuBairro2823',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'SP',
      },
      nomeIg: 'Primeira Igreja Batista em SP',
      pastor: 'MArco Aurélio Silva',
      servicoOferecido: 'Cabelereira',
      email: 'brunamedeiros@gmail.com',
      telefone: '(11) 965874521',
      telefoneFx: '2134568569',
      imgUrlPrincipal: './assets/volu4.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: null,
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 5,
      nome: 'Alessandro Vieira Fernandes ',
      sexo: 'Masculino',
      dataNascimento: '1995-06-19',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      imgUrlPrincipal: './assets/volu3.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: 'seg,25 de mai, 2020',
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 6,
      nome: 'Sônia Gonsalves da Silva ',
      sexo: 'Feminino',
      dataNascimento: '1995-06-19',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      imgUrlPrincipal: './assets/volu6.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: 'seg,25 de mai, 2020',
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 7,
      nome: 'Thayse Alvez Romanu ',
      sexo: 'Feminino',
      dataNascimento: '1995-06-19',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      imgUrlPrincipal: './assets/volu7.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: 'seg,25 de mai, 2020',
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 8,
      nome: 'Larissa Maier Costa ',
      sexo: 'Feminino',
      dataNascimento: '1995-06-19',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      imgUrlPrincipal: './assets/volu8.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: 'seg,25 de mai, 2020',
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 9,
      nome: 'Thiago Nunes Botelho',
      sexo: 'M',
      dataNascimento: '1992-06-26',
      profissao: 'estudante',
      endereco: {
        CEP: '23092-002',
        rua: 'Rua da pedras cinzentas',
        numero: '897',
        bairro: 'MeuBairro897',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'RJ',
      },
      nomeIg: 'Primeira Igreja Batista em Torinho Branco',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'disicpulador',
      email: 'dikaSilva@gmail.com',
      telefone: '(21) 986589970',
      telefoneFx: '2134568569',
      imgUrlPrincipal: './assets/volu9.jpeg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: null,
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 10,
      nome: 'José Antônio Gonçalves ',
      sexo: 'M',
      dataNascimento: '1995-06-19',
      profissao: 'Professor',
      endereco: {
        rua: null,
        numero: '34',
        bairro: 'São Basílio',
        cidade: 'Rio de Janeiro',
        CEP: '21270080',
        uf: 'RJ',
        complemento: 'casa',
      },

      nomeIg: 'Igreja Batista do Parque são Basílio',
      pastor: 'Waldemir alves da silva',
      servicoOferecido: 'Aulas de Portugues ',
      email: 'antoniog@yahoo.com.br',
      telefone: '21988756946',
      telefoneFx: '2134568569',
      imgUrlPrincipal: './assets/volu9.jpeg',
      chekbox1Profissao: false,
      chekbox2Intercessor: false,
      chekbox3Cuidador: false,
      chekbox4: false,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: null,
      status: VoluntaryStatus.ACTIVE,
    },
    {
      id: 11,
      nome: 'bruno medeiros cabral',
      sexo: 'M',
      dataNascimento: '1992-06-11',
      profissao: 'programador',
      endereco: {
        rua: 'Zaira de oliveira ',
        numero: '278',
        bairro: 'campo grande',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        complemento: 'casa',
        CEP: '21270080',
      },
      nomeIg: 'primeira igreja batista de espigão do oeste',
      pastor: 'João Batista de Jesus',
      servicoOferecido: 'discipulador',
      email: 'chanpion1300@gmail.com',
      telefone: '988734469',
      telefoneFx: '2134568569',
      imgUrlPrincipal: './assets/bruno.jpg',
      chekbox1Profissao: true,
      chekbox2Intercessor: true,
      chekbox3Cuidador: true,
      chekbox4: true,
      chekbox5Aconselhamento: true,
      especialidade: 'piscicologo',
      imagesDocUrl: {
        imgRG: './assets/docs/docTeste',
        imgCPF: './assets/docs/docTeste',
        imgComprovResidencia: './assets/docs/docTeste',
        imgCartaIgreja: './assets/docs/docTeste',
      },
      dataCad: null,
      status: VoluntaryStatus.ACTIVE,
    },
  ];

  getAll() {
    return this.VOLUNTEERS;
  }
  getById(id: number) {
    // tslint:disable-next-line: triple-equals
    const voluntary = this.VOLUNTEERS.find((value) => value.id == id);
    return voluntary;
  }

  create(voluntary: VoluntaryModel) {
    let lastId = 0;
    if (this.VOLUNTEERS.length > 0) {
      lastId = this.VOLUNTEERS[this.VOLUNTEERS.length - 1].id;
    }
    voluntary.id = lastId + 1;
    this.VOLUNTEERS.push(voluntary);
    return voluntary;
  }

  update(voluntary: VoluntaryModel) {
    const voluntaryArray = this.getById(voluntary.id);
    if (voluntaryArray) {
      (voluntaryArray.id = voluntary.id),
        (voluntaryArray.nome = voluntary.nome),
        (voluntaryArray.sexo = voluntary.sexo),
        (voluntaryArray.dataNascimento = voluntary.dataNascimento),
        (voluntaryArray.profissao = voluntary.profissao),
        (voluntaryArray.endereco.rua = voluntary.endereco.rua),
        (voluntaryArray.endereco.numero = voluntary.endereco.numero),
        (voluntaryArray.endereco.bairro = voluntary.endereco.bairro),
        (voluntaryArray.endereco.cidade = voluntary.endereco.cidade),
        (voluntaryArray.endereco.uf = voluntary.endereco.uf),
        (voluntaryArray.endereco.complemento = voluntary.endereco.complemento),
        (voluntaryArray.telefone = voluntary.telefone),
        (voluntaryArray.telefoneFx = voluntary.telefoneFx),
        (voluntaryArray.nomeIg = voluntary.nomeIg),
        (voluntaryArray.pastor = voluntary.pastor),
        (voluntaryArray.servicoOferecido = voluntary.servicoOferecido),
        (voluntaryArray.email = voluntary.email),
        (voluntaryArray.imgUrlPrincipal = voluntary.imgUrlPrincipal),
        (voluntaryArray.chekbox1Profissao = voluntary.chekbox1Profissao),
        (voluntaryArray.chekbox2Intercessor = voluntary.chekbox2Intercessor),
        (voluntaryArray.chekbox3Cuidador = voluntary.chekbox3Cuidador),
        (voluntaryArray.chekbox4 = voluntary.chekbox4),
        (voluntaryArray.chekbox5Aconselhamento =
          voluntary.chekbox5Aconselhamento),
        (voluntaryArray.especialidade = voluntary.especialidade),
        (voluntaryArray.imagesDocUrl.imgRG = voluntary.imagesDocUrl.imgRG),
        (voluntaryArray.imagesDocUrl.imgCPF = voluntary.imagesDocUrl.imgCPF),
        (voluntaryArray.imagesDocUrl.imgComprovResidencia =
          voluntary.imagesDocUrl.imgComprovResidencia),
        (voluntaryArray.imagesDocUrl.imgCartaIgreja =
          voluntary.imagesDocUrl.imgCartaIgreja),
        (voluntaryArray.dataCad = voluntary.dataCad),
        (voluntaryArray.status = voluntary.status);
    } else {
      return voluntaryArray;
    }
  }

  delete(id: number) {
    const index = this.VOLUNTEERS.findIndex((item) => item.id === id);
    this.VOLUNTEERS.splice(index, 1);
  }

  findName(termo: string) {
    const volunteers = this.VOLUNTEERS.map((voluntary, index, array) => {
     // console.log(array);
      // é preciso fazer a busca por aproximação dentro do array para enviar um array com os voluntarios que contem os caractera no nome


    })

    //console.log(volunteers.toString());
    console.log(termo);


  }
}
