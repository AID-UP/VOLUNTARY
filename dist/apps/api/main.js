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

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a, _b, _c;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    findAll() {
        return this.appService.findAll();
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "findAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Post(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Body()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof CreateUserDto !== "undefined" && CreateUserDto) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Param('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "findOne", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Put(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Param('id')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Body()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_b = typeof UpdateUserDto !== "undefined" && UpdateUserDto) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Delete(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Param('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "remove", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('volunteers'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _c : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
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
    constructor() {
        this.VOLUNTEERS = [
            {
                "id": 1,
                "nome": "Adriana da Silva Meluieer Bragança",
                "sexo": "Feminino",
                "dataNascimento": "1995-06-19",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "RJ",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "telefoneVo": "(21) 986589970",
                "imgUrl": "./assets/volu2.jpeg",
                "dataCad": null
            },
            {
                "id": 4,
                "nome": "Bruna Medeiros ",
                "sexo": "F",
                "dataNascimento": "1995-06-21",
                "profissao": "cabelereira",
                "cepVo": "21458965",
                "logradouroVo": "Rua Novo Oeste",
                "numeroVo": "2823",
                "bairroVo": "MeuBairro2823",
                "cidadeVo": "São Paulo",
                "ufVo": "SP",
                "complementoVo": "SP",
                "CEPVo": "SP",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em SP",
                "telefoneIg": "(11) 25698741",
                "cepIg": "45632987",
                "logradouroIg": "Rua Pedra Bela",
                "numeroIg": "1145",
                "bairroIg": "1145",
                "cidadeIg": "São Paulo",
                "complementoIg": "São Paulo",
                "ufIg": "SP",
                "pastor": "MArco Aurélio Silva",
                "telefonePa": "(11) 985632589",
                "cepPa": "45638574",
                "logradouroPa": "Avenida do Estado",
                "numeroPa": "1200",
                "cidadePa": "São Paulo",
                "bairroPa": "São Paulo",
                "complementoPa": "São Paulo",
                "ufPa": "SP",
                "servicoOferecido": "Cabelereira",
                "disponibilidade": "Aos segundas",
                "assiduidade": "umaVezPorSemana",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "brunamedeiros@gmail.com",
                "telefoneVo": "(11) 965874521",
                "imgUrl": "./assets/volu4.jpeg",
                "dataCad": null
            },
            {
                "id": 5,
                "nome": "Alessandro Vieira Fernandes ",
                "sexo": "Masculino",
                "dataNascimento": "1995-06-19",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "telefoneVo": "(21) 986589970",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "21865355",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "imgUrl": "./assets/volu3.jpeg",
                "dataCad": "seg,25 de mai, 2020"
            },
            {
                "id": 6,
                "nome": "Sônia Gonsalves da Silva ",
                "sexo": "Feminino",
                "dataNascimento": "1995-06-19",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "telefoneVo": "(21) 986589970",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "RJ",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "imgUrl": "./assets/volu6.jpeg",
                "dataCad": "seg,25 de mai, 2020"
            },
            {
                "id": 7,
                "nome": "Thayse Alvez Romanu ",
                "sexo": "Feminino",
                "dataNascimento": "1995-06-19",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "telefoneVo": "(21) 986589970",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "RJ",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "imgUrl": "./assets/volu7.jpeg",
                "dataCad": "seg,25 de mai, 2020"
            },
            {
                "id": 8,
                "nome": "Larissa Maier Costa ",
                "sexo": "Feminino",
                "dataNascimento": "1995-06-19",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "telefoneVo": "(21) 986589970",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "RJ",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "imgUrl": "./assets/volu8.jpeg",
                "dataCad": "seg,25 de mai, 2020"
            },
            {
                "id": 9,
                "nome": "Thiago Nunes Botelho",
                "sexo": "M",
                "dataNascimento": "1992-06-26",
                "profissao": "estudante",
                "cepVo": "23092-002",
                "logradouroVo": "Rua da pedras cinzentas",
                "numeroVo": "897",
                "bairroVo": "MeuBairro897",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "RJ",
                "CEPVo": "RJ",
                "instituicao": "Igreja",
                "nomeIg": "Primeira Igreja Batista em Torinho Branco",
                "telefoneIg": "(21) 4358-9621",
                "cepIg": "23093-002",
                "logradouroIg": "Rua da pedras brilhantes",
                "numeroIg": "898",
                "bairroIg": "898",
                "cidadeIg": "Rio de Janeiro",
                "complementoIg": "Rio de Janeiro",
                "ufIg": "RJ",
                "pastor": "João Batista de Jesus",
                "telefonePa": "(21) 98563-1045",
                "cepPa": "23094-002",
                "logradouroPa": "Rua da pedras amarelas",
                "numeroPa": "899",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "Rio de Janeiro",
                "complementoPa": "Rio de Janeiro",
                "ufPa": "RJ",
                "servicoOferecido": "disicpulador",
                "disponibilidade": "Aos sábados",
                "assiduidade": "Aos sábados",
                "diponivel": true,
                "outrasInformacoes": "setá disponivel para participar do congresso radical, pretende fazer parte do programa de vontariado",
                "email": "dikaSilva@gmail.com",
                "telefoneVo": "(21) 986589970",
                "imgUrl": "./assets/volu9.jpeg",
                "dataCad": null
            },
            {
                "id": 10,
                "nome": "José Antônio Gonçalves ",
                "sexo": "M",
                "dataNascimento": "1995-06-19",
                "profissao": "Professor",
                "cepVo": null,
                "logradouroVo": null,
                "numeroVo": "34",
                "bairroVo": "São Basílio",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "casa",
                "CEPVo": "21270080",
                "instituicao": "igreja",
                "nomeIg": "Igreja Batista do Parque são Basílio",
                "telefoneIg": "24150017",
                "cepIg": "21270080",
                "logradouroIg": null,
                "numeroIg": "1716",
                "bairroIg": "campo grande",
                "cidadeIg": "Rio de janeiro",
                "complementoIg": null,
                "ufIg": "RJ",
                "pastor": "Waldemir alves da silva",
                "telefonePa": "24150017",
                "cepPa": "6516516",
                "logradouroPa": null,
                "numeroPa": "1716",
                "cidadePa": "Rio de janeiro",
                "bairroPa": " campo grande ",
                "complementoPa": "dfdsa",
                "ufPa": "RJ",
                "servicoOferecido": "Aulas de Portugues ",
                "disponibilidade": "sabado",
                "assiduidade": "terca",
                "diponivel": null,
                "outrasInformacoes": "Disponível também para discipualdo e alfabetização",
                "email": "antoniog@yahoo.com.br",
                "telefoneVo": "21988756946",
                "imgUrl": "C:\\fakepath\\WhatsApp Image 2019-03-11 at 20.02.21.jpeg",
                "dataCad": null
            },
            {
                "id": 11,
                "nome": "bruno medeiros cabral",
                "sexo": "M",
                "dataNascimento": "1992-06-11",
                "profissao": "programador",
                "cepVo": null,
                "logradouroVo": "Zaira de oliveira ",
                "numeroVo": "278",
                "bairroVo": "campo grande",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "casa",
                "CEPVo": "21270080",
                "instituicao": "igreja",
                "nomeIg": "primeira igreja batista de espigão do oeste",
                "telefoneIg": "34815696",
                "cepIg": "789856356",
                "logradouroIg": null,
                "numeroIg": "8555",
                "bairroIg": "morada do sol",
                "cidadeIg": "Espigão do oeste",
                "complementoIg": "predio",
                "ufIg": null,
                "pastor": "João Batista de Jesus",
                "telefonePa": "69856336558",
                "cepPa": "859965",
                "logradouroPa": null,
                "numeroPa": "897",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "MeuBairro897",
                "complementoPa": "asdfadfa",
                "ufPa": "RN",
                "servicoOferecido": "discipulador",
                "disponibilidade": "sabado",
                "assiduidade": "umaVezPorSemana",
                "diponivel": null,
                "outrasInformacoes": "desejo ajudar como programador auxiliando na automação das instituições",
                "email": "chanpion1300@gmail.com",
                "telefoneVo": "988734469",
                "imgUrl": "./assets/bruno.jpg",
                "dataCad": null
            },
            {
                "id": 12,
                "nome": "Joana Patricia Oliveira",
                "sexo": "F",
                "dataNascimento": "1992-06-11",
                "profissao": "programadora",
                "cepVo": null,
                "logradouroVo": "Zariraa de oilive ",
                "numeroVo": "278",
                "bairroVo": "campo grande",
                "cidadeVo": "Rio de Janeiro",
                "ufVo": "RJ",
                "complementoVo": "casa",
                "CEPVo": "21270080",
                "instituicao": "igreja",
                "nomeIg": "primeira igreja batista de espigão do oeste",
                "telefoneIg": "34815696",
                "cepIg": "789856356",
                "logradouroIg": null,
                "numeroIg": "8555",
                "bairroIg": "morada do sol",
                "cidadeIg": "Espigão do oeste",
                "complementoIg": "predio",
                "ufIg": null,
                "pastor": "João Batista de Jesus",
                "telefonePa": "69856336558",
                "cepPa": "859965",
                "logradouroPa": null,
                "numeroPa": "897",
                "cidadePa": "Rio de Janeiro",
                "bairroPa": "MeuBairro897",
                "complementoPa": "asdfadfa",
                "ufPa": "RN",
                "servicoOferecido": "discipulador",
                "disponibilidade": "sabado",
                "assiduidade": "umaVezPorSemana",
                "diponivel": null,
                "outrasInformacoes": "desejo ajudar como programador auxiliando na automação das instituições",
                "email": "chanpion1300@gmail.com",
                "telefoneVo": "988734469",
                "imgUrl": "./assets/volu13.jpg",
                "dataCad": null
            }
        ];
    }
    findAll() {
        return this.VOLUNTEERS;
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
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
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bruno\Desktop\AidUP\aid-up\apps\api\src\main.ts */"./apps/api/src/main.ts");


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