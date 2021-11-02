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
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["#editor"],"declarations":[{"type":"declaration","property":"margin","value":"0 10px"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".cke_skin_kama span.cke_browser_webkit",".cke_skin_kama span.cke_browser_gecko18"],"declarations":[{"type":"declaration","property":"outline","value":"none !important"}]},{"type":"rule","selectors":[".cke_float"],"declarations":[{"type":"declaration","property":"display","value":"none !important"}]},{"type":"rule","selectors":["[contenteditable]:focus"],"declarations":[{"type":"declaration","property":"outline","value":"0px solid transparent"}]}],"parsingErrors":[]}};;
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



// require ("~froala-editor/")
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
/* harmony import */ var _nota_nativescript_webview_ext_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nota/nativescript-webview-ext/__ivy_ngcc__/angular/fesm2015/nota-webview-ext-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/components/home/home.component.ts");
/* harmony import */ var _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/components/main-editor/main-editor.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _nota_nativescript_webview_ext_angular__WEBPACK_IMPORTED_MODULE_2__["WebViewExtModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_6__["MainEditorComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _nota_nativescript_webview_ext_angular__WEBPACK_IMPORTED_MODULE_2__["WebViewExtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _nota_nativescript_webview_ext_angular__WEBPACK_IMPORTED_MODULE_2__["WebViewExtModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_6__["MainEditorComponent"]
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



// require('../../../assets/froala-editor/js/froala_editor.min.js')
// import FroalaEditor from 'froala-editor'
class MainEditorComponent {
    constructor() {
        this.webViewSrc = `<div id="editor" contenteditable="true">xxxxxxxxxxxxx xxxxx x x </div>`;
    }
    ngOnInit() {
        // Initialize editor.
        //  FroalaEditor('#edit');
        // console.log("FR===>>", FroalaEditor)
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "GridLayout", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "WebViewExt", 7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLWVkaXRvci9tYWluLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi1lZGl0b3IvbWFpbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ+L3BhY2thZ2UuanNvblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dBQWlFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3hLLGdFQUFnRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN2SyxvRUFBb0UsbUJBQU8sQ0FBQyxvSUFBa0c7QUFDOUssbUVBQW1FLG1CQUFPLENBQUMsb0lBQWtHLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLGtqQkFBa2pCLEVBQUUsaUVBQWlFLEVBQUUsb0VBQW9FLEVBQUUsMkpBQTJKLEVBQUUseUlBQXlJLEVBQUUsK0RBQStE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UUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOzs7Ozs7Ozs7O0FFWkQ7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7OztBQUNsRCxtRUFBbUU7QUFDbkUsMkNBQTJDO0FBTXBDLE1BQU0sbUJBQW1CO0lBSzlCO1FBSEEsZUFBVSxHQUFHLHdFQUF3RTtJQUdyRSxDQUFDO0lBRWpCLFFBQVE7UUFDTixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHVDQUF1QztJQUN6QyxDQUFDOztzRkFYVSxtQkFBbUI7bUdBQW5CLG1CQUFtQjtRQ1JoQyw0RUFDSTtRQUFBLGlGQUNJO1FBQUEsc0VBQTZEO1FBQ2pFLDREQUFjO1FBQ2QsMkVBQXlHO1FBQ3pHLDJFQUFxRztRQUNyRywyRUFBa0c7UUFDdEcsNERBQVk7UUFDWixnRkFDSTtRQUFBLGdGQUNJO1FBQUEsMkVBQ2E7UUFDakIsNERBQWE7UUFDakIsNERBQWE7O1FBSE8sMERBQWtCO1FBQWxCLCtFQUFrQjs7NkZERnpCLG1CQUFtQjtjQUwvQix1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7QUVKRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxjQUFnRjtBQUNOO0FBQzFFLCtEQUFzRTtBQUN0RSx5REFBeUQ7QUFDekQsa0NBQXlFO0FBQ3pFLGlFQUF3RTtBQUN4RSxtQkFBbUY7QUFDbkYsY0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnpELDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIFxcbk5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFBsYWNlIGFueSBDU1MgcnVsZXMgeW91IHdhbnQgdG8gYXBwbHkgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQgaGVyZS5cXG5UaGlzIGlzIHdoZXJlIHRoZSB2YXN0IG1ham9yaXR5IG9mIHlvdXIgQ1NTIGNvZGUgZ29lcy4gXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcblRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBCdXR0b25zIHRoYXQgaGF2ZSB0aGVcXG5cXFwiLXByaW1hcnlcXFwiIGNsYXNzIG1vZGlmaWVyLlxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNlZGl0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwIDEwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ja2Vfc2tpbl9rYW1hIHNwYW4uY2tlX2Jyb3dzZXJfd2Via2l0XCIsXCIuY2tlX3NraW5fa2FtYSBzcGFuLmNrZV9icm93c2VyX2dlY2tvMThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvdXRsaW5lXCIsXCJ2YWx1ZVwiOlwibm9uZSAhaW1wb3J0YW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNrZV9mbG9hdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImRpc3BsYXlcIixcInZhbHVlXCI6XCJub25lICFpbXBvcnRhbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJbY29udGVudGVkaXRhYmxlXTpmb2N1c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm91dGxpbmVcIixcInZhbHVlXCI6XCIwcHggc29saWQgdHJhbnNwYXJlbnRcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1lZGl0b3IvbWFpbi1lZGl0b3IuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcImhvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJlZGl0b3JcIiwgY29tcG9uZW50OiBNYWluRWRpdG9yQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gcmVxdWlyZSAoXCJ+ZnJvYWxhLWVkaXRvci9cIilcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCI8R3JpZExheW91dD5cbiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cbjwvR3JpZExheW91dD5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFdlYlZpZXdFeHRNb2R1bGUgfSBmcm9tIFwiQG5vdGEvbmF0aXZlc2NyaXB0LXdlYnZpZXctZXh0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi1lZGl0b3IvbWFpbi1lZGl0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgV2ViVmlld0V4dE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTWFpbkVkaXRvckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5yZWdpc3RlckVsZW1lbnQoXG4gICdGYWInLFxuICAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nKS5GYWJcbik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXMgPSBbXG4gICAgeyBuYW1lOiBcIk5vdGUgMVwiLGRhdGU6XCIyMC85LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgMlwiLGRhdGU6XCIyMi85LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgM1wiLGRhdGU6XCIxMS85LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgNFwiLGRhdGU6XCIxMC85LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgNVwiLGRhdGU6XCIwOS84LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgNlwiLGRhdGU6XCIwMS84LzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgN1wiLGRhdGU6XCIyOS8zLzIwMjFcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgOFwiLGRhdGU6XCIyMC85LzIwMjFcIn0sXG4gICAgXG5cbiAgXVxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIHJvdXRlVG9FZGl0b3IoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvZWRpdG9yJywge1xuICAgICAgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGUnIH1cbiAgICB9XSk7XG4gIH1cblxufVxuIiwiPEFjdGlvbkJhcj5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCI+XG4gICAgPExhYmVsIHRleHQ9XCJOb3Rlc1wiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicmItMTZcIj48L0xhYmVsPlxuICA8L1N0YWNrTGF5b3V0PlxuPC9BY3Rpb25CYXI+XG5cbjxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG5cbiAgICA8R3JpZExheW91dCByb3c9XCIqXCIgY29sdW1ucz1cIjIqLCpcIiAgaGVpZ2h0PVwiNSVcIiBwYWRkaW5nVG9wPTggY2xhc3M9XCJyYi0xNlwiPlxuICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiVGl0bGVcIiBtYXJnaW5MZWZ0PVwiMTBcIj48L0xhYmVsPlxuICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiQ3JlYXRlZFwiPjwvTGFiZWw+XG4gICAgPC9HcmlkTGF5b3V0PiBcblxuICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiOTAlXCI+XG4gICAgPExpc3RWaWV3IFtpdGVtc109XCJpdGVtc1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiKlwiIGNvbHVtbnM9XCIyKiwqXCI+XG4gICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0ubmFtZVwiIGNvbD1cIjBcIj48L0xhYmVsPlxuICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLmRhdGVcIiBjb2w9XCIxXCI+PC9MYWJlbD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L0xpc3RWaWV3PlxuICA8L1N0YWNrTGF5b3V0PlxuXG4gIDxTdGFja0xheW91dCBoZWlnaHQ9XCI1JVwiPlxuICAgIDxGQUIgaWNvbj1cInJlczovL2ljb25cIiByaXBwbGVDb2xvcj1cIiNmMWYxZjFcIiBjbGFzcz1cImZhYi1idXR0b25cIiAodGFwKT1cInJvdXRlVG9FZGl0b3IoKVwiID48L0ZBQj5cbiAgPC9TdGFja0xheW91dD5cbjwvU3RhY2tMYXlvdXQ+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9mcm9hbGEtZWRpdG9yL2pzL2Zyb2FsYV9lZGl0b3IubWluLmpzJylcbi8vIGltcG9ydCBGcm9hbGFFZGl0b3IgZnJvbSAnZnJvYWxhLWVkaXRvcidcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLW1haW4tZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4tZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi1lZGl0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW5FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHdlYlZpZXdTcmMgPSBgPGRpdiBpZD1cImVkaXRvclwiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj54eHh4eHh4eHh4eHh4IHh4eHh4IHggeCA8L2Rpdj5gXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEluaXRpYWxpemUgZWRpdG9yLlxuICAgIC8vICBGcm9hbGFFZGl0b3IoJyNlZGl0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coXCJGUj09PT4+XCIsIEZyb2FsYUVkaXRvcilcbiAgfVxuXG59XG4iLCI8QWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIk5ldyBOb3RlXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJyYi0xNlwiPjwvTGFiZWw+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8QWN0aW9uSXRlbSBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X3NoYXJlXCIgYW5kcm9pZC5wb3NpdGlvbj1cInBvcHVwXCIgdGV4dD1cIkZpbmQgUHJpbnRlclwiPjwvQWN0aW9uSXRlbT5cbiAgICA8QWN0aW9uSXRlbSBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X3NoYXJlXCIgYW5kcm9pZC5wb3NpdGlvbj1cInBvcHVwXCIgdGV4dD1cIlNldHRpbmdzXCI+PC9BY3Rpb25JdGVtPlxuICAgIDxBY3Rpb25JdGVtIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVcIiBhbmRyb2lkLnBvc2l0aW9uPVwicG9wdXBcIiB0ZXh0PVwiQWJvdXRcIj48L0FjdGlvbkl0ZW0+XG48L0FjdGlvbkJhcj5cbjxHcmlkTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICA8R3JpZExheW91dCBoZWlnaHQ9XCI3MCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjZmFmYWZhXCI+XG4gICAgICAgIDxXZWJWaWV3RXh0IFtzcmNdPVwid2ViVmlld1NyY1wiIGhlaWdodD1cIjgwJVwiIHdpZHRoPVwiOTUlXCIgbWFyZ2luVG9wPTEwPlxuICAgICAgICA8L1dlYlZpZXdFeHQ+XG4gICAgPC9HcmlkTGF5b3V0PlxuPC9HcmlkTGF5b3V0PiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==