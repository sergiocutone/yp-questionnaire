webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("wg8Y"),n("X8hh"),n("0K64"),n("fB7P"),n("VM32");var s=n("7+uW"),i=n("gRE1"),a=n.n(i),r=n("NYxO"),o=n("mtWM"),c=n.n(o),l=n("woOf"),u=n.n(l),d=n("mvHQ"),h=n.n(d),v=n("Gu7T"),p=n.n(v),f=n("BO1k"),_=n.n(f),m=n("//Fk"),b=n.n(m),g=n("TXmL");s.a.use(g.a);var y=new g.a({locale:"",fallbackLocale:"en",messages:{en:{},fr:{}}}),x=[],S=["businessDetails","existingPresence","productsServices","yourAudience","finishQuestionnaire"],C=[].concat(S,["misc"]);function k(e){return y.locale=e,c.a.defaults.headers.common["Accept-Language"]=e,document.querySelector("html").setAttribute("lang",e),e}function I(e){return y.locale!==e?x.includes(e)?b.a.resolve(k(e)):b.a.resolve(function(e){var t=C.map(function(t){return c.a.get("https://sergiocutone.github.io/yp-questionnaire/static/translations/"+e+"/"+t+".json")});return c.a.all(t).then(c.a.spread(function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];var i={};n.map(function(e){var t=e.data;i[t.handle]=t}),y.setLocaleMessage(e,i)})).then(function(){return x.push(e),k(e)})}(e)):b.a.resolve(e)}var w=y,$={namespaced:!0,state:{businessDetails:{primaryContact:"",displayedName:"",displayedInfo:[],mainPhone:"",otherPhone:"",email:"",mainAddress:"",otherAddress:"",monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:"",sunday:"",otherInfo:""},productsServices:{verticals:[],subverticals:[],verticalSpecifics:[],otherProductsServices:"",mailData:[]},existingPresence:{presenceTypes:[],domainName:"",domainNameContinue:"",upToDateInfo:"",facebook:"",instagram:"",twitter:"",other1:"",other2:"",other3:""},yourAudience:{example1:"",example2:"",example3:"",targetDemo:"",firstThing:"",suppliedContent:[],stockImagesSubjects:""}},getters:{checkForPresence:function(e){return function(t){return e.existingPresence.presenceTypes.includes(t)}},checkForSocials:function(e){var t=e.existingPresence.presenceTypes;return 1===t.length&&!t.includes("currentWebsitePresence")||t.length>=2}},actions:{update:function(e,t){var n=e.commit,s=e.dispatch;n("update",t),n("error/update",t,{root:!0}),s("storeLocal")},checkAll:function(e,t){var n=e.dispatch,s=e.state,i=e.commit,a=t.section,r=t.handle,o=w.t(a+".answers.verticalSpecifics").find(function(e){return e.handle===r}).options,c=!0,l=!1,u=void 0;try{for(var d,h=_()(o);!(c=(d=h.next()).done);c=!0){var v=d.value,f={section:a,handle:"verticalSpecifics",value:[v.handle].concat(p()(s[a].verticalSpecifics))};s[a].verticalSpecifics.includes(v.handle)||i("update",f)}}catch(e){l=!0,u=e}finally{try{!c&&h.return&&h.return()}finally{if(l)throw u}}n("storeLocal")},copyToAll:function(e,t){var n=e.dispatch,s=e.commit,i=t.section,a=t.recipients,r=t.value,o=!0,c=!1,l=void 0;try{for(var u,d=_()(a);!(o=(u=d.next()).done);o=!0){s("update",{section:i,handle:u.value,value:r}),n("storeLocal")}}catch(e){c=!0,l=e}finally{try{!o&&d.return&&d.return()}finally{if(c)throw l}}},constructMailData:function(e){var t=e.state,n=e.commit,s=[],i=function(e){var n=w.t("productsServices.answers.subverticals").find(function(t){return t.handle===e}),i=w.t("productsServices.answers.verticalSpecifics").filter(function(n){var s=e===n.parent,i=n.options.reduce(function(e,n){return t.productsServices.verticalSpecifics.includes(n.handle)||e},!1);return s&&i}),a=[],r=!0,o=!1,c=void 0;try{for(var l,u=_()(i);!(r=(l=u.next()).done);r=!0){var d=l.value,h=d.options.filter(function(e){return t.productsServices.verticalSpecifics.includes(e.handle)}).map(function(e){return e.label});a.push({title:d.title,selections:h})}}catch(e){o=!0,c=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw c}}s.push({title:n.label,specifics:a})},a=!0,r=!1,o=void 0;try{for(var c,l=_()(t.productsServices.subverticals);!(a=(c=l.next()).done);a=!0){i(c.value)}}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}n("update",{section:"productsServices",handle:"mailData",value:s})},checkLocal:function(e){var t=e.commit,n=e.dispatch;if(localStorage.getItem("yp-questionnaire")){var s=JSON.parse(localStorage.getItem("yp-questionnaire"));void 0!==s.businessDetails.primaryContact&&(t("replaceState",s),n("error/checkStateFromLocal",s,{root:!0}))}},storeLocal:function(e){var t=e.state,n=h()(t);localStorage.setItem("yp-questionnaire",n)}},mutations:{update:function(e,t){var n=t.section,s=t.handle,i=t.value;e[n][s]=i},replaceState:function(e,t){u()(e,t)}}},T=n("fZjL"),P=n.n(T),A={namespaced:!0,state:{showErrors:!1,businessDetails:{displayedName:!0,primaryContact:!0,mainPhone:!0},productsServices:{},existingPresence:{},yourAudience:{},finishQuestionnaire:{}},actions:{checkStateFromLocal:function(e,t){var n=e.state,s=e.commit,i=!0,a=!1,r=void 0;try{for(var o,c=_()(P()(n));!(i=(o=c.next()).done);i=!0){var l=o.value;if("showErrors"!==l){var u=!0,d=!1,h=void 0;try{for(var v,p=_()(P()(n[l]));!(u=(v=p.next()).done);u=!0){var f=v.value;s("update",{section:l,handle:f,value:t[l][f]})}}catch(e){d=!0,h=e}finally{try{!u&&p.return&&p.return()}finally{if(d)throw h}}}}}catch(e){a=!0,r=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw r}}}},mutations:{update:function(e,t){var n=t.section,s=t.handle,i=t.value;e[n][s]=0===i.length},toggleErrors:function(e,t){e.showErrors=t}}};s.a.use(r.a);var q=new r.a.Store({strict:!1,modules:{field:$,error:A},state:{activeTab:"businessDetails",submitStatus:"unsubmitted"},getters:{currentTabIndex:function(e,t){return S.findIndex(function(t){return t===e.activeTab})||0},errorOnTab:function(e){if(A.state[e.activeTab])return a()(A.state[e.activeTab]).reduce(function(e,t){return e||t},!1)}},mutations:{navigate:function(e,t){e.activeTab=t},setSubmitStatus:function(e,t){e.submitStatus=t}},actions:{navigate:function(e,t){e.state;var n=e.getters,s=e.commit,i=(e.dispatch,t.direction),a=t.clicked,r=null;i?r="forward"===i?n.currentTabIndex+1:n.currentTabIndex-1:a&&(r=S.findIndex(function(e){return e===a}));var o=S[r];o&&!n.errorOnTab?(s("navigate",o),s("error/toggleErrors",!1)):s("error/toggleErrors",!0),window.scroll(0,0)},submit:function(e){var t=e.state,n=e.commit,s=e.dispatch;n("setSubmitStatus","submitting"),s("field/constructMailData");var i={businessDetails:t.field.businessDetails,productsServices:{otherProductsServices:t.field.productsServices.otherProductsServices,mailData:t.field.productsServices.mailData},existingPresence:t.field.existingPresence,yourAudience:t.field.yourAudience,browserLang:t.browserLang};c.a.post("https://httpbin.org/post",i,{"Content-Type":"application/json"}).then(function(e){var t=e.data;n("setSubmitStatus","submitted"),console.log(t)}).catch(function(e){return console.log(e)})}}}),D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:["tab-navigation","en"===e.$i18n.locale?null:"fr"],attrs:{"aria-labelledby":"tab-navigation"}},e._l(e.$t("misc.tabNav"),function(t){return n("li",{key:t.handle,class:["tab",t.handle===e.$store.state.activeTab?"active":null],attrs:{tabindex:"0","aria-current":t.handle===e.$store.state.activeTab?"page":null},on:{click:function(n){e.navigate(t.handle)},keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"space",32,n.key," "))return null;e.navigate(t.handle)}}},[e._v("\n    "+e._s(t.label)+"\n  ")])}))},staticRenderFns:[]},F=n("VU/8")({name:"TabNav",methods:{navigate:function(e){this.$store.dispatch("navigate",{clicked:e})}}},D,!1,null,null,null).exports,E={name:"LanguageToggle",data:function(){return{langs:["en","fr"]}},methods:{toggleLanguage:function(e){I(e)}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"lang-navigation",attrs:{"aria-labelledby":"language-navigation"}},e._l(e.langs,function(t){return n("li",{key:t,class:["tab",t===e.$i18n.locale?"active":null],attrs:{tabindex:"0","aria-current":t===e.$i18n.locale?"page":null},on:{click:function(n){e.toggleLanguage(t)},keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"space",32,n.key," "))return null;e.toggleLanguage(t)}}},[e._v("\n    "+e._s(t)+"\n  ")])}))},staticRenderFns:[]},N=n("VU/8")(E,L,!1,null,null,null).exports,O={name:"FormSectionIntro",props:{section:{required:!0,type:String}},computed:{main:function(){return this.$i18n.t(this.section+".headings.main")},sub:function(){return this.$i18n.t(this.section+".headings.sub")},mainIntro:function(){return this.$i18n.t(this.section+".headings.mainIntro")}}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro sub-section"},[n("h1",{staticClass:"section__header"},[e._v("\n    "+e._s(e.main)+"\n  ")]),e._v(" "),n("h3",{staticClass:"sub-section__header"},[e._v("\n    "+e._s(e.sub)+"\n  ")]),e._v(" "),n("p",{staticClass:"sub-section__intro",attrs:{slot:"en"},slot:"en"},[e._v("\n    "+e._s(e.mainIntro)+"\n  ")])])},staticRenderFns:[]},V=n("VU/8")(O,R,!1,null,null,null).exports,Q={name:"InputText",props:{handle:{type:String,required:!0},section:{type:String,required:!0},type:{type:String,required:!1,default:"text"},enableCopy:{type:Boolean,default:!1}},computed:{value:{get:function(){return this.$store.state.field[this.section][this.handle]},set:function(e){this.$store.dispatch("field/update",{handle:this.handle,section:this.section,value:e})}},question:function(){var e=this.$i18n.t(this.section+".questions."+this.handle);return"string"==typeof e?e:e.question},contextual:function(){var e=this.$i18n.t(this.section+".questions."+this.handle);return e.contextual?e.contextual:null},required:function(){return P()(this.$store.state.error[this.section]).includes(this.handle)},errorPresent:function(){if(this.required)return this.$store.state.error[this.section][this.handle]},showErrors:function(){return this.$store.state.error.showErrors}}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["form-field__label",e.required?"required":null,e.errorPresent&&e.showErrors?"error":null],attrs:{for:e.handle}},[n("span",{staticClass:"form-field__question"},[e._v("\n    "+e._s(e.question)+"\n  ")]),e._v(" "),e.contextual?n("span",{staticClass:"form-field__contextual"},[e._v("\n    "+e._s(e.contextual)+"\n  ")]):e._e(),e._v(" "),e.enableCopy?n("button",{staticClass:"checkAll button",on:{click:function(t){t.preventDefault(),e.$emit("copyToAll",e.value)}}},[e._v("\n    + "+e._s(e.$t("misc.copyToAll"))+"\n  ")]):e._e(),e._v(" "),"textarea"===e.type?n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:e.value,expression:"value",modifiers:{lazy:!0}}],attrs:{name:e.handle,id:e.handle,rows:"5",cols:"30"},domProps:{value:e.value},on:{change:function(t){e.value=t.target.value}}}):n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.value,expression:"value",modifiers:{lazy:!0}}],attrs:{name:e.handle,id:e.handle,type:"text"},domProps:{value:e.value},on:{change:function(t){e.value=t.target.value}}}),e._v(" "),e.errorPresent&&e.showErrors?n("p",{staticClass:"form-field__error"},[e._v("\n    "+e._s(e.$t("misc.errors.required"))+"\n  ")]):e._e()])},staticRenderFns:[]},U=n("VU/8")(Q,B,!1,null,null,null).exports,j={name:"InputOperationHours",props:{section:{type:String,required:!0}},components:{InputText:U},data:function(){return{week:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]}},methods:{copyToAll:function(e,t){this.$store.dispatch("field/copyToAll",{section:this.section,value:e,recipients:this.week})}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-field__operation-hours lg"},e._l(e.week,function(t){return n("InputText",{key:t,attrs:{section:e.section,handle:t,enableCopy:!0},on:{copyToAll:function(n){e.copyToAll(n,t)}}})}))},staticRenderFns:[]},H=n("VU/8")(j,M,!1,null,null,null).exports,z=n("pFYg"),W=n.n(z),Y={name:"InputCheckbox",props:{handle:{type:String,required:!0},section:{type:String,required:!0},filteredOptions:{type:Array,required:!1,default:null}},computed:{value:{get:function(){return this.$store.state.field[this.section][this.handle]},set:function(e){this.$store.dispatch("field/update",{handle:this.handle,section:this.section,value:e})}},question:function(){var e=this.$i18n.t(this.section+".questions."+this.handle),t=e.split(".");if(t[0]===this.section&&"questions"===t[1]&&t[2]===this.handle)return null;switch(void 0===e?"undefined":W()(e)){case"undefined":return null;case"string":return e;default:return this.contextual=e.contextual,e.question}},options:function(){return this.filteredOptions?this.filteredOptions:this.$i18n.t(this.section+".answers."+this.handle)}},data:function(){return{contextual:null}}},J={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-field__checkbox-container"},[e.question?n("span",{staticClass:"form-field__question"},[e._v("\n    "+e._s(e.question)+"\n  ")]):e._e(),e._v(" "),e.contextual?n("span",{staticClass:"form-field__contextual"},[e._v("\n    "+e._s(e.contextual)+"\n  ")]):e._e(),e._v(" "),e._l(e.options,function(t){return n("label",{key:t.handle,staticClass:"form-field__label",attrs:{for:t.handle}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-field__checkbox",attrs:{name:t.handle,id:t.handle,type:"checkbox"},domProps:{value:t.handle,checked:Array.isArray(e.value)?e._i(e.value,t.handle)>-1:e.value},on:{change:function(n){var s=e.value,i=n.target,a=!!i.checked;if(Array.isArray(s)){var r=t.handle,o=e._i(s,r);i.checked?o<0&&(e.value=s.concat([r])):o>-1&&(e.value=s.slice(0,o).concat(s.slice(o+1)))}else e.value=a}}}),e._v(" "),n("span",{staticClass:"form-field__checkbox-span"},[e._v("\n      "+e._s(t.label)+"\n    ")])])})],2)},staticRenderFns:[]},X=n("VU/8")(Y,J,!1,null,null,null).exports,G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"button-navigation",attrs:{"aria-labelledby":e.$store.state.activeTab+"-button-navigation"}},[n("button",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.navigate("forward")}}},[e._v("\n    "+e._s(e.$t("misc.buttonNav.next"))+"\n  ")]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:"businessDetails"!==e.$store.state.activeTab,expression:"$store.state.activeTab !== 'businessDetails'"}],staticClass:"button",on:{click:function(t){t.preventDefault(),e.navigate("backward")}}},[e._v("\n    "+e._s(e.$t("misc.buttonNav.previous"))+"\n  ")])])},staticRenderFns:[]},K=n("VU/8")({name:"ButtonNav",methods:{navigate:function(e){this.$store.dispatch("navigate",{direction:e})}}},G,!1,null,null,null).exports,Z={name:"BusinessDetails",components:{FormSectionIntro:V,InputOperationHours:H,InputCheckbox:X,InputText:U,ButtonNav:K},computed:Object(r.c)("translations",["businessDetails"])},ee={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"business-details section",attrs:{id:"business-details"}},[n("FormSectionIntro",{attrs:{section:"businessDetails"}}),e._v(" "),n("div",{staticClass:"sub-section lg"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("businessDetails.headings.businessInfo"))+"\n    ")]),e._v(" "),n("p",{staticClass:"sub-section__intro"},[e._v("\n      "+e._s(e.$t("businessDetails.headings.businessInfoIntro"))+"\n    ")]),e._v(" "),n("InputText",{attrs:{handle:"displayedName",section:"businessDetails"}}),e._v(" "),n("InputText",{attrs:{handle:"primaryContact",section:"businessDetails"}}),e._v(" "),n("InputCheckbox",{attrs:{handle:"displayedInfo",section:"businessDetails"}}),e._v(" "),n("InputText",{attrs:{handle:"email",section:"businessDetails"}}),e._v(" "),n("fieldset",[n("InputText",{attrs:{handle:"mainPhone",section:"businessDetails"}}),e._v(" "),n("InputText",{attrs:{handle:"otherPhone",section:"businessDetails"}})],1),e._v(" "),n("fieldset",[n("InputText",{attrs:{handle:"mainAddress",section:"businessDetails"}}),e._v(" "),n("InputText",{attrs:{handle:"otherAddress",section:"businessDetails"}})],1)],1),e._v(" "),n("div",{staticClass:"sub-section"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("businessDetails.headings.hours"))+"\n    ")]),e._v(" "),n("InputOperationHours",{attrs:{section:"businessDetails"}})],1),e._v(" "),n("div",{staticClass:"sub-section"},[n("InputText",{attrs:{handle:"otherInfo",section:"businessDetails",type:"textarea"}})],1),e._v(" "),n("ButtonNav")],1)},staticRenderFns:[]},te=n("VU/8")(Z,ee,!1,null,null,null).exports,ne=n("Dd8w"),se=n.n(ne),ie={name:"ProductsServices",components:{FormSectionIntro:V,InputCheckbox:X,InputText:U,ButtonNav:K},computed:se()({},Object(r.c)("field",{psState:function(e){return e.productsServices}}),{getSelectedVerticals:function(){var e=this;return this.psState.verticals.map(function(t){return e.$i18n.t("productsServices.answers.verticals").find(function(e){return e.handle===t})})},getSubVerticalRefs:function(){var e=this;return this.psState.subverticals.map(function(t){return e.$i18n.t("productsServices.answers.subverticals").find(function(e){return e.handle===t})})}}),methods:{getSubverticalOptions:function(e){return this.$i18n.t("productsServices.answers.subverticals").filter(function(t){return t.parent===e})},getSpecificsOptions:function(e){return this.$i18n.t("productsServices.answers.verticalSpecifics").filter(function(t){return t.parent===e})},checkAllSpecifics:function(e){this.$store.dispatch("field/checkAll",{section:"productsServices",handle:e})}}},ae={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"products-and-services section",attrs:{id:"products-and-services"}},[n("FormSectionIntro",{attrs:{section:"productsServices"}}),e._v(" "),n("div",{staticClass:"sub-section high-level"},[n("div",{staticClass:"form-panel__vertical"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n        "+e._s(e.$t("productsServices.headings.businessType"))+"\n      ")]),e._v(" "),n("InputCheckbox",{attrs:{handle:"verticals",section:"productsServices"}})],1),e._v(" "),n("div",{staticClass:"form-panel__sub-verticals"},e._l(e.getSelectedVerticals,function(t){return n("div",{key:t.handle,staticClass:"form-panel__sub-vertical-container"},[n("h3",{staticClass:"form-field__question"},[e._v("\n          "+e._s(t.label)+"\n        ")]),e._v(" "),n("InputCheckbox",{attrs:{handle:"subverticals",section:"productsServices",filteredOptions:e.getSubverticalOptions(t.handle)}})],1)}))]),e._v(" "),e.psState.subverticals.length>0?n("div",{staticClass:"sub-section low-level"},e._l(e.getSubVerticalRefs,function(t){return n("div",{key:t.handle,staticClass:"form-panel__vertical-specifics"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n        "+e._s(t.label)+"\n      ")]),e._v(" "),e._l(e.getSpecificsOptions(t.handle),function(t){return n("div",{key:t.handle,staticClass:"form-panel__vertical-specifics-container"},[n("p",{staticClass:"form-field__question"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),n("button",{staticClass:"checkAll button",on:{click:function(n){n.preventDefault(),e.checkAllSpecifics(t.handle)}}},[e._v("\n          + "+e._s(e.$t("misc.checkAll"))+"\n        ")]),e._v(" "),n("InputCheckbox",{key:t.handle,attrs:{handle:"verticalSpecifics",section:"productsServices",filteredOptions:t.options}})],1)})],2)})):e._e(),e._v(" "),n("div",{staticClass:"sub-section"},[n("InputText",{attrs:{handle:"otherProductsServices",section:"productsServices",type:"textarea"}})],1),e._v(" "),n("ButtonNav")],1)},staticRenderFns:[]},re=n("VU/8")(ie,ae,!1,null,null,null).exports,oe={name:"InputRadio",props:{handle:{type:String,required:!0},section:{type:String,required:!0}},computed:{value:{get:function(){return this.$store.state.field[this.section][this.handle]},set:function(e){this.$store.dispatch("field/update",{handle:this.handle,section:this.section,value:e})}},question:function(){var e=this.$i18n.t(this.section+".questions."+this.handle);return"string"==typeof e?e:e.question},contextual:function(){var e=this.$i18n.t(this.section+".questions."+this.handle);return e.contextual?e.contextual:null},options:function(){return this.$i18n.t(this.section+".answers."+this.handle)}}},ce={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-field__radio-container"},[n("span",{staticClass:"form-field__question"},[e._v("\n    "+e._s(e.question)+"\n  ")]),e._v(" "),e.contextual?n("span",{staticClass:"form-field__contextual"},[e._v("\n    "+e._s(e.contextual)+"\n  ")]):e._e(),e._v(" "),e._l(Object.keys(e.options),function(t){return n("label",{key:t,staticClass:"form-field__label",attrs:{for:t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-field__radio",attrs:{name:t,id:t,type:"radio"},domProps:{value:t,checked:e._q(e.value,t)},on:{change:function(n){e.value=t}}}),e._v(" "),n("span",{staticClass:"form-field__radio-span"},[e._v("\n      "+e._s(e.options[t])+"\n    ")])])})],2)},staticRenderFns:[]},le={name:"ExistingPresence",components:{FormSectionIntro:V,InputText:U,InputCheckbox:X,InputRadio:n("VU/8")(oe,ce,!1,null,null,null).exports,ButtonNav:K},computed:se()({},Object(r.c)("translations",["existingPresence"]),Object(r.b)("field",["checkForPresence","checkForSocials"]))},ue={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"existing-presence section",attrs:{id:"existing-presence"}},[n("FormSectionIntro",{attrs:{section:"existingPresence"}}),e._v(" "),n("div",{staticClass:"sub-section"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("existingPresence.headings.existingOnline"))+"\n    ")]),e._v(" "),n("InputCheckbox",{attrs:{handle:"presenceTypes",section:"existingPresence"}})],1),e._v(" "),e.checkForPresence("currentWebsitePresence")?n("div",{staticClass:"sub-section"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("existingPresence.headings.currentWebsite"))+"\n    ")]),e._v(" "),n("InputText",{attrs:{handle:"domainName",section:"existingPresence"}}),e._v(" "),n("InputRadio",{attrs:{handle:"domainNameContinue",section:"existingPresence"}}),e._v(" "),n("InputText",{attrs:{handle:"upToDateInfo",section:"existingPresence"}})],1):e._e(),e._v(" "),e.checkForSocials?n("div",{staticClass:"sub-section lg"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("existingPresence.headings.socialMedia"))+"\n    ")]),e._v(" "),n("p",{staticClass:"sub-section__intro"},[e._v("\n      "+e._s(e.$t("existingPresence.headings.socialMediaIntro"))+"\n    ")]),e._v(" "),e.checkForPresence("facebookPresence")?n("InputText",{attrs:{handle:"facebook",section:"existingPresence"}}):e._e(),e._v(" "),e.checkForPresence("instagramPresence")?n("InputText",{attrs:{handle:"instagram",section:"existingPresence"}}):e._e(),e._v(" "),e.checkForPresence("twitterPresence")?n("InputText",{attrs:{handle:"twitter",section:"existingPresence"}}):e._e(),e._v(" "),e.checkForPresence("otherPresence")?n("InputText",{attrs:{handle:"other1",section:"existingPresence"}}):e._e(),e._v(" "),e.checkForPresence("otherPresence")?n("InputText",{attrs:{handle:"other2",section:"existingPresence"}}):e._e(),e._v(" "),e.checkForPresence("otherPresence")?n("InputText",{attrs:{handle:"other3",section:"existingPresence"}}):e._e()],1):e._e(),e._v(" "),n("ButtonNav")],1)},staticRenderFns:[]},de=n("VU/8")(le,ue,!1,null,null,null).exports,he={name:"YourAudience",components:{FormSectionIntro:V,InputText:U,InputCheckbox:X,ButtonNav:K}},ve={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"your-audience section",attrs:{id:"your-audience"}},[n("FormSectionIntro",{attrs:{section:"yourAudience"}}),e._v(" "),n("div",{staticClass:"sub-section lg"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("yourAudience.headings.theVisuals"))+"\n    ")]),e._v(" "),n("i18n",{staticClass:"sub-section__intro",attrs:{path:"yourAudience.headings.theVisualsIntro",tag:"p"}},[n("a",{attrs:{place:"link",href:"http://www.portfolio.yellowpages.ca/",target:"_blank",rel:"noopener"}},[e._v("\n        "+e._s(e.$t("yourAudience.headings.theVisualsLink"))+"\n      ")])]),e._v(" "),n("InputText",{attrs:{handle:"example1",section:"yourAudience"}}),e._v(" "),n("InputText",{attrs:{handle:"example2",section:"yourAudience"}}),e._v(" "),n("InputText",{attrs:{handle:"example3",section:"yourAudience"}})],1),e._v(" "),n("div",{staticClass:"sub-section"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n      "+e._s(e.$t("yourAudience.headings.demographic"))+"\n    ")]),e._v(" "),n("InputText",{attrs:{handle:"targetDemo",section:"yourAudience",type:"textarea"}}),e._v(" "),n("InputText",{attrs:{handle:"firstThing",section:"yourAudience",type:"textarea"}}),e._v(" "),n("InputCheckbox",{attrs:{handle:"suppliedContent",section:"yourAudience"}}),e._v(" "),n("InputText",{attrs:{handle:"stockImagesSubjects",section:"yourAudience",type:"textarea"}})],1),e._v(" "),n("ButtonNav")],1)},staticRenderFns:[]},pe=n("VU/8")(he,ve,!1,null,null,null).exports,fe={render:function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"loading-spinner"})},staticRenderFns:[]},_e={name:"FinishQuestionnaire",components:{FormSectionIntro:V,LoadingSpinner:n("VU/8")({name:"LoadingSpinner"},fe,!1,null,null,null).exports},computed:se()({},Object(r.c)(["submitStatus"]),Object(r.b)(["inEnglish"]))},me={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:["finish-questionnaire","section",e.submitStatus],attrs:{id:"finish-questionnaire"}},[n("FormSectionIntro",{attrs:{section:"finishQuestionnaire"}}),e._v(" "),"submitted"!==e.submitStatus?n("div",{staticClass:"submit-section"},[n("button",{staticClass:"button",attrs:{type:"submit"}},["submitting"===e.submitStatus?n("LoadingSpinner"):e._e(),e._v("\n      "+e._s(e.$t("finishQuestionnaire.buttons.complete"))+"\n    ")],1),e._v(" "),"error"===e.submitStatus?n("span",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}})]),e._v("\n      "+e._s(e.$t("misc.errors.submitFailure"))+"\n    ")]):e._e()]):e._e(),e._v(" "),n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"submitted"===e.submitStatus,expression:"submitStatus === 'submitted'"}],staticClass:"sub-section thank-you"},[n("h3",{staticClass:"sub-section__header"},[e._v("\n        "+e._s(e.$t("finishQuestionnaire.headings.thankYou"))+"\n      ")]),e._v(" "),n("div",{staticClass:"thank-you__container"},[n("div",{staticClass:"thank-you__third"},[n("p",{staticClass:"sub-section__intro"},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.headings.leaveBehind"))+"\n          ")]),e._v(" "),n("a",{staticClass:"button",attrs:{href:e.inEnglish?"/uploads/welcome_to_your_website-en.pdf":"/uploads/welcome_to_your_website-fr.pdf",target:"_blank",rel:"noopener"}},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.buttons.leaveBehind"))+"\n          ")])]),e._v(" "),n("div",{staticClass:"thank-you__third"},[n("p",{staticClass:"sub-section__intro"},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.headings.portfolio"))+"\n          ")]),e._v(" "),n("a",{staticClass:"button",attrs:{href:e.inEnglish?"http://www.portfolio.yellowpages.ca/":"http://www.portfolio.yellowpages.ca/index_fr.html",target:"_blank",rel:"noopener"}},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.buttons.portfolio"))+"\n          ")])]),e._v(" "),n("div",{staticClass:"thank-you__third"},[n("p",{staticClass:"sub-section__intro"},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.headings.yp4b"))+"\n          ")]),e._v(" "),n("a",{staticClass:"button",attrs:{href:"https://business.yellowpages.ca/",target:"_blank",rel:"noopener"}},[e._v("\n            "+e._s(e.$t("finishQuestionnaire.buttons.yp4b"))+"\n          ")])])])])])],1)},staticRenderFns:[]},be={name:"Questionnaire",components:{TabNav:F,LanguageToggle:N,businessDetails:te,productsServices:re,existingPresence:de,yourAudience:pe,finishQuestionnaire:n("VU/8")(_e,me,!1,null,null,null).exports},created:function(){var e=this;this.storageAvailable&&this.$store.dispatch("field/checkLocal"),I("en").then(function(t){e.messagesLoaded=t})},data:function(){return{messagesLoaded:!1}},computed:{storageAvailable:function(){try{var e=window.localStorage,t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==window.localStorage.length}}}},ge={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"questionnaire",attrs:{id:"questionnaire"}},[e.messagesLoaded?n("nav",{staticClass:"main-navigation"},[n("LanguageToggle"),e._v(" "),n("TabNav")],1):e._e(),e._v(" "),n("form",{staticClass:"questionnaire-form",on:{submit:function(t){t.preventDefault(),e.$store.dispatch("submit")}}},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("keep-alive",[e.messagesLoaded?n(e.$store.state.activeTab,{tag:"component"}):e._e()],1)],1)],1)])},staticRenderFns:[]},ye=n("VU/8")(be,ge,!1,null,null,null).exports;s.a.config.productionTip=!1;var xe=new s.a({el:"#questionnaire",store:q,i18n:w,template:"<Questionnaire/>",components:{Questionnaire:ye}});t.default=xe}},["NHnr"]);
//# sourceMappingURL=app.f94fd1800df315675839.js.map