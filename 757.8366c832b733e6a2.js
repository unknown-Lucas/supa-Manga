"use strict";(self.webpackChunkmanga_hub=self.webpackChunkmanga_hub||[]).push([[757],{757:(C,m,n)=>{n.r(m),n.d(m,{SingUpComponent:()=>i});var t=n(4006),p=n(6416),r=n(4650),E=n(9653),_=n(6895),g=n(4144),l=n(9549),a=n(3546),u=n(4859),c=n(7392),d=n(3127);function f(o,e){1&o&&(r.TgZ(0,"mat-error"),r._uU(1," Please enter a valid email address "),r.qZA())}function U(o,e){1&o&&(r.TgZ(0,"mat-error"),r._uU(1," 6 characters min length "),r.qZA())}const h=function(){return["/login"]};class i{constructor(e){this._store=e,this.registerForm=new t.cw({email:new t.NI("",[t.kI.required,t.kI.email]),password:new t.NI("",[t.kI.required,t.kI.minLength(6)])})}get emailErrors(){return this.registerForm.get("email")?.hasError("email")}get passwordErrors(){return this.registerForm.get("password")?.hasError("minlength")}get isInvalid(){return this.registerForm.invalid||this.registerForm.pristine}singUp(){const e={...this.registerForm.value};this._store.dispatch(p.u.SING_UP({password:e.password,email:e.email}))}}i.\u0275fac=function(e){return new(e||i)(r.Y36(E.yh))},i.\u0275cmp=r.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[r.jDz],decls:29,vars:6,consts:[[1,"register-layer"],[1,"register-card"],[1,"register-form",3,"formGroup"],[1,"register-input"],["matInput","","placeholder","Ex. pat@example.com","formControlName","email","required",""],[4,"ngIf"],[1,"login-input"],["type","password","matInput","","formControlName","password","required",""],["mat-raised-button","","color","primary","name","login button",1,"register-button",3,"disabled","click"],[2,"text-align","center"],["role","button","alt","logIn",3,"routerLink"]],template:function(e,s){1&e&&(r.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),r._uU(4,"MangaHub Auth"),r.qZA(),r.TgZ(5,"mat-card-subtitle"),r._uU(6,"SingUp"),r.qZA()(),r.TgZ(7,"mat-card-content"),r._UZ(8,"br"),r.TgZ(9,"form",2)(10,"mat-form-field",3)(11,"mat-label"),r._uU(12,"Email"),r.qZA(),r._UZ(13,"input",4),r.YNc(14,f,2,0,"mat-error",5),r.qZA(),r.TgZ(15,"mat-form-field",6)(16,"mat-label"),r._uU(17,"Password"),r.qZA(),r._UZ(18,"input",7),r.YNc(19,U,2,0,"mat-error",5),r.qZA(),r.TgZ(20,"button",8),r.NdJ("click",function(){return s.singUp()}),r.TgZ(21,"mat-icon"),r._uU(22,"login"),r.qZA()()()(),r.TgZ(23,"mat-card-footer",9),r._UZ(24,"br"),r.TgZ(25,"p"),r._uU(26," If you already have an account you can "),r.TgZ(27,"a",10),r._uU(28,"logIn"),r.qZA()()()()()),2&e&&(r.xp6(9),r.Q6J("formGroup",s.registerForm),r.xp6(5),r.Q6J("ngIf",s.emailErrors),r.xp6(5),r.Q6J("ngIf",s.passwordErrors),r.xp6(1),r.Q6J("disabled",s.isInvalid),r.xp6(7),r.Q6J("routerLink",r.DdM(5,h)))},dependencies:[_.ez,_.O5,g.c,g.Nt,l.KE,l.hX,l.TO,a.QW,a.a8,a.dn,a.rt,a.dk,a.$j,a.n5,u.ot,u.lW,t.UX,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.sg,t.u,t.u5,c.Ps,c.Hw,d.Bz,d.rH],styles:[".register-card[_ngcontent-%COMP%]{max-width:50vw}.register-layer[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:url(/assets/backGrounds/login.webp);background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.register-button[_ngcontent-%COMP%]{width:40vw}.register-form[_ngcontent-%COMP%]{display:flex;align-content:center;flex-direction:column}.register-input[_ngcontent-%COMP%]{width:40vw}"]})}}]);