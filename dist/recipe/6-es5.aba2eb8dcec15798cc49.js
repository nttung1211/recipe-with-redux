function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,n,e){"use strict";e.r(n);var i,o,r=e("3Pt+"),a=e("fXoL"),s=e("qXBG"),l=e("tyNb"),c=e("ofXK"),b=((o=function(){function t(){_classCallCheck(this,t),this.errorClosed=new a.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.errorClosed.emit()}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Db({type:o,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{errorClosed:"errorClosed"},decls:7,vars:1,consts:[[1,"back-drop",3,"click"],[1,"alert-box"],[1,"alert-box__action"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(a.Mb(0,"div",0),a.Ub("click",(function(){return n.onClose()})),a.Lb(),a.Mb(1,"div",1),a.Mb(2,"p"),a.ic(3),a.Lb(),a.Mb(4,"div",2),a.Mb(5,"button",3),a.Ub("click",(function(){return n.onClose()})),a.ic(6,"Close"),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(3),a.jc(n.message))},styles:[".back-drop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:10}.alert-box[_ngcontent-%COMP%]{width:60vw;position:fixed;top:30vh;left:20vw;z-index:11;background:#fff;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.25);color:red}.alert-box__action[_ngcontent-%COMP%]{text-align:right}"]}),o),d=((i=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=a.Db({type:i,selectors:[["app-loading-spinner"]],decls:3,vars:0,consts:[[1,"loadingio-spinner-rolling-faq0i6dkc15"],[1,"ldio-u1pd1c1pq09"]],template:function(t,n){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Kb(2,"div"),a.Lb(),a.Lb())},styles:["@-webkit-keyframes ldio-u1pd1c1pq09{0%{-webkit-transform:translate(-50%,-50%) rotate(0deg);transform:translate(-50%,-50%) rotate(0deg)}to{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ldio-u1pd1c1pq09{0%{-webkit-transform:translate(-50%,-50%) rotate(0deg);transform:translate(-50%,-50%) rotate(0deg)}to{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:120px;height:120px;border:20px solid #85a2b6;border-top-color:transparent;border-radius:50%;-webkit-animation:ldio-u1pd1c1pq09 1s linear infinite;animation:ldio-u1pd1c1pq09 1s linear infinite;top:100px;left:100px}.loadingio-spinner-rolling-faq0i6dkc15[_ngcontent-%COMP%]{width:200px;height:200px;display:inline-block;overflow:hidden;background:#fff}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:content-box}"]}),i);function u(t,n){if(1&t){var e=a.Nb();a.Mb(0,"app-alert",5),a.Ub("errorClosed",(function(){return a.ec(e),a.Wb().error=null})),a.Lb()}if(2&t){var i=a.Wb();a.Xb("message",i.error)}}function p(t,n){1&t&&(a.Mb(0,"div"),a.Kb(1,"app-loading-spinner"),a.Lb())}function f(t,n){1&t&&(a.Mb(0,"small",15),a.ic(1," Please enter a valid email. "),a.Lb())}function g(t,n){1&t&&(a.Mb(0,"small",15),a.ic(1," Invalid password. "),a.Lb())}function m(t,n){if(1&t){var e=a.Nb();a.Mb(0,"form",6),a.Ub("ngSubmit",(function(){return a.ec(e),a.Wb().onSubmit()})),a.Mb(1,"div",7),a.Mb(2,"label",8),a.ic(3,"Email"),a.Lb(),a.Kb(4,"input",9),a.hc(5,f,2,0,"small",10),a.Lb(),a.Mb(6,"div",7),a.Mb(7,"label",11),a.ic(8,"Password"),a.Lb(),a.Kb(9,"input",12),a.hc(10,g,2,0,"small",10),a.Lb(),a.Mb(11,"button",13),a.ic(12),a.Lb(),a.Kb(13,"hr"),a.Mb(14,"button",14),a.Ub("click",(function(){return a.ec(e),a.Wb().onSwitchMode()})),a.ic(15),a.Lb(),a.Lb()}if(2&t){var i=a.Wb();a.Xb("formGroup",i.authForm),a.zb(5),a.Xb("ngIf",i.authForm.get("email").invalid&&!i.authForm.get("email").pristine),a.zb(5),a.Xb("ngIf",i.authForm.get("password").invalid&&!i.authForm.get("password").pristine),a.zb(1),a.Xb("disabled",i.authForm.invalid),a.zb(1),a.jc(i.isLoginMode?"Login":"Sign Up"),a.zb(3),a.kc(" Switch to ",i.isLoginMode?"Sign Up":"Login"," ")}}var h,v=((h=function(){function t(n,e){_classCallCheck(this,t),this.authService=n,this.router=e,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return _createClass(t,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.authForm=new r.f({email:new r.d(null,[r.r.required,r.r.email]),password:new r.d(null,[r.r.required,r.r.pattern("^[a-zA-Z0-9]{6,18}$")])})}},{key:"onSwitchMode",value:function(){this.isLoginMode=!this.isLoginMode}},{key:"onSubmit",value:function(){var t=this;if(this.authForm.valid){var n=this.authForm.value;this.isLoading=!0,(this.isLoginMode?this.authService.login(n.email,n.password):this.authService.signUp(n.email,n.password)).subscribe((function(n){t.isLoading=!1,t.error=null,t.authForm.reset(),t.router.navigate(["/recipes"])}),(function(n){t.isLoading=!1,t.error=n}))}}}]),t}()).\u0275fac=function(t){return new(t||h)(a.Jb(s.a),a.Jb(l.c))},h.\u0275cmp=a.Db({type:h,selectors:[["app-auth"]],decls:5,vars:3,consts:[[1,"row"],[1,"col-sm-6"],[3,"message","errorClosed",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"message","errorClosed"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","name","email","id","email","autofocus","","formControlName","email",1,"form-control"],["class","error",4,"ngIf"],["for","password"],["type","password","name","password","id","password","formControlName","password",1,"form-control"],[1,"btn","btn-success","btn-block",3,"disabled"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],[1,"error"]],template:function(t,n){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.hc(2,u,1,1,"app-alert",2),a.hc(3,p,2,0,"div",3),a.hc(4,m,16,6,"form",4),a.Lb(),a.Lb()),2&t&&(a.zb(2),a.Xb("ngIf",n.error),a.zb(1),a.Xb("ngIf",n.isLoading),a.zb(1),a.Xb("ngIf",!n.isLoading))},directives:[c.j,b,d,r.s,r.k,r.g,r.a,r.j,r.e],styles:[".error[_ngcontent-%COMP%]{color:red}input.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border-color:red}"]}),h),w=e("PCNd");e.d(n,"AuthModule",(function(){return C}));var k,C=((k=function t(){_classCallCheck(this,t)}).\u0275mod=a.Hb({type:k}),k.\u0275inj=a.Gb({factory:function(t){return new(t||k)},imports:[[r.i,r.p,w.a,l.g.forChild([{path:"",component:v}])]]}),k)}}]);