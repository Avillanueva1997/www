(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/yGZ":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("mrSG"),t=u("ZZ/e"),i=u("on2l"),r=u("5egi");class a{constructor(l,n){this.modalCtrl=l,this.toastController=n}ngOnInit(){}salirConArgumentos(){this.modalCtrl.dismiss({nombre:"Felipe",pais:"Espa\xf1a"}),this.presentToast()}presentToast(){return o.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Correo enviado con \xe9xito!",duration:2e3})).present()}))}}class b{constructor(l,n,u,e){this.userService=l,this.navCtrl=n,this.uiService=u,this.modalCtrl=e,this.loginUser={email:"villanuevaangel68@gmail.com",password:"12345"},this.registerUser={email:"test@test.com",password:"12345",nombre:"Test",avatar:"av-1.png"},this.token=null}ngAfterViewInit(){this.slides.lockSwipes(!0)}login(l){return o.b(this,void 0,void 0,(function*(){l.invalid||((yield this.userService.login(this.loginUser.email,this.loginUser.password))?this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0}):this.uiService.alertaInformativa("Datos incorrectos!"))}))}register(l){return o.b(this,void 0,void 0,(function*(){l.invalid||((yield this.userService.registro(this.registerUser))?this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0}):this.uiService.alertaInformativa("El correo electr\xf3nico ya existe"))}))}mostrarRegistro(){this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0)}mostrarLogin(){this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0)}onLostPassword(){return o.b(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:a,componentProps:{nombre:"Fernando",pais:"Costa Rica"}});yield l.present();const{data:n}=yield l.onDidDismiss();console.log("Retorno del modal",n)}))}}class s{}var d=u("pMnS"),g=u("oBZk"),c=u("s7LF"),p=u("Je0z"),h=u("4r22"),m=e.pb({encapsulation:0,styles:[["@font-face{font-family:Segoe-UI;src:url(/assets/fonts/segoe-ui-light-2.ttf);font-weight:400;font-style:normal}*[_ngcontent-%COMP%]{font-family:Segoe-UI}.mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100vw;height:100vh;background:url(/assets/bg-cpg.jpg) center/cover no-repeat;-webkit-box-pack:center;justify-content:center}.logotype[_ngcontent-%COMP%]{width:150px;margin-bottom:40px;margin-top:-40px}.icologin[_ngcontent-%COMP%]{width:15px;height:15px;margin-right:15px}.btn[_ngcontent-%COMP%]{width:100%}.btn-verde[_ngcontent-%COMP%]{color:#fff}ion-item[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.4)}ion-input[_ngcontent-%COMP%]{color:#2ad0a8}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{text-transform:capitalize;border-radius:50px!important;--border-radius:50px!important;box-shadow:0 2px 1px 0 rgba(3,221,43,.15);--box-shadow:0px 2px 1px 0px rgba(3,221,43,0.15);background:#2ad0a8;--background:$cGreen;display:block;width:100%}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{background:#2ad0a8;--background:$cGreen}ion-text[_ngcontent-%COMP%]{font-family:Segoe-UI;font-size:14px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-family:Segoe-UI!important;font-size:14px}form[_ngcontent-%COMP%]{width:50%;margin:0 auto}@media only screen and (max-width:760px),(min-device-width:768px) and (max-device-width:1024px){form[_ngcontent-%COMP%]{width:100%!important;margin:0 auto}}"]],data:{}});function C(l){return e.Nb(0,[e.Jb(671088640,1,{slides:0}),(l()(),e.rb(1,0,null,null,126,"ion-content",[],null,null,null,g.Z,g.k)),e.qb(2,49152,null,0,t.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,124,"ion-slides",[["class","mainSlide"]],null,null,null,g.vb,g.G)),e.qb(4,49152,[[1,4],["slidePrincipal",4]],0,t.sb,[e.h,e.k,e.x],null,null),(l()(),e.rb(5,0,null,0,59,"ion-slide",[],null,null,null,g.ub,g.F)),e.qb(6,49152,null,0,t.rb,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==e.Db(l,9).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Db(l,9).onReset()&&o),"ngSubmit"===n&&(o=!1!==t.login(e.Db(l,9))&&o),o}),null,null)),e.qb(8,16384,null,0,c.m,[],null,null),e.qb(9,4210688,[["fLogin",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ib(2048,null,c.a,null,[c.h]),e.qb(11,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.rb(12,0,null,null,52,"ion-grid",[["fixed",""]],null,null,null,g.cb,g.n)),e.qb(13,49152,null,0,t.B,[e.h,e.k,e.x],{fixed:[0,"fixed"]},null),(l()(),e.rb(14,0,null,0,4,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(15,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,2,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(17,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,0,"img",[["class","logotype"],["src","/assets/cgp-logo-10.svg"]],null,null,null,null,null)),(l()(),e.rb(19,0,null,0,31,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(20,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(21,0,null,0,29,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(22,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,27,"ion-list",[],null,null,null,g.lb,g.w)),e.qb(24,49152,null,0,t.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(25,0,null,0,12,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(26,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(27,0,null,0,1,"ion-icon",[["class","icologin"],["name","person"],["slot","start"]],null,null,null,g.eb,g.p)),e.qb(28,49152,null,0,t.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(29,0,null,0,8,"ion-input",[["name","email"],["placeholder","Usuario"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,32)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,32)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.loginUser.email=u)&&o),o}),g.ib,g.t)),e.qb(30,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(32,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(34,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.e,null,[c.i]),e.qb(36,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(37,49152,null,0,t.H,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(38,0,null,0,12,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(39,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(40,0,null,0,1,"ion-icon",[["class","icologin"],["name","lock"],["slot","start"]],null,null,null,g.eb,g.p)),e.qb(41,49152,null,0,t.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(42,0,null,0,8,"ion-input",[["name","password"],["placeholder","Contrase\xf1a"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,45)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,45)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.loginUser.password=u)&&o),o}),g.ib,g.t)),e.qb(43,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(45,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(47,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.e,null,[c.i]),e.qb(49,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(50,49152,null,0,t.H,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(51,0,null,0,6,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(52,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(53,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(54,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(55,0,null,0,2,"ion-button",[["color","cgreen"],["expand","block"],["shape","round"],["type","submit"]],null,null,null,g.S,g.d)),e.qb(56,49152,null,0,t.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],type:[3,"type"]},null),(l()(),e.Lb(-1,0,[" Ingresar "])),(l()(),e.rb(58,0,null,0,6,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(59,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(60,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(61,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(62,0,null,0,2,"ion-text",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onLostPassword()&&e),e}),g.zb,g.K)),e.qb(63,49152,null,0,t.yb,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["\xbfOlvidaste tu contrase\xf1a?"])),(l()(),e.rb(65,0,null,0,62,"ion-slide",[],null,null,null,g.ub,g.F)),e.qb(66,49152,null,0,t.rb,[e.h,e.k,e.x],null,null),(l()(),e.rb(67,0,null,0,60,"ion-grid",[["fixed",""]],null,null,null,g.cb,g.n)),e.qb(68,49152,null,0,t.B,[e.h,e.k,e.x],{fixed:[0,"fixed"]},null),(l()(),e.rb(69,0,null,0,1,"app-avatar-selector",[],null,[[null,"avatarSel"]],(function(l,n,u){var e=!0;return"avatarSel"===n&&(e=!1!==(l.component.registerUser.avatar=u)&&e),e}),p.b,p.a)),e.qb(70,114688,null,0,h.a,[],null,{avatarSel:"avatarSel"}),(l()(),e.rb(71,0,null,0,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==e.Db(l,73).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Db(l,73).onReset()&&o),"ngSubmit"===n&&(o=!1!==t.register(e.Db(l,73))&&o),o}),null,null)),e.qb(72,16384,null,0,c.m,[],null,null),e.qb(73,4210688,[["fRegister",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ib(2048,null,c.a,null,[c.h]),e.qb(75,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.rb(76,0,null,null,44,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(77,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(78,0,null,0,42,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(79,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(80,0,null,0,40,"ion-list",[],null,null,null,g.lb,g.w)),e.qb(81,49152,null,0,t.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(82,0,null,0,12,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(83,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(84,0,null,0,1,"ion-icon",[["class","icologin"],["name","mail"],["slot","start"]],null,null,null,g.eb,g.p)),e.qb(85,49152,null,0,t.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(86,0,null,0,8,"ion-input",[["name","email"],["placeholder","Correo Electr\xf3nico"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,89)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,89)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.registerUser.email=u)&&o),o}),g.ib,g.t)),e.qb(87,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(89,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(91,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.e,null,[c.i]),e.qb(93,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(94,49152,null,0,t.H,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(95,0,null,0,12,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(96,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(97,0,null,0,1,"ion-icon",[["class","icologin"],["name","person"],["slot","start"]],null,null,null,g.eb,g.p)),e.qb(98,49152,null,0,t.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(99,0,null,0,8,"ion-input",[["name","nombre"],["placeholder","Nombre"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,102)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,102)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.registerUser.nombre=u)&&o),o}),g.ib,g.t)),e.qb(100,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(102,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(104,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.e,null,[c.i]),e.qb(106,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(107,49152,null,0,t.H,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(108,0,null,0,12,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(109,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(110,0,null,0,1,"ion-icon",[["class","icologin"],["name","lock"],["slot","start"]],null,null,null,g.eb,g.p)),e.qb(111,49152,null,0,t.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(112,0,null,0,8,"ion-input",[["name","password"],["placeholder","Contrase\xf1a"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,115)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,115)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.registerUser.password=u)&&o),o}),g.ib,g.t)),e.qb(113,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.qb(115,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(117,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.e,null,[c.i]),e.qb(119,16384,null,0,c.f,[[4,c.e]],null,null),e.qb(120,49152,null,0,t.H,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(121,0,null,null,6,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(122,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(123,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(124,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(125,0,null,0,2,"ion-button",[["color","cgreen"],["expand","block"],["shape","round"],["type","submit"]],null,null,null,g.S,g.d)),e.qb(126,49152,null,0,t.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],type:[3,"type"]},null),(l()(),e.Lb(-1,0,[" Crear usuario "])),(l()(),e.rb(128,0,null,null,15,"ion-footer",[["no-border",""]],null,null,null,g.bb,g.m)),e.qb(129,49152,null,0,t.A,[e.h,e.k,e.x],null,null),(l()(),e.rb(130,0,null,0,13,"ion-toolbar",[],null,null,null,g.Db,g.O)),e.qb(131,49152,null,0,t.Db,[e.h,e.k,e.x],null,null),(l()(),e.rb(132,0,null,0,11,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(133,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(134,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(135,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(136,0,null,0,2,"ion-button",[["color","cgreen"],["expand","full"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.mostrarLogin()&&e),e}),g.S,g.d)),e.qb(137,49152,null,0,t.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Lb(-1,0,[" Ingresar "])),(l()(),e.rb(139,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(140,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(141,0,null,0,2,"ion-button",[["color","cgreen"],["expand","full"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.mostrarRegistro()&&e),e}),g.S,g.d)),e.qb(142,49152,null,0,t.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Lb(-1,0,[" Registrarme "]))],(function(l,n){var u=n.component;l(n,13,0,""),l(n,28,0,"person"),l(n,30,0,""),l(n,34,0,"email",u.loginUser.email),l(n,37,0,"email","Usuario","","email"),l(n,41,0,"lock"),l(n,43,0,""),l(n,47,0,"password",u.loginUser.password),l(n,50,0,"password","Contrase\xf1a","","password"),l(n,56,0,"cgreen","block","round","submit"),l(n,68,0,""),l(n,70,0),l(n,85,0,"mail"),l(n,87,0,""),l(n,91,0,"email",u.registerUser.email),l(n,94,0,"email","Correo Electr\xf3nico","","email"),l(n,98,0,"person"),l(n,100,0,""),l(n,104,0,"nombre",u.registerUser.nombre),l(n,107,0,"nombre","Nombre","","text"),l(n,111,0,"lock"),l(n,113,0,""),l(n,117,0,"password",u.registerUser.password),l(n,120,0,"password","Contrase\xf1a","","password"),l(n,126,0,"cgreen","block","round","submit"),l(n,137,0,"cgreen","full","outline","round","small"),l(n,142,0,"cgreen","full","outline","round","small")}),(function(l,n){l(n,7,0,e.Db(n,11).ngClassUntouched,e.Db(n,11).ngClassTouched,e.Db(n,11).ngClassPristine,e.Db(n,11).ngClassDirty,e.Db(n,11).ngClassValid,e.Db(n,11).ngClassInvalid,e.Db(n,11).ngClassPending),l(n,29,0,e.Db(n,30).required?"":null,e.Db(n,36).ngClassUntouched,e.Db(n,36).ngClassTouched,e.Db(n,36).ngClassPristine,e.Db(n,36).ngClassDirty,e.Db(n,36).ngClassValid,e.Db(n,36).ngClassInvalid,e.Db(n,36).ngClassPending),l(n,42,0,e.Db(n,43).required?"":null,e.Db(n,49).ngClassUntouched,e.Db(n,49).ngClassTouched,e.Db(n,49).ngClassPristine,e.Db(n,49).ngClassDirty,e.Db(n,49).ngClassValid,e.Db(n,49).ngClassInvalid,e.Db(n,49).ngClassPending),l(n,71,0,e.Db(n,75).ngClassUntouched,e.Db(n,75).ngClassTouched,e.Db(n,75).ngClassPristine,e.Db(n,75).ngClassDirty,e.Db(n,75).ngClassValid,e.Db(n,75).ngClassInvalid,e.Db(n,75).ngClassPending),l(n,86,0,e.Db(n,87).required?"":null,e.Db(n,93).ngClassUntouched,e.Db(n,93).ngClassTouched,e.Db(n,93).ngClassPristine,e.Db(n,93).ngClassDirty,e.Db(n,93).ngClassValid,e.Db(n,93).ngClassInvalid,e.Db(n,93).ngClassPending),l(n,99,0,e.Db(n,100).required?"":null,e.Db(n,106).ngClassUntouched,e.Db(n,106).ngClassTouched,e.Db(n,106).ngClassPristine,e.Db(n,106).ngClassDirty,e.Db(n,106).ngClassValid,e.Db(n,106).ngClassInvalid,e.Db(n,106).ngClassPending),l(n,112,0,e.Db(n,113).required?"":null,e.Db(n,119).ngClassUntouched,e.Db(n,119).ngClassTouched,e.Db(n,119).ngClassPristine,e.Db(n,119).ngClassDirty,e.Db(n,119).ngClassValid,e.Db(n,119).ngClassInvalid,e.Db(n,119).ngClassPending)}))}function q(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"app-login",[],null,null,null,C,m)),e.qb(1,4243456,null,0,b,[i.a,t.Jb,r.a,t.Ib],null,null)],null,null)}var x=e.nb("app-login",b,q,{},{},[]),f=e.pb({encapsulation:0,styles:[["@font-face{font-family:Segoe-UI;src:url(/assets/fonts/segoe-ui-light-2.ttf);font-weight:400;font-style:normal}@font-face{font-family:Segoe-UI;src:url(/assets/fonts/segoe-ui-bold.ttf);font-weight:700;font-style:bold}*[_ngcontent-%COMP%]{font-family:Segoe-UI!important}ion-header[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{background:0 0;--background:transparent}ion-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:70px!important;margin:0 auto;padding:20px;display:block}ion-content[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:60%;margin:-40px auto 0;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Segoe-UI}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:Segoe-UI;font-size:12px;color:#2ad0a8}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{border-radius:50px!important;--border-radius:50px!important;box-shadow:0 2px 1px 0 rgba(3,221,43,.15);--box-shadow:0px 2px 1px 0px rgba(3,221,43,0.15);background:#2ad0a8;--background:$cGreen;display:block;width:100%}@media screen and (max-width:768px){ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function k(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,4,"ion-header",[["no-border",""]],null,null,null,g.db,g.o)),e.qb(1,49152,null,0,t.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-toolbar",[],null,null,null,g.Db,g.O)),e.qb(3,49152,null,0,t.Db,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,0,"img",[["alt",""],["src","/assets/cgp-logo-10.svg"],["width","150"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,37,"ion-content",[["padding",""]],null,null,null,g.Z,g.k)),e.qb(6,49152,null,0,t.v,[e.h,e.k,e.x],null,null),e.qb(7,16384,null,0,t.e,[e.k],null,null),(l()(),e.rb(8,0,null,0,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Db(l,10).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Db(l,10).onReset()&&o),o}),null,null)),e.qb(9,16384,null,0,c.m,[],null,null),e.qb(10,4210688,null,0,c.h,[[8,null],[8,null]],null,null),e.Ib(2048,null,c.a,null,[c.h]),e.qb(12,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.rb(13,0,null,null,22,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(14,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(15,0,null,0,20,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(16,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(17,0,null,0,18,"ion-list",[],null,null,null,g.lb,g.w)),e.qb(18,49152,null,0,t.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(19,0,null,0,16,"ion-item",[],null,null,null,g.jb,g.u)),e.qb(20,49152,null,0,t.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(21,0,null,0,3,"ion-title",[["text-capitalize",""]],null,null,null,g.Bb,g.M)),e.qb(22,49152,null,0,t.Bb,[e.h,e.k,e.x],null,null),e.qb(23,16384,null,0,t.e,[e.k],null,null),(l()(),e.Lb(-1,0,["Recuperaci\xf3n de la cuenta"])),(l()(),e.rb(25,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.kb,g.v)),e.qb(26,49152,null,0,t.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Lb(-1,0,["Correo Electr\xf3nico"])),(l()(),e.rb(28,0,null,0,3,"ion-input",[["required",""],["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Db(l,31)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,31)._handleInputEvent(u.target)&&o),o}),g.ib,g.t)),e.Ib(5120,null,c.d,(function(l){return[l]}),[t.Pb]),e.qb(30,49152,null,0,t.H,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),e.qb(31,16384,null,0,t.Pb,[e.k],null,null),(l()(),e.rb(32,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,g.zb,g.K)),e.qb(33,49152,null,0,t.yb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(34,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Se le enviar\xe1 un mensaje con su nueva contrase\xf1a."])),(l()(),e.rb(36,0,null,null,6,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(37,49152,null,0,t.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(38,0,null,0,4,"ion-col",[],null,null,null,g.Y,g.j)),e.qb(39,49152,null,0,t.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(40,0,null,0,2,"ion-button",[["color","cgreen"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.salirConArgumentos()&&e),e}),g.S,g.d)),e.qb(41,49152,null,0,t.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Lb(-1,0,["Enviar"]))],(function(l,n){l(n,26,0,"floating"),l(n,30,0,"","email"),l(n,33,0,"primary"),l(n,41,0,"cgreen","full","round")}),(function(l,n){l(n,8,0,e.Db(n,12).ngClassUntouched,e.Db(n,12).ngClassTouched,e.Db(n,12).ngClassPristine,e.Db(n,12).ngClassDirty,e.Db(n,12).ngClassValid,e.Db(n,12).ngClassInvalid,e.Db(n,12).ngClassPending)}))}function v(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"app-modal-info",[],null,null,null,k,f)),e.qb(1,114688,null,0,a,[t.Ib,t.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}var D=e.nb("app-modal-info",a,v,{nombre:"nombre",pais:"pais"},{},[]),y=u("SVse"),P=u("iTUp"),w=u("j1ZV");class I{}var M=u("iInd");u.d(n,"LoginPageModuleNgFactory",(function(){return _}));var _=e.ob(s,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[d.a,x,D]],[3,e.j],e.v]),e.Bb(4608,y.m,y.l,[e.s,[2,y.v]]),e.Bb(4608,c.l,c.l,[]),e.Bb(4608,t.b,t.b,[e.x,e.g]),e.Bb(4608,t.Ib,t.Ib,[t.b,e.j,e.p]),e.Bb(4608,t.Mb,t.Mb,[t.b,e.j,e.p]),e.Bb(1073742336,y.c,y.c,[]),e.Bb(1073742336,c.k,c.k,[]),e.Bb(1073742336,c.b,c.b,[]),e.Bb(1073742336,t.Fb,t.Fb,[]),e.Bb(1073742336,P.a,P.a,[]),e.Bb(1073742336,w.a,w.a,[]),e.Bb(1073742336,I,I,[]),e.Bb(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),e.Bb(1073742336,s,s,[]),e.Bb(1024,M.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);