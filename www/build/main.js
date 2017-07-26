webpackJsonp([0],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, fb, auth) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.auth = auth;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */];
        this.resetPasswordPage = __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]; //Added reset password page
        this.loginForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    HomePage.prototype.loginWithGoogle = function () {
        this.auth.loginWithGoogle().subscribe(function (success) {
            console.log(success);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.login = function () {
        if (this.loginForm.valid) {
            var credentials = ({ email: this.email.value, password: this.password.value });
            this.auth.loginWithEmail(credentials).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
                if (error.code == 'auth/user-not-found') {
                    alert('User not found');
                }
            });
        }
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
    };
    HomePage = __decorate([
        //Added reset password page
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Google Auth Using Firebase\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-title>Login</ion-title>\n    <ion-row>\n        <ion-item>\n             \n<div *ngIf="auth.authState">current user is {{auth.currentUser}}</div>\n \n        </ion-item>\n    </ion-row>\n     \n<form [formGroup]="loginForm" (ngSubmit)="submit()" novalidate>\n        <ion-row>\n            <ion-item>\n                <ion-label for="email"></ion-label>\n                <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n            </ion-item>\n        </ion-row>\n        <ion-row>\n            <ion-item>\n                <ion-label for="password"></ion-label>\n                <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n            </ion-item>\n        </ion-row>\n    </form>\n \n    <ion-row>\n        <button (click)="login()" ion-button block>Log in</button>\n    </ion-row>\n    <ion-row> \n        <button [navPush]="signupPage" ion-button block>Sign up</button>\n    </ion-row>\n    <!--new link to sign up page-->\n    <ion-row> \n        <button [navPush]="resetPasswordPage" ion-button block>Reset password</button>\n    </ion-row>\n    <ion-row> \n        <button (click)="logout()" ion-button block>Log out</button>\n    </ion-row>\n    <ion-row> \n        <button (click)="loginWithGoogle()" ion-button block>Google login</button>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.auth = auth;
        this.signupForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.email = this.signupForm.controls['email'];
        this.password = this.signupForm.controls['password'];
    }
    SignupPage.prototype.submit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            var credentials = ({ email: this.email.value, password: this.password.value });
            this.auth.registerUser(credentials).subscribe(function (registerData) {
                console.log(registerData);
                alert('User is registered and logged in.');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (registerError) {
                console.log(registerError);
                if (registerError.code === 'auth/weak-password' || registerError.code === 'auth/email-already-in-use') {
                    alert(registerError.message);
                }
                _this.error = registerError;
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ionic2Firebase</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title>Signup</ion-title>\n  <form [formGroup]="signupForm" (ngSubmit)="submit()" novalidate>\n      <ion-row>\n        <ion-item>\n            <ion-label for="email"></ion-label>\n            <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n            <ion-label for="password"></ion-label>\n            <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n          <button ion-button type="submit" block>Sign up</button>\n      </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\signup\signup.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a" /* AuthProvider */]])
    ], SignupPage);
    return SignupPage;
}());
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.auth = auth;
        this.resetPasswordForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])]
        });
        this.email = this.resetPasswordForm.controls['email'];
    }
    ResetPasswordPage.prototype.submit = function () {
        var _this = this;
        if (this.resetPasswordForm.valid) {
            this.auth.resetPassword(this.email.value).subscribe(function (registerData) {
                alert('Password recovery link is sent.');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (registerError) {
                console.log(registerError);
                if (registerError.code === 'auth/user-not-found') {
                    alert(registerError.message);
                }
            });
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\reset-password\reset-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ionic2Firebase</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title>ResetPassword</ion-title>\n  <form [formGroup]="resetPasswordForm" (ngSubmit)="submit()" novalidate>\n    <ion-row>\n      <ion-item>\n        <ion-label for="email"></ion-label>\n        <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    </ion-row>\n    <ion-row>\n      <button ion-button type="submit" block>Reset password</button>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\pages\reset-password\reset-password.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a" /* AuthProvider */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());
//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(594);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reset_password_reset_password__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var firebaseConfig = {
    apiKey: 'AIzaSyBXRDa-lOPEnnYQ_msQi92LlakSqi3TLgM',
    authDomain: 'project1-98ee0.firebaseapp.com',
    databaseURL: 'https://project1-98ee0.firebaseio.com',
    storageBucket: 'project1-98ee0.appspot.com',
    messagingSenderId: '616770170198'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_reset_password_reset_password__["a" /* ResetPasswordPage */] //Added reset password page
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_reset_password_reset_password__["a" /* ResetPasswordPage */] //Added reset password page
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__["a" /* AuthProvider */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_provider__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, auth) {
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
            //Check if user is authenticated
            auth.onAuth.subscribe(function (authState) {
                if (authState) {
                    console.log('Logged in user :', authState.auth.email);
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\swetha\Downloads\ionic2Firebase-master\ionic2Firebase-master (1)\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_provider__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthProvider = (function () {
    function AuthProvider(af, firebase, platform) {
        var _this = this;
        this.af = af;
        this.platform = platform;
        this.onAuth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.firebase = firebase;
        this.af.auth.subscribe(function (state) {
            _this.authState = state;
            _this.onAuth.emit(state);
        });
    }
    AuthProvider.prototype.loginWithGoogle = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.platform.is('cordova')) {
                return __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* GooglePlus */].login({
                    'webClientId': '616770170198-1umck9055ugpi7bvhafvj03m2kep9jcm.apps.googleusercontent.com' //your Android reverse client id
                }).then(function (userData) {
                    var token = userData.idToken;
                    var googleCredential = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"].GoogleAuthProvider.credential(token, null);
                    _this.firebase.auth().signInWithCredential(googleCredential).then(function (success) {
                        observer.next(success);
                    }).catch(function (error) {
                        //console.log(error);
                        observer.error(error);
                    });
                }).catch(function (error) {
                    //console.log(error);
                    observer.error(error);
                });
            }
            else {
                return _this.af.auth.login({
                    provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Google,
                    method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
                }).then(function () {
                    observer.next();
                }).catch(function (error) {
                    //console.log(error);
                    observer.error(error);
                });
            }
        });
    };
    AuthProvider.prototype.loginWithEmail = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.login(credentials, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password
            }).then(function (authData) {
                //console.log(authData);
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.registerUser = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.createUser(credentials).then(function (authData) {
                //authData.auth.updateProfile({displayName: credentials.displayName, photoURL: credentials.photoUrl}); //set name and photo
                observer.next(authData);
            }).catch(function (error) {
                //console.log(error);
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (emailAddress) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.firebase.auth().sendPasswordResetEmail(emailAddress).then(function (success) {
                //console.log('email sent', success);
                observer.next(success);
            }, function (error) {
                //console.log('error sending email',error);
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.af.auth.logout();
    };
    Object.defineProperty(AuthProvider.prototype, "currentUser", {
        get: function () {
            return this.authState ? this.authState.auth.email : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider = __decorate([
        //needed for the GoogleAuthProvider
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */], Object, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());
//# sourceMappingURL=auth-provider.js.map

/***/ })

},[497]);
//# sourceMappingURL=main.js.map