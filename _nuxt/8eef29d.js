(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,t,o){var content=o(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("7042d8d2",content,!0,{sourceMap:!1})},212:function(e,t,o){e.exports=o.p+"img/JW_CV.d8a61d1.pdf"},213:function(e,t,o){"use strict";o(204)},214:function(e,t,o){var r=o(10)(!1);r.push([e.i,'.generic-modal{display:flex;border:none;padding:0;color:currentColor;background:none}.generic-modal,.generic-modal:before{position:fixed;top:0;right:0;bottom:0;left:0}.generic-modal:before{content:"";background:var(--background);opacity:.7;z-index:0}.generic-modal form{position:relative;display:grid;grid-auto-rows:1fr auto 1fr;width:100%;max-width:600px;border:1px solid var(--border-color);border-radius:8px;background-color:var(--background);z-index:1}.generic-modal--footer,.generic-modal--header{display:flex;justify-content:space-between;align-items:center;grid-gap:1rem;gap:1rem;padding:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.generic-modal--header{font-size:18px;border-bottom:1px solid var(--border-color)}.generic-modal--header h4{line-height:1;margin:0;padding:0!important}.generic-modal--header .btn{padding:.5rem;color:currentColor}.generic-modal--header .btn .generic-icon{font-size:1.3rem}.generic-modal--body{position:relative;padding:1rem;display:flex;flex-direction:column;grid-gap:1rem;gap:1rem}.generic-modal--body.handle-overflow{max-height:65vh;overflow-y:auto}.generic-modal--body label .generic-icon{position:absolute;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;aspect-ratio:1/1}.generic-modal--body label input:invalid+.generic-icon{color:red}.generic-modal--body p{margin:0}.generic-modal--footer{justify-content:flex-end;border-top:1px solid var(--border-color)}',""]),e.exports=r},227:function(e,t,o){"use strict";o.r(t);o(38);var r={head:function(){return{title:"JW | Resume"}},data:function(){return{modalopen:!0,pw:{content:"",error:!1},valid:!1,previouslySubmitted:!!localStorage.getItem("returningUser"),rememberMe:!1}},mounted:function(){console.log(!0)},methods:{modalToggle:function(){this.modalopen=!this.modalopen},submit:function(){this.validate(),this.dontYouForgetAboutMe(),this.valid?(this.pw.content="",this.modalToggle()):console.log("wrong pw, but also, nice~ this works!")},validate:function(){void 0===this.pw.content?(this.valid=!0,this.pw.error=!1):(this.valid=!1,this.pw.error=!0,this.pw.content="")},validationMessage:function(e,t){e.target.validity.valid?(this.pw.error=!1,e.target.setCustomValidity("")):e.target.setCustomValidity(t)},dontYouForgetAboutMe:function(){this.rememberMe&&localStorage.setItem("returningUser",!0)}},components:{icons:o(51).a}},n=(o(213),o(7)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"container"},[e.modalopen&&!e.previouslySubmitted?t("dialog",{staticClass:"generic-modal"},[t("form",{attrs:{method:"dialog"}},[t("div",{staticClass:"generic-modal--header"},[t("h4",[e._v("Résume")]),e._v(" "),t("button",{staticClass:"btn",on:{click:function(t){return e.modalToggle()}}},[t("icons",{attrs:{name:"close"}})],1)]),e._v(" "),t("div",{staticClass:"generic-modal--body"},[t("p",[e._v("The contents of this CV contain sensitive information, so the contents are stowed under lock & key. If I’ve given you the password to access this, enter it below.")]),e._v(" "),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.pw.content,expression:"pw.content"}],attrs:{type:"password",placeholder:"Résume Password",required:""},domProps:{value:e.pw.content},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.submit())},invalid:function(t){return e.validationMessage(t,"Please Enter provided Password")},input:function(t){t.target.composing||e.$set(e.pw,"content",t.target.value)}}}),e._v(" "),t("icons",{attrs:{name:"arrow-right"}})],1),e._v(" "),e.pw.error?t("small",{staticStyle:{color:"red"}},[e._v("Please Enter provided Password")]):e._e(),e._v(" "),t("label",{staticClass:"checkbx"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rememberMe,expression:"rememberMe"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.rememberMe)?e._i(e.rememberMe,null)>-1:e.rememberMe},on:{change:function(t){var o=e.rememberMe,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e._i(o,null);r.checked?l<0&&(e.rememberMe=o.concat([null])):l>-1&&(e.rememberMe=o.slice(0,l).concat(o.slice(l+1)))}else e.rememberMe=n}}}),e._v(" Remember Me\n        ")])]),e._v(" "),t("div",{staticClass:"generic-modal--footer"},[t("button",{staticClass:"btn btn-primary btn-slim",on:{click:function(t){return e.submit()}}},[e._v("Submit")])])])]):e._e(),e._v(" "),e.valid&&!e.pw.error||e.previouslySubmitted?t("div",[t("embed",{staticStyle:{width:"100%","aspect-ratio":"3/4"},attrs:{src:o(212)}})]):t("div",[e.previouslySubmitted?t("button",{staticClass:"btn btn-secondary",on:{click:function(t){return e.modalToggle()}}},[e._v("Try Again")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);