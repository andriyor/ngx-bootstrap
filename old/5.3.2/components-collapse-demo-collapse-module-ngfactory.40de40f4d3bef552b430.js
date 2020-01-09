(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+uRF":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'inline-display-demo',\n  templateUrl: './inline-display.html'\n})\nexport class InlineDisplayDemoComponent {\n  isCollapsed = false;\n}\n"},"1IbB":function(l,n){l.exports='<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="isCollapsed">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},ALJz:function(l,n){l.exports="import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n// RECOMMENDED\nimport { CollapseModule } from 'ngx-bootstrap/collapse';\n// or\nimport { CollapseModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    CollapseModule.forRoot(),\n    ...\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n"},AlpK:function(l,n,e){"use strict";e.r(n);var o=e("CcnG"),a=function(){return function(){}}(),u=e("pMnS"),t=e("+R8e"),s=e("R23a"),i=e("7ctM"),c=e("A8CJ"),r=e("qzmI"),p=e("BFzJ"),d=e("/jpH"),b=e("ybC4"),m=e("+6bh"),h=e("oxqd"),g=e("nk7K"),f=function(){return function(){this.isCollapsed=!1}}(),v=function(){return function(){this.isCollapsed=!1}}(),C=function(){function l(){this.isCollapsed=!1}return l.prototype.collapsed=function(){this.message="collapsed"},l.prototype.collapses=function(){this.message="collapses"},l.prototype.expanded=function(){this.message="expanded"},l.prototype.expands=function(){this.message="expands"},l}(),x=function(){return function(){}}(),y=e("ClAA"),w=e("y20O"),L=function(){return function(){this.isCollapsed=!1}}(),k=function(){return function(){this.isOpen=!1}}(),D=e("l3GJ"),B=[{name:"Usage",anchor:"usage",outlet:y.a,content:{doc:e("ALJz")}},{name:"Examples",anchor:"examples",outlet:w.a,content:[{title:"Basic",anchor:"basic",component:e("MzJh"),html:e("1IbB"),outlet:v},{title:"With animation",anchor:"animated",component:e("WoMY"),html:e("IiLA"),description:"You can enable animation via <code>isAnimated</code> input option",outlet:f},{title:"Events",anchor:"events",component:e("IiDp"),html:e("pETD"),description:"Collapse directive exposes 4 events: <code>collapses</code>, that fires when a collapse was triggered (aniamtion start),\n                        <code>collapsed</code>, that fires when a content was hidden (aniamtion finished), \n                        <code>expands</code>, that fires when a expansion was triggered (animation start)\n                      and <code>expanded</code>, that fires when a content was shown`, and <code>expanded</code>, that fires when a content was shown",outlet:C},{title:"Manual toggle",anchor:"manual-toggle",component:e("kk2B"),html:e("UCA4"),outlet:k},{title:"Inline display",anchor:"inline-display",component:e("+uRF"),html:e("L/wy"),outlet:L},{title:"Accessibility",anchor:"accessibility",outlet:x}]},{name:"API Reference",anchor:"api-reference",outlet:g.a,content:[{title:"CollapseDirective",anchor:"collapse-directive",outlet:D.b}]}],E=function(){return function(){this.name="Collapse",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse",this.componentContent=B}}(),A=o.pb({encapsulation:2,styles:[],data:{}});function M(l){return o.Nb(2,[(l()(),o.rb(0,0,null,null,23,"demo-section",[],null,null,null,d.b,d.a)),o.qb(1,49152,null,0,b.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),o.rb(2,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the "])),(l()(),o.rb(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["required transitions component"])),(l()(),o.Lb(-1,null,["("])),(l()(),o.rb(7,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["not yet implemented"])),(l()(),o.Lb(-1,null,[")) for easy toggle behavior."])),(l()(),o.rb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["The easiest way to add the collapse component to your app (will be added to the root module)"])),(l()(),o.rb(12,0,null,0,9,"pre",[["class","prettyprint lang-bash prettyprinted"]],null,null,null,null,null)),(l()(),o.rb(13,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["ng add ngx"])),(l()(),o.rb(15,0,null,null,1,"span",[["class","pun"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["-"])),(l()(),o.rb(17,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["bootstrap "])),(l()(),o.Lb(-1,null,[" --component "])),(l()(),o.rb(20,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["collapse"])),(l()(),o.rb(22,0,null,0,1,"docs-section",[],null,null,null,m.b,m.a)),o.qb(23,49152,null,0,h.a,[o.q],{content:[0,"content"]},null)],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,23,0,e.componentContent)},null)}function I(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"collapse-section",[],null,null,null,M,A)),o.qb(1,49152,null,0,E,[],null,null)],null,null)}var N=o.nb("collapse-section",E,I,{},{},[]),q=e("yD1i"),S=e("ihYY"),T=o.pb({encapsulation:2,styles:[],data:{}});function J(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-primary"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var o=!0,a=l.component;return"click"===n&&(o=0!=(a.isCollapsed=!a.isCollapsed)&&o),o},null,null)),(l()(),o.Lb(-1,null,["Toggle collapse\n"])),(l()(),o.rb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,3,"div",[["id","collapseBasic"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),o.qb(4,8404992,null,0,q.a,[o.k,o.E,S.b],{isAnimated:[0,"isAnimated"],collapse:[1,"collapse"]},null),(l()(),o.rb(5,0,null,null,1,"div",[["class","well well-lg card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Some content"]))],function(l,n){l(n,4,0,!0,n.component.isCollapsed)},function(l,n){l(n,0,0,!n.component.isCollapsed),l(n,3,0,o.Db(n,4).isCollapse,o.Db(n,4).isExpanded,o.Db(n,4).isExpanded,o.Db(n,4).isExpanded,o.Db(n,4).isCollapsed,o.Db(n,4).isCollapsing)})}function O(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"collapse-demo-animation",[],null,null,null,J,T)),o.qb(1,49152,null,0,f,[],null,null)],null,null)}var R=o.nb("collapse-demo-animation",f,O,{},{},[]),U=o.pb({encapsulation:2,styles:[],data:{}});function Y(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-primary"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var o=!0,a=l.component;return"click"===n&&(o=0!=(a.isCollapsed=!a.isCollapsed)&&o),o},null,null)),(l()(),o.Lb(-1,null,["Toggle collapse\n"])),(l()(),o.rb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,3,"div",[["id","collapseBasic"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),o.qb(4,8404992,null,0,q.a,[o.k,o.E,S.b],{collapse:[0,"collapse"]},null),(l()(),o.rb(5,0,null,null,1,"div",[["class","well well-lg card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Some content"]))],function(l,n){l(n,4,0,n.component.isCollapsed)},function(l,n){l(n,0,0,!n.component.isCollapsed),l(n,3,0,o.Db(n,4).isCollapse,o.Db(n,4).isExpanded,o.Db(n,4).isExpanded,o.Db(n,4).isExpanded,o.Db(n,4).isCollapsed,o.Db(n,4).isCollapsing)})}function z(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"collapse-demo",[],null,null,null,Y,U)),o.qb(1,49152,null,0,v,[],null,null)],null,null)}var F=o.nb("collapse-demo",v,z,{},{},[]),H=o.pb({encapsulation:2,styles:[],data:{}});function j(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),o.rb(2,0,null,null,1,"button",[["aria-controls","collapseEvent"],["class","btn btn-primary"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var o=!0,a=l.component;return"click"===n&&(o=0!=(a.isCollapsed=!a.isCollapsed)&&o),o},null,null)),(l()(),o.Lb(-1,null,["Toggle collapse "])),(l()(),o.rb(4,0,null,null,2,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),o.rb(5,0,null,null,1,"pre",[["class","card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(6,null,["Event: ",""])),(l()(),o.rb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(8,0,null,null,3,"div",[["id","collapseEvent"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],[[null,"collapses"],[null,"expands"],[null,"collapsed"],[null,"expanded"]],function(l,n,e){var o=!0,a=l.component;return"collapses"===n&&(o=!1!==a.collapses()&&o),"expands"===n&&(o=!1!==a.expands()&&o),"collapsed"===n&&(o=!1!==a.collapsed()&&o),"expanded"===n&&(o=!1!==a.expanded()&&o),o},null,null)),o.qb(9,8404992,null,0,q.a,[o.k,o.E,S.b],{isAnimated:[0,"isAnimated"],collapse:[1,"collapse"]},{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"}),(l()(),o.rb(10,0,null,null,1,"div",[["class","well well-lg card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Some content"]))],function(l,n){l(n,9,0,!0,n.component.isCollapsed)},function(l,n){var e=n.component;l(n,2,0,!e.isCollapsed),l(n,6,0,e.message),l(n,8,0,o.Db(n,9).isCollapse,o.Db(n,9).isExpanded,o.Db(n,9).isExpanded,o.Db(n,9).isExpanded,o.Db(n,9).isCollapsed,o.Db(n,9).isCollapsing)})}function W(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"collapse-demo-events",[],null,null,null,j,H)),o.qb(1,49152,null,0,C,[],null,null)],null,null)}var G=o.nb("collapse-demo-events",C,W,{},{},[]),K=o.pb({encapsulation:2,styles:[],data:{}});function P(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,22,"p",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Be sure to add "])),(l()(),o.rb(2,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["aria-expanded"])),(l()(),o.Lb(-1,null,[" to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of "])),(l()(),o.rb(5,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,['aria-expanded="false"'])),(l()(),o.Lb(-1,null,[". If you\u2019ve set the collapsible element to be open by default using the "])),(l()(),o.rb(8,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["show"])),(l()(),o.Lb(-1,null,[" class, set "])),(l()(),o.rb(11,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,['aria-expanded="true"'])),(l()(),o.Lb(-1,null,[" on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed. If the control element\u2019s HTML element is not a button (e.g., an "])),(l()(),o.rb(14,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["<a>"])),(l()(),o.Lb(-1,null,[" or "])),(l()(),o.rb(17,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["<div>"])),(l()(),o.Lb(-1,null,["), the attribute "])),(l()(),o.rb(20,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,['role="button"'])),(l()(),o.Lb(-1,null,[" should be added to the element."])),(l()(),o.rb(23,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),o.Lb(-1,null,["If your control element is targeting a single collapsible element \u2013 i.e. the "])),(l()(),o.rb(25,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["data-target"])),(l()(),o.Lb(-1,null,[" attribute is pointing to an "])),(l()(),o.rb(28,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["id"])),(l()(),o.Lb(-1,null,[" selector \u2013 you should add the "])),(l()(),o.rb(31,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["aria-controls"])),(l()(),o.Lb(-1,null,[" attribute to the control element, containing the "])),(l()(),o.rb(34,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["id"])),(l()(),o.Lb(-1,null,[" of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself."]))],null,null)}function Q(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"demo-accessibility",[],null,null,null,P,K)),o.qb(1,49152,null,0,x,[],null,null)],null,null)}var X=o.nb("demo-accessibility",x,Q,{},{},[]),Z=o.pb({encapsulation:2,styles:[],data:{}});function V(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-success"],["type","button"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==(o.Db(l,6).display="inline-block")&&a),a},null,null)),(l()(),o.Lb(-1,null,["Inline-block\n"])),(l()(),o.rb(2,0,null,null,1,"button",[["aria-controls","collapseBasic"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==(o.Db(l,6).display="none")&&a),a},null,null)),(l()(),o.Lb(-1,null,["None\n"])),(l()(),o.rb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(5,0,null,null,3,"div",[["id","collapseBasic"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),o.qb(6,8404992,[["collapse",4]],0,q.a,[o.k,o.E,S.b],{collapse:[0,"collapse"]},null),(l()(),o.rb(7,0,null,null,1,"div",[["class","well well-lg card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Some content"]))],function(l,n){l(n,6,0,!n.component.isCollapsed)},function(l,n){l(n,5,0,o.Db(n,6).isCollapse,o.Db(n,6).isExpanded,o.Db(n,6).isExpanded,o.Db(n,6).isExpanded,o.Db(n,6).isCollapsed,o.Db(n,6).isCollapsing)})}function $(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"inline-display-demo",[],null,null,null,V,Z)),o.qb(1,49152,null,0,L,[],null,null)],null,null)}var _=o.nb("inline-display-demo",L,$,{},{},[]),ll=o.pb({encapsulation:2,styles:[],data:{}});function nl(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"button",[["aria-controls","collapseManual"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==o.Db(l,6).show()&&a),a},null,null)),(l()(),o.Lb(-1,null,["Show content\n"])),(l()(),o.rb(2,0,null,null,1,"button",[["aria-controls","collapseManual"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==o.Db(l,6).hide()&&a),a},null,null)),(l()(),o.Lb(-1,null,["Hide content\n"])),(l()(),o.rb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(5,0,null,null,3,"div",[["id","collapseManual"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),o.qb(6,8404992,[["collapse",4]],0,q.a,[o.k,o.E,S.b],{collapse:[0,"collapse"]},null),(l()(),o.rb(7,0,null,null,1,"div",[["class","well well-lg card card-block card-header"]],null,null,null,null,null)),(l()(),o.Lb(-1,null,["Some content"]))],function(l,n){l(n,6,0,n.component.isOpen)},function(l,n){l(n,5,0,o.Db(n,6).isCollapse,o.Db(n,6).isExpanded,o.Db(n,6).isExpanded,o.Db(n,6).isExpanded,o.Db(n,6).isCollapsed,o.Db(n,6).isCollapsing)})}function el(l){return o.Nb(0,[(l()(),o.rb(0,0,null,null,1,"toggle-manual-demo",[],null,null,null,nl,ll)),o.qb(1,49152,null,0,k,[],null,null)],null,null)}var ol=o.nb("toggle-manual-demo",k,el,{},{},[]),al=e("Ip0R"),ul=e("gIcY"),tl=e("vSOO"),sl=e("ZYCi"),il=e("xkPD"),cl=e("YAQW"),rl=e("1H/a"),pl=e("57AX"),dl=e("k3/p");e.d(n,"DemoCollapseModuleNgFactory",function(){return bl});var bl=o.ob(a,[],function(l){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[u.a,t.a,s.a,i.a,c.a,r.a,p.a,N,R,F,G,X,_,ol]],[3,o.j],o.x]),o.Bb(4608,al.p,al.o,[o.u,[2,al.F]]),o.Bb(4608,ul.y,ul.y,[]),o.Bb(4608,tl.a,tl.a,[al.i,sl.n]),o.Bb(4608,il.c,il.c,[il.a]),o.Bb(4608,cl.f,cl.f,[]),o.Bb(4608,rl.a,rl.a,[]),o.Bb(1073742336,q.b,q.b,[]),o.Bb(1073742336,al.c,al.c,[]),o.Bb(1073742336,ul.x,ul.x,[]),o.Bb(1073742336,ul.k,ul.k,[]),o.Bb(1073742336,cl.d,cl.d,[]),o.Bb(1073742336,D.d,D.d,[]),o.Bb(1073742336,sl.r,sl.r,[[2,sl.w],[2,sl.n]]),o.Bb(1073742336,w.b,w.b,[]),o.Bb(1073742336,g.b,g.b,[]),o.Bb(1073742336,y.b,y.b,[]),o.Bb(1073742336,il.b,il.b,[]),o.Bb(1073742336,pl.a,pl.a,[]),o.Bb(1073742336,dl.a,dl.a,[]),o.Bb(1073742336,a,a,[]),o.Bb(256,il.a,{},[]),o.Bb(1024,sl.l,function(){return[[{path:"",component:E}]]},[])])})},IiDp:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo-events',\n  templateUrl: './events.html'\n})\nexport class CollapseDemoEventsComponent {\n  isCollapsed = false;\n  message: string;\n\n  collapsed(): void {\n    this.message = 'collapsed';\n  }\n\n  collapses(): void {\n    this.message = 'collapses';\n  }\n\n  expanded(): void {\n    this.message = 'expanded';\n  }\n\n  expands(): void {\n    this.message = 'expands';\n  }\n}\n"},IiLA:function(l,n){l.exports='<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="isCollapsed" [isAnimated]="true">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},"L/wy":function(l,n){l.exports='<button type="button" class="btn btn-success" (click)="collapse.display=\'inline-block\'"\n        aria-controls="collapseBasic">Inline-block\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.display=\'none\'"\n        aria-controls="collapseBasic">None\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="!isCollapsed" #collapse="bs-collapse">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},MzJh:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo',\n  templateUrl: './basic.html'\n})\nexport class CollapseDemoComponent {\n  isCollapsed = false;\n}\n"},UCA4:function(l,n){l.exports='<button type="button" class="btn btn-primary" (click)="collapse.show()"\n        aria-controls="collapseManual">Show content\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.hide()"\n        aria-controls="collapseManual">Hide content\n</button>\n<hr>\n<div id="collapseManual" #collapse="bs-collapse" [collapse]="isOpen">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},WoMY:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo-animation',\n  templateUrl: './animated.html'\n})\nexport class CollapseDemoAnimatedComponent {\n  isCollapsed = false;\n}\n"},kk2B:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'toggle-manual-demo',\n  templateUrl: './toggle-manual.html'\n})\nexport class ToggleManualDemoComponent {\n  isOpen = false;\n}\n"},pETD:function(l,n){l.exports='<div class="row">\n  <div class="col-md-3">\n    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n            [attr.aria-expanded]="!isCollapsed" aria-controls="collapseEvent">Toggle collapse\n    </button>\n  </div>\n  <div class="col-md-9">\n    <pre class="card card-block card-header">Event: {{message}}</pre>\n  </div>\n</div>\n<hr>\n<div id="collapseEvent"\n     [isAnimated]="true"\n     [collapse]="isCollapsed"\n     (collapses)="collapses()"\n     (expands)="expands()"\n     (collapsed)="collapsed()"\n     (expanded)="expanded()">\n\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'}}]);