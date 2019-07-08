(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selects-selects-module-ngfactory"],{

/***/ "./src/app/selects/selects-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/selects/selects-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SelectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsRoutingModule", function() { return SelectsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/selects/selects/selects.component.ts");


var routes = [
    {
        path: '',
        component: _selects_selects_component__WEBPACK_IMPORTED_MODULE_1__["SelectsComponent"]
    }
];
var SelectsRoutingModule = /** @class */ (function () {
    function SelectsRoutingModule() {
    }
    return SelectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/selects/selects.const.ts":
/*!******************************************!*\
  !*** ./src/app/selects/selects.const.ts ***!
  \******************************************/
/*! exports provided: SELECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTS", function() { return SELECTS; });
var SELECTS = /** @class */ (function () {
    function SELECTS() {
        this.selects = [
            {
                rotatingQuestionsTag: 'A',
                varName: '$Q0',
                title: 'A question 1',
                answerOptions: ['option-1', 'option-2', 'option-3']
            },
            {
                rotatingQuestionsTag: 'A',
                varName: '$Q1',
                title: 'A question 2',
                answerOptions: ['option-1', 'option-2', 'option-3']
            },
            {
                rotatingQuestionsTag: 'A',
                varName: '$Q2',
                title: 'A question 3',
                answerOptions: ['option-1', 'option-2', 'option-3']
            },
            {
                rotatingQuestionsTag: 'B',
                varName: '$Q3',
                title: 'B question 1',
                answerOptions: ['option-1', 'option-2', 'option-3']
            },
            {
                rotatingQuestionsTag: 'B',
                varName: '$Q4',
                title: 'B question 2',
                answerOptions: ['option-1', 'option-2', 'option-3']
            },
            {
                rotatingQuestionsTag: 'B',
                varName: '$Q5',
                title: 'B question 3',
                answerOptions: ['option-1', 'option-2', 'option-3']
            }
        ];
    }
    return SELECTS;
}());



/***/ }),

/***/ "./src/app/selects/selects.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/selects/selects.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: SelectsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsModuleNgFactory", function() { return SelectsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selects.module */ "./src/app/selects/selects.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _selects_selects_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selects/selects.component.ngfactory */ "./src/app/selects/selects/selects.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selects_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selects.const */ "./src/app/selects/selects.const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selects_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selects-routing.module */ "./src/app/selects/selects-routing.module.ts");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/selects/selects/selects.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var SelectsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_selects_module__WEBPACK_IMPORTED_MODULE_1__["SelectsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _selects_selects_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["SelectsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _selects_const__WEBPACK_IMPORTED_MODULE_5__["SELECTS"], _selects_const__WEBPACK_IMPORTED_MODULE_5__["SELECTS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _selects_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectsRoutingModule"], _selects_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _selects_module__WEBPACK_IMPORTED_MODULE_1__["SelectsModule"], _selects_module__WEBPACK_IMPORTED_MODULE_1__["SelectsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ROUTES"], function () { return [[{ path: "", component: _selects_selects_component__WEBPACK_IMPORTED_MODULE_8__["SelectsComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/selects/selects.module.ts":
/*!*******************************************!*\
  !*** ./src/app/selects/selects.module.ts ***!
  \*******************************************/
/*! exports provided: SelectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsModule", function() { return SelectsModule; });
var SelectsModule = /** @class */ (function () {
    function SelectsModule() {
    }
    return SelectsModule;
}());



/***/ }),

/***/ "./src/app/selects/selects/selects.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/selects/selects/selects.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_SelectsComponent, View_SelectsComponent_0, View_SelectsComponent_Host_0, SelectsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SelectsComponent", function() { return RenderType_SelectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SelectsComponent_0", function() { return View_SelectsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SelectsComponent_Host_0", function() { return View_SelectsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsComponentNgFactory", function() { return SelectsComponentNgFactory; });
/* harmony import */ var _selects_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selects.component.scss.shim.ngstyle */ "./src/app/selects/selects/selects.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selects.component */ "./src/app/selects/selects/selects.component.ts");
/* harmony import */ var _selects_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selects.const */ "./src/app/selects/selects.const.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SelectsComponent = [_selects_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SelectsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SelectsComponent, data: {} });

function View_SelectsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "option", [], [[8, "value", 0], [8, "disabled", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { hide: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 3, 0, ((_v.context.$implicit.rotatingQuestionsTag !== _co.selectsTagActive) && (_v.parent.context.index !== 0))); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.varName, ""); var currVal_1 = ((_co.selectsValues.indexOf(_v.context.$implicit.varName) >= 0) && (_co.selectsValues.indexOf(_v.context.$implicit.varName) !== _v.parent.context.index)); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_3); }); }
function View_SelectsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeSelect(_v.parent.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remove"]))], null, null); }
function View_SelectsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "option", [], [[8, "value", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_SelectsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["selectEl", 1]], null, 2, "select", [], [[8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.selectChange($event.target.value, _v.context.index, $event.srcElement.selectedIndex) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "select", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.selects; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.buttonRemove; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.answerOptions; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectsValues[_v.context.index]; _ck(_v, 2, 0, currVal_0); }); }
function View_SelectsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addSelect() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show more"]))], null, null); }
function View_SelectsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { selectElements: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectsDisplayed; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.buttonAdd; _ck(_v, 5, 0, currVal_1); }, null); }
function View_SelectsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-selects", [], null, null, null, View_SelectsComponent_0, RenderType_SelectsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _selects_component__WEBPACK_IMPORTED_MODULE_3__["SelectsComponent"], [_selects_const__WEBPACK_IMPORTED_MODULE_4__["SELECTS"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SelectsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-selects", _selects_component__WEBPACK_IMPORTED_MODULE_3__["SelectsComponent"], View_SelectsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/selects/selects/selects.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/selects/selects/selects.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  padding: 30px 0;\n}\n\noption.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0cy9zZWxlY3RzL0M6XFxVc2Vyc1xcYS5ob3Nob3Zza3lpXFxEZXNrdG9wXFx0cmFpbmVlLXByb2plY3RzL3NyY1xcYXBwXFxzZWxlY3RzXFxzZWxlY3RzXFxzZWxlY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWxlY3RzL3NlbGVjdHMvc2VsZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0U7RUFDRSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3RzL3NlbGVjdHMvc2VsZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgJi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxub3B0aW9uLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/selects/selects/selects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/selects/selects/selects.component.ts ***!
  \******************************************************/
/*! exports provided: SelectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsComponent", function() { return SelectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SelectsComponent = /** @class */ (function () {
    function SelectsComponent(selectsConst) {
        this.selectsConst = selectsConst;
        this.selects = [];
        this.selectsTagged = [];
        this.selectsDisplayed = [];
        this.selectsValues = [];
        this.selects = selectsConst.selects;
        this.selectsTagActive = this.selects[0].rotatingQuestionsTag;
        this.buttonAdd = false;
        this.buttonRemove = false;
    }
    SelectsComponent.prototype.ngOnInit = function () {
        this.initSelects();
    };
    SelectsComponent.prototype.initSelects = function () {
        this.loadSelectsTagged();
        this.loadSelectsDisplayed();
        this.loadSelectsValues();
    };
    SelectsComponent.prototype.loadSelectsTagged = function () {
        var _this = this;
        this.selectsTagged = [];
        this.selects.forEach(function (element) {
            if (_this.selectsTagActive === element.rotatingQuestionsTag) {
                _this.selectsTagged.push(element);
            }
        });
        // Check whether to enable more button
        if (this.selectsTagged.length > 1) {
            this.buttonAdd = true;
        }
    };
    SelectsComponent.prototype.loadSelectsDisplayed = function () {
        this.selectsDisplayed = [];
        this.selectsDisplayed.push(this.selectsTagged[0]);
    };
    SelectsComponent.prototype.loadSelectsValues = function () {
        var _this = this;
        this.selectsValues = [];
        this.selectsDisplayed.forEach(function (element) {
            _this.selectsValues.push(element.varName);
        });
    };
    SelectsComponent.prototype.selectChange = function (val, index, selIndex) {
        this.selectsValues[index] = this.selectElements._results[index].nativeElement.value;
        // switch to another tag
        if (index === 0 && this.selectsTagActive !== this.selects[selIndex].rotatingQuestionsTag) {
            this.selectsTagActive = this.selects[selIndex].rotatingQuestionsTag;
            this.initSelects();
        }
    };
    SelectsComponent.prototype.addSelect = function () {
        var lengthOfDisplayed = this.selectsDisplayed.length;
        var lengthOfTag = this.selectsTagged.length;
        lengthOfDisplayed < lengthOfTag
            ? this.selectsDisplayed.push(this.selectsTagged[lengthOfDisplayed])
            : (this.buttonAdd = false);
        if (this.selectsTagged.length === this.selectsDisplayed.length) {
            this.buttonAdd = false;
        }
        this.buttonRemove = true;
        // TODO: remove setting value.
        // Set value
        // for (const el of this.selectsTagged) {
        //   if (!(this.selectsValues.indexOf(el.varName) > -1)) {
        //     this.selectsValues.push(el.varName);
        //     break;
        //   }
        // }
    };
    SelectsComponent.prototype.removeSelect = function (i) {
        this.selectsDisplayed.splice(i, 1);
        this.selectsValues.splice(i, 1);
        this.buttonAdd = true;
        if (this.selectsDisplayed.length === 1) {
            this.buttonRemove = false;
        }
    };
    return SelectsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=selects-selects-module-ngfactory-es5.js.map