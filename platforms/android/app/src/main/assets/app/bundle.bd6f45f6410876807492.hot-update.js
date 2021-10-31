webpackHotUpdate("bundle",{

/***/ "./app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");




function HomeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r1.name);
} }
Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["registerElement"])('Fab', () => __webpack_require__("../node_modules/@nstudio/nativescript-floatingactionbutton/fab.js").Fab);
class HomeComponent {
    constructor(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.items = [
            { name: "Note 1" },
            { name: "Note 2" },
            { name: "Note 3" },
            { name: "Note 4" },
            { name: "Note 5" },
            { name: "Note 6" },
            { name: "Note 7" },
            { name: "Note 8" },
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ns-home"]], decls: 12, vars: 1, consts: [["orientation", "horizontal", "horizontalAlignment", "left"], ["text", "Notes", "textWrap", "true", 1, "rb-16"], ["width", "100%", "height", "100%"], ["height", "5%", "rows", "*", "columns", "*,*"], ["col", "0", "text", "Title"], ["col", "1", "text", "Created"], ["height", "90%"], [3, "items"], ["icon", "res://icon", "rippleColor", "#f1f1f1", 1, "fab-button", 3, "tap"], ["row", "*", "columns", "*,*"], [3, "text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_template_9_Template, 2, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "FAB", 8);
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUN3Qjs7OztJQ2VsRSxnRkFDRTtJQUFBLHVFQUFrQztJQUNwQyw0REFBYTs7O0lBREosMERBQWtCO0lBQWxCLDhFQUFrQjs7QURkbkMsNkVBQWUsQ0FDYixLQUFLLEVBQ0wsR0FBRyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxtRUFBNEMsQ0FBQyxDQUFDLEdBQUcsQ0FDaEUsQ0FBQztBQU9LLE1BQU0sYUFBYTtJQWdCeEIsWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWZyQyxVQUFLLEdBQUc7WUFDYixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDakIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNqQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDakIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNqQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDakIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1NBR2xCO0lBS0csQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUN6QyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7MEVBM0JVLGFBQWE7NkZBQWIsYUFBYTtRQ2IxQiw0RUFDRTtRQUFBLGlGQUNFO1FBQUEsc0VBQTBEO1FBQzVELDREQUFjO1FBQ2hCLDREQUFZO1FBRVosaUZBRUk7UUFBQSxnRkFDRTtRQUFBLHNFQUFvQztRQUNwQyxzRUFBc0M7UUFDeEMsNERBQWE7UUFFZixpRkFDRTtRQUFBLDhFQUNFO1FBQUEsc0hBSWM7UUFDaEIsNERBQVc7UUFFYiw0REFBYztRQUVkLCtFQUNFO1FBQUEsMEVBQXdGO1FBQXhCLCtIQUFPLG1CQUFlLElBQUM7UUFBQyw0REFBTTtRQUNoRyw0REFBYztRQUNoQiw0REFBYzs7UUFiQSwwREFBZTtRQUFmLDRFQUFlOzs2RkREaEIsYUFBYTtjQUx6Qix1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQyIsImZpbGUiOiJidW5kbGUuYmQ2ZjQ1ZjY0MTA4NzY4MDc0OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5yZWdpc3RlckVsZW1lbnQoXG4gICdGYWInLFxuICAoKSA9PiByZXF1aXJlKCdAbnN0dWRpby9uYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nKS5GYWJcbik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXMgPSBbXG4gICAgeyBuYW1lOiBcIk5vdGUgMVwifSxcbiAgICB7IG5hbWU6IFwiTm90ZSAyXCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDNcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgNFwifSxcbiAgICB7IG5hbWU6IFwiTm90ZSA1XCJ9LFxuICAgIHsgbmFtZTogXCJOb3RlIDZcIn0sXG4gICAgeyBuYW1lOiBcIk5vdGUgN1wifSxcbiAgICB7IG5hbWU6IFwiTm90ZSA4XCJ9LFxuICAgIFxuXG4gIF1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyByb3V0ZVRvRWRpdG9yKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2VkaXRvcicsIHtcbiAgICAgIHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlJyB9XG4gICAgfV0pO1xuICB9XG5cbn1cbiIsIjxBY3Rpb25CYXI+XG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiPlxuICAgIDxMYWJlbCB0ZXh0PVwiTm90ZXNcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInJiLTE2XCI+PC9MYWJlbD5cbiAgPC9TdGFja0xheW91dD5cbjwvQWN0aW9uQmFyPlxuXG48U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuXG4gICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVwiNSVcIiByb3dzPVwiKlwiIGNvbHVtbnM9XCIqLCpcIj5cbiAgICAgIDxMYWJlbCBjb2w9XCIwXCIgdGV4dD1cIlRpdGxlXCI+PC9MYWJlbD5cbiAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIkNyZWF0ZWRcIj48L0xhYmVsPlxuICAgIDwvR3JpZExheW91dD4gXG5cbiAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjkwJVwiPlxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiaXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIipcIiBjb2x1bW5zPVwiKiwqXCI+XG4gICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0ubmFtZVwiPjwvTGFiZWw+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9MaXN0Vmlldz5cblxuICA8L1N0YWNrTGF5b3V0PlxuXG4gIDxTdGFja0xheW91dD5cbiAgICA8RkFCIGljb249XCJyZXM6Ly9pY29uXCIgcmlwcGxlQ29sb3I9XCIjZjFmMWYxXCIgY2xhc3M9XCJmYWItYnV0dG9uXCIgKHRhcCk9XCJyb3V0ZVRvRWRpdG9yKClcIj48L0ZBQj5cbiAgPC9TdGFja0xheW91dD5cbjwvU3RhY2tMYXlvdXQ+Il0sInNvdXJjZVJvb3QiOiIifQ==