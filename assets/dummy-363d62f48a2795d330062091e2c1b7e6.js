define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/md-collapse",["exports","ember-materials/components/md-collapse"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/md-component",["exports","ember-materials/components/md-component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/md-navbar",["exports","ember-materials/components/md-navbar"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/md-sidenav",["exports","ember-materials/components/md-sidenav"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var l=a(d.toString());n["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("comps",{path:"/components"},function(){this.route("sidenav"),this.route("collapse"),this.route("buttons"),this.route("navbar"),this.route("modals"),this.route("dialogs")})}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","app-container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","doc-header");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h2"),d=e.createTextNode("Components");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","doc-container");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(e.childAt(t,[2,3]),1,1),e.insertBoundary(t,0),a},statements:[["inline","partial",["navigation"],[]],["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/templates/components/md-collapse",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/md-collapse.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","yield"]],locals:[],templates:[]}}())}),define("dummy/templates/components/md-navbar",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:3,column:4},end:{line:8,column:4}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"type","button");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","icon-bar"),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","icon-bar"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createElementMorph(a),r},statements:[["attribute","class",["concat",["md-collapse-btn ",["subexpr","if",[["get","isCollapsed"],"collapsed"],[]]]]],["element","action",["toggleCollapse"],[]]],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:10,column:6},end:{line:12,column:6}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","link-to",[["get","title"],["get","titlePath"]],[]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:12,column:6},end:{line:14,column:6}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","navbar-title");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","title"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:9,column:4},end:{line:15,column:4}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","titlePath"]],[],0,1]],locals:[],templates:[e,t]}}(),n=function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:19,column:4},end:{line:21,column:4}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","yield"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:18,column:2},end:{line:22,column:2}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","md-collapse",[],["class","navbar-collapse","show",["subexpr","@mut",[["get","isCollapsed"]],[]]],0,null]],locals:[],templates:[e]}}(),a=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:22,column:2},end:{line:24,column:2}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","yield"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"dummy/templates/components/md-navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar-header");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[1]),d=new Array(4);return d[0]=e.createAttrMorph(a,"class"),d[1]=e.createMorphAt(r,1,1),d[2]=e.createMorphAt(r,2,2),d[3]=e.createMorphAt(a,3,3),d},statements:[["attribute","class",["get","containerClass"]],["block","if",[["get","collapsable"]],[],0,null],["block","if",[["get","title"]],[],1,null],["block","if",[["get","collapsable"]],[],2,3]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/templates/components/md-sidenav",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/md-sidenav.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","yield"]],locals:[],templates:[]}}())}),define("dummy/templates/comps/navbar",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:3,column:4},end:{line:12,column:4}},moduleName:"dummy/templates/comps/navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","navbar-nav");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("a"),r=e.createTextNode("Link");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("a"),r=e.createTextNode("Link");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("a"),r=e.createTextNode("Link");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","navbar-nav right");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("a"),r=e.createTextNode("Link");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/comps/navbar.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","doc-example");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","doc-example-body"),e.setAttribute(a,"style","height: 280px;");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0,1]),1,1),a},statements:[["block","md-navbar",[],["title","Example","class","doc-navbar","fluid",!0],0,null]],locals:[],templates:[e]}}())}),define("dummy/templates/navigation",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:27,column:0}},moduleName:"dummy/templates/navigation.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","sidenav-header");var a=e.createTextNode("\n\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"class","sidemenu-nav");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("a"),d=e.createTextNode("Components");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","md-collapse");var d=e.createTextNode("\n        ");e.appendChild(r,d);var d=e.createElement("ul");e.setAttribute(d,"class","sidemenu-nested-nav");var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("li"),i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("li"),i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("li"),i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("li"),i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("a"),d=e.createTextNode("Services");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","md-collapse");var d=e.createTextNode("\n        ");e.appendChild(r,d);var d=e.createElement("ul");e.setAttribute(d,"class","sidemenu-nested-nav");var l=e.createTextNode("\n\n        ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3,1,3,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[3]),0,0),r[2]=e.createMorphAt(e.childAt(a,[5]),0,0),r[3]=e.createMorphAt(e.childAt(a,[7]),0,0),r},statements:[["inline","link-to",["Buttons","comps.buttons"],[]],["inline","link-to",["Buttons","comps.buttons"],[]],["inline","link-to",["Sidenav","comps.sidenav"],[]],["inline","link-to",["Navbar","comps.navbar"],[]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"dummy/templates/navigation.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","md-sidenav",[],[],0,null]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-materials",version:"0.0.0.1e118301"});