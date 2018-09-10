(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <section *ngIf=\"registerFormData\">\n    <h2 [textContent]=\"pageTitle\" (click)=\"formToggle.register = !formToggle.register\"></h2>\n\n    <app-user-form\n      [ngClass]=\"{ 'isOpen': formToggle.register }\"\n      [formData]=\"registerFormData\"\n      [formType]=\"'create'\"\n      (sendData)=\"registerUser($event)\"\n    >\n    </app-user-form>\n  </section>\n\n  <section>\n      <h2 [textContent]=\"pageSubTitle\" (click)=\"formToggle.login = !formToggle.login\"></h2>\n\n      <form [ngClass]=\"{ 'isOpen': formToggle.login }\" (submit)=\"logUser()\">\n        <label for=\"email\" [innerHTML]=\"loginFormData.email.label\"></label>\n        <input \n          type=\"email\" name=\"email\" \n          [(ngModel)]=\"loginFormData.email.value\" \n          (focus)=\"deleteError(loginFormData.email, 'Votre email')\"\n        >\n\n        <label for=\"password\" [innerHTML]=\"loginFormData.password.label\"></label>\n        <input \n          type=\"password\" name=\"password\" \n          [(ngModel)]=\"loginFormData.password.value\" \n          (focus)=\"deleteError(loginFormData.password, 'Votre mot de passe')\"\n        >\n\n        <button type=\"submit\">Connexion</button>\n      </form>\n  </section>\n</main>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Import et configuration
*/
// Angular


// Inner
 // #1 Importer le/les service/s
// Configuration
var HomePageComponent = /** @class */ (function () {
    //
    /*
    Ajouter des valeurs aux variables
    */
    function HomePageComponent(
    // Injecter le/les service/s dans le constructor
    AuthService, 
    // Injecter le Router
    Router) {
        var _this = this;
        this.AuthService = AuthService;
        this.Router = Router;
        //
        /*
        Méthodes
        */
        // Créer une fonction pour initialiser le formulaire
        this.formInit = function () {
            _this.registerFormData = {
                userEmail: {
                    label: "Votre email",
                    value: ""
                },
                userName: {
                    label: "Nom complet",
                    value: ""
                },
                userPassword: {
                    label: "Votre mot de passe",
                    value: ""
                },
                userRepeatPassword: {
                    label: "R\u00E9p\u00E9ter votre mot de passe",
                    value: ""
                },
                userTos: {
                    label: "Acc\u00E9pter les CDG",
                    value: false
                }
            };
            _this.loginFormData = {
                email: {
                    label: 'Votre email',
                    value: ''
                },
                password: {
                    label: 'Votre mot de passe',
                    value: ''
                }
            };
        };
        // Créer une fonction pour l'inscription d'un utilisateur
        this.registerUser = function (event) {
            console.log('PARENT', event);
            // Ajouter les données dans l'objet newUser
            _this.newUser = {
                email: event.userEmail.value,
                password: event.userPassword.value,
                userName: event.userName.value
            };
            // Contacter le service pour ajouter un utilisateur
            _this.AuthService.registerUser(_this.newUser)
                .then(function (apiResponse) {
                console.log(apiResponse);
                // Réinitialiser le formulaire
                _this.formInit();
            })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
        // Créer une fonction pour la connexion d'un utilisateur
        this.logUser = function () {
            // Initialiser formError
            _this.formError = 0;
            // Vérifier la valeur des champs du formulaire
            _this.loginFormData.email.value.length < 6 ? _this.addError(_this.loginFormData.email) : null;
            _this.loginFormData.password.value.length < 2 ? _this.addError(_this.loginFormData.password) : null;
            // Validation finale
            if (_this.formError === 0) {
                console.log('OK login');
                // Contacter l'api
                _this.AuthService.logUser(_this.loginFormData)
                    .then(function (apiResponse) {
                    // Rediriger l'utilisateur connecté
                    apiResponse.length === 1 ? _this.Router.navigateByUrl('/news') : false;
                    // Vider le formulaire
                    _this.formInit();
                })
                    .catch(function (apiResponse) {
                    console.error(apiResponse);
                });
            }
        };
        // Créer une fonction pour ajouter une erreur au registerFormData
        this.addError = function (object) {
            // Ajouter 1 à formError
            _this.formError++;
            // Afficher un message d'erreur
            object.label += "<span>Champ obligatoire</span>";
        };
        // Créer une fonction pour supprimer un message d'erreur
        this.deleteError = function (object, text) {
            object.label = text;
        };
        // Ajouter des valeurs aux variables
        this.pageTitle = "Formulaire d'inscription";
        this.pageSubTitle = "Formulaire de connexion";
        this.formToggle = {
            register: false,
            login: false
        };
    }
    ;
    //
    /*
    Hooks Angular
    */
    HomePageComponent.prototype.ngOnInit = function () {
        this.formInit();
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            // #2 Ajouter le/les service/s dans le tableau des providers
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: ["\n      form, app-user-form{\n        height: 0;\n        overflow: hidden;\n        transition: height .3s;\n      }\n\n      .isOpen{\n        height: 35rem;\n        overflow: auto;\n      }\n    "]
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());

//


/***/ }),

/***/ "./src/app/pages/home-page/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home-page/module.ts ***!
  \*******************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./src/app/pages/home-page/route.ts");
/* harmony import */ var _shared_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header/module */ "./src/app/shared/header/module.ts");
/* harmony import */ var _shared_user_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/user-form/module */ "./src/app/shared/user-form/module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Import
*/
// Angular

 //=> Obligatoire pour l'utilisation du [(ngModel)]
 //=> Obligatoire pour ngClass, ngIf, ...
// Inner




//
/*
Définition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
            imports: [_route__WEBPACK_IMPORTED_MODULE_4__["ComponentRouter"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"], _shared_user_form_module__WEBPACK_IMPORTED_MODULE_6__["UserFormModule"]]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/pages/home-page/route.ts":
/*!******************************************!*\
  !*** ./src/app/pages/home-page/route.ts ***!
  \******************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");

// Inner

//
/*
Définir les routes dans un tableau de Routes
*/
var routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
//
/*
Exporter les routes
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Import
*/
// Angular

 // Pour les requêtes HTTP
// 
/*
Configuration et export
*/
var AuthService = /** @class */ (function () {
    //
    function AuthService(
    // Injecter HttpClient dans la class
    HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        /*
        Méthodes
        */
        this.registerUser = function (data) {
            // Configurer le header de la requête
            var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
            myHeader.append('Content-Type', 'application/json');
            // Requête qui retourne un Promise (asynchrone)
            return _this.HttpClient.post("" + _this.apiUrl, data, { headers: myHeader })
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        this.logUser = function (data) {
            // Configurer le header de la requête
            var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
            myHeader.append('Content-Type', 'application/json');
            return _this.HttpClient.get(_this.apiUrl + "?email=" + data.email.value + "&password=" + data.password.value, { headers: myHeader })
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        //
        /*
        Traitement des retours API
        */
        this.getData = function (apiResponse) {
            return Promise.resolve(apiResponse || {});
        };
        this.handleError = function (error) {
            return Promise.reject(error);
        };
        // Ajouter des valeurs aux variables
        this.apiUrl = "http://localhost:3000/user";
    }
    ;
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

//


/***/ })

}]);
//# sourceMappingURL=pages-home-page-module.js.map