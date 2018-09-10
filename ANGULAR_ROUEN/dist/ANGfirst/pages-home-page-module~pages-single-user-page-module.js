(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-module~pages-single-user-page-module"],{

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>{{mainTitle}}</h1>\n  <nav>\n    <ul class=\"flexBoxes\">\n      <li *ngFor=\"let item of navCollection\">\n        <a \n          [routerLink]=\"item.path\"\n          [ngClass]=\"{ 'isActive': item.isActive }\"\n        >\n          {{item.name}}\n        </a>\n      </li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


// Configuration
var HeaderComponent = /** @class */ (function () {
    //
    /*
    Ajouter de la valeur aux variables
    */
    function HeaderComponent(
    // Rendre disponible le routeur dans le composant
    Router) {
        var _this = this;
        this.Router = Router;
        //
        /*
        Méthodes
        */
        // Créer une fonction pour activer le lien (CSS)
        this.linkIsActive = function (path) {
            for (var _i = 0, _a = _this.navCollection; _i < _a.length; _i++) {
                var item = _a[_i];
                item.path === path ? item.isActive = true : null;
            }
        };
        this.mainTitle = "NewsFeed";
        this.navCollection = [
            {
                isActive: false,
                name: 'Accueil',
                path: '/'
            },
            {
                isActive: false,
                name: 'Actualités',
                path: '/news'
            },
            {
                isActive: false,
                name: 'Utilisateurs',
                path: '/users'
            }
        ];
    }
    ;
    //
    HeaderComponent.prototype.ngOnInit = function () {
        this.linkIsActive(this.Router.url);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: ["\n      .isActive{ background: var(--main-color); }\n    "]
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//


/***/ }),

/***/ "./src/app/shared/header/module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/header/module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header/header.component.ts");
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



// Inner

//
/*
Définition
*/
var HeaderModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
        //
        /*
        Export
        */
    ], HeaderModule);
    return HeaderModule;
}());

;
//


/***/ }),

/***/ "./src/app/shared/user-form/module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/user-form/module.ts ***!
  \********************************************/
/*! exports provided: UserFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormModule", function() { return UserFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-form.component */ "./src/app/shared/user-form/user-form.component.ts");
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



// Inner

//
/*
Définition
*/
var UserFormModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function UserFormModule() {
    }
    UserFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_form_component__WEBPACK_IMPORTED_MODULE_3__["UserFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            exports: [_user_form_component__WEBPACK_IMPORTED_MODULE_3__["UserFormComponent"]] //=> Pour utiliser le composant dans plusieurs pages
        })
        //
        /*
        Export
        */
    ], UserFormModule);
    return UserFormModule;
}());

;
//


/***/ }),

/***/ "./src/app/shared/user-form/user-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/user-form/user-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"registerUser()\"> \n\n  <label [innerHTML]=\"formData.userName.label\"></label>\n  <input \n    type=\"text\" \n    name=\"userName\"\n\n    [(ngModel)]=\"formData.userName.value\"\n    (focus)=\"deleteError(formData.userName, 'Nom complet')\"\n  >\n  \n  <label [innerHTML]=\"formData.userEmail.label\"></label>\n  <input type=\"email\" [(ngModel)]=\"formData.userEmail.value\" name=\"userEmail\" (focus)=\"deleteError(formData.userEmail, 'Votre email')\">\n\n  <label [innerHTML]=\"formData.userPassword.label\"></label>\n  <input type=\"text\" [(ngModel)]=\"formData.userPassword.value\" name=\"userPassword\" (focus)=\"deleteError(formData.userPassword, 'Votre mot de passe')\">\n\n  <div *ngIf=\"formType === 'create'\">\n    <label [innerHTML]=\"formData.userRepeatPassword.label\"></label>\n    <input type=\"text\" [(ngModel)]=\"formData.userRepeatPassword.value\" name=\"userRepeatPassword\"  (focus)=\"deleteError(formData.userRepeatPassword, 'Répéter votre mot de passe')\">\n\n    <input type=\"checkbox\" [(ngModel)]=\"formData.userTos.value\" name=\"userTos\" (focus)=\"deleteError(formData.userTos, 'Accépter les CDG')\">\n    <label [innerHTML]=\"formData.userTos.label\"></label>\n  </div>\n\n  <button type=\"submit\">Inscription</button> \n\n</form>"

/***/ }),

/***/ "./src/app/shared/user-form/user-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/user-form/user-form.component.ts ***!
  \*********************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
Imports
*/
// Angular

//
/*
Définition et export
*/
var UserFormComponent = /** @class */ (function () {
    //
    function UserFormComponent() {
        var _this = this;
        // Créer un événement
        this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /*
        Méthode
        */
        // Créer une fonction pour la soumission du formulaire
        this.registerUser = function () {
            // Initialiser la variable formError
            _this.formError = 0;
            // Vérifier les données de l'objet formData
            _this.formData.userName.value.length < 2 ? _this.addError(_this.formData.userName) : null;
            _this.formData.userEmail.value.length < 6 ? _this.addError(_this.formData.userEmail) : null;
            _this.formData.userPassword.value.length < 5 ? _this.addError(_this.formData.userPassword) : null;
            if (_this.formType === 'create') {
                _this.formData.userRepeatPassword.value !== _this.formData.userPassword.value ? _this.addError(_this.formData.userRepeatPassword) : null;
                _this.formData.userTos.value === false ? _this.addError(_this.formData.userTos) : null;
            }
            //  Vérification finale :  émettre l'événement sendData
            _this.formError === 0 ? _this.sendData.emit(_this.formData) : null;
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
    }
    //
    UserFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "formData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserFormComponent.prototype, "formType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "sendData", void 0);
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/shared/user-form/user-form.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], UserFormComponent);
    return UserFormComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=pages-home-page-module~pages-single-user-page-module.js.map