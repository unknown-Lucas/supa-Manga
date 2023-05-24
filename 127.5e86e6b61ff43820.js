"use strict";(self.webpackChunkmanga_hub=self.webpackChunkmanga_hub||[]).push([[127],{9127:(A,d,n)=>{n.r(d),n.d(d,{ReaderComponent:()=>h});var C=n(4707),g=n(9300),u=n(2722),f=n(5698),t=n(4650),v=n(4645),y=n(4989),p=n(3127),r=n(6895),l=n(3162),I=n(2708),Z=n(9359),m=n(7392),c=n(4859);class i{constructor(a,e){this._bottomSheet=a,this._router=e,this.mangaId=0,this.nextChapter="",this.lastChapter=""}goToLastChapter(){this._router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this._router.navigate([`/reader/${this.mangaId}/${this.lastChapter}`]))}openManga(){this._bottomSheet.open(I.N)}goToNextChapter(){this._router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this._router.navigate([`/reader/${this.mangaId}/${this.nextChapter}`]))}}function x(o,a){1&o&&t._UZ(0,"img",5),2&o&&t.Q6J("ngSrc",a.$implicit)}function $(o,a){if(1&o&&(t.TgZ(0,"div",2),t._UZ(1,"app-reader-actions",3),t.YNc(2,x,1,1,"img",4),t.ALo(3,"async"),t._UZ(4,"app-reader-actions",3),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("nextChapter",e.nextChapter)("mangaId",e.mangaId)("lastChapter",e.lastChapter),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,7,e.images$)),t.xp6(2),t.Q6J("nextChapter",e.nextChapter)("mangaId",e.mangaId)("lastChapter",e.lastChapter)}}function T(o,a){1&o&&(t.TgZ(0,"span"),t._UZ(1,"mat-progress-bar",6),t.qZA())}function R(o,a){1&o&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"there is no images for this chapters we are sorry!!"),t.qZA()())}i.\u0275fac=function(a){return new(a||i)(t.Y36(Z.ch),t.Y36(p.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-reader-actions"]],inputs:{mangaId:"mangaId",nextChapter:"nextChapter",lastChapter:"lastChapter"},standalone:!0,features:[t.jDz],decls:10,vars:2,consts:[[1,"chaptherButtonContainer"],["mat-fab","",3,"disabled","click"],["mat-raised-button","",3,"click"]],template:function(a,e){1&a&&(t.TgZ(0,"span",0)(1,"button",1),t.NdJ("click",function(){return e.goToLastChapter()}),t.TgZ(2,"mat-icon"),t._uU(3,"keyboard_arrow_left"),t.qZA()(),t.TgZ(4,"button",2),t.NdJ("click",function(){return e.openManga()}),t.TgZ(5,"mat-icon"),t._uU(6," open_in_browser"),t.qZA()(),t.TgZ(7,"button",1),t.NdJ("click",function(){return e.goToNextChapter()}),t.TgZ(8,"mat-icon"),t._uU(9,"keyboard_arrow_right"),t.qZA()()()),2&a&&(t.xp6(1),t.Q6J("disabled",!e.lastChapter),t.xp6(6),t.Q6J("disabled",!e.nextChapter))},dependencies:[m.Ps,m.Hw,c.ot,c.lW,c.cs,r.ez],styles:[".chaptherButtonContainer[_ngcontent-%COMP%]{display:flex;width:80vw;justify-content:space-evenly;align-items:center;padding-top:2vh;padding-bottom:2vh}"]});class h{constructor(a,e,s,b){this._chapterStore=a,this._mangaStore=e,this._route=s,this._router=b,this.nextChapter="",this.lastChapter="",this.destroy$=new C.t,this.mangaId=Number(this._route.snapshot.paramMap.get("mangaId")),isNaN(this.mangaId)&&this._router.navigate(["home"]),this.chapterCode=this._route.snapshot.paramMap.get("code"),this.chapterCode||this._router.navigate(["home"]),this.images$=this._chapterStore.chapterImages$,this.loading$=this._chapterStore.chapterImagesLoading$,this.chapters$=this._chapterStore.mangaChapters$,this.chaptersLoading$=this._chapterStore.isMangaChaptersLoading$}ngOnInit(){this._chapterStore.getChapterImages(this.chapterCode??""),this.chapters$.pipe((0,g.h)(a=>!Boolean(a))).pipe((0,u.R)(this.destroy$)).subscribe(()=>{this._mangaStore.selectMangaById({mangaId:this.mangaId,attributes:["*"]})}),this.chapters$.pipe((0,g.h)(a=>Boolean(a))).pipe((0,f.q)(1)).subscribe(a=>{const e=a?.chapterCodes.findIndex(s=>s===this.chapterCode)??0;this.nextChapter=a?.chapterCodes[e+1],this.lastChapter=a?.chapterCodes[e-1]})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}h.\u0275fac=function(a){return new(a||h)(t.Y36(v.f),t.Y36(y.K),t.Y36(p.gz),t.Y36(p.F0))},h.\u0275cmp=t.Xpm({type:h,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:7,vars:11,consts:[["class","imageReaderContainer",4,"ngIf"],[4,"ngIf"],[1,"imageReaderContainer"],[3,"nextChapter","mangaId","lastChapter"],["width","900","height","1200","loading","lazy","fetchpriority","auto","alt","",3,"ngSrc",4,"ngFor","ngForOf"],["width","900","height","1200","loading","lazy","fetchpriority","auto","alt","",3,"ngSrc"],["mode","indeterminate",1,"progressBar"]],template:function(a,e){if(1&a&&(t.YNc(0,$,5,9,"div",0),t.ALo(1,"async"),t.YNc(2,T,2,0,"span",1),t.ALo(3,"async"),t.YNc(4,R,3,0,"div",1),t.ALo(5,"async"),t.ALo(6,"async")),2&a){let s;t.Q6J("ngIf",!t.lcZ(1,3,e.loading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,5,e.loading$)),t.xp6(2),t.Q6J("ngIf",!(t.lcZ(5,7,e.loading$)||null!=(s=t.lcZ(6,9,e.images$))&&s.length))}},dependencies:[r.ez,r.sg,r.O5,r.Ov,r.Zd,l.Cv,l.pW,i],styles:[".progressBar[_ngcontent-%COMP%]{position:absolute;top:50%}.imageReaderContainer[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"]})}}]);