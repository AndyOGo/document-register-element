/*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function bt(){var e=ut.splice(0,ut.length);at=0;while(e.length)e.shift().call(null,e.shift())}function wt(e,t){for(var n=0,r=e.length;n<r;n++)_t(e[n],t)}function Et(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],yt(r,w[xt(r)])}function St(e){return function(t){K(t)&&(_t(t,e),wt(t.querySelectorAll(E),e))}}function xt(e){var t=Z.call(e,"is"),n=e.nodeName.toUpperCase(),r=x.call(b,t?m+t.toUpperCase():v+n);return t&&-1<r&&!Tt(n,t)?-1:r}function Tt(e,t){return-1<E.indexOf(e+'[is="'+t+'"]')}function Nt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;ht&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[f]?null:e.prevValue,n===e[c]?null:e.newValue)}function Ct(e){var t=St(e);return function(e){ut.push(t,e.target),at&&clearTimeout(at),at=setTimeout(bt,1)}}function kt(e){ct&&(ct=!1,e.currentTarget.removeEventListener(p,kt)),wt((e.target||t).querySelectorAll(E),e.detail===u?u:o),$&&Ot()}function Lt(e,t){var n=this;nt.call(n,e,t),pt.call(n,{target:n})}function At(e,t){W(e,t),mt?mt.observe(e,st):(lt&&(e.setAttribute=Lt,e[s]=vt(e),e.addEventListener(d,pt)),e.addEventListener(h,Nt)),e.createdCallback&&ht&&(e.created=!0,e.createdCallback(),e.created=!1)}function Ot(){for(var e,t=0,n=Q.length;t<n;t++)e=Q[t],S.contains(e)||(n--,Q.splice(t--,1),_t(e,u))}function Mt(e){throw new Error("A "+e+" type is already registered")}function _t(e,t){var n,r=xt(e);-1<r&&(gt(e,w[r]),r=0,t===o&&!e[o]?(e[u]=!1,e[o]=!0,r=1,$&&x.call(Q,e)<0&&Q.push(e)):t===u&&!e[u]&&(e[o]=!1,e[u]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}function Dt(){}function Pt(e,n,i){var s=i&&i[a]||"",o=n.prototype,u=z(o),f=n.observedAttributes||Array.prototype,l={prototype:u};J(u,"createdCallback",{value:function(){I?I=!1:this[D]||(this[D]=!0,new n(this))}}),J(u,"attributeChangedCallback",{value:function(e){-1<x.call(f,e)&&o.attributeChangedCallback.apply(this,arguments)}}),o.connectedCallback&&J(u,"attachedCallback",{value:o.connectedCallback}),o.disconnectedCallback&&J(u,"detachedCallback",{value:o.disconnectedCallback}),s&&(l[a]=s),t[r](e,l),e=e.toUpperCase(),q[e]={constructor:n,create:s?[s,e]:[e]},U.set(n,e),Bt(e),R[e].r()}function Ht(e){var t=q[e.toUpperCase()];return t&&t.constructor}function Bt(e){return e=e.toUpperCase(),e in R||(R[e]={},R[e].p=new F(function(t){R[e].r=t})),R[e].p}function jt(){P&&delete e.customElements,k(e,"customElements",{configurable:!0,value:new Dt}),k(e,"CustomElementRegistry",{configurable:!0,value:Dt});for(var n=function(n){var r=e[n];r&&(e[n]=function(n){var i;return n||(n=this),n[D]||(I=!0,i=q[U.get(n.constructor)],n=H&&i.create.length===1?Reflect.construct(r,[],i.constructor):t.createElement.apply(t,i.create),n[D]=!0,I=!1),n},(e[n].prototype=r.prototype).constructor=e[n])},r=i.get(/^HTML/),s=r.length;s--;n(r[s]));t.createElement=function(e,t){var n=typeof t=="string"?t:t&&t.is||"";return n?it.call(this,e,n):it.call(this,e)}}var i=function(e){var t=/^[A-Z]+[a-z]/,r=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(n.create||n)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(n){return typeof n=="string"?s[n]||(t.test(n)?[]:""):r(n)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}}),s="__"+r+(Math.random()*1e5>>0),o="attached",u="detached",a="extends",f="ADDITION",l="MODIFICATION",c="REMOVAL",h="DOMAttrModified",p="DOMContentLoaded",d="DOMSubtreeModified",v="<",m="=",g=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,y=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],b=[],w=[],E="",S=t.documentElement,x=b.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},T=n.prototype,N=T.hasOwnProperty,C=T.isPrototypeOf,k=n.defineProperty,L=n.getOwnPropertyDescriptor,A=n.getOwnPropertyNames,O=n.getPrototypeOf,M=n.setPrototypeOf,_=!!n.__proto__,D="__dreCEv1",P=e.customElements,H=!!(P&&P.define&&P.get&&P.whenDefined),B=n.create||n,j=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[x.call(t,e)]},set:function(e,i){r=x.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},F=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},I=!1,q=B(null),R=B(null),U=new j,z=n.create||function It(e){return e?(It.prototype=e,new It):this},W=M||(_?function(e,t){return e.__proto__=t,e}:A&&L?function(){function e(e,t){for(var n,r=A(t),i=0,s=r.length;i<s;i++)n=r[i],N.call(e,n)||k(e,n,L(t,n))}return function(t,n){do e(t,n);while((n=O(n))&&!C.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),X=e.MutationObserver||e.WebKitMutationObserver,V=(e.HTMLElement||e.Element||e.Node).prototype,$=!C.call(V,S),J=$?function(e,t,n){return e[t]=n.value,e}:k,K=$?function(e){return e.nodeType===1}:function(e){return C.call(V,e)},Q=$&&[],G=V.cloneNode,Y=V.dispatchEvent,Z=V.getAttribute,et=V.hasAttribute,tt=V.removeAttribute,nt=V.setAttribute,rt=t.createElement,it=rt,st=X&&{attributes:!0,characterData:!0,attributeOldValue:!0},ot=X||function(e){lt=!1,S.removeEventListener(h,ot)},ut,at=0,ft=!1,lt=!0,ct=!0,ht=!0,pt,dt,vt,mt,gt,yt;r in t||(M||_?(gt=function(e,t){C.call(t,e)||At(e,t)},yt=At):(gt=function(e,t){e[s]||(e[s]=n(!0),At(e,t))},yt=gt),$?(lt=!1,function(){var e=L(V,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(h,{bubbles:!0});t.attrName=e,t.prevValue=Z.call(this,e),t.newValue=null,t[c]=t.attrChange=2,tt.call(this,e),Y.call(this,t)},r=function(e,t){var n=et.call(this,e),r=n&&Z.call(this,e),i=new CustomEvent(h,{bubbles:!0});nt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[l]=i.attrChange=1:i[f]=i.attrChange=0,Y.call(this,i)},i=function(e){var t=e.currentTarget,n=t[s],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(h,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[f]=i.attrChange=0:i[l]=i.attrChange=1,Y.call(t,i))};e.value=function(e,o,u){e===h&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[s]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,o,u)},k(V,"addEventListener",e)}()):X||(S.addEventListener(h,ot),S.setAttribute(s,1),S.removeAttribute(s),lt&&(pt=function(e){var t=this,n,r,i;if(t===e.target){n=t[s],t[s]=r=vt(t);for(i in r){if(!(i in n))return dt(0,t,i,n[i],r[i],f);if(r[i]!==n[i])return dt(1,t,i,n[i],r[i],l)}for(i in n)if(!(i in r))return dt(2,t,i,n[i],r[i],c)}},dt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Nt(o)},vt=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),ft||(ft=!0,X?(mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new X(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,ht&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=Z.call(s,i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(St(o),St(u)),mt.observe(t,{childList:!0,subtree:!0})):(ut=[],t.addEventListener("DOMNodeInserted",Ct(o)),t.addEventListener("DOMNodeRemoved",Ct(u))),t.addEventListener(p,kt),t.addEventListener("readystatechange",kt),V.cloneNode=function(e){var t=G.call(this,!!e),n=xt(t);return-1<n&&yt(t,w[n]),e&&Et(t.querySelectorAll(E)),t}),-2<x.call(b,m+c)+x.call(b,v+c)&&Mt(n);if(!g.test(c)||-1<x.call(y,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},s=r||T,f=N.call(s,a),l=f?r[a].toUpperCase():c,c,h;return f&&-1<x.call(b,v+l)&&Mt(l),h=b.push((f?m:v)+c)-1,E=E.concat(E.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=w[h]=N.call(s,"prototype")?s.prototype:z(V),wt(t.querySelectorAll(E),o),i},t.createElement=it=function(e,n){var r=typeof n=="string"?n:"",i=r?rt.call(t,e,r):rt.call(t,e),s=""+e,o=x.call(b,(r?m:v)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=Tt(s.toUpperCase(),r))),ht=!t.createElement.innerHTMLHelper,u&&yt(i,w[o]),i}),Dt.prototype={constructor:Dt,define:H?function(e,t,n){n?Pt(e,t,n):(P.define(e,t),e=e.toUpperCase(),q[e]={constructor:t,create:[e]},U.set(t,e))}:Pt,get:H?function(e){return P.get(e)||Ht(e)}:Ht,whenDefined:H?function(e){return F.race([P.whenDefined(e),Bt(e)])}:Bt},P||jt();try{(function(e,n,r){n[a]="a",e.prototype=HTMLAnchorElement.prototype,P.define(r,e,n);if(t.createElement(r).getAttribute("is")!==r)throw n})(function qt(){return Reflect.construct(HTMLAnchorElement,[],qt)},{},"document-register-element-a")}catch(Ft){jt()}})(window,document,Object,"registerElement");