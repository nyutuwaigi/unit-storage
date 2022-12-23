(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/settings/settings.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/settings/settings.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n   <!-- PROFILE -->\r\n   <div class=\"ion-padding\">\r\n    <img class=\"circle-pic\" src=\"{{profileImage}}\" />\r\n    <div style=\"margin: 20px;\" class=\"ion-text-center\">\r\n      <ion-label>\r\n        <h3>{{name}}</h3>\r\n        <h4>{{email}}</h4>\r\n        <h4>{{contact}} </h4>\r\n      </ion-label>\r\n    </div>\r\n  </div>\r\n    <ion-list>\r\n      <ion-list-header>\r\n        Account settings\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let p of adminPages\" [routerLink]=\"[p.url]\">\r\n        <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n        <ion-label>{{ p.title }}</ion-label>\r\n      </ion-item> \r\n    </ion-list>  \r\n    <!-- <ion-list class=\"list-space\">\r\n      <ion-list-header>\r\n       Notifications\r\n      </ion-list-header>\r\n      <ion-item routerLink=\"/send-notifications\">\r\n        <ion-icon slot=\"start\" name=\"rocket-outline\"></ion-icon>\r\n        <ion-label>Notify all users</ion-label>\r\n      </ion-item>\r\n      </ion-list> -->\r\n    <ion-item lines=\"none\" class=\"list-space\" (click)=\"logout()\">\r\n      <ion-label style=\"font-weight: bold; color: red;\">Log out</ion-label>\r\n    </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/unitTabs/settings/settings-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/unitTabs/settings/settings-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/unitTabs/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/settings/settings.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/unitTabs/settings/settings.module.ts ***!
  \************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/unitTabs/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/unitTabs/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/settings/settings.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/unitTabs/settings/settings.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".circle-pic {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.icon-style {\n  color: lightslategray;\n  width: 25px;\n  height: 25px;\n}\n\nion-item ion-label h2 {\n  font-size: medium;\n  font-weight: bold;\n  color: \"quaternary\";\n}\n\nion-list h4 {\n  font-size: 12px !important;\n  text-transform: uppercase;\n}\n\nion-list ion-label {\n  color: #656565 !important;\n  font-size: 13.6px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFFYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNsQjs7QUFFRTtFQUdNLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRDNCOztBQUtFO0VBRUksMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUgvQjs7QUFBRTtFQU1JLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFGbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml0VGFicy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlLXBpYyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLXN0eWxle1xyXG4gICAgICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVte1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1saXN0e1xyXG4gICAgaDR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjogIzY1NjU2NSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDEzLjZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/unitTabs/settings/settings.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/unitTabs/settings/settings.page.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







let SettingsPage = class SettingsPage {
    constructor(_gs, navController, alertController, api, storage) {
        this._gs = _gs;
        this.navController = navController;
        this.alertController = alertController;
        this.api = api;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
        this.profileImage = "/assets/imgs/dummyUser.png";
        this.adminPages = [
            {
                title: 'Edit Profile',
                url: '/edit-profile',
                icon: 'person-circle'
            },
            {
                title: 'Change Password',
                url: '/change-password',
                icon: 'lock-closed'
            },
            {
                title: 'Space Type',
                url: '/space-type',
                icon: 'business'
            },
            {
                title: 'Stored Items Type',
                url: '/stored-item-type',
                icon: 'business'
            },
            {
                title: 'Access Type',
                url: '/access-period',
                icon: 'calendar'
            },
            {
                title: 'Access Time',
                url: '/access-type',
                icon: 'alarm'
            },
            {
                title: 'Features',
                url: '/add-feature',
                icon: 'briefcase'
            },
            {
                title: 'Revenue Sharing',
                url: '/revenue-share',
                icon: 'cash'
            }
        ];
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.token = session;
                        this.orgId = org;
                    }
                });
                this.storage.get("user").then((user) => {
                    if (user) {
                        this.email = user.email;
                        this.name = user.firstName;
                        this.contact = user.phone;
                        if (user.profilePic == null) {
                            this.profileImage = "/assets/imgs/dummyUser.png";
                        }
                        else {
                            this.profileImage = user.profilePic;
                        }
                    }
                });
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'LogOut',
                message: 'Are you sure,you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            this.clearAll();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    clearAll() {
        // this.clearDeviceToken();
        setTimeout(() => {
            this.storage.clear().then(() => {
                console.log('all keys cleared');
            });
            this._gs.logOut();
            this.navController.navigateRoot(['tabs/tab1']);
        }, 200);
    }
    clearDeviceToken() {
        const params = {
            token: this.token,
        };
        this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].removeDevice, params)
            .subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                console.log('result', result);
            }
        })), (error) => {
            console.log('error', error);
        };
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/unitTabs/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=unitTabs-settings-settings-module-es2015.js.map