(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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
var UserService = /** @class */ (function () {
    //
    function UserService(
    // Injecter HttpClient dans la class
    HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        /*
        Méthodes
        */
        // Créer une fonction pour charger la liste des utilisateurs
        this.getUsers = function () {
            return _this.HttpClient.get("" + _this.apiUrl)
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        // Créer une fonction pour chager les données d'un utilisateur
        this.getSingle = function (_id) {
            return _this.HttpClient.get(_this.apiUrl + "?id=" + _id)
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        // Créer une fonction pour modifier les données d'un utilisateur
        this.editUser = function (_id, data) {
            return _this.HttpClient.patch(_this.apiUrl + "/" + _id, data)
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
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());

//


/***/ })

}]);
//# sourceMappingURL=common.js.map