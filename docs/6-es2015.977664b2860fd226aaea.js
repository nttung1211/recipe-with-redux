(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,i,n){"use strict";n.r(i);var o=n("3Pt+"),e=n("fXoL"),r=n("qXBG"),s=n("tyNb"),a=n("ofXK");let l=(()=>{class t{constructor(){this.errorClosed=new e.n}ngOnInit(){}onClose(){this.errorClosed.emit()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Db({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{errorClosed:"errorClosed"},decls:7,vars:1,consts:[[1,"back-drop",3,"click"],[1,"alert-box"],[1,"alert-box__action"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(e.Mb(0,"div",0),e.Ub("click",(function(){return i.onClose()})),e.Lb(),e.Mb(1,"div",1),e.Mb(2,"p"),e.ic(3),e.Lb(),e.Mb(4,"div",2),e.Mb(5,"button",3),e.Ub("click",(function(){return i.onClose()})),e.ic(6,"Close"),e.Lb(),e.Lb(),e.Lb()),2&t&&(e.zb(3),e.jc(i.message))},styles:[".back-drop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:10}.alert-box[_ngcontent-%COMP%]{width:60vw;position:fixed;top:30vh;left:20vw;z-index:11;background:#fff;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.25);color:red}.alert-box__action[_ngcontent-%COMP%]{text-align:right}"]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Db({type:t,selectors:[["app-loading-spinner"]],decls:3,vars:0,consts:[[1,"loadingio-spinner-rolling-faq0i6dkc15"],[1,"ldio-u1pd1c1pq09"]],template:function(t,i){1&t&&(e.Mb(0,"div",0),e.Mb(1,"div",1),e.Kb(2,"div"),e.Lb(),e.Lb())},styles:["@-webkit-keyframes ldio-u1pd1c1pq09{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ldio-u1pd1c1pq09{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:120px;height:120px;border:20px solid #85a2b6;border-top-color:transparent;border-radius:50%;-webkit-animation:ldio-u1pd1c1pq09 1s linear infinite;animation:ldio-u1pd1c1pq09 1s linear infinite;top:100px;left:100px}.loadingio-spinner-rolling-faq0i6dkc15[_ngcontent-%COMP%]{width:200px;height:200px;display:inline-block;overflow:hidden;background:#fff}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-u1pd1c1pq09[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:content-box}"]}),t})();function b(t,i){if(1&t){const t=e.Nb();e.Mb(0,"app-alert",5),e.Ub("errorClosed",(function(){return e.ec(t),e.Wb().error=null})),e.Lb()}if(2&t){const t=e.Wb();e.Xb("message",t.error)}}function d(t,i){1&t&&(e.Mb(0,"div"),e.Kb(1,"app-loading-spinner"),e.Lb())}function p(t,i){1&t&&(e.Mb(0,"small",15),e.ic(1," Please enter a valid email. "),e.Lb())}function u(t,i){1&t&&(e.Mb(0,"small",15),e.ic(1," Invalid password. "),e.Lb())}function g(t,i){if(1&t){const t=e.Nb();e.Mb(0,"form",6),e.Ub("ngSubmit",(function(){return e.ec(t),e.Wb().onSubmit()})),e.Mb(1,"div",7),e.Mb(2,"label",8),e.ic(3,"Email"),e.Lb(),e.Kb(4,"input",9),e.hc(5,p,2,0,"small",10),e.Lb(),e.Mb(6,"div",7),e.Mb(7,"label",11),e.ic(8,"Password"),e.Lb(),e.Kb(9,"input",12),e.hc(10,u,2,0,"small",10),e.Lb(),e.Mb(11,"button",13),e.ic(12),e.Lb(),e.Kb(13,"hr"),e.Mb(14,"button",14),e.Ub("click",(function(){return e.ec(t),e.Wb().onSwitchMode()})),e.ic(15),e.Lb(),e.Lb()}if(2&t){const t=e.Wb();e.Xb("formGroup",t.authForm),e.zb(5),e.Xb("ngIf",t.authForm.get("email").invalid&&!t.authForm.get("email").pristine),e.zb(5),e.Xb("ngIf",t.authForm.get("password").invalid&&!t.authForm.get("password").pristine),e.zb(1),e.Xb("disabled",t.authForm.invalid),e.zb(1),e.jc(t.isLoginMode?"Login":"Sign Up"),e.zb(3),e.kc(" Switch to ",t.isLoginMode?"Sign Up":"Login"," ")}}let f=(()=>{class t{constructor(t,i){this.authService=t,this.router=i,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.initForm()}initForm(){this.authForm=new o.f({email:new o.d(null,[o.r.required,o.r.email]),password:new o.d(null,[o.r.required,o.r.pattern("^[a-zA-Z0-9]{6,18}$")])})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(){if(this.authForm.valid){const t=this.authForm.value;let i;this.isLoading=!0,i=this.isLoginMode?this.authService.login(t.email,t.password):this.authService.signUp(t.email,t.password),i.subscribe(t=>{this.isLoading=!1,this.error=null,this.authForm.reset(),this.router.navigate(["/recipes"])},t=>{this.isLoading=!1,this.error=t})}}}return t.\u0275fac=function(i){return new(i||t)(e.Jb(r.a),e.Jb(s.c))},t.\u0275cmp=e.Db({type:t,selectors:[["app-auth"]],decls:5,vars:3,consts:[[1,"row"],[1,"col-sm-6"],[3,"message","errorClosed",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"message","errorClosed"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","name","email","id","email","autofocus","","formControlName","email",1,"form-control"],["class","error",4,"ngIf"],["for","password"],["type","password","name","password","id","password","formControlName","password",1,"form-control"],[1,"btn","btn-success","btn-block",3,"disabled"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],[1,"error"]],template:function(t,i){1&t&&(e.Mb(0,"div",0),e.Mb(1,"div",1),e.hc(2,b,1,1,"app-alert",2),e.hc(3,d,2,0,"div",3),e.hc(4,g,16,6,"form",4),e.Lb(),e.Lb()),2&t&&(e.zb(2),e.Xb("ngIf",i.error),e.zb(1),e.Xb("ngIf",i.isLoading),e.zb(1),e.Xb("ngIf",!i.isLoading))},directives:[a.j,l,c,o.s,o.k,o.g,o.a,o.j,o.e],styles:[".error[_ngcontent-%COMP%]{color:red}input.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border-color:red}"]}),t})();var m=n("PCNd");n.d(i,"AuthModule",(function(){return h}));let h=(()=>{class t{}return t.\u0275mod=e.Hb({type:t}),t.\u0275inj=e.Gb({factory:function(i){return new(i||t)},imports:[[o.i,o.p,m.a,s.g.forChild([{path:"",component:f}])]]}),t})()}}]);