(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-list-module"],{

/***/ "./src/app/pages/user-list/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user-list/module.ts ***!
  \*******************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component */ "./src/app/pages/user-list/user-list.component.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route */ "./src/app/pages/user-list/route.ts");
/* harmony import */ var _shared_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/module */ "./src/app/shared/header/module.ts");
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
            declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]],
            imports: [_route__WEBPACK_IMPORTED_MODULE_3__["ComponentRouter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]]
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

/***/ "./src/app/pages/user-list/route.ts":
/*!******************************************!*\
  !*** ./src/app/pages/user-list/route.ts ***!
  \******************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.component */ "./src/app/pages/user-list/user-list.component.ts");

// Inner

//
/*
Définir les routes dans un tableau de Routes
*/
var routes = [
    {
        path: '',
        component: _user_list_component__WEBPACK_IMPORTED_MODULE_1__["UserListComponent"]
    }
];
//
/*
Exporter les routes
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/pages/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n    <section>\n        <h2 [textContent]=\"pageTitle\"></h2>\n        <ul>\n            <!-- Bboucle sur une collection de données -->\n            <li *ngFor=\"let item of userCollection\" class=\"flexBoxes flexBetween\">\n                <p [textContent]=\"item.userName\"></p>\n                <p>\n                    <i class=\"fas fa-eye\" (click)=\"changeRoute(item.id)\"></i>\n                    <i class=\"fas fa-eraser\"></i>\n                </p>\n            </li>\n        </ul>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/pages/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
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
Imports
*/
// Angular


// Inner

//
/*
Configuration et export
*/
var UserListComponent = /** @class */ (function () {
    //
    function UserListComponent(
    // Injecter le service et le router dans la class
    UserService, Router) {
        var _this = this;
        this.UserService = UserService;
        this.Router = Router;
        /*
        Méthodes
        */
        // Créer une fonction pour charger la liste des utilisateurs
        this.getUsers = function () {
            _this.UserService.getUsers()
                .then(function (apiResponse) {
                console.log(apiResponse);
                // Ajouter les données de l'API dans  userCollection
                _this.userCollection = apiResponse;
            })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
        // Créer une fonction pour changer de route
        this.changeRoute = function (id) {
            _this.Router.navigateByUrl("/single-user/" + id);
        };
        // Ajouter des valeurs aux variables
        this.pageTitle = "Liste des utilisateurs";
    }
    ;
    //
    /*
    Hooks Angular
    */
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/pages/user-list/user-list.component.html"),
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: ["\n      i{ padding: .5rem; }\n      li{ border-bottom: .1rem solid #333; padding-bottom: 1rem; margin-bottom: 1rem; }\n    "]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());

//


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=pages-user-list-module.js.map