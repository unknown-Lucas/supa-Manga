"use strict";(self.webpackChunkmanga_hub=self.webpackChunkmanga_hub||[]).push([[912],{912:(b,m,o)=>{o.r(m),o.d(m,{HomeComponent:()=>r});var a=o(4650),l=o(4989),d=o(3127),s=o(6895),h=o(2340),i=o(3546),p=o(4859),u=o(2994);class g{constructor(){this.manga={},this.openMangaDetails=new a.vpe}get mangaUrl(){return`${h.N.myHost}/home/${this.manga._id}`}getMangaStateClass(n){return{ongoing:"ongoing-header-image",completed:"completed-header-image",cancelled:"cancelled-header-image",hiatus:"hiatus-header-image"}[n]}}g.\u0275fac=function(n){return new(n||g)},g.\u0275cmp=a.Xpm({type:g,selectors:[["app-manga-card"]],inputs:{manga:"manga"},outputs:{openMangaDetails:"openMangaDetails"},standalone:!0,features:[a.jDz],decls:14,vars:6,consts:[[1,"example-card"],["mat-card-avatar","",3,"ngClass"],[1,"card-title"],["rel","noreferrer","mat-card-image","","width","300","height","300","alt","","loading","lazy"],[1,"card-description"],[2,"margin-right","10px",3,"url"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,t){1&n&&(a.TgZ(0,"mat-card",0)(1,"mat-card-header"),a._UZ(2,"div",1),a.TgZ(3,"mat-card-title",2),a._uU(4),a.qZA(),a.TgZ(5,"mat-card-subtitle"),a._uU(6),a.qZA()(),a._UZ(7,"img",3),a.TgZ(8,"mat-card-content",4),a._uU(9),a.qZA(),a.TgZ(10,"mat-card-actions"),a._UZ(11,"app-share-button",5),a.TgZ(12,"button",6),a.NdJ("click",function(){return t.openMangaDetails.emit(t.manga._id)}),a._uU(13," READ "),a.qZA()()()),2&n&&(a.xp6(2),a.Q6J("ngClass",t.getMangaStateClass(t.manga.state)),a.xp6(2),a.Oqu(t.manga.title),a.xp6(2),a.Oqu(t.manga.genre),a.xp6(1),a.uIk("src",t.manga.cover,a.LSH),a.xp6(2),a.hij(" ",t.manga.description," "),a.xp6(2),a.Q6J("url",t.mangaUrl))},dependencies:[s.ez,s.mk,i.QW,i.a8,i.hq,i.kc,i.dn,i.dk,i.G2,i.$j,i.n5,p.ot,p.lW,u.o],styles:[".example-card[_ngcontent-%COMP%]{max-width:300px;height:500px;border-radius:20px;margin-top:5vh;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}.card-description[_ngcontent-%COMP%]{padding:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;max-width:300px;max-height:300px}.card-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-width:300px}"],changeDetection:0});var c=o(3162);function M(e,n){if(1&e){const t=a.EpF();a.TgZ(0,"app-manga-card",4),a.NdJ("openMangaDetails",function(v){a.CHM(t);const Z=a.oxw(2);return a.KtG(Z.openMangaDetails(v))}),a.qZA()}2&e&&a.Q6J("manga",n.$implicit)}function f(e,n){if(1&e&&(a.TgZ(0,"span",2),a.YNc(1,M,1,1,"app-manga-card",3),a.ALo(2,"async"),a.qZA()),2&e){const t=a.oxw();a.xp6(1),a.Q6J("ngForOf",a.lcZ(2,1,t.mangasCollection$))}}function C(e,n){1&e&&(a.TgZ(0,"span"),a._UZ(1,"mat-progress-bar",5),a.qZA())}class r{constructor(n,t){this._MangaStore=n,this._route=t,this.mangasCollection$=this._MangaStore.mangaCollection$,this.isMangaLoading$=this._MangaStore.isMangaCollectionLoading$,this.isMangaSelected=this._route.snapshot.paramMap.get("mangaId")}ngOnInit(){this._MangaStore.getMangas(["cover","description","title","state","genre","_id"]),new RegExp("^[0-9,$]*$").test(this?.isMangaSelected??"")&&this?.isMangaSelected&&this.openMangaDetails(Number(this.isMangaSelected))}openMangaDetails(n){this._MangaStore.selectMangaByIdAndOpenSheet({attributes:[],mangaId:n})}}r.\u0275fac=function(n){return new(n||r)(a.Y36(l.K),a.Y36(d.gz))},r.\u0275cmp=a.Xpm({type:r,selectors:[["ng-component"]],standalone:!0,features:[a.jDz],decls:5,vars:6,consts:[["class","mangaContainer",4,"ngIf"],[4,"ngIf"],[1,"mangaContainer"],[3,"manga","openMangaDetails",4,"ngFor","ngForOf"],[3,"manga","openMangaDetails"],["mode","indeterminate",1,"progressBar"]],template:function(n,t){1&n&&(a.TgZ(0,"div"),a.YNc(1,f,3,3,"span",0),a.ALo(2,"async"),a.YNc(3,C,2,0,"span",1),a.ALo(4,"async"),a.qZA()),2&n&&(a.xp6(1),a.Q6J("ngIf",!a.lcZ(2,2,t.isMangaLoading$)),a.xp6(2),a.Q6J("ngIf",a.lcZ(4,4,t.isMangaLoading$)))},dependencies:[s.ez,s.sg,s.O5,s.Ov,g,c.Cv,c.pW],styles:[".mangaContainer[_ngcontent-%COMP%]{display:flex;align-content:space-between;flex-wrap:wrap;justify-content:space-around}.progressBar[_ngcontent-%COMP%]{position:absolute;top:50%}"],changeDetection:0})}}]);