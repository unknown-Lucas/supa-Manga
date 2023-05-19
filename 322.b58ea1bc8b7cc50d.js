"use strict";(self.webpackChunkmanga_hub=self.webpackChunkmanga_hub||[]).push([[322],{4645:(S,A,o)=>{o.d(A,{f:()=>h});var r=o(9680),c=o(9653),f=o(2995);const b=(0,c.P1)(f.FK,u=>u.chapters.chapterCollection.loading),E=(0,c.P1)(f.FK,u=>u.chapters.selectedChapter.images),D=(0,c.P1)(f.FK,u=>u.chapters.selectedChapter.loading),e=(0,c.P1)(f.FK,u=>u.chapters.chapterCollection.chapter);var _=o(4650);class h{constructor(x){this._store=x,this.mangaChapters$=this._store.select(e),this.isMangaChaptersLoading$=this._store.select(b),this.chapterImages$=this._store.select(E),this.chapterImagesLoading$=this._store.select(D)}getChapters({...x}){this._store.dispatch(r.$.GET_MANGA_CHAPTERS(x))}getChapterImages(x){this._store.dispatch(r.$.GET_MANGA_CHAPTERS_IMAGES({chapterCode:x}))}}h.\u0275fac=function(x){return new(x||h)(_.LFG(c.yh))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})},2995:(S,A,o)=>{o.d(A,{FK:()=>c,MP:()=>b,Re:()=>f,Y8:()=>E,ty:()=>D});var r=o(9653);const c=(0,r.ZF)("MangaModule"),f=(0,r.P1)(c,_=>_.manga.mangaCollection.collection),b=(0,r.P1)(c,_=>_.manga.mangaCollection.loading),E=(0,r.P1)(c,_=>_.manga.mangaSelected.loading),D=(0,r.P1)(c,_=>_.manga.mangaSelected.mangaSelected);(0,r.P1)(c,_=>Boolean(_.manga.mangaCollection.collection.length))},4989:(S,A,o)=>{o.d(A,{K:()=>e});var r=o(2995),c=o(6634),f=o(3877),b=o(4650),E=o(9653),D=o(9359);class e{constructor(h,u){this._store=h,this._bottomSheet=u,this.mangaCollection$=this._store.select(r.Re),this.isMangaCollectionLoading$=this._store.select(r.MP),this.mangaSelected$=this._store.select(r.ty),this.isMangaSelectedLoading$=this._store.select(r.Y8)}getMangas(h){this._store.dispatch(c.h.GET_MANGAS({attributes:h}))}selectMangaByIdAndOpenSheet({...h}){this._store.dispatch(c.h.SELECT_MANGA_BY_ID(h)),this._bottomSheet.open(f.N)}selectMangaById({...h}){this._store.dispatch(c.h.SELECT_MANGA_BY_ID(h))}}e.\u0275fac=function(h){return new(h||e)(b.LFG(E.yh),b.LFG(D.ch))},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})},3877:(S,A,o)=>{o.d(A,{N:()=>k});var r=o(4707),c=o(2722),f=o(9300),b=o(5698),E=o(745),D=o(2340),e=o(4650),_=o(4989),h=o(4645),u=o(9653),x=o(8976),l=o(9359),d=o(6895),s=o(4859),p=o(2994),y=o(3162),I=o(7392);class P{constructor(a){this._store=a,this.manga_id=0,this.liked=!1,this.user_id=""}likeManga(){console.log(this.manga_id,this.user_id)}}P.\u0275fac=function(a){return new(a||P)(e.Y36(u.yh))},P.\u0275cmp=e.Xpm({type:P,selectors:[["app-like-button"]],inputs:{manga_id:"manga_id",liked:"liked",user_id:"user_id"},standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[["mat-icon-button","",3,"color","click"]],template:function(a,t){1&a&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return t.likeManga()}),e.TgZ(1,"mat-icon"),e._uU(2,"favorite"),e.qZA()()),2&a&&e.Q6J("color",t.liked?"warn":"")},dependencies:[d.ez,s.ot,s.RK,I.Ps,I.Hw],encapsulation:2});var $=o(3127),G=o(5017),w=o(1281),F=o(7579),K=o(727);let se=0;const N=new e.OlP("CdkAccordion");let de=(()=>{class n{constructor(){this._stateChanges=new F.x,this._openCloseAllActions=new F.x,this.id="cdk-accordion-"+se++,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,w.Ig)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:N,useExisting:n}]),e.TTD]}),n})(),le=0,ce=(()=>{class n{get expanded(){return this._expanded}set expanded(t){t=(0,w.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,w.Ig)(t)}constructor(t,i,m){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=m,this._openCloseAllSubscription=K.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+le++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=m.listen((g,v)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===v&&this.id!==g&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N,12),e.Y36(e.sBO),e.Y36(G.A8))},n.\u0275dir=e.lG2({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:N,useValue:void 0}])]}),n})(),pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var Y=o(4080),Q=o(3238),J=o(2687),me=o(1884),V=o(8675),X=o(9521),ge=o(515),he=o(6451),C=o(7340);const ue=["body"];function fe(n,a){}const _e=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],be=["mat-expansion-panel-header","*","mat-action-row"];function xe(n,a){if(1&n&&e._UZ(0,"span",2),2&n){const t=e.oxw();e.Q6J("@indicatorRotate",t._getExpandedState())}}const ye=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ce=["mat-panel-title","mat-panel-description","*"],z=new e.OlP("MAT_ACCORDION"),W="225ms cubic-bezier(0.4,0.0,0.2,1)",q={indicatorRotate:(0,C.X$)("indicatorRotate",[(0,C.SB)("collapsed, void",(0,C.oB)({transform:"rotate(0deg)"})),(0,C.SB)("expanded",(0,C.oB)({transform:"rotate(180deg)"})),(0,C.eR)("expanded <=> collapsed, void => collapsed",(0,C.jt)(W))]),bodyExpansion:(0,C.X$)("bodyExpansion",[(0,C.SB)("collapsed, void",(0,C.oB)({height:"0px",visibility:"hidden"})),(0,C.SB)("expanded",(0,C.oB)({height:"*",visibility:"visible"})),(0,C.eR)("expanded <=> collapsed, void => collapsed",(0,C.jt)(W))])},ee=new e.OlP("MAT_EXPANSION_PANEL");let ve=(()=>{class n{constructor(t,i){this._template=t,this._expansionPanel=i}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc),e.Y36(ee,8))},n.\u0275dir=e.lG2({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]}),n})(),Me=0;const te=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let ne=(()=>{class n extends ce{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,w.Ig)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,m,g,v,O,Z){super(t,i,m),this._viewContainerRef=g,this._animationMode=O,this._hideToggle=!1,this.afterExpand=new e.vpe,this.afterCollapse=new e.vpe,this._inputChanges=new F.x,this._headerId="mat-expansion-panel-header-"+Me++,this._bodyAnimationDone=new F.x,this.accordion=t,this._document=v,this._bodyAnimationDone.pipe((0,me.x)((T,M)=>T.fromState===M.fromState&&T.toState===M.toState)).subscribe(T=>{"void"!==T.fromState&&("expanded"===T.toState?this.afterExpand.emit():"collapsed"===T.toState&&this.afterCollapse.emit())}),Z&&(this.hideToggle=Z.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,V.O)(null),(0,f.h)(()=>this.expanded&&!this._portal),(0,b.q)(1)).subscribe(()=>{this._portal=new Y.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(z,12),e.Y36(e.sBO),e.Y36(G.A8),e.Y36(e.s_b),e.Y36(d.K0),e.Y36(e.QbO,8),e.Y36(te,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,m){if(1&t&&e.Suo(m,ve,5),2&t){let g;e.iGM(g=e.CRH())&&(i._lazyContent=g.first)}},viewQuery:function(t,i){if(1&t&&e.Gf(ue,5),2&t){let m;e.iGM(m=e.CRH())&&(i._body=m.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,i){2&t&&e.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:z,useValue:void 0},{provide:ee,useExisting:n}]),e.qOj,e.TTD],ngContentSelectors:be,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){1&t&&(e.F$t(_e),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(g){return i._bodyAnimationDone.next(g)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,fe,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),e.uIk("aria-labelledby",i._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",i._portal))},dependencies:[Y.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[q.bodyExpansion]},changeDetection:0}),n})();class Ae{}const Ee=(0,Q.sb)(Ae);let ae=(()=>{class n extends Ee{constructor(t,i,m,g,v,O,Z){super(),this.panel=t,this._element=i,this._focusMonitor=m,this._changeDetectorRef=g,this._animationMode=O,this._parentChangeSubscription=K.w0.EMPTY;const T=t.accordion?t.accordion._stateChanges.pipe((0,f.h)(M=>!(!M.hideToggle&&!M.togglePosition))):ge.E;this.tabIndex=parseInt(Z||"")||0,this._parentChangeSubscription=(0,he.T)(t.opened,t.closed,T,t._inputChanges.pipe((0,f.h)(M=>!!(M.hideToggle||M.disabled||M.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,f.h)(()=>t._containsFocus())).subscribe(()=>m.focusVia(i,"program")),v&&(this.expandedHeight=v.expandedHeight,this.collapsedHeight=v.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case X.L_:case X.K5:(0,X.Vb)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(ne,1),e.Y36(e.SBq),e.Y36(J.tE),e.Y36(e.sBO),e.Y36(te,8),e.Y36(e.QbO,8),e.$8M("tabindex"))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,i){1&t&&e.NdJ("click",function(){return i._toggle()})("keydown",function(g){return i._keydown(g)}),2&t&&(e.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),e.Udp("height",i._getHeaderHeight()),e.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:Ce,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(t,i){1&t&&(e.F$t(ye),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,xe,1,1,"span",1)),2&t&&(e.ekj("mat-content-hide-toggle",!i._showToggle()),e.xp6(4),e.Q6J("ngIf",i._showToggle()))},dependencies:[d.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[q.indicatorRotate]},changeDetection:0}),n})(),Pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),n})(),Te=(()=>{class n extends de{constructor(){super(...arguments),this._ownHeaders=new e.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=(0,w.Ig)(t)}ngAfterContentInit(){this._headers.changes.pipe((0,V.O)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new J.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,i,m){if(1&t&&e.Suo(m,ae,5),2&t){let g;e.iGM(g=e.CRH())&&(i._headers=g)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){2&t&&e.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e._Bn([{provide:z,useExisting:n}]),e.qOj]}),n})(),De=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,Q.BQ,pe,Y.eL]}),n})();function Oe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"button",2),e._uU(6,"unreaded"),e.qZA(),e.TgZ(7,"button",3),e.NdJ("click",function(){const g=e.CHM(t).$implicit,v=e.oxw();return e.KtG(v.readChapter(g))}),e.TgZ(8,"mat-icon"),e._uU(9,"open_in_browser"),e.qZA()()()()}if(2&n){const t=a.index;e.xp6(3),e.Oqu(t)}}class B{constructor(a,t){this._router=a,this._matBottomSheetRef=t}get chapterCodes(){return this.chapters?.chapterCodes}readChapter(a){this._matBottomSheetRef.dismiss(),this._router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this._router.navigate([`/reader/${this.mangaId}/${a}`]))}}function Ie(n,a){if(1&n&&(e._UZ(0,"app-manga-chapters-list",12),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const t=e.oxw(2);let i;e.Q6J("chapters",e.lcZ(1,2,t.mangaChapters$))("mangaId",null==(i=e.lcZ(2,4,t.manga$))?null:i._id)}}function Ze(n,a){if(1&n&&(e.TgZ(0,"span")(1,"b")(2,"h1",2),e._uU(3),e.ALo(4,"async"),e.qZA()(),e._UZ(5,"hr"),e.TgZ(6,"div")(7,"div",3),e._UZ(8,"img",4),e.ALo(9,"async"),e.ALo(10,"async"),e.TgZ(11,"div",5)(12,"p",6)(13,"b"),e._uU(14,"State: "),e.qZA(),e._uU(15),e.ALo(16,"async"),e._UZ(17,"span",7),e.ALo(18,"async"),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"p")(21,"b"),e._uU(22,"Genre:"),e.qZA(),e._uU(23),e.ALo(24,"async"),e.qZA(),e.TgZ(25,"p")(26,"b"),e._uU(27,"Content type:"),e.qZA(),e._uU(28),e.ALo(29,"async"),e.qZA(),e._UZ(30,"br"),e.TgZ(31,"p")(32,"b"),e._uU(33,"Author:"),e.qZA(),e._uU(34),e.ALo(35,"async"),e.qZA(),e.TgZ(36,"p")(37,"b"),e._uU(38,"Artist:"),e.qZA(),e._uU(39),e.ALo(40,"async"),e.qZA(),e._UZ(41,"br"),e.TgZ(42,"p")(43,"b"),e._uU(44,"Created At:"),e.qZA(),e._uU(45),e.ALo(46,"date"),e.ALo(47,"async"),e.qZA(),e.TgZ(48,"p")(49,"b"),e._uU(50,"Updated At:"),e.qZA(),e._uU(51),e.ALo(52,"date"),e.ALo(53,"async"),e.qZA(),e._UZ(54,"br"),e.TgZ(55,"div",8),e._UZ(56,"app-share-button",9),e.ALo(57,"async"),e._UZ(58,"app-like-button",10),e.ALo(59,"async"),e.ALo(60,"async"),e.ALo(61,"async"),e.qZA()()(),e._UZ(62,"hr"),e.TgZ(63,"b"),e._uU(64,"description:"),e.qZA(),e._UZ(65,"br"),e.TgZ(66,"p"),e._uU(67),e.ALo(68,"async"),e.qZA()(),e.TgZ(69,"h2"),e._uU(70,"Chapters:"),e.qZA(),e.YNc(71,Ie,3,6,"app-manga-chapters-list",11),e.ALo(72,"async"),e.qZA()),2&n){const t=e.oxw();let i,m,g,v,O,Z,T,M,ie,oe,re,L,R,U,j,H;e.xp6(3),e.Oqu(null==(i=e.lcZ(4,17,t.manga$))?null:i.title),e.xp6(5),e.Q6J("alt",(null==(m=e.lcZ(10,21,t.manga$))?null:m.title)+"cover"),e.uIk("src",null==(g=e.lcZ(9,19,t.manga$))?null:g.cover,e.LSH),e.xp6(7),e.hij(" ",null==(v=e.lcZ(16,23,t.manga$))?null:v.state," "),e.xp6(2),e.Q6J("ngClass",t.getMangaStateClass(null!==(O=null==(O=e.lcZ(18,25,t.manga$))?null:O.state)&&void 0!==O?O:"ongoing")),e.xp6(6),e.hij(" ",null==(Z=e.lcZ(24,27,t.manga$))?null:Z.genre,""),e.xp6(5),e.hij(" ",null==(T=e.lcZ(29,29,t.manga$))?null:T.contentRating,""),e.xp6(6),e.hij(" ",null==(M=e.lcZ(35,31,t.manga$))?null:M.author,""),e.xp6(5),e.hij(" ",null==(ie=e.lcZ(40,33,t.manga$))?null:ie.artist,""),e.xp6(6),e.hij(" ",e.lcZ(46,35,null==(oe=e.lcZ(47,37,t.manga$))?null:oe.creationDate),""),e.xp6(6),e.hij(" ",e.lcZ(52,39,null==(re=e.lcZ(53,41,t.manga$))?null:re.updatedAt),""),e.xp6(5),e.Q6J("url",t.getMangaUrl(null!==(L=null==(L=e.lcZ(57,43,t.manga$))?null:L._id)&&void 0!==L?L:0)),e.xp6(2),e.Q6J("manga_id",null!==(R=null==(R=e.lcZ(59,45,t.manga$))?null:R._id)&&void 0!==R?R:0)("liked",null!==(U=null==(U=e.lcZ(60,47,t.manga$))?null:U.liked)&&void 0!==U&&U)("user_id",null!==(j=e.lcZ(61,49,t.actualUserId$))&&void 0!==j?j:""),e.xp6(9),e.Oqu(null!==(H=null==(H=e.lcZ(68,51,t.manga$))?null:H.description)&&void 0!==H?H:""),e.xp6(4),e.Q6J("ngIf",!e.lcZ(72,53,t.mangaChaptersLoading$))}}function Se(n,a){1&n&&(e.TgZ(0,"span"),e._UZ(1,"mat-progress-bar",13),e.qZA())}B.\u0275fac=function(a){return new(a||B)(e.Y36($.F0),e.Y36(l.oL))},B.\u0275cmp=e.Xpm({type:B,selectors:[["app-manga-chapters-list"]],inputs:{chapters:"chapters",mangaId:"mangaId"},standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","space-around","align-items","center"],["mat-button",""],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"mat-accordion"),e.YNc(1,Oe,10,1,"mat-expansion-panel",0),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngForOf",t.chapterCodes))},dependencies:[d.ez,d.sg,s.ot,s.lW,s.cs,I.Ps,I.Hw,De,Te,ne,ae,Pe],changeDetection:0});class k{constructor(a,t,i,m,g){this._mangaStore=a,this._chapterStore=t,this._store=i,this._authStore=m,this._matBottomSheetRef=g,this.destroy$=new r.t,this.manga$=this._mangaStore.mangaSelected$,this.mangaChapters$=this._chapterStore.mangaChapters$,this.mangaChaptersLoading$=this._chapterStore.isMangaChaptersLoading$,this.actualUserId$=this._authStore.userId$,this.loading$=this._mangaStore.isMangaSelectedLoading$}getMangaUrl(a){return`${D.N.myHost}/home/${a}`}ngAfterViewInit(){this.loading$.pipe((0,c.R)(this.destroy$)).pipe((0,f.h)(a=>!a)).subscribe(()=>{this.manga$.pipe((0,b.q)(1)).subscribe(a=>{a||(this._matBottomSheetRef.dismiss(),this._store.dispatch(E.f.SHOW_WARNING_MESSAGE({message:"There is no such manga"})))})})}likeManga(){let a=null;this.manga$.pipe((0,b.q)(1)).subscribe(t=>a=t?._id??0)}getMangaStateClass(a){return{ongoing:"ongoing-header-image",completed:"completed-header-image",cancelled:"cancelled-header-image",hiatus:"hiatus-header-image"}[a]}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}k.\u0275fac=function(a){return new(a||k)(e.Y36(_.K),e.Y36(h.f),e.Y36(u.yh),e.Y36(x.C),e.Y36(l.oL))},k.\u0275cmp=e.Xpm({type:k,selectors:[["app-manga-details"]],standalone:!0,features:[e.jDz],decls:5,vars:6,consts:[[1,"mangaCard"],[4,"ngIf"],[2,"text-align","center"],[1,"mangaAttributes"],["loading","eager",1,"mangaCover",3,"alt"],[1,"mangaData"],[1,"stateDetail"],[2,"height","20px","width","20px",3,"ngClass"],[1,"actions"],[3,"url"],[3,"manga_id","liked","user_id"],[3,"chapters","mangaId",4,"ngIf"],[3,"chapters","mangaId"],["mode","indeterminate",1,"progressBar"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0),e.YNc(1,Ze,73,55,"span",1),e.ALo(2,"async"),e.YNc(3,Se,2,0,"span",1),e.ALo(4,"async"),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,2,t.loading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,4,t.loading$)))},dependencies:[d.ez,d.mk,d.O5,d.Ov,d.uU,s.ot,p.o,y.Cv,y.pW,P,B],styles:[".mangaAttributes[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.mangaData[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.stateDetail[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.mangaCover[_ngcontent-%COMP%]{border:5px solid;max-width:40vw;max-height:36vh;border-color:#673ab7;float:left;margin:1vw}.mangaCard[_ngcontent-%COMP%]{border-radius:20px;max-width:35vw}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media only screen and (min-device-width: 280px) and (max-device-width: 824px){.mangaAttributes[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.mangaCard[_ngcontent-%COMP%]{max-width:100vw}.stateDetail[_ngcontent-%COMP%]{display:flex}}"],changeDetection:0})},2994:(S,A,o)=>{o.d(A,{o:()=>x});var r=o(745),c=o(4650),f=o(9653),b=o(6895);class E{constructor(d,s){this._document=s;const p=this._textarea=this._document.createElement("textarea"),y=p.style;y.position="fixed",y.top=y.opacity="0",y.left="-999em",p.setAttribute("aria-hidden","true"),p.value=d,p.readOnly=!0,this._document.body.appendChild(p)}copy(){const d=this._textarea;let s=!1;try{if(d){const p=this._document.activeElement;d.select(),d.setSelectionRange(0,d.value.length),s=this._document.execCommand("copy"),p&&p.focus()}}catch{}return s}destroy(){const d=this._textarea;d&&(d.remove(),this._textarea=void 0)}}let D=(()=>{class l{constructor(s){this._document=s}copy(s){const p=this.beginCopy(s),y=p.copy();return p.destroy(),y}beginCopy(s){return new E(s,this._document)}}return l.\u0275fac=function(s){return new(s||l)(c.LFG(b.K0))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var u=o(4859);class x{constructor(d,s){this._store=d,this.clipboard=s,this.url=""}shareUrl(){this._store.dispatch(r.f.SHOW_OK_MESSAGE({message:"Succesfully copied to the clipboard!!"})),this.clipboard.copy(this.url)}}x.\u0275fac=function(d){return new(d||x)(c.Y36(f.yh),c.Y36(D))},x.\u0275cmp=c.Xpm({type:x,selectors:[["app-share-button"]],inputs:{url:"url"},standalone:!0,features:[c.jDz],decls:2,vars:0,consts:[["mat-raised-button","",3,"click"]],template:function(d,s){1&d&&(c.TgZ(0,"button",0),c.NdJ("click",function(){return s.shareUrl()}),c._uU(1,"SHARE"),c.qZA())},dependencies:[b.ez,u.ot,u.lW],encapsulation:2})},3162:(S,A,o)=>{o.d(A,{Cv:()=>x,pW:()=>h});var r=o(4650),f=(o(6895),o(3238)),b=o(1281);const E=new r.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),_=(0,f.pj)(class{constructor(l){this._elementRef=l}},"primary");let h=(()=>{class l extends _{constructor(s,p,y,I,P){super(s),this._ngZone=p,this._changeDetectorRef=y,this._animationMode=I,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.vpe,this._mode="determinate",this._transitionendHandler=$=>{0===this.animationEnd.observers.length||!$.target||!$.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===I,P&&(P.color&&(this.color=this.defaultColor=P.color),this.mode=P.mode||this.mode)}get value(){return this._value}set value(s){this._value=u((0,b.su)(s)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(s){this._bufferValue=u((0,b.su)(s)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(s){this._mode=s,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return l.\u0275fac=function(s){return new(s||l)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(r.sBO),r.Y36(r.QbO,8),r.Y36(E,8))},l.\u0275cmp=r.Xpm({type:l,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(s,p){2&s&&(r.uIk("aria-valuenow",p._isIndeterminate()?null:p.value)("mode",p.mode),r.ekj("_mat-animation-noopable",p._isNoopAnimation)("mdc-linear-progress--animation-ready",!p._isNoopAnimation)("mdc-linear-progress--indeterminate",p._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(s,p){1&s&&(r.TgZ(0,"div",0),r._UZ(1,"div",1)(2,"div",2),r.qZA(),r.TgZ(3,"div",3),r._UZ(4,"span",4),r.qZA(),r.TgZ(5,"div",5),r._UZ(6,"span",4),r.qZA()),2&s&&(r.xp6(1),r.Udp("flex-basis",p._getBufferBarFlexBasis()),r.xp6(2),r.Udp("transform",p._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),l})();function u(l,d=0,s=100){return Math.max(d,Math.min(s,l))}let x=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[f.BQ]}),l})()}}]);