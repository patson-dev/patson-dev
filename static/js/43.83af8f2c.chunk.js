(this["webpackJsonppatson-dev"]=this["webpackJsonppatson-dev"]||[]).push([[43],{1983:function(e,a,t){e.exports=t.p+"static/media/login.fd58a052.png"},1984:function(e,a,t){e.exports=t.p+"static/media/google.222e25f5.svg"},2100:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(13),r=t(15),l=t(14),o=t(0),c=t.n(o),i=t(1234),m=t(1235),u=t(1236),p=t(1237),d=t(1238),f=t(792),b=t(773),h=t(774),g=t(794),v=t(795),E=t(4),N=t.n(E),j=t(1983),y=t.n(j),O=(t(866),t(1239)),T=t(176),k=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{className:"pt-1 pb-3"},c.a.createElement(T.a.Ripple,{color:"primary",className:"mt-1"},"Login With Auth0")))},w=t(809),x=t(799),C=t(791),R=t(804),z=t(36),M=t(790),P=t(200),W=t(205),S=t(278),F=t(320),I=t(442),L=t(337),A=t(27),J=t(1984),q=t.n(J),B=t(25),D=t(131),G=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(a){a.preventDefault(),e.props.submitLoginWithFireBase(e.state.email,e.state.password,e.state.remember)},e.handleRemember=function(a){e.setState({remember:a.target.checked})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{className:"pt-1"},c.a.createElement(w.a,{action:"/",onSubmit:this.handleLogin},c.a.createElement(x.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement(C.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(P.a,{size:15})),c.a.createElement(R.a,null,"Email")),c.a.createElement(x.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement(C.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(W.a,{size:15})),c.a.createElement(R.a,null,"Password")),c.a.createElement(x.a,{className:"d-flex justify-content-between align-items-center"},c.a.createElement(M.a,{color:"primary",icon:c.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),c.a.createElement("div",{className:"float-right"},c.a.createElement(z.a,{to:"/pages/forgot-password"},"Forgot Password?"))),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement(T.a.Ripple,{color:"primary",outline:!0,onClick:function(){A.a.push("/pages/register")}},"Register"),c.a.createElement(T.a.Ripple,{color:"primary",type:"submit"},"Login")))),c.a.createElement("div",{className:"auth-footer"},c.a.createElement("div",{className:"divider"},c.a.createElement("div",{className:"divider-text"},"OR")),c.a.createElement("div",{className:"footer-btn"},c.a.createElement(T.a.Ripple,{className:"btn-facebook",color:"",onClick:function(){e.props.loginWithFB()}},c.a.createElement(F.a,{size:14})),c.a.createElement(T.a.Ripple,{className:"btn-twitter",color:"",onClick:this.props.loginWithTwitter},c.a.createElement(I.a,{size:14,stroke:"white"})),c.a.createElement(T.a.Ripple,{className:"btn-google",color:"",onClick:this.props.loginWithGoogle},c.a.createElement("img",{src:q.a,alt:"google",height:"15",width:"15"})),c.a.createElement(T.a.Ripple,{className:"btn-github",color:"",onClick:this.props.loginWithGithub},c.a.createElement(L.a,{size:14,stroke:"white"})))))}}]),t}(c.a.Component),V=Object(B.b)((function(e){return{values:e.auth.login}}),{submitLoginWithFireBase:D.i,loginWithFB:D.b,loginWithTwitter:D.f,loginWithGoogle:D.d,loginWithGithub:D.c})(G),H=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(a){a.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{className:"pt-1"},c.a.createElement(w.a,{action:"/",onSubmit:this.handleLogin},c.a.createElement(x.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement(C.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(P.a,{size:15})),c.a.createElement(R.a,null,"Email")),c.a.createElement(x.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement(C.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(W.a,{size:15})),c.a.createElement(R.a,null,"Password")),c.a.createElement(x.a,{className:"d-flex justify-content-between align-items-center"},c.a.createElement(M.a,{color:"primary",icon:c.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),c.a.createElement("div",{className:"float-right"},c.a.createElement(z.a,{to:"/pages/forgot-password"},"Forgot Password?"))),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement(T.a.Ripple,{color:"primary",outline:!0,onClick:function(){A.a.push("/pages/register")}},"Register"),c.a.createElement(T.a.Ripple,{color:"primary",type:"submit"},"Login")))))}}]),t}(c.a.Component),K=Object(B.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:D.e})(H),Q=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(i.a,{className:"m-0 justify-content-center"},c.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(u.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},c.a.createElement(i.a,{className:"m-0"},c.a.createElement(m.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},c.a.createElement("img",{src:y.a,alt:"loginImg"})),c.a.createElement(m.a,{lg:"6",md:"12",className:"p-0"},c.a.createElement(u.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},c.a.createElement(p.a,{className:"pb-1"},c.a.createElement(d.a,null,c.a.createElement("h4",{className:"mb-0"},"Login"))),c.a.createElement("p",{className:"px-2 auth-title"},"Welcome back, please login to your account."),c.a.createElement(f.a,{tabs:!0,className:"px-2"},c.a.createElement(b.a,null,c.a.createElement(h.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),c.a.createElement(b.a,null,c.a.createElement(h.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),c.a.createElement(b.a,null,c.a.createElement(h.a,{className:N()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),c.a.createElement(g.a,{activeTab:this.state.activeTab},c.a.createElement(v.a,{tabId:"1"},c.a.createElement(K,null)),c.a.createElement(v.a,{tabId:"2"},c.a.createElement(V,null)),c.a.createElement(v.a,{tabId:"3"},c.a.createElement(k,null)))))))))}}]),t}(c.a.Component);a.default=Q},786:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),s=t.n(n).a.createContext({})},790:function(e,a,t){"use strict";var n=t(12),s=t(13),r=t(15),l=t(14),o=t(0),c=t.n(o),i=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i},791:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(6),l=t(11),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),p=t.n(u),d=t(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=m||("select"===r||"textarea"===r?r:"input"),N="form-control";f?(N+="-plaintext",E=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":g&&(N=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===E||m&&"function"===typeof m)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},792:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(3),p={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tabs,o=e.pills,c=e.vertical,i=e.horizontal,p=e.justified,d=e.fill,f=e.navbar,b=e.card,h=e.tag,g=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(u.mapToCssModules)(m()(a,f?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":r,"card-header-tabs":b&&r,"nav-pills":o,"card-header-pills":b&&o,"nav-justified":p,"nav-fill":d}),t);return l.a.createElement(h,Object(n.a)({},g,{className:v}))};d.propTypes=p,d.defaultProps={tag:"ul",vertical:!1},a.a=d},794:function(e,a,t){"use strict";var n=t(5),s=t(11),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(786),p=t(3),d={tag:p.tagPropType,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,r=Object(p.omit)(this.props,Object.keys(d)),o=Object(p.mapToCssModules)(m()("tab-content",a),t);return l.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(s,Object(n.a)({},r,{className:o})))},a}(r.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},795:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(786),p=t(3),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,o=e.tag,c=Object(s.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:r===e}),t)};return l.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(o,Object(n.a)({},c,{className:i(a)}))}))}f.propTypes=d,f.defaultProps={tag:"div"}},799:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(3),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,d=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(m()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(d.disabled=o),l.a.createElement(p,Object(n.a)({},d,{className:f}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},804:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(3),p=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,d=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=h(l,a,s.size),b.push(Object(u.mapToCssModules)(m()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=h(l,a,s),b.push(r)}}));var g=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},809:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(6),l=t(11),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),p=t.n(u),d=t(3),f={children:m.a.node,inline:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},866:function(e,a,t){}}]);
//# sourceMappingURL=43.83af8f2c.chunk.js.map