(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{199:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d}));var n=r(4),o=(r(36),new(r(200).a)({url:"https://javid-waldron-3d-graphics.ghost.io",key:"873679d724bb8217a9df8574d2",version:"v3.0"}));function c(){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags,authors",limit:"all"}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({include:"tags,authors",slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},206:function(t,e,r){var content=r(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("81027e56",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(206)},223:function(t,e,r){var n=r(9)(!1);n.push([t.i,'.work{display:grid;grid-template-columns:1fr;grid-gap:1rem;gap:1rem;width:100%;transition:all 335ms ease-in-out}@media screen and (max-width:786px){.work{margin-top:2rem}}.work .block{position:relative;display:flex;width:100%;height:300px;background-color:var(--background-offset);background-size:cover;background-position:50%;background-repeat:none;transition:all 335ms ease-in-out;border-radius:8px;overflow:hidden}.work .block:before{pointer-events:none;content:"";position:absolute;left:0;bottom:0;right:0;height:50%;background-image:linear-gradient(0deg,var(--background),transparent);transition:all 335ms ease-in-out}.work .block:hover:before{height:100%}.work .block:hover a{text-decoration:none;color:currentColor}.work .block:hover .block-meta .generic-icon:before{transform:translate(0);opacity:1}.work .block-anchor{position:relative;display:flex;width:100%;height:100%;align-items:flex-end;color:var(--foreground);padding:1rem}.work .block-meta{display:flex;justify-content:space-between;align-items:center;width:100%}.work .block-meta-title{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem}.work .block-meta-title *{margin:0}.work .block-meta .generic-icon:before{pointer-events:none;content:"";position:absolute;bottom:0;right:0;width:25%;aspect-ratio:1/1;transform:translate(100%,100%);opacity:0;background-image:radial-gradient(circle at bottom right,var(--accent),transparent 70%);transition:all 775ms ease-in-out}.work .block-meta .generic-icon svg{position:relative}',""]),t.exports=n},229:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(36),r(199)),c={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)();case 2:return e=t.sent,t.abrupt("return",{posts:e});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{}},computed:{postsFetched:function(){return!!this.posts}},components:{icons:r(49).a}},l=(r(222),r(7)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container"},[e("div",{staticClass:"work"},[t.postsFetched?t._e():e("p",[t._v("Loading Posts...")]),t._v(" "),t._l(t.posts,(function(r,n){return e("div",{staticClass:"block",style:"background-image: url("+r.feature_image+");"},[e("nuxt-link",{staticClass:"block-anchor",attrs:{to:"/work/"+r.slug}},[e("div",{staticClass:"block-meta"},[e("div",{staticClass:"block-meta-title"},[e("h6",[t._v(t._s("0"+(n+1)))]),e("h5",[t._v(t._s(r.title))])]),t._v(" "),e("icons",{attrs:{name:"arrow-right"}})],1)])],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);