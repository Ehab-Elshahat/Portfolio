(function(t){function a(a){for(var s,c,n=a[0],o=a[1],l=a[2],v=0,d=[];v<n.length;v++)c=n[v],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var o=e[n];0!==i[o]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0534":function(t,a,e){"use strict";var s=e("9c3d"),i=e.n(s);i.a},"2e7e":function(t,a,e){},3094:function(t,a,e){"use strict";var s=e("6873"),i=e.n(s);i.a},"31fd":function(t,a,e){"use strict";var s=e("af25"),i=e.n(s);i.a},"372e":function(t,a,e){},"3a5f":function(t,a,e){t.exports=e.p+"img/avatar-3.6c5b99aa.jpg"},4545:function(t,a,e){t.exports=e.p+"img/OnNext.bf4c137e.png"},"4ae6":function(t,a,e){"use strict";var s=e("fae1"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Appnav"),e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu",class:{open:t.openNav}},[e("div",{staticClass:"logo"},[e("h1",[t._v(t._s(t.logo.toUpperCase()))])]),e("button",{staticClass:"btn",on:{click:function(a){t.openNav=!t.openNav}}},[e("i",{staticClass:"fas fa-bars"})]),e("ul",{staticClass:"links"},[e("router-link",{attrs:{to:"/",tag:"li",exact:""}},[t._v("Home")]),e("router-link",{attrs:{to:"/about",tag:"li"}},[t._v("About me")]),e("router-link",{attrs:{to:"/skills",tag:"li"}},[t._v("Skills")]),e("router-link",{attrs:{to:"/Services",tag:"li"}},[t._v("Services")]),e("router-link",{attrs:{to:"/Portfolio",tag:"li"}},[t._v("Portfolio")]),e("router-link",{attrs:{to:"/Contact",tag:"li"}},[t._v("Contact")])],1)])},n=[],o={name:"Appnav",data:function(){return{openNav:!1,logo:"abo anas"}}},l=o,u=(e("3094"),e("2877")),v=Object(u["a"])(l,c,n,!1,null,"c1b445dc",null),d=v.exports,m={name:"app",components:{Appnav:d}},p=m,f=(e("4ae6"),Object(u["a"])(p,i,r,!1,null,"6070cf06",null)),h=f.exports,b=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-12"},[e("div",{staticClass:"home-info"},[e("h2",[t._v(" hello world "),e("br"),t._v("I'M "),e("span",{staticClass:"myname"},[t._v(t._s(t.myname))])]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit praesentium deserunt laborum debitis perferendis sed nobis quo officiis doloremque ")]),e("a",{staticClass:"btn",attrs:{href:"/about"}},[t._v("learn more")])])]),t._m(0)])])])},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"home-img"},[s("img",{attrs:{src:e("3a5f"),alt:"avatar img"}})])])}],g={name:"Home",data:function(){return{myname:"Ehab Elshahat"}}},x=g,y=(e("843a"),Object(u["a"])(x,C,_,!1,null,"5e1427d4",null)),k=y.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-lg-6 col-sm-12"},[e("div",{staticClass:"about-info text-capitalize"},[e("h2",[t._v("about me")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur quia laborum? Repellendus doloremque, cum recusandae expedita corrupti ipsam ")]),e("ul",{staticClass:"detals"},[e("li",[e("span",[t._v("name:")]),t._v(" "+t._s(t.myname))]),t._m(1),t._m(2),t._m(3),t._m(4)])])])])])])},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-6 col-sm-12"},[s("div",{staticClass:"about-img"},[s("img",{attrs:{src:e("b00e"),alt:"avatar"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("span",[t._v("data of birth:")]),t._v("1-November-1989")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("span",[t._v("address:")]),t._v(" kafr el-sheikh eygpt")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("span",[t._v("email:")]),t._v("ehabelshohat@yahoo.com")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("span",[t._v("phone:")]),t._v("002010 00 00 00 00")])}],E={name:"About",data:function(){return{myname:"ehab elshohat mohamed"}}},q=E,O=(e("e2db"),Object(u["a"])(q,w,j,!1,null,"62fe03ec",null)),S=O.exports,$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"skills"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-capitalize"},[t._v("my skills")]),e("div",{staticClass:"progress-box"},[e("h3",{staticClass:" text-center"},[t._v("html")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"90%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" 90% ")])])]),e("div",{staticClass:"progress-box"},[e("h3",{staticClass:"text-center"},[t._v("css")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" 80% ")])])]),e("div",{staticClass:"progress-box"},[e("h3",{staticClass:" text-center"},[t._v("javascript")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"70%"},attrs:{role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" 70% ")])])]),e("div",{staticClass:"progress-box"},[e("h3",{staticClass:" text-center"},[t._v("jquery")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"70%"},attrs:{role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" 70% ")])])]),e("div",{staticClass:"progress-box"},[e("h3",{staticClass:" text-center"},[t._v("vuejs")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"30%"},attrs:{role:"progressbar","aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" 30% ")])])])])])}],N=(e("31fd"),{}),M=Object(u["a"])(N,$,P,!1,null,"7f0075c9",null),z=M.exports,T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"services"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-capitalize"},[t._v("my services")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"service-box text-center"},[e("div",{staticClass:"service-icon"},[e("i",{staticClass:"fas fa-laptop-code"})]),e("h3",{staticClass:"service-head text-capitalize"},[t._v("Website Design")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod et magnam beatae. Eum consequuntur vero, nihil soluta dolore numquam. Vitae ")])])]),e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"service-box text-center"},[e("div",{staticClass:"service-icon"},[e("i",{staticClass:"far fa-file-code"})]),e("h3",{staticClass:"service-head text-capitalize"},[t._v("PSD To Code")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod et magnam beatae. Eum consequuntur vero, nihil soluta dolore numquam. Vitae ")])])]),e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"service-box text-center"},[e("div",{staticClass:"service-icon"},[e("i",{staticClass:"fas fa-mobile-alt"})]),e("h3",{staticClass:"service-head text-capitalize"},[t._v("responsev site")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod et magnam beatae. Eum consequuntur vero, nihil soluta dolore numquam. Vitae ")])])]),e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"service-box text-center"},[e("div",{staticClass:"service-icon"},[e("i",{staticClass:"fas fa-home"})]),e("h3",{staticClass:"service-head text-capitalize"},[t._v("landing page")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod et magnam beatae. Eum consequuntur vero, nihil soluta dolore numquam. Vitae ")])])])])])])}],L=(e("b5cc"),{}),R=Object(u["a"])(L,T,A,!1,null,"98a0d02a",null),V=R.exports,D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"portfolio"},[s("div",{staticClass:"container"},[s("h2",[t._v("My projects")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:e("b42f"),alt:"project imag"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("travel blog")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn project-link",attrs:{href:"https://ehab-elshahat.github.io/TravelBlog/",target:"_blank"}},[t._v("project link")])])])]),s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:e("dd11"),alt:"project imag"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("we")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn project-link",attrs:{href:"https://ehab-elshahat.github.io/we/",target:"_blank"}},[t._v("project link")])])])]),s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:e("4545"),alt:"project imag"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("OnNext")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn project-link",attrs:{href:"https://ehab-elshahat.github.io/OnNext/",target:"_blank"}},[t._v("project link")])])])])])])])}],B=(e("9425"),{}),J=Object(u["a"])(B,D,H,!1,null,"b42276e4",null),W=J.exports,G=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact"},[e("div",{staticClass:"container"},[e("h2",[t._v("Get in Touch")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7 col-sm-12"},[e("form",{attrs:{action:"",method:"get"}},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Enter Message"}}),e("input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Enter Your Name"}}),e("input",{attrs:{type:"email",name:"email",id:"email",placeholder:"Email"}}),e("input",{staticClass:"subject",attrs:{type:"text",name:"subject",id:"subject",placeholder:"Enter Subject"}}),e("input",{staticClass:"send",attrs:{type:"submit",value:"SEND"}})])]),e("div",{staticClass:"col-md-5 col-sm-12"},[e("div",{staticClass:"contact-me"},[e("div",{staticClass:"contact-box"},[e("h3",[t._v("phone number")]),e("div",{staticClass:"contact-icon"},[e("i",{staticClass:"fas fa-mobile-alt"})]),e("div",{staticClass:"contact-address"},[t._v("002 010 00 00 00 00")])]),e("div",{staticClass:"contact-box"},[e("h3",[t._v("email address")]),e("div",{staticClass:"contact-icon"},[e("i",{staticClass:"far fa-envelope"})]),e("div",{staticClass:"contact-address"},[t._v("ehabelshohat@yahoo.com")])])]),e("div",{staticClass:"social-box"},[e("div",{staticClass:"social-links"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square fa-2x fa-fw"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter-square fa-2x fa-fw"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin fa-2x fa-fw"})])])])])])])])}],U=(e("0534"),{}),Y=Object(u["a"])(U,G,I,!1,null,"6a78c23c",null),F=Y.exports;s["a"].use(b["a"]);var K=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:S},{path:"/skills",name:"skills",component:z},{path:"/Services",name:"Services",component:V},{path:"/Portfolio",name:"Portfolio",component:W},{path:"/Contact",name:"Contact",component:F}],Q=new b["a"]({mode:"history",base:"",routes:K}),X=Q,Z=e("2f62");s["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}});e("f5df1"),e("dc44"),e("15f5"),e("7051"),e("4989"),e("ab8b"),e("77ed");s["a"].config.productionTip=!1,new s["a"]({router:X,store:tt,render:function(t){return t(h)}}).$mount("#app")},6873:function(t,a,e){},"6cbf":function(t,a,e){},"843a":function(t,a,e){"use strict";var s=e("6cbf"),i=e.n(s);i.a},9425:function(t,a,e){"use strict";var s=e("2e7e"),i=e.n(s);i.a},"958e":function(t,a,e){},"9c3d":function(t,a,e){},af25:function(t,a,e){},b00e:function(t,a,e){t.exports=e.p+"img/avatar-02.96a54d5e.png"},b42f:function(t,a,e){t.exports=e.p+"img/Travel_Blog.e568d2db.png"},b5cc:function(t,a,e){"use strict";var s=e("372e"),i=e.n(s);i.a},dc44:function(t,a,e){},dd11:function(t,a,e){t.exports=e.p+"img/We.2510a786.png"},e2db:function(t,a,e){"use strict";var s=e("958e"),i=e.n(s);i.a},fae1:function(t,a,e){}});
//# sourceMappingURL=app.c5df4fd3.js.map