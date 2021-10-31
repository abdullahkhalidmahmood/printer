require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("~@finalsite/rich-text-editor/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@finalsite/rich-text-editor/css/default.css"));
global.registerModule("@finalsite/rich-text-editor/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@finalsite/rich-text-editor/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"import","import":"'~@finalsite/rich-text-editor/css/default.css'"},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["#editor"],"declarations":[{"type":"declaration","property":"margin","value":"0 10px"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".cke_skin_kama span.cke_browser_webkit",".cke_skin_kama span.cke_browser_gecko18"],"declarations":[{"type":"declaration","property":"outline","value":"none !important"}]},{"type":"rule","selectors":[".cke_float"],"declarations":[{"type":"declaration","property":"display","value":"none !important"}]},{"type":"rule","selectors":["[contenteditable]:focus"],"declarations":[{"type":"declaration","property":"outline","value":"0px solid transparent"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/components/home/home.component.ts");
/* harmony import */ var _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/components/main-editor/main-editor.component.ts");






const routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "editor", component: _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__["MainEditorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-app",
                templateUrl: "./app.component.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/components/home/home.component.ts");
/* harmony import */ var _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/main-editor/main-editor.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__["MainEditorComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__["MainEditorComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");




function HomeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r1.date);
} }
Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["registerElement"])('Fab', () => __webpack_require__("../node_modules/@nstudio/nativescript-floatingactionbutton/fab.js").Fab);
class HomeComponent {
    constructor(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.items = [
            { name: "Note 1", date: "20/9/2021" },
            { name: "Note 2", date: "22/9/2021" },
            { name: "Note 3", date: "11/9/2021" },
            { name: "Note 4", date: "10/9/2021" },
            { name: "Note 5", date: "09/8/2021" },
            { name: "Note 6", date: "01/8/2021" },
            { name: "Note 7", date: "29/3/2021" },
            { name: "Note 8", date: "20/9/2021" },
        ];
    }
    ngOnInit() {
    }
    routeToEditor() {
        this.routerExtensions.navigate(['/editor', {
                transition: { name: 'slide' }
            }]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ns-home"]], decls: 12, vars: 1, consts: [["orientation", "horizontal", "horizontalAlignment", "left"], ["text", "Notes", "textWrap", "true", 1, "rb-16"], ["width", "100%", "height", "100%"], ["row", "*", "columns", "2*,*", "height", "5%", "paddingTop", "8", 1, "rb-16"], ["col", "0", "text", "Title", "marginLeft", "10"], ["col", "1", "text", "Created"], ["height", "90%"], [3, "items"], ["height", "5%"], ["icon", "res://icon", "rippleColor", "#f1f1f1", 1, "fab-button", 3, "tap"], ["row", "*", "columns", "2*,*"], ["col", "0", 3, "text"], ["col", "1", 3, "text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "StackLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "StackLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "GridLayout", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "StackLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ListView", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_template_9_Template, 3, 2, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "StackLayout", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "FAB", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function HomeComponent_Template_FAB_tap_11_listener() { return ctx.routeToEditor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ListViewComponent"]], styles: [".text[_ngcontent-%COMP%] {\n  color: black; }\n\n.fab-button[_ngcontent-%COMP%] {\n  height: 70;\n  width: 70;\n  margin: 0 5 0 0;\n  \n  horizontal-align: right;\n  vertical-align: bottom; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }]; }, null); })();


/***/ }),

/***/ "./app/components/main-editor/main-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainEditorComponent", function() { return MainEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class MainEditorComponent {
    constructor() {
        this.webViewSrc = `<div id="editor" contenteditable="true">xxxxxxxxxxxxx xxxxx x x </div>`;
    }
    ngOnInit() {
    }
}
MainEditorComponent.ɵfac = function MainEditorComponent_Factory(t) { return new (t || MainEditorComponent)(); };
MainEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainEditorComponent, selectors: [["ns-main-editor"]], decls: 9, vars: 1, consts: [["orientation", "horizontal", "horizontalAlignment", "left"], ["text", "New Note", "textWrap", "true", 1, "rb-16"], ["android.systemIcon", "ic_menu_share", "android.position", "popup", "text", "Find Printer"], ["android.systemIcon", "ic_menu_share", "android.position", "popup", "text", "Settings"], ["android.systemIcon", "ic_menu_share", "android.position", "popup", "text", "About"], ["width", "100%", "height", "100%"], ["height", "70%", "backgroundColor", "#fafafa"], ["height", "80%", "width", "95%", "marginTop", "10", 3, "src"]], template: function MainEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "StackLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ActionItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ActionItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ActionItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "StackLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "StackLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "WebView", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.webViewSrc);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ActionItemDirective"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-main-editor',
                templateUrl: './main-editor.component.html',
                styleUrls: ['./main-editor.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLWVkaXRvci9tYWluLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi1lZGl0b3IvbWFpbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ+L3BhY2thZ2UuanNvblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dBQWlFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3hLLGdFQUFnRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN2SyxvRUFBb0UsbUJBQU8sQ0FBQyxvSUFBa0c7QUFDOUssbUVBQW1FLG1CQUFPLENBQUMsb0lBQWtHO0FBQzdLLDRFQUE0RSxtQkFBTyxDQUFDLDRJQUEwRztBQUM5TCwyRUFBMkUsbUJBQU8sQ0FBQyw0SUFBMEcsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFr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QUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7Ozs7Ozs7OztBRVpEO0FBQUE7QUFBQTtBQUFBO0FBQWtEOzs7QUFPM0MsTUFBTSxtQkFBbUI7SUFLOUI7UUFIQSxlQUFVLEdBQUcsd0VBQXdFO0lBR3JFLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O3NGQVJVLG1CQUFtQjttR0FBbkIsbUJBQW1CO1FDUGhDLDRFQUNJO1FBQUEsaUZBQ0k7UUFBQSxzRUFBNkQ7UUFDakUsNERBQWM7UUFDZCwyRUFBeUc7UUFDekcsMkVBQXFHO1FBQ3JHLDJFQUFrRztRQUN0Ryw0REFBWTtRQUNaLGlGQUNJO1FBQUEsaUZBQ0k7UUFBQSx3RUFDVTtRQUNkLDREQUFjO1FBQ2xCLDREQUFjOztRQUhHLDBEQUFrQjtRQUFsQiwrRUFBa0I7OzZGREh0QixtQkFBbUI7Y0FML0IsdURBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7Ozs7Ozs7Ozs7Ozs7O0FFSEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBZ0Y7QUFDTjtBQUMxRSwrREFBc0U7QUFDdEUseURBQXlEO0FBQ3pELGtDQUF5RTtBQUN6RSxpRUFBd0U7QUFDeEUsbUJBQW1GO0FBQ25GLGNBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p6RCwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBmaW5hbHNpdGUvcmljaC10ZXh0LWVkaXRvci9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAZmluYWxzaXRlL3JpY2gtdGV4dC1lZGl0b3IvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBmaW5hbHNpdGUvcmljaC10ZXh0LWVkaXRvci9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAZmluYWxzaXRlL3JpY2gtdGV4dC1lZGl0b3IvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGUgXFxuTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL25hdGl2ZXNjcmlwdC90aGVtZVxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AZmluYWxzaXRlL3JpY2gtdGV4dC1lZGl0b3IvY3NzL2RlZmF1bHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgYWxsIEJ1dHRvbnMgdGhhdCBoYXZlIHRoZVxcblxcXCItcHJpbWFyeVxcXCIgY2xhc3MgbW9kaWZpZXIuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI2VkaXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjAgMTBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNrZV9za2luX2thbWEgc3Bhbi5ja2VfYnJvd3Nlcl93ZWJraXRcIixcIi5ja2Vfc2tpbl9rYW1hIHNwYW4uY2tlX2Jyb3dzZXJfZ2Vja28xOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm91dGxpbmVcIixcInZhbHVlXCI6XCJub25lICFpbXBvcnRhbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY2tlX2Zsb2F0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZGlzcGxheVwiLFwidmFsdWVcIjpcIm5vbmUgIWltcG9ydGFudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIltjb250ZW50ZWRpdGFibGVdOmZvY3VzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3V0bGluZVwiLFwidmFsdWVcIjpcIjBweCBzb2xpZCB0cmFuc3BhcmVudFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLWVkaXRvci9tYWluLWVkaXRvci5jb21wb25lbnRcIjtcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImVkaXRvclwiLCBjb21wb25lbnQ6IE1haW5FZGl0b3JDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiPEdyaWRMYXlvdXQ+XG4gIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG48L0dyaWRMYXlvdXQ+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21haW4tZWRpdG9yL21haW4tZWRpdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE1haW5FZGl0b3JDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxucmVnaXN0ZXJFbGVtZW50KFxuICAnRmFiJyxcbiAgKCkgPT4gcmVxdWlyZSgnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJykuRmFiXG4pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zID0gW1xuICAgIHsgbmFtZTogXCJOb3RlIDFcIixkYXRlOlwiMjAvOS8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDJcIixkYXRlOlwiMjIvOS8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDNcIixkYXRlOlwiMTEvOS8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDRcIixkYXRlOlwiMTAvOS8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDVcIixkYXRlOlwiMDkvOC8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDZcIixkYXRlOlwiMDEvOC8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDdcIixkYXRlOlwiMjkvMy8yMDIxXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDhcIixkYXRlOlwiMjAvOS8yMDIxXCJ9LFxuICAgIFxuXG4gIF1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyByb3V0ZVRvRWRpdG9yKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2VkaXRvcicsIHtcbiAgICAgIHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlJyB9XG4gICAgfV0pO1xuICB9XG5cbn1cbiIsIjxBY3Rpb25CYXI+XG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiPlxuICAgIDxMYWJlbCB0ZXh0PVwiTm90ZXNcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInJiLTE2XCI+PC9MYWJlbD5cbiAgPC9TdGFja0xheW91dD5cbjwvQWN0aW9uQmFyPlxuXG48U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuXG4gICAgPEdyaWRMYXlvdXQgcm93PVwiKlwiIGNvbHVtbnM9XCIyKiwqXCIgIGhlaWdodD1cIjUlXCIgcGFkZGluZ1RvcD04IGNsYXNzPVwicmItMTZcIj5cbiAgICAgIDxMYWJlbCBjb2w9XCIwXCIgdGV4dD1cIlRpdGxlXCIgbWFyZ2luTGVmdD1cIjEwXCI+PC9MYWJlbD5cbiAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIkNyZWF0ZWRcIj48L0xhYmVsPlxuICAgIDwvR3JpZExheW91dD4gXG5cbiAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjkwJVwiPlxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiaXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIipcIiBjb2x1bW5zPVwiMiosKlwiPlxuICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLm5hbWVcIiBjb2w9XCIwXCI+PC9MYWJlbD5cbiAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5kYXRlXCIgY29sPVwiMVwiPjwvTGFiZWw+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9MaXN0Vmlldz5cbiAgPC9TdGFja0xheW91dD5cblxuICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiNSVcIj5cbiAgICA8RkFCIGljb249XCJyZXM6Ly9pY29uXCIgcmlwcGxlQ29sb3I9XCIjZjFmMWYxXCIgY2xhc3M9XCJmYWItYnV0dG9uXCIgKHRhcCk9XCJyb3V0ZVRvRWRpdG9yKClcIiA+PC9GQUI+XG4gIDwvU3RhY2tMYXlvdXQ+XG48L1N0YWNrTGF5b3V0PiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLW1haW4tZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4tZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi1lZGl0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW5FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHdlYlZpZXdTcmMgPSBgPGRpdiBpZD1cImVkaXRvclwiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj54eHh4eHh4eHh4eHh4IHh4eHh4IHggeCA8L2Rpdj5gXG4gICBcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIjxBY3Rpb25CYXI+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiTmV3IE5vdGVcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInJiLTE2XCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxBY3Rpb25JdGVtIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVcIiBhbmRyb2lkLnBvc2l0aW9uPVwicG9wdXBcIiB0ZXh0PVwiRmluZCBQcmludGVyXCI+PC9BY3Rpb25JdGVtPlxuICAgIDxBY3Rpb25JdGVtIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVcIiBhbmRyb2lkLnBvc2l0aW9uPVwicG9wdXBcIiB0ZXh0PVwiU2V0dGluZ3NcIj48L0FjdGlvbkl0ZW0+XG4gICAgPEFjdGlvbkl0ZW0gYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9zaGFyZVwiIGFuZHJvaWQucG9zaXRpb249XCJwb3B1cFwiIHRleHQ9XCJBYm91dFwiPjwvQWN0aW9uSXRlbT5cbjwvQWN0aW9uQmFyPlxuPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiNzAlXCIgYmFja2dyb3VuZENvbG9yPVwiI2ZhZmFmYVwiPlxuICAgICAgICA8V2ViVmlldyBbc3JjXT1cIndlYlZpZXdTcmNcIiBoZWlnaHQ9XCI4MCVcIiB3aWR0aD1cIjk1JVwiIG1hcmdpblRvcD0xMD5cbiAgICAgICAgPC9XZWJWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG48L1N0YWNrTGF5b3V0PiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==