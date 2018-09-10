(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-page-module"],{

/***/ "./src/app/pages/news-page/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news-page/module.ts ***!
  \*******************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-page.component */ "./src/app/pages/news-page/news-page.component.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./src/app/pages/news-page/route.ts");
/* harmony import */ var _shared_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header/module */ "./src/app/shared/header/module.ts");
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
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_news_page_component__WEBPACK_IMPORTED_MODULE_3__["NewsPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _route__WEBPACK_IMPORTED_MODULE_4__["ComponentRouter"], _shared_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"]]
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

/***/ "./src/app/pages/news-page/news-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/news-page/news-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n  <section *ngIf=\"sourcesCollection\">\n\n    <select [(ngModel)]=\"defaultSource\" (change)=\"getArticles($event.target.value)\">\n      <option *ngFor=\"let item of sourcesCollection\" [value]=\"item.id\" [textContent]=\"item.name\"></option>\n    </select>\n\n  </section>\n\n  <section *ngIf=\"articlesCollection\">\n    \n    <article *ngFor=\"let item of articlesCollection\">\n      <h2 [innerHTML]=\"item.title\"></h2>\n      <img [src]=\"item.urlToImage || '/assets/img/jurassic-error.jpg'\" [alt]=\"item.title\">\n      <p [innerHTML]=\"item.description\"></p>\n      <a *ngIf=\"item.url\" [href]=\"item.url\" [innerText]=\"'Lire la suite...'\" target=\"_blank\"></a>\n    </article>\n\n  </section>\n</main>"

/***/ }),

/***/ "./src/app/pages/news-page/news-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/news-page/news-page.component.ts ***!
  \********************************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news/news.service */ "./src/app/services/news/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
Importes
*/
// Angular

// Inner

//
/*
Configuration en export
*/
var NewsPageComponent = /** @class */ (function () {
    //
    function NewsPageComponent(
    // Injecter le services dans la class du composant
    NewsService) {
        var _this = this;
        this.NewsService = NewsService;
        /*
        Méthodes
        */
        // Créer une fonction pour chager le liste des sources
        this.getSources = function () {
            _this.NewsService.getSources()
                .then(function (apiResponse) {
                console.log(apiResponse);
                _this.sourcesCollection = apiResponse.sources;
            })
                .catch(function (apiResponse) {
                console.error(apiResponse);
            });
        };
        // Créer une fonction pour charger la liste des articles
        this.getArticles = function (source) {
            if (source === void 0) { source = _this.defaultSource; }
            console.log(source);
            _this.NewsService.getArticles(source)
                .then(function (apiResponse) {
                // Vérifier la présence d'articles dans la réponse de l'api
                apiResponse.totalResults > 0
                    ? _this.articlesCollection = apiResponse.articles
                    : _this.articlesCollection = [_this.blankArticle];
            })
                .catch(function (apiResponse) {
                console.error(apiResponse);
            });
        };
        this.defaultSource = 'liberation';
        this.blankArticle = {
            title: 'Aucun article',
            description: 'Sélectionner une autre source',
            urlToImage: '/assets/img/jurassic-error.jpg'
        };
    }
    //
    /*
    Hooks Angular
    */
    NewsPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSources()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getArticles()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    NewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-page',
            template: __webpack_require__(/*! ./news-page.component.html */ "./src/app/pages/news-page/news-page.component.html")
        }),
        __metadata("design:paramtypes", [_services_news_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsPageComponent);
    return NewsPageComponent;
}());

;
//


/***/ }),

/***/ "./src/app/pages/news-page/route.ts":
/*!******************************************!*\
  !*** ./src/app/pages/news-page/route.ts ***!
  \******************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-page.component */ "./src/app/pages/news-page/news-page.component.ts");

// Inner

//
/*
Définir les routes dans un tableau de Routes
*/
var routes = [
    {
        path: '',
        component: _news_page_component__WEBPACK_IMPORTED_MODULE_1__["NewsPageComponent"]
    }
];
//
/*
Exporter les routes
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/services/news/news.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/news/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
var NewsService = /** @class */ (function () {
    //
    function NewsService(
    // Injecter le module HttpClient dans la class du service
    HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        /*
        Méthodes
        */
        // Crèer une fonction pour récupérer la liste des sources
        this.getSources = function () {
            return _this.HttpClient.get(_this.apiUrl + "/sources?apiKey=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].newsApiKey)
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        // Crèer une fonction pour récupérer la liste des articles
        this.getArticles = function (source, langue) {
            if (langue === void 0) { langue = 'fr'; }
            return _this.HttpClient.get(_this.apiUrl + "/everything?sources=" + source + "&language=" + langue + "&apiKey=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].newsApiKey)
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
        // Ajouter de la valeur aux variables
        this.apiUrl = "https://newsapi.org/v2";
    }
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



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
//# sourceMappingURL=pages-news-page-module.js.map