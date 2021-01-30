(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api-voluntary/src/app/Volunteers/Volunteers.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api-voluntary/src/app/Volunteers/Volunteers.module.ts ***!
  \********************************************************************/
/*! exports provided: VolunteersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteersModule", function() { return VolunteersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_voluntary_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../schemas/voluntary.schema */ "./apps/api-voluntary/src/app/schemas/voluntary.schema.ts");
/* harmony import */ var _volunteers_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./volunteers.controller */ "./apps/api-voluntary/src/app/Volunteers/volunteers.controller.ts");
/* harmony import */ var _volunteers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./volunteers.service */ "./apps/api-voluntary/src/app/Volunteers/volunteers.service.ts");






let VolunteersModule = class VolunteersModule {
};
VolunteersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: 'Voluntary', schema: _schemas_voluntary_schema__WEBPACK_IMPORTED_MODULE_3__["VoluntarySchema"] }])
        ],
        controllers: [_volunteers_controller__WEBPACK_IMPORTED_MODULE_4__["VolunteersController"]],
        providers: [_volunteers_service__WEBPACK_IMPORTED_MODULE_5__["VolunteersService"]],
    })
], VolunteersModule);



/***/ }),

/***/ "./apps/api-voluntary/src/app/Volunteers/volunteers.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/api-voluntary/src/app/Volunteers/volunteers.controller.ts ***!
  \************************************************************************/
/*! exports provided: VolunteersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteersController", function() { return VolunteersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_voluntary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/voluntary */ "./apps/api-voluntary/src/app/shared/voluntary.ts");
/* harmony import */ var _volunteers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volunteers.service */ "./apps/api-voluntary/src/app/Volunteers/volunteers.service.ts");
var _a, _b, _c, _d, _e, _f, _g;




let VolunteersController = class VolunteersController {
    constructor(volunteersService) {
        this.volunteersService = volunteersService;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.volunteersService.getAll();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.volunteersService.getById(id);
        });
    }
    create(voluntary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.volunteersService.create(voluntary);
        });
    }
    update(id, voluntary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.volunteersService.update(id, voluntary);
        });
    }
    Delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.volunteersService.delete(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], VolunteersController.prototype, "getAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], VolunteersController.prototype, "getById", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _shared_voluntary__WEBPACK_IMPORTED_MODULE_2__["Voluntary"] !== "undefined" && _shared_voluntary__WEBPACK_IMPORTED_MODULE_2__["Voluntary"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], VolunteersController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_e = typeof _shared_voluntary__WEBPACK_IMPORTED_MODULE_2__["Voluntary"] !== "undefined" && _shared_voluntary__WEBPACK_IMPORTED_MODULE_2__["Voluntary"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], VolunteersController.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], VolunteersController.prototype, "Delete", null);
VolunteersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('volunteers'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _volunteers_service__WEBPACK_IMPORTED_MODULE_3__["VolunteersService"] !== "undefined" && _volunteers_service__WEBPACK_IMPORTED_MODULE_3__["VolunteersService"]) === "function" ? _g : Object])
], VolunteersController);



/***/ }),

/***/ "./apps/api-voluntary/src/app/Volunteers/volunteers.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-voluntary/src/app/Volunteers/volunteers.service.ts ***!
  \*********************************************************************/
/*! exports provided: VolunteersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteersService", function() { return VolunteersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let VolunteersService = class VolunteersService {
    constructor(voluntaryModel) {
        this.voluntaryModel = voluntaryModel;
    }
    // VOLUNTEERS: VoluntaryModel[] = [
    //   {
    //     _id: "1",
    //   nome: 'Adriana da Silva Meluieer Bragança',
    //   sexo: 'Feminino',
    //   dataNascimento: '1995-06-19',
    //   profissao: 'estudante',
    //   endereco: {
    //     CEP: '23092-002',
    //     rua: 'Rua da pedras cinzentas',
    //     numero: '897',
    //     bairro: 'MeuBairro897',
    //     cidade: 'Rio de Janeiro',
    //     uf: 'RJ',
    //     complemento: 'RJ',
    //   },
    //   nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //   pastor: 'João Batista de Jesus',
    //   servicoOferecido: 'disicpulador',
    //   email: 'dikaSilva@gmail.com',
    //   telefone: '(21) 986589970',
    //   telefoneFx: '2134568569',
    //   imgUrlPrincipal: './assets/volu2.jpeg',
    //   chekbox1Profissao: false,
    //   chekbox2Intercessor: true,
    //   chekbox3Cuidador: true,
    //   chekbox4: true,
    //   chekbox5Aconselhamento: true,
    //   especialidade: 'piscicologo',
    //   imagesDocUrl: {
    //     imgRG: './assets/docs/docTeste',
    //     imgCPF: './assets/docs/docTeste',
    //     imgComprovResidencia: './assets/docs/docTeste',
    //     imgCartaIgreja: './assets/docs/docTeste',
    //   },
    //   dataCad: null,
    //   status: VoluntaryStatus.ACTIVE,
    // },
    //   {
    //     _id: "4",
    //     nome: 'Bruna Medeiros ',
    //     sexo: 'F',
    //     dataNascimento: '1995-06-21',
    //     profissao: 'cabelereira',
    //     endereco: {
    //       CEP: '21458965',
    //       rua: 'Rua Novo Oeste',
    //       numero: '2823',
    //       bairro: 'MeuBairro2823',
    //       cidade: 'São Paulo',
    //       uf: 'SP',
    //       complemento: 'SP',
    //     },
    //     nomeIg: 'Primeira Igreja Batista em SP',
    //     pastor: 'MArco Aurélio Silva',
    //     servicoOferecido: 'Cabelereira',
    //     email: 'brunamedeiros@gmail.com',
    //     telefone: '(11) 965874521',
    //     telefoneFx: '2134568569',
    //     imgUrlPrincipal: './assets/volu4.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: null,
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "5",
    //     nome: 'Alessandro Vieira Fernandes ',
    //     sexo: 'Masculino',
    //     dataNascimento: '1995-06-19',
    //     profissao: 'estudante',
    //     endereco: {
    //       CEP: '23092-002',
    //       rua: 'Rua da pedras cinzentas',
    //       numero: '897',
    //       bairro: 'MeuBairro897',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'RJ',
    //     },
    //     telefone: '(21) 986589970',
    //     telefoneFx: '2134568569',
    //     nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'disicpulador',
    //     email: 'dikaSilva@gmail.com',
    //     imgUrlPrincipal: './assets/volu3.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: 'seg,25 de mai, 2020',
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "6",
    //     nome: 'Sônia Gonsalves da Silva ',
    //     sexo: 'Feminino',
    //     dataNascimento: '1995-06-19',
    //     profissao: 'estudante',
    //     endereco: {
    //       CEP: '23092-002',
    //       rua: 'Rua da pedras cinzentas',
    //       numero: '897',
    //       bairro: 'MeuBairro897',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'RJ',
    //     },
    //     telefone: '(21) 986589970',
    //     telefoneFx: '2134568569',
    //     nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'disicpulador',
    //     email: 'dikaSilva@gmail.com',
    //     imgUrlPrincipal: './assets/volu6.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: 'seg,25 de mai, 2020',
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "7",
    //     nome: 'Thayse Alvez Romanu ',
    //     sexo: 'Feminino',
    //     dataNascimento: '1995-06-19',
    //     profissao: 'estudante',
    //     endereco: {
    //       CEP: '23092-002',
    //       rua: 'Rua da pedras cinzentas',
    //       numero: '897',
    //       bairro: 'MeuBairro897',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'RJ',
    //     },
    //     telefone: '(21) 986589970',
    //     telefoneFx: '2134568569',
    //     nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'disicpulador',
    //     email: 'dikaSilva@gmail.com',
    //     imgUrlPrincipal: './assets/volu7.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: 'seg,25 de mai, 2020',
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "8",
    //     nome: 'Larissa Maier Costa ',
    //     sexo: 'Feminino',
    //     dataNascimento: '1995-06-19',
    //     profissao: 'estudante',
    //     endereco: {
    //       CEP: '23092-002',
    //       rua: 'Rua da pedras cinzentas',
    //       numero: '897',
    //       bairro: 'MeuBairro897',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'RJ',
    //     },
    //     telefone: '(21) 986589970',
    //     telefoneFx: '2134568569',
    //     nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'disicpulador',
    //     email: 'dikaSilva@gmail.com',
    //     imgUrlPrincipal: './assets/volu8.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: 'seg,25 de mai, 2020',
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "9",
    //     nome: 'Thiago Nunes Botelho',
    //     sexo: 'M',
    //     dataNascimento: '1992-06-26',
    //     profissao: 'estudante',
    //     endereco: {
    //       CEP: '23092-002',
    //       rua: 'Rua da pedras cinzentas',
    //       numero: '897',
    //       bairro: 'MeuBairro897',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'RJ',
    //     },
    //     nomeIg: 'Primeira Igreja Batista em Torinho Branco',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'disicpulador',
    //     email: 'dikaSilva@gmail.com',
    //     telefone: '(21) 986589970',
    //     telefoneFx: '2134568569',
    //     imgUrlPrincipal: './assets/volu9.jpeg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: null,
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "10",
    //     nome: 'José Antônio Gonçalves ',
    //     sexo: 'M',
    //     dataNascimento: '1995-06-19',
    //     profissao: 'Professor',
    //     endereco: {
    //       rua: null,
    //       numero: '34',
    //       bairro: 'São Basílio',
    //       cidade: 'Rio de Janeiro',
    //       CEP: '21270080',
    //       uf: 'RJ',
    //       complemento: 'casa',
    //     },
    //     nomeIg: 'Igreja Batista do Parque são Basílio',
    //     pastor: 'Waldemir alves da silva',
    //     servicoOferecido: 'Aulas de Portugues ',
    //     email: 'antoniog@yahoo.com.br',
    //     telefone: '21988756946',
    //     telefoneFx: '2134568569',
    //     imgUrlPrincipal: './assets/volu9.jpeg',
    //     chekbox1Profissao: false,
    //     chekbox2Intercessor: false,
    //     chekbox3Cuidador: false,
    //     chekbox4: false,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: null,
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    //   {
    //     _id: "11",
    //     nome: 'bruno medeiros cabral',
    //     sexo: 'M',
    //     dataNascimento: '1992-06-11',
    //     profissao: 'programador',
    //     endereco: {
    //       rua: 'Zaira de oliveira ',
    //       numero: '278',
    //       bairro: 'campo grande',
    //       cidade: 'Rio de Janeiro',
    //       uf: 'RJ',
    //       complemento: 'casa',
    //       CEP: '21270080',
    //     },
    //     nomeIg: 'primeira igreja batista de espigão do oeste',
    //     pastor: 'João Batista de Jesus',
    //     servicoOferecido: 'discipulador',
    //     email: 'chanpion1300@gmail.com',
    //     telefone: '988734469',
    //     telefoneFx: '2134568569',
    //     imgUrlPrincipal: './assets/bruno.jpg',
    //     chekbox1Profissao: true,
    //     chekbox2Intercessor: true,
    //     chekbox3Cuidador: true,
    //     chekbox4: true,
    //     chekbox5Aconselhamento: true,
    //     especialidade: 'piscicologo',
    //     imagesDocUrl: {
    //       imgRG: './assets/docs/docTeste',
    //       imgCPF: './assets/docs/docTeste',
    //       imgComprovResidencia: './assets/docs/docTeste',
    //       imgCartaIgreja: './assets/docs/docTeste',
    //     },
    //     dataCad: null,
    //     status: VoluntaryStatus.ACTIVE,
    //   },
    // ];
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.voluntaryModel.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.voluntaryModel.findById(id).exec();
        });
    }
    create(voluntary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const createdVoluntary = new this.voluntaryModel(voluntary);
            return yield createdVoluntary.save();
        });
    }
    update(id, voluntary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.voluntaryModel.updateOne({ _id: id }, voluntary).exec();
            return this.getById(id);
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.voluntaryModel.deleteOne({ _id: id }).exec();
        });
    }
    findName(termo) {
    }
};
VolunteersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('Voluntary')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], VolunteersService);



/***/ }),

/***/ "./apps/api-voluntary/src/app/app.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api-voluntary/src/app/app.controller.ts ***!
  \******************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api-voluntary/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/api-voluntary/src/app/app.module.ts":
/*!**************************************************!*\
  !*** ./apps/api-voluntary/src/app/app.module.ts ***!
  \**************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./apps/api-voluntary/src/app/app.service.ts");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api-voluntary/src/app/app.controller.ts");
/* harmony import */ var _Volunteers_Volunteers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Volunteers/Volunteers.module */ "./apps/api-voluntary/src/app/Volunteers/Volunteers.module.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__);








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Module"])({
        imports: [
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_5__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_6__["join"])(__dirname, '..', 'voluntary'),
                exclude: ['/api*']
            }),
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["MongooseModule"].forRoot("mongodb+srv://user01AIDUP:885522@aidup.or0ro.mongodb.net/CIM?retryWrites=true&w=majority"),
            _Volunteers_Volunteers_module__WEBPACK_IMPORTED_MODULE_3__["VolunteersModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api-voluntary/src/app/app.service.ts":
/*!***************************************************!*\
  !*** ./apps/api-voluntary/src/app/app.service.ts ***!
  \***************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api-voluntary/src/app/schemas/voluntary.schema.ts":
/*!****************************************************************!*\
  !*** ./apps/api-voluntary/src/app/schemas/voluntary.schema.ts ***!
  \****************************************************************/
/*! exports provided: VoluntarySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntarySchema", function() { return VoluntarySchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const VoluntarySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
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
});


/***/ }),

/***/ "./apps/api-voluntary/src/app/shared/voluntary.ts":
/*!********************************************************!*\
  !*** ./apps/api-voluntary/src/app/shared/voluntary.ts ***!
  \********************************************************/
/*! exports provided: Voluntary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voluntary", function() { return Voluntary; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

class Voluntary extends mongoose__WEBPACK_IMPORTED_MODULE_0__["Document"] {
}


/***/ }),

/***/ "./apps/api-voluntary/src/main.ts":
/*!****************************************!*\
  !*** ./apps/api-voluntary/src/main.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api-voluntary/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            // Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at port:' + port);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./apps/api-voluntary/src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bruno\OneDrive\Área de Trabalho\AidUP\aid-up\apps\api-voluntary\src\main.ts */"./apps/api-voluntary/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map