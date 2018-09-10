(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-single-user-page-module"],{

/***/ "./src/app/pages/single-user-page/module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/single-user-page/module.ts ***!
  \**************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _single_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-user-page.component */ "./src/app/pages/single-user-page/single-user-page.component.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./src/app/pages/single-user-page/route.ts");
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

 //=> Obligatoire pour ngClass, ngIf, ...
 //=> Obligatoire pour [(ngModel)]
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
            declarations: [_single_user_page_component__WEBPACK_IMPORTED_MODULE_3__["SingleUserPageComponent"]],
            imports: [_route__WEBPACK_IMPORTED_MODULE_4__["ComponentRouter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"], _shared_user_form_module__WEBPACK_IMPORTED_MODULE_6__["UserFormModule"]]
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

/***/ "./src/app/pages/single-user-page/route.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/single-user-page/route.ts ***!
  \*************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-user-page.component */ "./src/app/pages/single-user-page/single-user-page.component.ts");

// Inner

//
/*
Définir les routes dans un tableau de Routes
*/
var routes = [
    {
        path: '',
        component: _single_user_page_component__WEBPACK_IMPORTED_MODULE_1__["SingleUserPageComponent"]
    }
];
//
/*
Exporter les routes
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/pages/single-user-page/single-user-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/single-user-page/single-user-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- Attendre le retour de l'api avant d'afficher les données -->\n<main *ngIf=\"singleUser && singleUserData\">\n    <section>\n        <h2 [textContent]=\"pageTitle\"></h2>\n        <article>\n            <ul [ngClass]=\"{ 'isOpen': !toggleBoxe }\">\n                <li><h3 [textContent]=\"singleUser.userName\"></h3></li>\n                <li [textContent]=\"singleUser.email\"></li>\n                <li [textContent]=\"singleUser.password\"></li>\n                <li><button [textContent]=\"textButton.edit\" (click)=\"toggleBoxe = true\"></button></li>\n            </ul>\n            <!-- Formulaire pour modifier l'utilisateur -->\n            <app-user-form\n                [ngClass]=\"{ 'isOpen': toggleBoxe }\"\n                [formData]=\"singleUserData\"\n                [formType]=\"'edit'\"\n                (sendData)=\"submitForm($event)\"\n            ></app-user-form>\n        </article>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/pages/single-user-page/single-user-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/single-user-page/single-user-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: SingleUserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserPageComponent", function() { return SingleUserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
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

 // Pour récupérer le paramêtre d'une route
// Inner

// 
/*
Configuration et export
*/
var SingleUserPageComponent = /** @class */ (function () {
    //
    function SingleUserPageComponent(
    // Injecter ActivatedRoute dans la class
    ActivatedRoute, 
    // Injecter le service dans la class
    UserService) {
        var _this = this;
        this.ActivatedRoute = ActivatedRoute;
        this.UserService = UserService;
        /*
        Méthodes
        */
        // Créer une fonction pour récupérer le paramêtre de la route
        this.getRouteParam = function () {
            // Boucler sur le tableau de paramêtres
            _this.ActivatedRoute.params.forEach(function (params) {
                // Vérifier la présence du paramêtre id
                params['id'] ? _this.getUserInfo(params['id']) : null;
            });
        };
        // Créer une fonction pour charger les données d'un utiliateur
        this.getUserInfo = function (_id) {
            _this.UserService.getSingle(parseInt(_id))
                .then(function (apiResponse) {
                _this.singleUser = apiResponse[0];
                _this.singleUserData = {
                    userEmail: {
                        label: 'Modifier le email',
                        value: _this.singleUser.email
                    },
                    userName: {
                        label: 'Modifier le nom',
                        value: _this.singleUser.userName
                    },
                    userPassword: {
                        label: 'Modifier le mot de passe',
                        value: _this.singleUser.password
                    }
                };
            })
                .catch(function (apiResponse) {
                console.error(apiResponse);
            });
        };
        // Créer une fonction pour la validation du formulaire
        this.submitForm = function (event) {
            // Modifier l'objet singleUser
            var data = {
                email: event.userEmail.value,
                userName: event.userName.value,
                password: event.userPassword.value
            };
            // Contacter le service pour modifier les données utilisateur
            _this.UserService.editUser(_this.singleUser.id, data)
                .then(function (apiResponse) {
                // Mettre à jour les données utilisateur
                _this.singleUser.email = apiResponse.email;
                _this.singleUser.userName = apiResponse.userName;
                _this.singleUser.password = apiResponse.password;
                // Masquer le formulaire
                _this.toggleBoxe = false;
            })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
        // Ajouter des valeurs aux variables
        this.pageTitle = "Informations utilisateur";
        this.textButton = {
            edit: "Modifier les informations",
            save: "Enregistrer les informations",
            cancel: "Annuler les informations"
        };
        this.toggleBoxe = false;
    }
    ;
    //
    /*
    Hooks Angular
    */
    SingleUserPageComponent.prototype.ngOnInit = function () {
        // Récupérer le paramêtre de la route
        this.getRouteParam();
    };
    SingleUserPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-user-page',
            template: __webpack_require__(/*! ./single-user-page.component.html */ "./src/app/pages/single-user-page/single-user-page.component.html"),
            styles: ["\n      app-user-form, ul{\n        height: 0;\n        overflow: hidden;\n        transition: height .3s;\n      }\n\n      .isOpen{\n        height: 35rem;\n        overflow: auto;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SingleUserPageComponent);
    return SingleUserPageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=pages-single-user-page-module.js.map