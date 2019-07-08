(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["memory-game-memory-game-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/memory-game/memory-game/memory-game.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/memory-game/memory-game/memory-game.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"title\">Memory Game</h1>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xl-8 col-lg-10\">\n      <div class=\"caption\">\n        <select (change)=\"changeGridSize($event.target.value)\">\n          <option value=\"4\">4x4</option>\n          <option value=\"6\">6x6</option>\n          <option value=\"8\">8x8</option>\n        </select>\n        <p><span class=\"text\">Timer:</span> {{ stopwatch }}</p>\n        <p><span class=\"text\">Score:</span> {{ score }}</p>\n      </div>\n      <div class=\"list size-{{ gridSize }}\">\n        <div *ngFor=\"let item of gridLengthArr; let i = index\" class=\"item-wrap\">\n          <div\n            class=\"item\"\n            (click)=\"showItem(i)\"\n            [ngClass]=\"{ open: gridImages[i].show, opened: gridImages[i].opened }\"\n          >\n            <div class=\"img\" [style.background-image]=\"gridImages[i].url\"></div>\n          </div>\n        </div>\n        <div class=\"popup\" *ngIf=\"gridCompleted\">\n          <h3 class=\"popup-title\">Well done!</h3>\n          <p class=\"popup-time\">Your time: {{ stopwatch }}</p>\n          <p class=\"popup-score\">Your score: {{ score }}</p>\n          <button (click)=\"restartGrid()\">Restart</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/memory-game/memory-game-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/memory-game/memory-game-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MemoryGameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameRoutingModule", function() { return MemoryGameRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memory-game/memory-game.component */ "./src/app/memory-game/memory-game/memory-game.component.ts");




var routes = [
    {
        path: '',
        component: _memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_3__["MemoryGameComponent"]
    }
];
var MemoryGameRoutingModule = /** @class */ (function () {
    function MemoryGameRoutingModule() {
    }
    MemoryGameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MemoryGameRoutingModule);
    return MemoryGameRoutingModule;
}());



/***/ }),

/***/ "./src/app/memory-game/memory-game.module.ts":
/*!***************************************************!*\
  !*** ./src/app/memory-game/memory-game.module.ts ***!
  \***************************************************/
/*! exports provided: MemoryGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameModule", function() { return MemoryGameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _memory_game_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memory-game-routing.module */ "./src/app/memory-game/memory-game-routing.module.ts");
/* harmony import */ var _memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memory-game/memory-game.component */ "./src/app/memory-game/memory-game/memory-game.component.ts");





var MemoryGameModule = /** @class */ (function () {
    function MemoryGameModule() {
    }
    MemoryGameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_4__["MemoryGameComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _memory_game_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemoryGameRoutingModule"]]
        })
    ], MemoryGameModule);
    return MemoryGameModule;
}());



/***/ }),

/***/ "./src/app/memory-game/memory-game/memory-game.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/memory-game/memory-game/memory-game.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.title {\n  text-align: center;\n}\n\n.caption {\n  text-align: center;\n}\n\n.text {\n  display: inline-block;\n  width: 50px;\n}\n\n.list {\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  margin: 0 -5px -10px;\n}\n\n.list.size-6 .item-wrap {\n  flex-basis: 16.66%;\n}\n\n.list.size-8 .item-wrap {\n  flex-basis: 12.5%;\n}\n\n.item-wrap {\n  flex-basis: 25%;\n  padding: 0 5px 10px;\n}\n\n.item {\n  position: relative;\n  cursor: pointer;\n}\n\n.item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 1s;\n  background-color: #ddd;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n}\n\n.item:hover::before {\n  background-color: #c4c4c4;\n}\n\n.item.open, .item.opened {\n  cursor: default;\n}\n\n.item.open::before, .item.opened::before {\n  opacity: 0;\n}\n\n.img {\n  background-position: center;\n  background-size: cover;\n  padding-bottom: 100%;\n}\n\n.popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding-top: 60px;\n  width: 100%;\n  max-width: 300px;\n  height: 100%;\n  max-height: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtb3J5LWdhbWUvbWVtb3J5LWdhbWUvQzpcXFVzZXJzXFxhLmhvc2hvdnNreWlcXERlc2t0b3BcXHRyYWluZWUtcHJvamVjdHMvc3JjXFxhcHBcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZVxcbWVtb3J5LWdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbW9yeS1nYW1lL21lbW9yeS1nYW1lL21lbW9yeS1nYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW1vcnktZ2FtZS9tZW1vcnktZ2FtZS9DOlxcVXNlcnNcXGEuaG9zaG92c2t5aVxcRGVza3RvcFxcdHJhaW5lZS1wcm9qZWN0cy9zcmNcXGFzc2V0c1xcc2Nzc1xcZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDREY7O0FESUk7RUFDRSxrQkFBQTtBQ0ZOOztBRE9JO0VBQ0UsaUJBQUE7QUNMTjs7QURVQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEU0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkU5Q007RUYrQ04sV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUEo7O0FEV0k7RUFDRSx5QkFBQTtBQ1ROOztBRGFFO0VBRUUsZUFBQTtBQ1pKOztBRGNJO0VBQ0UsVUFBQTtBQ1pOOztBRGlCQTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ2RGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0Esc0JFaEZRO0VGaUZSLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS1nYW1lL21lbW9yeS1nYW1lL21lbW9yeS1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy9hc3NldHMvc2Nzcy9nbG9iYWwnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDAgLTVweCAtMTBweDtcclxuXHJcbiAgJi5zaXplLTYge1xyXG4gICAgLml0ZW0td3JhcCB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDE2LjY2JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2l6ZS04IHtcclxuICAgIC5pdGVtLXdyYXAge1xyXG4gICAgICBmbGV4LWJhc2lzOiAxMi41JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLXdyYXAge1xyXG4gIGZsZXgtYmFzaXM6IDI1JTtcclxuICBwYWRkaW5nOiAwIDVweCAxMHB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1saWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYy1saWdodCwgMTAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYub3BlbixcclxuICAmLm9wZW5lZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwIC01cHggLTEwcHg7XG59XG4ubGlzdC5zaXplLTYgLml0ZW0td3JhcCB7XG4gIGZsZXgtYmFzaXM6IDE2LjY2JTtcbn1cbi5saXN0LnNpemUtOCAuaXRlbS13cmFwIHtcbiAgZmxleC1iYXNpczogMTIuNSU7XG59XG5cbi5pdGVtLXdyYXAge1xuICBmbGV4LWJhc2lzOiAyNSU7XG4gIHBhZGRpbmc6IDAgNXB4IDEwcHg7XG59XG5cbi5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbn1cbi5pdGVtOmhvdmVyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xufVxuLml0ZW0ub3BlbiwgLml0ZW0ub3BlbmVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLml0ZW0ub3Blbjo6YmVmb3JlLCAuaXRlbS5vcGVuZWQ6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbWcge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIvLyBGT05UU1xyXG4kZi1wcmltYXJ5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIENPTE9SU1xyXG4kYy1ibGFjazogIzAwMDtcclxuJGMtd2hpdGU6ICNmZmY7XHJcbiRjLWxpZ2h0OiAjZGRkO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/memory-game/memory-game/memory-game.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/memory-game/memory-game/memory-game.component.ts ***!
  \******************************************************************/
/*! exports provided: MemoryGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameComponent", function() { return MemoryGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var MemoryGameComponent = /** @class */ (function () {
    function MemoryGameComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.images = [];
        this.stopwatch = 0;
        this.score = 0;
        this.gridImages = [];
        this.gridSize = 4;
        this.gridLength = 0;
        this.gridLengthArr = [];
        this.gridMaxLength = 32;
        this.gridCompleted = false;
        this.gridClickable = true;
        this.comparePictureId = null;
        this.compareIndex = null;
        this.transitionTime = 1000;
    }
    MemoryGameComponent.prototype.ngOnInit = function () {
        this.loadImagesUrls();
        this.loadGrid();
    };
    MemoryGameComponent.prototype.startStopwatch = function () {
        var _this = this;
        if (this.stopwatchInterval) {
            return;
        }
        this.stopwatchInterval = setInterval(function () {
            _this.stopwatch++;
        }, 1000);
    };
    MemoryGameComponent.prototype.stopStopwatch = function () {
        clearInterval(this.stopwatchInterval);
        this.stopwatchInterval = null;
    };
    MemoryGameComponent.prototype.clearStopwatch = function () {
        this.stopwatch = 0;
    };
    MemoryGameComponent.prototype.clearScore = function () {
        this.score = 0;
    };
    MemoryGameComponent.prototype.loadImagesUrls = function () {
        for (var i = 1; i <= this.gridMaxLength; i++) {
            var url = 'assets/images/img' + i + '.jpg';
            url = this.domSanitizer.bypassSecurityTrustStyle("url(" + url + ")");
            this.images.push(url);
        }
    };
    MemoryGameComponent.prototype.loadGrid = function () {
        this.gridLength = this.gridSize * this.gridSize;
        this.gridLengthArr = Array(this.gridLength)
            .fill(0)
            .map(function (x, i) { return i; });
        this.gridImages = [];
        for (var i = 0; i < this.gridLength; i++) {
            var imageIndex = Math.floor(i / 2);
            var gridImage = {
                url: this.images[imageIndex],
                pictureId: imageIndex,
                show: false,
                opened: false
            };
            this.gridImages.push(gridImage);
        }
        this.shuffleArray(this.gridImages);
    };
    MemoryGameComponent.prototype.changeGridSize = function (val) {
        var _this = this;
        this.compareIndex = null;
        this.comparePictureId = null;
        this.gridImages.forEach(function (item) {
            item.show = false;
            item.opened = false;
        });
        var time = this.transitionTime;
        if (!this.stopwatchInterval) {
            time = 0;
        }
        this.stopStopwatch();
        this.clearStopwatch();
        this.clearScore();
        setTimeout(function () {
            _this.gridSize = val;
            _this.loadGrid();
        }, time);
    };
    MemoryGameComponent.prototype.checkGridComplete = function () {
        var e_1, _a;
        var complete = true;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.gridImages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var image = _c.value;
                if (!image.opened) {
                    complete = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (complete) {
            this.gridComplete();
        }
    };
    MemoryGameComponent.prototype.gridComplete = function () {
        this.gridCompleted = true;
        this.stopStopwatch();
    };
    MemoryGameComponent.prototype.restartGrid = function () {
        this.changeGridSize(this.gridSize);
        this.gridCompleted = false;
    };
    MemoryGameComponent.prototype.showItem = function (index) {
        if (!this.gridClickable) {
            return;
        }
        this.startStopwatch();
        this.compareImagesPair(index);
        this.checkGridComplete();
    };
    MemoryGameComponent.prototype.compareImagesPair = function (index) {
        var _this = this;
        // if clicked is already showed
        if (index === this.compareIndex || this.gridImages[index].opened) {
            return;
        }
        // show item
        this.gridImages[index].show = true;
        if (this.comparePictureId === null || this.compareIndex === null) {
            this.comparePictureId = this.gridImages[index].pictureId;
            this.compareIndex = index;
        }
        else {
            var time = this.transitionTime;
            this.gridClickable = false;
            if (this.gridImages[index].pictureId === this.comparePictureId && this.compareIndex !== null) {
                this.gridImages[index].opened = true;
                this.gridImages[this.compareIndex].opened = true;
                time = 0;
                this.increaseScore();
            }
            setTimeout(function () {
                _this.gridImages[index].show = false;
                if (_this.compareIndex !== null) {
                    _this.gridImages[_this.compareIndex].show = false;
                }
                _this.comparePictureId = null;
                _this.compareIndex = null;
                _this.gridClickable = true;
            }, time);
        }
    };
    MemoryGameComponent.prototype.increaseScore = function () {
        var dif = Math.floor((100 - this.stopwatch) / 10);
        if (dif < 0) {
            dif = 0;
        }
        this.score += dif + 20;
    };
    MemoryGameComponent.prototype.shuffleArray = function (array) {
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    MemoryGameComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    MemoryGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memory-game',
            template: __webpack_require__(/*! raw-loader!./memory-game.component.html */ "./node_modules/raw-loader/index.js!./src/app/memory-game/memory-game/memory-game.component.html"),
            styles: [__webpack_require__(/*! ./memory-game.component.scss */ "./src/app/memory-game/memory-game/memory-game.component.scss")]
        })
    ], MemoryGameComponent);
    return MemoryGameComponent;
}());



/***/ })

}]);
//# sourceMappingURL=memory-game-memory-game-module-es5.js.map