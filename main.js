(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/academics/academics.component.css":
/*!***************************************************!*\
  !*** ./src/app/academics/academics.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academics/academics.component.html":
/*!****************************************************!*\
  !*** ./src/app/academics/academics.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  academics works!\n</p>\n"

/***/ }),

/***/ "./src/app/academics/academics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/academics/academics.component.ts ***!
  \**************************************************/
/*! exports provided: AcademicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsComponent", function() { return AcademicsComponent; });
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

var AcademicsComponent = /** @class */ (function () {
    function AcademicsComponent() {
    }
    AcademicsComponent.prototype.ngOnInit = function () {
    };
    AcademicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-academics',
            template: __webpack_require__(/*! ./academics.component.html */ "./src/app/academics/academics.component.html"),
            styles: [__webpack_require__(/*! ./academics.component.css */ "./src/app/academics/academics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AcademicsComponent);
    return AcademicsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <a href=\"#\" style=\"text-align: center\" data-toggle=\"modal\" data-target=\"#enquireform\">\n        <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\n\n          <strong>Request a Callback.!!</strong>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n\n        </div>\n      </a>\n    </div>\n\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n        <a class=\"navbar-left navbar-brand\" href=\"#\">\n          <img src=\"https://png.icons8.com/metro/1600/school.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Aditya Birla School</a>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <div style=\"float: right;\" class=\"navbar-right\">\n              <div class=\"col-12\">\n                <button type=\"button\" class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#exampleModal\">Login</button>\n                &nbsp;&nbsp;\n                <button type=\"button\" class=\"btn btn-dark\">Admission Enquiry</button>\n\n              </div>\n            </div>\n          </ul>\n        </div>\n\n      </nav>\n    </div>\n\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                  <label class=\"form-check-label\" for=\"exampleCheck1\">Remember Me</label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                or\n                <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"enquireform\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Request a Callback..!!</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Name</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Your Name\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your details with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Phone Number</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Phone Number\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n\n      <ul class=\"nav justify-content-center\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" [routerLink]=\"['/home']\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"campus.html\">Campus</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"academics.html\">Academics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"about-us.html\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"our-staff.html\">Our Staff</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"contact-us.html\">Contact Us</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n\n\n</div>\n<script type=\"text/javascript\">(function (t, e) { var r = function (t) { try { var r = e.head || e.getElementsByTagName(\"head\")[0]; a = e.createElement(\"script\"); a.setAttribute(\"type\", \"text/javascript\"); a.setAttribute(\"src\", t); r.appendChild(a); } catch (t) { } }; t.CollectId = \"5b72c03e7254ec18beb0cdb0\"; r(\"https://collectcdn.com/launcher.js\"); })(window, document);</script>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'school';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _academics_academics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academics/academics.component */ "./src/app/academics/academics.component.ts");
/* harmony import */ var _campus_campus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campus/campus.component */ "./src/app/campus/campus.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enquiry/enquiry.component */ "./src/app/enquiry/enquiry.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _academics_academics_component__WEBPACK_IMPORTED_MODULE_4__["AcademicsComponent"],
                _campus_campus_component__WEBPACK_IMPORTED_MODULE_5__["CampusComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_7__["EnquiryComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'academics', component: _academics_academics_component__WEBPACK_IMPORTED_MODULE_4__["AcademicsComponent"] },
                    { path: 'campus', component: _campus_campus_component__WEBPACK_IMPORTED_MODULE_5__["CampusComponent"] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                    { path: 'enquiry', component: _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_7__["EnquiryComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/campus/campus.component.css":
/*!*********************************************!*\
  !*** ./src/app/campus/campus.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campus/campus.component.html":
/*!**********************************************!*\
  !*** ./src/app/campus/campus.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  campus works!\n</p>\n"

/***/ }),

/***/ "./src/app/campus/campus.component.ts":
/*!********************************************!*\
  !*** ./src/app/campus/campus.component.ts ***!
  \********************************************/
/*! exports provided: CampusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusComponent", function() { return CampusComponent; });
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

var CampusComponent = /** @class */ (function () {
    function CampusComponent() {
    }
    CampusComponent.prototype.ngOnInit = function () {
    };
    CampusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campus',
            template: __webpack_require__(/*! ./campus.component.html */ "./src/app/campus/campus.component.html"),
            styles: [__webpack_require__(/*! ./campus.component.css */ "./src/app/campus/campus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampusComponent);
    return CampusComponent;
}());



/***/ }),

/***/ "./src/app/enquiry/enquiry.component.css":
/*!***********************************************!*\
  !*** ./src/app/enquiry/enquiry.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enquiry/enquiry.component.html":
/*!************************************************!*\
  !*** ./src/app/enquiry/enquiry.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enquiry works!\n</p>\n"

/***/ }),

/***/ "./src/app/enquiry/enquiry.component.ts":
/*!**********************************************!*\
  !*** ./src/app/enquiry/enquiry.component.ts ***!
  \**********************************************/
/*! exports provided: EnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryComponent", function() { return EnquiryComponent; });
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

var EnquiryComponent = /** @class */ (function () {
    function EnquiryComponent() {
    }
    EnquiryComponent.prototype.ngOnInit = function () {
    };
    EnquiryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enquiry',
            template: __webpack_require__(/*! ./enquiry.component.html */ "./src/app/enquiry/enquiry.component.html"),
            styles: [__webpack_require__(/*! ./enquiry.component.css */ "./src/app/enquiry/enquiry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnquiryComponent);
    return EnquiryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row slider\">\n\n  <div class=\"col-12\">\n\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                  <img class=\"d-block w-100\" src=\"https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\"\n                      alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                  <img class=\"d-block w-100\" src=\"https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\"\n                      alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                  <img class=\"d-block w-100\" src=\"https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\"\n                      alt=\"Third slide\">\n              </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n          </a>\n      </div>\n\n  </div>\n\n</div>\n<div class=\"row\">\n\n  <div class=\"col-md-4 col-12 padd\">\n\n      <div class=\"card spacing\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-4 col-10 padd\">\n\n      <div class=\"card spacing\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"col-md-4 col-11 padd\">\n      <div class=\"card spacing\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n\n  </div>\n\n<!--  <div class=\"col-3\">\n      <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n  </div>\n-->\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/syedvali98/school/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map