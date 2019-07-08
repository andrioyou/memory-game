(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selects-selects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selects/selects/selects.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selects/selects/selects.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let select of selectsDisplayed; let i = index\">\n    <div class=\"col-lg-6\">\n      <select\n        #selectEl\n        (change)=\"selectChange($event.target.value, i, $event.srcElement.selectedIndex)\"\n        [value]=\"selectsValues[i]\"\n      >\n        <option\n          *ngFor=\"let selectEl of selects; let iEl = index\"\n          value=\"{{ selectEl.varName }}\"\n          [ngClass]=\"{ hide: selectEl.rotatingQuestionsTag !== selectsTagActive && i !== 0 }\"\n          [disabled]=\"selectsValues.indexOf(selectEl.varName) >= 0 && selectsValues.indexOf(selectEl.varName) !== i\"\n        >\n          {{ selectEl.title }}</option\n        >\n      </select>\n      <button *ngIf=\"buttonRemove\" (click)=\"removeSelect(i)\">Remove</button>\n    </div>\n    <div class=\"col-lg-6\">\n      <select>\n        <option *ngFor=\"let answer of select.answerOptions\" value=\"{{ answer }}\">{{ answer }} </option>\n      </select>\n    </div>\n  </div>\n  <button *ngIf=\"buttonAdd\" (click)=\"addSelect()\">Show more</button>\n</div>\n"

/***/ }),

/***/ "./src/app/selects/selects-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/selects/selects-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SelectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsRoutingModule", function() { return SelectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/selects/selects/selects.component.ts");




const routes = [
    {
        path: '',
        component: _selects_selects_component__WEBPACK_IMPORTED_MODULE_3__["SelectsComponent"]
    }
];
let SelectsRoutingModule = class SelectsRoutingModule {
};
SelectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SelectsRoutingModule);



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
class SELECTS {
    constructor() {
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
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _selects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selects-routing.module */ "./src/app/selects/selects-routing.module.ts");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/selects/selects/selects.component.ts");
/* harmony import */ var _selects_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selects.const */ "./src/app/selects/selects.const.ts");






let SelectsModule = class SelectsModule {
};
SelectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_selects_selects_component__WEBPACK_IMPORTED_MODULE_4__["SelectsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _selects_routing_module__WEBPACK_IMPORTED_MODULE_3__["SelectsRoutingModule"]],
        providers: [_selects_const__WEBPACK_IMPORTED_MODULE_5__["SELECTS"]]
    })
], SelectsModule);



/***/ }),

/***/ "./src/app/selects/selects/selects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/selects/selects/selects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 30px 0;\n}\n\noption.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0cy9zZWxlY3RzL0M6XFxVc2Vyc1xcYS5ob3Nob3Zza3lpXFxEZXNrdG9wXFx0cmFpbmVlLXByb2plY3RzL3NyY1xcYXBwXFxzZWxlY3RzXFxzZWxlY3RzXFxzZWxlY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWxlY3RzL3NlbGVjdHMvc2VsZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0U7RUFDRSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3RzL3NlbGVjdHMvc2VsZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgJi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxub3B0aW9uLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _selects_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selects.const */ "./src/app/selects/selects.const.ts");



let SelectsComponent = class SelectsComponent {
    constructor(selectsConst) {
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
    ngOnInit() {
        this.initSelects();
    }
    initSelects() {
        this.loadSelectsTagged();
        this.loadSelectsDisplayed();
        this.loadSelectsValues();
    }
    loadSelectsTagged() {
        this.selectsTagged = [];
        this.selects.forEach((element) => {
            if (this.selectsTagActive === element.rotatingQuestionsTag) {
                this.selectsTagged.push(element);
            }
        });
        // Check whether to enable more button
        if (this.selectsTagged.length > 1) {
            this.buttonAdd = true;
        }
    }
    loadSelectsDisplayed() {
        this.selectsDisplayed = [];
        this.selectsDisplayed.push(this.selectsTagged[0]);
    }
    loadSelectsValues() {
        this.selectsValues = [];
        this.selectsDisplayed.forEach((element) => {
            this.selectsValues.push(element.varName);
        });
    }
    selectChange(val, index, selIndex) {
        this.selectsValues[index] = this.selectElements._results[index].nativeElement.value;
        // switch to another tag
        if (index === 0 && this.selectsTagActive !== this.selects[selIndex].rotatingQuestionsTag) {
            this.selectsTagActive = this.selects[selIndex].rotatingQuestionsTag;
            this.initSelects();
        }
    }
    addSelect() {
        const lengthOfDisplayed = this.selectsDisplayed.length;
        const lengthOfTag = this.selectsTagged.length;
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
    }
    removeSelect(i) {
        this.selectsDisplayed.splice(i, 1);
        this.selectsValues.splice(i, 1);
        this.buttonAdd = true;
        if (this.selectsDisplayed.length === 1) {
            this.buttonRemove = false;
        }
    }
};
SelectsComponent.ctorParameters = () => [
    { type: _selects_const__WEBPACK_IMPORTED_MODULE_2__["SELECTS"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('selectEl')
], SelectsComponent.prototype, "selectElements", void 0);
SelectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selects',
        template: __webpack_require__(/*! raw-loader!./selects.component.html */ "./node_modules/raw-loader/index.js!./src/app/selects/selects/selects.component.html"),
        styles: [__webpack_require__(/*! ./selects.component.scss */ "./src/app/selects/selects/selects.component.scss")]
    })
], SelectsComponent);



/***/ })

}]);
//# sourceMappingURL=selects-selects-module-es2015.js.map