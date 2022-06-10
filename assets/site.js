(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));


},{}],2:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.6.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _parseVars = function _parseVars(params, type, parent) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars;

    isLegacy && (vars.duration = params[1]);
    vars.parent = parent;

    if (type) {
      irVars = vars;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return vars;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      suppressEvents || _callback(tween, "onStart");
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _round(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      i = position.charAt(0);

      if (i === "<" || i === ">") {
        return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
      }

      i = position.indexOf("=");

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = +(position.charAt(i - 1) + position.substr(i + 1));
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value) {
    if (typeof value !== "string") {
      return "";
    }

    var v = _unitExp.exec(value);

    return v ? value.substr(v.index + v[0].length) : "";
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        params,
        scope;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }

        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);

        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars, time) {
      var parent = vars.parent || _globalTimeline;
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        !parent._dp || parent.parent || _postAddChecks(parent, this);

        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat === -2 ? Infinity : this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        this._rDelay = value;
        return _onUpdateTotalDuration(this);
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, time) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars, time) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime !== this._time || prevPaused !== !this._ts) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      _isNumber(position) || (position = _parsePosition(this, position));

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          tween = Tween.to(tl, _setDefaults({
        ease: "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));

      return immediateRender ? tween.render(0) : tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate();
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
      }
    }

    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end)) {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _initTween = function _initTween(tween, time) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        if (immediateRender) {
          if (time > 0) {
            autoRevert || (tween._startAt = 0);
          } else if (dur && !(time < 0 && prevStartAt)) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._from = !tl && !!vars.runBackwards;
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, time, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        time.duration = vars;
        vars = time;
        time = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = _this3.parent,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;

        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });

          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = {};

            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }

            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      parent && _postAddChecks(parent, _assertThisInitialized(_this3));

      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay));
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        time && !prevTime && !suppressEvents && _callback(this, "onStart");
        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return new Tween(targets, _parseVars(arguments, 1));
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref2) {
      var name = _ref2.name,
          effect = _ref2.effect,
          plugins = _ref2.plugins,
          defaults = _ref2.defaults,
          extendTimeline = _ref2.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;

      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);

        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.6.0";
  _coreReady = 1;

  if (_windowExists()) {
    _wake();
  }

  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        relative,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      t1 = !cache.uncache && target.getAttribute("data-svg-origin");

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var style = _tempDivStyler.style,
        startCache = target._gsap,
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;
    style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
    style[_transformProp] = transforms;

    _doc$1.body.appendChild(_tempDivStyler);

    endCache = _parseTransform(_tempDivStyler, 1);

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _doc$1.body.removeChild(_tempDivStyler);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;
      _pluginInitted || _initCore();

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }

          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

},{}],3:[function(require,module,exports){
(function (global){(function (){
/* locomotive-scroll v4.1.2 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LocomotiveScroll = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var defaults = {
    el: document,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: false,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: 'vertical',
      gestureDirection: 'vertical'
    }
  };

  var _default = /*#__PURE__*/function () {
    function _default() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      this.namespace = 'locomotive';
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.checkScroll = this.checkScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (this.isMobile) this.direction = this[this.context].direction;

      if (this.direction === 'horizontal') {
        this.directionAxis = 'x';
      } else {
        this.directionAxis = 'y';
      }

      if (this.getDirection) {
        this.instance.direction = null;
      }

      if (this.getDirection) {
        this.instance.speed = 0;
      }

      this.html.classList.add(this.initClass);
      window.addEventListener('resize', this.checkResize, false);
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        this.initEvents();
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;

        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function () {
            _this.resize();

            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {}
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange) return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;

        if (this.isMobile) {
          if (this.isTablet) {
            this.context = 'tablet';
          } else {
            this.context = 'smartphone';
          }
        } else {
          this.context = 'desktop';
        }

        if (oldContext != this.context) {
          var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth) window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function (el) {
          el.addEventListener('click', _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {}
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;

        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              el = _ref2[1];

          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === 'horizontal') {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i);
              }
            }
          }

          if (el && el.inView) {
            if (_this3.direction === 'horizontal') {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i);
              }
            }
          }
        }); // this.els = this.els.filter((current, i) => {
        //     return current !== null;
        // });

        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i] = current;

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'enter');

          if (!current.repeat) {
            this.els[i].call = false;
          }
        } // if (!current.repeat && !current.speed && !current.sticky) {
        //     if (!current.call || current.call && this.hasCallEventSet) {
        //        this.els[i] = null
        //     }
        // }

      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i) {
        var _this4 = this;

        // if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false; // }

        Object.keys(this.currentElements).forEach(function (el) {
          el === i && delete _this4.currentElements[el];
        });

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'exit');
        }

        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(',').map(function (item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + 'scroll');
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }

        var list = this.listeners[event];
        list.push(func);

        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }

        if (event === 'call') {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event]) return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0) return;
        list.splice(index, 1);

        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;

        var name = event.type.replace(this.namespace, '');
        var list = this.listeners[name];
        if (!list || list.length === 0) return;
        list.forEach(function (func) {
          switch (name) {
            case 'scroll':
              return func(_this5.instance);

            case 'call':
              return func(_this5.callValue, _this5.callWay, _this5.callObj);

            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {}
    }, {
      key: "stopScroll",
      value: function stopScroll() {}
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;

        window.removeEventListener('resize', this.checkResize, false);
        Object.keys(this.listeners).forEach(function (event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function (el) {
          el.removeEventListener('click', _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);

    return _default;
  }();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {

    // polyfill
    function polyfill() {
      // aliases
      var w = window;
      var d = document;

      // return if scroll behavior is supported and polyfill is not forced
      if (
        'scrollBehavior' in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true
      ) {
        return;
      }

      // globals
      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468;

      // object gathering original scroll methods
      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      };

      // define timing method
      var now =
        w.performance && w.performance.now
          ? w.performance.now.bind(w.performance)
          : Date.now;

      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */
      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }

      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */
      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */
      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }

      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */
      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }

      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */
      function shouldBailOut(firstArg) {
        if (
          firstArg === null ||
          typeof firstArg !== 'object' ||
          firstArg.behavior === undefined ||
          firstArg.behavior === 'auto' ||
          firstArg.behavior === 'instant'
        ) {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        }

        // throw error when behavior is not supported
        throw new TypeError(
          'behavior member of ScrollOptions ' +
            firstArg.behavior +
            ' is not a valid value for enumeration ScrollBehavior.'
        );
      }

      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }

      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

        return overflowValue === 'auto' || overflowValue === 'scroll';
      }

      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

        return isScrollableY || isScrollableX;
      }

      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */
      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }

      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */
      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;

        // apply easing to elapsed time
        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        // scroll more if we have not reached our destination
        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }

      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */
      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        // define scroll context
        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        }

        // scroll looping over a frame
        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      }

      // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo
      w.scroll = w.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(
            w,
            arguments[0].left !== undefined
              ? arguments[0].left
              : typeof arguments[0] !== 'object'
                ? arguments[0]
                : w.scrollX || w.pageXOffset,
            // use top prop, second argument if present or fallback to scrollY
            arguments[0].top !== undefined
              ? arguments[0].top
              : arguments[1] !== undefined
                ? arguments[1]
                : w.scrollY || w.pageYOffset
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          w,
          d.body,
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : w.scrollX || w.pageXOffset,
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : w.scrollY || w.pageYOffset
        );
      };

      // w.scrollBy
      w.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(
            w,
            arguments[0].left !== undefined
              ? arguments[0].left
              : typeof arguments[0] !== 'object' ? arguments[0] : 0,
            arguments[0].top !== undefined
              ? arguments[0].top
              : arguments[1] !== undefined ? arguments[1] : 0
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          w,
          d.body,
          ~~arguments[0].left + (w.scrollX || w.pageXOffset),
          ~~arguments[0].top + (w.scrollY || w.pageYOffset)
        );
      };

      // Element.prototype.scroll and Element.prototype.scrollTo
      Element.prototype.scroll = Element.prototype.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(
            this,
            // use left prop, first number argument or fallback to scrollLeft
            arguments[0].left !== undefined
              ? ~~arguments[0].left
              : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
            // use top prop, second argument or fallback to scrollTop
            arguments[0].top !== undefined
              ? ~~arguments[0].top
              : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
          );

          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top;

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          this,
          this,
          typeof left === 'undefined' ? this.scrollLeft : ~~left,
          typeof top === 'undefined' ? this.scrollTop : ~~top
        );
      };

      // Element.prototype.scrollBy
      Element.prototype.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(
            this,
            arguments[0].left !== undefined
              ? ~~arguments[0].left + this.scrollLeft
              : ~~arguments[0] + this.scrollLeft,
            arguments[0].top !== undefined
              ? ~~arguments[0].top + this.scrollTop
              : ~~arguments[1] + this.scrollTop
          );

          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      };

      // Element.prototype.scrollIntoView
      Element.prototype.scrollIntoView = function() {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(
            this,
            arguments[0] === undefined ? true : arguments[0]
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(
            this,
            scrollableParent,
            scrollableParent.scrollLeft + clientRects.left - parentRects.left,
            scrollableParent.scrollTop + clientRects.top - parentRects.top
          );

          // reveal parent in viewport unless is fixed
          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = { polyfill: polyfill };
    }

  }());
  });
  var smoothscroll_1 = smoothscroll.polyfill;

  var _default$1 = /*#__PURE__*/function (_Core) {
    _inherits(_default, _Core);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      _this = _super.call(this, options);

      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
      }

      window.addEventListener('scroll', _this.checkScroll, false);

      if (window.smoothscrollPolyfill === undefined) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }

      return _this;
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        this.instance.scroll.y = window.pageYOffset;
        this.addElements();
        this.detectElements();

        _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this2 = this;

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.instance.scroll.y = window.pageYOffset;

        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function () {
              _this2.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
          if (this.instance.direction !== 'down') {
            this.instance.direction = 'down';
          }
        } else if (window.pageYOffset < this.instance.scroll.y) {
          if (this.instance.direction !== 'up') {
            this.instance.direction = 'up';
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) {
          this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        if (Object.entries(this.els).length) {
          this.windowHeight = window.innerHeight;
          this.updateElements();
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this3 = this;

        this.els = {};
        var els = this.el.querySelectorAll('[data-' + this.name + ']');
        els.forEach(function (el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
          var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
          var repeat = el.dataset[_this3.name + 'Repeat'];
          var call = el.dataset[_this3.name + 'Call'];
          var target = el.dataset[_this3.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this3.instance.scroll.y;
          left = targetElBCR.left + _this3.instance.scroll.x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this3.repeat;
          }

          var relativeOffset = _this3.getRelativeOffset(offset);

          top = top + relativeOffset[0];
          bottom = bottom - relativeOffset[1];
          var mappedEl = {
            el: el,
            targetEl: targetEl,
            id: id,
            "class": cl,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            offset: offset,
            progress: 0,
            repeat: repeat,
            inView: false,
            call: call
          };
          _this3.els[id] = mappedEl;

          if (el.classList.contains(cl)) {
            _this3.setInView(_this3.els[id], id);
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this4 = this;

        Object.entries(this.els).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              el = _ref2[1];

          var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

          var bottom = top + el.targetEl.offsetHeight;

          var relativeOffset = _this4.getRelativeOffset(el.offset);

          _this4.els[i].top = top + relativeOffset[0];
          _this4.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];

        if (offset) {
          for (var i = 0; i < offset.length; i++) {
            if (typeof offset[i] == 'string') {
              if (offset[i].includes('%')) {
                relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            } else {
              relativeOffset[i] = offset[i];
            }
          }
        }

        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Parse options
        var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

        var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        if (typeof target === 'string') {
          // Selector or boundaries
          if (target === 'top') {
            target = this.html;
          } else if (target === 'bottom') {
            target = this.html.offsetHeight - window.innerHeight;
          } else {
            target = document.querySelector(target); // If the query fails, abort

            if (!target) {
              return;
            }
          }
        } else if (typeof target === 'number') {
          // Absolute coordinate
          target = parseInt(target);
        } else if (target && target.tagName) ; else {
          console.warn('`target` parameter is not valid');
          return;
        } // We have a target that is not a coordinate yet, get it


        if (typeof target !== 'number') {
          offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        } else {
          offset = target + offset;
        }

        var isTargetReached = function isTargetReached() {
          return parseInt(window.pageYOffset) === parseInt(offset);
        };

        if (callback) {
          if (isTargetReached()) {
            callback();
            return;
          } else {
            var onScroll = function onScroll() {
              if (isTargetReached()) {
                window.removeEventListener('scroll', onScroll);
                callback();
              }
            };

            window.addEventListener('scroll', onScroll);
          }
        }

        window.scrollTo({
          top: offset,
          behavior: options.duration === 0 ? 'auto' : 'smooth'
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

        window.removeEventListener('scroll', this.checkScroll, false);
      }
    }]);

    return _default;
  }(_default);

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  function E () {
    // Keep this empty so it's easier to inherit from
    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
  }

  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});

      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });

      return this;
    },

    once: function (name, callback, ctx) {
      var self = this;
      function listener () {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },

    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;

      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }

      return this;
    },

    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];

      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }

      // Remove event from queue to prevent memory leak
      // Suggested by https://github.com/lazd
      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

      (liveEvents.length)
        ? e[name] = liveEvents
        : delete e[name];

      return this;
    }
  };

  var tinyEmitter = E;

  var lethargy = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.9.2
  (function() {
    var root;

    root =  exports !== null ? exports : this;

    root.Lethargy = (function() {
      function Lethargy(stability, sensitivity, tolerance, delay) {
        this.stability = stability != null ? Math.abs(stability) : 8;
        this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
        this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
        this.delay = delay != null ? delay : 150;
        this.lastUpDeltas = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
        this.lastDownDeltas = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
        this.deltasTimestamp = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
      }

      Lethargy.prototype.check = function(e) {
        var lastDelta;
        e = e.originalEvent || e;
        if (e.wheelDelta != null) {
          lastDelta = e.wheelDelta;
        } else if (e.deltaY != null) {
          lastDelta = e.deltaY * -40;
        } else if ((e.detail != null) || e.detail === 0) {
          lastDelta = e.detail * -40;
        }
        this.deltasTimestamp.push(Date.now());
        this.deltasTimestamp.shift();
        if (lastDelta > 0) {
          this.lastUpDeltas.push(lastDelta);
          this.lastUpDeltas.shift();
          return this.isInertia(1);
        } else {
          this.lastDownDeltas.push(lastDelta);
          this.lastDownDeltas.shift();
          return this.isInertia(-1);
        }
      };

      Lethargy.prototype.isInertia = function(direction) {
        var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
        lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
        if (lastDeltas[0] === null) {
          return direction;
        }
        if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
          return false;
        }
        lastDeltasOld = lastDeltas.slice(0, this.stability);
        lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
        oldSum = lastDeltasOld.reduce(function(t, s) {
          return t + s;
        });
        newSum = lastDeltasNew.reduce(function(t, s) {
          return t + s;
        });
        oldAverage = oldSum / lastDeltasOld.length;
        newAverage = newSum / lastDeltasNew.length;
        if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
          return direction;
        } else {
          return false;
        }
      };

      Lethargy.prototype.showLastUpDeltas = function() {
        return this.lastUpDeltas;
      };

      Lethargy.prototype.showLastDownDeltas = function() {
        return this.lastDownDeltas;
      };

      return Lethargy;

    })();

  }).call(commonjsGlobal);
  });

  var support = (function getSupport() {
      return {
          hasWheelEvent: 'onwheel' in document,
          hasMouseWheelEvent: 'onmousewheel' in document,
          hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
          hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
          hasPointer: !!window.navigator.msPointerEnabled,
          hasKeyDown: 'onkeydown' in document,
          isFirefox: navigator.userAgent.indexOf('Firefox') > -1
      };
  })();

  var toString = Object.prototype.toString,
      hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  var bindallStandalone = function(object) {
      if(!object) return console.warn('bindAll requires at least one argument.');

      var functions = Array.prototype.slice.call(arguments, 1);

      if (functions.length === 0) {

          for (var method in object) {
              if(hasOwnProperty$1.call(object, method)) {
                  if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                      functions.push(method);
                  }
              }
          }
      }

      for(var i = 0; i < functions.length; i++) {
          var f = functions[i];
          object[f] = bind(object[f], object);
      }
  };

  /*
      Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
      bindAll is only needed for events binding so no need to make slow fixes for constructor
      or partial application.
  */
  function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }

  var Lethargy = lethargy.Lethargy;



  var EVT_ID = 'virtualscroll';

  var src = VirtualScroll;

  var keyCodes = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32
  };

  function VirtualScroll(options) {
      bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

      this.el = window;
      if (options && options.el) {
          this.el = options.el;
          delete options.el;
      }
      this.options = objectAssign({
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: false,
          unpreventTouchClass: 'vs-touchmove-allowed',
          limitInertia: false,
          useKeyboard: true,
          useTouch: true
      }, options);

      if (this.options.limitInertia) this._lethargy = new Lethargy();

      this._emitter = new tinyEmitter();
      this._event = {
          y: 0,
          x: 0,
          deltaX: 0,
          deltaY: 0
      };
      this.touchStartX = null;
      this.touchStartY = null;
      this.bodyTouchAction = null;

      if (this.options.passive !== undefined) {
          this.listenerOptions = {passive: this.options.passive};
      }
  }

  VirtualScroll.prototype._notify = function(e) {
      var evt = this._event;
      evt.x += evt.deltaX;
      evt.y += evt.deltaY;

     this._emitter.emit(EVT_ID, {
          x: evt.x,
          y: evt.y,
          deltaX: evt.deltaX,
          deltaY: evt.deltaY,
          originalEvent: e
     });
  };

  VirtualScroll.prototype._onWheel = function(e) {
      var options = this.options;
      if (this._lethargy && this._lethargy.check(e) === false) return;
      var evt = this._event;

      // In Chrome and in Firefox (at least the new one)
      evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
      evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

      // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
      // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
      if(support.isFirefox && e.deltaMode == 1) {
          evt.deltaX *= options.firefoxMultiplier;
          evt.deltaY *= options.firefoxMultiplier;
      }

      evt.deltaX *= options.mouseMultiplier;
      evt.deltaY *= options.mouseMultiplier;

      this._notify(e);
  };

  VirtualScroll.prototype._onMouseWheel = function(e) {
      if (this.options.limitInertia && this._lethargy.check(e) === false) return;

      var evt = this._event;

      // In Safari, IE and in Chrome if 'wheel' isn't defined
      evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
      evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

      this._notify(e);
  };

  VirtualScroll.prototype._onTouchStart = function(e) {
      var t = (e.targetTouches) ? e.targetTouches[0] : e;
      this.touchStartX = t.pageX;
      this.touchStartY = t.pageY;
  };

  VirtualScroll.prototype._onTouchMove = function(e) {
      var options = this.options;
      if(options.preventTouch
          && !e.target.classList.contains(options.unpreventTouchClass)) {
          e.preventDefault();
      }

      var evt = this._event;

      var t = (e.targetTouches) ? e.targetTouches[0] : e;

      evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
      evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

      this.touchStartX = t.pageX;
      this.touchStartY = t.pageY;

      this._notify(e);
  };

  VirtualScroll.prototype._onKeyDown = function(e) {
      var evt = this._event;
      evt.deltaX = evt.deltaY = 0;
      var windowHeight = window.innerHeight - 40;

      switch(e.keyCode) {
          case keyCodes.LEFT:
          case keyCodes.UP:
              evt.deltaY = this.options.keyStep;
              break;

          case keyCodes.RIGHT:
          case keyCodes.DOWN:
              evt.deltaY = - this.options.keyStep;
              break;
          case  e.shiftKey:
              evt.deltaY = windowHeight;
              break;
          case keyCodes.SPACE:
              evt.deltaY = - windowHeight;
              break;
          default:
              return;
      }

      this._notify(e);
  };

  VirtualScroll.prototype._bind = function() {
      if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
      if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

      if(support.hasTouch && this.options.useTouch) {
          this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
          this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
      }

      if(support.hasPointer && support.hasTouchWin) {
          this.bodyTouchAction = document.body.style.msTouchAction;
          document.body.style.msTouchAction = 'none';
          this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
          this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
  };

  VirtualScroll.prototype._unbind = function() {
      if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
      if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

      if(support.hasTouch) {
          this.el.removeEventListener('touchstart', this._onTouchStart);
          this.el.removeEventListener('touchmove', this._onTouchMove);
      }

      if(support.hasPointer && support.hasTouchWin) {
          document.body.style.msTouchAction = this.bodyTouchAction;
          this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
          this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
  };

  VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);

    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
  };

  VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);

    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
  };

  VirtualScroll.prototype.reset = function() {
      var evt = this._event;
      evt.x = 0;
      evt.y = 0;
  };

  VirtualScroll.prototype.destroy = function() {
      this._emitter.off();
      this._unbind();
  };

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }

    return translate;
  }

  /**
   * Returns an array containing all the parent nodes of the given node
   * @param  {object} node
   * @return {array} parent nodes
   */
  function getParents(elem) {
    // Set up a parent array
    var parents = []; // Push each parent element to the array

    for (; elem && elem !== document; elem = elem.parentNode) {
      parents.push(elem);
    } // Return our parent array


    return parents;
  } // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

  /**
   * https://github.com/gre/bezier-easing
   * BezierEasing - use bezier curve for transition easing function
   * by Gaëtan Renaudeau 2014 - 2015 – MIT License
   */

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'function';

  function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
  function C (aA1)      { return 3.0 * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

  function binarySubdivide (aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
   for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
     var currentSlope = getSlope(aGuessT, mX1, mX2);
     if (currentSlope === 0.0) {
       return aGuessT;
     }
     var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
     aGuessT -= currentX / currentSlope;
   }
   return aGuessT;
  }

  function LinearEasing (x) {
    return x;
  }

  var src$1 = function bezier (mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error('bezier x values must be in [0, 1] range');
    }

    if (mX1 === mY1 && mX2 === mY2) {
      return LinearEasing;
    }

    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }

    function getTForX (aX) {
      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function BezierEasing (x) {
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };

  var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
  };

  var _default$2 = /*#__PURE__*/function (_Core) {
    _inherits(_default, _Core);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
      _this = _super.call(this, options);
      if (_this.inertia) _this.lerp = _this.inertia * 0.1;
      _this.isScrolling = false;
      _this.isDraggingScrollbar = false;
      _this.isTicking = false;
      _this.hasScrollTicking = false;
      _this.parallaxElements = {};
      _this.stop = false;
      _this.scrollbarContainer = options.scrollbarContainer;
      _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
      window.addEventListener('keydown', _this.checkKey, false);
      return _this;
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        this.html.classList.add(this.smoothClass);
        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        this.instance = _objectSpread2({
          delta: {
            x: this.initPosition.x,
            y: this.initPosition.y
          },
          scroll: {
            x: this.initPosition.x,
            y: this.initPosition.y
          }
        }, this.instance);
        this.vs = new src({
          el: this.scrollFromAnywhere ? document : this.el,
          mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
          firefoxMultiplier: this.firefoxMultiplier,
          touchMultiplier: this.touchMultiplier,
          useKeyboard: false,
          passive: true
        });
        this.vs.on(function (e) {
          if (_this2.stop) {
            return;
          }

          if (!_this2.isDraggingScrollbar) {
            requestAnimationFrame(function () {
              _this2.updateDelta(e);

              if (!_this2.isScrolling) _this2.startScrolling();
            });
          }
        });
        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();
        this.checkScroll(true);
        this.transformElements(true, true);

        _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
      }
    }, {
      key: "setScrollLimit",
      value: function setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

        if (this.direction === 'horizontal') {
          var totalWidth = 0;
          var nodes = this.el.children;

          for (var i = 0; i < nodes.length; i++) {
            totalWidth += nodes[i].offsetWidth;
          }

          this.instance.limit.x = totalWidth - this.windowWidth;
        }
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        this.startScrollTs = Date.now(); // Record timestamp

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
        //Pevent scrollbar glitch/locking

        this.startScrollTs = undefined;

        if (this.scrollToRaf) {
          cancelAnimationFrame(this.scrollToRaf);
          this.scrollToRaf = null;
        }

        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
      }
    }, {
      key: "checkKey",
      value: function checkKey(e) {
        var _this3 = this;

        if (this.stop) {
          // If we are stopped, we don't want any scroll to occur because of a keypress
          // Prevent tab to scroll to activeElement
          if (e.keyCode == keyCodes$1.TAB) {
            requestAnimationFrame(function () {
              // Make sure native scroll is always at top of page
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
            });
          }

          return;
        }

        switch (e.keyCode) {
          case keyCodes$1.TAB:
            // Do not remove the RAF
            // It allows to override the browser's native scrollTo, which is essential
            requestAnimationFrame(function () {
              // Make sure native scroll is always at top of page
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

              _this3.scrollTo(document.activeElement, {
                offset: -window.innerHeight / 2
              });
            });
            break;

          case keyCodes$1.UP:
            this.instance.delta[this.directionAxis] -= 240;
            break;

          case keyCodes$1.DOWN:
            this.instance.delta[this.directionAxis] += 240;
            break;

          case keyCodes$1.PAGEUP:
            this.instance.delta[this.directionAxis] -= window.innerHeight;
            break;

          case keyCodes$1.PAGEDOWN:
            this.instance.delta[this.directionAxis] += window.innerHeight;
            break;

          case keyCodes$1.HOME:
            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
            break;

          case keyCodes$1.END:
            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
            break;

          case keyCodes$1.SPACE:
            if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
              if (e.shiftKey) {
                this.instance.delta[this.directionAxis] -= window.innerHeight;
              } else {
                this.instance.delta[this.directionAxis] += window.innerHeight;
              }
            }

            break;

          default:
            return;
        }

        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this4 = this;

        var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (forced || this.isScrolling || this.isDraggingScrollbar) {
          if (!this.hasScrollTicking) {
            this.checkScrollRaf = requestAnimationFrame(function () {
              return _this4.checkScroll();
            });
            this.hasScrollTicking = true;
          }

          this.updateScroll();
          var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
          var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

          if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
            this.stopScrolling();
          }

          Object.entries(this.sections).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                i = _ref2[0],
                section = _ref2[1];

            if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
              if (_this4.direction === 'horizontal') {
                _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
              } else {
                _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
              }

              if (!section.inView) {
                section.inView = true;
                section.el.style.opacity = 1;
                section.el.style.pointerEvents = 'all';
                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
              }
            } else {
              if (section.inView || forced) {
                section.inView = false;
                section.el.style.opacity = 0;
                section.el.style.pointerEvents = 'none';
                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
              }

              _this4.transform(section.el, 0, 0);
            }
          });

          if (this.getDirection) {
            this.addDirection();
          }

          if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
          }

          this.detectElements();
          this.transformElements();

          if (this.hasScrollbar) {
            var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

            if (this.direction === 'horizontal') {
              this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
            } else {
              this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }
          }

          _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

          this.hasScrollTicking = false;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.checkContext();
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.update();
      }
    }, {
      key: "updateDelta",
      value: function updateDelta(e) {
        var delta;
        var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

        if (gestureDirection === 'both') {
          delta = e.deltaX + e.deltaY;
        } else if (gestureDirection === 'vertical') {
          delta = e.deltaY;
        } else if (gestureDirection === 'horizontal') {
          delta = e.deltaX;
        } else {
          delta = e.deltaY;
        }

        this.instance.delta[this.directionAxis] -= delta * this.multiplier;
        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      }
    }, {
      key: "updateScroll",
      value: function updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
          this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
        } else {
          if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
          } else if (this.instance.scroll.y < 0) {
            this.setScroll(this.instance.scroll[this.directionAxis], 0);
          } else {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
          if (this.instance.direction !== 'down') {
            this.instance.direction = 'down';
          }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
          if (this.instance.direction !== 'up') {
            this.instance.direction = 'up';
          }
        }

        if (this.instance.delta.x > this.instance.scroll.x) {
          if (this.instance.direction !== 'right') {
            this.instance.direction = 'right';
          }
        } else if (this.instance.delta.x < this.instance.scroll.x) {
          if (this.instance.direction !== 'left') {
            this.instance.direction = 'left';
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
          this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "initScrollBar",
      value: function initScrollBar() {
        this.scrollbar = document.createElement('span');
        this.scrollbarThumb = document.createElement('span');
        this.scrollbar.classList.add("".concat(this.scrollbarClass));
        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
        this.scrollbar.append(this.scrollbarThumb);

        if (this.scrollbarContainer) {
          this.scrollbarContainer.append(this.scrollbar);
        } else {
          document.body.append(this.scrollbar);
        } // Scrollbar Events


        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);
        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

        this.hasScrollbar = false;

        if (this.direction == 'horizontal') {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }

        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "reinitScrollBar",
      value: function reinitScrollBar() {
        this.hasScrollbar = false;

        if (this.direction == 'horizontal') {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }

        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "destroyScrollBar",
      value: function destroyScrollBar() {
        this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
        window.removeEventListener('mouseup', this.releaseScrollBar);
        window.removeEventListener('mousemove', this.moveScrollBar);
        this.scrollbar.remove();
      }
    }, {
      key: "getScrollBar",
      value: function getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
      }
    }, {
      key: "releaseScrollBar",
      value: function releaseScrollBar(e) {
        this.isDraggingScrollbar = false;

        if (this.isScrolling) {
          this.html.classList.add(this.scrollingClass);
        }

        this.html.classList.remove(this.draggingClass);
      }
    }, {
      key: "moveScrollBar",
      value: function moveScrollBar(e) {
        var _this5 = this;

        if (this.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
            var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

            if (y > 0 && y < _this5.instance.limit.y) {
              _this5.instance.delta.y = y;
            }

            if (x > 0 && x < _this5.instance.limit.x) {
              _this5.instance.delta.x = x;
            }
          });
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this6 = this;

        this.els = {};
        this.parallaxElements = {}; // this.sections.forEach((section, y) => {

        var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
        els.forEach(function (el, index) {
          // Try and find the target's parent section
          var targetParents = getParents(el);
          var section = Object.entries(_this6.sections).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                section = _ref4[1];

            return section;
          }).find(function (section) {
            return targetParents.includes(section.el);
          });
          var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
          var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
          var top;
          var left;
          var repeat = el.dataset[_this6.name + 'Repeat'];
          var call = el.dataset[_this6.name + 'Call'];
          var position = el.dataset[_this6.name + 'Position'];
          var delay = el.dataset[_this6.name + 'Delay'];
          var direction = el.dataset[_this6.name + 'Direction'];
          var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
          var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
          var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
          var target = el.dataset[_this6.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          var targetElBCR = targetEl.getBoundingClientRect();

          if (section === null) {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          } else {
            if (!section.inView) {
              top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
              left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
            } else {
              top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
              left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
            }
          }

          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };

          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this6.repeat;
          }

          var relativeOffset = [0, 0];

          if (offset) {
            if (_this6.direction === 'horizontal') {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }

          var mappedEl = {
            el: el,
            id: id,
            "class": cl,
            section: section,
            top: top,
            middle: middle,
            bottom: bottom,
            left: left,
            right: right,
            offset: offset,
            progress: 0,
            repeat: repeat,
            inView: false,
            call: call,
            speed: speed,
            delay: delay,
            position: position,
            target: targetEl,
            direction: direction,
            sticky: sticky
          };
          _this6.els[id] = mappedEl;

          if (el.classList.contains(cl)) {
            _this6.setInView(_this6.els[id], id);
          }

          if (speed !== false || sticky) {
            _this6.parallaxElements[id] = mappedEl;
          }
        }); // });
      }
    }, {
      key: "addSections",
      value: function addSections() {
        var _this7 = this;

        this.sections = {};
        var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

        if (sections.length === 0) {
          sections = [this.el];
        }

        sections.forEach(function (section, index) {
          var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
          var sectionBCR = section.getBoundingClientRect();
          var offset = {
            x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
            y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
          };
          var limit = {
            x: offset.x + sectionBCR.width + window.innerWidth * 2,
            y: offset.y + sectionBCR.height + window.innerHeight * 2
          };
          var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
          section.setAttribute('data-scroll-section-id', id);
          var mappedSection = {
            el: section,
            offset: offset,
            limit: limit,
            inView: false,
            persistent: persistent,
            id: id
          };
          _this7.sections[id] = mappedSection;
        });
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform;

        if (!delay) {
          transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }

        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this8 = this;

        var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              i = _ref6[0],
              current = _ref6[1];

          var transformDistance = false;

          if (isForced) {
            transformDistance = 0;
          }

          if (current.inView || setAllElements) {
            switch (current.position) {
              case 'top':
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;

              case 'elementTop':
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;

              case 'bottom':
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                break;

              case 'left':
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;

              case 'elementLeft':
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;

              case 'right':
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                break;

              default:
                transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                break;
            }
          }

          if (current.sticky) {
            if (current.inView) {
              if (_this8.direction === 'horizontal') {
                transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
              } else {
                transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
              }
            } else {
              if (_this8.direction === 'horizontal') {
                if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + window.innerWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + window.innerHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }

          if (transformDistance !== false) {
            if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
              _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var _this9 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Parse options
        var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

        var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds

        var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

        var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

        var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        easing = src$1.apply(void 0, _toConsumableArray(easing));

        if (typeof target === 'string') {
          // Selector or boundaries
          if (target === 'top') {
            target = 0;
          } else if (target === 'bottom') {
            target = this.instance.limit.y;
          } else if (target === 'left') {
            target = 0;
          } else if (target === 'right') {
            target = this.instance.limit.x;
          } else {
            target = document.querySelector(target); // If the query fails, abort

            if (!target) {
              return;
            }
          }
        } else if (typeof target === 'number') {
          // Absolute coordinate
          target = parseInt(target);
        } else if (target && target.tagName) ; else {
          console.warn('`target` parameter is not valid');
          return;
        } // We have a target that is not a coordinate yet, get it


        if (typeof target !== 'number') {
          // Verify the given target belongs to this scroll scope
          var targetInScope = getParents(target).includes(this.el);

          if (!targetInScope) {
            // If the target isn't inside our main element, abort any action
            return;
          } // Get target offset from top


          var targetBCR = target.getBoundingClientRect();
          var offsetTop = targetBCR.top;
          var offsetLeft = targetBCR.left; // Try and find the target's parent section

          var targetParents = getParents(target);
          var parentSection = targetParents.find(function (candidate) {
            return Object.entries(_this9.sections) // Get sections associative array as a regular array
            .map(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  section = _ref8[1];

              return section;
            }) // map to section only (we dont need the key here)
            .find(function (section) {
              return section.el == candidate;
            }); // finally find the section that matches the candidate
          });
          var parentSectionOffset = 0;

          if (parentSection) {
            parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
          } else {
            // if no parent section is found we need to use instance scroll directly
            parentSectionOffset = -this.instance.scroll[this.directionAxis];
          } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


          if (this.direction === 'horizontal') {
            offset = offsetLeft + offset - parentSectionOffset;
          } else {
            offset = offsetTop + offset - parentSectionOffset;
          }
        } else {
          offset = target + offset;
        } // Actual scrollto
        // ==========================================================================
        // Setup


        var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

        var scrollDiff = scrollTarget - scrollStart;

        var render = function render(p) {
          if (disableLerp) {
            if (_this9.direction === 'horizontal') {
              _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
            } else {
              _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
            }
          } else {
            _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
          }
        }; // Prepare the scroll


        this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

        this.startScrolling(); // Restart the scroll
        // Start the animation loop

        var start = Date.now();

        var loop = function loop() {
          var p = (Date.now() - start) / duration; // Animation progress

          if (p > 1) {
            // Animation ends
            render(1);
            _this9.animatingScroll = false;
            if (duration == 0) _this9.update();
            if (callback) callback();
          } else {
            _this9.scrollToRaf = requestAnimationFrame(loop);
            render(easing(p));
          }
        };

        loop();
      }
    }, {
      key: "update",
      value: function update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();
        this.checkScroll(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
          scroll: {
            x: x,
            y: y
          },
          delta: {
            x: x,
            y: y
          },
          speed: 0
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener('keydown', this.checkKey, false);
      }
    }]);

    return _default;
  }(_default);

  var Smooth = /*#__PURE__*/function () {
    function Smooth() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Smooth);

      this.options = options; // Override default options with given ones

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
      if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
      if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
      this.init();
    }

    _createClass(Smooth, [{
      key: "init",
      value: function init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.scroll = new _default$2(this.options);
        } else {
          this.scroll = new _default$1(this.options);
        }

        this.scroll.init();

        if (window.location.hash) {
          // Get the hash without the '#' and find the matching element
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id); // If found, scroll to the element

          if (target) this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);

    return Smooth;
  }();

  return Smooth;

})));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _default = /*#__PURE__*/function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.mAttr = 'data-' + options.dataName;
    this.mCaptureEvents = ['mouseenter', 'mouseleave'];
    this.el = options.el;
  }

  _createClass(_default, [{
    key: "mInit",
    value: function mInit(modules) {
      var _this = this;

      this.modules = modules;
      this.mCheckEventTarget = this.mCheckEventTarget.bind(this);

      if (this.events) {
        Object.keys(this.events).forEach(function (event) {
          return _this.mAddEvent(event);
        });
      }
    }
  }, {
    key: "mUpdate",
    value: function mUpdate(modules) {
      this.modules = modules;
    }
  }, {
    key: "mDestroy",
    value: function mDestroy() {
      var _this2 = this;

      if (this.events) {
        Object.keys(this.events).forEach(function (event) {
          return _this2.mRemoveEvent(event);
        });
      }
    }
  }, {
    key: "mAddEvent",
    value: function mAddEvent(event) {
      var capture = this.mCaptureEvents.includes(event) ? true : false;
      this.el.addEventListener(event, this.mCheckEventTarget, capture);
    }
  }, {
    key: "mRemoveEvent",
    value: function mRemoveEvent(event) {
      var capture = this.mCaptureEvents.includes(event) ? true : false;
      this.el.removeEventListener(event, this.mCheckEventTarget, capture);
    }
  }, {
    key: "mCheckEventTarget",
    value: function mCheckEventTarget(e) {
      var event = this.events[e.type];

      if (typeof event === "string") {
        this[event](e);
      } else {
        var data = '[' + this.mAttr + ']';
        var target = e.target;

        if (this.mCaptureEvents.includes(e.type)) {
          if (target.matches(data)) {
            this.mCallEventMethod(e, event, target);
          }
        } else {
          while (target && target !== document) {
            if (target.matches(data)) {
              if (this.mCallEventMethod(e, event, target) != 'undefined') {
                break;
              }
            }

            target = target.parentNode;
          }
        }
      }
    }
  }, {
    key: "mCallEventMethod",
    value: function mCallEventMethod(e, event, target) {
      var name = target.getAttribute(this.mAttr);

      if (event.hasOwnProperty(name)) {
        var method = event[name];

        if (!e.hasOwnProperty('currentTarget')) {
          Object.defineProperty(e, 'currentTarget', {
            value: target
          });
        }

        if (!e.hasOwnProperty('curTarget')) {
          Object.defineProperty(e, 'curTarget', {
            value: target
          }); // For IE 11
        }

        this[method](e);
      }
    }
  }, {
    key: "$",
    value: function $(query, context) {
      var classIndex = query.indexOf('.');
      var idIndex = query.indexOf('#');
      var attrIndex = query.indexOf('[');
      var indexes = [classIndex, idIndex, attrIndex].filter(function (index) {
        return index != -1;
      });
      var index = false;
      var name = query;
      var more = '';
      var parent = this.el;

      if (indexes.length) {
        index = Math.min.apply(Math, _toConsumableArray(indexes));
        name = query.slice(0, index);
        more = query.slice(index);
      }

      if (_typeof(context) == 'object') {
        parent = context;
      }

      return parent.querySelectorAll('[' + this.mAttr + '=' + name + ']' + more);
    }
  }, {
    key: "parent",
    value: function parent(query, context) {
      var data = '[' + this.mAttr + '=' + query + ']';
      var parent = context.parentNode;

      while (parent && parent !== document) {
        if (parent.matches(data)) {
          return parent;
        }

        parent = parent.parentNode;
      }
    }
  }, {
    key: "getData",
    value: function getData(name, context) {
      var target = context || this.el;
      return target.getAttribute(this.mAttr + '-' + name);
    }
  }, {
    key: "setData",
    value: function setData(name, value, context) {
      var target = context || this.el;
      return target.setAttribute(this.mAttr + '-' + name, value);
    }
  }, {
    key: "call",
    value: function call(func, args, mod, id) {
      var _this3 = this;

      if (args && !mod) {
        mod = args;
        args = false;
      }

      if (this.modules[mod]) {
        if (id) {
          if (this.modules[mod][id]) {
            this.modules[mod][id][func](args);
          }
        } else {
          Object.keys(this.modules[mod]).forEach(function (id) {
            _this3.modules[mod][id][func](args);
          });
        }
      }
    }
  }, {
    key: "on",
    value: function on(e, mod, func, id) {
      var _this4 = this;

      if (this.modules[mod]) {
        if (id) {
          this.modules[mod][id].el.addEventListener(e, function (o) {
            return func(o);
          });
        } else {
          Object.keys(this.modules[mod]).forEach(function (i) {
            _this4.modules[mod][i].el.addEventListener(e, function (o) {
              return func(o);
            });
          });
        }
      }
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return _default;
}();

var _default$1 = /*#__PURE__*/function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.app;
    this.modules = options.modules;
    this.currentModules = {};
    this.activeModules = {};
    this.newModules = {};
    this.moduleId = 0;
  }

  _createClass(_default, [{
    key: "init",
    value: function init(app, scope) {
      var _this = this;

      var container = scope || document;
      var elements = container.querySelectorAll('*');

      if (app && !this.app) {
        this.app = app;
      }

      this.activeModules['app'] = {
        'app': this.app
      };
      elements.forEach(function (el) {
        Array.from(el.attributes).forEach(function (i) {
          if (i.name.startsWith('data-module')) {
            var moduleExists = false;
            var dataName = i.name.split('-').splice(2);

            var moduleName = _this.toCamel(dataName);

            if (_this.modules[moduleName]) {
              moduleExists = true;
            } else if (_this.modules[_this.toUpper(moduleName)]) {
              moduleName = _this.toUpper(moduleName);
              moduleExists = true;
            }

            if (moduleExists) {
              var options = {
                el: el,
                name: moduleName,
                dataName: dataName.join('-')
              };
              var module = new _this.modules[moduleName](options);
              var id = i.value;

              if (!id) {
                _this.moduleId++;
                id = 'm' + _this.moduleId;
                el.setAttribute(i.name, id);
              }

              _this.addActiveModule(moduleName, id, module);

              var moduleId = moduleName + '-' + id;

              if (scope) {
                _this.newModules[moduleId] = module;
              } else {
                _this.currentModules[moduleId] = module;
              }
            }
          }
        });
      });
      Object.entries(this.currentModules).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            module = _ref2[1];

        if (scope) {
          var split = id.split('-');
          var moduleName = split.shift();
          var moduleId = split.pop();

          _this.addActiveModule(moduleName, moduleId, module);
        } else {
          _this.initModule(module);
        }
      });
    }
  }, {
    key: "initModule",
    value: function initModule(module) {
      module.mInit(this.activeModules);
      module.init();
    }
  }, {
    key: "addActiveModule",
    value: function addActiveModule(name, id, module) {
      if (this.activeModules[name]) {
        Object.assign(this.activeModules[name], _defineProperty({}, id, module));
      } else {
        this.activeModules[name] = _defineProperty({}, id, module);
      }
    }
  }, {
    key: "update",
    value: function update(scope) {
      var _this2 = this;

      this.init(this.app, scope);
      Object.entries(this.currentModules).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            id = _ref4[0],
            module = _ref4[1];

        module.mUpdate(_this2.activeModules);
      });
      Object.entries(this.newModules).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            id = _ref6[0],
            module = _ref6[1];

        _this2.initModule(module);
      });
      Object.assign(this.currentModules, this.newModules);
    }
  }, {
    key: "destroy",
    value: function destroy(scope) {
      if (scope) {
        this.destroyScope(scope);
      } else {
        this.destroyModules();
      }
    }
  }, {
    key: "destroyScope",
    value: function destroyScope(scope) {
      var _this3 = this;

      var elements = scope.querySelectorAll('*');
      elements.forEach(function (el) {
        Array.from(el.attributes).forEach(function (i) {
          if (i.name.startsWith('data-module')) {
            var id = i.value;
            var dataName = i.name.split('-').splice(2);
            var moduleName = _this3.toCamel(dataName) + '-' + id;
            var moduleExists = false;

            if (_this3.currentModules[moduleName]) {
              moduleExists = true;
            } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
              moduleName = _this3.toUpper(moduleName);
              moduleExists = true;
            }

            if (moduleExists) {
              _this3.destroyModule(_this3.currentModules[moduleName]);

              delete _this3.currentModules[moduleName];
            }
          }
        });
      });
      this.activeModules = {};
      this.newModules = {};
    }
  }, {
    key: "destroyModules",
    value: function destroyModules() {
      var _this4 = this;

      Object.entries(this.currentModules).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            id = _ref8[0],
            module = _ref8[1];

        _this4.destroyModule(module);
      });
      this.currentModules = [];
    }
  }, {
    key: "destroyModule",
    value: function destroyModule(module) {
      module.mDestroy();
      module.destroy();
    }
  }, {
    key: "toCamel",
    value: function toCamel(arr) {
      var _this5 = this;

      return arr.reduce(function (a, b) {
        return a + _this5.toUpper(b);
      });
    }
  }, {
    key: "toUpper",
    value: function toUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }]);

  return _default;
}();

exports.default = _default$1;
exports.module = _default;

},{}],5:[function(require,module,exports){
// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define(e):f.Stats=e()})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _environment = require("../utils/environment");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable */

/* global ga */
var Axeptio = /*#__PURE__*/function () {
  function Axeptio() {
    _classCallCheck(this, Axeptio);

    this.settings = {
      ga: {
        code: _environment.html.dataset.analytics,
        type: null
      },
      axeptio: _environment.html.dataset.axeptio
    };
    window.axeptioSettings = {
      clientId: this.settings.axeptio,
      cookiesVersion: 'alexandraperles-base',
      userCookiesDuration: 30 * 6
    };

    _environment.html.removeAttribute('data-analytics');

    _environment.html.removeAttribute('data-axeptio');

    this.setAxeptio();
    this.setAxeptioConfig();
    this.states = {};
    this.choices = {};
  }

  _createClass(Axeptio, [{
    key: "setAxeptio",
    value: function setAxeptio() {
      var t = document.getElementsByTagName('script')[0];
      var e = document.createElement('script');
      e.async = true;
      e.src = '//static.axept.io/sdk.js';
      t.parentNode.insertBefore(e, t);
    }
  }, {
    key: "setAxeptioConfig",
    value: function setAxeptioConfig() {
      var _this = this;

      var nbOfDaysToWaitBeforeAskingAgain = 30 * 6;
      window._axcb = window._axcb || [];

      window._axcb.push(function (sdk) {
        try {
          var json = sdk.userPreferencesManager.readChoicesFromCookies('STYXKEY_axeptio_json');

          if (json && json.$$date) {
            var acceptedAt = new Date(json.$$date);
            var now = new Date();

            if ((now.getTime() - acceptedAt.getTime()) / (1000 * 60 * 60) > nbOfDaysToWaitBeforeAskingAgain) {
              window.openAxeptioCookies();
            }
          }
        } catch (err) {
          console.error('Axeptio could not read previous choices nor parse consent date', err);
        }
      });

      window._axcb.push(function (axeptio) {
        axeptio.on('cookies:complete', function (choices) {
          _this.choices = choices;

          if (choices.google_analytics) {
            _this.setGA();
          }
        });
      });
    }
  }, {
    key: "setGA",
    value: function setGA() {
      if (this.states.google_analytics || !this.settings.ga.code) {
        return;
      }

      this.states.google_analytics = true;

      (function (i, s, o, g, r, a, m) {
        i.GoogleAnalyticsObject = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', this.settings.ga.code, 'auto');
      ga('send', 'pageview');
    }
  }, {
    key: "updateGaPage",
    value: function updateGaPage() {
      if (this.choices.google_analytics) {
        console.log(window.location.pathname);
        window.ga('set', 'page', window.location.pathname);
        window.ga('send', 'pageview');
      }
    }
  }]);

  return Axeptio;
}();

exports["default"] = Axeptio;

},{"../utils/environment":21}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CreditsButton = /*#__PURE__*/function (_module) {
  _inherits(CreditsButton, _module);

  var _super = _createSuper(CreditsButton);

  function CreditsButton(m) {
    var _this;

    _classCallCheck(this, CreditsButton);

    _this = _super.call(this, m);
    _this.events = {
      click: 'openModal'
    };
    return _this;
  }

  _createClass(CreditsButton, [{
    key: "openModal",
    value: function openModal() {
      this.call('toggleModal', 'Credits');
    }
  }]);

  return CreditsButton;
}(_modujs.module);

exports["default"] = CreditsButton;

},{"modujs":4}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Credits = /*#__PURE__*/function (_module) {
  _inherits(Credits, _module);

  var _super = _createSuper(Credits);

  function Credits(m) {
    var _this;

    _classCallCheck(this, Credits);

    _this = _super.call(this, m);
    _this.events = {
      click: {
        creditsCloser: 'toggleModal'
      }
    };
    _this.states = {
      open: false
    };
    return _this;
  }

  _createClass(Credits, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.el.classList.toggle('-active');
    }
  }]);

  return Credits;
}(_modujs.module);

exports["default"] = Credits;

},{"modujs":4}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DisplayFull = /*#__PURE__*/function (_module) {
  _inherits(DisplayFull, _module);

  var _super = _createSuper(DisplayFull);

  function DisplayFull(m) {
    var _this;

    _classCallCheck(this, DisplayFull);

    _this = _super.call(this, m);
    _this.events = {
      click: {
        openButton: 'toggleContent'
      }
    };
    _this.state = false;
    return _this;
  }

  _createClass(DisplayFull, [{
    key: "toggleContent",
    value: function toggleContent() {
      var _this2 = this;

      clearTimeout(this.timeout);
      var contentFull = this.$('contentFull')[0];
      var contentHidden = this.$('contentHidden')[0];
      var button = this.$('openButton')[0];
      this.state = !this.state;
      var height = this.state ? contentHidden.offsetHeight : 0;
      contentFull.style.height = "".concat("".concat(height), "px");
      this.timeout = setTimeout(function () {
        _this2.call("update", null, "Scroll"); // this.call("scrollTo", {el: this.el.parentNode, offset: -150}, "Scroll")

      }, 300);
      button.classList.toggle("-active");
    }
  }]);

  return DisplayFull;
}(_modujs.module);

exports["default"] = DisplayFull;

},{"modujs":4}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Example = /*#__PURE__*/function (_module) {
  _inherits(Example, _module);

  var _super = _createSuper(Example);

  function Example(m) {
    var _this;

    _classCallCheck(this, Example);

    _this = _super.call(this, m);
    console.log('hello world');
    _this.doSomething = _this.constructor.doSomething;
    _this.events = {
      click: {
        button: 'doSomething'
      }
    };
    return _this;
  }

  _createClass(Example, [{
    key: "resize",
    value: function resize() {}
  }, {
    key: "aResize",
    value: function aResize() {}
  }, {
    key: "animate",
    value: function animate() {}
  }, {
    key: "aAnimate",
    value: function aAnimate() {}
  }], [{
    key: "doSomething",
    value: function doSomething() {
      console.log('Hello world');
    }
  }]);

  return Example;
}(_modujs.module);

exports["default"] = Example;

},{"modujs":4}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var headerScroll = /*#__PURE__*/function (_module) {
  _inherits(headerScroll, _module);

  var _super = _createSuper(headerScroll);

  function headerScroll() {
    _classCallCheck(this, headerScroll);

    return _super.apply(this, arguments);
  }

  _createClass(headerScroll, [{
    key: "toggleSticky",
    value: function toggleSticky(y) {
      this.el.classList[y > 0 ? "add" : "remove"]("-sticky");
    }
  }]);

  return headerScroll;
}(_modujs.module);

exports["default"] = headerScroll;

},{"modujs":4}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var linkActive = /*#__PURE__*/function (_module) {
  _inherits(linkActive, _module);

  var _super = _createSuper(linkActive);

  function linkActive(m) {
    var _this;

    _classCallCheck(this, linkActive);

    _this = _super.call(this, m);
    _this.doSomething = _this.constructor.doSomething;
    _this.events = {
      click: {
        button: 'doSomething'
      }
    };
    return _this;
  }

  _createClass(linkActive, null, [{
    key: "doSomething",
    value: function doSomething() {
      var list = document.querySelectorAll(".li-notLogo");
      list.forEach(function (element) {
        element.classList.remove("-active");
      });
      this.el.classList.add("-active");
    }
  }]);

  return linkActive;
}(_modujs.module);

exports["default"] = linkActive;

},{"modujs":4}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Menu = /*#__PURE__*/function (_module) {
  _inherits(Menu, _module);

  var _super = _createSuper(Menu);

  function Menu(m) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, m);
    _this.state = false;
    _this.events = {};
    return _this;
  }

  return Menu;
}(_modujs.module);

exports["default"] = Menu;

},{"modujs":4}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var mobileMenu = /*#__PURE__*/function (_module) {
  _inherits(mobileMenu, _module);

  var _super = _createSuper(mobileMenu);

  function mobileMenu(m) {
    var _this;

    _classCallCheck(this, mobileMenu);

    _this = _super.call(this, m);
    _this.toggleMenu = _this.constructor.toggleMenu;
    _this.events = {
      click: {
        button: 'toggleMenu'
      }
    };
    return _this;
  }

  _createClass(mobileMenu, null, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var list = document.querySelector(".nav");
      var burger = document.querySelector(".bar");
      list.classList.toggle("-active");
      burger.classList.toggle("-active");
    }
  }]);

  return mobileMenu;
}(_modujs.module);

exports["default"] = mobileMenu;

},{"modujs":4}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = require("modujs");

var _locomotiveScroll = _interopRequireDefault(require("locomotive-scroll"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = /*#__PURE__*/function (_module) {
  _inherits(_default, _module);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var direction = this.el.dataset.horizontal !== undefined ? 'horizontal' : 'vertical';
      this.scroll = new _locomotiveScroll["default"]({
        el: this.el,
        smooth: true,
        direction: direction,
        tablet: {
          breakpoint: 768
        },
        reloadOnContextChange: true
      });
      this.scroll.on('call', this.onCall.bind(this));
      this.trottleScroll = (0, _utils.throttle)(this.onScroll.bind(this), 100);
      this.scroll.on('scroll', this.trottleScroll);
    }
  }, {
    key: "onCall",
    value: function onCall(func, way, obj) {
      this.call(func[0], {
        enter: way === 'enter',
        obj: obj
      }, func[1], func[2]);
    }
  }, {
    key: "onScroll",
    value: function onScroll(args) {
      this.call("toggleSticky", args.scroll.y, "headerScroll");
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(_ref) {
      var el = _ref.el,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset;
      this.scroll.scrollTo(el, {
        offset: offset
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return _default;
}(_modujs.module);

exports["default"] = _default;

},{"../utils/utils":22,"locomotive-scroll":3,"modujs":4}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Example", {
  enumerable: true,
  get: function get() {
    return _example["default"];
  }
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: function get() {
    return _menu["default"];
  }
});
Object.defineProperty(exports, "Scroll", {
  enumerable: true,
  get: function get() {
    return _scroll["default"];
  }
});
Object.defineProperty(exports, "displayFull", {
  enumerable: true,
  get: function get() {
    return _displayFull["default"];
  }
});
Object.defineProperty(exports, "linkActive", {
  enumerable: true,
  get: function get() {
    return _linkActive["default"];
  }
});
Object.defineProperty(exports, "mobileMenu", {
  enumerable: true,
  get: function get() {
    return _mobileMenu["default"];
  }
});
Object.defineProperty(exports, "Credits", {
  enumerable: true,
  get: function get() {
    return _credits["default"];
  }
});
Object.defineProperty(exports, "CreditsButton", {
  enumerable: true,
  get: function get() {
    return _creditsButton["default"];
  }
});
Object.defineProperty(exports, "headerScroll", {
  enumerable: true,
  get: function get() {
    return _headerScroll["default"];
  }
});

var _example = _interopRequireDefault(require("../modules/_example"));

var _menu = _interopRequireDefault(require("../modules/_menu"));

var _scroll = _interopRequireDefault(require("../modules/_scroll"));

var _displayFull = _interopRequireDefault(require("../modules/_display-full"));

var _linkActive = _interopRequireDefault(require("../modules/_link-active"));

var _mobileMenu = _interopRequireDefault(require("../modules/_mobile-menu"));

var _credits = _interopRequireDefault(require("../modules/_credits"));

var _creditsButton = _interopRequireDefault(require("../modules/_credits-button"));

var _headerScroll = _interopRequireDefault(require("../modules/_header-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"../modules/_credits":8,"../modules/_credits-button":7,"../modules/_display-full":9,"../modules/_example":10,"../modules/_header-scroll":11,"../modules/_link-active":12,"../modules/_menu":13,"../modules/_mobile-menu":14,"../modules/_scroll":15}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "basicTransition", {
  enumerable: true,
  get: function get() {
    return _basicTransition["default"];
  }
});

var _basicTransition = _interopRequireDefault(require("../transitions/_basic-transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"../transitions/_basic-transition":20}],18:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modujs = _interopRequireDefault(require("modujs"));

var _core = _interopRequireDefault(require("@barba/core"));

var _stats = _interopRequireDefault(require("stats.js"));

var _axeptio = _interopRequireDefault(require("../atoms/_axeptio"));

var transitions = _interopRequireWildcard(require("./_transitions"));

var modules = _interopRequireWildcard(require("./_modules"));

var _environment = require("../utils/environment");

var _utils = require("../utils/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Website = /*#__PURE__*/function () {
  function Website(config) {
    _classCallCheck(this, Website);

    this.config = config; // eslint-disable-next-line new-cap

    this.manager = new _modujs["default"]({
      modules: modules
    });
    this.transitions = [];
    this.updateModules = false;
    this.axeptio = new _axeptio["default"]();
    this.animate = this.animate.bind(this);
    this.enter = this.enter.bind(this);
    this.once = this.once.bind(this);
    this.afterLeave = this.afterLeave.bind(this);
    this.constructor.beforeLeave = this.constructor.toggleLoad.bind(this, true);
    this.debounceResize = (0, _utils.debounce)(this.resize.bind(this), 600);

    _environment.html.classList.add('is-ready');

    this.setTransitions();
    this.init();
  }

  _createClass(Website, [{
    key: "init",
    value: function init() {
      _core["default"].hooks.afterLeave(this.afterLeave);

      _core["default"].hooks.enter(this.enter);

      _core["default"].hooks.once(this.once);

      _core["default"].hooks.after(this.after);

      _core["default"].hooks.beforeLeave(this.constructor.beforeLeave);

      var configBarba = {
        debug: _environment.isDebug,
        transitions: this.transitions
      };

      if (_environment.isDebug) {
        configBarba.logLevel = 'info';
        configBarba.timeout = 10000;
        this.stats = new _stats["default"]();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom

        _environment.body.appendChild(this.stats.dom);
      }

      _core["default"].init(configBarba);
    }
  }, {
    key: "after",
    value: function after() {
      this.axeptio.updateGaPage();
      this.constructor.toggleLoad(false);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (_environment.isDebug) {
        this.stats.begin();
      }

      if (this.updateModules && this.isAnimating) {
        this.parseModulesFunctions('animate');
        this.parseModulesFunctions('aAnimate');
      } // monitored code goes here


      if (_environment.isDebug) {
        this.stats.end();
      }

      this.requestId = window.requestAnimationFrame(this.animate);
    }
  }, {
    key: "browseModulesFunctions",
    value: function browseModulesFunctions(funcs) {
      var modulesToList = {};
      var i = 0;
      var length = funcs.length; // parse functions to parse modules

      for (; i < length; i += 1) {
        var func = funcs[i];
        var modulesToReturn = [];
        var modulesToParse = Object.keys(this.manager.activeModules);
        var mki = 0;
        var mklength = modulesToParse.length; // Parse modules to check if instances has function

        for (; mki < mklength; mki += 1) {
          var moduleName = modulesToParse[mki];
          var modulesList = this.manager.activeModules[moduleName];
          var modulesToReturnInstances = this.constructor.checkModuleHasFunction(modulesList, func);

          if (modulesToReturnInstances) {
            modulesToReturn = [].concat(_toConsumableArray(modulesToReturn), _toConsumableArray(modulesToReturnInstances));
          }
        }

        modulesToList[func] = modulesToReturn;
      }

      return modulesToList;
    }
  }, {
    key: "parseModulesFunctions",
    value: function parseModulesFunctions(func) {
      var i = 0;
      var modulesFunct = this.modulesToList[func];
      var length = modulesFunct.length;

      for (; i < length; i += 1) {
        modulesFunct[i][func]();
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      (0, _utils.log)('resize');

      if (this.updateModules) {
        this.parseModulesFunctions('resize');
        this.parseModulesFunctions('aResize');
      }
    }
  }, {
    key: "once",
    value: function once() {
      this.manager.init(this.manager);
      this.setModulesFunctions();
      this.updateModules = true;
      this.constructor.toggleLoad(false);
      window.addEventListener('resize', this.debounceResize);
      this.resize();

      if (_environment.isDebug || this.config.animate) {
        this.requestId = window.requestAnimationFrame(this.animate);
      }
    }
  }, {
    key: "afterLeave",
    value: function afterLeave(data) {
      this.updateModules = false;

      if (data.current.container) {
        this.manager.app.destroy(data.current.container);
      }
    }
  }, {
    key: "enter",
    value: function enter(data) {
      if (data.current.container) {
        data.current.container.remove();
      }

      window.scrollTo(0, 0);
      this.manager.app.update(data.next.container);
      this.setModulesFunctions();
      this.updateModules = true;
      this.resize();
    }
  }, {
    key: "setModulesFunctions",
    value: function setModulesFunctions() {
      this.modulesToList = this.browseModulesFunctions(['resize', 'aResize', 'animate', 'aAnimate']);
    }
  }, {
    key: "setTransitions",
    value: function setTransitions() {
      var _this = this;

      Object.keys(transitions).forEach(function (transitionName) {
        var singleTransition = transitions[transitionName];
        singleTransition.init({});

        _this.transitions.push(singleTransition);
      });
    }
  }], [{
    key: "checkModuleHasFunction",
    value: function checkModuleHasFunction(modulesList, func) {
      var modulesToReturn = [];
      var subModules = Object.keys(modulesList);
      var mkj = 0;
      var subModulesLength = subModules.length;
      var firstSubModule = modulesList[subModules[0]]; // If first module has function, then add all instances in functions

      if (typeof firstSubModule[func] === 'function' // typeof firstSubModule[afunc] === 'function'
      ) {
          for (; mkj < subModulesLength; mkj += 1) {
            var submoduleName = subModules[mkj];
            var subModule = modulesList[submoduleName];
            modulesToReturn.push(subModule);
          }
        }

      return modulesToReturn.length > 0 ? modulesToReturn : null;
    }
  }, {
    key: "toggleLoad",
    value: function toggleLoad(state) {
      _environment.html.classList[state ? 'remove' : 'add']('is-loaded');

      _environment.html.classList[state ? 'add' : 'remove']('is-loading');

      this.isAnimating = !state;
    }
  }]);

  return Website;
}();

exports["default"] = Website;

},{"../atoms/_axeptio":6,"../utils/environment":21,"../utils/utils":22,"./_modules":16,"./_transitions":17,"@barba/core":1,"modujs":4,"stats.js":5}],19:[function(require,module,exports){
"use strict";

var _website = _interopRequireDefault(require("./organisms/_website"));

var _axeptio = _interopRequireDefault(require("./atoms/_axeptio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/main
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// window.axeptioSettings = {
//   clientId: '61850af2ba16597fd42f79e3',
//   cookiesVersion: 'alexandraperles-base',
//   userCookiesDuration: 30 * 6,
// }
window.addEventListener('load', function () {
  var init = function init() {
    console.log('%cFait avec ❤️❤️❤️ par TROA', 'font-size:10px;color:#AACBF4; background-color:#263069; padding:5px;');
    window.website = new _website["default"]({
      animate: true
    }); // window.axeptio = new Axeptio()
  };

  var $style = document.getElementById('main-css');

  if (!$style) {
    console.warn('The "main-css" stylesheet not found');
    return;
  }

  if ($style.isLoaded) {
    init();
  } else {
    $style.addEventListener('load', init);
  }
});

},{"./atoms/_axeptio":6,"./organisms/_website":18}],20:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gsap = _interopRequireWildcard(require("gsap"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { html } from '../utils/environment'
// import loadImages from './_images'
var _default = {
  after: function after() {},
  afterEnter: function afterEnter(data) {
    return _gsap["default"].to(this.container, {
      delay: 2,
      opacity: '0',
      autoAlpha: '0',
      duration: 0.6,
      ease: _gsap.Power3.easeIn,
      onStart: function onStart() {
        var l = document.getElementById("js-loader");
        var h = document.getElementById("header");
        var c = document.getElementById("alogo");
        h.className += " in";
        c.className += " in";
        l.className += " out";
      },
      onComplete: function onComplete() {
        var d = document.getElementById("content");
        d.className += " goanim";
      }
    });
  },
  afterLeave: function afterLeave() {},
  before: function before() {},
  beforeEnter: function beforeEnter() {
    return loadImages(data.next.container);
  },
  beforeLeave: function beforeLeave() {},
  enter: function enter() {},
  init: function init(config) {
    this.container = document.querySelector('#js-loader');
    this.logo = document.querySelector('.js-loader-logo');
    this.percent = this.container.querySelector('.js-loader-percent');
    this.config = config;
  },
  invoke: function invoke() {
    return {
      after: this.after.bind(this),
      afterEnter: this.afterEnter.bind(this),
      afterLeave: this.afterLeave.bind(this),
      before: this.before.bind(this),
      beforeEnter: this.beforeEnter.bind(this),
      beforeLeave: this.beforeLeave.bind(this),
      enter: this.enter.bind(this),
      init: this.init.bind(this),
      leave: this.leave.bind(this),
      name: this.name,
      once: this.once.bind(this)
    };
  },
  leave: function leave() {
    return _gsap["default"].fromTo(this.container, {
      opacity: 0,
      autoAlpha: 0
    }, {
      opacity: 1,
      duration: 0.6,
      ease: _gsap.Power3.easeOut,
      autoAlpha: 1
    }, {
      y: '-100%'
    }, {
      y: '0%',
      duration: 1,
      ease: _gsap.Power3.easeOut
    });
  },
  name: 'basic',
  once: function once(data) {
    var _this = this;

    this.afterEnter(data).then(function () {
      _this.after();

      window.website.after();
    });
  }
}.invoke();

exports["default"] = _default;

},{"gsap":2}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridPositionsMobile = exports.gridPositionsDesktop = exports.isDebug = exports.body = exports.html = exports.DATA_API_KEY = exports.APP_NAME = void 0;
var APP_NAME = 'MATSEB';
exports.APP_NAME = APP_NAME;
var DATA_API_KEY = '.data-api';
exports.DATA_API_KEY = DATA_API_KEY;
var gridPositionsDesktop = [{
  column: 0,
  y: 0,
  width: 0,
  invert: false
}, {
  column: 4,
  y: 3,
  width: 0,
  invert: true
}, {
  column: 6,
  y: 0,
  width: 0,
  invert: false
}, {
  column: 9,
  y: 10,
  width: 0,
  invert: true
}, {
  column: 1,
  y: 26,
  width: 0,
  invert: false
}, {
  column: 5,
  y: 30,
  width: 0,
  invert: false
}, {
  column: 3,
  y: 38,
  width: 0,
  invert: false
}, {
  column: 7,
  y: 44,
  width: 0,
  invert: false
}, {
  column: 2,
  y: 55,
  width: 0,
  invert: true
}, {
  column: 4,
  y: 69,
  width: 0,
  invert: true
}, {
  column: 6,
  y: 63,
  width: 0,
  invert: true
}, {
  column: 9,
  y: 75,
  width: 0,
  invert: true
}];
exports.gridPositionsDesktop = gridPositionsDesktop;
var gridPositionsMobile = [{
  column: 0,
  y: 0,
  width: 0,
  invert: false
}, {
  column: 4,
  y: 3,
  width: 0,
  invert: true
}, {
  column: 5,
  y: 0,
  width: 0,
  invert: true
}, {
  column: 1,
  y: 26,
  width: 0,
  invert: false
}, {
  column: 5,
  y: 30,
  width: 0,
  invert: false
}, {
  column: 3,
  y: 38,
  width: 0,
  invert: false
}, {
  column: 2,
  y: 55,
  width: 0,
  invert: true
}, {
  column: 4,
  y: 69,
  width: 0,
  invert: true
}, {
  column: 0,
  y: 63,
  width: 0,
  invert: false
}];
exports.gridPositionsMobile = gridPositionsMobile;
var html = document.documentElement;
exports.html = html;
var _document = document,
    body = _document.body;
exports.body = body;
var isDebug = html.hasAttribute('data-debug');
exports.isDebug = isDebug;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;
exports.roundDecimal = roundDecimal;
exports.formatForm = formatForm;
exports.getRatioPx = getRatioPx;
exports.getResponsiveValue = getResponsiveValue;
exports.hasTouchEvent = hasTouchEvent;
exports.log = log;
exports.getMatrix = exports.getTransform = exports.closest = exports.throttle = exports.debounce = exports.ready = void 0;

var _environment = require("./environment");

var _arguments = arguments,
    _this = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * List of usefull tools
 *
 * @module utils
 * @example
 * import { ready } from "path/to/utils.js"
 */

/**
 * Execute a callback when element is ready
 *
 * @method ready
 * @access public
 * @param {function} fn - Callback to execute if element is ready
 * @param {nodeElement} [element] - Element on wich check if it's ready
 * @example
 * import { ready } from "path/to/utils.js"
 *
 * ready(() => {
 *   // your code here
 * })
 */
var ready = function ready(fn) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  // eslint-disable-next-line no-unused-expressions
  element.readyState !== "loading" ? fn.apply(element) : element.addEventListener("DOMContentLoaded", fn.bind(element));
};
/**
 * Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
 * As in "execute this function only if 100 milliseconds have passed without it being called."
 *
 * @method debounce
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { debounce } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', debounce(
 *    () => {
 *      // Your code here
 *      // Executed 50ms after the user stops to scroll
 *    }, 50
 * ))
 */


exports.ready = ready;

var debounce = function debounce(callback, delay) {
  var timer;
  return function () {
    // eslint-disable-next-line no-undef
    var args = _arguments;
    var context = _this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, delay);
  };
};
/**
 * Throttling enforces a maximum number of times a function can be called over time.
 * As in "execute this function at most once every 100 milliseconds."
 *
 * @method throttle
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { throttle } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', throttle(
 *    () => {
 *      // Your code here
 *      // Executed everey 50ms during scrolling
 *    }, 50
 * ))
 */


exports.debounce = debounce;

var throttle = function throttle(callback, delay) {
  var last;
  var timer; // eslint-disable-next-line func-names

  return function () {
    var context = this;
    var now = +new Date(); // eslint-disable-next-line prefer-rest-params

    var args = arguments;

    if (last && now < last + delay) {
      // le délai n'est pas écoulé on reset le timer
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        callback.apply(context, args);
      }, delay);
    } else {
      last = now;
      callback.apply(context, args);
    }
  };
};
/**
 * Return the closest ancestor of an element matching a selector
 *
 * @method closest
 * @access public
 * @param {nodeElement} element
 * @param {string} selector
 * @param {string} [stopSelector="body"]
 * @returns {nodeElement}
 * @example
 * <!-- Considering following HTML structure -->
 * <div class="foo">
 *    <div class="bar">
 *      <div id="baz">
 *        lorem ipsum
 *      </div>
 *    </div>
 * </div>
 * @example
 * import { closest } from "path/to/utils.js"
 *
 * // It return you `.foo` div
 * closest(document.querySelector('#baz'), '.foo');
 */
// eslint-disable-next-line complexity


exports.throttle = throttle;

var closest = function closest(element, selector) {
  var stopSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "body";
  // eslint-disable-next-line no-undef
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
  var retval = null;

  while (element) {
    if (element.matches(selector)) {
      retval = element;
      break;
    } else if (stopSelector && element.matches(stopSelector)) {
      break;
    }

    element = element.parentElement;
  }

  return retval;
};

exports.closest = closest;

var getTransform = function getTransform(el) {
  var style = window.getComputedStyle(el);
  return style.transform || style.webkitTransform || style.mozTransform;
};

exports.getTransform = getTransform;

var getMatrix = function getMatrix(transform) {
  var translate = {};
  var mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = parseFloat(mat[1].split(', ')[12]);
    translate.y = parseFloat(mat[1].split(', ')[13]);
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  return translate;
};

exports.getMatrix = getMatrix;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function roundDecimal(nombre) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  // var precision = precision || 2;
  var tmp = Math.pow(10, precision); // const tmp = Math.pow(10, precision);

  return Math.round(nombre * tmp) / tmp;
}

function formatForm(form) {
  var formData = new FormData(form);
  var entries = Array.from(formData.entries());
  var filtersObject = {};
  entries.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    try {
      filtersObject[name] = JSON.parse(value);
    } catch (e) {
      filtersObject[name] = value;
    }
  });
  return filtersObject;
}

function getRatioPx(value) {
  return value / window.screen.width * window.viewport.width;
}

function getResponsiveValue(responsiveObject) {
  if (_typeof(responsiveObject) === 'object') {
    var responsiveValue = 1;
    Object.entries(responsiveObject).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      if (Number(key) < window.screen.width) {
        responsiveValue = value;
      }
    });
    return responsiveValue;
  }

  return responsiveObject;
}

function hasTouchEvent() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function log(content) {
  if (_environment.isDebug) {
    console.log(content);
  }
}

},{"./environment":21}]},{},[19])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhcmJhL2NvcmUvZGlzdC9iYXJiYS51bWQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3NhcC9kaXN0L2dzYXAuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9jb21vdGl2ZS1zY3JvbGwvZGlzdC9sb2NvbW90aXZlLXNjcm9sbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb2R1anMvZGlzdC9tYWluLmNqcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9idWlsZC9zdGF0cy5taW4uanMiLCJhdG9tcy9fYXhlcHRpby5qcyIsIm1vZHVsZXMvX2NyZWRpdHMtYnV0dG9uLmpzIiwibW9kdWxlcy9fY3JlZGl0cy5qcyIsIm1vZHVsZXMvX2Rpc3BsYXktZnVsbC5qcyIsIm1vZHVsZXMvX2V4YW1wbGUuanMiLCJtb2R1bGVzL19oZWFkZXItc2Nyb2xsLmpzIiwibW9kdWxlcy9fbGluay1hY3RpdmUuanMiLCJtb2R1bGVzL19tZW51LmpzIiwibW9kdWxlcy9fbW9iaWxlLW1lbnUuanMiLCJtb2R1bGVzL19zY3JvbGwuanMiLCJvcmdhbmlzbXMvX21vZHVsZXMuanMiLCJvcmdhbmlzbXMvX3RyYW5zaXRpb25zLmpzIiwib3JnYW5pc21zL193ZWJzaXRlLmpzIiwic2l0ZS5qcyIsInRyYW5zaXRpb25zL19iYXNpYy10cmFuc2l0aW9uLmpzIiwidXRpbHMvZW52aXJvbm1lbnQuanMiLCJ1dGlscy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztBQUVBOztBQUNBO0lBQ3FCLE87QUFDbkIscUJBQWM7QUFBQTs7QUFDWixTQUFLLFFBQUwsR0FBZ0I7QUFDZCxNQUFBLEVBQUUsRUFBRTtBQUNGLFFBQUEsSUFBSSxFQUFFLGtCQUFLLE9BQUwsQ0FBYSxTQURqQjtBQUVGLFFBQUEsSUFBSSxFQUFFO0FBRkosT0FEVTtBQUtkLE1BQUEsT0FBTyxFQUFFLGtCQUFLLE9BQUwsQ0FBYTtBQUxSLEtBQWhCO0FBT0EsSUFBQSxNQUFNLENBQUMsZUFBUCxHQUF5QjtBQUN2QixNQUFBLFFBQVEsRUFBRSxLQUFLLFFBQUwsQ0FBYyxPQUREO0FBRXZCLE1BQUEsY0FBYyxFQUFFLHNCQUZPO0FBR3ZCLE1BQUEsbUJBQW1CLEVBQUUsS0FBSztBQUhILEtBQXpCOztBQUtBLHNCQUFLLGVBQUwsQ0FBcUIsZ0JBQXJCOztBQUNBLHNCQUFLLGVBQUwsQ0FBcUIsY0FBckI7O0FBQ0EsU0FBSyxVQUFMO0FBQ0EsU0FBSyxnQkFBTDtBQUNBLFNBQUssTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7Ozs7V0FFRCxzQkFBYTtBQUNYLFVBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFWO0FBQ0EsVUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBLE1BQUEsQ0FBQyxDQUFDLEtBQUYsR0FBVSxJQUFWO0FBQ0EsTUFBQSxDQUFDLENBQUMsR0FBRixHQUFRLDBCQUFSO0FBQ0EsTUFBQSxDQUFDLENBQUMsVUFBRixDQUFhLFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDRDs7O1dBRUQsNEJBQW1CO0FBQUE7O0FBQ2pCLFVBQU0sK0JBQStCLEdBQUcsS0FBSyxDQUE3QztBQUNBLE1BQUEsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUMsS0FBUCxJQUFnQixFQUEvQjs7QUFDQSxNQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBYixDQUFrQixVQUFDLEdBQUQsRUFBUztBQUN6QixZQUFJO0FBQ0YsY0FBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLHNCQUFKLENBQTJCLHNCQUEzQixDQUNYLHNCQURXLENBQWI7O0FBR0EsY0FBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQWpCLEVBQXlCO0FBQ3ZCLGdCQUFNLFVBQVUsR0FBRyxJQUFJLElBQUosQ0FBUyxJQUFJLENBQUMsTUFBZCxDQUFuQjtBQUNBLGdCQUFNLEdBQUcsR0FBRyxJQUFJLElBQUosRUFBWjs7QUFDQSxnQkFDRSxDQUFDLEdBQUcsQ0FBQyxPQUFKLEtBQWdCLFVBQVUsQ0FBQyxPQUFYLEVBQWpCLEtBQTBDLE9BQU8sRUFBUCxHQUFZLEVBQXRELElBQ0EsK0JBRkYsRUFHRTtBQUNBLGNBQUEsTUFBTSxDQUFDLGtCQUFQO0FBQ0Q7QUFDRjtBQUNGLFNBZEQsQ0FjRSxPQUFPLEdBQVAsRUFBWTtBQUNaLFVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FDRSxnRUFERixFQUVFLEdBRkY7QUFJRDtBQUNGLE9BckJEOztBQXVCQSxNQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBYixDQUFrQixVQUFDLE9BQUQsRUFBYTtBQUM3QixRQUFBLE9BQU8sQ0FBQyxFQUFSLENBQVcsa0JBQVgsRUFBK0IsVUFBQyxPQUFELEVBQWE7QUFDMUMsVUFBQSxLQUFJLENBQUMsT0FBTCxHQUFlLE9BQWY7O0FBQ0EsY0FBSSxPQUFPLENBQUMsZ0JBQVosRUFBOEI7QUFDNUIsWUFBQSxLQUFJLENBQUMsS0FBTDtBQUNEO0FBQ0YsU0FMRDtBQU1ELE9BUEQ7QUFRRDs7O1dBRUQsaUJBQVE7QUFDTixVQUFJLEtBQUssTUFBTCxDQUFZLGdCQUFaLElBQWdDLENBQUMsS0FBSyxRQUFMLENBQWMsRUFBZCxDQUFpQixJQUF0RCxFQUE0RDtBQUMxRDtBQUNEOztBQUNELFdBQUssTUFBTCxDQUFZLGdCQUFaLEdBQStCLElBQS9COztBQUVDLE9BQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCO0FBQUMsUUFBQSxDQUFDLENBQUMscUJBQUYsR0FBd0IsQ0FBeEI7QUFBMEIsUUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNLFlBQVU7QUFDdkUsV0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLElBQVEsRUFBaEIsRUFBb0IsSUFBcEIsQ0FBeUIsU0FBekI7QUFBb0MsU0FEYyxFQUNiLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLEdBQU8sSUFBRSxJQUFJLElBQUosRUFESTtBQUNPLFFBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxhQUFGLENBQWdCLENBQWhCLENBQUYsRUFDekQsQ0FBQyxHQUFDLENBQUMsQ0FBQyxvQkFBRixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUR1RDtBQUMxQixRQUFBLENBQUMsQ0FBQyxLQUFGLEdBQVEsQ0FBUjtBQUFVLFFBQUEsQ0FBQyxDQUFDLEdBQUYsR0FBTSxDQUFOO0FBQVEsUUFBQSxDQUFDLENBQUMsVUFBRixDQUFhLFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNEIsQ0FBNUI7QUFDaEQsT0FIRixFQUdJLE1BSEosRUFHVyxRQUhYLEVBR29CLFFBSHBCLEVBRzZCLHlDQUg3QixFQUd1RSxJQUh2RTs7QUFLRCxNQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBSyxRQUFMLENBQWMsRUFBZCxDQUFpQixJQUE1QixFQUFrQyxNQUFsQyxDQUFGO0FBQ0EsTUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFVBQVQsQ0FBRjtBQUNEOzs7V0FFRCx3QkFBZTtBQUNiLFVBQUksS0FBSyxPQUFMLENBQWEsZ0JBQWpCLEVBQW1DO0FBQ2pDLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFNLENBQUMsUUFBUCxDQUFnQixRQUE1QjtBQUNBLFFBQUEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLFFBQXpDO0FBQ0EsUUFBQSxNQUFNLENBQUMsRUFBUCxDQUFVLE1BQVYsRUFBa0IsVUFBbEI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Rkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7QUFDbkIseUJBQVksQ0FBWixFQUFlO0FBQUE7O0FBQUE7O0FBQ2IsOEJBQU0sQ0FBTjtBQUNBLFVBQUssTUFBTCxHQUFjO0FBQ1osTUFBQSxLQUFLLEVBQUU7QUFESyxLQUFkO0FBRmE7QUFNZDs7OztXQUVELHFCQUFZO0FBQ1YsV0FBSyxJQUFMLENBQVUsYUFBVixFQUF5QixTQUF6QjtBQUNEOzs7O0VBWHdDLGM7Ozs7Ozs7Ozs7Ozs7O0FDRjNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE87Ozs7O0FBQ25CLG1CQUFZLENBQVosRUFBZTtBQUFBOztBQUFBOztBQUNiLDhCQUFNLENBQU47QUFDQSxVQUFLLE1BQUwsR0FBYztBQUNaLE1BQUEsS0FBSyxFQUFFO0FBQ0wsUUFBQSxhQUFhLEVBQUU7QUFEVjtBQURLLEtBQWQ7QUFLQSxVQUFLLE1BQUwsR0FBYztBQUNaLE1BQUEsSUFBSSxFQUFFO0FBRE0sS0FBZDtBQVBhO0FBVWQ7Ozs7V0FFRCx1QkFBYztBQUNaLFdBQUssRUFBTCxDQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsU0FBekI7QUFDRDs7OztFQWZrQyxjOzs7Ozs7Ozs7Ozs7OztBQ05yQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixXOzs7OztBQUNuQix1QkFBWSxDQUFaLEVBQWU7QUFBQTs7QUFBQTs7QUFDYiw4QkFBTSxDQUFOO0FBQ0EsVUFBSyxNQUFMLEdBQWM7QUFDWixNQUFBLEtBQUssRUFBRTtBQUNMLFFBQUEsVUFBVSxFQUFFO0FBRFA7QUFESyxLQUFkO0FBTUEsVUFBSyxLQUFMLEdBQWEsS0FBYjtBQVJhO0FBU2Q7Ozs7V0FFRCx5QkFBZ0I7QUFBQTs7QUFFZCxNQUFBLFlBQVksQ0FBQyxLQUFLLE9BQU4sQ0FBWjtBQUVBLFVBQU0sV0FBVyxHQUFHLEtBQUssQ0FBTCxDQUFPLGFBQVAsRUFBc0IsQ0FBdEIsQ0FBcEI7QUFDQSxVQUFNLGFBQWEsR0FBRyxLQUFLLENBQUwsQ0FBTyxlQUFQLEVBQXdCLENBQXhCLENBQXRCO0FBQ0EsVUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFMLENBQU8sWUFBUCxFQUFxQixDQUFyQixDQUFmO0FBRUEsV0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFLLEtBQW5CO0FBRUEsVUFBTSxNQUFNLEdBQUcsS0FBSyxLQUFMLEdBQWEsYUFBYSxDQUFDLFlBQTNCLEdBQTBDLENBQXpEO0FBQ0EsTUFBQSxXQUFXLENBQUMsS0FBWixDQUFrQixNQUFsQix1QkFBaUMsTUFBakM7QUFFQSxXQUFLLE9BQUwsR0FBZSxVQUFVLENBQUMsWUFBTTtBQUM5QixRQUFBLE1BQUksQ0FBQyxJQUFMLENBQVUsUUFBVixFQUFvQixJQUFwQixFQUEwQixRQUExQixFQUQ4QixDQUU5Qjs7QUFDRCxPQUh3QixFQUd0QixHQUhzQixDQUF6QjtBQUlBLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsU0FBeEI7QUFDRDs7OztFQTlCc0MsYzs7Ozs7Ozs7Ozs7Ozs7QUNGekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7QUFDbkIsbUJBQVksQ0FBWixFQUFlO0FBQUE7O0FBQUE7O0FBQ2IsOEJBQU0sQ0FBTjtBQUNBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixXQUFwQztBQUNBLFVBQUssTUFBTCxHQUFjO0FBQ1osTUFBQSxLQUFLLEVBQUU7QUFDTCxRQUFBLE1BQU0sRUFBRTtBQURIO0FBREssS0FBZDtBQUphO0FBU2Q7Ozs7V0FFRCxrQkFBUyxDQUFFOzs7V0FFWCxtQkFBVSxDQUFFOzs7V0FFWixtQkFBVSxDQUFFOzs7V0FFWixvQkFBVyxDQUFFOzs7V0FFYix1QkFBcUI7QUFDbkIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGFBQVo7QUFDRDs7OztFQXRCa0MsYzs7Ozs7Ozs7Ozs7Ozs7QUNGckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsWTs7Ozs7Ozs7Ozs7OztXQUNuQixzQkFBYSxDQUFiLEVBQWdCO0FBQ2QsV0FBSyxFQUFMLENBQVEsU0FBUixDQUFrQixDQUFDLEdBQUcsQ0FBSixHQUFRLEtBQVIsR0FBZ0IsUUFBbEMsRUFBNEMsU0FBNUM7QUFDRDs7OztFQUh1QyxjOzs7Ozs7Ozs7Ozs7OztBQ0YxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixVOzs7OztBQUNuQixzQkFBWSxDQUFaLEVBQWU7QUFBQTs7QUFBQTs7QUFDYiw4QkFBTSxDQUFOO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixXQUFwQztBQUNBLFVBQUssTUFBTCxHQUFjO0FBQ1osTUFBQSxLQUFLLEVBQUU7QUFDTCxRQUFBLE1BQU0sRUFBRTtBQURIO0FBREssS0FBZDtBQUhhO0FBUWQ7Ozs7V0FFRCx1QkFBcUI7QUFDbkIsVUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGFBQTFCLENBQWI7QUFFQSxNQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsVUFBQSxPQUFPLEVBQUk7QUFDdEIsUUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNELE9BRkQ7QUFHQSxXQUFLLEVBQUwsQ0FBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0Q7Ozs7RUFsQnFDLGM7Ozs7Ozs7Ozs7Ozs7O0FDRnhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTs7Ozs7QUFDbkIsZ0JBQVksQ0FBWixFQUFlO0FBQUE7O0FBQUE7O0FBQ2IsOEJBQU0sQ0FBTjtBQUNBLFVBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxVQUFLLE1BQUwsR0FBYyxFQUFkO0FBSGE7QUFLZDs7O0VBTitCLGM7Ozs7Ozs7Ozs7Ozs7O0FDRmxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7O0FBQ25CLHNCQUFZLENBQVosRUFBZTtBQUFBOztBQUFBOztBQUNiLDhCQUFNLENBQU47QUFDQSxVQUFLLFVBQUwsR0FBa0IsTUFBSyxXQUFMLENBQWlCLFVBQW5DO0FBQ0EsVUFBSyxNQUFMLEdBQWM7QUFDWixNQUFBLEtBQUssRUFBRTtBQUNMLFFBQUEsTUFBTSxFQUFFO0FBREg7QUFESyxLQUFkO0FBSGE7QUFRZDs7OztXQUVELHNCQUFvQjtBQUNsQixVQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsVUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZjtBQUVBLE1BQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFNBQXRCO0FBQ0EsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixTQUF4QjtBQUNEOzs7O0VBakJxQyxjOzs7Ozs7Ozs7Ozs7OztBQ0Z4Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUdFLGdCQUFPO0FBQ0wsVUFBTSxTQUFTLEdBQ2IsS0FBSyxFQUFMLENBQVEsT0FBUixDQUFnQixVQUFoQixLQUErQixTQUEvQixHQUEyQyxZQUEzQyxHQUEwRCxVQUQ1RDtBQUVBLFdBQUssTUFBTCxHQUFjLElBQUksNEJBQUosQ0FBcUI7QUFDakMsUUFBQSxFQUFFLEVBQUUsS0FBSyxFQUR3QjtBQUVqQyxRQUFBLE1BQU0sRUFBRSxJQUZ5QjtBQUdqQyxRQUFBLFNBQVMsRUFBVCxTQUhpQztBQUlqQyxRQUFBLE1BQU0sRUFBRTtBQUNOLFVBQUEsVUFBVSxFQUFFO0FBRE4sU0FKeUI7QUFPakMsUUFBQSxxQkFBcUIsRUFBRTtBQVBVLE9BQXJCLENBQWQ7QUFVQSxXQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsTUFBZixFQUF1QixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQXZCO0FBQ0EsV0FBSyxhQUFMLEdBQXFCLHFCQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBVCxFQUFxQyxHQUFyQyxDQUFyQjtBQUNBLFdBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUssYUFBOUI7QUFDRDs7O1dBRUQsZ0JBQU8sSUFBUCxFQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUI7QUFDckIsV0FBSyxJQUFMLENBQVUsSUFBSSxDQUFDLENBQUQsQ0FBZCxFQUFtQjtBQUFFLFFBQUEsS0FBSyxFQUFFLEdBQUcsS0FBSyxPQUFqQjtBQUEwQixRQUFBLEdBQUcsRUFBSDtBQUExQixPQUFuQixFQUFvRCxJQUFJLENBQUMsQ0FBRCxDQUF4RCxFQUE2RCxJQUFJLENBQUMsQ0FBRCxDQUFqRTtBQUNEOzs7V0FFRCxrQkFBUyxJQUFULEVBQWU7QUFDYixXQUFLLElBQUwsQ0FBVSxjQUFWLEVBQTBCLElBQUksQ0FBQyxNQUFMLENBQVksQ0FBdEMsRUFBeUMsY0FBekM7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLLE1BQUwsQ0FBWSxNQUFaO0FBQ0Q7OztXQUVELHdCQUEyQjtBQUFBLFVBQWpCLEVBQWlCLFFBQWpCLEVBQWlCO0FBQUEsNkJBQWIsTUFBYTtBQUFBLFVBQWIsTUFBYSw0QkFBSixDQUFJO0FBQ3pCLFdBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsRUFBckIsRUFBeUI7QUFBQyxRQUFBLE1BQU0sRUFBTjtBQUFELE9BQXpCO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1IsV0FBSyxNQUFMLENBQVksT0FBWjtBQUNEOzs7O0VBckMwQixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o3Qjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTztBQUNuQixtQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssTUFBTCxHQUFjLE1BQWQsQ0FEa0IsQ0FFbEI7O0FBQ0EsU0FBSyxPQUFMLEdBQWUsSUFBSSxrQkFBSixDQUFZO0FBQ3pCLE1BQUEsT0FBTyxFQUFQO0FBRHlCLEtBQVosQ0FBZjtBQUlBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssYUFBTCxHQUFxQixLQUFyQjtBQUVBLFNBQUssT0FBTCxHQUFlLElBQUksbUJBQUosRUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBSyxXQUFMLENBQWlCLFdBQWpCLEdBQStCLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixJQUE1QixDQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxDQUEvQjtBQUNBLFNBQUssY0FBTCxHQUFzQixxQkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQVQsRUFBaUMsR0FBakMsQ0FBdEI7O0FBRUEsc0JBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsVUFBbkI7O0FBQ0EsU0FBSyxjQUFMO0FBQ0EsU0FBSyxJQUFMO0FBQ0Q7Ozs7V0FFRCxnQkFBTztBQUNMLHVCQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLEtBQUssVUFBNUI7O0FBQ0EsdUJBQU0sS0FBTixDQUFZLEtBQVosQ0FBa0IsS0FBSyxLQUF2Qjs7QUFDQSx1QkFBTSxLQUFOLENBQVksSUFBWixDQUFpQixLQUFLLElBQXRCOztBQUNBLHVCQUFNLEtBQU4sQ0FBWSxLQUFaLENBQWtCLEtBQUssS0FBdkI7O0FBQ0EsdUJBQU0sS0FBTixDQUFZLFdBQVosQ0FBd0IsS0FBSyxXQUFMLENBQWlCLFdBQXpDOztBQUNBLFVBQU0sV0FBVyxHQUFHO0FBQ2xCLFFBQUEsS0FBSyxFQUFFLG9CQURXO0FBRWxCLFFBQUEsV0FBVyxFQUFFLEtBQUs7QUFGQSxPQUFwQjs7QUFLQSxVQUFJLG9CQUFKLEVBQWE7QUFDWCxRQUFBLFdBQVcsQ0FBQyxRQUFaLEdBQXVCLE1BQXZCO0FBQ0EsUUFBQSxXQUFXLENBQUMsT0FBWixHQUFzQixLQUF0QjtBQUNBLGFBQUssS0FBTCxHQUFhLElBQUksaUJBQUosRUFBYjtBQUNBLGFBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsQ0FBckIsRUFKVyxDQUlhOztBQUN4QiwwQkFBSyxXQUFMLENBQWlCLEtBQUssS0FBTCxDQUFXLEdBQTVCO0FBQ0Q7O0FBQ0QsdUJBQU0sSUFBTixDQUFXLFdBQVg7QUFDRDs7O1dBRUQsaUJBQVE7QUFDTixXQUFLLE9BQUwsQ0FBYSxZQUFiO0FBQ0EsV0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQTVCO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1IsVUFBSSxvQkFBSixFQUFhO0FBQ1gsYUFBSyxLQUFMLENBQVcsS0FBWDtBQUNEOztBQUVELFVBQUksS0FBSyxhQUFMLElBQXNCLEtBQUssV0FBL0IsRUFBNEM7QUFDMUMsYUFBSyxxQkFBTCxDQUEyQixTQUEzQjtBQUNBLGFBQUsscUJBQUwsQ0FBMkIsVUFBM0I7QUFDRCxPQVJPLENBVVI7OztBQUNBLFVBQUksb0JBQUosRUFBYTtBQUNYLGFBQUssS0FBTCxDQUFXLEdBQVg7QUFDRDs7QUFDRCxXQUFLLFNBQUwsR0FBaUIsTUFBTSxDQUFDLHFCQUFQLENBQTZCLEtBQUssT0FBbEMsQ0FBakI7QUFDRDs7O1dBc0JELGdDQUF1QixLQUF2QixFQUE4QjtBQUM1QixVQUFNLGFBQWEsR0FBRyxFQUF0QjtBQUNBLFVBQUksQ0FBQyxHQUFHLENBQVI7QUFGNEIsVUFHcEIsTUFIb0IsR0FHVCxLQUhTLENBR3BCLE1BSG9CLEVBSTVCOztBQUNBLGFBQU8sQ0FBQyxHQUFHLE1BQVgsRUFBbUIsQ0FBQyxJQUFJLENBQXhCLEVBQTJCO0FBQ3pCLFlBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQWxCO0FBQ0EsWUFBSSxlQUFlLEdBQUcsRUFBdEI7QUFFQSxZQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQUssT0FBTCxDQUFhLGFBQXpCLENBQXZCO0FBQ0EsWUFBSSxHQUFHLEdBQUcsQ0FBVjtBQUNBLFlBQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxNQUFoQyxDQU55QixDQU96Qjs7QUFDQSxlQUFPLEdBQUcsR0FBRyxRQUFiLEVBQXVCLEdBQUcsSUFBSSxDQUE5QixFQUFpQztBQUMvQixjQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsR0FBRCxDQUFqQztBQUNBLGNBQU0sV0FBVyxHQUFHLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsVUFBM0IsQ0FBcEI7QUFDQSxjQUFNLHdCQUF3QixHQUM1QixLQUFLLFdBQUwsQ0FBaUIsc0JBQWpCLENBQXdDLFdBQXhDLEVBQXFELElBQXJELENBREY7O0FBRUEsY0FBSSx3QkFBSixFQUE4QjtBQUM1QixZQUFBLGVBQWUsZ0NBQU8sZUFBUCxzQkFBMkIsd0JBQTNCLEVBQWY7QUFDRDtBQUNGOztBQUNELFFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYixHQUFzQixlQUF0QjtBQUNEOztBQUVELGFBQU8sYUFBUDtBQUNEOzs7V0FFRCwrQkFBc0IsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSSxDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQU0sWUFBWSxHQUFHLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUFyQjtBQUYwQixVQUdsQixNQUhrQixHQUdQLFlBSE8sQ0FHbEIsTUFIa0I7O0FBSTFCLGFBQU8sQ0FBQyxHQUFHLE1BQVgsRUFBbUIsQ0FBQyxJQUFJLENBQXhCLEVBQTJCO0FBQ3pCLFFBQUEsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixJQUFoQjtBQUNEO0FBQ0Y7OztXQUVELGtCQUFTO0FBQ1Asc0JBQUksUUFBSjs7QUFDQSxVQUFJLEtBQUssYUFBVCxFQUF3QjtBQUN0QixhQUFLLHFCQUFMLENBQTJCLFFBQTNCO0FBQ0EsYUFBSyxxQkFBTCxDQUEyQixTQUEzQjtBQUNEO0FBQ0Y7OztXQVFELGdCQUFPO0FBQ0wsV0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixLQUFLLE9BQXZCO0FBQ0EsV0FBSyxtQkFBTDtBQUNBLFdBQUssYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUE1QjtBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssY0FBdkM7QUFDQSxXQUFLLE1BQUw7O0FBQ0EsVUFBSSx3QkFBVyxLQUFLLE1BQUwsQ0FBWSxPQUEzQixFQUFvQztBQUNsQyxhQUFLLFNBQUwsR0FBaUIsTUFBTSxDQUFDLHFCQUFQLENBQTZCLEtBQUssT0FBbEMsQ0FBakI7QUFDRDtBQUNGOzs7V0FFRCxvQkFBVyxJQUFYLEVBQWlCO0FBQ2YsV0FBSyxhQUFMLEdBQXFCLEtBQXJCOztBQUNBLFVBQUksSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFqQixFQUE0QjtBQUMxQixhQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLE9BQWpCLENBQXlCLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBdEM7QUFDRDtBQUNGOzs7V0FFRCxlQUFNLElBQU4sRUFBWTtBQUNWLFVBQUksSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFqQixFQUE0QjtBQUMxQixRQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QjtBQUNEOztBQUNELE1BQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxXQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLE1BQWpCLENBQXdCLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBbEM7QUFDQSxXQUFLLG1CQUFMO0FBQ0EsV0FBSyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBSyxNQUFMO0FBQ0Q7OztXQUVELCtCQUFzQjtBQUNwQixXQUFLLGFBQUwsR0FBcUIsS0FBSyxzQkFBTCxDQUE0QixDQUMvQyxRQUQrQyxFQUUvQyxTQUYrQyxFQUcvQyxTQUgrQyxFQUkvQyxVQUorQyxDQUE1QixDQUFyQjtBQU1EOzs7V0FFRCwwQkFBaUI7QUFBQTs7QUFDZixNQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBWixFQUF5QixPQUF6QixDQUFpQyxVQUFDLGNBQUQsRUFBb0I7QUFDbkQsWUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsY0FBRCxDQUFwQztBQUNBLFFBQUEsZ0JBQWdCLENBQUMsSUFBakIsQ0FBc0IsRUFBdEI7O0FBQ0EsUUFBQSxLQUFJLENBQUMsV0FBTCxDQUFpQixJQUFqQixDQUFzQixnQkFBdEI7QUFDRCxPQUpEO0FBS0Q7OztXQXBIRCxnQ0FBOEIsV0FBOUIsRUFBMkMsSUFBM0MsRUFBaUQ7QUFDL0MsVUFBTSxlQUFlLEdBQUcsRUFBeEI7QUFDQSxVQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVosQ0FBbkI7QUFDQSxVQUFJLEdBQUcsR0FBRyxDQUFWO0FBQ0EsVUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBcEM7QUFDQSxVQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFsQyxDQUwrQyxDQU0vQzs7QUFDQSxVQUNFLE9BQU8sY0FBYyxDQUFDLElBQUQsQ0FBckIsS0FBZ0MsVUFEbEMsQ0FFRTtBQUZGLFFBR0U7QUFDQSxpQkFBTyxHQUFHLEdBQUcsZ0JBQWIsRUFBK0IsR0FBRyxJQUFJLENBQXRDLEVBQXlDO0FBQ3ZDLGdCQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRCxDQUFoQztBQUNBLGdCQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsYUFBRCxDQUE3QjtBQUNBLFlBQUEsZUFBZSxDQUFDLElBQWhCLENBQXFCLFNBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLGVBQWUsQ0FBQyxNQUFoQixHQUF5QixDQUF6QixHQUE2QixlQUE3QixHQUErQyxJQUF0RDtBQUNEOzs7V0ErQ0Qsb0JBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLHdCQUFLLFNBQUwsQ0FBZSxLQUFLLEdBQUcsUUFBSCxHQUFjLEtBQWxDLEVBQXlDLFdBQXpDOztBQUNBLHdCQUFLLFNBQUwsQ0FBZSxLQUFLLEdBQUcsS0FBSCxHQUFXLFFBQS9CLEVBQXlDLFlBQXpDOztBQUNBLFdBQUssV0FBTCxHQUFtQixDQUFDLEtBQXBCO0FBQ0Q7Ozs7Ozs7Ozs7O0FDOUlIOztBQUNBOzs7O0FBSkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLFNBQVAsSUFBTyxHQUFNO0FBQ2pCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FDRSw2QkFERixFQUVFLHNFQUZGO0FBSUEsSUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixJQUFJLG1CQUFKLENBQVk7QUFDM0IsTUFBQSxPQUFPLEVBQUU7QUFEa0IsS0FBWixDQUFqQixDQUxpQixDQVFqQjtBQUNELEdBVEQ7O0FBV0EsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsSUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLHFDQUFiO0FBQ0E7QUFDRDs7QUFFRCxNQUFJLE1BQU0sQ0FBQyxRQUFYLEVBQXFCO0FBQ25CLElBQUEsSUFBSTtBQUNMLEdBRkQsTUFFTztBQUNMLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLElBQWhDO0FBQ0Q7QUFDRixDQXhCRDs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7OztBQUNBO0FBQ0E7ZUFFZTtBQUNYLEVBQUEsS0FEVyxtQkFDSCxDQUVQLENBSFU7QUFLWCxFQUFBLFVBTFcsc0JBS0EsSUFMQSxFQUtNO0FBQ2IsV0FBTyxpQkFBSyxFQUFMLENBQVEsS0FBSyxTQUFiLEVBQXdCO0FBQzNCLE1BQUEsS0FBSyxFQUFFLENBRG9CO0FBRTNCLE1BQUEsT0FBTyxFQUFFLEdBRmtCO0FBRzNCLE1BQUEsU0FBUyxFQUFFLEdBSGdCO0FBSTNCLE1BQUEsUUFBUSxFQUFFLEdBSmlCO0FBSzNCLE1BQUEsSUFBSSxFQUFFLGFBQU8sTUFMYztBQU0zQixNQUFBLE9BQU8sRUFBRSxtQkFBVztBQUNoQixZQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFSO0FBQ0EsWUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBUjtBQUNBLFlBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCLENBQVI7QUFDQSxRQUFBLENBQUMsQ0FBQyxTQUFGLElBQWUsS0FBZjtBQUNBLFFBQUEsQ0FBQyxDQUFDLFNBQUYsSUFBZSxLQUFmO0FBQ0EsUUFBQSxDQUFDLENBQUMsU0FBRixJQUFlLE1BQWY7QUFDSCxPQWIwQjtBQWMzQixNQUFBLFVBQVUsRUFBRSxzQkFBVztBQUNuQixZQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUFSO0FBRUEsUUFBQSxDQUFDLENBQUMsU0FBRixJQUFlLFNBQWY7QUFFSDtBQW5CMEIsS0FBeEIsQ0FBUDtBQXNCSCxHQTVCVTtBQThCWCxFQUFBLFVBOUJXLHdCQThCRSxDQUFFLENBOUJKO0FBZ0NYLEVBQUEsTUFoQ1csb0JBZ0NGLENBQUUsQ0FoQ0E7QUFrQ1gsRUFBQSxXQWxDVyx5QkFrQ0c7QUFDVixXQUFPLFVBQVUsQ0FDYixJQUFJLENBQUMsSUFBTCxDQUFVLFNBREcsQ0FBakI7QUFJSCxHQXZDVTtBQXlDWCxFQUFBLFdBekNXLHlCQXlDRyxDQUFFLENBekNMO0FBMkNYLEVBQUEsS0EzQ1csbUJBMkNILENBQUUsQ0EzQ0M7QUE2Q1gsRUFBQSxJQTdDVyxnQkE2Q04sTUE3Q00sRUE2Q0U7QUFDVCxTQUFLLFNBQUwsR0FBaUIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxTQUFLLElBQUwsR0FBWSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBWjtBQUNBLFNBQUssT0FBTCxHQUFlLEtBQUssU0FBTCxDQUFlLGFBQWYsQ0FBNkIsb0JBQTdCLENBQWY7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0gsR0FsRFU7QUFvRFgsRUFBQSxNQXBEVyxvQkFvREY7QUFDTCxXQUFPO0FBQ0gsTUFBQSxLQUFLLEVBQUUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixDQURKO0FBRUgsTUFBQSxVQUFVLEVBQUUsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBRlQ7QUFHSCxNQUFBLFVBQVUsRUFBRSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FIVDtBQUlILE1BQUEsTUFBTSxFQUFFLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FKTDtBQUtILE1BQUEsV0FBVyxFQUFFLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUxWO0FBTUgsTUFBQSxXQUFXLEVBQUUsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBTlY7QUFPSCxNQUFBLEtBQUssRUFBRSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBUEo7QUFRSCxNQUFBLElBQUksRUFBRSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixDQVJIO0FBU0gsTUFBQSxLQUFLLEVBQUUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixDQVRKO0FBVUgsTUFBQSxJQUFJLEVBQUUsS0FBSyxJQVZSO0FBV0gsTUFBQSxJQUFJLEVBQUUsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWY7QUFYSCxLQUFQO0FBYUgsR0FsRVU7QUFvRVgsRUFBQSxLQXBFVyxtQkFvRUg7QUFDSixXQUFPLGlCQUFLLE1BQUwsQ0FDSCxLQUFLLFNBREYsRUFDYTtBQUFFLE1BQUEsT0FBTyxFQUFFLENBQVg7QUFBYyxNQUFBLFNBQVMsRUFBRTtBQUF6QixLQURiLEVBQzJDO0FBQUUsTUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjLE1BQUEsUUFBUSxFQUFFLEdBQXhCO0FBQTZCLE1BQUEsSUFBSSxFQUFFLGFBQU8sT0FBMUM7QUFBbUQsTUFBQSxTQUFTLEVBQUU7QUFBOUQsS0FEM0MsRUFDOEc7QUFBRSxNQUFBLENBQUMsRUFBRTtBQUFMLEtBRDlHLEVBQzhIO0FBQUUsTUFBQSxDQUFDLEVBQUUsSUFBTDtBQUFXLE1BQUEsUUFBUSxFQUFFLENBQXJCO0FBQXdCLE1BQUEsSUFBSSxFQUFFLGFBQU87QUFBckMsS0FEOUgsQ0FBUDtBQUdILEdBeEVVO0FBMEVYLEVBQUEsSUFBSSxFQUFFLE9BMUVLO0FBNEVYLEVBQUEsSUE1RVcsZ0JBNEVOLElBNUVNLEVBNEVBO0FBQUE7O0FBQ1AsU0FBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLENBQTJCLFlBQU07QUFDN0IsTUFBQSxLQUFJLENBQUMsS0FBTDs7QUFDQSxNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsS0FBZjtBQUNILEtBSEQ7QUFJSDtBQWpGVSxFQW1GYixNQW5GYSxFOzs7Ozs7Ozs7OztBQ0pmLElBQU0sUUFBUSxHQUFHLFFBQWpCOztBQUNBLElBQU0sWUFBWSxHQUFHLFdBQXJCOztBQUVBLElBQU0sb0JBQW9CLEdBQUcsQ0FDM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsQ0FBaEI7QUFBbUIsRUFBQSxLQUFLLEVBQUUsQ0FBMUI7QUFBNkIsRUFBQSxNQUFNLEVBQUU7QUFBckMsQ0FEMkIsRUFFM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsQ0FBaEI7QUFBbUIsRUFBQSxLQUFLLEVBQUUsQ0FBMUI7QUFBNkIsRUFBQSxNQUFNLEVBQUU7QUFBckMsQ0FGMkIsRUFHM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsQ0FBaEI7QUFBbUIsRUFBQSxLQUFLLEVBQUUsQ0FBMUI7QUFBNkIsRUFBQSxNQUFNLEVBQUU7QUFBckMsQ0FIMkIsRUFJM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FKMkIsRUFLM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FMMkIsRUFNM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FOMkIsRUFPM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FQMkIsRUFRM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FSMkIsRUFTM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FUMkIsRUFVM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FWMkIsRUFXM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FYMkIsRUFZM0I7QUFBRSxFQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWEsRUFBQSxDQUFDLEVBQUUsRUFBaEI7QUFBb0IsRUFBQSxLQUFLLEVBQUUsQ0FBM0I7QUFBOEIsRUFBQSxNQUFNLEVBQUU7QUFBdEMsQ0FaMkIsQ0FBN0I7O0FBZUEsSUFBTSxtQkFBbUIsR0FBRyxDQUMxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxDQUFoQjtBQUFtQixFQUFBLEtBQUssRUFBRSxDQUExQjtBQUE2QixFQUFBLE1BQU0sRUFBRTtBQUFyQyxDQUQwQixFQUUxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxDQUFoQjtBQUFtQixFQUFBLEtBQUssRUFBRSxDQUExQjtBQUE2QixFQUFBLE1BQU0sRUFBRTtBQUFyQyxDQUYwQixFQUcxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxDQUFoQjtBQUFtQixFQUFBLEtBQUssRUFBRSxDQUExQjtBQUE2QixFQUFBLE1BQU0sRUFBRTtBQUFyQyxDQUgwQixFQUkxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQUowQixFQUsxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQUwwQixFQU0xQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQU4wQixFQU8xQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQVAwQixFQVExQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQVIwQixFQVMxQjtBQUFFLEVBQUEsTUFBTSxFQUFFLENBQVY7QUFBYSxFQUFBLENBQUMsRUFBRSxFQUFoQjtBQUFvQixFQUFBLEtBQUssRUFBRSxDQUEzQjtBQUE4QixFQUFBLE1BQU0sRUFBRTtBQUF0QyxDQVQwQixDQUE1Qjs7QUFZQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBdEI7O2dCQUNpQixRO0lBQVQsSSxhQUFBLEk7O0FBQ1IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNLEtBQUssR0FBRyxTQUFSLEtBQVEsQ0FBQyxFQUFELEVBQTRCO0FBQUEsTUFBdkIsT0FBdUIsdUVBQWIsUUFBYTtBQUMvQztBQUNBLEVBQUEsT0FBTyxDQUFDLFVBQVIsS0FBdUIsU0FBdkIsR0FDSSxFQUFFLENBQUMsS0FBSCxDQUFTLE9BQVQsQ0FESixHQUVJLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixrQkFBekIsRUFBNkMsRUFBRSxDQUFDLElBQUgsQ0FBUSxPQUFSLENBQTdDLENBRko7QUFHRCxDQUxNO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDM0MsTUFBSSxLQUFKO0FBQ0EsU0FBTyxZQUFNO0FBQ1g7QUFDQSxRQUFNLElBQUksR0FBRyxVQUFiO0FBQ0EsUUFBTSxPQUFPLEdBQUcsS0FBaEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxJQUFBLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBTTtBQUN2QixNQUFBLFFBQVEsQ0FBQyxLQUFULENBQWUsT0FBZixFQUF3QixJQUF4QjtBQUNELEtBRmlCLEVBRWYsS0FGZSxDQUFsQjtBQUdELEdBUkQ7QUFTRCxDQVhNO0FBYVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDM0MsTUFBSSxJQUFKO0FBQ0EsTUFBSSxLQUFKLENBRjJDLENBRzNDOztBQUNBLFNBQU8sWUFBWTtBQUNqQixRQUFNLE9BQU8sR0FBRyxJQUFoQjtBQUNBLFFBQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFKLEVBQWIsQ0FGaUIsQ0FHakI7O0FBQ0EsUUFBTSxJQUFJLEdBQUcsU0FBYjs7QUFDQSxRQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQXpCLEVBQWdDO0FBQzlCO0FBQ0EsTUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EsTUFBQSxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQU07QUFDdkIsUUFBQSxJQUFJLEdBQUcsR0FBUDtBQUNBLFFBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEVBQXdCLElBQXhCO0FBQ0QsT0FIaUIsRUFHZixLQUhlLENBQWxCO0FBSUQsS0FQRCxNQU9PO0FBQ0wsTUFBQSxJQUFJLEdBQUcsR0FBUDtBQUNBLE1BQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEVBQXdCLElBQXhCO0FBQ0Q7QUFDRixHQWhCRDtBQWlCRCxDQXJCTTtBQXVCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUE4QztBQUFBLE1BQTFCLFlBQTBCLHVFQUFYLE1BQVc7QUFDbkU7QUFDQSxNQUFJLENBQUMsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsT0FBdkIsRUFBZ0MsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsT0FBbEIsR0FBNEIsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsaUJBQTlDO0FBQ2hDLE1BQUksTUFBTSxHQUFHLElBQWI7O0FBQ0EsU0FBTyxPQUFQLEVBQWdCO0FBQ2QsUUFBSSxPQUFPLENBQUMsT0FBUixDQUFnQixRQUFoQixDQUFKLEVBQStCO0FBQzdCLE1BQUEsTUFBTSxHQUFHLE9BQVQ7QUFDQTtBQUNELEtBSEQsTUFHTyxJQUFJLFlBQVksSUFBSSxPQUFPLENBQUMsT0FBUixDQUFnQixZQUFoQixDQUFwQixFQUFtRDtBQUN4RDtBQUNEOztBQUNELElBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFsQjtBQUNEOztBQUNELFNBQU8sTUFBUDtBQUNELENBZE07Ozs7QUFpQkEsSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLENBQUMsRUFBRCxFQUFRO0FBQ2xDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixFQUF4QixDQUFkO0FBQ0EsU0FBTyxLQUFLLENBQUMsU0FBTixJQUFtQixLQUFLLENBQUMsZUFBekIsSUFBNEMsS0FBSyxDQUFDLFlBQXpEO0FBQ0QsQ0FITTs7OztBQUtBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLFNBQUQsRUFBZTtBQUN0QyxNQUFNLFNBQVMsR0FBRyxFQUFsQjtBQUNBLE1BQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFWLENBQWdCLG9CQUFoQixDQUFWOztBQUNBLE1BQUksR0FBSixFQUFTO0FBQ1AsSUFBQSxTQUFTLENBQUMsQ0FBVixHQUFjLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsQ0FBRCxDQUF4QjtBQUNBLElBQUEsU0FBUyxDQUFDLENBQVYsR0FBYyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEtBQVAsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLENBQUQsQ0FBeEI7QUFDRCxHQUhELE1BR087QUFDTCxJQUFBLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBVixDQUFnQixrQkFBaEIsQ0FBTjtBQUNBLElBQUEsU0FBUyxDQUFDLENBQVYsR0FBYyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQixDQUFELENBQWIsR0FBdUMsQ0FBeEQ7QUFDQSxJQUFBLFNBQVMsQ0FBQyxDQUFWLEdBQWMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsQ0FBbkIsQ0FBRCxDQUFiLEdBQXVDLENBQXhEO0FBQ0Q7O0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FaTTs7OztBQWNBLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0I7QUFDcEMsU0FBTyxDQUFDLElBQUksR0FBTCxJQUFZLEtBQVosR0FBb0IsR0FBRyxHQUFHLEdBQWpDO0FBQ0Q7O0FBRU0sU0FBUyxZQUFULENBQXNCLE1BQXRCLEVBQTZDO0FBQUEsTUFBZixTQUFlLHVFQUFILENBQUc7QUFDbEQ7QUFDQSxNQUFNLEdBQUcsWUFBRyxFQUFILEVBQVMsU0FBVCxDQUFULENBRmtELENBR2xEOztBQUNBLFNBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFNLEdBQUcsR0FBcEIsSUFBeUIsR0FBaEM7QUFDRDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFKLENBQWEsSUFBYixDQUFqQjtBQUNBLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFOLENBQVcsUUFBUSxDQUFDLE9BQVQsRUFBWCxDQUFoQjtBQUNBLE1BQU0sYUFBYSxHQUFHLEVBQXRCO0FBQ0EsRUFBQSxPQUFPLENBQUMsT0FBUixDQUFnQixnQkFBbUI7QUFBQTtBQUFBLFFBQWpCLElBQWlCO0FBQUEsUUFBWCxLQUFXOztBQUNqQyxRQUFJO0FBQ0YsTUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiLEdBQXNCLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBWCxDQUF0QjtBQUNELEtBRkQsQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLE1BQUEsYUFBYSxDQUFDLElBQUQsQ0FBYixHQUFzQixLQUF0QjtBQUNEO0FBQ0YsR0FORDtBQU9BLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE0QjtBQUNqQyxTQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBUCxDQUFjLEtBQXRCLEdBQThCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQXJEO0FBQ0Q7O0FBRU0sU0FBUyxrQkFBVCxDQUE2QixnQkFBN0IsRUFBK0M7QUFDcEQsTUFBRyxRQUFPLGdCQUFQLE1BQTRCLFFBQS9CLEVBQXlDO0FBQ3ZDLFFBQUksZUFBZSxHQUFHLENBQXRCO0FBQ0EsSUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLGdCQUFmLEVBQWlDLE9BQWpDLENBQXlDLGlCQUFrQjtBQUFBO0FBQUEsVUFBaEIsR0FBZ0I7QUFBQSxVQUFYLEtBQVc7O0FBQ3pELFVBQUksTUFBTSxDQUFDLEdBQUQsQ0FBTixHQUFjLE1BQU0sQ0FBQyxNQUFQLENBQWMsS0FBaEMsRUFBdUM7QUFDckMsUUFBQSxlQUFlLEdBQUcsS0FBbEI7QUFDRDtBQUNGLEtBSkQ7QUFLQSxXQUFPLGVBQVA7QUFDRDs7QUFDRCxTQUFPLGdCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULEdBQXlCO0FBQzlCLFNBQVMsa0JBQWtCLE1BQXBCLElBQ0gsU0FBUyxDQUFDLGNBQVYsR0FBMkIsQ0FEeEIsSUFFSCxTQUFTLENBQUMsZ0JBQVYsR0FBNkIsQ0FGakM7QUFHRDs7QUFFTSxTQUFTLEdBQVQsQ0FBYSxPQUFiLEVBQXNCO0FBQzNCLE1BQUksb0JBQUosRUFBYTtBQUNYLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PXR8fHNlbGYpLmJhcmJhPW4oKX0odGhpcywoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7Zm9yKHZhciByPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBlPW5bcl07ZS5lbnVtZXJhYmxlPWUuZW51bWVyYWJsZXx8ITEsZS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZSYmKGUud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUua2V5LGUpfX1mdW5jdGlvbiBuKG4scixlKXtyZXR1cm4gciYmdChuLnByb3RvdHlwZSxyKSxlJiZ0KG4sZSksbn1mdW5jdGlvbiByKCl7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIHI9YXJndW1lbnRzW25dO2Zvcih2YXIgZSBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLGUpJiYodFtlXT1yW2VdKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBlKHQsbil7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShuLnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29uc3RydWN0b3I9dCx0Ll9fcHJvdG9fXz1ufWZ1bmN0aW9uIGkodCl7cmV0dXJuKGk9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIG8odCxuKXtyZXR1cm4obz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuX19wcm90b19fPW4sdH0pKHQsbil9ZnVuY3Rpb24gdSh0LG4scil7cmV0dXJuKHU9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsW10sKGZ1bmN0aW9uKCl7fSkpKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19KCk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxuLHIpe3ZhciBlPVtudWxsXTtlLnB1c2guYXBwbHkoZSxuKTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseSh0LGUpKTtyZXR1cm4gciYmbyhpLHIucHJvdG90eXBlKSxpfSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIGYodCl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6dm9pZCAwO3JldHVybihmPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHwtMT09PUZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpcmV0dXJuIHQ7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7aWYodm9pZCAwIT09bil7aWYobi5oYXModCkpcmV0dXJuIG4uZ2V0KHQpO24uc2V0KHQscil9ZnVuY3Rpb24gcigpe3JldHVybiB1KHQsYXJndW1lbnRzLGkodGhpcykuY29uc3RydWN0b3IpfXJldHVybiByLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6cixlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxvKHIsdCl9KSh0KX1mdW5jdGlvbiBzKHQsbil7dHJ5e3ZhciByPXQoKX1jYXRjaCh0KXtyZXR1cm4gbih0KX1yZXR1cm4gciYmci50aGVuP3IudGhlbih2b2lkIDAsbik6cn1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoU3ltYm9sLml0ZXJhdG9yfHwoU3ltYm9sLml0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihTeW1ib2wuYXN5bmNJdGVyYXRvcnx8KFN5bWJvbC5hc3luY0l0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5hc3luY0l0ZXJhdG9yXCIpKSk7dmFyIGMsYT1cIjIuOS43XCIsaD1mdW5jdGlvbigpe307IWZ1bmN0aW9uKHQpe3RbdC5vZmY9MF09XCJvZmZcIix0W3QuZXJyb3I9MV09XCJlcnJvclwiLHRbdC53YXJuaW5nPTJdPVwid2FybmluZ1wiLHRbdC5pbmZvPTNdPVwiaW5mb1wiLHRbdC5kZWJ1Zz00XT1cImRlYnVnXCJ9KGN8fChjPXt9KSk7dmFyIHY9Yy5vZmYsbD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy50PXR9dC5nZXRMZXZlbD1mdW5jdGlvbigpe3JldHVybiB2fSx0LnNldExldmVsPWZ1bmN0aW9uKHQpe3JldHVybiB2PWNbdF19O3ZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmVycm9yPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUuZXJyb3IsYy5lcnJvcixuKX0sbi53YXJuPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUud2FybixjLndhcm5pbmcsbil9LG4uaW5mbz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3RoaXMuaShjb25zb2xlLmluZm8sYy5pbmZvLG4pfSxuLmRlYnVnPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUubG9nLGMuZGVidWcsbil9LG4uaT1mdW5jdGlvbihuLHIsZSl7cjw9dC5nZXRMZXZlbCgpJiZuLmFwcGx5KGNvbnNvbGUsW1wiW1wiK3RoaXMudCtcIl0gXCJdLmNvbmNhdChlKSl9LHR9KCksZD1PLG09RSxwPWcsdz14LGI9VCx5PVwiL1wiLFA9bmV3IFJlZ0V4cChbXCIoXFxcXFxcXFwuKVwiLFwiKD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/XCJdLmpvaW4oXCJ8XCIpLFwiZ1wiKTtmdW5jdGlvbiBnKHQsbil7Zm9yKHZhciByLGU9W10saT0wLG89MCx1PVwiXCIsZj1uJiZuLmRlbGltaXRlcnx8eSxzPW4mJm4ud2hpdGVsaXN0fHx2b2lkIDAsYz0hMTtudWxsIT09KHI9UC5leGVjKHQpKTspe3ZhciBhPXJbMF0saD1yWzFdLHY9ci5pbmRleDtpZih1Kz10LnNsaWNlKG8sdiksbz12K2EubGVuZ3RoLGgpdSs9aFsxXSxjPSEwO2Vsc2V7dmFyIGw9XCJcIixkPXJbMl0sbT1yWzNdLHA9cls0XSx3PXJbNV07aWYoIWMmJnUubGVuZ3RoKXt2YXIgYj11Lmxlbmd0aC0xLGc9dVtiXTsoIXN8fHMuaW5kZXhPZihnKT4tMSkmJihsPWcsdT11LnNsaWNlKDAsYikpfXUmJihlLnB1c2godSksdT1cIlwiLGM9ITEpO3ZhciBFPW18fHAseD1sfHxmO2UucHVzaCh7bmFtZTpkfHxpKysscHJlZml4OmwsZGVsaW1pdGVyOngsb3B0aW9uYWw6XCI/XCI9PT13fHxcIipcIj09PXcscmVwZWF0OlwiK1wiPT09d3x8XCIqXCI9PT13LHBhdHRlcm46RT9BKEUpOlwiW15cIitrKHg9PT1mP3g6eCtmKStcIl0rP1wifSl9fXJldHVybih1fHxvPHQubGVuZ3RoKSYmZS5wdXNoKHUrdC5zdWJzdHIobykpLGV9ZnVuY3Rpb24gRSh0LG4pe3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciBpPXQuZXhlYyhyKTtpZighaSlyZXR1cm4hMTtmb3IodmFyIG89aVswXSx1PWkuaW5kZXgsZj17fSxzPWUmJmUuZGVjb2RlfHxkZWNvZGVVUklDb21wb25lbnQsYz0xO2M8aS5sZW5ndGg7YysrKWlmKHZvaWQgMCE9PWlbY10pe3ZhciBhPW5bYy0xXTtmW2EubmFtZV09YS5yZXBlYXQ/aVtjXS5zcGxpdChhLmRlbGltaXRlcikubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gcyh0LGEpfSkpOnMoaVtjXSxhKX1yZXR1cm57cGF0aDpvLGluZGV4OnUscGFyYW1zOmZ9fX1mdW5jdGlvbiB4KHQsbil7Zm9yKHZhciByPW5ldyBBcnJheSh0Lmxlbmd0aCksZT0wO2U8dC5sZW5ndGg7ZSsrKVwib2JqZWN0XCI9PXR5cGVvZiB0W2VdJiYocltlXT1uZXcgUmVnRXhwKFwiXig/OlwiK3RbZV0ucGF0dGVybitcIikkXCIsUihuKSkpO3JldHVybiBmdW5jdGlvbihuLGUpe2Zvcih2YXIgaT1cIlwiLG89ZSYmZS5lbmNvZGV8fGVuY29kZVVSSUNvbXBvbmVudCx1PSFlfHwhMSE9PWUudmFsaWRhdGUsZj0wO2Y8dC5sZW5ndGg7ZisrKXt2YXIgcz10W2ZdO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBzKXt2YXIgYyxhPW4/bltzLm5hbWVdOnZvaWQgMDtpZihBcnJheS5pc0FycmF5KGEpKXtpZighcy5yZXBlYXQpdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInK3MubmFtZSsnXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhcnJheScpO2lmKDA9PT1hLmxlbmd0aCl7aWYocy5vcHRpb25hbCljb250aW51ZTt0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicrcy5uYW1lKydcIiB0byBub3QgYmUgZW1wdHknKX1mb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7aWYoYz1vKGFbaF0scyksdSYmIXJbZl0udGVzdChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInK3MubmFtZSsnXCIgdG8gbWF0Y2ggXCInK3MucGF0dGVybisnXCInKTtpKz0oMD09PWg/cy5wcmVmaXg6cy5kZWxpbWl0ZXIpK2N9fWVsc2UgaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJlwibnVtYmVyXCIhPXR5cGVvZiBhJiZcImJvb2xlYW5cIiE9dHlwZW9mIGEpe2lmKCFzLm9wdGlvbmFsKXRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJytzLm5hbWUrJ1wiIHRvIGJlICcrKHMucmVwZWF0P1wiYW4gYXJyYXlcIjpcImEgc3RyaW5nXCIpKX1lbHNle2lmKGM9byhTdHJpbmcoYSkscyksdSYmIXJbZl0udGVzdChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicrcy5uYW1lKydcIiB0byBtYXRjaCBcIicrcy5wYXR0ZXJuKydcIiwgYnV0IGdvdCBcIicrYysnXCInKTtpKz1zLnByZWZpeCtjfX1lbHNlIGkrPXN9cmV0dXJuIGl9fWZ1bmN0aW9uIGsodCl7cmV0dXJuIHQucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csXCJcXFxcJDFcIil9ZnVuY3Rpb24gQSh0KXtyZXR1cm4gdC5yZXBsYWNlKC8oWz0hOiQvKCldKS9nLFwiXFxcXCQxXCIpfWZ1bmN0aW9uIFIodCl7cmV0dXJuIHQmJnQuc2Vuc2l0aXZlP1wiXCI6XCJpXCJ9ZnVuY3Rpb24gVCh0LG4scil7Zm9yKHZhciBlPShyPXJ8fHt9KS5zdHJpY3QsaT0hMSE9PXIuc3RhcnQsbz0hMSE9PXIuZW5kLHU9ci5kZWxpbWl0ZXJ8fHksZj1bXS5jb25jYXQoci5lbmRzV2l0aHx8W10pLm1hcChrKS5jb25jYXQoXCIkXCIpLmpvaW4oXCJ8XCIpLHM9aT9cIl5cIjpcIlwiLGM9MDtjPHQubGVuZ3RoO2MrKyl7dmFyIGE9dFtjXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSlzKz1rKGEpO2Vsc2V7dmFyIGg9YS5yZXBlYXQ/XCIoPzpcIithLnBhdHRlcm4rXCIpKD86XCIrayhhLmRlbGltaXRlcikrXCIoPzpcIithLnBhdHRlcm4rXCIpKSpcIjphLnBhdHRlcm47biYmbi5wdXNoKGEpLHMrPWEub3B0aW9uYWw/YS5wcmVmaXg/XCIoPzpcIitrKGEucHJlZml4KStcIihcIitoK1wiKSk/XCI6XCIoXCIraCtcIik/XCI6ayhhLnByZWZpeCkrXCIoXCIraCtcIilcIn19aWYobyllfHwocys9XCIoPzpcIitrKHUpK1wiKT9cIikscys9XCIkXCI9PT1mP1wiJFwiOlwiKD89XCIrZitcIilcIjtlbHNle3ZhciB2PXRbdC5sZW5ndGgtMV0sbD1cInN0cmluZ1wiPT10eXBlb2Ygdj92W3YubGVuZ3RoLTFdPT09dTp2b2lkIDA9PT12O2V8fChzKz1cIig/OlwiK2sodSkrXCIoPz1cIitmK1wiKSk/XCIpLGx8fChzKz1cIig/PVwiK2sodSkrXCJ8XCIrZitcIilcIil9cmV0dXJuIG5ldyBSZWdFeHAocyxSKHIpKX1mdW5jdGlvbiBPKHQsbixyKXtyZXR1cm4gdCBpbnN0YW5jZW9mIFJlZ0V4cD9mdW5jdGlvbih0LG4pe2lmKCFuKXJldHVybiB0O3ZhciByPXQuc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO2lmKHIpZm9yKHZhciBlPTA7ZTxyLmxlbmd0aDtlKyspbi5wdXNoKHtuYW1lOmUscHJlZml4Om51bGwsZGVsaW1pdGVyOm51bGwsb3B0aW9uYWw6ITEscmVwZWF0OiExLHBhdHRlcm46bnVsbH0pO3JldHVybiB0fSh0LG4pOkFycmF5LmlzQXJyYXkodCk/ZnVuY3Rpb24odCxuLHIpe2Zvcih2YXIgZT1bXSxpPTA7aTx0Lmxlbmd0aDtpKyspZS5wdXNoKE8odFtpXSxuLHIpLnNvdXJjZSk7cmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIitlLmpvaW4oXCJ8XCIpK1wiKVwiLFIocikpfSh0LG4scik6ZnVuY3Rpb24odCxuLHIpe3JldHVybiBUKGcodCxyKSxuLHIpfSh0LG4scil9ZC5tYXRjaD1mdW5jdGlvbih0LG4pe3ZhciByPVtdO3JldHVybiBFKE8odCxyLG4pLHIpfSxkLnJlZ2V4cFRvRnVuY3Rpb249bSxkLnBhcnNlPXAsZC5jb21waWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHgoZyh0LG4pLG4pfSxkLnRva2Vuc1RvRnVuY3Rpb249dyxkLnRva2Vuc1RvUmVnRXhwPWI7dmFyIFM9e2NvbnRhaW5lcjpcImNvbnRhaW5lclwiLGhpc3Rvcnk6XCJoaXN0b3J5XCIsbmFtZXNwYWNlOlwibmFtZXNwYWNlXCIscHJlZml4OlwiZGF0YS1iYXJiYVwiLHByZXZlbnQ6XCJwcmV2ZW50XCIsd3JhcHBlcjpcIndyYXBwZXJcIn0saj1uZXcoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5vPVMsdGhpcy51PW5ldyBET01QYXJzZXJ9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4udG9TdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuIHQub3V0ZXJIVE1MfSxuLnRvRG9jdW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKX0sbi50b0VsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbi5pbm5lckhUTUw9dCxufSxuLmdldEh0bWw9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PWRvY3VtZW50KSx0aGlzLnRvU3RyaW5nKHQuZG9jdW1lbnRFbGVtZW50KX0sbi5nZXRXcmFwcGVyPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD1kb2N1bWVudCksdC5xdWVyeVNlbGVjdG9yKFwiW1wiK3RoaXMuby5wcmVmaXgrJz1cIicrdGhpcy5vLndyYXBwZXIrJ1wiXScpfSxuLmdldENvbnRhaW5lcj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ZG9jdW1lbnQpLHQucXVlcnlTZWxlY3RvcihcIltcIit0aGlzLm8ucHJlZml4Kyc9XCInK3RoaXMuby5jb250YWluZXIrJ1wiXScpfSxuLnJlbW92ZUNvbnRhaW5lcj1mdW5jdGlvbih0KXtkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHQpJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9LG4uYWRkQ29udGFpbmVyPWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5nZXRDb250YWluZXIoKTtyP3RoaXMucyh0LHIpOm4uYXBwZW5kQ2hpbGQodCl9LG4uZ2V0TmFtZXNwYWNlPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PWRvY3VtZW50KTt2YXIgbj10LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrdGhpcy5vLnByZWZpeCtcIi1cIit0aGlzLm8ubmFtZXNwYWNlK1wiXVwiKTtyZXR1cm4gbj9uLmdldEF0dHJpYnV0ZSh0aGlzLm8ucHJlZml4K1wiLVwiK3RoaXMuby5uYW1lc3BhY2UpOm51bGx9LG4uZ2V0SHJlZj1mdW5jdGlvbih0KXtpZih0LnRhZ05hbWUmJlwiYVwiPT09dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmhyZWYpcmV0dXJuIHQuaHJlZjt2YXIgbj10LmdldEF0dHJpYnV0ZShcImhyZWZcIil8fHQuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKTtpZihuKXJldHVybiB0aGlzLnJlc29sdmVVcmwobi5iYXNlVmFsfHxuKX1yZXR1cm4gbnVsbH0sbi5yZXNvbHZlVXJsPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dmFyIGU9bi5sZW5ndGg7aWYoMD09PWUpdGhyb3cgbmV3IEVycm9yKFwicmVzb2x2ZVVybCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQ7IGdvdCBub25lLlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtpZihpLmhyZWY9YXJndW1lbnRzWzBdLDE9PT1lKXJldHVybiBpLmhyZWY7dmFyIG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO28uaW5zZXJ0QmVmb3JlKGksby5maXJzdENoaWxkKTtmb3IodmFyIHUsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxzPTE7czxlO3MrKylmLmhyZWY9YXJndW1lbnRzW3NdLGkuaHJlZj11PWYuaHJlZjtyZXR1cm4gby5yZW1vdmVDaGlsZChpKSx1fSxuLnM9ZnVuY3Rpb24odCxuKXtuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsbi5uZXh0U2libGluZyl9LHR9KCkpLE09bmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuaD1bXSx0aGlzLnY9LTF9dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUuaW5pdD1mdW5jdGlvbih0LG4pe3RoaXMubD1cImJhcmJhXCI7dmFyIHI9e25zOm4sc2Nyb2xsOnt4OndpbmRvdy5zY3JvbGxYLHk6d2luZG93LnNjcm9sbFl9LHVybDp0fTt0aGlzLmgucHVzaChyKSx0aGlzLnY9MDt2YXIgZT17ZnJvbTp0aGlzLmwsaW5kZXg6MCxzdGF0ZXM6W10uY29uY2F0KHRoaXMuaCl9O3dpbmRvdy5oaXN0b3J5JiZ3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoZSxcIlwiLHQpfSxlLmNoYW5nZT1mdW5jdGlvbih0LG4scil7aWYociYmci5zdGF0ZSl7dmFyIGU9ci5zdGF0ZSxpPWUuaW5kZXg7bj10aGlzLm0odGhpcy52LWkpLHRoaXMucmVwbGFjZShlLnN0YXRlcyksdGhpcy52PWl9ZWxzZSB0aGlzLmFkZCh0LG4pO3JldHVybiBufSxlLmFkZD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuc2l6ZSxlPXRoaXMucChuKSxpPXtuczpcInRtcFwiLHNjcm9sbDp7eDp3aW5kb3cuc2Nyb2xsWCx5OndpbmRvdy5zY3JvbGxZfSx1cmw6dH07dGhpcy5oLnB1c2goaSksdGhpcy52PXI7dmFyIG89e2Zyb206dGhpcy5sLGluZGV4OnIsc3RhdGVzOltdLmNvbmNhdCh0aGlzLmgpfTtzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOndpbmRvdy5oaXN0b3J5JiZ3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobyxcIlwiLHQpO2JyZWFrO2Nhc2VcInJlcGxhY2VcIjp3aW5kb3cuaGlzdG9yeSYmd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG8sXCJcIix0KX19LGUudXBkYXRlPWZ1bmN0aW9uKHQsbil7dmFyIGU9bnx8dGhpcy52LGk9cih7fSx0aGlzLmdldChlKSx7fSx0KTt0aGlzLnNldChlLGkpfSxlLnJlbW92ZT1mdW5jdGlvbih0KXt0P3RoaXMuaC5zcGxpY2UodCwxKTp0aGlzLmgucG9wKCksdGhpcy52LS19LGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmg9W10sdGhpcy52PS0xfSxlLnJlcGxhY2U9ZnVuY3Rpb24odCl7dGhpcy5oPXR9LGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhbdF19LGUuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuaFt0XT1ufSxlLnA9ZnVuY3Rpb24odCl7dmFyIG49XCJwdXNoXCIscj10LGU9Uy5wcmVmaXgrXCItXCIrUy5oaXN0b3J5O3JldHVybiByLmhhc0F0dHJpYnV0ZSYmci5oYXNBdHRyaWJ1dGUoZSkmJihuPXIuZ2V0QXR0cmlidXRlKGUpKSxufSxlLm09ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYWJzKHQpPjE/dD4wP1wiZm9yd2FyZFwiOlwiYmFja1wiOjA9PT10P1wicG9wc3RhdGVcIjp0PjA/XCJiYWNrXCI6XCJmb3J3YXJkXCJ9LG4odCxbe2tleTpcImN1cnJlbnRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oW3RoaXMudl19fSx7a2V5Olwic3RhdGVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oW3RoaXMuaC5sZW5ndGgtMV19fSx7a2V5OlwicHJldmlvdXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52PDE/bnVsbDp0aGlzLmhbdGhpcy52LTFdfX0se2tleTpcInNpemVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oLmxlbmd0aH19XSksdH0oKSksTD1mdW5jdGlvbih0LG4pe3RyeXt2YXIgcj1mdW5jdGlvbigpe2lmKCFuLm5leHQuaHRtbClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQpLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciByPW4ubmV4dDtpZih0KXt2YXIgZT1qLnRvRWxlbWVudCh0KTtyLm5hbWVzcGFjZT1qLmdldE5hbWVzcGFjZShlKSxyLmNvbnRhaW5lcj1qLmdldENvbnRhaW5lcihlKSxyLmh0bWw9dCxNLnVwZGF0ZSh7bnM6ci5uYW1lc3BhY2V9KTt2YXIgaT1qLnRvRG9jdW1lbnQodCk7ZG9jdW1lbnQudGl0bGU9aS50aXRsZX19KSl9KCk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShyJiZyLnRoZW4/ci50aGVuKChmdW5jdGlvbigpe30pKTp2b2lkIDApfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LCQ9ZCxfPXtfX3Byb3RvX186bnVsbCx1cGRhdGU6TCxuZXh0VGljazpmdW5jdGlvbigpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0KX0pKX0scGF0aFRvUmVnZXhwOiR9LHE9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbn0sQj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9d2luZG93LmxvY2F0aW9uLmhyZWYpLFUodCkucG9ydH0sVT1mdW5jdGlvbih0KXt2YXIgbixyPXQubWF0Y2goLzpcXGQrLyk7aWYobnVsbD09PXIpL15odHRwLy50ZXN0KHQpJiYobj04MCksL15odHRwcy8udGVzdCh0KSYmKG49NDQzKTtlbHNle3ZhciBlPXJbMF0uc3Vic3RyaW5nKDEpO249cGFyc2VJbnQoZSwxMCl9dmFyIGksbz10LnJlcGxhY2UocSgpLFwiXCIpLHU9e30sZj1vLmluZGV4T2YoXCIjXCIpO2Y+PTAmJihpPW8uc2xpY2UoZisxKSxvPW8uc2xpY2UoMCxmKSk7dmFyIHM9by5pbmRleE9mKFwiP1wiKTtyZXR1cm4gcz49MCYmKHU9RChvLnNsaWNlKHMrMSkpLG89by5zbGljZSgwLHMpKSx7aGFzaDppLHBhdGg6byxwb3J0Om4scXVlcnk6dX19LEQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuc3BsaXQoXCImXCIpLnJlZHVjZSgoZnVuY3Rpb24odCxuKXt2YXIgcj1uLnNwbGl0KFwiPVwiKTtyZXR1cm4gdFtyWzBdXT1yWzFdLHR9KSx7fSl9LEY9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXdpbmRvdy5sb2NhdGlvbi5ocmVmKSx0LnJlcGxhY2UoLyhcXC8jLip8XFwvfCMuKikkLyxcIlwiKX0sSD17X19wcm90b19fOm51bGwsZ2V0SHJlZjpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZn0sZ2V0T3JpZ2luOnEsZ2V0UG9ydDpCLGdldFBhdGg6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXdpbmRvdy5sb2NhdGlvbi5ocmVmKSxVKHQpLnBhdGh9LHBhcnNlOlUscGFyc2VRdWVyeTpELGNsZWFuOkZ9O2Z1bmN0aW9uIEkodCxuLHIpe3JldHVybiB2b2lkIDA9PT1uJiYobj0yZTMpLG5ldyBQcm9taXNlKChmdW5jdGlvbihlLGkpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDtvLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKG8ucmVhZHlTdGF0ZT09PVhNTEh0dHBSZXF1ZXN0LkRPTkUpaWYoMjAwPT09by5zdGF0dXMpZShvLnJlc3BvbnNlVGV4dCk7ZWxzZSBpZihvLnN0YXR1cyl7dmFyIG49e3N0YXR1czpvLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH07cih0LG4pLGkobil9fSxvLm9udGltZW91dD1mdW5jdGlvbigpe3ZhciBlPW5ldyBFcnJvcihcIlRpbWVvdXQgZXJyb3IgW1wiK24rXCJdXCIpO3IodCxlKSxpKGUpfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgbj1uZXcgRXJyb3IoXCJGZXRjaCBlcnJvclwiKTtyKHQsbiksaShuKX0sby5vcGVuKFwiR0VUXCIsdCksby50aW1lb3V0PW4sby5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbFwiKSxvLnNldFJlcXVlc3RIZWFkZXIoXCJ4LWJhcmJhXCIsXCJ5ZXNcIiksby5zZW5kKCl9KSl9dmFyIEM9ZnVuY3Rpb24odCl7cmV0dXJuISF0JiYoXCJvYmplY3RcIj09dHlwZW9mIHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRoZW59O2Z1bmN0aW9uIE4odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49e30pLGZ1bmN0aW9uKCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkociksaT0wO2k8cjtpKyspZVtpXT1hcmd1bWVudHNbaV07dmFyIG89ITEsdT1uZXcgUHJvbWlzZSgoZnVuY3Rpb24ocixpKXtuLmFzeW5jPWZ1bmN0aW9uKCl7cmV0dXJuIG89ITAsZnVuY3Rpb24odCxuKXt0P2kodCk6cihuKX19O3ZhciB1PXQuYXBwbHkobixlKTtvfHwoQyh1KT91LnRoZW4ocixpKTpyKHUpKX0pKTtyZXR1cm4gdX19dmFyIFg9bmV3KGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oKXt2YXIgbjtyZXR1cm4obj10LmNhbGwodGhpcyl8fHRoaXMpLmxvZ2dlcj1uZXcgbChcIkBiYXJiYS9jb3JlXCIpLG4uYWxsPVtcInJlYWR5XCIsXCJwYWdlXCIsXCJyZXNldFwiLFwiY3VycmVudEFkZGVkXCIsXCJjdXJyZW50UmVtb3ZlZFwiLFwibmV4dEFkZGVkXCIsXCJuZXh0UmVtb3ZlZFwiLFwiYmVmb3JlT25jZVwiLFwib25jZVwiLFwiYWZ0ZXJPbmNlXCIsXCJiZWZvcmVcIixcImJlZm9yZUxlYXZlXCIsXCJsZWF2ZVwiLFwiYWZ0ZXJMZWF2ZVwiLFwiYmVmb3JlRW50ZXJcIixcImVudGVyXCIsXCJhZnRlckVudGVyXCIsXCJhZnRlclwiXSxuLnJlZ2lzdGVyZWQ9bmV3IE1hcCxuLmluaXQoKSxufWUobix0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gci5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLnJlZ2lzdGVyZWQuY2xlYXIoKSx0aGlzLmFsbC5mb3JFYWNoKChmdW5jdGlvbihuKXt0W25dfHwodFtuXT1mdW5jdGlvbihyLGUpe3QucmVnaXN0ZXJlZC5oYXMobil8fHQucmVnaXN0ZXJlZC5zZXQobixuZXcgU2V0KSx0LnJlZ2lzdGVyZWQuZ2V0KG4pLmFkZCh7Y3R4OmV8fHt9LGZuOnJ9KX0pfSkpfSxyLmRvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLHI9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheShyPjE/ci0xOjApLGk9MTtpPHI7aSsrKWVbaS0xXT1hcmd1bWVudHNbaV07aWYodGhpcy5yZWdpc3RlcmVkLmhhcyh0KSl7dmFyIG89UHJvbWlzZS5yZXNvbHZlKCk7cmV0dXJuIHRoaXMucmVnaXN0ZXJlZC5nZXQodCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7bz1vLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIE4odC5mbix0LmN0eCkuYXBwbHkodm9pZCAwLGUpfSkpfSkpLG8uY2F0Y2goKGZ1bmN0aW9uKHIpe24ubG9nZ2VyLmRlYnVnKFwiSG9vayBlcnJvciBbXCIrdCtcIl1cIiksbi5sb2dnZXIuZXJyb3Iocil9KSl9cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmFsbC5mb3JFYWNoKChmdW5jdGlvbihuKXtkZWxldGUgdFtuXX0pKSx0aGlzLmluaXQoKX0sci5oZWxwPWZ1bmN0aW9uKCl7dGhpcy5sb2dnZXIuaW5mbyhcIkF2YWlsYWJsZSBob29rczogXCIrdGhpcy5hbGwuam9pbihcIixcIikpO3ZhciB0PVtdO3RoaXMucmVnaXN0ZXJlZC5mb3JFYWNoKChmdW5jdGlvbihuLHIpe3JldHVybiB0LnB1c2gocil9KSksdGhpcy5sb2dnZXIuaW5mbyhcIlJlZ2lzdGVyZWQgaG9va3M6IFwiK3Quam9pbihcIixcIikpfSxufShoKSksej1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7aWYodGhpcy5QPVtdLFwiYm9vbGVhblwiPT10eXBlb2YgdCl0aGlzLmc9dDtlbHNle3ZhciBuPUFycmF5LmlzQXJyYXkodCk/dDpbdF07dGhpcy5QPW4ubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gJCh0KX0pKX19cmV0dXJuIHQucHJvdG90eXBlLmNoZWNrSHJlZj1mdW5jdGlvbih0KXtpZihcImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuZylyZXR1cm4gdGhpcy5nO3ZhciBuPVUodCkucGF0aDtyZXR1cm4gdGhpcy5QLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dC5leGVjKG4pfSkpfSx0fSgpLEc9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXt2YXIgcjtyZXR1cm4ocj10LmNhbGwodGhpcyxuKXx8dGhpcykuaz1uZXcgTWFwLHJ9ZShuLHQpO3ZhciBpPW4ucHJvdG90eXBlO3JldHVybiBpLnNldD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHRoaXMuay5zZXQodCx7YWN0aW9uOnIscmVxdWVzdDpufSkse2FjdGlvbjpyLHJlcXVlc3Q6bn19LGkuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZ2V0KHQpfSxpLmdldFJlcXVlc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuay5nZXQodCkucmVxdWVzdH0saS5nZXRBY3Rpb249ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuay5nZXQodCkuYWN0aW9ufSxpLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4hdGhpcy5jaGVja0hyZWYodCkmJnRoaXMuay5oYXModCl9LGkuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZGVsZXRlKHQpfSxpLnVwZGF0ZT1mdW5jdGlvbih0LG4pe3ZhciBlPXIoe30sdGhpcy5rLmdldCh0KSx7fSxuKTtyZXR1cm4gdGhpcy5rLnNldCh0LGUpLGV9LG59KHopLFE9ZnVuY3Rpb24oKXtyZXR1cm4hd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlfSxXPWZ1bmN0aW9uKHQpe3JldHVybiF0LmVsfHwhdC5ocmVmfSxKPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZXZlbnQ7cmV0dXJuIG4ud2hpY2g+MXx8bi5tZXRhS2V5fHxuLmN0cmxLZXl8fG4uc2hpZnRLZXl8fG4uYWx0S2V5fSxLPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZWw7cmV0dXJuIG4uaGFzQXR0cmlidXRlKFwidGFyZ2V0XCIpJiZcIl9ibGFua1wiPT09bi50YXJnZXR9LFY9ZnVuY3Rpb24odCl7dmFyIG49dC5lbDtyZXR1cm4gdm9pZCAwIT09bi5wcm90b2NvbCYmd2luZG93LmxvY2F0aW9uLnByb3RvY29sIT09bi5wcm90b2NvbHx8dm9pZCAwIT09bi5ob3N0bmFtZSYmd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIT09bi5ob3N0bmFtZX0sWT1mdW5jdGlvbih0KXt2YXIgbj10LmVsO3JldHVybiB2b2lkIDAhPT1uLnBvcnQmJkIoKSE9PUIobi5ocmVmKX0sWj1mdW5jdGlvbih0KXt2YXIgbj10LmVsO3JldHVybiBuLmdldEF0dHJpYnV0ZSYmXCJzdHJpbmdcIj09dHlwZW9mIG4uZ2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIil9LHR0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmVsLmhhc0F0dHJpYnV0ZShTLnByZWZpeCtcIi1cIitTLnByZXZlbnQpfSxudD1mdW5jdGlvbih0KXtyZXR1cm4gQm9vbGVhbih0LmVsLmNsb3Nlc3QoXCJbXCIrUy5wcmVmaXgrXCItXCIrUy5wcmV2ZW50Kyc9XCJhbGxcIl0nKSl9LHJ0PWZ1bmN0aW9uKHQpe3ZhciBuPXQuaHJlZjtyZXR1cm4gRihuKT09PUYoKSYmQihuKT09PUIoKX0sZXQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXt2YXIgcjtyZXR1cm4ocj10LmNhbGwodGhpcyxuKXx8dGhpcykuc3VpdGU9W10sci50ZXN0cz1uZXcgTWFwLHIuaW5pdCgpLHJ9ZShuLHQpO3ZhciByPW4ucHJvdG90eXBlO3JldHVybiByLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmFkZChcInB1c2hTdGF0ZVwiLFEpLHRoaXMuYWRkKFwiZXhpc3RzXCIsVyksdGhpcy5hZGQoXCJuZXdUYWJcIixKKSx0aGlzLmFkZChcImJsYW5rXCIsSyksdGhpcy5hZGQoXCJjb3JzRG9tYWluXCIsViksdGhpcy5hZGQoXCJjb3JzUG9ydFwiLFkpLHRoaXMuYWRkKFwiZG93bmxvYWRcIixaKSx0aGlzLmFkZChcInByZXZlbnRTZWxmXCIsdHQpLHRoaXMuYWRkKFwicHJldmVudEFsbFwiLG50KSx0aGlzLmFkZChcInNhbWVVcmxcIixydCwhMSl9LHIuYWRkPWZ1bmN0aW9uKHQsbixyKXt2b2lkIDA9PT1yJiYocj0hMCksdGhpcy50ZXN0cy5zZXQodCxuKSxyJiZ0aGlzLnN1aXRlLnB1c2godCl9LHIucnVuPWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiB0aGlzLnRlc3RzLmdldCh0KSh7ZWw6bixldmVudDpyLGhyZWY6ZX0pfSxyLmNoZWNrTGluaz1mdW5jdGlvbih0LG4scil7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5zdWl0ZS5zb21lKChmdW5jdGlvbihpKXtyZXR1cm4gZS5ydW4oaSx0LG4scil9KSl9LG59KHopLGl0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocixlKXt2YXIgaTt2b2lkIDA9PT1lJiYoZT1cIkJhcmJhIGVycm9yXCIpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLHU9bmV3IEFycmF5KG8+Mj9vLTI6MCksZj0yO2Y8bztmKyspdVtmLTJdPWFyZ3VtZW50c1tmXTtyZXR1cm4oaT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KHUpKXx8dGhpcykuZXJyb3I9cixpLmxhYmVsPWUsRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fShpKSxuKSxpLm5hbWU9XCJCYXJiYUVycm9yXCIsaX1yZXR1cm4gZShuLHQpLG59KGYoRXJyb3IpKSxvdD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dm9pZCAwPT09dCYmKHQ9W10pLHRoaXMubG9nZ2VyPW5ldyBsKFwiQGJhcmJhL2NvcmVcIiksdGhpcy5hbGw9W10sdGhpcy5wYWdlPVtdLHRoaXMub25jZT1bXSx0aGlzLkE9W3tuYW1lOlwibmFtZXNwYWNlXCIsdHlwZTpcInN0cmluZ3NcIn0se25hbWU6XCJjdXN0b21cIix0eXBlOlwiZnVuY3Rpb25cIn1dLHQmJih0aGlzLmFsbD10aGlzLmFsbC5jb25jYXQodCkpLHRoaXMudXBkYXRlKCl9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uYWRkPWZ1bmN0aW9uKHQsbil7c3dpdGNoKHQpe2Nhc2VcInJ1bGVcIjp0aGlzLkEuc3BsaWNlKG4ucG9zaXRpb258fDAsMCxuLnZhbHVlKTticmVhaztjYXNlXCJ0cmFuc2l0aW9uXCI6ZGVmYXVsdDp0aGlzLmFsbC5wdXNoKG4pfXRoaXMudXBkYXRlKCl9LG4ucmVzb2x2ZT1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXM7dm9pZCAwPT09biYmKG49e30pO3ZhciBlPW4ub25jZT90aGlzLm9uY2U6dGhpcy5wYWdlO2U9ZS5maWx0ZXIobi5zZWxmP2Z1bmN0aW9uKHQpe3JldHVybiB0Lm5hbWUmJlwic2VsZlwiPT09dC5uYW1lfTpmdW5jdGlvbih0KXtyZXR1cm4hdC5uYW1lfHxcInNlbGZcIiE9PXQubmFtZX0pO3ZhciBpPW5ldyBNYXAsbz1lLmZpbmQoKGZ1bmN0aW9uKGUpe3ZhciBvPSEwLHU9e307cmV0dXJuISghbi5zZWxmfHxcInNlbGZcIiE9PWUubmFtZSl8fChyLkEucmV2ZXJzZSgpLmZvckVhY2goKGZ1bmN0aW9uKG4pe28mJihvPXIuUihlLG4sdCx1KSxlLmZyb20mJmUudG8mJihvPXIuUihlLG4sdCx1LFwiZnJvbVwiKSYmci5SKGUsbix0LHUsXCJ0b1wiKSksZS5mcm9tJiYhZS50byYmKG89ci5SKGUsbix0LHUsXCJmcm9tXCIpKSwhZS5mcm9tJiZlLnRvJiYobz1yLlIoZSxuLHQsdSxcInRvXCIpKSl9KSksaS5zZXQoZSx1KSxvKX0pKSx1PWkuZ2V0KG8pLGY9W107aWYoZi5wdXNoKG4ub25jZT9cIm9uY2VcIjpcInBhZ2VcIiksbi5zZWxmJiZmLnB1c2goXCJzZWxmXCIpLHUpe3ZhciBzLGM9W29dO09iamVjdC5rZXlzKHUpLmxlbmd0aD4wJiZjLnB1c2godSksKHM9dGhpcy5sb2dnZXIpLmluZm8uYXBwbHkocyxbXCJUcmFuc2l0aW9uIGZvdW5kIFtcIitmLmpvaW4oXCIsXCIpK1wiXVwiXS5jb25jYXQoYykpfWVsc2UgdGhpcy5sb2dnZXIuaW5mbyhcIk5vIHRyYW5zaXRpb24gZm91bmQgW1wiK2Yuam9pbihcIixcIikrXCJdXCIpO3JldHVybiBvfSxuLnVwZGF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5hbGw9dGhpcy5hbGwubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gdC5UKG4pfSkpLnNvcnQoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQucHJpb3JpdHktbi5wcmlvcml0eX0pKS5yZXZlcnNlKCkubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gZGVsZXRlIHQucHJpb3JpdHksdH0pKSx0aGlzLnBhZ2U9dGhpcy5hbGwuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC5sZWF2ZXx8dm9pZCAwIT09dC5lbnRlcn0pKSx0aGlzLm9uY2U9dGhpcy5hbGwuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC5vbmNlfSkpfSxuLlI9ZnVuY3Rpb24odCxuLHIsZSxpKXt2YXIgbz0hMCx1PSExLGY9dCxzPW4ubmFtZSxjPXMsYT1zLGg9cyx2PWk/ZltpXTpmLGw9XCJ0b1wiPT09aT9yLm5leHQ6ci5jdXJyZW50O2lmKGk/diYmdltzXTp2W3NdKXtzd2l0Y2gobi50eXBlKXtjYXNlXCJzdHJpbmdzXCI6ZGVmYXVsdDp2YXIgZD1BcnJheS5pc0FycmF5KHZbY10pP3ZbY106W3ZbY11dO2xbY10mJi0xIT09ZC5pbmRleE9mKGxbY10pJiYodT0hMCksLTE9PT1kLmluZGV4T2YobFtjXSkmJihvPSExKTticmVhaztjYXNlXCJvYmplY3RcIjp2YXIgbT1BcnJheS5pc0FycmF5KHZbYV0pP3ZbYV06W3ZbYV1dO2xbYV0/KGxbYV0ubmFtZSYmLTEhPT1tLmluZGV4T2YobFthXS5uYW1lKSYmKHU9ITApLC0xPT09bS5pbmRleE9mKGxbYV0ubmFtZSkmJihvPSExKSk6bz0hMTticmVhaztjYXNlXCJmdW5jdGlvblwiOnZbaF0ocik/dT0hMDpvPSExfXUmJihpPyhlW2ldPWVbaV18fHt9LGVbaV1bc109ZltpXVtzXSk6ZVtzXT1mW3NdKX1yZXR1cm4gb30sbi5PPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT0wO3JldHVybih0W25dfHx0LmZyb20mJnQuZnJvbVtuXXx8dC50byYmdC50b1tuXSkmJihlKz1NYXRoLnBvdygxMCxyKSx0LmZyb20mJnQuZnJvbVtuXSYmKGUrPTEpLHQudG8mJnQudG9bbl0mJihlKz0yKSksZX0sbi5UPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7dC5wcmlvcml0eT0wO3ZhciByPTA7cmV0dXJuIHRoaXMuQS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe3IrPW4uTyh0LGUubmFtZSxpKzEpfSkpLHQucHJpb3JpdHk9cix0fSx0fSgpLHV0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2b2lkIDA9PT10JiYodD1bXSksdGhpcy5sb2dnZXI9bmV3IGwoXCJAYmFyYmEvY29yZVwiKSx0aGlzLlM9ITEsdGhpcy5zdG9yZT1uZXcgb3QodCl9dmFyIHI9dC5wcm90b3R5cGU7cmV0dXJuIHIuZ2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuc3RvcmUucmVzb2x2ZSh0LG4pfSxyLmRvT25jZT1mdW5jdGlvbih0KXt2YXIgbj10LmRhdGEscj10LnRyYW5zaXRpb247dHJ5e3ZhciBlPWZ1bmN0aW9uKCl7aS5TPSExfSxpPXRoaXMsbz1yfHx7fTtpLlM9ITA7dmFyIHU9cygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGkuaihcImJlZm9yZU9uY2VcIixuLG8pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5vbmNlKG4sbykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShpLmooXCJhZnRlck9uY2VcIixuLG8pKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX0pKX0pLChmdW5jdGlvbih0KXtpLlM9ITEsaS5sb2dnZXIuZGVidWcoXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvb25jZV1cIiksaS5sb2dnZXIuZXJyb3IodCl9KSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh1JiZ1LnRoZW4/dS50aGVuKGUpOmUoKSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5kb1BhZ2U9ZnVuY3Rpb24odCl7dmFyIG49dC5kYXRhLHI9dC50cmFuc2l0aW9uLGU9dC5wYWdlLGk9dC53cmFwcGVyO3RyeXt2YXIgbz1mdW5jdGlvbih0KXtpZih1KXJldHVybiB0O2YuUz0hMX0sdT0hMSxmPXRoaXMsYz1yfHx7fSxhPSEwPT09Yy5zeW5jfHwhMTtmLlM9ITA7dmFyIGg9cygoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe3ZhciB0PSExO2Z1bmN0aW9uIHIocil7cmV0dXJuIHQ/cjpQcm9taXNlLnJlc29sdmUoZi5yZW1vdmUobikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJhZnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfXZhciBvPWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4gcygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYWRkKG4saSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVMZWF2ZVwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShQcm9taXNlLmFsbChbZi5sZWF2ZShuLGMpLGYuZW50ZXIobixjKV0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJMZWF2ZVwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJhZnRlckVudGVyXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXt9KSl9KSl9KSl9KSl9KSl9KSl9KSwoZnVuY3Rpb24odCl7aWYoZi5NKHQpKXRocm93IG5ldyBpdCh0LFwiVHJhbnNpdGlvbiBlcnJvciBbc3luY11cIil9KSk7dmFyIHI9ZnVuY3Rpb24ocil7cmV0dXJuIHQ/cjpzKChmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKCl7aWYoITEhPT1vKXJldHVybiBQcm9taXNlLnJlc29sdmUoZi5hZGQobixpKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImJlZm9yZUVudGVyXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuZW50ZXIobixjLG8pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfSkpfSkpfSgpO2lmKHQmJnQudGhlbilyZXR1cm4gdC50aGVuKChmdW5jdGlvbigpe30pKX0pLChmdW5jdGlvbih0KXtpZihmLk0odCkpdGhyb3cgbmV3IGl0KHQsXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvZW50ZXJdXCIpfSkpfSxvPSExLHU9cygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImJlZm9yZUxlYXZlXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFByb21pc2UuYWxsKFtmLmxlYXZlKG4sYyksTChlLG4pXSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIHRbMF19KSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBvPXQsUHJvbWlzZS5yZXNvbHZlKGYuaihcImFmdGVyTGVhdmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX0pKX0pLChmdW5jdGlvbih0KXtpZihmLk0odCkpdGhyb3cgbmV3IGl0KHQsXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvbGVhdmVdXCIpfSkpO3JldHVybiB1JiZ1LnRoZW4/dS50aGVuKHIpOnIodSl9KCk7cmV0dXJuIG8mJm8udGhlbj9vLnRoZW4ocik6cihvKX0pKX12YXIgcj1mdW5jdGlvbigpe2lmKGEpcmV0dXJuIFByb21pc2UucmVzb2x2ZShMKGUsbikpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSgpO3JldHVybiByJiZyLnRoZW4/ci50aGVuKHQpOnQoKX0pLChmdW5jdGlvbih0KXtpZihmLlM9ITEsdC5uYW1lJiZcIkJhcmJhRXJyb3JcIj09PXQubmFtZSl0aHJvdyBmLmxvZ2dlci5kZWJ1Zyh0LmxhYmVsKSxmLmxvZ2dlci5lcnJvcih0LmVycm9yKSx0O3Rocm93IGYubG9nZ2VyLmRlYnVnKFwiVHJhbnNpdGlvbiBlcnJvciBbcGFnZV1cIiksZi5sb2dnZXIuZXJyb3IodCksdH0pKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGgmJmgudGhlbj9oLnRoZW4obyk6byhoKSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5vbmNlPWZ1bmN0aW9uKHQsbil7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoWC5kbyhcIm9uY2VcIix0LG4pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBuLm9uY2U/TihuLm9uY2UsbikodCk6UHJvbWlzZS5yZXNvbHZlKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5sZWF2ZT1mdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8oXCJsZWF2ZVwiLHQsbikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG4ubGVhdmU/TihuLmxlYXZlLG4pKHQpOlByb21pc2UucmVzb2x2ZSgpfSkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIuZW50ZXI9ZnVuY3Rpb24odCxuLHIpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8oXCJlbnRlclwiLHQsbikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG4uZW50ZXI/TihuLmVudGVyLG4pKHQscik6UHJvbWlzZS5yZXNvbHZlKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5hZGQ9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIGouYWRkQ29udGFpbmVyKHQubmV4dC5jb250YWluZXIsbiksWC5kbyhcIm5leHRBZGRlZFwiLHQpLFByb21pc2UucmVzb2x2ZSgpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIucmVtb3ZlPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gai5yZW1vdmVDb250YWluZXIodC5jdXJyZW50LmNvbnRhaW5lciksWC5kbyhcImN1cnJlbnRSZW1vdmVkXCIsdCksUHJvbWlzZS5yZXNvbHZlKCl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5NPWZ1bmN0aW9uKHQpe3JldHVybiB0Lm1lc3NhZ2U/IS9UaW1lb3V0IGVycm9yfEZldGNoIGVycm9yLy50ZXN0KHQubWVzc2FnZSk6IXQuc3RhdHVzfSxyLmo9ZnVuY3Rpb24odCxuLHIpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8odCxuLHIpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiByW3RdP04oclt0XSxyKShuKTpQcm9taXNlLnJlc29sdmUoKX0pKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxuKHQsW3trZXk6XCJpc1J1bm5pbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5TfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5TPXR9fSx7a2V5OlwiaGFzT25jZVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JlLm9uY2UubGVuZ3RoPjB9fSx7a2V5OlwiaGFzU2VsZlwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm5cInNlbGZcIj09PXQubmFtZX0pKX19LHtrZXk6XCJzaG91bGRXYWl0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcmUuYWxsLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRvJiYhdC50by5yb3V0ZXx8dC5zeW5jfSkpfX1dKSx0fSgpLGZ0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2YXIgbj10aGlzO3RoaXMubmFtZXM9W1wiYmVmb3JlTGVhdmVcIixcImFmdGVyTGVhdmVcIixcImJlZm9yZUVudGVyXCIsXCJhZnRlckVudGVyXCJdLHRoaXMuYnlOYW1lc3BhY2U9bmV3IE1hcCwwIT09dC5sZW5ndGgmJih0LmZvckVhY2goKGZ1bmN0aW9uKHQpe24uYnlOYW1lc3BhY2Uuc2V0KHQubmFtZXNwYWNlLHQpfSkpLHRoaXMubmFtZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7WFt0XShuLkwodCkpfSkpKX1yZXR1cm4gdC5wcm90b3R5cGUuTD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihyKXt2YXIgZT10Lm1hdGNoKC9lbnRlci9pKT9yLm5leHQ6ci5jdXJyZW50LGk9bi5ieU5hbWVzcGFjZS5nZXQoZS5uYW1lc3BhY2UpO3JldHVybiBpJiZpW3RdP04oaVt0XSxpKShyKTpQcm9taXNlLnJlc29sdmUoKX19LHR9KCk7RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc3x8KEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXM9RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciksRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdHx8KEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3Q9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztkb3tpZihuLm1hdGNoZXModCkpcmV0dXJuIG47bj1uLnBhcmVudEVsZW1lbnR8fG4ucGFyZW50Tm9kZX13aGlsZShudWxsIT09biYmMT09PW4ubm9kZVR5cGUpO3JldHVybiBudWxsfSk7dmFyIHN0PXtjb250YWluZXI6bnVsbCxodG1sOlwiXCIsbmFtZXNwYWNlOlwiXCIsdXJsOntoYXNoOlwiXCIsaHJlZjpcIlwiLHBhdGg6XCJcIixwb3J0Om51bGwscXVlcnk6e319fTtyZXR1cm4gbmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMudmVyc2lvbj1hLHRoaXMuc2NoZW1hUGFnZT1zdCx0aGlzLkxvZ2dlcj1sLHRoaXMubG9nZ2VyPW5ldyBsKFwiQGJhcmJhL2NvcmVcIiksdGhpcy5wbHVnaW5zPVtdLHRoaXMuaG9va3M9WCx0aGlzLmRvbT1qLHRoaXMuaGVscGVycz1fLHRoaXMuaGlzdG9yeT1NLHRoaXMucmVxdWVzdD1JLHRoaXMudXJsPUh9dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUudXNlPWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5wbHVnaW5zO3IuaW5kZXhPZih0KT4tMT90aGlzLmxvZ2dlci53YXJuKFwiUGx1Z2luIFtcIit0Lm5hbWUrXCJdIGFscmVhZHkgaW5zdGFsbGVkLlwiKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lmluc3RhbGw/KHQuaW5zdGFsbCh0aGlzLG4pLHIucHVzaCh0KSk6dGhpcy5sb2dnZXIud2FybihcIlBsdWdpbiBbXCIrdC5uYW1lKyddIGhhcyBubyBcImluc3RhbGxcIiBtZXRob2QuJyl9LGUuaW5pdD1mdW5jdGlvbih0KXt2YXIgbj12b2lkIDA9PT10P3t9OnQsZT1uLnRyYW5zaXRpb25zLGk9dm9pZCAwPT09ZT9bXTplLG89bi52aWV3cyx1PXZvaWQgMD09PW8/W106byxmPW4uc2NoZW1hLHM9dm9pZCAwPT09Zj9TOmYsYz1uLnJlcXVlc3RFcnJvcixhPW4udGltZW91dCxoPXZvaWQgMD09PWE/MmUzOmEsdj1uLmNhY2hlSWdub3JlLGQ9dm9pZCAwIT09diYmdixtPW4ucHJlZmV0Y2hJZ25vcmUscD12b2lkIDAhPT1tJiZtLHc9bi5wcmV2ZW50UnVubmluZyxiPXZvaWQgMCE9PXcmJncseT1uLnByZXZlbnQsUD12b2lkIDA9PT15P251bGw6eSxnPW4uZGVidWcsRT1uLmxvZ0xldmVsO2lmKGwuc2V0TGV2ZWwoITA9PT0odm9pZCAwIT09ZyYmZyk/XCJkZWJ1Z1wiOnZvaWQgMD09PUU/XCJvZmZcIjpFKSx0aGlzLmxvZ2dlci5pbmZvKHRoaXMudmVyc2lvbiksT2JqZWN0LmtleXMocykuZm9yRWFjaCgoZnVuY3Rpb24odCl7U1t0XSYmKFNbdF09c1t0XSl9KSksdGhpcy4kPWMsdGhpcy50aW1lb3V0PWgsdGhpcy5jYWNoZUlnbm9yZT1kLHRoaXMucHJlZmV0Y2hJZ25vcmU9cCx0aGlzLnByZXZlbnRSdW5uaW5nPWIsdGhpcy5fPXRoaXMuZG9tLmdldFdyYXBwZXIoKSwhdGhpcy5fKXRocm93IG5ldyBFcnJvcihcIltAYmFyYmEvY29yZV0gTm8gQmFyYmEgd3JhcHBlciBmb3VuZFwiKTt0aGlzLl8uc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsXCJwb2xpdGVcIiksdGhpcy5xKCk7dmFyIHg9dGhpcy5kYXRhLmN1cnJlbnQ7aWYoIXguY29udGFpbmVyKXRocm93IG5ldyBFcnJvcihcIltAYmFyYmEvY29yZV0gTm8gQmFyYmEgY29udGFpbmVyIGZvdW5kXCIpO2lmKHRoaXMuY2FjaGU9bmV3IEcoZCksdGhpcy5wcmV2ZW50PW5ldyBldChwKSx0aGlzLnRyYW5zaXRpb25zPW5ldyB1dChpKSx0aGlzLnZpZXdzPW5ldyBmdCh1KSxudWxsIT09UCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgUCl0aHJvdyBuZXcgRXJyb3IoXCJbQGJhcmJhL2NvcmVdIFByZXZlbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb25cIik7dGhpcy5wcmV2ZW50LmFkZChcInByZXZlbnRDdXN0b21cIixQKX10aGlzLmhpc3RvcnkuaW5pdCh4LnVybC5ocmVmLHgubmFtZXNwYWNlKSx0aGlzLkI9dGhpcy5CLmJpbmQodGhpcyksdGhpcy5VPXRoaXMuVS5iaW5kKHRoaXMpLHRoaXMuRD10aGlzLkQuYmluZCh0aGlzKSx0aGlzLkYoKSx0aGlzLnBsdWdpbnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5pdCgpfSkpO3ZhciBrPXRoaXMuZGF0YTtrLnRyaWdnZXI9XCJiYXJiYVwiLGsubmV4dD1rLmN1cnJlbnQsay5jdXJyZW50PXIoe30sdGhpcy5zY2hlbWFQYWdlKSx0aGlzLmhvb2tzLmRvKFwicmVhZHlcIixrKSx0aGlzLm9uY2UoayksdGhpcy5xKCl9LGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucSgpLHRoaXMuSCgpLHRoaXMuaGlzdG9yeS5jbGVhcigpLHRoaXMuaG9va3MuY2xlYXIoKSx0aGlzLnBsdWdpbnM9W119LGUuZm9yY2U9ZnVuY3Rpb24odCl7d2luZG93LmxvY2F0aW9uLmFzc2lnbih0KX0sZS5nbz1mdW5jdGlvbih0LG4scil7dmFyIGU7aWYodm9pZCAwPT09biYmKG49XCJiYXJiYVwiKSx0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyl0aGlzLmZvcmNlKHQpO2Vsc2UgaWYoIShlPVwicG9wc3RhdGVcIj09PW4/dGhpcy5oaXN0b3J5LmN1cnJlbnQmJnRoaXMudXJsLmdldFBhdGgodGhpcy5oaXN0b3J5LmN1cnJlbnQudXJsKT09PXRoaXMudXJsLmdldFBhdGgodCk6dGhpcy5wcmV2ZW50LnJ1bihcInNhbWVVcmxcIixudWxsLG51bGwsdCkpfHx0aGlzLnRyYW5zaXRpb25zLmhhc1NlbGYpcmV0dXJuIG49dGhpcy5oaXN0b3J5LmNoYW5nZSh0LG4sciksciYmKHIuc3RvcFByb3BhZ2F0aW9uKCksci5wcmV2ZW50RGVmYXVsdCgpKSx0aGlzLnBhZ2UodCxuLGUpfSxlLm9uY2U9ZnVuY3Rpb24odCl7dHJ5e3ZhciBuPXRoaXM7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuLmhvb2tzLmRvKFwiYmVmb3JlRW50ZXJcIix0KSkudGhlbigoZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuLmhvb2tzLmRvKFwiYWZ0ZXJFbnRlclwiLHQpKS50aGVuKChmdW5jdGlvbigpe30pKX12YXIgZT1mdW5jdGlvbigpe2lmKG4udHJhbnNpdGlvbnMuaGFzT25jZSl7dmFyIHI9bi50cmFuc2l0aW9ucy5nZXQodCx7b25jZTohMH0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobi50cmFuc2l0aW9ucy5kb09uY2Uoe3RyYW5zaXRpb246cixkYXRhOnR9KSkudGhlbigoZnVuY3Rpb24oKXt9KSl9fSgpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKHIpOnIoKX0pKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxlLnBhZ2U9ZnVuY3Rpb24odCxuLGUpe3RyeXt2YXIgaT1mdW5jdGlvbigpe3ZhciB0PW8uZGF0YTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG8uaG9va3MuZG8oXCJwYWdlXCIsdCkpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIG49cygoZnVuY3Rpb24oKXt2YXIgbj1vLnRyYW5zaXRpb25zLmdldCh0LHtvbmNlOiExLHNlbGY6ZX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUoby50cmFuc2l0aW9ucy5kb1BhZ2Uoe2RhdGE6dCxwYWdlOnUsdHJhbnNpdGlvbjpuLHdyYXBwZXI6by5ffSkpLnRoZW4oKGZ1bmN0aW9uKCl7by5xKCl9KSl9KSwoZnVuY3Rpb24oKXswPT09bC5nZXRMZXZlbCgpJiZvLmZvcmNlKHQuY3VycmVudC51cmwuaHJlZil9KSk7aWYobiYmbi50aGVuKXJldHVybiBuLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfSxvPXRoaXM7by5kYXRhLm5leHQudXJsPXIoe2hyZWY6dH0sby51cmwucGFyc2UodCkpLG8uZGF0YS50cmlnZ2VyPW47dmFyIHU9by5jYWNoZS5oYXModCk/by5jYWNoZS51cGRhdGUodCx7YWN0aW9uOlwiY2xpY2tcIn0pLnJlcXVlc3Q6by5jYWNoZS5zZXQodCxvLnJlcXVlc3QodCxvLnRpbWVvdXQsby5vblJlcXVlc3RFcnJvci5iaW5kKG8sbikpLFwiY2xpY2tcIikucmVxdWVzdCxmPWZ1bmN0aW9uKCl7aWYoby50cmFuc2l0aW9ucy5zaG91bGRXYWl0KXJldHVybiBQcm9taXNlLnJlc29sdmUoTCh1LG8uZGF0YSkpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSgpO3JldHVybiBQcm9taXNlLnJlc29sdmUoZiYmZi50aGVuP2YudGhlbihpKTppKCkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LGUub25SZXF1ZXN0RXJyb3I9ZnVuY3Rpb24odCl7dGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmc9ITE7Zm9yKHZhciBuPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkobj4xP24tMTowKSxlPTE7ZTxuO2UrKylyW2UtMV09YXJndW1lbnRzW2VdO3ZhciBpPXJbMF0sbz1yWzFdLHU9dGhpcy5jYWNoZS5nZXRBY3Rpb24oaSk7cmV0dXJuIHRoaXMuY2FjaGUuZGVsZXRlKGkpLCEodGhpcy4kJiYhMT09PXRoaXMuJCh0LHUsaSxvKXx8KFwiY2xpY2tcIj09PXUmJnRoaXMuZm9yY2UoaSksMSkpfSxlLnByZWZldGNoPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7dGhpcy5jYWNoZS5oYXModCl8fHRoaXMuY2FjaGUuc2V0KHQsdGhpcy5yZXF1ZXN0KHQsdGhpcy50aW1lb3V0LHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLFwiYmFyYmFcIikpLmNhdGNoKChmdW5jdGlvbih0KXtuLmxvZ2dlci5lcnJvcih0KX0pKSxcInByZWZldGNoXCIpfSxlLkY9ZnVuY3Rpb24oKXshMCE9PXRoaXMucHJlZmV0Y2hJZ25vcmUmJihkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5CKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuQikpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuVSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuRCl9LGUuSD1mdW5jdGlvbigpeyEwIT09dGhpcy5wcmVmZXRjaElnbm9yZSYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIix0aGlzLkIpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5CKSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5VKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5EKX0sZS5CPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMscj10aGlzLkkodCk7aWYocil7dmFyIGU9dGhpcy5kb20uZ2V0SHJlZihyKTt0aGlzLnByZXZlbnQuY2hlY2tIcmVmKGUpfHx0aGlzLmNhY2hlLmhhcyhlKXx8dGhpcy5jYWNoZS5zZXQoZSx0aGlzLnJlcXVlc3QoZSx0aGlzLnRpbWVvdXQsdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMscikpLmNhdGNoKChmdW5jdGlvbih0KXtuLmxvZ2dlci5lcnJvcih0KX0pKSxcImVudGVyXCIpfX0sZS5VPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuSSh0KTtpZihuKXJldHVybiB0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyYmdGhpcy5wcmV2ZW50UnVubmluZz8odC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdC5zdG9wUHJvcGFnYXRpb24oKSk6dm9pZCB0aGlzLmdvKHRoaXMuZG9tLmdldEhyZWYobiksbix0KX0sZS5EPWZ1bmN0aW9uKHQpe3RoaXMuZ28odGhpcy51cmwuZ2V0SHJlZigpLFwicG9wc3RhdGVcIix0KX0sZS5JPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10LnRhcmdldDtuJiYhdGhpcy5kb20uZ2V0SHJlZihuKTspbj1uLnBhcmVudE5vZGU7aWYobiYmIXRoaXMucHJldmVudC5jaGVja0xpbmsobix0LHRoaXMuZG9tLmdldEhyZWYobikpKXJldHVybiBufSxlLnE9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVybC5nZXRIcmVmKCksbj17Y29udGFpbmVyOnRoaXMuZG9tLmdldENvbnRhaW5lcigpLGh0bWw6dGhpcy5kb20uZ2V0SHRtbCgpLG5hbWVzcGFjZTp0aGlzLmRvbS5nZXROYW1lc3BhY2UoKSx1cmw6cih7aHJlZjp0fSx0aGlzLnVybC5wYXJzZSh0KSl9O3RoaXMuQz17Y3VycmVudDpuLG5leHQ6cih7fSx0aGlzLnNjaGVtYVBhZ2UpLHRyaWdnZXI6dm9pZCAwfSx0aGlzLmhvb2tzLmRvKFwicmVzZXRcIix0aGlzLmRhdGEpfSxuKHQsW3trZXk6XCJkYXRhXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ319LHtrZXk6XCJ3cmFwcGVyXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX319XSksdH0oKSl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXJiYS51bWQuanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwud2luZG93ID0gZ2xvYmFsLndpbmRvdyB8fCB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gICAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIC8qIVxuICAgKiBHU0FQIDMuNi4wXG4gICAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICAgKlxuICAgKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICAgKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAgICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gICovXG4gIHZhciBfY29uZmlnID0ge1xuICAgIGF1dG9TbGVlcDogMTIwLFxuICAgIGZvcmNlM0Q6IFwiYXV0b1wiLFxuICAgIG51bGxUYXJnZXRXYXJuOiAxLFxuICAgIHVuaXRzOiB7XG4gICAgICBsaW5lSGVpZ2h0OiBcIlwiXG4gICAgfVxuICB9LFxuICAgICAgX2RlZmF1bHRzID0ge1xuICAgIGR1cmF0aW9uOiAuNSxcbiAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgIGRlbGF5OiAwXG4gIH0sXG4gICAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgX2JpZ051bSA9IDFlOCxcbiAgICAgIF90aW55TnVtID0gMSAvIF9iaWdOdW0sXG4gICAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgICBfSEFMRl9QSSA9IF8yUEkgLyA0LFxuICAgICAgX2dzSUQgPSAwLFxuICAgICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBfY29zID0gTWF0aC5jb3MsXG4gICAgICBfc2luID0gTWF0aC5zaW4sXG4gICAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xuICB9LFxuICAgICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbiAgfSxcbiAgICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG4gIH0sXG4gICAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xuICB9LFxuICAgICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbiAgfSxcbiAgICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IGZhbHNlO1xuICB9LFxuICAgICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG4gIH0sXG4gICAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpIHx8IF9pc1N0cmluZyh2YWx1ZSk7XG4gIH0sXG4gICAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgICBfbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgICAgX251bVdpdGhVbml0RXhwID0gL1stKz0uXSpcXGQrWy5lLV0qXFxkKlthLXolXSovZyxcbiAgICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgICAgX3JlbEV4cCA9IC9bKy1dPS0/Wy5cXGRdKy8sXG4gICAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvWyNcXC0rLl0qXFxiW2EtelxcZC09KyUuXSsvZ2ksXG4gICAgICBfdW5pdEV4cCA9IC9bXFxkLitcXC09XSsoPzplWy0rXVxcZCopKi9pLFxuICAgICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgX3dpbixcbiAgICAgIF9jb3JlSW5pdHRlZCxcbiAgICAgIF9kb2MsXG4gICAgICBfZ2xvYmFscyA9IHt9LFxuICAgICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgICAgX2NvcmVSZWFkeSxcbiAgICAgIF9pbnN0YWxsID0gZnVuY3Rpb24gX2luc3RhbGwoc2NvcGUpIHtcbiAgICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbiAgfSxcbiAgICAgIF9taXNzaW5nUGx1Z2luID0gZnVuY3Rpb24gX21pc3NpbmdQbHVnaW4ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG4gIH0sXG4gICAgICBfd2FybiA9IGZ1bmN0aW9uIF93YXJuKG1lc3NhZ2UsIHN1cHByZXNzKSB7XG4gICAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gIH0sXG4gICAgICBfYWRkR2xvYmFsID0gZnVuY3Rpb24gX2FkZEdsb2JhbChuYW1lLCBvYmopIHtcbiAgICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xuICB9LFxuICAgICAgX2VtcHR5RnVuYyA9IGZ1bmN0aW9uIF9lbXB0eUZ1bmMoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG4gICAgICBfcmVzZXJ2ZWRQcm9wcyA9IHt9LFxuICAgICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUsXG4gICAgICBfcGx1Z2lucyA9IHt9LFxuICAgICAgX2VmZmVjdHMgPSB7fSxcbiAgICAgIF9uZXh0R0NGcmFtZSA9IDMwLFxuICAgICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgICBfaGFybmVzcyA9IGZ1bmN0aW9uIF9oYXJuZXNzKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgICAgaTtcbiAgICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICAgIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gJiYgIV9oYXJuZXNzUGx1Z2luc1tpXS50YXJnZXRUZXN0KHRhcmdldCkpIHt9XG5cbiAgICAgIGhhcm5lc3NQbHVnaW4gPSBfaGFybmVzc1BsdWdpbnNbaV07XG4gICAgfVxuXG4gICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldHM7XG4gIH0sXG4gICAgICBfZ2V0Q2FjaGUgPSBmdW5jdGlvbiBfZ2V0Q2FjaGUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0b0FycmF5KHRhcmdldCkpWzBdLl9nc2FwO1xuICB9LFxuICAgICAgX2dldFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHYpIHtcbiAgICByZXR1cm4gKHYgPSB0YXJnZXRbcHJvcGVydHldKSAmJiBfaXNGdW5jdGlvbih2KSA/IHRhcmdldFtwcm9wZXJ0eV0oKSA6IF9pc1VuZGVmaW5lZCh2KSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpIHx8IHY7XG4gIH0sXG4gICAgICBfZm9yRWFjaE5hbWUgPSBmdW5jdGlvbiBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gKG5hbWVzID0gbmFtZXMuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmMpIHx8IG5hbWVzO1xuICB9LFxuICAgICAgX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG4gIH0sXG4gICAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgICB2YXIgbCA9IHRvRmluZC5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IHRvU2VhcmNoLmluZGV4T2YodG9GaW5kW2ldKSA8IDAgJiYgKytpIDwgbDspIHt9XG5cbiAgICByZXR1cm4gaSA8IGw7XG4gIH0sXG4gICAgICBfcGFyc2VWYXJzID0gZnVuY3Rpb24gX3BhcnNlVmFycyhwYXJhbXMsIHR5cGUsIHBhcmVudCkge1xuICAgIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgICAgaXJWYXJzO1xuXG4gICAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICAgIHZhcnMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlyVmFycyA9IHZhcnM7XG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFycztcbiAgfSxcbiAgICAgIF9sYXp5UmVuZGVyID0gZnVuY3Rpb24gX2xhenlSZW5kZXIoKSB7XG4gICAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICAgIGEgPSBfbGF6eVR3ZWVucy5zbGljZSgwKSxcbiAgICAgICAgaSxcbiAgICAgICAgdHdlZW47XG5cbiAgICBfbGF6eUxvb2t1cCA9IHt9O1xuICAgIF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0d2VlbiA9IGFbaV07XG4gICAgICB0d2VlbiAmJiB0d2Vlbi5fbGF6eSAmJiAodHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSkuX2xhenkgPSAwKTtcbiAgICB9XG4gIH0sXG4gICAgICBfbGF6eVNhZmVSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVNhZmVSZW5kZXIoYW5pbWF0aW9uLCB0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgICBhbmltYXRpb24ucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7XG4gIH0sXG4gICAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiAobiB8fCBuID09PSAwKSAmJiAodmFsdWUgKyBcIlwiKS5tYXRjaChfZGVsaW1pdGVkVmFsdWVFeHApLmxlbmd0aCA8IDIgPyBuIDogX2lzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICB9LFxuICAgICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSxcbiAgICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICAgICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiIHx8IHAgPT09IFwiZWFzZVwiIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gICAgfVxuICB9LFxuICAgICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlO1xuICB9LFxuICAgICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICAgIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTtcbiAgfSxcbiAgICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgICB2YXIgY29weSA9IHt9LFxuICAgICAgICBwO1xuXG4gICAgZm9yIChwIGluIG9iaikge1xuICAgICAgcCBpbiBleGNsdWRpbmcgfHwgKGNvcHlbcF0gPSBvYmpbcF0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb3B5O1xuICB9LFxuICAgICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICAgIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICAgIGZ1bmMgPSB2YXJzLmtleWZyYW1lcyA/IF9zZXRLZXlmcmFtZURlZmF1bHRzIDogX3NldERlZmF1bHRzO1xuXG4gICAgaWYgKF9pc05vdEZhbHNlKHZhcnMuaW5oZXJpdCkpIHtcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgZnVuYyh2YXJzLCBwYXJlbnQudmFycy5kZWZhdWx0cyk7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQgfHwgcGFyZW50Ll9kcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFycztcbiAgfSxcbiAgICAgIF9hcnJheXNNYXRjaCA9IGZ1bmN0aW9uIF9hcnJheXNNYXRjaChhMSwgYTIpIHtcbiAgICB2YXIgaSA9IGExLmxlbmd0aCxcbiAgICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgICB3aGlsZSAobWF0Y2ggJiYgaS0tICYmIGExW2ldID09PSBhMltpXSkge31cblxuICAgIHJldHVybiBpIDwgMDtcbiAgfSxcbiAgICAgIF9hZGRMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9hZGRMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wLCBzb3J0QnkpIHtcbiAgICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICAgIH1cblxuICAgIHZhciBwcmV2ID0gcGFyZW50W2xhc3RQcm9wXSxcbiAgICAgICAgdDtcblxuICAgIGlmIChzb3J0QnkpIHtcbiAgICAgIHQgPSBjaGlsZFtzb3J0QnldO1xuXG4gICAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICAgIHByZXYgPSBwcmV2Ll9wcmV2O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2KSB7XG4gICAgICBjaGlsZC5fbmV4dCA9IHByZXYuX25leHQ7XG4gICAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkLl9uZXh0ID0gcGFyZW50W2ZpcnN0UHJvcF07XG4gICAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmIChjaGlsZC5fbmV4dCkge1xuICAgICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50W2xhc3RQcm9wXSA9IGNoaWxkO1xuICAgIH1cblxuICAgIGNoaWxkLl9wcmV2ID0gcHJldjtcbiAgICBjaGlsZC5wYXJlbnQgPSBjaGlsZC5fZHAgPSBwYXJlbnQ7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9LFxuICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUxpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3ApIHtcbiAgICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICAgIH1cblxuICAgIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudFtmaXJzdFByb3BdID09PSBjaGlsZCkge1xuICAgICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBuZXh0O1xuICAgIH1cblxuICAgIGlmIChuZXh0KSB7XG4gICAgICBuZXh0Ll9wcmV2ID0gcHJldjtcbiAgICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgICBwYXJlbnRbbGFzdFByb3BdID0gcHJldjtcbiAgICB9XG5cbiAgICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgfSxcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50ID0gZnVuY3Rpb24gX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQsIG9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUpIHtcbiAgICBjaGlsZC5wYXJlbnQgJiYgKCFvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIHx8IGNoaWxkLnBhcmVudC5hdXRvUmVtb3ZlQ2hpbGRyZW4pICYmIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICAgIGNoaWxkLl9hY3QgPSAwO1xuICB9LFxuICAgICAgX3VuY2FjaGUgPSBmdW5jdGlvbiBfdW5jYWNoZShhbmltYXRpb24sIGNoaWxkKSB7XG4gICAgaWYgKGFuaW1hdGlvbiAmJiAoIWNoaWxkIHx8IGNoaWxkLl9lbmQgPiBhbmltYXRpb24uX2R1ciB8fCBjaGlsZC5fc3RhcnQgPCAwKSkge1xuICAgICAgdmFyIGEgPSBhbmltYXRpb247XG5cbiAgICAgIHdoaWxlIChhKSB7XG4gICAgICAgIGEuX2RpcnR5ID0gMTtcbiAgICAgICAgYSA9IGEucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb247XG4gIH0sXG4gICAgICBfcmVjYWNoZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9yZWNhY2hlQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICAgIHZhciBwYXJlbnQgPSBhbmltYXRpb24ucGFyZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICBwYXJlbnQuX2RpcnR5ID0gMTtcbiAgICAgIHBhcmVudC50b3RhbER1cmF0aW9uKCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb247XG4gIH0sXG4gICAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG4gIH0sXG4gICAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbiAgfSxcbiAgICAgIF9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICAgIHZhciB3aG9sZSA9IE1hdGguZmxvb3IodFRpbWUgLz0gY3ljbGVEdXJhdGlvbik7XG4gICAgcmV0dXJuIHRUaW1lICYmIHdob2xlID09PSB0VGltZSA/IHdob2xlIC0gMSA6IHdob2xlO1xuICB9LFxuICAgICAgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUgPSBmdW5jdGlvbiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnRUaW1lLCBjaGlsZCkge1xuICAgIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xuICB9LFxuICAgICAgX3NldEVuZCA9IGZ1bmN0aW9uIF9zZXRFbmQoYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xuICB9LFxuICAgICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAgIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgYW5pbWF0aW9uLl90cykge1xuICAgICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZChwYXJlbnQuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgICAgX3NldEVuZChhbmltYXRpb24pO1xuXG4gICAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uO1xuICB9LFxuICAgICAgX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgICB2YXIgdDtcblxuICAgIGlmIChjaGlsZC5fdGltZSB8fCBjaGlsZC5faW5pdHRlZCAmJiAhY2hpbGQuX2R1cikge1xuICAgICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgICBjaGlsZC5yZW5kZXIodCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF91bmNhY2hlKHRpbWVsaW5lLCBjaGlsZCkuX2RwICYmIHRpbWVsaW5lLl9pbml0dGVkICYmIHRpbWVsaW5lLl90aW1lID49IHRpbWVsaW5lLl9kdXIgJiYgdGltZWxpbmUuX3RzKSB7XG4gICAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgICAgdCA9IHRpbWVsaW5lO1xuXG4gICAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpO1xuICAgICAgICAgIHQgPSB0Ll9kcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aW1lbGluZS5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgfVxuICB9LFxuICAgICAgX2FkZFRvVGltZWxpbmUgPSBmdW5jdGlvbiBfYWRkVG9UaW1lbGluZSh0aW1lbGluZSwgY2hpbGQsIHBvc2l0aW9uLCBza2lwQ2hlY2tzKSB7XG4gICAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICBjaGlsZC5fc3RhcnQgPSBfcm91bmQocG9zaXRpb24gKyBjaGlsZC5fZGVsYXkpO1xuICAgIGNoaWxkLl9lbmQgPSBfcm91bmQoY2hpbGQuX3N0YXJ0ICsgKGNoaWxkLnRvdGFsRHVyYXRpb24oKSAvIE1hdGguYWJzKGNoaWxkLnRpbWVTY2FsZSgpKSB8fCAwKSk7XG5cbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gICAgdGltZWxpbmUuX3JlY2VudCA9IGNoaWxkO1xuICAgIHNraXBDaGVja3MgfHwgX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKTtcbiAgICByZXR1cm4gdGltZWxpbmU7XG4gIH0sXG4gICAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICAgIHJldHVybiAoX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlciB8fCBfbWlzc2luZ1BsdWdpbihcInNjcm9sbFRyaWdnZXJcIiwgdHJpZ2dlcikpICYmIF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHRyaWdnZXIsIGFuaW1hdGlvbik7XG4gIH0sXG4gICAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIF9pbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSk7XG5cbiAgICBpZiAoIXR3ZWVuLl9pbml0dGVkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcmNlICYmIHR3ZWVuLl9wdCAmJiAodHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkgIT09IGZhbHNlIHx8ICF0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSkgJiYgX2xhc3RSZW5kZXJlZEZyYW1lICE9PSBfdGlja2VyLmZyYW1lKSB7XG4gICAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgICAgdHdlZW4uX2xhenkgPSBbdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50c107XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0sXG4gICAgICBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0ID0gZnVuY3Rpb24gX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChfcmVmKSB7XG4gICAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICAgIHJldHVybiBwYXJlbnQgJiYgcGFyZW50Ll90cyAmJiBwYXJlbnQuX2luaXR0ZWQgJiYgIXBhcmVudC5fbG9jayAmJiAocGFyZW50LnJhd1RpbWUoKSA8IDAgfHwgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChwYXJlbnQpKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiA9IGZ1bmN0aW9uIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiB0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIgJiYgdHdlZW4uZGF0YSAhPT0gXCJpc1N0YXJ0XCIpID8gMCA6IDEsXG4gICAgICAgIHJlcGVhdERlbGF5ID0gdHdlZW4uX3JEZWxheSxcbiAgICAgICAgdFRpbWUgPSAwLFxuICAgICAgICBwdCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBwcmV2SXRlcmF0aW9uO1xuXG4gICAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgICAgaXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCByZXBlYXREZWxheSk7XG4gICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHR3ZWVuLl90VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgICAgdHdlZW4uX3lveW8gJiYgaXRlcmF0aW9uICYgMSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuXG4gICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgdHdlZW4udmFycy5yZXBlYXRSZWZyZXNoICYmIHR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmludmFsaWRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmF0aW8gIT09IHByZXZSYXRpbyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgICBpZiAoIXR3ZWVuLl9pbml0dGVkICYmIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcmV2SXRlcmF0aW9uID0gdHdlZW4uX3pUaW1lO1xuICAgICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lIHx8IChzdXBwcmVzc0V2ZW50cyA/IF90aW55TnVtIDogMCk7XG4gICAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pO1xuICAgICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICAgIHR3ZWVuLl9mcm9tICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG4gICAgICB0d2Vlbi5fdGltZSA9IDA7XG4gICAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHN1cHByZXNzRXZlbnRzIHx8IF9jYWxsYmFjayh0d2VlbiwgXCJvblN0YXJ0XCIpO1xuICAgICAgcHQgPSB0d2Vlbi5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgdHdlZW4uX3N0YXJ0QXQgJiYgdG90YWxUaW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgdFRpbWUgJiYgdHdlZW4uX3JlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdHdlZW4ucGFyZW50ICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0b3RhbFRpbWUgPj0gdHdlZW4uX3REdXIgfHwgdG90YWxUaW1lIDwgMCkgJiYgdHdlZW4ucmF0aW8gPT09IHJhdGlvKSB7XG4gICAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgICAgX2NhbGxiYWNrKHR3ZWVuLCByYXRpbyA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZTtcbiAgICB9XG4gIH0sXG4gICAgICBfZmluZE5leHRQYXVzZVR3ZWVuID0gZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2VlbihhbmltYXRpb24sIHByZXZUaW1lLCB0aW1lKSB7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgICAgY2hpbGQgPSBhbmltYXRpb24uX2ZpcnN0O1xuXG4gICAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0IDw9IHRpbWUpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPj0gdGltZSkge1xuICAgICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0IDwgcHJldlRpbWUpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IGNoaWxkLl9wcmV2O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICAgIHZhciByZXBlYXQgPSBhbmltYXRpb24uX3JlcGVhdCxcbiAgICAgICAgZHVyID0gX3JvdW5kKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgICB0b3RhbFByb2dyZXNzID0gYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cjtcbiAgICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkICYmIChhbmltYXRpb24uX3RpbWUgKj0gZHVyIC8gYW5pbWF0aW9uLl9kdXIpO1xuICAgIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICAgIGFuaW1hdGlvbi5fdER1ciA9ICFyZXBlYXQgPyBkdXIgOiByZXBlYXQgPCAwID8gMWUxMCA6IF9yb3VuZChkdXIgKiAocmVwZWF0ICsgMSkgKyBhbmltYXRpb24uX3JEZWxheSAqIHJlcGVhdCk7XG4gICAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCA/IF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl90VGltZSA9IGFuaW1hdGlvbi5fdER1ciAqIHRvdGFsUHJvZ3Jlc3MpIDogYW5pbWF0aW9uLnBhcmVudCAmJiBfc2V0RW5kKGFuaW1hdGlvbik7XG4gICAgc2tpcFVuY2FjaGUgfHwgX3VuY2FjaGUoYW5pbWF0aW9uLnBhcmVudCwgYW5pbWF0aW9uKTtcbiAgICByZXR1cm4gYW5pbWF0aW9uO1xuICB9LFxuICAgICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIGFuaW1hdGlvbiBpbnN0YW5jZW9mIFRpbWVsaW5lID8gX3VuY2FjaGUoYW5pbWF0aW9uKSA6IF9zZXREdXJhdGlvbihhbmltYXRpb24sIGFuaW1hdGlvbi5fZHVyKTtcbiAgfSxcbiAgICAgIF96ZXJvUG9zaXRpb24gPSB7XG4gICAgX3N0YXJ0OiAwLFxuICAgIGVuZFRpbWU6IF9lbXB0eUZ1bmNcbiAgfSxcbiAgICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbikge1xuICAgIHZhciBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgICByZWNlbnQgPSBhbmltYXRpb24uX3JlY2VudCB8fCBfemVyb1Bvc2l0aW9uLFxuICAgICAgICBjbGlwcGVkRHVyYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSA+PSBfYmlnTnVtID8gcmVjZW50LmVuZFRpbWUoZmFsc2UpIDogYW5pbWF0aW9uLl9kdXIsXG4gICAgICAgIGksXG4gICAgICAgIG9mZnNldDtcblxuICAgIGlmIChfaXNTdHJpbmcocG9zaXRpb24pICYmIChpc05hTihwb3NpdGlvbikgfHwgcG9zaXRpb24gaW4gbGFiZWxzKSkge1xuICAgICAgaSA9IHBvc2l0aW9uLmNoYXJBdCgwKTtcblxuICAgICAgaWYgKGkgPT09IFwiPFwiIHx8IGkgPT09IFwiPlwiKSB7XG4gICAgICAgIHJldHVybiAoaSA9PT0gXCI8XCIgPyByZWNlbnQuX3N0YXJ0IDogcmVjZW50LmVuZFRpbWUocmVjZW50Ll9yZXBlYXQgPj0gMCkpICsgKHBhcnNlRmxvYXQocG9zaXRpb24uc3Vic3RyKDEpKSB8fCAwKTtcbiAgICAgIH1cblxuICAgICAgaSA9IHBvc2l0aW9uLmluZGV4T2YoXCI9XCIpO1xuXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgcG9zaXRpb24gaW4gbGFiZWxzIHx8IChsYWJlbHNbcG9zaXRpb25dID0gY2xpcHBlZER1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCA9ICsocG9zaXRpb24uY2hhckF0KGkgLSAxKSArIHBvc2l0aW9uLnN1YnN0cihpICsgMSkpO1xuICAgICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb24gPT0gbnVsbCA/IGNsaXBwZWREdXJhdGlvbiA6ICtwb3NpdGlvbjtcbiAgfSxcbiAgICAgIF9jb25kaXRpb25hbFJldHVybiA9IGZ1bmN0aW9uIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuYykge1xuICAgIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGZ1bmModmFsdWUpIDogZnVuYztcbiAgfSxcbiAgICAgIF9jbGFtcCA9IGZ1bmN0aW9uIF9jbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xuICB9LFxuICAgICAgZ2V0VW5pdCA9IGZ1bmN0aW9uIGdldFVuaXQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgdiA9IF91bml0RXhwLmV4ZWModmFsdWUpO1xuXG4gICAgcmV0dXJuIHYgPyB2YWx1ZS5zdWJzdHIodi5pbmRleCArIHZbMF0ubGVuZ3RoKSA6IFwiXCI7XG4gIH0sXG4gICAgICBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gX2NsYW1wKG1pbiwgbWF4LCB2KTtcbiAgICB9KTtcbiAgfSxcbiAgICAgIF9zbGljZSA9IFtdLnNsaWNlLFxuICAgICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWUpICYmIFwibGVuZ3RoXCIgaW4gdmFsdWUgJiYgKCFub25FbXB0eSAmJiAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmxlbmd0aCAtIDEgaW4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlWzBdKSkgJiYgIXZhbHVlLm5vZGVUeXBlICYmIHZhbHVlICE9PSBfd2luO1xuICB9LFxuICAgICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICAgIGlmIChhY2N1bXVsYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIF9hY2N1bXVsYXRvcjtcblxuICAgICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gICAgfSkgfHwgYWNjdW11bGF0b3I7XG4gIH0sXG4gICAgICB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSwgbGVhdmVTdHJpbmdzKSB7XG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKF9kb2MucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG4gIH0sXG4gICAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pO1xuICB9LFxuICAgICAgZGlzdHJpYnV0ZSA9IGZ1bmN0aW9uIGRpc3RyaWJ1dGUodikge1xuICAgIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgICAgZWFjaDogdlxuICAgIH0sXG4gICAgICAgIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgICAgYmFzZSA9IHBhcnNlRmxvYXQodmFycy5iYXNlKSB8fCAwLFxuICAgICAgICBjYWNoZSA9IHt9LFxuICAgICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgICAgcmF0aW9zID0gaXNOYU4oZnJvbSkgfHwgaXNEZWNpbWFsLFxuICAgICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgICByYXRpb1kgPSBmcm9tO1xuXG4gICAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgICBjZW50ZXI6IC41LFxuICAgICAgICBlZGdlczogLjUsXG4gICAgICAgIGVuZDogMVxuICAgICAgfVtmcm9tXSB8fCAwO1xuICAgIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgICByYXRpb1kgPSBmcm9tWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgICB2YXIgbCA9IChhIHx8IHZhcnMpLmxlbmd0aCxcbiAgICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgICBvcmlnaW5YLFxuICAgICAgICAgIG9yaWdpblksXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGQsXG4gICAgICAgICAgaixcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgbWluLFxuICAgICAgICAgIHdyYXBBdDtcblxuICAgICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgICAgd3JhcEF0ID0gdmFycy5ncmlkID09PSBcImF1dG9cIiA/IDAgOiAodmFycy5ncmlkIHx8IFsxLCBfYmlnTnVtXSlbMV07XG5cbiAgICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICAgIHdoaWxlIChtYXggPCAobWF4ID0gYVt3cmFwQXQrK10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgJiYgd3JhcEF0IDwgbCkge31cblxuICAgICAgICAgIHdyYXBBdC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzdGFuY2VzID0gY2FjaGVbbF0gPSBbXTtcbiAgICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICAgIG9yaWdpblkgPSByYXRpb3MgPyBsICogcmF0aW9ZIC8gd3JhcEF0IC0gLjUgOiBmcm9tIC8gd3JhcEF0IHwgMDtcbiAgICAgICAgbWF4ID0gMDtcbiAgICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgICBkaXN0YW5jZXNbal0gPSBkID0gIWF4aXMgPyBfc3FydCh4ICogeCArIHkgKiB5KSA6IE1hdGguYWJzKGF4aXMgPT09IFwieVwiID8geSA6IHgpO1xuICAgICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICAgIGRpc3RhbmNlcy5taW4gPSBtaW47XG4gICAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgICBkaXN0YW5jZXMudSA9IGdldFVuaXQodmFycy5hbW91bnQgfHwgdmFycy5lYWNoKSB8fCAwO1xuICAgICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICAgIH1cblxuICAgICAgbCA9IChkaXN0YW5jZXNbaV0gLSBkaXN0YW5jZXMubWluKSAvIGRpc3RhbmNlcy5tYXggfHwgMDtcbiAgICAgIHJldHVybiBfcm91bmQoZGlzdGFuY2VzLmIgKyAoZWFzZSA/IGVhc2UobCkgOiBsKSAqIGRpc3RhbmNlcy52KSArIGRpc3RhbmNlcy51O1xuICAgIH07XG4gIH0sXG4gICAgICBfcm91bmRNb2RpZmllciA9IGZ1bmN0aW9uIF9yb3VuZE1vZGlmaWVyKHYpIHtcbiAgICB2YXIgcCA9IHYgPCAxID8gTWF0aC5wb3coMTAsICh2ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxO1xuICAgIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgICB2YXIgbiA9IE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcDtcbiAgICAgIHJldHVybiAobiAtIG4gJSAxKSAvIHAgKyAoX2lzTnVtYmVyKHJhdykgPyAwIDogZ2V0VW5pdChyYXcpKTtcbiAgICB9O1xuICB9LFxuICAgICAgc25hcCA9IGZ1bmN0aW9uIHNuYXAoc25hcFRvLCB2YWx1ZSkge1xuICAgIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgICAgcmFkaXVzLFxuICAgICAgICBpczJEO1xuXG4gICAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgICByYWRpdXMgPSBpc0FycmF5ID0gc25hcFRvLnJhZGl1cyB8fCBfYmlnTnVtO1xuXG4gICAgICBpZiAoc25hcFRvLnZhbHVlcykge1xuICAgICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICAgIGlmIChpczJEID0gIV9pc051bWJlcihzbmFwVG9bMF0pKSB7XG4gICAgICAgICAgcmFkaXVzICo9IHJhZGl1cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc25hcFRvID0gX3JvdW5kTW9kaWZpZXIoc25hcFRvLmluY3JlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgIWlzQXJyYXkgPyBfcm91bmRNb2RpZmllcihzbmFwVG8pIDogX2lzRnVuY3Rpb24oc25hcFRvKSA/IGZ1bmN0aW9uIChyYXcpIHtcbiAgICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhpczJEIC0gcmF3KSA8PSByYWRpdXMgPyBpczJEIDogcmF3O1xuICAgIH0gOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgICB5ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnkgOiAwKSxcbiAgICAgICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICAgIGkgPSBzbmFwVG8ubGVuZ3RoLFxuICAgICAgICAgIGR4LFxuICAgICAgICAgIGR5O1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlmIChpczJEKSB7XG4gICAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgICAgZHkgPSBzbmFwVG9baV0ueSAtIHk7XG4gICAgICAgICAgZHggPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkeCA9IE1hdGguYWJzKHNuYXBUb1tpXSAtIHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgICAgbWluID0gZHg7XG4gICAgICAgICAgY2xvc2VzdCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2xvc2VzdCA9ICFyYWRpdXMgfHwgbWluIDw9IHJhZGl1cyA/IHNuYXBUb1tjbG9zZXN0XSA6IHJhdztcbiAgICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICAgIH0pO1xuICB9LFxuICAgICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKF9pc0FycmF5KG1pbikgPyAhbWF4IDogcm91bmRpbmdJbmNyZW1lbnQgPT09IHRydWUgPyAhIShyb3VuZGluZ0luY3JlbWVudCA9IDApIDogIXJldHVybkZ1bmN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2lzQXJyYXkobWluKSA/IG1pblt+fihNYXRoLnJhbmRvbSgpICogbWluLmxlbmd0aCldIDogKHJvdW5kaW5nSW5jcmVtZW50ID0gcm91bmRpbmdJbmNyZW1lbnQgfHwgMWUtNSkgJiYgKHJldHVybkZ1bmN0aW9uID0gcm91bmRpbmdJbmNyZW1lbnQgPCAxID8gTWF0aC5wb3coMTAsIChyb3VuZGluZ0luY3JlbWVudCArIFwiXCIpLmxlbmd0aCAtIDIpIDogMSkgJiYgTWF0aC5mbG9vcihNYXRoLnJvdW5kKChtaW4gLSByb3VuZGluZ0luY3JlbWVudCAvIDIgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIHJvdW5kaW5nSW5jcmVtZW50ICogLjk5KSkgLyByb3VuZGluZ0luY3JlbWVudCkgKiByb3VuZGluZ0luY3JlbWVudCAqIHJldHVybkZ1bmN0aW9uKSAvIHJldHVybkZ1bmN0aW9uO1xuICAgIH0pO1xuICB9LFxuICAgICAgcGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGZ1bmN0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgICByZXR1cm4gZih2KTtcbiAgICAgIH0sIHZhbHVlKTtcbiAgICB9O1xuICB9LFxuICAgICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jKHBhcnNlRmxvYXQodmFsdWUpKSArICh1bml0IHx8IGdldFVuaXQodmFsdWUpKTtcbiAgICB9O1xuICB9LFxuICAgICAgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xuICB9LFxuICAgICAgX3dyYXBBcnJheSA9IGZ1bmN0aW9uIF93cmFwQXJyYXkoYSwgd3JhcHBlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBhW35+d3JhcHBlcihpbmRleCldO1xuICAgIH0pO1xuICB9LFxuICAgICAgd3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXAoMCwgbWluLmxlbmd0aCksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgICB9KTtcbiAgfSxcbiAgICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmdlID0gbWF4IC0gbWluLFxuICAgICAgICB0b3RhbCA9IHJhbmdlICogMjtcbiAgICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAodG90YWwgKyAodmFsdWUgLSBtaW4pICUgdG90YWwpICUgdG90YWwgfHwgMDtcbiAgICAgIHJldHVybiBtaW4gKyAodmFsdWUgPiByYW5nZSA/IHRvdGFsIC0gdmFsdWUgOiB2YWx1ZSk7XG4gICAgfSk7XG4gIH0sXG4gICAgICBfcmVwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIF9yZXBsYWNlUmFuZG9tKHZhbHVlKSB7XG4gICAgdmFyIHByZXYgPSAwLFxuICAgICAgICBzID0gXCJcIixcbiAgICAgICAgaSxcbiAgICAgICAgbnVtcyxcbiAgICAgICAgZW5kLFxuICAgICAgICBpc0FycmF5O1xuXG4gICAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgICAgZW5kID0gdmFsdWUuaW5kZXhPZihcIilcIiwgaSk7XG4gICAgICBpc0FycmF5ID0gdmFsdWUuY2hhckF0KGkgKyA3KSA9PT0gXCJbXCI7XG4gICAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgICAgcyArPSB2YWx1ZS5zdWJzdHIocHJldiwgaSAtIHByZXYpICsgcmFuZG9tKGlzQXJyYXkgPyBudW1zIDogK251bXNbMF0sIGlzQXJyYXkgPyAwIDogK251bXNbMV0sICtudW1zWzJdIHx8IDFlLTUpO1xuICAgICAgcHJldiA9IGVuZCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMgKyB2YWx1ZS5zdWJzdHIocHJldiwgdmFsdWUubGVuZ3RoIC0gcHJldik7XG4gIH0sXG4gICAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gICAgdmFyIGluUmFuZ2UgPSBpbk1heCAtIGluTWluLFxuICAgICAgICBvdXRSYW5nZSA9IG91dE1heCAtIG91dE1pbjtcbiAgICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBvdXRNaW4gKyAoKHZhbHVlIC0gaW5NaW4pIC8gaW5SYW5nZSAqIG91dFJhbmdlIHx8IDApO1xuICAgIH0pO1xuICB9LFxuICAgICAgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdGFydCwgZW5kLCBwcm9ncmVzcywgbXV0YXRlKSB7XG4gICAgdmFyIGZ1bmMgPSBpc05hTihzdGFydCArIGVuZCkgPyAwIDogZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICAgIH07XG5cbiAgICBpZiAoIWZ1bmMpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgICAgbWFzdGVyID0ge30sXG4gICAgICAgICAgcCxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGludGVycG9sYXRvcnMsXG4gICAgICAgICAgbCxcbiAgICAgICAgICBpbDtcblxuICAgICAgcHJvZ3Jlc3MgPT09IHRydWUgJiYgKG11dGF0ZSA9IDEpICYmIChwcm9ncmVzcyA9IG51bGwpO1xuXG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgc3RhcnQgPSB7XG4gICAgICAgICAgcDogc3RhcnRcbiAgICAgICAgfTtcbiAgICAgICAgZW5kID0ge1xuICAgICAgICAgIHA6IGVuZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgICAgaW50ZXJwb2xhdG9ycyA9IFtdO1xuICAgICAgICBsID0gc3RhcnQubGVuZ3RoO1xuICAgICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpbnRlcnBvbGF0b3JzLnB1c2goaW50ZXJwb2xhdGUoc3RhcnRbaSAtIDFdLCBzdGFydFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgICBwICo9IGw7XG4gICAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yc1tpXShwIC0gaSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgICB9IGVsc2UgaWYgKCFtdXRhdGUpIHtcbiAgICAgICAgc3RhcnQgPSBfbWVyZ2UoX2lzQXJyYXkoc3RhcnQpID8gW10gOiB7fSwgc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWludGVycG9sYXRvcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGVuZCkge1xuICAgICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihwcm9ncmVzcywgZnVuYyk7XG4gIH0sXG4gICAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgICB2YXIgbGFiZWxzID0gdGltZWxpbmUubGFiZWxzLFxuICAgICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgICBwLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgbGFiZWw7XG5cbiAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICBkaXN0YW5jZSA9IGxhYmVsc1twXSAtIGZyb21UaW1lO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgICAgbGFiZWwgPSBwO1xuICAgICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0sXG4gICAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soYW5pbWF0aW9uLCB0eXBlLCBleGVjdXRlTGF6eUZpcnN0KSB7XG4gICAgdmFyIHYgPSBhbmltYXRpb24udmFycyxcbiAgICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHNjb3BlO1xuXG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICAgIHNjb3BlID0gdi5jYWxsYmFja1Njb3BlIHx8IGFuaW1hdGlvbjtcbiAgICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpO1xuICAgIHJldHVybiBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICB9LFxuICAgICAgX2ludGVycnVwdCA9IGZ1bmN0aW9uIF9pbnRlcnJ1cHQoYW5pbWF0aW9uKSB7XG4gICAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICAgIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICAgIHJldHVybiBhbmltYXRpb247XG4gIH0sXG4gICAgICBfcXVpY2tUd2VlbixcbiAgICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICAgIGNvbmZpZyA9ICFjb25maWcubmFtZSAmJiBjb25maWdbXCJkZWZhdWx0XCJdIHx8IGNvbmZpZztcblxuICAgIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICAgIFBsdWdpbiA9IG5hbWUgJiYgIWlzRnVuYyAmJiBjb25maWcuaW5pdCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgfSA6IGNvbmZpZyxcbiAgICAgICAgaW5zdGFuY2VEZWZhdWx0cyA9IHtcbiAgICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgICByZW5kZXI6IF9yZW5kZXJQcm9wVHdlZW5zLFxuICAgICAgYWRkOiBfYWRkUHJvcFR3ZWVuLFxuICAgICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgICBtb2RpZmllcjogX2FkZFBsdWdpbk1vZGlmaWVyLFxuICAgICAgcmF3VmFyczogMFxuICAgIH0sXG4gICAgICAgIHN0YXRpY3MgPSB7XG4gICAgICB0YXJnZXRUZXN0OiAwLFxuICAgICAgZ2V0OiAwLFxuICAgICAgZ2V0U2V0dGVyOiBfZ2V0U2V0dGVyLFxuICAgICAgYWxpYXNlczoge30sXG4gICAgICByZWdpc3RlcjogMFxuICAgIH07XG5cbiAgICBfd2FrZSgpO1xuXG4gICAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgICBpZiAoX3BsdWdpbnNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfc2V0RGVmYXVsdHMoUGx1Z2luLCBfc2V0RGVmYXVsdHMoX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBpbnN0YW5jZURlZmF1bHRzKSwgc3RhdGljcykpO1xuXG4gICAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTtcblxuICAgICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgICAgaWYgKGNvbmZpZy50YXJnZXRUZXN0KSB7XG4gICAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgICAgfVxuXG4gICAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7XG4gICAgfVxuXG4gICAgX2FkZEdsb2JhbChuYW1lLCBQbHVnaW4pO1xuXG4gICAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG4gIH0sXG4gICAgICBfMjU1ID0gMjU1LFxuICAgICAgX2NvbG9yTG9va3VwID0ge1xuICAgIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gICAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG4gICAgYmxhY2s6IFswLCAwLCAwXSxcbiAgICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICAgIHRlYWw6IFswLCAxMjgsIDEyOF0sXG4gICAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICAgIG5hdnk6IFswLCAwLCAxMjhdLFxuICAgIHdoaXRlOiBbXzI1NSwgXzI1NSwgXzI1NV0sXG4gICAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gICAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gICAgb3JhbmdlOiBbXzI1NSwgMTY1LCAwXSxcbiAgICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gICAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICAgIGdyZWVuOiBbMCwgMTI4LCAwXSxcbiAgICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICAgIGN5YW46IFswLCBfMjU1LCBfMjU1XSxcbiAgICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG4gIH0sXG4gICAgICBfaHVlID0gZnVuY3Rpb24gX2h1ZShoLCBtMSwgbTIpIHtcbiAgICBoID0gaCA8IDAgPyBoICsgMSA6IGggPiAxID8gaCAtIDEgOiBoO1xuICAgIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xuICB9LFxuICAgICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICAgIHIsXG4gICAgICAgIGcsXG4gICAgICAgIGIsXG4gICAgICAgIGgsXG4gICAgICAgIHMsXG4gICAgICAgIGwsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICBkLFxuICAgICAgICB3YXNIU0w7XG5cbiAgICBpZiAoIWEpIHtcbiAgICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2NvbG9yTG9va3VwW3ZdKSB7XG4gICAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICBpZiAodi5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICAgIGcgPSB2LmNoYXJBdCgyKTtcbiAgICAgICAgICBiID0gdi5jaGFyQXQoMyk7XG4gICAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiICsgKHYubGVuZ3RoID09PSA1ID8gdi5jaGFyQXQoNCkgKyB2LmNoYXJBdCg0KSA6IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHYubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgYSA9IHBhcnNlSW50KHYuc3Vic3RyKDEsIDYpLCAxNik7XG4gICAgICAgICAgcmV0dXJuIFthID4+IDE2LCBhID4+IDggJiBfMjU1LCBhICYgXzI1NSwgcGFyc2VJbnQodi5zdWJzdHIoNyksIDE2KSAvIDI1NV07XG4gICAgICAgIH1cblxuICAgICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgICAgYSA9IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV07XG4gICAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICAgIGlmICghdG9IU0wpIHtcbiAgICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICAgIGwgPSArYVsyXSAvIDEwMDtcbiAgICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICAgIGEubGVuZ3RoID4gMyAmJiAoYVszXSAqPSAxKTtcbiAgICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICAgIGFbMV0gPSBfaHVlKGgsIHIsIGcpO1xuICAgICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKSB8fCBfY29sb3JMb29rdXAudHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICAgIH1cblxuICAgIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgICByID0gYVswXSAvIF8yNTU7XG4gICAgICBnID0gYVsxXSAvIF8yNTU7XG4gICAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgIGggPSBzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICBoICo9IDYwO1xuICAgICAgfVxuXG4gICAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgICAgYVsyXSA9IH5+KGwgKiAxMDAgKyAuNSk7XG4gICAgfVxuXG4gICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgICBjID0gW10sXG4gICAgICAgIGkgPSAtMTtcbiAgICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGEpO1xuICAgICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgICB9KTtcbiAgICB2YWx1ZXMuYyA9IGM7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSxcbiAgICAgIF9mb3JtYXRDb2xvcnMgPSBmdW5jdGlvbiBfZm9ybWF0Q29sb3JzKHMsIHRvSFNMLCBvcmRlck1hdGNoRGF0YSkge1xuICAgIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgICAgdHlwZSA9IHRvSFNMID8gXCJoc2xhKFwiIDogXCJyZ2JhKFwiLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgYyxcbiAgICAgICAgc2hlbGwsXG4gICAgICAgIGQsXG4gICAgICAgIGw7XG5cbiAgICBpZiAoIWNvbG9ycykge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gICAgfSk7XG5cbiAgICBpZiAob3JkZXJNYXRjaERhdGEpIHtcbiAgICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgICAgaWYgKGMuam9pbihyZXN1bHQpICE9PSBkLmMuam9pbihyZXN1bHQpKSB7XG4gICAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoZWxsKSB7XG4gICAgICBzaGVsbCA9IHMuc3BsaXQoX2NvbG9yRXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyBjb2xvcnNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdCArIHNoZWxsW2xdO1xuICB9LFxuICAgICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzID0gXCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIyg/OlswLTlhLWZdezMsNH0pezEsMn1cXFxcYlwiLFxuICAgICAgICBwO1xuXG4gICAgZm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuICAgICAgcyArPSBcInxcIiArIHAgKyBcIlxcXFxiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocyArIFwiKVwiLCBcImdpXCIpO1xuICB9KCksXG4gICAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgICAgX2NvbG9yU3RyaW5nRmlsdGVyID0gZnVuY3Rpb24gX2NvbG9yU3RyaW5nRmlsdGVyKGEpIHtcbiAgICB2YXIgY29tYmluZWQgPSBhLmpvaW4oXCIgXCIpLFxuICAgICAgICB0b0hTTDtcbiAgICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICAgIGlmIChfY29sb3JFeHAudGVzdChjb21iaW5lZCkpIHtcbiAgICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICAgIGFbMV0gPSBfZm9ybWF0Q29sb3JzKGFbMV0sIHRvSFNMKTtcbiAgICAgIGFbMF0gPSBfZm9ybWF0Q29sb3JzKGFbMF0sIHRvSFNMLCBfY29sb3JPcmRlckRhdGEoYVsxXSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICAgICAgX3RpY2tlckFjdGl2ZSxcbiAgICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgICAgIF9sYWdUaHJlc2hvbGQgPSA1MDAsXG4gICAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgICBfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcbiAgICAgICAgX2xhc3RVcGRhdGUgPSBfc3RhcnRUaW1lLFxuICAgICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgICAgX25leHRUaW1lID0gX2dhcCxcbiAgICAgICAgX2xpc3RlbmVycyA9IFtdLFxuICAgICAgICBfaWQsXG4gICAgICAgIF9yZXEsXG4gICAgICAgIF9yYWYsXG4gICAgICAgIF9zZWxmLFxuICAgICAgICBfZGVsdGEsXG4gICAgICAgIF9pLFxuICAgICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICAgIHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuICAgICAgICAgIG1hbnVhbCA9IHYgPT09IHRydWUsXG4gICAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgICB0aW1lLFxuICAgICAgICAgIGZyYW1lO1xuXG4gICAgICBlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCAmJiAoX3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnKTtcbiAgICAgIF9sYXN0VXBkYXRlICs9IGVsYXBzZWQ7XG4gICAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgICAgb3ZlcmxhcCA9IHRpbWUgLSBfbmV4dFRpbWU7XG5cbiAgICAgIGlmIChvdmVybGFwID4gMCB8fCBtYW51YWwpIHtcbiAgICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgICBfZGVsdGEgPSB0aW1lIC0gX3NlbGYudGltZSAqIDEwMDA7XG4gICAgICAgIF9zZWxmLnRpbWUgPSB0aW1lID0gdGltZSAvIDEwMDA7XG4gICAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICAgIGRpc3BhdGNoID0gMTtcbiAgICAgIH1cblxuICAgICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7XG5cbiAgICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgICBmb3IgKF9pID0gMDsgX2kgPCBfbGlzdGVuZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIF9saXN0ZW5lcnNbX2ldKHRpbWUsIF9kZWx0YSwgZnJhbWUsIHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9zZWxmID0ge1xuICAgICAgdGltZTogMCxcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgX3RpY2sodHJ1ZSk7XG4gICAgICB9LFxuICAgICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgICAgcmV0dXJuIF9kZWx0YSAvICgxMDAwIC8gKGZwcyB8fCA2MCkpO1xuICAgICAgfSxcbiAgICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICAgIGlmIChfY29yZVJlYWR5KSB7XG4gICAgICAgICAgaWYgKCFfY29yZUluaXR0ZWQgJiYgX3dpbmRvd0V4aXN0cygpKSB7XG4gICAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgICAgX2RvYyA9IF93aW4uZG9jdW1lbnQgfHwge307XG4gICAgICAgICAgICBfZ2xvYmFscy5nc2FwID0gZ3NhcDtcbiAgICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgICAgX2luc3RhbGwoX2luc3RhbGxTY29wZSB8fCBfd2luLkdyZWVuU29ja0dsb2JhbHMgfHwgIV93aW4uZ3NhcCAmJiBfd2luIHx8IHt9KTtcblxuICAgICAgICAgICAgX3JhZiA9IF93aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9pZCAmJiBfc2VsZi5zbGVlcCgpO1xuXG4gICAgICAgICAgX3JlcSA9IF9yYWYgfHwgZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBfdGlja2VyQWN0aXZlID0gMTtcblxuICAgICAgICAgIF90aWNrKDIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgICAoX3JhZiA/IF93aW4uY2FuY2VsQW5pbWF0aW9uRnJhbWUgOiBjbGVhclRpbWVvdXQpKF9pZCk7XG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAwO1xuICAgICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICAgIH0sXG4gICAgICBsYWdTbW9vdGhpbmc6IGZ1bmN0aW9uIGxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG4gICAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMSAvIF90aW55TnVtO1xuICAgICAgICBfYWRqdXN0ZWRMYWcgPSBNYXRoLm1pbihhZGp1c3RlZExhZywgX2xhZ1RocmVzaG9sZCwgMCk7XG4gICAgICB9LFxuICAgICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgICBfZ2FwID0gMTAwMCAvIChfZnBzIHx8IDI0MCk7XG4gICAgICAgIF9uZXh0VGltZSA9IF9zZWxmLnRpbWUgKiAxMDAwICsgX2dhcDtcbiAgICAgIH0sXG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjYWxsYmFjaykge1xuICAgICAgICBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spIDwgMCAmJiBfbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIF93YWtlKCk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIH4oaSA9IF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykpICYmIF9saXN0ZW5lcnMuc3BsaWNlKGksIDEpICYmIF9pID49IGkgJiYgX2ktLTtcbiAgICAgIH0sXG4gICAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gICAgfTtcbiAgICByZXR1cm4gX3NlbGY7XG4gIH0oKSxcbiAgICAgIF93YWtlID0gZnVuY3Rpb24gX3dha2UoKSB7XG4gICAgcmV0dXJuICFfdGlja2VyQWN0aXZlICYmIF90aWNrZXIud2FrZSgpO1xuICB9LFxuICAgICAgX2Vhc2VNYXAgPSB7fSxcbiAgICAgIF9jdXN0b21FYXNlRXhwID0gL15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sXG4gICAgICBfcXVvdGVzRXhwID0gL1tcIiddL2csXG4gICAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gICAgdmFyIG9iaiA9IHt9LFxuICAgICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICAgIGtleSA9IHNwbGl0WzBdLFxuICAgICAgICBpID0gMSxcbiAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHZhbCxcbiAgICAgICAgcGFyc2VkVmFsO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhbCA9IHNwbGl0W2ldO1xuICAgICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgICAgcGFyc2VkVmFsID0gdmFsLnN1YnN0cigwLCBpbmRleCk7XG4gICAgICBvYmpba2V5XSA9IGlzTmFOKHBhcnNlZFZhbCkgPyBwYXJzZWRWYWwucmVwbGFjZShfcXVvdGVzRXhwLCBcIlwiKS50cmltKCkgOiArcGFyc2VkVmFsO1xuICAgICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICAgICAgX3ZhbHVlSW5QYXJlbnRoZXNlcyA9IGZ1bmN0aW9uIF92YWx1ZUluUGFyZW50aGVzZXModmFsdWUpIHtcbiAgICB2YXIgb3BlbiA9IHZhbHVlLmluZGV4T2YoXCIoXCIpICsgMSxcbiAgICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgICAgbmVzdGVkID0gdmFsdWUuaW5kZXhPZihcIihcIiwgb3Blbik7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhvcGVuLCB+bmVzdGVkICYmIG5lc3RlZCA8IGNsb3NlID8gdmFsdWUuaW5kZXhPZihcIilcIiwgY2xvc2UgKyAxKSA6IGNsb3NlKTtcbiAgfSxcbiAgICAgIF9jb25maWdFYXNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIF9jb25maWdFYXNlRnJvbVN0cmluZyhuYW1lKSB7XG4gICAgdmFyIHNwbGl0ID0gKG5hbWUgKyBcIlwiKS5zcGxpdChcIihcIiksXG4gICAgICAgIGVhc2UgPSBfZWFzZU1hcFtzcGxpdFswXV07XG4gICAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG4gIH0sXG4gICAgICBfaW52ZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnZlcnRFYXNlKGVhc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZSgxIC0gcCk7XG4gICAgfTtcbiAgfSxcbiAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZSA9IGZ1bmN0aW9uIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKSB7XG4gICAgdmFyIGNoaWxkID0gdGltZWxpbmUuX2ZpcnN0LFxuICAgICAgICBlYXNlO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUaW1lbGluZSkge1xuICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQsIGlzWW95byk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnZhcnMueW95b0Vhc2UgJiYgKCFjaGlsZC5feW95byB8fCAhY2hpbGQuX3JlcGVhdCkgJiYgY2hpbGQuX3lveW8gIT09IGlzWW95bykge1xuICAgICAgICBpZiAoY2hpbGQudGltZWxpbmUpIHtcbiAgICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQudGltZWxpbmUsIGlzWW95byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWFzZSA9IGNoaWxkLl9lYXNlO1xuICAgICAgICAgIGNoaWxkLl9lYXNlID0gY2hpbGQuX3lFYXNlO1xuICAgICAgICAgIGNoaWxkLl95RWFzZSA9IGVhc2U7XG4gICAgICAgICAgY2hpbGQuX3lveW8gPSBpc1lveW87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0sXG4gICAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICAgIHJldHVybiAhZWFzZSA/IGRlZmF1bHRFYXNlIDogKF9pc0Z1bmN0aW9uKGVhc2UpID8gZWFzZSA6IF9lYXNlTWFwW2Vhc2VdIHx8IF9jb25maWdFYXNlRnJvbVN0cmluZyhlYXNlKSkgfHwgZGVmYXVsdEVhc2U7XG4gIH0sXG4gICAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICAgIGlmIChlYXNlT3V0ID09PSB2b2lkIDApIHtcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICAgIGVhc2VJbk91dCA9IGZ1bmN0aW9uIGVhc2VJbk91dChwKSB7XG4gICAgICAgIHJldHVybiBwIDwgLjUgPyBlYXNlSW4ocCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4oKDEgLSBwKSAqIDIpIC8gMjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGVhc2UgPSB7XG4gICAgICBlYXNlSW46IGVhc2VJbixcbiAgICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFxuICAgIH0sXG4gICAgICAgIGxvd2VyY2FzZU5hbWU7XG5cbiAgICBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCldID0gZWFzZU91dDtcblxuICAgICAgZm9yICh2YXIgcCBpbiBlYXNlKSB7XG4gICAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVhc2U7XG4gIH0sXG4gICAgICBfZWFzZUluT3V0RnJvbU91dCA9IGZ1bmN0aW9uIF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwIDwgLjUgPyAoMSAtIGVhc2VPdXQoMSAtIHAgKiAyKSkgLyAyIDogLjUgKyBlYXNlT3V0KChwIC0gLjUpICogMikgLyAyO1xuICAgIH07XG4gIH0sXG4gICAgICBfY29uZmlnRWxhc3RpYyA9IGZ1bmN0aW9uIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgdmFyIHAxID0gYW1wbGl0dWRlID49IDEgPyBhbXBsaXR1ZGUgOiAxLFxuICAgICAgICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgICAgcDMgPSBwMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyBwMSkgfHwgMCksXG4gICAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgICB9LFxuICAgICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgICBwMiA9IF8yUEkgLyBwMjtcblxuICAgIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICByZXR1cm4gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZWFzZTtcbiAgfSxcbiAgICAgIF9jb25maWdCYWNrID0gZnVuY3Rpb24gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KSB7XG4gICAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgICBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuICAgIH1cblxuICAgIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gcCA/IC0tcCAqIHAgKiAoKG92ZXJzaG9vdCArIDEpICogcCArIG92ZXJzaG9vdCkgKyAxIDogMDtcbiAgICB9LFxuICAgICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICAgIHJldHVybiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZWFzZTtcbiAgfTtcblxuICBfZm9yRWFjaE5hbWUoXCJMaW5lYXIsUXVhZCxDdWJpYyxRdWFydCxRdWludCxTdHJvbmdcIiwgZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICAgIF9pbnNlcnRFYXNlKG5hbWUgKyBcIixQb3dlclwiICsgKHBvd2VyIC0gMSksIGkgPyBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gICAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwIDwgLjUgPyBNYXRoLnBvdyhwICogMiwgcG93ZXIpIC8gMiA6IDEgLSBNYXRoLnBvdygoMSAtIHApICogMiwgcG93ZXIpIC8gMjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgX2Vhc2VNYXAuTGluZWFyLmVhc2VOb25lID0gX2Vhc2VNYXAubm9uZSA9IF9lYXNlTWFwLkxpbmVhci5lYXNlSW47XG5cbiAgX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuICAoZnVuY3Rpb24gKG4sIGMpIHtcbiAgICB2YXIgbjEgPSAxIC8gYyxcbiAgICAgICAgbjIgPSAyICogbjEsXG4gICAgICAgIG4zID0gMi41ICogbjEsXG4gICAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gICAgfTtcblxuICAgIF9pbnNlcnRFYXNlKFwiQm91bmNlXCIsIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICAgIH0sIGVhc2VPdXQpO1xuICB9KSg3LjU2MjUsIDIuNzUpO1xuXG4gIF9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwID8gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDA7XG4gIH0pO1xuXG4gIF9pbnNlcnRFYXNlKFwiQ2lyY1wiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAtKF9zcXJ0KDEgLSBwICogcCkgLSAxKTtcbiAgfSk7XG5cbiAgX2luc2VydEVhc2UoXCJTaW5lXCIsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPT09IDEgPyAxIDogLV9jb3MocCAqIF9IQUxGX1BJKSArIDE7XG4gIH0pO1xuXG4gIF9pbnNlcnRFYXNlKFwiQmFja1wiLCBfY29uZmlnQmFjayhcImluXCIpLCBfY29uZmlnQmFjayhcIm91dFwiKSwgX2NvbmZpZ0JhY2soKSk7XG5cbiAgX2Vhc2VNYXAuU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5zdGVwcyA9IF9nbG9iYWxzLlN0ZXBwZWRFYXNlID0ge1xuICAgIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHN0ZXBzLCBpbW1lZGlhdGVTdGFydCkge1xuICAgICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RlcHMgPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgcDEgPSAxIC8gc3RlcHMsXG4gICAgICAgICAgcDIgPSBzdGVwcyArIChpbW1lZGlhdGVTdGFydCA/IDAgOiAxKSxcbiAgICAgICAgICBwMyA9IGltbWVkaWF0ZVN0YXJ0ID8gMSA6IDAsXG4gICAgICAgICAgbWF4ID0gMSAtIF90aW55TnVtO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiAoKHAyICogX2NsYW1wKDAsIG1heCwgcCkgfCAwKSArIHAzKSAqIHAxO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIF9kZWZhdWx0cy5lYXNlID0gX2Vhc2VNYXBbXCJxdWFkLm91dFwiXTtcblxuICBfZm9yRWFjaE5hbWUoXCJvbkNvbXBsZXRlLG9uVXBkYXRlLG9uU3RhcnQsb25SZXBlYXQsb25SZXZlcnNlQ29tcGxldGUsb25JbnRlcnJ1cHRcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX2NhbGxiYWNrTmFtZXMgKz0gbmFtZSArIFwiLFwiICsgbmFtZSArIFwiUGFyYW1zLFwiO1xuICB9KTtcblxuICB2YXIgR1NDYWNoZSA9IGZ1bmN0aW9uIEdTQ2FjaGUodGFyZ2V0LCBoYXJuZXNzKSB7XG4gICAgdGhpcy5pZCA9IF9nc0lEKys7XG4gICAgdGFyZ2V0Ll9nc2FwID0gdGhpcztcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmhhcm5lc3MgPSBoYXJuZXNzO1xuICAgIHRoaXMuZ2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0IDogX2dldFByb3BlcnR5O1xuICAgIHRoaXMuc2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0U2V0dGVyIDogX2dldFNldHRlcjtcbiAgfTtcbiAgdmFyIEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb24odmFycywgdGltZSkge1xuICAgICAgdmFyIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZTtcbiAgICAgIHRoaXMudmFycyA9IHZhcnM7XG4gICAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQgPSB2YXJzLnJlcGVhdCA9PT0gSW5maW5pdHkgPyAtMiA6IHZhcnMucmVwZWF0IHx8IDApIHtcbiAgICAgICAgdGhpcy5fckRlbGF5ID0gdmFycy5yZXBlYXREZWxheSB8fCAwO1xuICAgICAgICB0aGlzLl95b3lvID0gISF2YXJzLnlveW8gfHwgISF2YXJzLnlveW9FYXNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90cyA9IDE7XG5cbiAgICAgIF9zZXREdXJhdGlvbih0aGlzLCArdmFycy5kdXJhdGlvbiwgMSwgMSk7XG5cbiAgICAgIHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcbiAgICAgIF90aWNrZXJBY3RpdmUgfHwgX3RpY2tlci53YWtlKCk7XG4gICAgICBwYXJlbnQgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogcGFyZW50Ll90aW1lLCAxKTtcbiAgICAgIHZhcnMucmV2ZXJzZWQgJiYgdGhpcy5yZXZlcnNlKCk7XG4gICAgICB2YXJzLnBhdXNlZCAmJiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gICAgfTtcblxuICAgIF9wcm90by50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90RHVyO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgICByZXR1cm4gX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX3JlcGVhdCA8IDAgPyB2YWx1ZSA6ICh2YWx1ZSAtIHRoaXMuX3JlcGVhdCAqIHRoaXMuX3JEZWxheSkgLyAodGhpcy5fcmVwZWF0ICsgMSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICBfd2FrZSgpO1xuXG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5fZHA7XG5cbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICAgIF9hbGlnblBsYXloZWFkKHRoaXMsIF90b3RhbFRpbWUpO1xuXG4gICAgICAgICFwYXJlbnQuX2RwIHx8IHBhcmVudC5wYXJlbnQgfHwgX3Bvc3RBZGRDaGVja3MocGFyZW50LCB0aGlzKTtcblxuICAgICAgICB3aGlsZSAocGFyZW50LnBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgICAgcGFyZW50LnRvdGFsVGltZShwYXJlbnQuX3RUaW1lLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCAmJiB0aGlzLl9kcC5hdXRvUmVtb3ZlQ2hpbGRyZW4gJiYgKHRoaXMuX3RzID4gMCAmJiBfdG90YWxUaW1lIDwgdGhpcy5fdER1ciB8fCB0aGlzLl90cyA8IDAgJiYgX3RvdGFsVGltZSA+IDAgfHwgIXRoaXMuX3REdXIgJiYgIV90b3RhbFRpbWUpKSB7XG4gICAgICAgICAgX2FkZFRvVGltZWxpbmUodGhpcy5fZHAsIHRoaXMsIHRoaXMuX3N0YXJ0IC0gdGhpcy5fZGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gX3RvdGFsVGltZSB8fCAhdGhpcy5fZHVyICYmICFzdXBwcmVzc0V2ZW50cyB8fCB0aGlzLl9pbml0dGVkICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSA9PT0gX3RpbnlOdW0gfHwgIV90b3RhbFRpbWUgJiYgIXRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuYWRkIHx8IHRoaXMuX3B0TG9va3VwKSkge1xuICAgICAgICB0aGlzLl90cyB8fCAodGhpcy5fcFRpbWUgPSBfdG90YWxUaW1lKTtcblxuICAgICAgICBfbGF6eVNhZmVSZW5kZXIodGhpcywgX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRpbWUgPSBmdW5jdGlvbiB0aW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgdGhpcy5fZHVyIHx8ICh2YWx1ZSA/IHRoaXMuX2R1ciA6IDApLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl90aW1lO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMudG90YWxEdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdFRpbWUgLyB0aGlzLl90RHVyKSA6IHRoaXMucmF0aW87XG4gICAgfTtcblxuICAgIF9wcm90by5wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkgKiAodGhpcy5feW95byAmJiAhKHRoaXMuaXRlcmF0aW9uKCkgJiAxKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5kdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuX2R1cikgOiB0aGlzLnJhdGlvO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaXRlcmF0aW9uID0gZnVuY3Rpb24gaXRlcmF0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZSArICh2YWx1ZSAtIDEpICogY3ljbGVEdXJhdGlvbiwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKSArIDEgOiAxO1xuICAgIH07XG5cbiAgICBfcHJvdG8udGltZVNjYWxlID0gZnVuY3Rpb24gdGltZVNjYWxlKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J0cyA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0cztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3J0cyA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciB0VGltZSA9IHRoaXMucGFyZW50ICYmIHRoaXMuX3RzID8gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGhpcy5wYXJlbnQuX3RpbWUsIHRoaXMpIDogdGhpcy5fdFRpbWU7XG4gICAgICB0aGlzLl9ydHMgPSArdmFsdWUgfHwgMDtcbiAgICAgIHRoaXMuX3RzID0gdGhpcy5fcHMgfHwgdmFsdWUgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7XG4gICAgICByZXR1cm4gX3JlY2FjaGVBbmNlc3RvcnModGhpcy50b3RhbFRpbWUoX2NsYW1wKC10aGlzLl9kZWxheSwgdGhpcy5fdER1ciwgdFRpbWUpLCB0cnVlKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5wYXVzZWQgPSBmdW5jdGlvbiBwYXVzZWQodmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wcyAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcHMgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9wVGltZSA9IHRoaXMuX3RUaW1lIHx8IE1hdGgubWF4KC10aGlzLl9kZWxheSwgdGhpcy5yYXdUaW1lKCkpO1xuICAgICAgICAgIHRoaXMuX3RzID0gdGhpcy5fYWN0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfd2FrZSgpO1xuXG4gICAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9ydHM7XG4gICAgICAgICAgdGhpcy50b3RhbFRpbWUodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nID8gdGhpcy5yYXdUaW1lKCkgOiB0aGlzLl90VGltZSB8fCB0aGlzLl9wVGltZSwgdGhpcy5wcm9ncmVzcygpID09PSAxICYmICh0aGlzLl90VGltZSAtPSBfdGlueU51bSkgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90by5zdGFydFRpbWUgPSBmdW5jdGlvbiBzdGFydFRpbWUodmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgICAgcGFyZW50ICYmIChwYXJlbnQuX3NvcnQgfHwgIXRoaXMucGFyZW50KSAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uZW5kVGltZSA9IGZ1bmN0aW9uIGVuZFRpbWUoaW5jbHVkZVJlcGVhdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydCArIChfaXNOb3RGYWxzZShpbmNsdWRlUmVwZWF0cykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyBNYXRoLmFicyh0aGlzLl90cyk7XG4gICAgfTtcblxuICAgIF9wcm90by5yYXdUaW1lID0gZnVuY3Rpb24gcmF3VGltZSh3cmFwUmVwZWF0cykge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwO1xuICAgICAgcmV0dXJuICFwYXJlbnQgPyB0aGlzLl90VGltZSA6IHdyYXBSZXBlYXRzICYmICghdGhpcy5fdHMgfHwgdGhpcy5fcmVwZWF0ICYmIHRoaXMuX3RpbWUgJiYgdGhpcy50b3RhbFByb2dyZXNzKCkgPCAxKSA/IHRoaXMuX3RUaW1lICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgOiAhdGhpcy5fdHMgPyB0aGlzLl90VGltZSA6IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudC5yYXdUaW1lKHdyYXBSZXBlYXRzKSwgdGhpcyk7XG4gICAgfTtcblxuICAgIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcyxcbiAgICAgICAgICB0aW1lID0gYXJndW1lbnRzLmxlbmd0aCA/IHJhd1RpbWUgOiBhbmltYXRpb24ucmF3VGltZSgpO1xuXG4gICAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHRpbWUgPSBhbmltYXRpb24uX3N0YXJ0ICsgdGltZSAvIChhbmltYXRpb24uX3RzIHx8IDEpO1xuICAgICAgICBhbmltYXRpb24gPSBhbmltYXRpb24uX2RwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGltZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWUgPT09IEluZmluaXR5ID8gLTIgOiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXBlYXQgPT09IC0yID8gSW5maW5pdHkgOiB0aGlzLl9yZXBlYXQ7XG4gICAgfTtcblxuICAgIF9wcm90by5yZXBlYXREZWxheSA9IGZ1bmN0aW9uIHJlcGVhdERlbGF5KHZhbHVlKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yRGVsYXkgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9yRGVsYXk7XG4gICAgfTtcblxuICAgIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5feW95byA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3lveW87XG4gICAgfTtcblxuICAgIF9wcm90by5zZWVrID0gZnVuY3Rpb24gc2Vlayhwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydChpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5wbGF5ID0gZnVuY3Rpb24gcGxheShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCksIHN1cHByZXNzRXZlbnRzKTtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2VkKHRydWUpLnBhdXNlZChmYWxzZSk7XG4gICAgfTtcblxuICAgIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgIGF0VGltZSAhPSBudWxsICYmIHRoaXMuc2VlayhhdFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gICAgfTtcblxuICAgIF9wcm90by5yZXZlcnNlZCA9IGZ1bmN0aW9uIHJldmVyc2VkKHZhbHVlKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAhIXZhbHVlICE9PSB0aGlzLnJldmVyc2VkKCkgJiYgdGhpcy50aW1lU2NhbGUoLXRoaXMuX3J0cyB8fCAodmFsdWUgPyAtX3RpbnlOdW0gOiAwKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgICAgdGhpcy5faW5pdHRlZCA9IHRoaXMuX2FjdCA9IDA7XG4gICAgICB0aGlzLl96VGltZSA9IC1fdGlueU51bTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcCxcbiAgICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICAgIHJhd1RpbWU7XG4gICAgICByZXR1cm4gISEoIXBhcmVudCB8fCB0aGlzLl90cyAmJiB0aGlzLl9pbml0dGVkICYmIHBhcmVudC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gcGFyZW50LnJhd1RpbWUodHJ1ZSkpID49IHN0YXJ0ICYmIHJhd1RpbWUgPCB0aGlzLmVuZFRpbWUodHJ1ZSkgLSBfdGlueU51bSk7XG4gICAgfTtcblxuICAgIF9wcm90by5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24gZXZlbnRDYWxsYmFjayh0eXBlLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgICB2YXIgdmFycyA9IHRoaXMudmFycztcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICBkZWxldGUgdmFyc1t0eXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXJzW3R5cGVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgcGFyYW1zICYmICh2YXJzW3R5cGUgKyBcIlBhcmFtc1wiXSA9IHBhcmFtcyk7XG4gICAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFyc1t0eXBlXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIGYgPSBfaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IF9wYXNzVGhyb3VnaCxcbiAgICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgICAgdmFyIF90aGVuID0gc2VsZi50aGVuO1xuICAgICAgICAgIHNlbGYudGhlbiA9IG51bGw7XG4gICAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgICAgcmVzb2x2ZShmKTtcbiAgICAgICAgICBzZWxmLnRoZW4gPSBfdGhlbjtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc2VsZi5faW5pdHRlZCAmJiBzZWxmLnRvdGFsUHJvZ3Jlc3MoKSA9PT0gMSAmJiBzZWxmLl90cyA+PSAwIHx8ICFzZWxmLl90VGltZSAmJiBzZWxmLl90cyA8IDApIHtcbiAgICAgICAgICBfcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX3Byb20gPSBfcmVzb2x2ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5raWxsID0gZnVuY3Rpb24ga2lsbCgpIHtcbiAgICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBBbmltYXRpb247XG4gIH0oKTtcblxuICBfc2V0RGVmYXVsdHMoQW5pbWF0aW9uLnByb3RvdHlwZSwge1xuICAgIF90aW1lOiAwLFxuICAgIF9zdGFydDogMCxcbiAgICBfZW5kOiAwLFxuICAgIF90VGltZTogMCxcbiAgICBfdER1cjogMCxcbiAgICBfZGlydHk6IDAsXG4gICAgX3JlcGVhdDogMCxcbiAgICBfeW95bzogZmFsc2UsXG4gICAgcGFyZW50OiBudWxsLFxuICAgIF9pbml0dGVkOiBmYWxzZSxcbiAgICBfckRlbGF5OiAwLFxuICAgIF90czogMSxcbiAgICBfZHA6IDAsXG4gICAgcmF0aW86IDAsXG4gICAgX3pUaW1lOiAtX3RpbnlOdW0sXG4gICAgX3Byb206IDAsXG4gICAgX3BzOiBmYWxzZSxcbiAgICBfcnRzOiAxXG4gIH0pO1xuXG4gIHZhciBUaW1lbGluZSA9IGZ1bmN0aW9uIChfQW5pbWF0aW9uKSB7XG4gICAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gICAgZnVuY3Rpb24gVGltZWxpbmUodmFycywgdGltZSkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHZhcnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfQW5pbWF0aW9uLmNhbGwodGhpcywgdmFycywgdGltZSkgfHwgdGhpcztcbiAgICAgIF90aGlzLmxhYmVscyA9IHt9O1xuICAgICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgICBfdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAhIXZhcnMuYXV0b1JlbW92ZUNoaWxkcmVuO1xuICAgICAgX3RoaXMuX3NvcnQgPSBfaXNOb3RGYWxzZSh2YXJzLnNvcnRDaGlsZHJlbik7XG4gICAgICBfdGhpcy5wYXJlbnQgJiYgX3Bvc3RBZGRDaGVja3MoX3RoaXMucGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8yLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMCwgdGhpcyksIF9wYXJzZVBvc2l0aW9uKHRoaXMsIF9pc051bWJlcih2YXJzKSA/IGFyZ3VtZW50c1szXSA6IHBvc2l0aW9uKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAxLCB0aGlzKSwgX3BhcnNlUG9zaXRpb24odGhpcywgX2lzTnVtYmVyKHZhcnMpID8gYXJndW1lbnRzWzNdIDogcG9zaXRpb24pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzLCBwb3NpdGlvbikge1xuICAgICAgbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAyLCB0aGlzKSwgX3BhcnNlUG9zaXRpb24odGhpcywgX2lzTnVtYmVyKGZyb21WYXJzKSA/IGFyZ3VtZW50c1s0XSA6IHBvc2l0aW9uKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcbiAgICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuY2FsbCA9IGZ1bmN0aW9uIGNhbGwoY2FsbGJhY2ssIHBhcmFtcywgcG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zKSwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgICB2YXJzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICB2YXJzLnN0YWdnZXIgPSB2YXJzLnN0YWdnZXIgfHwgc3RhZ2dlcjtcbiAgICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgICB2YXJzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlQWxsUGFyYW1zO1xuICAgICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgICAgdmFycy5ydW5CYWNrd2FyZHMgPSAxO1xuICAgICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh2YXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5zdGFnZ2VyRnJvbVRvID0gZnVuY3Rpb24gc3RhZ2dlckZyb21Ubyh0YXJnZXRzLCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgICBfaW5oZXJpdERlZmF1bHRzKHRvVmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodG9WYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICAgIHRUaW1lID0gdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIHRvdGFsVGltZSA+IHREdXIgLSBfdGlueU51bSAmJiB0b3RhbFRpbWUgPj0gMCA/IHREdXIgOiB0b3RhbFRpbWUgPCBfdGlueU51bSA/IDAgOiB0b3RhbFRpbWUsXG4gICAgICAgICAgY3Jvc3NpbmdTdGFydCA9IHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCAmJiAodGhpcy5faW5pdHRlZCB8fCAhZHVyKSxcbiAgICAgICAgICB0aW1lLFxuICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgIG5leHQsXG4gICAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgICAgcHJldlBhdXNlZCxcbiAgICAgICAgICBwYXVzZVR3ZWVuLFxuICAgICAgICAgIHRpbWVTY2FsZSxcbiAgICAgICAgICBwcmV2U3RhcnQsXG4gICAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgICB5b3lvLFxuICAgICAgICAgIGlzWW95bztcblxuICAgICAgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCBmb3JjZSB8fCBjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSAmJiBkdXIpIHtcbiAgICAgICAgICB0VGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICAgIHRpbWVTY2FsZSA9IHRoaXMuX3RzO1xuICAgICAgICBwcmV2UGF1c2VkID0gIXRpbWVTY2FsZTtcblxuICAgICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICAgIGR1ciB8fCAocHJldlRpbWUgPSB0aGlzLl96VGltZSk7XG4gICAgICAgICAgKHRvdGFsVGltZSB8fCAhc3VwcHJlc3NFdmVudHMpICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgICAgeW95byA9IHRoaXMuX3lveW87XG4gICAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID0gX3JvdW5kKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuICAgICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgKHByZXZJdGVyYXRpb24gPSBpdGVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHlveW8gJiYgaXRlcmF0aW9uICYgMSkge1xuICAgICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICAgIGRvZXNXcmFwID0gcmV3aW5kaW5nID09PSAoeW95byAmJiBpdGVyYXRpb24gJiAxKTtcbiAgICAgICAgICAgIGl0ZXJhdGlvbiA8IHByZXZJdGVyYXRpb24gJiYgKHJld2luZGluZyA9ICFyZXdpbmRpbmcpO1xuICAgICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogZHVyO1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IDE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSB8fCAoaXNZb3lvID8gMCA6IF9yb3VuZChpdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uKSksIHN1cHByZXNzRXZlbnRzLCAhZHVyKS5fbG9jayA9IDA7XG4gICAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICh0aGlzLmludmFsaWRhdGUoKS5fbG9jayA9IDEpO1xuXG4gICAgICAgICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUgfHwgcHJldlBhdXNlZCAhPT0gIXRoaXMuX3RzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkdXIgPSB0aGlzLl9kdXI7XG4gICAgICAgICAgICB0RHVyID0gdGhpcy5fdER1cjtcblxuICAgICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvY2sgPSAyO1xuICAgICAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IGR1ciA6IC0wLjAwMDE7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZSh0aGlzLCBpc1lveW8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9oYXNQYXVzZSAmJiAhdGhpcy5fZm9yY2luZyAmJiB0aGlzLl9sb2NrIDwgMikge1xuICAgICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZChwcmV2VGltZSksIF9yb3VuZCh0aW1lKSk7XG5cbiAgICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgICAgdFRpbWUgLT0gdGltZSAtICh0aW1lID0gcGF1c2VUd2Vlbi5fc3RhcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlO1xuXG4gICAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICAgIHRoaXMuX2luaXR0ZWQgPSAxO1xuICAgICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgICAgIHByZXZUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgICFwcmV2VGltZSAmJiAodGltZSB8fCAhZHVyICYmIHRvdGFsVGltZSA+PSAwKSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGltZSA+PSBwcmV2VGltZSAmJiB0b3RhbFRpbWUgPj0gMCkge1xuICAgICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSAtX3RpbnlOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICAgIHZhciBhZGp1c3RlZFRpbWUgPSB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZTtcblxuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgYWRqdXN0ZWRUaW1lIDw9IGNoaWxkLl9lbmQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7XG5cbiAgICAgICAgICAgIF9zZXRFbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSB8fCAhdFRpbWUgJiYgcHJldlRpbWUpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0IHx8IE1hdGguYWJzKHRpbWVTY2FsZSkgIT09IE1hdGguYWJzKHRoaXMuX3RzKSkgaWYgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpO1xuXG4gICAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIF9pc051bWJlcihwb3NpdGlvbikgfHwgKHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcblxuICAgICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMYWJlbChjaGlsZCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgICB0d2VlbnMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgICB9XG5cbiAgICAgIHZhciBhID0gW10sXG4gICAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgICB0d2VlbnMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBuZXN0ZWQgJiYgYS5wdXNoLmFwcGx5KGEsIGNoaWxkLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgICBpID0gYW5pbWF0aW9ucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtpbGxUd2VlbnNPZihjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZChfdGlja2VyLnRpbWUgLSAodGhpcy5fdHMgPiAwID8gX3RvdGFsVGltZTIgLyB0aGlzLl90cyA6ICh0aGlzLnRvdGFsRHVyYXRpb24oKSAtIF90b3RhbFRpbWUyKSAvIC10aGlzLl90cykpO1xuICAgICAgfVxuXG4gICAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgICB0aGlzLl9mb3JjaW5nID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmFkZExhYmVsID0gZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwsIHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgICAgdmFyIHQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjayB8fCBfZW1wdHlGdW5jLCBwYXJhbXMpO1xuICAgICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgdCwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLl9zdGFydCA9PT0gcG9zaXRpb24gJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcbiAgICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgICAgdmFyIGEgPSBbXSxcbiAgICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICAgIGlzR2xvYmFsVGltZSA9IF9pc051bWJlcihvbmx5QWN0aXZlKSxcbiAgICAgICAgICBjaGlsZHJlbjtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3ZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIHR3ZWVuID0gVHdlZW4udG8odGwsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICBsYXp5OiBmYWxzZSxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgdGltZTogZW5kVGltZSxcbiAgICAgICAgb3ZlcndyaXRlOiBcImF1dG9cIixcbiAgICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgICAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICAgICAgICB0bC5wYXVzZSgpO1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSB0bC5fdGltZSkgLyB0bC50aW1lU2NhbGUoKSk7XG4gICAgICAgICAgdHdlZW4uX2R1ciAhPT0gZHVyYXRpb24gJiYgX3NldER1cmF0aW9uKHR3ZWVuLCBkdXJhdGlvbiwgMCwgMSkucmVuZGVyKHR3ZWVuLl90aW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBfb25TdGFydCAmJiBfb25TdGFydC5hcHBseSh0d2Vlbiwgb25TdGFydFBhcmFtcyB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHZhcnMpKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVJlbmRlciA/IHR3ZWVuLnJlbmRlcigwKSA6IHR3ZWVuO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24gdHdlZW5Gcm9tVG8oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIHN0YXJ0QXQ6IHtcbiAgICAgICAgICB0aW1lOiBfcGFyc2VQb3NpdGlvbih0aGlzLCBmcm9tUG9zaXRpb24pXG4gICAgICAgIH1cbiAgICAgIH0sIHZhcnMpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZWNlbnQgPSBmdW5jdGlvbiByZWNlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVjZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8yLm5leHRMYWJlbCA9IGZ1bmN0aW9uIG5leHRMYWJlbChhZnRlclRpbWUpIHtcbiAgICAgIGlmIChhZnRlclRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBhZnRlclRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYWZ0ZXJUaW1lKSk7XG4gICAgfTtcblxuICAgIF9wcm90bzIucHJldmlvdXNMYWJlbCA9IGZ1bmN0aW9uIHByZXZpb3VzTGFiZWwoYmVmb3JlVGltZSkge1xuICAgICAgaWYgKGJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBiZWZvcmVUaW1lID0gdGhpcy5fdGltZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGJlZm9yZVRpbWUpLCAxKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbiBjdXJyZW50TGFiZWwodmFsdWUpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKSA6IHRoaXMucHJldmlvdXNMYWJlbCh0aGlzLl90aW1lICsgX3RpbnlOdW0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbiBzaGlmdENoaWxkcmVuKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLmxhYmVscyxcbiAgICAgICAgICBwO1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgICAgY2hpbGQuX3N0YXJ0ICs9IGFtb3VudDtcbiAgICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGp1c3RMYWJlbHMpIHtcbiAgICAgICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgICAgbGFiZWxzW3BdICs9IGFtb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLmludmFsaWRhdGUoKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGluY2x1ZGVMYWJlbHMpIHtcbiAgICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5jbHVkZUxhYmVscyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICAgIG5leHQ7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kcCAmJiAodGhpcy5fdGltZSA9IHRoaXMuX3RUaW1lID0gdGhpcy5fcFRpbWUgPSAwKTtcbiAgICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgICBwcmV2LFxuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIHBhcmVudDtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9kaXJ0eSkge1xuICAgICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBwcmV2ID0gY2hpbGQuX3ByZXY7XG4gICAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICAgIGlmIChzdGFydCA+IHByZXZTdGFydCAmJiBzZWxmLl9zb3J0ICYmIGNoaWxkLl90cyAmJiAhc2VsZi5fbG9jaykge1xuICAgICAgICAgICAgc2VsZi5fbG9jayA9IDE7XG4gICAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldlN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgICAgaWYgKCFwYXJlbnQgJiYgIXNlbGYuX2RwIHx8IHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgICAgc2VsZi5fdFRpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgICAgcHJldlN0YXJ0ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgICAgY2hpbGQgPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgICAgc2VsZi5fZGlydHkgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgICB9O1xuXG4gICAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgICAgX2xhenlTYWZlUmVuZGVyKF9nbG9iYWxUaW1lbGluZSwgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZSwgX2dsb2JhbFRpbWVsaW5lKSk7XG5cbiAgICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aWNrZXIuZnJhbWUgPj0gX25leHRHQ0ZyYW1lKSB7XG4gICAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLl90cykgaWYgKF9jb25maWcuYXV0b1NsZWVwICYmIF90aWNrZXIuX2xpc3RlbmVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBUaW1lbGluZTtcbiAgfShBbmltYXRpb24pO1xuXG4gIF9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgICBfbG9jazogMCxcbiAgICBfaGFzUGF1c2U6IDAsXG4gICAgX2ZvcmNpbmc6IDBcbiAgfSk7XG5cbiAgdmFyIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gICAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZywgbnVsbCwgc2V0dGVyKSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzdGFydE51bXMsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIGNodW5rLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgaGFzUmFuZG9tLFxuICAgICAgICBhO1xuICAgIHB0LmIgPSBzdGFydDtcbiAgICBwdC5lID0gZW5kO1xuICAgIHN0YXJ0ICs9IFwiXCI7XG4gICAgZW5kICs9IFwiXCI7XG5cbiAgICBpZiAoaGFzUmFuZG9tID0gfmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nRmlsdGVyKSB7XG4gICAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7XG4gICAgICBzdGFydCA9IGFbMF07XG4gICAgICBlbmQgPSBhWzFdO1xuICAgIH1cblxuICAgIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICAgIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZE51bSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDtcbiAgICAgICAgcHQuX3B0ID0ge1xuICAgICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgICAgYzogZW5kTnVtLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyBwYXJzZUZsb2F0KGVuZE51bS5zdWJzdHIoMikpICogKGVuZE51bS5jaGFyQXQoMCkgPT09IFwiLVwiID8gLTEgOiAxKSA6IHBhcnNlRmxvYXQoZW5kTnVtKSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICAgIH07XG4gICAgICAgIGluZGV4ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAubGFzdEluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7XG4gICAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkgfHwgaGFzUmFuZG9tKSB7XG4gICAgICBwdC5lID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLl9wdCA9IHB0O1xuICAgIHJldHVybiBwdDtcbiAgfSxcbiAgICAgIF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgaW5kZXgsIHRhcmdldHMsIG1vZGlmaWVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAgIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgICBwYXJzZWRTdGFydCA9IHN0YXJ0ICE9PSBcImdldFwiID8gc3RhcnQgOiAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IGN1cnJlbnRWYWx1ZSA6IGZ1bmNQYXJhbSA/IHRhcmdldFtwcm9wLmluZGV4T2YoXCJzZXRcIikgfHwgIV9pc0Z1bmN0aW9uKHRhcmdldFtcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKSA/IHByb3AgOiBcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKGZ1bmNQYXJhbSkgOiB0YXJnZXRbcHJvcF0oKSxcbiAgICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgICBwdDtcblxuICAgIGlmIChfaXNTdHJpbmcoZW5kKSkge1xuICAgICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICAgIGVuZCA9IHBhcnNlRmxvYXQocGFyc2VkU3RhcnQpICsgcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSAqIChlbmQuY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZFN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VkU3RhcnQgKiBlbmQpKSB7XG4gICAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgICBmdW5jUGFyYW0gJiYgKHB0LmZwID0gZnVuY1BhcmFtKTtcbiAgICAgICAgbW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHRoaXMsIHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgICAgfVxuXG4gICAgICAhY3VycmVudFZhbHVlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIF9taXNzaW5nUGx1Z2luKHByb3AsIGVuZCk7XG4gICAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICAgIH1cbiAgfSxcbiAgICAgIF9wcm9jZXNzVmFycyA9IGZ1bmN0aW9uIF9wcm9jZXNzVmFycyh2YXJzLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2Vlbikge1xuICAgIF9pc0Z1bmN0aW9uKHZhcnMpICYmICh2YXJzID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG5cbiAgICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgICAgcmV0dXJuIF9pc1N0cmluZyh2YXJzKSA/IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiB2YXJzO1xuICAgIH1cblxuICAgIHZhciBjb3B5ID0ge30sXG4gICAgICAgIHA7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcHk7XG4gIH0sXG4gICAgICBfY2hlY2tQbHVnaW4gPSBmdW5jdGlvbiBfY2hlY2tQbHVnaW4ocHJvcGVydHksIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gICAgdmFyIHBsdWdpbiwgcHQsIHB0TG9va3VwLCBpO1xuXG4gICAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICBpZiAodHdlZW4gIT09IF9xdWlja1R3ZWVuKSB7XG4gICAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgcHRMb29rdXBbcGx1Z2luLl9wcm9wc1tpXV0gPSBwdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW47XG4gIH0sXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbixcbiAgICAgIF9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKSB7XG4gICAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgICBlYXNlID0gdmFycy5lYXNlLFxuICAgICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgbGF6eSA9IHZhcnMubGF6eSxcbiAgICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICAgIGNhbGxiYWNrU2NvcGUgPSB2YXJzLmNhbGxiYWNrU2NvcGUsXG4gICAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICAgIGtleWZyYW1lcyA9IHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgICBwcmV2U3RhcnRBdCA9IHR3ZWVuLl9zdGFydEF0LFxuICAgICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgICAgZnVsbFRhcmdldHMgPSBwYXJlbnQgJiYgcGFyZW50LmRhdGEgPT09IFwibmVzdGVkXCIgPyBwYXJlbnQucGFyZW50Ll90YXJnZXRzIDogdGFyZ2V0cyxcbiAgICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgICBjbGVhblZhcnMsXG4gICAgICAgIGksXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgICBnc0RhdGEsXG4gICAgICAgIGhhcm5lc3MsXG4gICAgICAgIHBsdWdpbixcbiAgICAgICAgcHRMb29rdXAsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBoYXJuZXNzVmFycyxcbiAgICAgICAgb3ZlcndyaXR0ZW47XG4gICAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICAgIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gICAgdHdlZW4uX3lFYXNlID0geW95b0Vhc2UgPyBfaW52ZXJ0RWFzZShfcGFyc2VFYXNlKHlveW9FYXNlID09PSB0cnVlID8gZWFzZSA6IHlveW9FYXNlLCBfZGVmYXVsdHMuZWFzZSkpIDogMDtcblxuICAgIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgICB0d2Vlbi5feUVhc2UgPSB0d2Vlbi5fZWFzZTtcbiAgICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0bCkge1xuICAgICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdO1xuICAgICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuICAgICAgcHJldlN0YXJ0QXQgJiYgcHJldlN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKS5raWxsKCk7XG5cbiAgICAgIGlmIChzdGFydEF0KSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgZGF0YTogXCJpc1N0YXJ0XCIsXG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IGNhbGxiYWNrU2NvcGUsXG4gICAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgICB9LCBzdGFydEF0KSkpO1xuXG4gICAgICAgIGlmIChpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgIGF1dG9SZXZlcnQgfHwgKHR3ZWVuLl9zdGFydEF0ID0gMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkdXIgJiYgISh0aW1lIDwgMCAmJiBwcmV2U3RhcnRBdCkpIHtcbiAgICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgICAgICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTtcbiAgICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTtcblxuICAgICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLl9zdGFydEF0LCBfdGlueU51bSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgPSAwO1xuICAgICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgICAgX2xhenlMb29rdXBbZ3NEYXRhLmlkXSAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSgwKSk7XG5cbiAgICAgICAgICBvdmVyd3JpdHRlbiA9ICF0d2Vlbi5wYXJlbnQ7XG4gICAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdHdlZW4uX3B0ICYmIGxhenkgJiYgKF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gPSAxKTtcbiAgICAgIH1cblxuICAgICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgICB0d2Vlbi5fb25Jbml0ICYmIHR3ZWVuLl9vbkluaXQodHdlZW4pO1xuICAgIH1cblxuICAgIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7XG4gICAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gICAgdHdlZW4uX2luaXR0ZWQgPSAoIXR3ZWVuLl9vcCB8fCB0d2Vlbi5fcHQpICYmICFvdmVyd3JpdHRlbjtcbiAgfSxcbiAgICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICAgIHZhciBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMCxcbiAgICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICAgIGNvcHksXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIGFsaWFzZXM7XG5cbiAgICBpZiAoIXByb3BlcnR5QWxpYXNlcykge1xuICAgICAgcmV0dXJuIHZhcnM7XG4gICAgfVxuXG4gICAgY29weSA9IF9tZXJnZSh7fSwgdmFycyk7XG5cbiAgICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICAgIGFsaWFzZXMgPSBwcm9wZXJ0eUFsaWFzZXNbcF0uc3BsaXQoXCIsXCIpO1xuICAgICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNvcHlbYWxpYXNlc1tpXV0gPSBjb3B5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcHk7XG4gIH0sXG4gICAgICBfcGFyc2VGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodmFsdWUsIHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbCh0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgfnZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpID8gX3JlcGxhY2VSYW5kb20odmFsdWUpIDogdmFsdWU7XG4gIH0sXG4gICAgICBfc3RhZ2dlclR3ZWVuUHJvcHMgPSBfY2FsbGJhY2tOYW1lcyArIFwicmVwZWF0LHJlcGVhdERlbGF5LHlveW8scmVwZWF0UmVmcmVzaCx5b3lvRWFzZVwiLFxuICAgICAgX3N0YWdnZXJQcm9wc1RvU2tpcCA9IChfc3RhZ2dlclR3ZWVuUHJvcHMgKyBcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIpLnNwbGl0KFwiLFwiKTtcblxuICB2YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgICBfaW5oZXJpdHNMb29zZShUd2VlbiwgX0FuaW1hdGlvbjIpO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgdGltZSwgc2tpcEluaGVyaXQpIHtcbiAgICAgIHZhciBfdGhpczM7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFycyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aW1lLmR1cmF0aW9uID0gdmFycztcbiAgICAgICAgdmFycyA9IHRpbWU7XG4gICAgICAgIHRpbWUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycyksIHRpbWUpIHx8IHRoaXM7XG4gICAgICB2YXIgX3RoaXMzJHZhcnMgPSBfdGhpczMudmFycyxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3RoaXMzJHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAgICBrZXlmcmFtZXMgPSBfdGhpczMkdmFycy5rZXlmcmFtZXMsXG4gICAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgICB5b3lvRWFzZSA9IF90aGlzMyR2YXJzLnlveW9FYXNlLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzMy5wYXJlbnQsXG4gICAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgICAgdGwsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBjb3B5LFxuICAgICAgICAgIGwsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgICAgc3RhZ2dlckZ1bmMsXG4gICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdO1xuICAgICAgX3RoaXMzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG5cbiAgICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgICB0bCA9IF90aGlzMy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gICAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRsLmtpbGwoKTtcbiAgICAgICAgdGwucGFyZW50ID0gdGwuX2RwID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuICAgICAgICB0bC5fc3RhcnQgPSAwO1xuXG4gICAgICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgICAgICBfc2V0RGVmYXVsdHModGwudmFycy5kZWZhdWx0cywge1xuICAgICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRsLnRvKHBhcnNlZFRhcmdldHMsIGZyYW1lLCBcIj5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuICAgICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciA/IGRpc3RyaWJ1dGUoc3RhZ2dlcikgOiBfZW1wdHlGdW5jO1xuXG4gICAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgICAgaWYgKH5fc3RhZ2dlclR3ZWVuUHJvcHMuaW5kZXhPZihwKSkge1xuICAgICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIGlmIChfc3RhZ2dlclByb3BzVG9Ta2lwLmluZGV4T2YocCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29weVtwXSA9IHZhcnNbcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlICYmIF9tZXJnZShjb3B5LCBzdGFnZ2VyVmFyc1RvTWVyZ2UpO1xuICAgICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTtcbiAgICAgICAgICAgIGNvcHkuZHVyYXRpb24gPSArX3BhcnNlRnVuY09yU3RyaW5nKGR1cmF0aW9uLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cyk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgICAgX3RoaXMzLl9zdGFydCArPSBkZWxheTtcbiAgICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLnRvKGN1clRhcmdldCwgY29weSwgc3RhZ2dlckZ1bmMoaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcykge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ICYmIF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKTtcblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmQocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICAgIF90aGlzMy5fdFRpbWUgPSAtX3RpbnlOdW07XG5cbiAgICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgICAgcmV0dXJuIF90aGlzMztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA+IHREdXIgLSBfdGlueU51bSAmJiB0b3RhbFRpbWUgPj0gMCA/IHREdXIgOiB0b3RhbFRpbWUgPCBfdGlueU51bSA/IDAgOiB0b3RhbFRpbWUsXG4gICAgICAgICAgdGltZSxcbiAgICAgICAgICBwdCxcbiAgICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICAgIGlzWW95byxcbiAgICAgICAgICByYXRpbyxcbiAgICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgICB5b3lvRWFzZTtcblxuICAgICAgaWYgKCFkdXIpIHtcbiAgICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8ICF0b3RhbFRpbWUgfHwgZm9yY2UgfHwgIXRoaXMuX2luaXR0ZWQgJiYgdGhpcy5fdFRpbWUgfHwgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA9IF9yb3VuZCh0VGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc1lveW8gPSB0aGlzLl95b3lvICYmIGl0ZXJhdGlvbiAmIDE7XG5cbiAgICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAodGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlICYmIHRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWVsaW5lICYmIHRoaXMuX3lFYXNlICYmIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kKGN5Y2xlRHVyYXRpb24gKiBpdGVyYXRpb24pLCB0cnVlKS5pbnZhbGlkYXRlKCkuX2xvY2sgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgICAgICAgdGhpcy5fdFRpbWUgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICAgIGlmICghdGhpcy5fYWN0ICYmIHRoaXMuX3RzKSB7XG4gICAgICAgICAgdGhpcy5fYWN0ID0gMTtcbiAgICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9ICh5b3lvRWFzZSB8fCB0aGlzLl9lYXNlKSh0aW1lIC8gZHVyKTtcblxuICAgICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuICAgICAgICBwdCA9IHRoaXMuX3B0O1xuXG4gICAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiByYXRpbywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKTtcblxuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVwZWF0ICYmIGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgICAgIGlmICgodFRpbWUgPT09IHRoaXMuX3REdXIgfHwgIXRUaW1lKSAmJiB0aGlzLl90VGltZSA9PT0gdFRpbWUpIHtcbiAgICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpO1xuXG4gICAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgICB9O1xuXG4gICAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9zdGFydEF0ID0gdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9sYXp5ID0gdGhpcy5yYXRpbyA9IDA7XG4gICAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoKTtcbiAgICAgIHJldHVybiBfQW5pbWF0aW9uMi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBfcHJvdG8zLmtpbGwgPSBmdW5jdGlvbiBraWxsKHRhcmdldHMsIHZhcnMpIHtcbiAgICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFyZ2V0cyAmJiAoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gX2ludGVycnVwdCh0aGlzKSA6IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICAgIHZhciB0RHVyID0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCk7XG4gICAgICAgIHRoaXMudGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHZhcnMsIF9vdmVyd3JpdGluZ1R3ZWVuICYmIF9vdmVyd3JpdGluZ1R3ZWVuLnZhcnMub3ZlcndyaXRlICE9PSB0cnVlKS5fZmlyc3QgfHwgX2ludGVycnVwdCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJzZWRUYXJnZXRzID0gdGhpcy5fdGFyZ2V0cyxcbiAgICAgICAgICBraWxsaW5nVGFyZ2V0cyA9IHRhcmdldHMgPyB0b0FycmF5KHRhcmdldHMpIDogcGFyc2VkVGFyZ2V0cyxcbiAgICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgICBmaXJzdFBUID0gdGhpcy5fcHQsXG4gICAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wcyxcbiAgICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBwdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgICAgdmFycyA9PT0gXCJhbGxcIiAmJiAodGhpcy5fcHQgPSAwKTtcbiAgICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vcCA9IHRoaXMuX29wIHx8IFtdO1xuXG4gICAgICBpZiAodmFycyAhPT0gXCJhbGxcIikge1xuICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgcCA9IHt9O1xuXG4gICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXJzID0gcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhcnMgPSBfYWRkQWxpYXNlc1RvVmFycyhwYXJzZWRUYXJnZXRzLCB2YXJzKTtcbiAgICAgIH1cblxuICAgICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlmICh+a2lsbGluZ1RhcmdldHMuaW5kZXhPZihwYXJzZWRUYXJnZXRzW2ldKSkge1xuICAgICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICAgIGlmICh2YXJzID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBvdmVyd3JpdHRlblByb3BzW2ldID0gdmFycztcbiAgICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSB7fTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICAgIHByb3BzID0gdmFycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHB0ID0gY3VyTG9va3VwICYmIGN1ckxvb2t1cFtwXTtcblxuICAgICAgICAgICAgaWYgKHB0KSB7XG4gICAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VyT3ZlcndyaXRlUHJvcHMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0dGVkICYmICF0aGlzLl9wdCAmJiBmaXJzdFBUICYmIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4udG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzKSB7XG4gICAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMpIHtcbiAgICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDEpKTtcbiAgICB9O1xuXG4gICAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICAgIHJldHVybiBuZXcgVHdlZW4oY2FsbGJhY2ssIDAsIHtcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgbGF6eTogZmFsc2UsXG4gICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgICAgb25Db21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgICBjYWxsYmFja1Njb3BlOiBzY29wZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzKSB7XG4gICAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAyKSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICAgIHZhcnMucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMpO1xuICAgIH07XG5cbiAgICBUd2Vlbi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xuICB9KEFuaW1hdGlvbik7XG5cbiAgX3NldERlZmF1bHRzKFR3ZWVuLnByb3RvdHlwZSwge1xuICAgIF90YXJnZXRzOiBbXSxcbiAgICBfbGF6eTogMCxcbiAgICBfc3RhcnRBdDogMCxcbiAgICBfb3A6IDAsXG4gICAgX29uSW5pdDogMFxuICB9KTtcblxuICBfZm9yRWFjaE5hbWUoXCJzdGFnZ2VyVG8sc3RhZ2dlckZyb20sc3RhZ2dlckZyb21Ub1wiLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIFR3ZWVuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKCksXG4gICAgICAgICAgcGFyYW1zID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgcGFyYW1zLnNwbGljZShuYW1lID09PSBcInN0YWdnZXJGcm9tVG9cIiA/IDUgOiA0LCAwLCAwKTtcbiAgICAgIHJldHVybiB0bFtuYW1lXS5hcHBseSh0bCwgcGFyYW1zKTtcbiAgICB9O1xuICB9KTtcblxuICB2YXIgX3NldHRlclBsYWluID0gZnVuY3Rpb24gX3NldHRlclBsYWluKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSxcbiAgICAgIF9zZXR0ZXJGdW5jID0gZnVuY3Rpb24gX3NldHRlckZ1bmModGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSh2YWx1ZSk7XG4gIH0sXG4gICAgICBfc2V0dGVyRnVuY1dpdGhQYXJhbSA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jV2l0aFBhcmFtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0oZGF0YS5mcCwgdmFsdWUpO1xuICB9LFxuICAgICAgX3NldHRlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9zZXR0ZXJBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9LFxuICAgICAgX2dldFNldHRlciA9IGZ1bmN0aW9uIF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfaXNGdW5jdGlvbih0YXJnZXRbcHJvcGVydHldKSA/IF9zZXR0ZXJGdW5jIDogX2lzVW5kZWZpbmVkKHRhcmdldFtwcm9wZXJ0eV0pICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUgPyBfc2V0dGVyQXR0cmlidXRlIDogX3NldHRlclBsYWluO1xuICB9LFxuICAgICAgX3JlbmRlclBsYWluID0gZnVuY3Rpb24gX3JlbmRlclBsYWluKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCwgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCAhIShkYXRhLnMgKyBkYXRhLmMgKiByYXRpbyksIGRhdGEpO1xuICB9LFxuICAgICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICAgIHZhciBwdCA9IGRhdGEuX3B0LFxuICAgICAgICBzID0gXCJcIjtcblxuICAgIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgICBzID0gZGF0YS5iO1xuICAgIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgICBzID0gZGF0YS5lO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcyA9IHB0LnAgKyAocHQubSA/IHB0Lm0ocHQucyArIHB0LmMgKiByYXRpbykgOiBNYXRoLnJvdW5kKChwdC5zICsgcHQuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwKSArIHM7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHMgKz0gZGF0YS5jO1xuICAgIH1cblxuICAgIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBzLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3JlbmRlclByb3BUd2VlbnMocmF0aW8sIGRhdGEpIHtcbiAgICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cbiAgfSxcbiAgICAgIF9hZGRQbHVnaW5Nb2RpZmllciA9IGZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgICAgcHQucCA9PT0gcHJvcGVydHkgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQpO1xuICAgICAgcHQgPSBuZXh0O1xuICAgIH1cbiAgfSxcbiAgICAgIF9raWxsUHJvcFR3ZWVuc09mID0gZnVuY3Rpb24gX2tpbGxQcm9wVHdlZW5zT2YocHJvcGVydHkpIHtcbiAgICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nLFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBuZXh0ID0gcHQuX25leHQ7XG5cbiAgICAgIGlmIChwdC5wID09PSBwcm9wZXJ0eSAmJiAhcHQub3AgfHwgcHQub3AgPT09IHByb3BlcnR5KSB7XG4gICAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgICB9IGVsc2UgaWYgKCFwdC5kZXApIHtcbiAgICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nID0gMTtcbiAgICAgIH1cblxuICAgICAgcHQgPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xuICB9LFxuICAgICAgX3NldHRlcldpdGhNb2RpZmllciA9IGZ1bmN0aW9uIF9zZXR0ZXJXaXRoTW9kaWZpZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbiAgfSxcbiAgICAgIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHBhcmVudCkge1xuICAgIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICAgIG5leHQsXG4gICAgICAgIHB0MixcbiAgICAgICAgZmlyc3QsXG4gICAgICAgIGxhc3Q7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICAgIHB0MiA9IGZpcnN0O1xuXG4gICAgICB3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG4gICAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkge1xuICAgICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBwdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHB0Ll9uZXh0ID0gcHQyKSB7XG4gICAgICAgIHB0Mi5fcHJldiA9IHB0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdCA9IHB0O1xuICAgICAgfVxuXG4gICAgICBwdCA9IG5leHQ7XG4gICAgfVxuXG4gICAgcGFyZW50Ll9wdCA9IGZpcnN0O1xuICB9O1xuXG4gIHZhciBQcm9wVHdlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgIHRoaXMucyA9IHN0YXJ0O1xuICAgICAgdGhpcy5jID0gY2hhbmdlO1xuICAgICAgdGhpcy5wID0gcHJvcDtcbiAgICAgIHRoaXMuciA9IHJlbmRlcmVyIHx8IF9yZW5kZXJQbGFpbjtcbiAgICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICAgIHRoaXMuc2V0ID0gc2V0dGVyIHx8IF9zZXR0ZXJQbGFpbjtcbiAgICAgIHRoaXMucHIgPSBwcmlvcml0eSB8fCAwO1xuICAgICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgIG5leHQuX3ByZXYgPSB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfcHJvdG80ID0gUHJvcFR3ZWVuLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgICB0aGlzLm1TZXQgPSB0aGlzLm1TZXQgfHwgdGhpcy5zZXQ7XG4gICAgICB0aGlzLnNldCA9IF9zZXR0ZXJXaXRoTW9kaWZpZXI7XG4gICAgICB0aGlzLm0gPSBmdW5jO1xuICAgICAgdGhpcy5tdCA9IHRhcmdldDtcbiAgICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3BUd2VlbjtcbiAgfSgpO1xuXG4gIF9mb3JFYWNoTmFtZShfY2FsbGJhY2tOYW1lcyArIFwicGFyZW50LGR1cmF0aW9uLGVhc2UsZGVsYXksb3ZlcndyaXRlLHJ1bkJhY2t3YXJkcyxzdGFydEF0LHlveW8saW1tZWRpYXRlUmVuZGVyLHJlcGVhdCxyZXBlYXREZWxheSxkYXRhLHBhdXNlZCxyZXZlcnNlZCxsYXp5LGNhbGxiYWNrU2NvcGUsc3RyaW5nRmlsdGVyLGlkLHlveW9FYXNlLHN0YWdnZXIsaW5oZXJpdCxyZXBlYXRSZWZyZXNoLGtleWZyYW1lcyxhdXRvUmV2ZXJ0LHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZ2xvYmFscy5Ud2Vlbk1heCA9IF9nbG9iYWxzLlR3ZWVuTGl0ZSA9IFR3ZWVuO1xuICBfZ2xvYmFscy5UaW1lbGluZUxpdGUgPSBfZ2xvYmFscy5UaW1lbGluZU1heCA9IFRpbWVsaW5lO1xuICBfZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgIHNvcnRDaGlsZHJlbjogZmFsc2UsXG4gICAgZGVmYXVsdHM6IF9kZWZhdWx0cyxcbiAgICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHNtb290aENoaWxkVGltaW5nOiB0cnVlXG4gIH0pO1xuICBfY29uZmlnLnN0cmluZ0ZpbHRlciA9IF9jb2xvclN0cmluZ0ZpbHRlcjtcbiAgdmFyIF9nc2FwID0ge1xuICAgIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfY3JlYXRlUGx1Z2luKGNvbmZpZyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRpbWVsaW5lOiBmdW5jdGlvbiB0aW1lbGluZSh2YXJzKSB7XG4gICAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICAgIH0sXG4gICAgZ2V0VHdlZW5zT2Y6IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7XG5cbiAgICAgIHZhciBnZXR0ZXIgPSBfZ2V0Q2FjaGUodGFyZ2V0IHx8IHt9KS5nZXQsXG4gICAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgICAgdW5pdCA9PT0gXCJuYXRpdmVcIiAmJiAodW5pdCA9IFwiXCIpO1xuICAgICAgcmV0dXJuICF0YXJnZXQgPyB0YXJnZXQgOiAhcHJvcGVydHkgPyBmdW5jdGlvbiAocHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgICB9IDogZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgICB9LFxuICAgIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgICB0YXJnZXQgPSB0b0FycmF5KHRhcmdldCk7XG5cbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gZ3NhcC5xdWlja1NldHRlcih0LCBwcm9wZXJ0eSwgdW5pdCk7XG4gICAgICAgIH0pLFxuICAgICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGkgPSBsO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgc2V0dGVyc1tpXSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSB0YXJnZXRbMF0gfHwge307XG5cbiAgICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgICAgICBwID0gY2FjaGUuaGFybmVzcyAmJiAoY2FjaGUuaGFybmVzcy5hbGlhc2VzIHx8IHt9KVtwcm9wZXJ0eV0gfHwgcHJvcGVydHksXG4gICAgICAgICAgc2V0dGVyID0gUGx1Z2luID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgICBfcXVpY2tUd2Vlbi5fcHQgPSAwO1xuICAgICAgICBwLmluaXQodGFyZ2V0LCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIF9xdWlja1R3ZWVuLCAwLCBbdGFyZ2V0XSk7XG4gICAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgICBfcXVpY2tUd2Vlbi5fcHQgJiYgX3JlbmRlclByb3BUd2VlbnMoMSwgX3F1aWNrVHdlZW4pO1xuICAgICAgfSA6IGNhY2hlLnNldCh0YXJnZXQsIHApO1xuXG4gICAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBzZXR0ZXIodGFyZ2V0LCBwLCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIGNhY2hlLCAxKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBpc1R3ZWVuaW5nOiBmdW5jdGlvbiBpc1R3ZWVuaW5nKHRhcmdldHMpIHtcbiAgICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgICB9LFxuICAgIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh2YWx1ZSkge1xuICAgICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICAgIHJldHVybiBfbWVyZ2VEZWVwKF9kZWZhdWx0cywgdmFsdWUgfHwge30pO1xuICAgIH0sXG4gICAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICAgIHJldHVybiBfbWVyZ2VEZWVwKF9jb25maWcsIHZhbHVlIHx8IHt9KTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lLFxuICAgICAgICAgIGVmZmVjdCA9IF9yZWYyLmVmZmVjdCxcbiAgICAgICAgICBwbHVnaW5zID0gX3JlZjIucGx1Z2lucyxcbiAgICAgICAgICBkZWZhdWx0cyA9IF9yZWYyLmRlZmF1bHRzLFxuICAgICAgICAgIGV4dGVuZFRpbWVsaW5lID0gX3JlZjIuZXh0ZW5kVGltZWxpbmU7XG4gICAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgICByZXR1cm4gcGx1Z2luTmFtZSAmJiAhX3BsdWdpbnNbcGx1Z2luTmFtZV0gJiYgIV9nbG9iYWxzW3BsdWdpbk5hbWVdICYmIF93YXJuKG5hbWUgKyBcIiBlZmZlY3QgcmVxdWlyZXMgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luLlwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgICByZXR1cm4gZWZmZWN0KHRvQXJyYXkodGFyZ2V0cyksIF9zZXREZWZhdWx0cyh2YXJzIHx8IHt9LCBkZWZhdWx0cyksIHRsKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgICBUaW1lbGluZS5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoX2VmZmVjdHNbbmFtZV0odGFyZ2V0cywgX2lzT2JqZWN0KHZhcnMpID8gdmFycyA6IChwb3NpdGlvbiA9IHZhcnMpICYmIHt9LCB0aGlzKSwgcG9zaXRpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgICAgX2Vhc2VNYXBbbmFtZV0gPSBfcGFyc2VFYXNlKGVhc2UpO1xuICAgIH0sXG4gICAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkgOiBfZWFzZU1hcDtcbiAgICB9LFxuICAgIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0QnlJZChpZCk7XG4gICAgfSxcbiAgICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgdmFycyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUodmFycyksXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgbmV4dDtcbiAgICAgIHRsLnNtb290aENoaWxkVGltaW5nID0gX2lzTm90RmFsc2UodmFycy5zbW9vdGhDaGlsZFRpbWluZyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5yZW1vdmUodGwpO1xuXG4gICAgICB0bC5fZHAgPSAwO1xuICAgICAgdGwuX3RpbWUgPSB0bC5fdFRpbWUgPSBfZ2xvYmFsVGltZWxpbmUuX3RpbWU7XG4gICAgICBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgICAgaWYgKGluY2x1ZGVEZWxheWVkQ2FsbHMgfHwgISghY2hpbGQuX2R1ciAmJiBjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuICYmIGNoaWxkLnZhcnMub25Db21wbGV0ZSA9PT0gY2hpbGQuX3RhcmdldHNbMF0pKSB7XG4gICAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuXG4gICAgICBfYWRkVG9UaW1lbGluZShfZ2xvYmFsVGltZWxpbmUsIHRsLCAwKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgdXRpbHM6IHtcbiAgICAgIHdyYXA6IHdyYXAsXG4gICAgICB3cmFwWW95bzogd3JhcFlveW8sXG4gICAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgICAgcmFuZG9tOiByYW5kb20sXG4gICAgICBzbmFwOiBzbmFwLFxuICAgICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgICBnZXRVbml0OiBnZXRVbml0LFxuICAgICAgY2xhbXA6IGNsYW1wLFxuICAgICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgICBwaXBlOiBwaXBlLFxuICAgICAgdW5pdGl6ZTogdW5pdGl6ZSxcbiAgICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICAgIHNodWZmbGU6IHNodWZmbGVcbiAgICB9LFxuICAgIGluc3RhbGw6IF9pbnN0YWxsLFxuICAgIGVmZmVjdHM6IF9lZmZlY3RzLFxuICAgIHRpY2tlcjogX3RpY2tlcixcbiAgICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICAgIHBsdWdpbnM6IF9wbHVnaW5zLFxuICAgIGdsb2JhbFRpbWVsaW5lOiBfZ2xvYmFsVGltZWxpbmUsXG4gICAgY29yZToge1xuICAgICAgUHJvcFR3ZWVuOiBQcm9wVHdlZW4sXG4gICAgICBnbG9iYWxzOiBfYWRkR2xvYmFsLFxuICAgICAgVHdlZW46IFR3ZWVuLFxuICAgICAgVGltZWxpbmU6IFRpbWVsaW5lLFxuICAgICAgQW5pbWF0aW9uOiBBbmltYXRpb24sXG4gICAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtOiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sXG4gICAgICBzdXBwcmVzc092ZXJ3cml0ZXM6IGZ1bmN0aW9uIHN1cHByZXNzT3ZlcndyaXRlcyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxkZWxheWVkQ2FsbCxzZXQsa2lsbFR3ZWVuc09mXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF9nc2FwW25hbWVdID0gVHdlZW5bbmFtZV07XG4gIH0pO1xuXG4gIF90aWNrZXIuYWRkKFRpbWVsaW5lLnVwZGF0ZVJvb3QpO1xuXG4gIF9xdWlja1R3ZWVuID0gX2dzYXAudG8oe30sIHtcbiAgICBkdXJhdGlvbjogMFxuICB9KTtcblxuICB2YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gICAgdmFyIHB0ID0gcGx1Z2luLl9wdDtcblxuICAgIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wICYmIHB0Lm9wICE9PSBwcm9wICYmIHB0LmZwICE9PSBwcm9wKSB7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBwdDtcbiAgfSxcbiAgICAgIF9hZGRNb2RpZmllcnMgPSBmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHR3ZWVuLCBtb2RpZmllcnMpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBwdDtcblxuICAgIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICAgIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgICBpZiAocHQgJiYgKHB0ID0gcHQuZCkpIHtcbiAgICAgICAgICBpZiAocHQuX3B0KSB7XG4gICAgICAgICAgICBwdCA9IF9nZXRQbHVnaW5Qcm9wVHdlZW4ocHQsIHApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHB0ICYmIHB0Lm1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyc1twXSwgdHdlZW4sIHRhcmdldHNbaV0sIHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAgICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcmF3VmFyczogMSxcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbikge1xuICAgICAgICB0d2Vlbi5fb25Jbml0ID0gZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGVtcFtuYW1lXSA9IDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIHRlbXBbcF0gPSBtb2RpZmllcih2YXJzW3BdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZ3NhcCA9IF9nc2FwLnJlZ2lzdGVyUGx1Z2luKHtcbiAgICBuYW1lOiBcImF0dHJcIixcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgICB2YXIgcCwgcHQ7XG5cbiAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodGFyZ2V0LmdldEF0dHJpYnV0ZShwKSB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgICAgcHQgJiYgKHB0Lm9wID0gcCk7XG5cbiAgICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiBcImVuZEFycmF5XCIsXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDtcbiAgVHdlZW4udmVyc2lvbiA9IFRpbWVsaW5lLnZlcnNpb24gPSBnc2FwLnZlcnNpb24gPSBcIjMuNi4wXCI7XG4gIF9jb3JlUmVhZHkgPSAxO1xuXG4gIGlmIChfd2luZG93RXhpc3RzKCkpIHtcbiAgICBfd2FrZSgpO1xuICB9XG5cbiAgdmFyIFBvd2VyMCA9IF9lYXNlTWFwLlBvd2VyMCxcbiAgICAgIFBvd2VyMSA9IF9lYXNlTWFwLlBvd2VyMSxcbiAgICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICAgIFBvd2VyMyA9IF9lYXNlTWFwLlBvd2VyMyxcbiAgICAgIFBvd2VyNCA9IF9lYXNlTWFwLlBvd2VyNCxcbiAgICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICAgIFF1YWQgPSBfZWFzZU1hcC5RdWFkLFxuICAgICAgQ3ViaWMgPSBfZWFzZU1hcC5DdWJpYyxcbiAgICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgICBRdWludCA9IF9lYXNlTWFwLlF1aW50LFxuICAgICAgU3Ryb25nID0gX2Vhc2VNYXAuU3Ryb25nLFxuICAgICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgICBCYWNrID0gX2Vhc2VNYXAuQmFjayxcbiAgICAgIFN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuU3RlcHBlZEVhc2UsXG4gICAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgICBTaW5lID0gX2Vhc2VNYXAuU2luZSxcbiAgICAgIEV4cG8gPSBfZWFzZU1hcC5FeHBvLFxuICAgICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5cbiAgdmFyIF93aW4kMSxcbiAgICAgIF9kb2MkMSxcbiAgICAgIF9kb2NFbGVtZW50LFxuICAgICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgICBfdGVtcERpdixcbiAgICAgIF90ZW1wRGl2U3R5bGVyLFxuICAgICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICAgIF93aW5kb3dFeGlzdHMkMSA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG4gIH0sXG4gICAgICBfdHJhbnNmb3JtUHJvcHMgPSB7fSxcbiAgICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICAgIF9ERUcyUkFEID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgIF9hdGFuMiA9IE1hdGguYXRhbjIsXG4gICAgICBfYmlnTnVtJDEgPSAxZTgsXG4gICAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG4gICAgICBfaG9yaXpvbnRhbEV4cCA9IC8oPzpsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgICBfY29tcGxleEV4cCA9IC9bXFxzLFxcKF1cXFMvLFxuICAgICAgX3Byb3BlcnR5QWxpYXNlcyA9IHtcbiAgICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gICAgc2NhbGU6IFwic2NhbGVYLHNjYWxlWVwiLFxuICAgIGFscGhhOiBcIm9wYWNpdHlcIlxuICB9LFxuICAgICAgX3JlbmRlckNTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xuICB9LFxuICAgICAgX3JlbmRlclByb3BXaXRoRW5kID0gZnVuY3Rpb24gX3JlbmRlclByb3BXaXRoRW5kKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyhyYXRpbywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSA6IGRhdGEuYiwgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyUm91bmRlZENTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyUm91bmRlZENTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgICB2YXIgdmFsdWUgPSBkYXRhLnMgKyBkYXRhLmMgKiByYXRpbztcbiAgICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG4gIH0sXG4gICAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kKHJhdGlvLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG4gIH0sXG4gICAgICBfc2V0dGVyQ1NTU3R5bGUgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTU3R5bGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9LFxuICAgICAgX3NldHRlckNTU1Byb3AgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTUHJvcCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgfSxcbiAgICAgIF9zZXR0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSxcbiAgICAgIF9zZXR0ZXJTY2FsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xuICB9LFxuICAgICAgX3NldHRlclNjYWxlV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gICAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgIGNhY2hlLnNjYWxlWCA9IGNhY2hlLnNjYWxlWSA9IHZhbHVlO1xuICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xuICB9LFxuICAgICAgX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG4gIH0sXG4gICAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIixcbiAgICAgIF9zdXBwb3J0czNELFxuICAgICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICAgIHZhciBlID0gX2RvYyQxLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MkMS5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYyQxLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYyQxLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIH0sXG4gICAgICBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHNraXBQcmVmaXhGYWxsYmFjaykge1xuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiO1xuICB9LFxuICAgICAgX3ByZWZpeGVzID0gXCJPLE1veixtcyxNcyxXZWJraXRcIi5zcGxpdChcIixcIiksXG4gICAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gICAgdmFyIGUgPSBlbGVtZW50IHx8IF90ZW1wRGl2LFxuICAgICAgICBzID0gZS5zdHlsZSxcbiAgICAgICAgaSA9IDU7XG5cbiAgICBpZiAocHJvcGVydHkgaW4gcyAmJiAhcHJlZmVyUHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuXG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cigxKTtcblxuICAgIHdoaWxlIChpLS0gJiYgIShfcHJlZml4ZXNbaV0gKyBwcm9wZXJ0eSBpbiBzKSkge31cblxuICAgIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG4gIH0sXG4gICAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoKSB7XG4gICAgaWYgKF93aW5kb3dFeGlzdHMkMSgpICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgX3dpbiQxID0gd2luZG93O1xuICAgICAgX2RvYyQxID0gX3dpbiQxLmRvY3VtZW50O1xuICAgICAgX2RvY0VsZW1lbnQgPSBfZG9jJDEuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICAgIHN0eWxlOiB7fVxuICAgICAgfTtcbiAgICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBfdHJhbnNmb3JtUHJvcCA9IF9jaGVja1Byb3BQcmVmaXgoX3RyYW5zZm9ybVByb3ApO1xuICAgICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCI7XG4gICAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiO1xuICAgICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICAgIF9wbHVnaW5Jbml0dGVkID0gMTtcbiAgICB9XG4gIH0sXG4gICAgICBfZ2V0QkJveEhhY2sgPSBmdW5jdGlvbiBfZ2V0QkJveEhhY2soc3dhcElmUG9zc2libGUpIHtcbiAgICB2YXIgc3ZnID0gX2NyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgdGhpcy5vd25lclNWR0VsZW1lbnQgJiYgdGhpcy5vd25lclNWR0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSxcbiAgICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgICBvbGRTaWJsaW5nID0gdGhpcy5uZXh0U2libGluZyxcbiAgICAgICAgb2xkQ1NTID0gdGhpcy5zdHlsZS5jc3NUZXh0LFxuICAgICAgICBiYm94O1xuXG4gICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgIHN2Zy5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBpZiAoc3dhcElmUG9zc2libGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgdGhpcy5fZ3NhcEJCb3ggPSB0aGlzLmdldEJCb3g7XG4gICAgICAgIHRoaXMuZ2V0QkJveCA9IF9nZXRCQm94SGFjaztcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgICAgYmJveCA9IHRoaXMuX2dzYXBCQm94KCk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFBhcmVudCkge1xuICAgICAgaWYgKG9sZFNpYmxpbmcpIHtcbiAgICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBvbGRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZChzdmcpO1xuXG4gICAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gb2xkQ1NTO1xuICAgIHJldHVybiBiYm94O1xuICB9LFxuICAgICAgX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyA9IGZ1bmN0aW9uIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAgICAgX2dldEJCb3ggPSBmdW5jdGlvbiBfZ2V0QkJveCh0YXJnZXQpIHtcbiAgICB2YXIgYm91bmRzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7XG4gICAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgICB4OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInhcIiwgXCJjeFwiLCBcIngxXCJdKSB8fCAwLFxuICAgICAgeTogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ5XCIsIFwiY3lcIiwgXCJ5MVwiXSkgfHwgMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfSA6IGJvdW5kcztcbiAgfSxcbiAgICAgIF9pc1NWRyA9IGZ1bmN0aW9uIF9pc1NWRyhlKSB7XG4gICAgcmV0dXJuICEhKGUuZ2V0Q1RNICYmICghZS5wYXJlbnROb2RlIHx8IGUub3duZXJTVkdFbGVtZW50KSAmJiBfZ2V0QkJveChlKSk7XG4gIH0sXG4gICAgICBfcmVtb3ZlUHJvcGVydHkgPSBmdW5jdGlvbiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlO1xuXG4gICAgICBpZiAocHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCkge1xuICAgICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfYWRkTm9uVHdlZW5pbmdQVCA9IGZ1bmN0aW9uIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgYmVnaW5uaW5nLCBlbmQsIG9ubHlTZXRBdEVuZCkge1xuICAgIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgb25seVNldEF0RW5kID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSk7XG4gICAgcGx1Z2luLl9wdCA9IHB0O1xuICAgIHB0LmIgPSBiZWdpbm5pbmc7XG4gICAgcHQuZSA9IGVuZDtcblxuICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICByZXR1cm4gcHQ7XG4gIH0sXG4gICAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgICBkZWc6IDEsXG4gICAgcmFkOiAxLFxuICAgIHR1cm46IDFcbiAgfSxcbiAgICAgIF9jb252ZXJ0VG9Vbml0ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpIHtcbiAgICB2YXIgY3VyVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwLFxuICAgICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgICAgc3R5bGUgPSBfdGVtcERpdi5zdHlsZSxcbiAgICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgICBpc1Jvb3RTVkcgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiLFxuICAgICAgICBtZWFzdXJlUHJvcGVydHkgPSAoaXNSb290U1ZHID8gXCJjbGllbnRcIiA6IFwib2Zmc2V0XCIpICsgKGhvcml6b250YWwgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiKSxcbiAgICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgICB0b1BpeGVscyA9IHVuaXQgPT09IFwicHhcIixcbiAgICAgICAgdG9QZXJjZW50ID0gdW5pdCA9PT0gXCIlXCIsXG4gICAgICAgIHB4LFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBpc1NWRztcblxuICAgIGlmICh1bml0ID09PSBjdXJVbml0IHx8ICFjdXJWYWx1ZSB8fCBfbm9uQ29udmVydGlibGVVbml0c1t1bml0XSB8fCBfbm9uQ29udmVydGlibGVVbml0c1tjdXJVbml0XSkge1xuICAgICAgcmV0dXJuIGN1clZhbHVlO1xuICAgIH1cblxuICAgIGN1clVuaXQgIT09IFwicHhcIiAmJiAhdG9QaXhlbHMgJiYgKGN1clZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIFwicHhcIikpO1xuICAgIGlzU1ZHID0gdGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KTtcblxuICAgIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgICAgcHggPSBpc1NWRyA/IHRhcmdldC5nZXRCQm94KClbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdIDogdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgICByZXR1cm4gX3JvdW5kKHRvUGVyY2VudCA/IGN1clZhbHVlIC8gcHggKiBhbW91bnQgOiBjdXJWYWx1ZSAvIDEwMCAqIHB4KTtcbiAgICB9XG5cbiAgICBzdHlsZVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gPSBhbW91bnQgKyAodG9QaXhlbHMgPyBjdXJVbml0IDogdW5pdCk7XG4gICAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmIChpc1NWRykge1xuICAgICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jJDEgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgICAgcGFyZW50ID0gX2RvYyQxLmJvZHk7XG4gICAgfVxuXG4gICAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lKSB7XG4gICAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoc3R5bGUucG9zaXRpb24gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwicG9zaXRpb25cIikpO1xuICAgICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuICAgICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90ZW1wRGl2KTtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUocGFyZW50KTtcbiAgICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xuICB9LFxuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgICBpZiAofnByb3BlcnR5LmluZGV4T2YoXCIsXCIpKSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgICAgdmFsdWUgPSBwcm9wZXJ0eSAhPT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IHZhbHVlW3Byb3BlcnR5XSA6IF9maXJzdFR3b09ubHkoX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkpICsgXCIgXCIgKyB2YWx1ZS56T3JpZ2luICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IFwiYXV0b1wiIHx8IHVuY2FjaGUgfHwgfih2YWx1ZSArIFwiXCIpLmluZGV4T2YoXCJjYWxjKFwiKSkge1xuICAgICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xuICB9LFxuICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZyA9IGZ1bmN0aW9uIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcodGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKCFzdGFydCB8fCBzdGFydCA9PT0gXCJub25lXCIpIHtcbiAgICAgIHZhciBwID0gX2NoZWNrUHJvcFByZWZpeChwcm9wLCB0YXJnZXQsIDEpLFxuICAgICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICAgIGlmIChzICYmIHMgIT09IHN0YXJ0KSB7XG4gICAgICAgIHByb3AgPSBwO1xuICAgICAgICBzdGFydCA9IHM7XG4gICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiYm9yZGVyQ29sb3JcIikge1xuICAgICAgICBzdGFydCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJib3JkZXJUb3BDb2xvclwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQuc3R5bGUsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nKSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgICAgYSxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzdGFydFZhbHVlcyxcbiAgICAgICAgc3RhcnROdW0sXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgZW5kTnVtLFxuICAgICAgICBjaHVuayxcbiAgICAgICAgZW5kVW5pdCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgZW5kVmFsdWVzO1xuICAgIHB0LmIgPSBzdGFydDtcbiAgICBwdC5lID0gZW5kO1xuICAgIHN0YXJ0ICs9IFwiXCI7XG4gICAgZW5kICs9IFwiXCI7XG5cbiAgICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gZW5kO1xuICAgICAgZW5kID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB8fCBlbmQ7XG4gICAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgICB9XG5cbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuXG4gICAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpO1xuXG4gICAgc3RhcnQgPSBhWzBdO1xuICAgIGVuZCA9IGFbMV07XG4gICAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIGVuZFZhbHVlcyA9IGVuZC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuXG4gICAgaWYgKGVuZFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gcmVzdWx0WzBdO1xuICAgICAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiIHx8IGNodW5rLnN1YnN0cigtNSkgPT09IFwiaHNsYShcIikge1xuICAgICAgICAgIGNvbG9yID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRWYWx1ZSAhPT0gKHN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlc1ttYXRjaEluZGV4KytdIHx8IFwiXCIpKSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgICAgc3RhcnRVbml0ID0gc3RhcnRWYWx1ZS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICByZWxhdGl2ZSA9IGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyArKGVuZFZhbHVlLmNoYXJBdCgwKSArIFwiMVwiKSA6IDA7XG5cbiAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPSBlbmRWYWx1ZS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgICAgaW5kZXggPSBfbnVtV2l0aFVuaXRFeHAubGFzdEluZGV4IC0gZW5kVW5pdC5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZW5kICs9IGVuZFVuaXQ7XG4gICAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgfHwgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICAgIGM6IHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB0LnIgPSBwcm9wID09PSBcImRpc3BsYXlcIiAmJiBlbmQgPT09IFwibm9uZVwiID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZTtcbiAgICB9XG5cbiAgICBfcmVsRXhwLnRlc3QoZW5kKSAmJiAocHQuZSA9IDApO1xuICAgIHRoaXMuX3B0ID0gcHQ7XG4gICAgcmV0dXJuIHB0O1xuICB9LFxuICAgICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gICAgdG9wOiBcIjAlXCIsXG4gICAgYm90dG9tOiBcIjEwMCVcIixcbiAgICBsZWZ0OiBcIjAlXCIsXG4gICAgcmlnaHQ6IFwiMTAwJVwiLFxuICAgIGNlbnRlcjogXCI1MCVcIlxuICB9LFxuICAgICAgX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMgPSBmdW5jdGlvbiBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyh2YWx1ZSkge1xuICAgIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgICB5ID0gc3BsaXRbMV0gfHwgXCI1MCVcIjtcblxuICAgIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICB2YWx1ZSA9IHg7XG4gICAgICB4ID0geTtcbiAgICAgIHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzcGxpdFswXSA9IF9rZXl3b3JkVG9QZXJjZW50W3hdIHx8IHg7XG4gICAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICAgIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbiAgfSxcbiAgICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBkYXRhLnQsXG4gICAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICAgICAgcHJvcCxcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wXSkge1xuICAgICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgICAgICAgY2FjaGUudW5jYWNoZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgICBfc3BlY2lhbFByb3BzID0ge1xuICAgIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgICAgdmFyIHB0ID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMCwgX3JlbmRlckNsZWFyUHJvcHMpO1xuICAgICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICAgIHB0LnByID0gLTEwO1xuICAgICAgICBwdC50d2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAgICAgX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICAgIF9pc051bGxUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfaXNOdWxsVHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG4gIH0sXG4gICAgICBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpIHtcbiAgICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xuICB9LFxuICAgICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gICAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBhZGRlZFRvRE9NO1xuXG4gICAgaWYgKGNhY2hlLnN2ZyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG4gICAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4O1xuICAgICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgICAgcmV0dXJuIG1hdHJpeC5qb2luKFwiLFwiKSA9PT0gXCIxLDAsMCwxLDAsMFwiID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXg7XG4gICAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgICAgdGVtcCA9IHN0eWxlLmRpc3BsYXk7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICAgIGlmICghcGFyZW50IHx8ICF0YXJnZXQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgIGFkZGVkVG9ET00gPSAxO1xuICAgICAgICBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0U2libGluZztcblxuICAgICAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZCh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICAgIGlmIChhZGRlZFRvRE9NKSB7XG4gICAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xuICB9LFxuICAgICAgX2FwcGx5U1ZHT3JpZ2luID0gZnVuY3Rpb24gX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgb3JpZ2luLCBvcmlnaW5Jc0Fic29sdXRlLCBzbW9vdGgsIG1hdHJpeEFycmF5LCBwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgICB4T3JpZ2luT2xkID0gY2FjaGUueE9yaWdpbiB8fCAwLFxuICAgICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgICB5T2Zmc2V0T2xkID0gY2FjaGUueU9mZnNldCB8fCAwLFxuICAgICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgICBjID0gbWF0cml4WzJdLFxuICAgICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgICAgdHkgPSBtYXRyaXhbNV0sXG4gICAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICAgIHlPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzFdKSB8fCAwLFxuICAgICAgICBib3VuZHMsXG4gICAgICAgIGRldGVybWluYW50LFxuICAgICAgICB4LFxuICAgICAgICB5O1xuXG4gICAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgICBib3VuZHMgPSBfZ2V0QkJveCh0YXJnZXQpO1xuICAgICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gICAgfSBlbHNlIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4ICYmIChkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGMpKSB7XG4gICAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICB4T3JpZ2luID0geDtcbiAgICAgIHlPcmlnaW4gPSB5O1xuICAgIH1cblxuICAgIGlmIChzbW9vdGggfHwgc21vb3RoICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGgpIHtcbiAgICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgICAgY2FjaGUueE9mZnNldCA9IHhPZmZzZXRPbGQgKyAodHggKiBhICsgdHkgKiBjKSAtIHR4O1xuICAgICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gICAgY2FjaGUueU9yaWdpbiA9IHlPcmlnaW47XG4gICAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gICAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICAgIGNhY2hlLm9yaWdpbklzQWJzb2x1dGUgPSAhIW9yaWdpbklzQWJzb2x1dGU7XG4gICAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiO1xuXG4gICAgaWYgKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gICAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T2Zmc2V0XCIsIHhPZmZzZXRPbGQsIGNhY2hlLnhPZmZzZXQpO1xuXG4gICAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHhPcmlnaW4gKyBcIiBcIiArIHlPcmlnaW4pO1xuICB9LFxuICAgICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICAgIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBuZXcgR1NDYWNoZSh0YXJnZXQpO1xuXG4gICAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICAgIHB4ID0gXCJweFwiLFxuICAgICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgICBvcmlnaW4gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB8fCBcIjBcIixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgeixcbiAgICAgICAgc2NhbGVYLFxuICAgICAgICBzY2FsZVksXG4gICAgICAgIHJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblgsXG4gICAgICAgIHJvdGF0aW9uWSxcbiAgICAgICAgc2tld1gsXG4gICAgICAgIHNrZXdZLFxuICAgICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgICAgeE9yaWdpbixcbiAgICAgICAgeU9yaWdpbixcbiAgICAgICAgbWF0cml4LFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgY29zLFxuICAgICAgICBzaW4sXG4gICAgICAgIGEsXG4gICAgICAgIGIsXG4gICAgICAgIGMsXG4gICAgICAgIGQsXG4gICAgICAgIGExMixcbiAgICAgICAgYTIyLFxuICAgICAgICB0MSxcbiAgICAgICAgdDIsXG4gICAgICAgIHQzLFxuICAgICAgICBhMTMsXG4gICAgICAgIGEyMyxcbiAgICAgICAgYTMzLFxuICAgICAgICBhNDIsXG4gICAgICAgIGE0MyxcbiAgICAgICAgYTMyO1xuICAgIHggPSB5ID0geiA9IHJvdGF0aW9uID0gcm90YXRpb25YID0gcm90YXRpb25ZID0gc2tld1ggPSBza2V3WSA9IHBlcnNwZWN0aXZlID0gMDtcbiAgICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICAgIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICAgIG1hdHJpeCA9IF9nZXRNYXRyaXgodGFyZ2V0LCBjYWNoZS5zdmcpO1xuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgdDEgPSAhY2FjaGUudW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpO1xuXG4gICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCB0MSB8fCBvcmlnaW4sICEhdDEgfHwgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSwgY2FjaGUuc21vb3RoICE9PSBmYWxzZSwgbWF0cml4KTtcbiAgICB9XG5cbiAgICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICAgIHlPcmlnaW4gPSBjYWNoZS55T3JpZ2luIHx8IDA7XG5cbiAgICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgICAgYSA9IG1hdHJpeFswXTtcbiAgICAgIGIgPSBtYXRyaXhbMV07XG4gICAgICBjID0gbWF0cml4WzJdO1xuICAgICAgZCA9IG1hdHJpeFszXTtcbiAgICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgICB5ID0gYTIyID0gbWF0cml4WzVdO1xuXG4gICAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICAgIHNjYWxlWSA9IE1hdGguc3FydChkICogZCArIGMgKiBjKTtcbiAgICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7XG4gICAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpO1xuXG4gICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgICAgeSAtPSB5T3JpZ2luIC0gKHhPcmlnaW4gKiBiICsgeU9yaWdpbiAqIGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICAgIGE0MiA9IG1hdHJpeFs3XTtcbiAgICAgICAgYTEzID0gbWF0cml4WzhdO1xuICAgICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICAgIGEzMyA9IG1hdHJpeFsxMF07XG4gICAgICAgIGE0MyA9IG1hdHJpeFsxMV07XG4gICAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgICB5ID0gbWF0cml4WzEzXTtcbiAgICAgICAgeiA9IG1hdHJpeFsxNF07XG4gICAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgICAgcm90YXRpb25YID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgICAgdDEgPSBhMTIgKiBjb3MgKyBhMTMgKiBzaW47XG4gICAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgICAgdDMgPSBhMzIgKiBjb3MgKyBhMzMgKiBzaW47XG4gICAgICAgICAgYTEzID0gYTEyICogLXNpbiArIGExMyAqIGNvcztcbiAgICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICAgIGEzMyA9IGEzMiAqIC1zaW4gKyBhMzMgKiBjb3M7XG4gICAgICAgICAgYTQzID0gYTQyICogLXNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgICBhMjIgPSB0MjtcbiAgICAgICAgICBhMzIgPSB0MztcbiAgICAgICAgfVxuXG4gICAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgICByb3RhdGlvblkgPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgICB0MSA9IGEgKiBjb3MgLSBhMTMgKiBzaW47XG4gICAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICAgIHQzID0gYyAqIGNvcyAtIGEzMyAqIHNpbjtcbiAgICAgICAgICBhNDMgPSBkICogc2luICsgYTQzICogY29zO1xuICAgICAgICAgIGEgPSB0MTtcbiAgICAgICAgICBiID0gdDI7XG4gICAgICAgICAgYyA9IHQzO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICAgIHJvdGF0aW9uID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICAgIHQxID0gYSAqIGNvcyArIGIgKiBzaW47XG4gICAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgICAgYiA9IGIgKiBjb3MgLSBhICogc2luO1xuICAgICAgICAgIGEyMiA9IGEyMiAqIGNvcyAtIGExMiAqIHNpbjtcbiAgICAgICAgICBhID0gdDE7XG4gICAgICAgICAgYTEyID0gdDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAgIHJvdGF0aW9uWCA9IHJvdGF0aW9uID0gMDtcbiAgICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZVggPSBfcm91bmQoTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYykpO1xuICAgICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgICBhbmdsZSA9IF9hdGFuMihhMTIsIGEyMik7XG4gICAgICAgIHNrZXdYID0gTWF0aC5hYnMoYW5nbGUpID4gMC4wMDAyID8gYW5nbGUgKiBfUkFEMkRFRyA6IDA7XG4gICAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgIHQxID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgICAgdDEgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0MSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKHNrZXdYKSA+IDkwICYmIE1hdGguYWJzKHNrZXdYKSA8IDI3MCkge1xuICAgICAgaWYgKGludmVydGVkU2NhbGVYKSB7XG4gICAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgICAgc2tld1ggKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgICAgIHJvdGF0aW9uICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVZICo9IC0xO1xuICAgICAgICBza2V3WCArPSBza2V3WCA8PSAwID8gMTgwIDogLTE4MDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS54ID0geCAtICgoY2FjaGUueFBlcmNlbnQgPSB4ICYmIChjYWNoZS54UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0V2lkdGggLyAyKSA9PT0gTWF0aC5yb3VuZCgteCkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldFdpZHRoICogY2FjaGUueFBlcmNlbnQgLyAxMDAgOiAwKSArIHB4O1xuICAgIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgICBjYWNoZS56ID0geiArIHB4O1xuICAgIGNhY2hlLnNjYWxlWCA9IF9yb3VuZChzY2FsZVgpO1xuICAgIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICAgIGNhY2hlLnJvdGF0aW9uID0gX3JvdW5kKHJvdGF0aW9uKSArIGRlZztcbiAgICBjYWNoZS5yb3RhdGlvblggPSBfcm91bmQocm90YXRpb25YKSArIGRlZztcbiAgICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgICBjYWNoZS5za2V3WCA9IHNrZXdYICsgZGVnO1xuICAgIGNhY2hlLnNrZXdZID0gc2tld1kgKyBkZWc7XG4gICAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gICAgaWYgKGNhY2hlLnpPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpbi5zcGxpdChcIiBcIilbMl0pIHx8IDApIHtcbiAgICAgIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IF9maXJzdFR3b09ubHkob3JpZ2luKTtcbiAgICB9XG5cbiAgICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gICAgY2FjaGUuZm9yY2UzRCA9IF9jb25maWcuZm9yY2UzRDtcbiAgICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICAgIGNhY2hlLnVuY2FjaGUgPSAwO1xuICAgIHJldHVybiBjYWNoZTtcbiAgfSxcbiAgICAgIF9maXJzdFR3b09ubHkgPSBmdW5jdGlvbiBfZmlyc3RUd29Pbmx5KHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiIFwiKSlbMF0gKyBcIiBcIiArIHZhbHVlWzFdO1xuICB9LFxuICAgICAgX2FkZFB4VHJhbnNsYXRlID0gZnVuY3Rpb24gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgc3RhcnQsIHZhbHVlKSB7XG4gICAgdmFyIHVuaXQgPSBnZXRVbml0KHN0YXJ0KTtcbiAgICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG4gIH0sXG4gICAgICBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlck5vbjNEVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgICBjYWNoZS5yb3RhdGlvblkgPSBjYWNoZS5yb3RhdGlvblggPSBcIjBkZWdcIjtcbiAgICBjYWNoZS5mb3JjZTNEID0gMDtcblxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG4gIH0sXG4gICAgICBfemVyb0RlZyA9IFwiMGRlZ1wiLFxuICAgICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgICBfZW5kUGFyZW50aGVzaXMgPSBcIikgXCIsXG4gICAgICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICAgIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgICAgeFBlcmNlbnQgPSBfcmVmLnhQZXJjZW50LFxuICAgICAgICB5UGVyY2VudCA9IF9yZWYueVBlcmNlbnQsXG4gICAgICAgIHggPSBfcmVmLngsXG4gICAgICAgIHkgPSBfcmVmLnksXG4gICAgICAgIHogPSBfcmVmLnosXG4gICAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25ZID0gX3JlZi5yb3RhdGlvblksXG4gICAgICAgIHJvdGF0aW9uWCA9IF9yZWYucm90YXRpb25YLFxuICAgICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICAgIHNrZXdZID0gX3JlZi5za2V3WSxcbiAgICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IF9yZWYudHJhbnNmb3JtUGVyc3BlY3RpdmUsXG4gICAgICAgIGZvcmNlM0QgPSBfcmVmLmZvcmNlM0QsXG4gICAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgICB6T3JpZ2luID0gX3JlZi56T3JpZ2luLFxuICAgICAgICB0cmFuc2Zvcm1zID0gXCJcIixcbiAgICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlO1xuXG4gICAgaWYgKHpPcmlnaW4gJiYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcgfHwgcm90YXRpb25ZICE9PSBfemVyb0RlZykpIHtcbiAgICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICAgIGExMyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBhMzMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgY29zO1xuXG4gICAgICBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25YKSAqIF9ERUcyUkFEO1xuICAgICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICAgIHkgPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB5LCAtTWF0aC5zaW4oYW5nbGUpICogLXpPcmlnaW4pO1xuICAgICAgeiA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHosIGEzMyAqIGNvcyAqIC16T3JpZ2luICsgek9yaWdpbik7XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVBlcnNwZWN0aXZlICE9PSBfemVyb1B4KSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IFwicGVyc3BlY3RpdmUoXCIgKyB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSArIF9lbmRQYXJlbnRoZXNpcztcbiAgICB9XG5cbiAgICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJ0cmFuc2xhdGUoXCIgKyB4UGVyY2VudCArIFwiJSwgXCIgKyB5UGVyY2VudCArIFwiJSkgXCI7XG4gICAgfVxuXG4gICAgaWYgKHVzZTNEIHx8IHggIT09IF96ZXJvUHggfHwgeSAhPT0gX3plcm9QeCB8fCB6ICE9PSBfemVyb1B4KSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IHogIT09IF96ZXJvUHggfHwgdXNlM0QgPyBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpIFwiIDogXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIF9lbmRQYXJlbnRoZXNpcztcbiAgICB9XG5cbiAgICBpZiAocm90YXRpb24gIT09IF96ZXJvRGVnKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlKFwiICsgcm90YXRpb24gKyBfZW5kUGFyZW50aGVzaXM7XG4gICAgfVxuXG4gICAgaWYgKHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVZKFwiICsgcm90YXRpb25ZICsgX2VuZFBhcmVudGhlc2lzO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGlvblggIT09IF96ZXJvRGVnKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWChcIiArIHJvdGF0aW9uWCArIF9lbmRQYXJlbnRoZXNpcztcbiAgICB9XG5cbiAgICBpZiAoc2tld1ggIT09IF96ZXJvRGVnIHx8IHNrZXdZICE9PSBfemVyb0RlZykge1xuICAgICAgdHJhbnNmb3JtcyArPSBcInNrZXcoXCIgKyBza2V3WCArIFwiLCBcIiArIHNrZXdZICsgX2VuZFBhcmVudGhlc2lzO1xuICAgIH1cblxuICAgIGlmIChzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IFwic2NhbGUoXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBfZW5kUGFyZW50aGVzaXM7XG4gICAgfVxuXG4gICAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXMgfHwgXCJ0cmFuc2xhdGUoMCwgMClcIjtcbiAgfSxcbiAgICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gICAgdmFyIF9yZWYyID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgICAgeFBlcmNlbnQgPSBfcmVmMi54UGVyY2VudCxcbiAgICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgICAgeCA9IF9yZWYyLngsXG4gICAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgICBza2V3WCA9IF9yZWYyLnNrZXdYLFxuICAgICAgICBza2V3WSA9IF9yZWYyLnNrZXdZLFxuICAgICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICAgIHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgICAgeU9yaWdpbiA9IF9yZWYyLnlPcmlnaW4sXG4gICAgICAgIHhPZmZzZXQgPSBfcmVmMi54T2Zmc2V0LFxuICAgICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgICAgZm9yY2VDU1MgPSBfcmVmMi5mb3JjZUNTUyxcbiAgICAgICAgdHggPSBwYXJzZUZsb2F0KHgpLFxuICAgICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICAgIGExMSxcbiAgICAgICAgYTIxLFxuICAgICAgICBhMTIsXG4gICAgICAgIGEyMixcbiAgICAgICAgdGVtcDtcblxuICAgIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gICAgc2tld1ggPSBwYXJzZUZsb2F0KHNrZXdYKTtcbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuXG4gICAgaWYgKHNrZXdZKSB7XG4gICAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgICAgc2tld1ggKz0gc2tld1k7XG4gICAgICByb3RhdGlvbiArPSBza2V3WTtcbiAgICB9XG5cbiAgICBpZiAocm90YXRpb24gfHwgc2tld1gpIHtcbiAgICAgIHJvdGF0aW9uICo9IF9ERUcyUkFEO1xuICAgICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgICBhMTEgPSBNYXRoLmNvcyhyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgICBhMjEgPSBNYXRoLnNpbihyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgICBhMjIgPSBNYXRoLmNvcyhyb3RhdGlvbiAtIHNrZXdYKSAqIHNjYWxlWTtcblxuICAgICAgaWYgKHNrZXdYKSB7XG4gICAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1ggLSBza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTEyICo9IHRlbXA7XG4gICAgICAgIGEyMiAqPSB0ZW1wO1xuXG4gICAgICAgIGlmIChza2V3WSkge1xuICAgICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgICAgIGExMSAqPSB0ZW1wO1xuICAgICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgICAgYTIxID0gX3JvdW5kKGEyMSk7XG4gICAgICBhMTIgPSBfcm91bmQoYTEyKTtcbiAgICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhMTEgPSBzY2FsZVg7XG4gICAgICBhMjIgPSBzY2FsZVk7XG4gICAgICBhMjEgPSBhMTIgPSAwO1xuICAgIH1cblxuICAgIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICAgIHR4ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgeCwgXCJweFwiKTtcbiAgICAgIHR5ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInlcIiwgeSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBpZiAoeE9yaWdpbiB8fCB5T3JpZ2luIHx8IHhPZmZzZXQgfHwgeU9mZnNldCkge1xuICAgICAgdHggPSBfcm91bmQodHggKyB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhMTEgKyB5T3JpZ2luICogYTEyKSArIHhPZmZzZXQpO1xuICAgICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICAgIH1cblxuICAgIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgICAgdGVtcCA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgICB0eSA9IF9yb3VuZCh0eSArIHlQZXJjZW50IC8gMTAwICogdGVtcC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0ZW1wKTtcbiAgICBmb3JjZUNTUyAmJiAodGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRlbXApO1xuICB9LFxuICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUm90YXRpb25hbFByb3BUd2VlbihwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpIHtcbiAgICB2YXIgY2FwID0gMzYwLFxuICAgICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpICogKGlzU3RyaW5nICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFkXCIpID8gX1JBRDJERUcgOiAxKSxcbiAgICAgICAgY2hhbmdlID0gcmVsYXRpdmUgPyBlbmROdW0gKiByZWxhdGl2ZSA6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIHB0O1xuXG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICBkaXJlY3Rpb24gPSBlbmRWYWx1ZS5zcGxpdChcIl9cIilbMV07XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwic2hvcnRcIikge1xuICAgICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICAgIGlmIChjaGFuZ2UgIT09IGNoYW5nZSAlIChjYXAgLyAyKSkge1xuICAgICAgICAgIGNoYW5nZSArPSBjaGFuZ2UgPCAwID8gY2FwIDogLWNhcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImN3XCIgJiYgY2hhbmdlIDwgMCkge1xuICAgICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSQxKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJjY3dcIiAmJiBjaGFuZ2UgPiAwKSB7XG4gICAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtJDEpICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwbHVnaW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBjaGFuZ2UsIF9yZW5kZXJQcm9wV2l0aEVuZCk7XG4gICAgcHQuZSA9IGZpbmFsVmFsdWU7XG4gICAgcHQudSA9IFwiZGVnXCI7XG5cbiAgICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gICAgcmV0dXJuIHB0O1xuICB9LFxuICAgICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgICB2YXIgc3R5bGUgPSBfdGVtcERpdlN0eWxlci5zdHlsZSxcbiAgICAgICAgc3RhcnRDYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgZXhjbHVkZSA9IFwicGVyc3BlY3RpdmUsZm9yY2UzRCx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luXCIsXG4gICAgICAgIGVuZENhY2hlLFxuICAgICAgICBwLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgc3RhcnROdW0sXG4gICAgICAgIGVuZE51bSxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0O1xuICAgIHN0eWxlLmNzc1RleHQgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuY3NzVGV4dCArIFwiO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7XCI7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcblxuICAgIF9kb2MkMS5ib2R5LmFwcGVuZENoaWxkKF90ZW1wRGl2U3R5bGVyKTtcblxuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKF90ZW1wRGl2U3R5bGVyLCAxKTtcblxuICAgIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICAgIHN0YXJ0VmFsdWUgPSBzdGFydENhY2hlW3BdO1xuICAgICAgZW5kVmFsdWUgPSBlbmRDYWNoZVtwXTtcblxuICAgICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgICAgcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgc3RhcnRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgIHBsdWdpbi5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2RvYyQxLmJvZHkucmVtb3ZlQ2hpbGQoX3RlbXBEaXZTdHlsZXIpO1xuICB9O1xuXG4gIF9mb3JFYWNoTmFtZShcInBhZGRpbmcsbWFyZ2luLFdpZHRoLFJhZGl1c1wiLCBmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgdCA9IFwiVG9wXCIsXG4gICAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICAgIGIgPSBcIkJvdHRvbVwiLFxuICAgICAgICBsID0gXCJMZWZ0XCIsXG4gICAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgcmV0dXJuIGluZGV4IDwgMiA/IG5hbWUgKyBzaWRlIDogXCJib3JkZXJcIiArIHNpZGUgKyBuYW1lO1xuICAgIH0pO1xuXG4gICAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgICB2YXIgYSwgdmFycztcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSB7XG4gICAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gX2dldChwbHVnaW4sIHByb3AsIHByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgICByZXR1cm4gdmFycy5zcGxpdChhWzBdKS5sZW5ndGggPT09IDUgPyBhWzBdIDogdmFycztcbiAgICAgIH1cblxuICAgICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3AsIGkpIHtcbiAgICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgICB9KTtcbiAgICAgIHBsdWdpbi5pbml0KHRhcmdldCwgdmFycywgdHdlZW4pO1xuICAgIH07XG4gIH0pO1xuXG4gIHZhciBDU1NQbHVnaW4gPSB7XG4gICAgbmFtZTogXCJjc3NcIixcbiAgICByZWdpc3RlcjogX2luaXRDb3JlLFxuICAgIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnN0eWxlICYmIHRhcmdldC5ub2RlVHlwZTtcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMuX3Byb3BzLFxuICAgICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgICBlbmROdW0sXG4gICAgICAgICAgc3RhcnROdW0sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIHN0YXJ0VW5pdCxcbiAgICAgICAgICBlbmRVbml0LFxuICAgICAgICAgIHJlbGF0aXZlLFxuICAgICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCxcbiAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgc21vb3RoLFxuICAgICAgICAgIGhhc1ByaW9yaXR5O1xuICAgICAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIF9jaGVja1BsdWdpbihwLCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICAgIHNwZWNpYWxQcm9wID0gX3NwZWNpYWxQcm9wc1twXTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBfcmVwbGFjZVJhbmRvbShlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgICBzcGVjaWFsUHJvcCh0aGlzLCB0YXJnZXQsIHAsIGVuZFZhbHVlLCB0d2VlbikgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICAgIH0gZWxzZSBpZiAocC5zdWJzdHIoMCwgMikgPT09IFwiLS1cIikge1xuICAgICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgICAgZW5kVmFsdWUgKz0gXCJcIjtcbiAgICAgICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgICAgICBlbmRVbml0ID8gc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydFZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSArIGVuZFVuaXQpIDogc3RhcnRVbml0ICYmIChlbmRWYWx1ZSArPSBzdGFydFVuaXQpO1xuICAgICAgICAgIHRoaXMuYWRkKHN0eWxlLCBcInNldFByb3BlcnR5XCIsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGlmIChzdGFydEF0ICYmIHAgaW4gc3RhcnRBdCkge1xuICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICAgIHAgaW4gX2NvbmZpZy51bml0cyAmJiAhZ2V0VW5pdChzdGFydFZhbHVlKSAmJiAoc3RhcnRWYWx1ZSArPSBfY29uZmlnLnVuaXRzW3BdKTtcbiAgICAgICAgICAgIChzdGFydFZhbHVlICsgXCJcIikuY2hhckF0KDEpID09PSBcIj1cIiAmJiAoc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuICAgICAgICAgIHJlbGF0aXZlICYmIChlbmRWYWx1ZSA9IGVuZFZhbHVlLnN1YnN0cigyKSk7XG4gICAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAocCBpbiBfcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICAgICAgICBpZiAocCA9PT0gXCJhdXRvQWxwaGFcIikge1xuICAgICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEgJiYgX2dldCh0YXJnZXQsIFwidmlzaWJpbGl0eVwiKSA9PT0gXCJoaWRkZW5cIiAmJiBlbmROdW0pIHtcbiAgICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocCAhPT0gXCJzY2FsZVwiICYmIHAgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzO1xuXG4gICAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSAmJiAhdmFycy5wYXJzZVRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB2YXJzLnBhcnNlVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKTtcbiAgICAgICAgICAgICAgcHJvcHMucHVzaChcInNjYWxlWVwiLCBwKTtcbiAgICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kVW5pdCA9IHBhcnNlRmxvYXQoZW5kVmFsdWUuc3BsaXQoXCIgXCIpWzJdKSB8fCAwO1xuICAgICAgICAgICAgICAgIGVuZFVuaXQgIT09IGNhY2hlLnpPcmlnaW4gJiYgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwiek9yaWdpblwiLCBjYWNoZS56T3JpZ2luLCBlbmRVbml0KTtcblxuICAgICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpO1xuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInNtb290aFwiLCBjYWNoZS5zbW9vdGgsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcF0gPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgICAgX2FkZFJhd1RyYW5zZm9ybVBUcyh0aGlzLCBlbmRWYWx1ZSwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICAgIHAgPSBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCB8fCAoZW5kTnVtIHx8IGVuZE51bSA9PT0gMCkgJiYgKHN0YXJ0TnVtIHx8IHN0YXJ0TnVtID09PSAwKSAmJiAhX2NvbXBsZXhFeHAudGVzdChlbmRWYWx1ZSkgJiYgcCBpbiBzdHlsZSkge1xuICAgICAgICAgICAgc3RhcnRVbml0ID0gKHN0YXJ0VmFsdWUgKyBcIlwiKS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7XG4gICAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuICAgICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBpc1RyYW5zZm9ybVJlbGF0ZWQgPyBjYWNoZSA6IHN0eWxlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLCAhaXNUcmFuc2Zvcm1SZWxhdGVkICYmIChlbmRVbml0ID09PSBcInB4XCIgfHwgcCA9PT0gXCJ6SW5kZXhcIikgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlID8gX3JlbmRlclJvdW5kZWRDU1NQcm9wIDogX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCkge1xuICAgICAgICAgICAgICB0aGlzLl9wdC5iID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fcHQuciA9IF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICAgIGlmIChwIGluIHRhcmdldCkge1xuICAgICAgICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIHAsIHRhcmdldFtwXSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9taXNzaW5nUGx1Z2luKHAsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0aGlzKTtcbiAgICB9LFxuICAgIGdldDogX2dldCxcbiAgICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICAgIGdldFNldHRlcjogZnVuY3Rpb24gZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHBsdWdpbikge1xuICAgICAgdmFyIHAgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcbiAgICAgIHAgJiYgcC5pbmRleE9mKFwiLFwiKSA8IDAgJiYgKHByb3BlcnR5ID0gcCk7XG4gICAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgfSxcbiAgICBjb3JlOiB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICAgIF9nZXRNYXRyaXg6IF9nZXRNYXRyaXhcbiAgICB9XG4gIH07XG4gIGdzYXAudXRpbHMuY2hlY2tQcmVmaXggPSBfY2hlY2tQcm9wUHJlZml4O1xuXG4gIChmdW5jdGlvbiAocG9zaXRpb25BbmRTY2FsZSwgcm90YXRpb24sIG90aGVycywgYWxpYXNlcykge1xuICAgIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90cmFuc2Zvcm1Qcm9wc1tuYW1lXSA9IDE7XG4gICAgfSk7XG5cbiAgICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJkZWdcIjtcbiAgICAgIF9yb3RhdGlvbmFsUHJvcGVydGllc1tuYW1lXSA9IDE7XG4gICAgfSk7XG5cbiAgICBfcHJvcGVydHlBbGlhc2VzW2FsbFsxM11dID0gcG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb247XG5cbiAgICBfZm9yRWFjaE5hbWUoYWxpYXNlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgX3Byb3BlcnR5QWxpYXNlc1tzcGxpdFsxXV0gPSBhbGxbc3BsaXRbMF1dO1xuICAgIH0pO1xuICB9KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbiAgX2ZvckVhY2hOYW1lKFwieCx5LHosdG9wLHJpZ2h0LGJvdHRvbSxsZWZ0LHdpZHRoLGhlaWdodCxmb250U2l6ZSxwYWRkaW5nLG1hcmdpbixwZXJzcGVjdGl2ZVwiLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcInB4XCI7XG4gIH0pO1xuXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKTtcblxuICB2YXIgZ3NhcFdpdGhDU1MgPSBnc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbikgfHwgZ3NhcCxcbiAgICAgIFR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5cbiAgZXhwb3J0cy5CYWNrID0gQmFjaztcbiAgZXhwb3J0cy5Cb3VuY2UgPSBCb3VuY2U7XG4gIGV4cG9ydHMuQ1NTUGx1Z2luID0gQ1NTUGx1Z2luO1xuICBleHBvcnRzLkNpcmMgPSBDaXJjO1xuICBleHBvcnRzLkN1YmljID0gQ3ViaWM7XG4gIGV4cG9ydHMuRWxhc3RpYyA9IEVsYXN0aWM7XG4gIGV4cG9ydHMuRXhwbyA9IEV4cG87XG4gIGV4cG9ydHMuTGluZWFyID0gTGluZWFyO1xuICBleHBvcnRzLlBvd2VyMCA9IFBvd2VyMDtcbiAgZXhwb3J0cy5Qb3dlcjEgPSBQb3dlcjE7XG4gIGV4cG9ydHMuUG93ZXIyID0gUG93ZXIyO1xuICBleHBvcnRzLlBvd2VyMyA9IFBvd2VyMztcbiAgZXhwb3J0cy5Qb3dlcjQgPSBQb3dlcjQ7XG4gIGV4cG9ydHMuUXVhZCA9IFF1YWQ7XG4gIGV4cG9ydHMuUXVhcnQgPSBRdWFydDtcbiAgZXhwb3J0cy5RdWludCA9IFF1aW50O1xuICBleHBvcnRzLlNpbmUgPSBTaW5lO1xuICBleHBvcnRzLlN0ZXBwZWRFYXNlID0gU3RlcHBlZEVhc2U7XG4gIGV4cG9ydHMuU3Ryb25nID0gU3Ryb25nO1xuICBleHBvcnRzLlRpbWVsaW5lTGl0ZSA9IFRpbWVsaW5lO1xuICBleHBvcnRzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG4gIGV4cG9ydHMuVHdlZW5MaXRlID0gVHdlZW47XG4gIGV4cG9ydHMuVHdlZW5NYXggPSBUd2Vlbk1heFdpdGhDU1M7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IGdzYXBXaXRoQ1NTO1xuICBleHBvcnRzLmdzYXAgPSBnc2FwV2l0aENTUztcblxuICBpZiAodHlwZW9mKHdpbmRvdykgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyAhPT0gZXhwb3J0cykge09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7fSBlbHNlIHtkZWxldGUgd2luZG93LmRlZmF1bHQ7fVxuXG59KSkpO1xuIiwiLyogbG9jb21vdGl2ZS1zY3JvbGwgdjQuMS4yIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vbG9jb21vdGl2ZW10bC9sb2NvbW90aXZlLXNjcm9sbCAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTG9jb21vdGl2ZVNjcm9sbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIGNhbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBlbDogZG9jdW1lbnQsXG4gICAgbmFtZTogJ3Njcm9sbCcsXG4gICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIGluaXRQb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIHJlbG9hZE9uQ29udGV4dENoYW5nZTogZmFsc2UsXG4gICAgbGVycDogMC4xLFxuICAgIFwiY2xhc3NcIjogJ2lzLWludmlldycsXG4gICAgc2Nyb2xsYmFyQ29udGFpbmVyOiBmYWxzZSxcbiAgICBzY3JvbGxiYXJDbGFzczogJ2Mtc2Nyb2xsYmFyJyxcbiAgICBzY3JvbGxpbmdDbGFzczogJ2hhcy1zY3JvbGwtc2Nyb2xsaW5nJyxcbiAgICBkcmFnZ2luZ0NsYXNzOiAnaGFzLXNjcm9sbC1kcmFnZ2luZycsXG4gICAgc21vb3RoQ2xhc3M6ICdoYXMtc2Nyb2xsLXNtb290aCcsXG4gICAgaW5pdENsYXNzOiAnaGFzLXNjcm9sbC1pbml0JyxcbiAgICBnZXRTcGVlZDogZmFsc2UsXG4gICAgZ2V0RGlyZWN0aW9uOiBmYWxzZSxcbiAgICBzY3JvbGxGcm9tQW55d2hlcmU6IGZhbHNlLFxuICAgIG11bHRpcGxpZXI6IDEsXG4gICAgZmlyZWZveE11bHRpcGxpZXI6IDUwLFxuICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICByZXNldE5hdGl2ZVNjcm9sbDogdHJ1ZSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIHNtb290aDogZmFsc2UsXG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgYnJlYWtwb2ludDogMTAyNFxuICAgIH0sXG4gICAgc21hcnRwaG9uZToge1xuICAgICAgc21vb3RoOiBmYWxzZSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCdcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgICAgaWYgKG9wdGlvbnMuc21hcnRwaG9uZSkgT2JqZWN0LmFzc2lnbih0aGlzLnNtYXJ0cGhvbmUsIG9wdGlvbnMuc21hcnRwaG9uZSk7XG4gICAgICB0aGlzLnRhYmxldCA9IGRlZmF1bHRzLnRhYmxldDtcbiAgICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnbG9jb21vdGl2ZSc7XG4gICAgICB0aGlzLmh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHRoaXMud2luZG93TWlkZGxlID0ge1xuICAgICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy53aW5kb3dIZWlnaHQgLyAyXG4gICAgICB9O1xuICAgICAgdGhpcy5lbHMgPSB7fTtcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzID0ge307XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0NhbGxFdmVudFNldCA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGVja1Njcm9sbCA9IHRoaXMuY2hlY2tTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNoZWNrRXZlbnQgPSB0aGlzLmNoZWNrRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBsaW1pdDoge1xuICAgICAgICAgIHg6IHRoaXMuaHRtbC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB5OiB0aGlzLmh0bWwub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRFbGVtZW50czogdGhpcy5jdXJyZW50RWxlbWVudHNcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGFibGV0KSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3RhYmxldCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3NtYXJ0cGhvbmUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSAnZGVza3RvcCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB0aGlzLmRpcmVjdGlvbiA9IHRoaXNbdGhpcy5jb250ZXh0XS5kaXJlY3Rpb247XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQXhpcyA9ICd4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQXhpcyA9ICd5JztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmluaXRDbGFzcyk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoZWNrU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hlY2tSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Jlc2l6ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMucmVzaXplVGljaykge1xuICAgICAgICAgIHRoaXMucmVzaXplVGljayA9IHRydWU7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc2l6ZSgpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNpemVUaWNrID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge31cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hlY2tDb250ZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tDb250ZXh0KCkge1xuICAgICAgICBpZiAoIXRoaXMucmVsb2FkT25Db250ZXh0Q2hhbmdlKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSAvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEgfHwgdGhpcy53aW5kb3dXaWR0aCA8IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG4gICAgICAgIHRoaXMuaXNUYWJsZXQgPSB0aGlzLmlzTW9iaWxlICYmIHRoaXMud2luZG93V2lkdGggPj0gdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcbiAgICAgICAgdmFyIG9sZENvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1RhYmxldCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3RhYmxldCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9ICdzbWFydHBob25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ2Rlc2t0b3AnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZENvbnRleHQgIT0gdGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgdmFyIG9sZFNtb290aCA9IG9sZENvbnRleHQgPT0gJ2Rlc2t0b3AnID8gdGhpcy5zbW9vdGggOiB0aGlzW29sZENvbnRleHRdLnNtb290aDtcbiAgICAgICAgICB2YXIgbmV3U21vb3RoID0gdGhpcy5jb250ZXh0ID09ICdkZXNrdG9wJyA/IHRoaXMuc21vb3RoIDogdGhpc1t0aGlzLmNvbnRleHRdLnNtb290aDtcbiAgICAgICAgICBpZiAob2xkU21vb3RoICE9IG5ld1Ntb290aCkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluaXRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RXZlbnRzKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLnNjcm9sbFRvRWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItdG9dXCIpKTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxUbyA9IHRoaXMuc2V0U2Nyb2xsVG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0Vscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMyLnNldFNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRTY3JvbGxUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbFRvKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLWhyZWZcIikpIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyksIHtcbiAgICAgICAgICBvZmZzZXQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1vZmZzZXRcIikpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRFbGVtZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKCkge31cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGV0ZWN0RWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRlY3RFbGVtZW50cyhoYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgIHZhciBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC54O1xuICAgICAgICB2YXIgc2Nyb2xsUmlnaHQgPSBzY3JvbGxMZWZ0ICsgdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5lbHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgaSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICBlbCA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgaWYgKGVsICYmICghZWwuaW5WaWV3IHx8IGhhc0NhbGxFdmVudFNldCkpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgaWYgKHNjcm9sbFJpZ2h0ID49IGVsLmxlZnQgJiYgc2Nyb2xsTGVmdCA8IGVsLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzY3JvbGxCb3R0b20gPj0gZWwudG9wICYmIHNjcm9sbFRvcCA8IGVsLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5zZXRJblZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsICYmIGVsLmluVmlldykge1xuICAgICAgICAgICAgaWYgKF90aGlzMy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICB2YXIgd2lkdGggPSBlbC5yaWdodCAtIGVsLmxlZnQ7XG4gICAgICAgICAgICAgIGVsLnByb2dyZXNzID0gKF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueCAtIChlbC5sZWZ0IC0gX3RoaXMzLndpbmRvd1dpZHRoKSkgLyAod2lkdGggKyBfdGhpczMud2luZG93V2lkdGgpO1xuXG4gICAgICAgICAgICAgIGlmIChzY3JvbGxSaWdodCA8IGVsLmxlZnQgfHwgc2Nyb2xsTGVmdCA+IGVsLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbC5ib3R0b20gLSBlbC50b3A7XG4gICAgICAgICAgICAgIGVsLnByb2dyZXNzID0gKF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueSAtIChlbC50b3AgLSBfdGhpczMud2luZG93SGVpZ2h0KSkgLyAoaGVpZ2h0ICsgX3RoaXMzLndpbmRvd0hlaWdodCk7XG5cbiAgICAgICAgICAgICAgaWYgKHNjcm9sbEJvdHRvbSA8IGVsLnRvcCB8fCBzY3JvbGxUb3AgPiBlbC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIHRoaXMuZWxzID0gdGhpcy5lbHMuZmlsdGVyKChjdXJyZW50LCBpKSA9PiB7XG4gICAgICAgIC8vICAgICByZXR1cm4gY3VycmVudCAhPT0gbnVsbDtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEluVmlld1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LmFkZChjdXJyZW50W1wiY2xhc3NcIl0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50c1tpXSA9IGN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuY2FsbCAmJiB0aGlzLmhhc0NhbGxFdmVudFNldCkge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYWxsKGN1cnJlbnQsICdlbnRlcicpO1xuXG4gICAgICAgICAgaWYgKCFjdXJyZW50LnJlcGVhdCkge1xuICAgICAgICAgICAgdGhpcy5lbHNbaV0uY2FsbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBpZiAoIWN1cnJlbnQucmVwZWF0ICYmICFjdXJyZW50LnNwZWVkICYmICFjdXJyZW50LnN0aWNreSkge1xuICAgICAgICAvLyAgICAgaWYgKCFjdXJyZW50LmNhbGwgfHwgY3VycmVudC5jYWxsICYmIHRoaXMuaGFzQ2FsbEV2ZW50U2V0KSB7XG4gICAgICAgIC8vICAgICAgICB0aGlzLmVsc1tpXSA9IG51bGxcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldE91dE9mVmlld1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIChjdXJyZW50LnJlcGVhdCB8fCBjdXJyZW50LnNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lbHNbaV0uaW5WaWV3ID0gZmFsc2U7IC8vIH1cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbCA9PT0gaSAmJiBkZWxldGUgX3RoaXM0LmN1cnJlbnRFbGVtZW50c1tlbF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmNhbGwgJiYgdGhpcy5oYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FsbChjdXJyZW50LCAnZXhpdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQucmVwZWF0KSB7XG4gICAgICAgICAgY3VycmVudC5lbC5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRbXCJjbGFzc1wiXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGlzcGF0Y2hDYWxsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hDYWxsKGN1cnJlbnQsIHdheSkge1xuICAgICAgICB0aGlzLmNhbGxXYXkgPSB3YXk7XG4gICAgICAgIHRoaXMuY2FsbFZhbHVlID0gY3VycmVudC5jYWxsLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYWxsT2JqID0gY3VycmVudDtcbiAgICAgICAgaWYgKHRoaXMuY2FsbFZhbHVlLmxlbmd0aCA9PSAxKSB0aGlzLmNhbGxWYWx1ZSA9IHRoaXMuY2FsbFZhbHVlWzBdO1xuICAgICAgICB2YXIgY2FsbEV2ZW50ID0gbmV3IEV2ZW50KHRoaXMubmFtZXNwYWNlICsgJ2NhbGwnKTtcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KGNhbGxFdmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRpc3BhdGNoU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hTY3JvbGwoKSB7XG4gICAgICAgIHZhciBzY3JvbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdzY3JvbGwnKTtcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KHNjcm9sbEV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0RXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RXZlbnRzKGV2ZW50LCBmdW5jKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgbGlzdC5wdXNoKGZ1bmMpO1xuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCB0aGlzLmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCA9PT0gJ2NhbGwnKSB7XG4gICAgICAgICAgdGhpcy5oYXNDYWxsRXZlbnRTZXQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5zZXRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNldEV2ZW50cyhldmVudCwgZnVuYykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgcmV0dXJuO1xuICAgICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKGZ1bmMpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBpZiAobGlzdC5pbmRleCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCB0aGlzLmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjaGVja0V2ZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB2YXIgbmFtZSA9IGV2ZW50LnR5cGUucmVwbGFjZSh0aGlzLm5hbWVzcGFjZSwgJycpO1xuICAgICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgICByZXR1cm4gZnVuYyhfdGhpczUuaW5zdGFuY2UpO1xuXG4gICAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoX3RoaXM1LmNhbGxWYWx1ZSwgX3RoaXM1LmNhbGxXYXksIF90aGlzNS5jYWxsT2JqKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdGFydFNjcm9sbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsKCkge31cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFNjcm9sbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTY3JvbGwoKSB7fVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGwoeCwgeSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzNi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKF90aGlzNi5uYW1lc3BhY2UgKyBldmVudCwgX3RoaXM2LmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNi5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pbml0Q2xhc3MpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBfZGVmYXVsdDtcbiAgfSgpO1xuXG4gIHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcbiAgXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICB2YXIgc21vb3Roc2Nyb2xsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAvKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gcG9seWZpbGxcbiAgICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAgIC8vIGFsaWFzZXNcbiAgICAgIHZhciB3ID0gd2luZG93O1xuICAgICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgICAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcbiAgICAgIGlmIChcbiAgICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBnbG9iYWxzXG4gICAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgICAgdmFyIFNDUk9MTF9USU1FID0gNDY4O1xuXG4gICAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgICB2YXIgbm93ID1cbiAgICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICAgIDogRGF0ZS5ub3c7XG5cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICAgKi9cbiAgICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgICAvKipcbiAgICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcbiAgICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAgICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgICAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cbiAgICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG5cbiAgICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTtcblxuICAgICAgICAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuICAgICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgICAgdmFyIG1ldGhvZDtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgICBzdGVwKHtcbiAgICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXG4gICAgICAgICAgICB3LFxuICAgICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgZC5ib2R5LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICAvLyB3LnNjcm9sbEJ5XG4gICAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwoXG4gICAgICAgICAgICB3LFxuICAgICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgZC5ib2R5LFxuICAgICAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxuICAgICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wO1xuXG4gICAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCxcbiAgICAgICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3BcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcbiAgICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB7XG4gICAgICAvLyBjb21tb25qc1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICAgIH1cblxuICB9KCkpO1xuICB9KTtcbiAgdmFyIHNtb290aHNjcm9sbF8xID0gc21vb3Roc2Nyb2xsLnBvbHlmaWxsO1xuXG4gIHZhciBfZGVmYXVsdCQxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICAgIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvcmUpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoX3RoaXMucmVzZXROYXRpdmVTY3JvbGwpIHtcbiAgICAgICAgaWYgKGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuXG4gICAgICBpZiAod2luZG93LnNtb290aHNjcm9sbFBvbHlmaWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2luZG93LnNtb290aHNjcm9sbFBvbHlmaWxsID0gc21vb3Roc2Nyb2xsO1xuICAgICAgICB3aW5kb3cuc21vb3Roc2Nyb2xsUG9seWZpbGwucG9seWZpbGwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoZWNrU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiY2hlY2tTY3JvbGxcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmFkZERpcmVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICB0aGlzLmFkZFNwZWVkKCk7XG4gICAgICAgICAgdGhpcy5zcGVlZFRzID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZERpcmVjdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERpcmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkU3BlZWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTcGVlZCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIE1hdGgubWF4KDEsIERhdGUubm93KCkgLSB0aGlzLnNwZWVkVHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlc2l6ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5lbHMgPSB7fTtcbiAgICAgICAgdmFyIGVscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtJyArIHRoaXMubmFtZSArICddJyk7XG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgQkNSID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIGNsID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdDbGFzcyddIHx8IF90aGlzM1tcImNsYXNzXCJdO1xuICAgICAgICAgIHZhciBpZCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ0lkJ10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdJZCddIDogaW5kZXg7XG4gICAgICAgICAgdmFyIHRvcDtcbiAgICAgICAgICB2YXIgbGVmdDtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnT2Zmc2V0J10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdPZmZzZXQnXS5zcGxpdCgnLCcpIDogX3RoaXMzLm9mZnNldDtcbiAgICAgICAgICB2YXIgcmVwZWF0ID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgICB2YXIgY2FsbCA9IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnQ2FsbCddO1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ1RhcmdldCddO1xuICAgICAgICAgIHZhciB0YXJnZXRFbDtcblxuICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiXCIuY29uY2F0KHRhcmdldCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRFbCA9IGVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0YXJnZXRFbEJDUiA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHRvcCA9IHRhcmdldEVsQkNSLnRvcCArIF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxCQ1IubGVmdCArIF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueDtcbiAgICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIHZhciByaWdodCA9IGxlZnQgKyB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgIGlmIChyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBlYXQgPSBfdGhpczMucmVwZWF0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IF90aGlzMy5nZXRSZWxhdGl2ZU9mZnNldChvZmZzZXQpO1xuXG4gICAgICAgICAgdG9wID0gdG9wICsgcmVsYXRpdmVPZmZzZXRbMF07XG4gICAgICAgICAgYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgICAgdmFyIG1hcHBlZEVsID0ge1xuICAgICAgICAgICAgZWw6IGVsLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldEVsLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgXCJjbGFzc1wiOiBjbCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGw6IGNhbGxcbiAgICAgICAgICB9O1xuICAgICAgICAgIF90aGlzMy5lbHNbaWRdID0gbWFwcGVkRWw7XG5cbiAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsKSkge1xuICAgICAgICAgICAgX3RoaXMzLnNldEluVmlldyhfdGhpczMuZWxzW2lkXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUVsZW1lbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIGkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgZWwgPSBfcmVmMlsxXTtcblxuICAgICAgICAgIHZhciB0b3AgPSBlbC50YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsLnk7XG5cbiAgICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgZWwudGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gX3RoaXM0LmdldFJlbGF0aXZlT2Zmc2V0KGVsLm9mZnNldCk7XG5cbiAgICAgICAgICBfdGhpczQuZWxzW2ldLnRvcCA9IHRvcCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICAgIF90aGlzNC5lbHNbaV0uYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UmVsYXRpdmVPZmZzZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWxhdGl2ZU9mZnNldChvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gWzAsIDBdO1xuXG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9mZnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsICcnKSAqIHRoaXMud2luZG93SGVpZ2h0IC8gMTAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gb2Zmc2V0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWxhdGl2ZU9mZnNldDtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICAgKiAgICAgICAgICB0YXJnZXQge25vZGUsIHN0cmluZywgXCJ0b3BcIiwgXCJib3R0b21cIiwgaW50fSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAgICogICAgICAgICAgb3B0aW9ucyB7b2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0IGZvciBhZGRpdGlvbm5hbCBzZXR0aW5ncy5cbiAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzY3JvbGxUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIC8vIFBhcnNlIG9wdGlvbnNcbiAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG9wdGlvbnMub2Zmc2V0KSB8fCAwOyAvLyBBbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRgIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPyBvcHRpb25zLmNhbGxiYWNrIDogZmFsc2U7IC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNjcm9sbFRvIGNvbXBsZXRlcyAobm90ZSB0aGF0IGl0IHdvbid0IHdhaXQgZm9yIGxlcnAgdG8gc3RhYmlsaXplKVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFNlbGVjdG9yIG9yIGJvdW5kYXJpZXNcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndG9wJykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5odG1sO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5odG1sLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBJZiB0aGUgcXVlcnkgZmFpbHMsIGFib3J0XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyBBYnNvbHV0ZSBjb29yZGluYXRlXG4gICAgICAgICAgdGFyZ2V0ID0gcGFyc2VJbnQodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUpIDsgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdgdGFyZ2V0YCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFdlIGhhdmUgYSB0YXJnZXQgdGhhdCBpcyBub3QgYSBjb29yZGluYXRlIHlldCwgZ2V0IGl0XG5cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgb2Zmc2V0ICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQgKyBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNUYXJnZXRSZWFjaGVkID0gZnVuY3Rpb24gaXNUYXJnZXRSZWFjaGVkKCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cucGFnZVlPZmZzZXQpID09PSBwYXJzZUludChvZmZzZXQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChpc1RhcmdldFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgICAgICAgIGlmIChpc1RhcmdldFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogb2Zmc2V0LFxuICAgICAgICAgIGJlaGF2aW9yOiBvcHRpb25zLmR1cmF0aW9uID09PSAwID8gJ2F1dG8nIDogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihfZGVmYXVsdC5wcm90b3R5cGUpLCBcImRlc3Ryb3lcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBfZGVmYXVsdDtcbiAgfShfZGVmYXVsdCk7XG5cbiAgLypcbiAgb2JqZWN0LWFzc2lnblxuICAoYykgU2luZHJlIFNvcmh1c1xuICBAbGljZW5zZSBNSVRcbiAgKi9cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuICBmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcbiAgXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICBcdH1cblxuICBcdHJldHVybiBPYmplY3QodmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcbiAgXHR0cnkge1xuICBcdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG4gIFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG4gIFx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG4gIFx0XHR0ZXN0MVs1XSA9ICdkZSc7XG4gIFx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG4gIFx0XHR2YXIgdGVzdDIgPSB7fTtcbiAgXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBcdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG4gIFx0XHR9XG4gIFx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuICBcdFx0XHRyZXR1cm4gdGVzdDJbbl07XG4gIFx0XHR9KTtcbiAgXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcbiAgXHRcdHZhciB0ZXN0MyA9IHt9O1xuICBcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG4gIFx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG4gIFx0XHR9KTtcbiAgXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuICBcdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHR9IGNhdGNoIChlcnIpIHtcbiAgXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0fVxuICB9XG5cbiAgdmFyIG9iamVjdEFzc2lnbiA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICBcdHZhciBmcm9tO1xuICBcdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIFx0dmFyIHN5bWJvbHM7XG5cbiAgXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuICBcdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG4gIFx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICBcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gIFx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcbiAgXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRyZXR1cm4gdG87XG4gIH07XG5cbiAgZnVuY3Rpb24gRSAoKSB7XG4gICAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAgIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbiAgfVxuXG4gIEUucHJvdG90eXBlID0ge1xuICAgIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgICBmbjogY2FsbGJhY2ssXG4gICAgICAgIGN0eDogY3R4XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrO1xuICAgICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gICAgfSxcblxuICAgIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRpbnlFbWl0dGVyID0gRTtcblxuICB2YXIgbGV0aGFyZ3kgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gIC8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciByb290O1xuXG4gICAgcm9vdCA9ICBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgZnVuY3Rpb24gTGV0aGFyZ3koc3RhYmlsaXR5LCBzZW5zaXRpdml0eSwgdG9sZXJhbmNlLCBkZWxheSkge1xuICAgICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2UgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyh0b2xlcmFuY2UpIDogMS4xO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIExldGhhcmd5LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgICBpZiAoZS53aGVlbERlbHRhICE9IG51bGwpIHtcbiAgICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICAgIGxhc3REZWx0YSA9IGUuZGVsdGFZICogLTQwO1xuICAgICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICAgIGlmIChsYXN0RGVsdGEgPiAwKSB7XG4gICAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgICAgbGFzdERlbHRhcyA9IGRpcmVjdGlvbiA9PT0gLTEgPyB0aGlzLmxhc3REb3duRGVsdGFzIDogdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgICBvbGRTdW0gPSBsYXN0RGVsdGFzT2xkLnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3U3VtID0gbGFzdERlbHRhc05ldy5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgICAgfSk7XG4gICAgICAgIG9sZEF2ZXJhZ2UgPSBvbGRTdW0gLyBsYXN0RGVsdGFzT2xkLmxlbmd0aDtcbiAgICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIH07XG5cbiAgICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdERvd25EZWx0YXM7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgICB9KSgpO1xuXG4gIH0pLmNhbGwoY29tbW9uanNHbG9iYWwpO1xuICB9KTtcblxuICB2YXIgc3VwcG9ydCA9IChmdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgICAgaGFzTW91c2VXaGVlbEV2ZW50OiAnb25tb3VzZXdoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgICBoYXNUb3VjaDogKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LlRvdWNoRXZlbnQgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoLFxuICAgICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgICB9O1xuICB9KSgpO1xuXG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgICBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICB2YXIgYmluZGFsbFN0YW5kYWxvbmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkkMS5jYWxsKG9iamVjdCwgbWV0aG9kKSkge1xuICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICAgIG9iamVjdFtmXSA9IGJpbmQob2JqZWN0W2ZdLCBvYmplY3QpO1xuICAgICAgfVxuICB9O1xuXG4gIC8qXG4gICAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgICAgb3IgcGFydGlhbCBhcHBsaWNhdGlvbi5cbiAgKi9cbiAgZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIExldGhhcmd5ID0gbGV0aGFyZ3kuTGV0aGFyZ3k7XG5cblxuXG4gIHZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbiAgdmFyIHNyYyA9IFZpcnR1YWxTY3JvbGw7XG5cbiAgdmFyIGtleUNvZGVzID0ge1xuICAgICAgTEVGVDogMzcsXG4gICAgICBVUDogMzgsXG4gICAgICBSSUdIVDogMzksXG4gICAgICBET1dOOiA0MCxcbiAgICAgIFNQQUNFOiAzMlxuICB9O1xuXG4gIGZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgICAgYmluZGFsbFN0YW5kYWxvbmUodGhpcywgJ19vbldoZWVsJywgJ19vbk1vdXNlV2hlZWwnLCAnX29uVG91Y2hTdGFydCcsICdfb25Ub3VjaE1vdmUnLCAnX29uS2V5RG93bicpO1xuXG4gICAgICB0aGlzLmVsID0gd2luZG93O1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAxNSxcbiAgICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgICB1bnByZXZlbnRUb3VjaENsYXNzOiAndnMtdG91Y2htb3ZlLWFsbG93ZWQnLFxuICAgICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgICAgdXNlS2V5Ym9hcmQ6IHRydWUsXG4gICAgICAgICAgdXNlVG91Y2g6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyB0aW55RW1pdHRlcigpO1xuICAgICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICBkZWx0YVk6IDBcbiAgICAgIH07XG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICAgIH1cbiAgfVxuXG4gIFZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgICAgeDogZXZ0LngsXG4gICAgICAgICAgeTogZXZ0LnksXG4gICAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICAgIH0pO1xuICB9O1xuXG4gIFZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgIH1cblxuICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICAgIHRoaXMuX25vdGlmeShlKTtcbiAgfTtcblxuICBWaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICAgIHRoaXMuX25vdGlmeShlKTtcbiAgfTtcblxuICBWaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuICB9O1xuXG4gIFZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgICB0aGlzLl9ub3RpZnkoZSk7XG4gIH07XG5cbiAgVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MDtcblxuICAgICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgICBldnQuZGVsdGFZID0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgICBldnQuZGVsdGFZID0gLSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbm90aWZ5KGUpO1xuICB9O1xuXG4gIFZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAgIGlmKHN1cHBvcnQuaGFzVG91Y2ggJiYgdGhpcy5vcHRpb25zLnVzZVRvdWNoKSB7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG4gIH07XG5cbiAgVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xuICB9O1xuXG4gIFZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICAgIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gICAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbiAgfTtcblxuICBWaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICAgIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gICAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG4gIH07XG5cbiAgVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICAgIGV2dC54ID0gMDtcbiAgICAgIGV2dC55ID0gMDtcbiAgfTtcblxuICBWaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgICAgdGhpcy5fdW5iaW5kKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpIHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpIHtcbiAgICB2YXIgdHJhbnNsYXRlID0ge307XG4gICAgaWYgKCF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkgcmV0dXJuO1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybTtcbiAgICB2YXIgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pO1xuXG4gICAgaWYgKG1hdCkge1xuICAgICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxMl0pIDogMDtcbiAgICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTNdKSA6IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgICB0cmFuc2xhdGUueCA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzRdKSA6IDA7XG4gICAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBwYXJlbnQgbm9kZXMgb2YgdGhlIGdpdmVuIG5vZGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBub2RlXG4gICAqIEByZXR1cm4ge2FycmF5fSBwYXJlbnQgbm9kZXNcbiAgICovXG4gIGZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICAgIC8vIFNldCB1cCBhIHBhcmVudCBhcnJheVxuICAgIHZhciBwYXJlbnRzID0gW107IC8vIFB1c2ggZWFjaCBwYXJlbnQgZWxlbWVudCB0byB0aGUgYXJyYXlcblxuICAgIGZvciAoOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gICAgfSAvLyBSZXR1cm4gb3VyIHBhcmVudCBhcnJheVxuXG5cbiAgICByZXR1cm4gcGFyZW50cztcbiAgfSAvLyBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWdldC10aGUtY2xvc2VzdC1wYXJlbnQtZWxlbWVudC13aXRoLWEtbWF0Y2hpbmctc2VsZWN0b3ItdXNpbmctdmFuaWxsYS1qYXZhc2NyaXB0L1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAgICogQmV6aWVyRWFzaW5nIC0gdXNlIGJlemllciBjdXJ2ZSBmb3IgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAgICogYnkgR2HDq3RhbiBSZW5hdWRlYXUgMjAxNCAtIDIwMTUg4oCTIE1JVCBMaWNlbnNlXG4gICAqL1xuXG4gIC8vIFRoZXNlIHZhbHVlcyBhcmUgZXN0YWJsaXNoZWQgYnkgZW1waXJpY2lzbSB3aXRoIHRlc3RzICh0cmFkZW9mZjogcGVyZm9ybWFuY2UgVlMgcHJlY2lzaW9uKVxuICB2YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0O1xuICB2YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuICB2YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuICB2YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIHZhciBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAnZnVuY3Rpb24nO1xuXG4gIGZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbiAgZnVuY3Rpb24gQiAoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTsgfVxuICBmdW5jdGlvbiBDIChhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExOyB9XG5cbiAgLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbiAgZnVuY3Rpb24gY2FsY0JlemllciAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVDsgfVxuXG4gIC8vIFJldHVybnMgZHgvZHQgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgZHkvZHQgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbiAgZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZSAoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlIChhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgfVxuICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgfVxuICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBMaW5lYXJFYXNpbmcgKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHZhciBzcmMkMSA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICAgIH1cblxuICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgcmV0dXJuIExpbmVhckVhc2luZztcbiAgICB9XG5cbiAgICAvLyBQcmVjb21wdXRlIHNhbXBsZXMgdGFibGVcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcblxuICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmICh4ID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBrZXlDb2RlcyQxID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFRBQjogOSxcbiAgICBQQUdFVVA6IDMzLFxuICAgIFBBR0VET1dOOiAzNCxcbiAgICBIT01FOiAzNixcbiAgICBFTkQ6IDM1XG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0JDIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db3JlKSB7XG4gICAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29yZSk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICAgIGlmIChoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgIH1cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGlmIChfdGhpcy5pbmVydGlhKSBfdGhpcy5sZXJwID0gX3RoaXMuaW5lcnRpYSAqIDAuMTtcbiAgICAgIF90aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICBfdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICBfdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLnBhcmFsbGF4RWxlbWVudHMgPSB7fTtcbiAgICAgIF90aGlzLnN0b3AgPSBmYWxzZTtcbiAgICAgIF90aGlzLnNjcm9sbGJhckNvbnRhaW5lciA9IG9wdGlvbnMuc2Nyb2xsYmFyQ29udGFpbmVyO1xuICAgICAgX3RoaXMuY2hlY2tLZXkgPSBfdGhpcy5jaGVja0tleS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMuY2hlY2tLZXksIGZhbHNlKTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc21vb3RoQ2xhc3MpO1xuICAgICAgICB0aGlzLmh0bWwuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1kaXJlY3Rpb25cIiksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBkZWx0YToge1xuICAgICAgICAgICAgeDogdGhpcy5pbml0UG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuaW5pdFBvc2l0aW9uLnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgeDogdGhpcy5pbml0UG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuaW5pdFBvc2l0aW9uLnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLnZzID0gbmV3IHNyYyh7XG4gICAgICAgICAgZWw6IHRoaXMuc2Nyb2xsRnJvbUFueXdoZXJlID8gZG9jdW1lbnQgOiB0aGlzLmVsLFxuICAgICAgICAgIG1vdXNlTXVsdGlwbGllcjogbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEgPyAxIDogMC40LFxuICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiB0aGlzLmZpcmVmb3hNdWx0aXBsaWVyLFxuICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogdGhpcy50b3VjaE11bHRpcGxpZXIsXG4gICAgICAgICAgdXNlS2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudnMub24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczIudXBkYXRlRGVsdGEoZSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFfdGhpczIuaXNTY3JvbGxpbmcpIF90aGlzMi5zdGFydFNjcm9sbGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxCYXIoKTtcbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwodHJ1ZSk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldFNjcm9sbExpbWl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQueSA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5lbC5jaGlsZHJlbjtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gbm9kZXNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdC54ID0gdG90YWxXaWR0aCAtIHRoaXMud2luZG93V2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RhcnRTY3JvbGxpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFNjcm9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRzID0gRGF0ZS5ub3coKTsgLy8gUmVjb3JkIHRpbWVzdGFtcFxuXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdG9wU2Nyb2xsaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbGluZygpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jaGVja1Njcm9sbFJhZik7IC8vIFByZXZlbnQgY2hlY2tTY3JvbGwgdG8gY29udGludWUgbG9vcGluZ1xuICAgICAgICAvL1BldmVudCBzY3JvbGxiYXIgZ2xpdGNoL2xvY2tpbmdcblxuICAgICAgICB0aGlzLnN0YXJ0U2Nyb2xsVHMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9SYWYpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFRvUmFmKTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvUmFmID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IE1hdGgucm91bmQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjaGVja0tleVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RvcCkge1xuICAgICAgICAgIC8vIElmIHdlIGFyZSBzdG9wcGVkLCB3ZSBkb24ndCB3YW50IGFueSBzY3JvbGwgdG8gb2NjdXIgYmVjYXVzZSBvZiBhIGtleXByZXNzXG4gICAgICAgICAgLy8gUHJldmVudCB0YWIgdG8gc2Nyb2xsIHRvIGFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IGtleUNvZGVzJDEuVEFCKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgbmF0aXZlIHNjcm9sbCBpcyBhbHdheXMgYXQgdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgICAgX3RoaXMzLmh0bWwuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlRBQjpcbiAgICAgICAgICAgIC8vIERvIG5vdCByZW1vdmUgdGhlIFJBRlxuICAgICAgICAgICAgLy8gSXQgYWxsb3dzIHRvIG92ZXJyaWRlIHRoZSBicm93c2VyJ3MgbmF0aXZlIHNjcm9sbFRvLCB3aGljaCBpcyBlc3NlbnRpYWxcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBuYXRpdmUgc2Nyb2xsIGlzIGFsd2F5cyBhdCB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgPSAwOyAvLyBSZXF1ZXN0IHNjcm9sbFRvIG9uIHRoZSBmb2N1c2VkRWxlbWVudCwgcHV0dGluZyBpdCBhdCB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW5cblxuICAgICAgICAgICAgICBfdGhpczMuc2Nyb2xsVG8oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgICAgIG9mZnNldDogLXdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlVQOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IDI0MDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkRPV046XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gKz0gMjQwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIGtleUNvZGVzJDEuUEFHRVVQOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlBBR0VET1dOOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkhPTUU6XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIGtleUNvZGVzJDEuRU5EOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlNQQUNFOlxuICAgICAgICAgICAgaWYgKCEoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSAwO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID4gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc107XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpOyAvLyBTdG9wIGFueSBtb3ZlbWVudCwgYWxsb3dzIHRvIGtpbGwgYW55IG90aGVyIGBzY3JvbGxUb2Agc3RpbGwgaGFwcGVuaW5nXG5cbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoZWNrU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmb3JjZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JjZWQgfHwgdGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbFJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczQuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICAgIHZhciB0aW1lU2luY2VTdGFydCA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0U2Nyb2xsVHM7IC8vIEdldCB0aGUgdGltZSBzaW5jZSB0aGUgc2Nyb2xsIHdhcyBzdGFydGVkOiB0aGUgc2Nyb2xsIGNhbiBiZSBzdG9wcGVkIGFnYWluIG9ubHkgcGFzdCAxMDBtc1xuXG4gICAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGluZ1Njcm9sbCAmJiB0aW1lU2luY2VTdGFydCA+IDEwMCAmJiAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICE9IDAgfHwgZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNlY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgICBpID0gX3JlZjJbMF0sXG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgICBpZiAoc2VjdGlvbi5wZXJzaXN0ZW50IHx8IF90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdID4gc2VjdGlvbi5vZmZzZXRbX3RoaXM0LmRpcmVjdGlvbkF4aXNdICYmIF90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdIDwgc2VjdGlvbi5saW1pdFtfdGhpczQuZGlyZWN0aW9uQXhpc10pIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzNC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgLV90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdLCAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpczQudHJhbnNmb3JtKHNlY3Rpb24uZWwsIDAsIC1fdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXNlY3Rpb24uaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChfdGhpczQubmFtZSwgXCItc2VjdGlvbi1pbnZpZXdcIiksICcnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHNlY3Rpb24uaW5WaWV3IHx8IGZvcmNlZCkge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChfdGhpczQubmFtZSwgXCItc2VjdGlvbi1pbnZpZXdcIikpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX3RoaXM0LnRyYW5zZm9ybShzZWN0aW9uLmVsLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGREaXJlY3Rpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRTcGVlZCgpO1xuICAgICAgICAgICAgdGhpcy5zcGVlZFRzID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cygpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuaGFzU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdIC8gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdICogdGhpcy5zY3JvbGxCYXJMaW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhclRodW1iLCBzY3JvbGxCYXJUcmFuc2xhdGlvbiwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhclRodW1iLCAwLCBzY3JvbGxCYXJUcmFuc2xhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJjaGVja1Njcm9sbFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNoZWNrQ29udGV4dCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHtcbiAgICAgICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgICAgICB5OiB0aGlzLndpbmRvd0hlaWdodCAvIDJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlRGVsdGFcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEZWx0YShlKSB7XG4gICAgICAgIHZhciBkZWx0YTtcbiAgICAgICAgdmFyIGdlc3R1cmVEaXJlY3Rpb24gPSB0aGlzW3RoaXMuY29udGV4dF0gJiYgdGhpc1t0aGlzLmNvbnRleHRdLmdlc3R1cmVEaXJlY3Rpb24gPyB0aGlzW3RoaXMuY29udGV4dF0uZ2VzdHVyZURpcmVjdGlvbiA6IHRoaXMuZ2VzdHVyZURpcmVjdGlvbjtcblxuICAgICAgICBpZiAoZ2VzdHVyZURpcmVjdGlvbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgZGVsdGEgPSBlLmRlbHRhWCArIGUuZGVsdGFZO1xuICAgICAgICB9IGVsc2UgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBkZWx0YSA9IGUuZGVsdGFZO1xuICAgICAgICB9IGVsc2UgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGRlbHRhID0gZS5kZWx0YVg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSBkZWx0YSAqIHRoaXMubXVsdGlwbGllcjtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPiB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgfHwgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmxlcnApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdID4gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10sIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGREaXJlY3Rpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREaXJlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueCA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLngpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS54IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueCkge1xuICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkU3BlZWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTcGVlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKSAvIE1hdGgubWF4KDEsIERhdGUubm93KCkgLSB0aGlzLnNwZWVkVHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluaXRTY3JvbGxCYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckNsYXNzKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuY2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckNsYXNzLCBcIl90aHVtYlwiKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFwcGVuZCh0aGlzLnNjcm9sbGJhclRodW1iKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXJDb250YWluZXIpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhckNvbnRhaW5lci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgfSAvLyBTY3JvbGxiYXIgRXZlbnRzXG5cblxuICAgICAgICB0aGlzLmdldFNjcm9sbEJhciA9IHRoaXMuZ2V0U2Nyb2xsQmFyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVsZWFzZVNjcm9sbEJhciA9IHRoaXMucmVsZWFzZVNjcm9sbEJhci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVTY3JvbGxCYXIgPSB0aGlzLm1vdmVTY3JvbGxCYXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmdldFNjcm9sbEJhcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZVNjcm9sbEJhcik7IC8vIFNldCBzY3JvbGxiYXIgdmFsdWVzXG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxiYXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMud2luZG93V2lkdGggPD0gdGhpcy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy53aW5kb3dIZWlnaHQgPD0gdGhpcy53aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhc1Njcm9sbGJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyQkNSID0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFySGVpZ2h0ID0gdGhpcy5zY3JvbGxiYXJCQ1IuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5zY3JvbGxiYXJCQ1Iud2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGhpcy5zY3JvbGxiYXJXaWR0aCAqIHRoaXMuc2Nyb2xsYmFyV2lkdGggLyAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy5zY3JvbGxiYXJXaWR0aCksIFwicHhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckhlaWdodCAqIHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC8gKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMuc2Nyb2xsYmFySGVpZ2h0KSwgXCJweFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWJCQ1IgPSB0aGlzLnNjcm9sbGJhclRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0ge1xuICAgICAgICAgIHg6IHRoaXMuc2Nyb2xsYmFyV2lkdGggLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLndpZHRoLFxuICAgICAgICAgIHk6IHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJUaHVtYkJDUi5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVpbml0U2Nyb2xsQmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLmhhc1Njcm9sbGJhciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy53aW5kb3dXaWR0aCA8PSB0aGlzLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmxpbWl0LnkgKyB0aGlzLndpbmRvd0hlaWdodCA8PSB0aGlzLndpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJCQ1IgPSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJIZWlnaHQgPSB0aGlzLnNjcm9sbGJhckJDUi5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLnNjcm9sbGJhckJDUi53aWR0aDtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhcldpZHRoICogdGhpcy5zY3JvbGxiYXJXaWR0aCAvICh0aGlzLmluc3RhbmNlLmxpbWl0LnggKyB0aGlzLnNjcm9sbGJhcldpZHRoKSwgXCJweFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFySGVpZ2h0ICogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLyAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy5zY3JvbGxiYXJIZWlnaHQpLCBcInB4XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYkJDUiA9IHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB7XG4gICAgICAgICAgeDogdGhpcy5zY3JvbGxiYXJXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWJCQ1Iud2lkdGgsXG4gICAgICAgICAgeTogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZXN0cm95U2Nyb2xsQmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmdldFNjcm9sbEJhcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZVNjcm9sbEJhcik7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTY3JvbGxCYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxCYXIoZSkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmRyYWdnaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZWxlYXNlU2Nyb2xsQmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRyYWdnaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtb3ZlU2Nyb2xsQmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHggPSAoZS5jbGllbnRYIC0gX3RoaXM1LnNjcm9sbGJhckJDUi5sZWZ0KSAqIDEwMCAvIF90aGlzNS5zY3JvbGxiYXJXaWR0aCAqIF90aGlzNS5pbnN0YW5jZS5saW1pdC54IC8gMTAwO1xuICAgICAgICAgICAgdmFyIHkgPSAoZS5jbGllbnRZIC0gX3RoaXM1LnNjcm9sbGJhckJDUi50b3ApICogMTAwIC8gX3RoaXM1LnNjcm9sbGJhckhlaWdodCAqIF90aGlzNS5pbnN0YW5jZS5saW1pdC55IC8gMTAwO1xuXG4gICAgICAgICAgICBpZiAoeSA+IDAgJiYgeSA8IF90aGlzNS5pbnN0YW5jZS5saW1pdC55KSB7XG4gICAgICAgICAgICAgIF90aGlzNS5pbnN0YW5jZS5kZWx0YS55ID0geTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHggPiAwICYmIHggPCBfdGhpczUuaW5zdGFuY2UubGltaXQueCkge1xuICAgICAgICAgICAgICBfdGhpczUuaW5zdGFuY2UuZGVsdGEueCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5lbHMgPSB7fTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0ge307IC8vIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgeSkgPT4ge1xuXG4gICAgICAgIHZhciBlbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIl1cIikpO1xuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXQncyBwYXJlbnQgc2VjdGlvblxuICAgICAgICAgIHZhciB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyhlbCk7XG4gICAgICAgICAgdmFyIHNlY3Rpb24gPSBPYmplY3QuZW50cmllcyhfdGhpczYuc2VjdGlvbnMpLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gX3JlZjRbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICAgIH0pLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRQYXJlbnRzLmluY2x1ZGVzKHNlY3Rpb24uZWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBjbCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnQ2xhc3MnXSB8fCBfdGhpczZbXCJjbGFzc1wiXTtcbiAgICAgICAgICB2YXIgaWQgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdJZCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnSWQnXSA6ICdlbCcgKyBpbmRleDtcbiAgICAgICAgICB2YXIgdG9wO1xuICAgICAgICAgIHZhciBsZWZ0O1xuICAgICAgICAgIHZhciByZXBlYXQgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1JlcGVhdCddO1xuICAgICAgICAgIHZhciBjYWxsID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdDYWxsJ107XG4gICAgICAgICAgdmFyIHBvc2l0aW9uID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICAgIHZhciBkZWxheSA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnRGVsYXknXTtcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdEaXJlY3Rpb24nXTtcbiAgICAgICAgICB2YXIgc3RpY2t5ID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICAgIHZhciBzcGVlZCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnU3BlZWQnXSA/IHBhcnNlRmxvYXQoZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdTcGVlZCddKSAvIDEwIDogZmFsc2U7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ09mZnNldCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnT2Zmc2V0J10uc3BsaXQoJywnKSA6IF90aGlzNi5vZmZzZXQ7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnVGFyZ2V0J107XG4gICAgICAgICAgdmFyIHRhcmdldEVsO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJcIi5jb25jYXQodGFyZ2V0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldEVsID0gZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRhcmdldEVsQkNSID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsQkNSLmxlZnQgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnggLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLng7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghc2VjdGlvbi5pblZpZXcpIHtcbiAgICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24uZWwpLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0IC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24uZWwpLnggLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0b3AgPSB0YXJnZXRFbEJDUi50b3AgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0ICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC54IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgdmFyIHJpZ2h0ID0gbGVmdCArIHRhcmdldEVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHZhciBtaWRkbGUgPSB7XG4gICAgICAgICAgICB4OiAocmlnaHQgLSBsZWZ0KSAvIDIgKyBsZWZ0LFxuICAgICAgICAgICAgeTogKGJvdHRvbSAtIHRvcCkgLyAyICsgdG9wXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICAgIHZhciBlbEJDUiA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIGVsVG9wID0gZWxCQ1IudG9wO1xuICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsQkNSLmxlZnQ7XG4gICAgICAgICAgICB2YXIgZWxEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgICAgeDogZWxMZWZ0IC0gbGVmdCxcbiAgICAgICAgICAgICAgeTogZWxUb3AgLSB0b3BcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0b3AgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGJvdHRvbSA9IGVsVG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0IC0gZWxEaXN0YW5jZVtfdGhpczYuZGlyZWN0aW9uQXhpc107XG4gICAgICAgICAgICByaWdodCA9IGVsTGVmdCArIHRhcmdldEVsLm9mZnNldFdpZHRoIC0gZWwub2Zmc2V0V2lkdGggLSBlbERpc3RhbmNlW190aGlzNi5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICAgIG1pZGRsZSA9IHtcbiAgICAgICAgICAgICAgeDogKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdCxcbiAgICAgICAgICAgICAgeTogKGJvdHRvbSAtIHRvcCkgLyAyICsgdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBlYXQgPSBfdGhpczYucmVwZWF0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IFswLCAwXTtcblxuICAgICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczYuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldFtpXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldLnJlcGxhY2UoJyUnLCAnJykgKiBfdGhpczYud2luZG93V2lkdGggLyAxMDApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IG9mZnNldFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZWZ0ID0gbGVmdCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0IC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9mZnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0W2ldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0W2ldLmluY2x1ZGVzKCclJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsICcnKSAqIF90aGlzNi53aW5kb3dIZWlnaHQgLyAxMDApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IG9mZnNldFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0b3AgPSB0b3AgKyByZWxhdGl2ZU9mZnNldFswXTtcbiAgICAgICAgICAgICAgYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1hcHBlZEVsID0ge1xuICAgICAgICAgICAgZWw6IGVsLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgXCJjbGFzc1wiOiBjbCxcbiAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgIG1pZGRsZTogbWlkZGxlLFxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGw6IGNhbGwsXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldEVsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBzdGlja3k6IHN0aWNreVxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXM2LmVsc1tpZF0gPSBtYXBwZWRFbDtcblxuICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2wpKSB7XG4gICAgICAgICAgICBfdGhpczYuc2V0SW5WaWV3KF90aGlzNi5lbHNbaWRdLCBpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNwZWVkICE9PSBmYWxzZSB8fCBzdGlja3kpIHtcbiAgICAgICAgICAgIF90aGlzNi5wYXJhbGxheEVsZW1lbnRzW2lkXSA9IG1hcHBlZEVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGRTZWN0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNlY3Rpb25zKCkge1xuICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICB0aGlzLnNlY3Rpb25zID0ge307XG4gICAgICAgIHZhciBzZWN0aW9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLXNlY3Rpb25dXCIpKTtcblxuICAgICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2VjdGlvbnMgPSBbdGhpcy5lbF07XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgIHZhciBpZCA9IHR5cGVvZiBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnSWQnXSA9PT0gJ3N0cmluZycgPyBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnSWQnXSA6ICdzZWN0aW9uJyArIGluZGV4O1xuICAgICAgICAgIHZhciBzZWN0aW9uQkNSID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogc2VjdGlvbkJDUi5sZWZ0IC0gd2luZG93LmlubmVyV2lkdGggKiAxLjUgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbikueCxcbiAgICAgICAgICAgIHk6IHNlY3Rpb25CQ1IudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICogMS41IC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBsaW1pdCA9IHtcbiAgICAgICAgICAgIHg6IG9mZnNldC54ICsgc2VjdGlvbkJDUi53aWR0aCArIHdpbmRvdy5pbm5lcldpZHRoICogMixcbiAgICAgICAgICAgIHk6IG9mZnNldC55ICsgc2VjdGlvbkJDUi5oZWlnaHQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgcGVyc2lzdGVudCA9IHR5cGVvZiBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcbiAgICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtc2VjdGlvbi1pZCcsIGlkKTtcbiAgICAgICAgICB2YXIgbWFwcGVkU2VjdGlvbiA9IHtcbiAgICAgICAgICAgIGVsOiBzZWN0aW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICBpblZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgcGVyc2lzdGVudDogcGVyc2lzdGVudCxcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXM3LnNlY3Rpb25zW2lkXSA9IG1hcHBlZFNlY3Rpb247XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm0oZWxlbWVudCwgeCwgeSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybTtcblxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgdHJhbnNmb3JtID0gXCJtYXRyaXgzZCgxLDAsMC4wMCwwLDAuMDAsMSwwLjAwLDAsMCwwLDEsMCxcIi5jb25jYXQoeCwgXCIsXCIpLmNvbmNhdCh5LCBcIiwwLDEpXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzdGFydCA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICB2YXIgbGVycFggPSBsZXJwKHN0YXJ0LngsIHgsIGRlbGF5KTtcbiAgICAgICAgICB2YXIgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsMCwwLjAwLDAsMC4wMCwxLDAuMDAsMCwwLDAsMSwwLFwiLmNvbmNhdChsZXJwWCwgXCIsXCIpLmNvbmNhdChsZXJwWSwgXCIsMCwxKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidHJhbnNmb3JtRWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgICB2YXIgc2V0QWxsRWxlbWVudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgICB2YXIgc2Nyb2xsUmlnaHQgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC54ICsgdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIHNjcm9sbE1pZGRsZSA9IHtcbiAgICAgICAgICB4OiB0aGlzLmluc3RhbmNlLnNjcm9sbC54ICsgdGhpcy53aW5kb3dNaWRkbGUueCxcbiAgICAgICAgICB5OiB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGUueVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFsbGF4RWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICAgICAgICBpID0gX3JlZjZbMF0sXG4gICAgICAgICAgICAgIGN1cnJlbnQgPSBfcmVmNlsxXTtcblxuICAgICAgICAgIHZhciB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGlzRm9yY2VkKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1cnJlbnQuaW5WaWV3IHx8IHNldEFsbEVsZW1lbnRzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IF90aGlzOC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM4LmRpcmVjdGlvbkF4aXNdICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAnZWxlbWVudFRvcCc6XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsQm90dG9tIC0gY3VycmVudC50b3ApICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChfdGhpczguaW5zdGFuY2UubGltaXRbX3RoaXM4LmRpcmVjdGlvbkF4aXNdIC0gc2Nyb2xsQm90dG9tICsgX3RoaXM4LndpbmRvd0hlaWdodCkgKiBjdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbFtfdGhpczguZGlyZWN0aW9uQXhpc10gKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdlbGVtZW50TGVmdCc6XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsUmlnaHQgLSBjdXJyZW50LmxlZnQpICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKF90aGlzOC5pbnN0YW5jZS5saW1pdFtfdGhpczguZGlyZWN0aW9uQXhpc10gLSBzY3JvbGxSaWdodCArIF90aGlzOC53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZVtfdGhpczguZGlyZWN0aW9uQXhpc10gLSBjdXJyZW50Lm1pZGRsZVtfdGhpczguZGlyZWN0aW9uQXhpc10pICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzOC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54IC0gY3VycmVudC5sZWZ0ICsgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzOC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPCBjdXJyZW50LmxlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPCBjdXJyZW50LmxlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCA+IGN1cnJlbnQucmlnaHQgJiYgX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54ID4gY3VycmVudC5yaWdodCArIDEwMCkge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBjdXJyZW50LnJpZ2h0IC0gY3VycmVudC5sZWZ0ICsgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tICYmIF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tICsgMTAwKSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQuYm90dG9tIC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgX3RoaXM4LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGN1cnJlbnQuZGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgIF90aGlzOC50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzOC50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgICAqICAgICAgICAgIHRhcmdldCB7bm9kZSwgc3RyaW5nLCBcInRvcFwiLCBcImJvdHRvbVwiLCBpbnR9IC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICAgKiAgICAgICAgICBvcHRpb25zIHtvYmplY3R9IC0gT3B0aW9ucyBvYmplY3QgZm9yIGFkZGl0aW9ubmFsIHNldHRpbmdzLlxuICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0KSB7XG4gICAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgLy8gUGFyc2Ugb3B0aW9uc1xuICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQob3B0aW9ucy5vZmZzZXQpIHx8IDA7IC8vIEFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldGAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gIWlzTmFOKHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24pKSA/IHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24pIDogMTAwMDsgLy8gRHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG5cbiAgICAgICAgdmFyIGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nIHx8IFswLjI1LCAwLjAsIDAuMzUsIDEuMF07IC8vIEFuIGFycmF5IG9mIDQgZmxvYXRzIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgYmV6aWVyIGN1cnZlIGZvciB0aGUgYW5pbWF0aW9uJ3MgZWFzaW5nLiBTZWUgaHR0cDovL2dyZXdlYi5tZS9iZXppZXItZWFzaW5nLWVkaXRvci9leGFtcGxlL1xuXG4gICAgICAgIHZhciBkaXNhYmxlTGVycCA9IG9wdGlvbnMuZGlzYWJsZUxlcnAgPyB0cnVlIDogZmFsc2U7IC8vIExlcnAgZWZmZWN0IHdvbid0IGJlIGFwcGxpZWQgaWYgc2V0IHRvIHRydWVcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8gb3B0aW9ucy5jYWxsYmFjayA6IGZhbHNlOyAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBzY3JvbGxUbyBjb21wbGV0ZXMgKG5vdGUgdGhhdCBpdCB3b24ndCB3YWl0IGZvciBsZXJwIHRvIHN0YWJpbGl6ZSlcblxuICAgICAgICBlYXNpbmcgPSBzcmMkMS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShlYXNpbmcpKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBTZWxlY3RvciBvciBib3VuZGFyaWVzXG4gICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0Lnk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdC54O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIElmIHRoZSBxdWVyeSBmYWlscywgYWJvcnRcblxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIC8vIEFic29sdXRlIGNvb3JkaW5hdGVcbiAgICAgICAgICB0YXJnZXQgPSBwYXJzZUludCh0YXJnZXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSkgOyBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ2B0YXJnZXRgIHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gV2UgaGF2ZSBhIHRhcmdldCB0aGF0IGlzIG5vdCBhIGNvb3JkaW5hdGUgeWV0LCBnZXQgaXRcblxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIC8vIFZlcmlmeSB0aGUgZ2l2ZW4gdGFyZ2V0IGJlbG9uZ3MgdG8gdGhpcyBzY3JvbGwgc2NvcGVcbiAgICAgICAgICB2YXIgdGFyZ2V0SW5TY29wZSA9IGdldFBhcmVudHModGFyZ2V0KS5pbmNsdWRlcyh0aGlzLmVsKTtcblxuICAgICAgICAgIGlmICghdGFyZ2V0SW5TY29wZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpc24ndCBpbnNpZGUgb3VyIG1haW4gZWxlbWVudCwgYWJvcnQgYW55IGFjdGlvblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gR2V0IHRhcmdldCBvZmZzZXQgZnJvbSB0b3BcblxuXG4gICAgICAgICAgdmFyIHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgb2Zmc2V0VG9wID0gdGFyZ2V0QkNSLnRvcDtcbiAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IHRhcmdldEJDUi5sZWZ0OyAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldCdzIHBhcmVudCBzZWN0aW9uXG5cbiAgICAgICAgICB2YXIgdGFyZ2V0UGFyZW50cyA9IGdldFBhcmVudHModGFyZ2V0KTtcbiAgICAgICAgICB2YXIgcGFyZW50U2VjdGlvbiA9IHRhcmdldFBhcmVudHMuZmluZChmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoX3RoaXM5LnNlY3Rpb25zKSAvLyBHZXQgc2VjdGlvbnMgYXNzb2NpYXRpdmUgYXJyYXkgYXMgYSByZWd1bGFyIGFycmF5XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICAgICAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMiksXG4gICAgICAgICAgICAgICAgICBrZXkgPSBfcmVmOFswXSxcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBfcmVmOFsxXTtcblxuICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgICAgIH0pIC8vIG1hcCB0byBzZWN0aW9uIG9ubHkgKHdlIGRvbnQgbmVlZCB0aGUga2V5IGhlcmUpXG4gICAgICAgICAgICAuZmluZChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5lbCA9PSBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9KTsgLy8gZmluYWxseSBmaW5kIHRoZSBzZWN0aW9uIHRoYXQgbWF0Y2hlcyB0aGUgY2FuZGlkYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIHBhcmVudFNlY3Rpb25PZmZzZXQgPSAwO1xuXG4gICAgICAgICAgaWYgKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSBnZXRUcmFuc2xhdGUocGFyZW50U2VjdGlvbilbdGhpcy5kaXJlY3Rpb25BeGlzXTsgLy8gV2UgZ290IGEgcGFyZW50IHNlY3Rpb24sIHN0b3JlIGl0J3MgY3VycmVudCBvZmZzZXQgdG8gcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIG5vIHBhcmVudCBzZWN0aW9uIGlzIGZvdW5kIHdlIG5lZWQgdG8gdXNlIGluc3RhbmNlIHNjcm9sbCBkaXJlY3RseVxuICAgICAgICAgICAgcGFyZW50U2VjdGlvbk9mZnNldCA9IC10aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgIH0gLy8gRmluYWwgdmFsdWUgb2Ygc2Nyb2xsIGRlc3RpbmF0aW9uIDogb2Zmc2V0VG9wICsgKG9wdGlvbmFsIG9mZnNldCBnaXZlbiBpbiBvcHRpb25zKSAtIChwYXJlbnQncyBzZWN0aW9uIHRyYW5zbGF0ZSlcblxuXG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldExlZnQgKyBvZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRUb3AgKyBvZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQgKyBvZmZzZXQ7XG4gICAgICAgIH0gLy8gQWN0dWFsIHNjcm9sbHRvXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNldHVwXG5cblxuICAgICAgICB2YXIgc2Nyb2xsU3RhcnQgPSBwYXJzZUZsb2F0KHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSk7XG4gICAgICAgIHZhciBzY3JvbGxUYXJnZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihvZmZzZXQsIHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkpOyAvLyBNYWtlIHN1cmUgb3VyIHRhcmdldCBpcyBpbiB0aGUgc2Nyb2xsIGJvdW5kYXJpZXNcblxuICAgICAgICB2YXIgc2Nyb2xsRGlmZiA9IHNjcm9sbFRhcmdldCAtIHNjcm9sbFN0YXJ0O1xuXG4gICAgICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocCkge1xuICAgICAgICAgIGlmIChkaXNhYmxlTGVycCkge1xuICAgICAgICAgICAgaWYgKF90aGlzOS5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICBfdGhpczkuc2V0U2Nyb2xsKHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGlmZiAqIHAsIF90aGlzOS5pbnN0YW5jZS5kZWx0YS55KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzOS5zZXRTY3JvbGwoX3RoaXM5Lmluc3RhbmNlLmRlbHRhLngsIHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGlmZiAqIHApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczkuaW5zdGFuY2UuZGVsdGFbX3RoaXM5LmRpcmVjdGlvbkF4aXNdID0gc2Nyb2xsU3RhcnQgKyBzY3JvbGxEaWZmICogcDtcbiAgICAgICAgICB9XG4gICAgICAgIH07IC8vIFByZXBhcmUgdGhlIHNjcm9sbFxuXG5cbiAgICAgICAgdGhpcy5hbmltYXRpbmdTY3JvbGwgPSB0cnVlOyAvLyBUaGlzIGJvb2xlYW4gYWxsb3dzIHRvIHByZXZlbnQgYGNoZWNrU2Nyb2xsKClgIGZyb20gY2FsbGluZyBgc3RvcFNjcm9sbGluZ2Agd2hlbiB0aGUgYW5pbWF0aW9uIGlzIHNsb3cgKGkuZS4gYXQgdGhlIGJlZ2lubmluZyBvZiBhbiBFYXNlSW4pXG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7IC8vIFN0b3AgYW55IG1vdmVtZW50LCBhbGxvd3MgdG8ga2lsbCBhbnkgb3RoZXIgYHNjcm9sbFRvYCBzdGlsbCBoYXBwZW5pbmdcblxuICAgICAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKCk7IC8vIFJlc3RhcnQgdGhlIHNjcm9sbFxuICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIGxvb3BcblxuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgcCA9IChEYXRlLm5vdygpIC0gc3RhcnQpIC8gZHVyYXRpb247IC8vIEFuaW1hdGlvbiBwcm9ncmVzc1xuXG4gICAgICAgICAgaWYgKHAgPiAxKSB7XG4gICAgICAgICAgICAvLyBBbmltYXRpb24gZW5kc1xuICAgICAgICAgICAgcmVuZGVyKDEpO1xuICAgICAgICAgICAgX3RoaXM5LmFuaW1hdGluZ1Njcm9sbCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID09IDApIF90aGlzOS51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXM5LnNjcm9sbFRvUmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgcmVuZGVyKGVhc2luZyhwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxvb3AoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG4gICAgICAgIHRoaXMucmVpbml0U2Nyb2xsQmFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwodHJ1ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0U2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuc3RvcCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdG9wU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0U2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmluc3RhbmNlKSwge30sIHtcbiAgICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YToge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwZWVkOiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJkZXN0cm95XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc21vb3RoQ2xhc3MpO1xuICAgICAgICB0aGlzLnZzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsQmFyKCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja0tleSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBfZGVmYXVsdDtcbiAgfShfZGVmYXVsdCk7XG5cbiAgdmFyIFNtb290aCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU21vb3RoKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU21vb3RoKTtcblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uczsgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zIHdpdGggZ2l2ZW4gb25lc1xuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuc21hcnRwaG9uZSA9IGRlZmF1bHRzLnNtYXJ0cGhvbmU7XG4gICAgICBpZiAob3B0aW9ucy5zbWFydHBob25lKSBPYmplY3QuYXNzaWduKHRoaXMuc21hcnRwaG9uZSwgb3B0aW9ucy5zbWFydHBob25lKTtcbiAgICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgICAgaWYgKG9wdGlvbnMudGFibGV0KSBPYmplY3QuYXNzaWduKHRoaXMudGFibGV0LCBvcHRpb25zLnRhYmxldCk7XG4gICAgICBpZiAoIXRoaXMuc21vb3RoICYmIHRoaXMuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykgY29uc29sZS53YXJuKCfwn5qoIGBzbW9vdGg6ZmFsc2VgICYgYGhvcml6b250YWxgIGRpcmVjdGlvbiBhcmUgbm90IHlldCBjb21wYXRpYmxlJyk7XG4gICAgICBpZiAoIXRoaXMudGFibGV0LnNtb290aCAmJiB0aGlzLnRhYmxldC5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUgKHRhYmxldCknKTtcbiAgICAgIGlmICghdGhpcy5zbWFydHBob25lLnNtb290aCAmJiB0aGlzLnNtYXJ0cGhvbmUuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykgY29uc29sZS53YXJuKCfwn5qoIGBzbW9vdGg6ZmFsc2VgICYgYGhvcml6b250YWxgIGRpcmVjdGlvbiBhcmUgbm90IHlldCBjb21wYXRpYmxlIChzbWFydHBob25lKScpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNtb290aCwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzTW9iaWxlID0gL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzVGFibGV0ID0gdGhpcy5vcHRpb25zLmlzTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc21vb3RoICYmICF0aGlzLm9wdGlvbnMuaXNNb2JpbGUgfHwgdGhpcy50YWJsZXQuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc1RhYmxldCB8fCB0aGlzLnNtYXJ0cGhvbmUuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc01vYmlsZSAmJiAhdGhpcy5vcHRpb25zLmlzVGFibGV0KSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgX2RlZmF1bHQkMih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDEodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAvLyBHZXQgdGhlIGhhc2ggd2l0aG91dCB0aGUgJyMnIGFuZCBmaW5kIHRoZSBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgICAgdmFyIGlkID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvLyBJZiBmb3VuZCwgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XG5cbiAgICAgICAgICBpZiAodGFyZ2V0KSB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnN0YXJ0U2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0b3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdG9wU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldFNjcm9sbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnNldFNjcm9sbCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgZnVuYykge1xuICAgICAgICB0aGlzLnNjcm9sbC5zZXRFdmVudHMoZXZlbnQsIGZ1bmMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvZmZcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGZ1bmMpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwudW5zZXRFdmVudHMoZXZlbnQsIGZ1bmMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTbW9vdGg7XG4gIH0oKTtcblxuICByZXR1cm4gU21vb3RoO1xuXG59KSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2RlZmF1bHQob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLm1BdHRyID0gJ2RhdGEtJyArIG9wdGlvbnMuZGF0YU5hbWU7XG4gICAgdGhpcy5tQ2FwdHVyZUV2ZW50cyA9IFsnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ107XG4gICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcIm1Jbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1Jbml0KG1vZHVsZXMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXM7XG4gICAgICB0aGlzLm1DaGVja0V2ZW50VGFyZ2V0ID0gdGhpcy5tQ2hlY2tFdmVudFRhcmdldC5iaW5kKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5ldmVudHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1BZGRFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1VcGRhdGUobW9kdWxlcykge1xuICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibURlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbURlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubVJlbW92ZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1BZGRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtQWRkRXZlbnQoZXZlbnQpIHtcbiAgICAgIHZhciBjYXB0dXJlID0gdGhpcy5tQ2FwdHVyZUV2ZW50cy5pbmNsdWRlcyhldmVudCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMubUNoZWNrRXZlbnRUYXJnZXQsIGNhcHR1cmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtUmVtb3ZlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbVJlbW92ZUV2ZW50KGV2ZW50KSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IHRoaXMubUNhcHR1cmVFdmVudHMuaW5jbHVkZXMoZXZlbnQpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLm1DaGVja0V2ZW50VGFyZ2V0LCBjYXB0dXJlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibUNoZWNrRXZlbnRUYXJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbUNoZWNrRXZlbnRUYXJnZXQoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gdGhpcy5ldmVudHNbZS50eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aGlzW2V2ZW50XShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkYXRhID0gJ1snICsgdGhpcy5tQXR0ciArICddJztcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLm1DYXB0dXJlRXZlbnRzLmluY2x1ZGVzKGUudHlwZSkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMubUNhbGxFdmVudE1ldGhvZChlLCBldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoZGF0YSkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubUNhbGxFdmVudE1ldGhvZChlLCBldmVudCwgdGFyZ2V0KSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtQ2FsbEV2ZW50TWV0aG9kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1DYWxsRXZlbnRNZXRob2QoZSwgZXZlbnQsIHRhcmdldCkge1xuICAgICAgdmFyIG5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKHRoaXMubUF0dHIpO1xuXG4gICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGV2ZW50W25hbWVdO1xuXG4gICAgICAgIGlmICghZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudFRhcmdldCcpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICdjdXJyZW50VGFyZ2V0Jywge1xuICAgICAgICAgICAgdmFsdWU6IHRhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLmhhc093blByb3BlcnR5KCdjdXJUYXJnZXQnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAnY3VyVGFyZ2V0Jywge1xuICAgICAgICAgICAgdmFsdWU6IHRhcmdldFxuICAgICAgICAgIH0pOyAvLyBGb3IgSUUgMTFcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbbWV0aG9kXShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiJFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAkKHF1ZXJ5LCBjb250ZXh0KSB7XG4gICAgICB2YXIgY2xhc3NJbmRleCA9IHF1ZXJ5LmluZGV4T2YoJy4nKTtcbiAgICAgIHZhciBpZEluZGV4ID0gcXVlcnkuaW5kZXhPZignIycpO1xuICAgICAgdmFyIGF0dHJJbmRleCA9IHF1ZXJ5LmluZGV4T2YoJ1snKTtcbiAgICAgIHZhciBpbmRleGVzID0gW2NsYXNzSW5kZXgsIGlkSW5kZXgsIGF0dHJJbmRleF0uZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggIT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHZhciBpbmRleCA9IGZhbHNlO1xuICAgICAgdmFyIG5hbWUgPSBxdWVyeTtcbiAgICAgIHZhciBtb3JlID0gJyc7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5lbDtcblxuICAgICAgaWYgKGluZGV4ZXMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGluZGV4ZXMpKTtcbiAgICAgICAgbmFtZSA9IHF1ZXJ5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgbW9yZSA9IHF1ZXJ5LnNsaWNlKGluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90eXBlb2YoY29udGV4dCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGFyZW50ID0gY29udGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJyArIHRoaXMubUF0dHIgKyAnPScgKyBuYW1lICsgJ10nICsgbW9yZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhcmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJlbnQocXVlcnksIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhID0gJ1snICsgdGhpcy5tQXR0ciArICc9JyArIHF1ZXJ5ICsgJ10nO1xuICAgICAgdmFyIHBhcmVudCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblxuICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQubWF0Y2hlcyhkYXRhKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXRhKG5hbWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBjb250ZXh0IHx8IHRoaXMuZWw7XG4gICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLm1BdHRyICsgJy0nICsgbmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YShuYW1lLCB2YWx1ZSwgY29udGV4dCkge1xuICAgICAgdmFyIHRhcmdldCA9IGNvbnRleHQgfHwgdGhpcy5lbDtcbiAgICAgIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKHRoaXMubUF0dHIgKyAnLScgKyBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbChmdW5jLCBhcmdzLCBtb2QsIGlkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKGFyZ3MgJiYgIW1vZCkge1xuICAgICAgICBtb2QgPSBhcmdzO1xuICAgICAgICBhcmdzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vZHVsZXNbbW9kXSkge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5tb2R1bGVzW21vZF1baWRdKSB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbbW9kXVtpZF1bZnVuY10oYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubW9kdWxlc1ttb2RdKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgX3RoaXMzLm1vZHVsZXNbbW9kXVtpZF1bZnVuY10oYXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZSwgbW9kLCBmdW5jLCBpZCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLm1vZHVsZXNbbW9kXSkge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICB0aGlzLm1vZHVsZXNbbW9kXVtpZF0uZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMobyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tb2R1bGVzW21vZF0pLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIF90aGlzNC5tb2R1bGVzW21vZF1baV0uZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICByZXR1cm4gZnVuYyhvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdChvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIHRoaXMuYXBwO1xuICAgIHRoaXMubW9kdWxlcyA9IG9wdGlvbnMubW9kdWxlcztcbiAgICB0aGlzLmN1cnJlbnRNb2R1bGVzID0ge307XG4gICAgdGhpcy5hY3RpdmVNb2R1bGVzID0ge307XG4gICAgdGhpcy5uZXdNb2R1bGVzID0ge307XG4gICAgdGhpcy5tb2R1bGVJZCA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChhcHAsIHNjb3BlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgY29udGFpbmVyID0gc2NvcGUgfHwgZG9jdW1lbnQ7XG4gICAgICB2YXIgZWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuXG4gICAgICBpZiAoYXBwICYmICF0aGlzLmFwcCkge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzWydhcHAnXSA9IHtcbiAgICAgICAgJ2FwcCc6IHRoaXMuYXBwXG4gICAgICB9O1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgQXJyYXkuZnJvbShlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgaWYgKGkubmFtZS5zdGFydHNXaXRoKCdkYXRhLW1vZHVsZScpKSB7XG4gICAgICAgICAgICB2YXIgbW9kdWxlRXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgZGF0YU5hbWUgPSBpLm5hbWUuc3BsaXQoJy0nKS5zcGxpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBtb2R1bGVOYW1lID0gX3RoaXMudG9DYW1lbChkYXRhTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5tb2R1bGVzW21vZHVsZU5hbWVdKSB7XG4gICAgICAgICAgICAgIG1vZHVsZUV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLm1vZHVsZXNbX3RoaXMudG9VcHBlcihtb2R1bGVOYW1lKV0pIHtcbiAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9IF90aGlzLnRvVXBwZXIobW9kdWxlTmFtZSk7XG4gICAgICAgICAgICAgIG1vZHVsZUV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb2R1bGVFeGlzdHMpIHtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZWw6IGVsLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1vZHVsZU5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6IGRhdGFOYW1lLmpvaW4oJy0nKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB2YXIgbW9kdWxlID0gbmV3IF90aGlzLm1vZHVsZXNbbW9kdWxlTmFtZV0ob3B0aW9ucyk7XG4gICAgICAgICAgICAgIHZhciBpZCA9IGkudmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vZHVsZUlkKys7XG4gICAgICAgICAgICAgICAgaWQgPSAnbScgKyBfdGhpcy5tb2R1bGVJZDtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaS5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpcy5hZGRBY3RpdmVNb2R1bGUobW9kdWxlTmFtZSwgaWQsIG1vZHVsZSk7XG5cbiAgICAgICAgICAgICAgdmFyIG1vZHVsZUlkID0gbW9kdWxlTmFtZSArICctJyArIGlkO1xuXG4gICAgICAgICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5ld01vZHVsZXNbbW9kdWxlSWRdID0gbW9kdWxlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRNb2R1bGVzW21vZHVsZUlkXSA9IG1vZHVsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuY3VycmVudE1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBpZCA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgbW9kdWxlID0gX3JlZjJbMV07XG5cbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICB2YXIgbW9kdWxlTmFtZSA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgICAgICAgdmFyIG1vZHVsZUlkID0gc3BsaXQucG9wKCk7XG5cbiAgICAgICAgICBfdGhpcy5hZGRBY3RpdmVNb2R1bGUobW9kdWxlTmFtZSwgbW9kdWxlSWQsIG1vZHVsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuaW5pdE1vZHVsZShtb2R1bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5pdE1vZHVsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0TW9kdWxlKG1vZHVsZSkge1xuICAgICAgbW9kdWxlLm1Jbml0KHRoaXMuYWN0aXZlTW9kdWxlcyk7XG4gICAgICBtb2R1bGUuaW5pdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRBY3RpdmVNb2R1bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQWN0aXZlTW9kdWxlKG5hbWUsIGlkLCBtb2R1bGUpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZU1vZHVsZXNbbmFtZV0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmFjdGl2ZU1vZHVsZXNbbmFtZV0sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgaWQsIG1vZHVsZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzW25hbWVdID0gX2RlZmluZVByb3BlcnR5KHt9LCBpZCwgbW9kdWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzY29wZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuaW5pdCh0aGlzLmFwcCwgc2NvcGUpO1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5jdXJyZW50TW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAgICAgICAgaWQgPSBfcmVmNFswXSxcbiAgICAgICAgICAgIG1vZHVsZSA9IF9yZWY0WzFdO1xuXG4gICAgICAgIG1vZHVsZS5tVXBkYXRlKF90aGlzMi5hY3RpdmVNb2R1bGVzKTtcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5uZXdNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgICB2YXIgX3JlZjYgPSBfc2xpY2VkVG9BcnJheShfcmVmNSwgMiksXG4gICAgICAgICAgICBpZCA9IF9yZWY2WzBdLFxuICAgICAgICAgICAgbW9kdWxlID0gX3JlZjZbMV07XG5cbiAgICAgICAgX3RoaXMyLmluaXRNb2R1bGUobW9kdWxlKTtcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1cnJlbnRNb2R1bGVzLCB0aGlzLm5ld01vZHVsZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koc2NvcGUpIHtcbiAgICAgIGlmIChzY29wZSkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTY29wZShzY29wZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc3Ryb3lNb2R1bGVzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lTY29wZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U2NvcGUoc2NvcGUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBBcnJheS5mcm9tKGVsLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBpZiAoaS5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtbW9kdWxlJykpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZGF0YU5hbWUgPSBpLm5hbWUuc3BsaXQoJy0nKS5zcGxpY2UoMik7XG4gICAgICAgICAgICB2YXIgbW9kdWxlTmFtZSA9IF90aGlzMy50b0NhbWVsKGRhdGFOYW1lKSArICctJyArIGlkO1xuICAgICAgICAgICAgdmFyIG1vZHVsZUV4aXN0cyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMzLmN1cnJlbnRNb2R1bGVzW21vZHVsZU5hbWVdKSB7XG4gICAgICAgICAgICAgIG1vZHVsZUV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzMy5jdXJyZW50TW9kdWxlc1tfdGhpczMudG9VcHBlcihtb2R1bGVOYW1lKV0pIHtcbiAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9IF90aGlzMy50b1VwcGVyKG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgICBtb2R1bGVFeGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW9kdWxlRXhpc3RzKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5kZXN0cm95TW9kdWxlKF90aGlzMy5jdXJyZW50TW9kdWxlc1ttb2R1bGVOYW1lXSk7XG5cbiAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy5jdXJyZW50TW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFjdGl2ZU1vZHVsZXMgPSB7fTtcbiAgICAgIHRoaXMubmV3TW9kdWxlcyA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95TW9kdWxlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95TW9kdWxlcygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLmN1cnJlbnRNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMiksXG4gICAgICAgICAgICBpZCA9IF9yZWY4WzBdLFxuICAgICAgICAgICAgbW9kdWxlID0gX3JlZjhbMV07XG5cbiAgICAgICAgX3RoaXM0LmRlc3Ryb3lNb2R1bGUobW9kdWxlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jdXJyZW50TW9kdWxlcyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95TW9kdWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lNb2R1bGUobW9kdWxlKSB7XG4gICAgICBtb2R1bGUubURlc3Ryb3koKTtcbiAgICAgIG1vZHVsZS5kZXN0cm95KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvQ2FtZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9DYW1lbChhcnIpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSArIF90aGlzNS50b1VwcGVyKGIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvVXBwZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9VcHBlcihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdCQxO1xuZXhwb3J0cy5tb2R1bGUgPSBfZGVmYXVsdDtcbiIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG4oZnVuY3Rpb24oZixlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpmLlN0YXRzPWUoKX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7Yy5hcHBlbmRDaGlsZChhLmRvbSk7cmV0dXJuIGF9ZnVuY3Rpb24gdShhKXtmb3IodmFyIGQ9MDtkPGMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLmNoaWxkcmVuW2RdLnN0eWxlLmRpc3BsYXk9ZD09PWE/XCJibG9ja1wiOlwibm9uZVwiO2w9YX12YXIgbD0wLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiO2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO1xudSgrK2wlYy5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGs9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxnPWssYT0wLHI9ZShuZXcgZi5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSksaD1lKG5ldyBmLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciB0PWUobmV3IGYuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7dSgwKTtyZXR1cm57UkVWSVNJT046MTYsZG9tOmMsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dSxiZWdpbjpmdW5jdGlvbigpe2s9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7YSsrO3ZhciBjPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aC51cGRhdGUoYy1rLDIwMCk7aWYoYz5nKzFFMyYmKHIudXBkYXRlKDFFMyphLyhjLWcpLDEwMCksZz1jLGE9MCx0KSl7dmFyIGQ9cGVyZm9ybWFuY2UubWVtb3J5O3QudXBkYXRlKGQudXNlZEpTSGVhcFNpemUvXG4xMDQ4NTc2LGQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBjfSx1cGRhdGU6ZnVuY3Rpb24oKXtrPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6YyxzZXRNb2RlOnV9fTtmLlBhbmVsPWZ1bmN0aW9uKGUsZixsKXt2YXIgYz1JbmZpbml0eSxrPTAsZz1NYXRoLnJvdW5kLGE9Zyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkscj04MCphLGg9NDgqYSx0PTMqYSx2PTIqYSxkPTMqYSxtPTE1KmEsbj03NCphLHA9MzAqYSxxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cS53aWR0aD1yO3EuaGVpZ2h0PWg7cS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciBiPXEuZ2V0Q29udGV4dChcIjJkXCIpO2IuZm9udD1cImJvbGQgXCIrOSphK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZmlsbFN0eWxlPWw7Yi5maWxsUmVjdCgwLDAscixoKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZSx0LHYpO1xuYi5maWxsUmVjdChkLG0sbixwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkLG0sbixwKTtyZXR1cm57ZG9tOnEsdXBkYXRlOmZ1bmN0aW9uKGgsdyl7Yz1NYXRoLm1pbihjLGgpO2s9TWF0aC5tYXgoayxoKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9MTtiLmZpbGxSZWN0KDAsMCxyLG0pO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChnKGgpK1wiIFwiK2UrXCIgKFwiK2coYykrXCItXCIrZyhrKStcIilcIix0LHYpO2IuZHJhd0ltYWdlKHEsZCthLG0sbi1hLHAsZCxtLG4tYSxwKTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkK24tYSxtLGEsZygoMS1oL3cpKnApKX19fTtyZXR1cm4gZn0pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50J1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsIGdhICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGVwdGlvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIGdhOiB7XG4gICAgICAgIGNvZGU6IGh0bWwuZGF0YXNldC5hbmFseXRpY3MsXG4gICAgICAgIHR5cGU6IG51bGwsXG4gICAgICB9LFxuICAgICAgYXhlcHRpbzogaHRtbC5kYXRhc2V0LmF4ZXB0aW8sXG4gICAgfVxuICAgIHdpbmRvdy5heGVwdGlvU2V0dGluZ3MgPSB7XG4gICAgICBjbGllbnRJZDogdGhpcy5zZXR0aW5ncy5heGVwdGlvLFxuICAgICAgY29va2llc1ZlcnNpb246ICdhbGV4YW5kcmFwZXJsZXMtYmFzZScsXG4gICAgICB1c2VyQ29va2llc0R1cmF0aW9uOiAzMCAqIDYsXG4gICAgfVxuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpXG4gICAgaHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYXhlcHRpbycpXG4gICAgdGhpcy5zZXRBeGVwdGlvKClcbiAgICB0aGlzLnNldEF4ZXB0aW9Db25maWcoKVxuICAgIHRoaXMuc3RhdGVzID0ge31cbiAgICB0aGlzLmNob2ljZXMgPSB7fVxuICB9XG5cbiAgc2V0QXhlcHRpbygpIHtcbiAgICBjb25zdCB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdXG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgZS5hc3luYyA9IHRydWVcbiAgICBlLnNyYyA9ICcvL3N0YXRpYy5heGVwdC5pby9zZGsuanMnXG4gICAgdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCB0KVxuICB9XG5cbiAgc2V0QXhlcHRpb0NvbmZpZygpIHtcbiAgICBjb25zdCBuYk9mRGF5c1RvV2FpdEJlZm9yZUFza2luZ0FnYWluID0gMzAgKiA2XG4gICAgd2luZG93Ll9heGNiID0gd2luZG93Ll9heGNiIHx8IFtdXG4gICAgd2luZG93Ll9heGNiLnB1c2goKHNkaykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IHNkay51c2VyUHJlZmVyZW5jZXNNYW5hZ2VyLnJlYWRDaG9pY2VzRnJvbUNvb2tpZXMoXG4gICAgICAgICAgJ1NUWVhLRVlfYXhlcHRpb19qc29uJ1xuICAgICAgICApXG4gICAgICAgIGlmIChqc29uICYmIGpzb24uJCRkYXRlKSB7XG4gICAgICAgICAgY29uc3QgYWNjZXB0ZWRBdCA9IG5ldyBEYXRlKGpzb24uJCRkYXRlKVxuICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAobm93LmdldFRpbWUoKSAtIGFjY2VwdGVkQXQuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCkgPlxuICAgICAgICAgICAgbmJPZkRheXNUb1dhaXRCZWZvcmVBc2tpbmdBZ2FpblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW5BeGVwdGlvQ29va2llcygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnQXhlcHRpbyBjb3VsZCBub3QgcmVhZCBwcmV2aW91cyBjaG9pY2VzIG5vciBwYXJzZSBjb25zZW50IGRhdGUnLFxuICAgICAgICAgIGVyclxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5fYXhjYi5wdXNoKChheGVwdGlvKSA9PiB7XG4gICAgICBheGVwdGlvLm9uKCdjb29raWVzOmNvbXBsZXRlJywgKGNob2ljZXMpID0+IHtcbiAgICAgICAgdGhpcy5jaG9pY2VzID0gY2hvaWNlc1xuICAgICAgICBpZiAoY2hvaWNlcy5nb29nbGVfYW5hbHl0aWNzKSB7XG4gICAgICAgICAgdGhpcy5zZXRHQSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHNldEdBKCkge1xuICAgIGlmICh0aGlzLnN0YXRlcy5nb29nbGVfYW5hbHl0aWNzIHx8ICF0aGlzLnNldHRpbmdzLmdhLmNvZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnN0YXRlcy5nb29nbGVfYW5hbHl0aWNzID0gdHJ1ZVxuXG4gICAgOyhmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpLkdvb2dsZUFuYWx5dGljc09iamVjdD1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuXG4gICAgZ2EoJ2NyZWF0ZScsIHRoaXMuc2V0dGluZ3MuZ2EuY29kZSwgJ2F1dG8nKVxuICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JylcbiAgfVxuXG4gIHVwZGF0ZUdhUGFnZSgpIHtcbiAgICBpZiAodGhpcy5jaG9pY2VzLmdvb2dsZV9hbmFseXRpY3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgIHdpbmRvdy5nYSgnc2V0JywgJ3BhZ2UnLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICB3aW5kb3cuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKVxuICAgIH1cbiAgfVxufVxuIiwiLyog4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSBXG7ilrrilrrilrogU2NyaXB0cy9sYXlvdXRzL2NyZWRpdHNcbuKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgSAqL1xuXG5pbXBvcnQgeyBtb2R1bGUgfSBmcm9tICdtb2R1anMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWRpdHNCdXR0b24gZXh0ZW5kcyBtb2R1bGUge1xuICBjb25zdHJ1Y3RvcihtKSB7XG4gICAgc3VwZXIobSlcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIGNsaWNrOiAnb3Blbk1vZGFsJyxcbiAgICB9XG5cbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmNhbGwoJ3RvZ2dsZU1vZGFsJywgJ0NyZWRpdHMnKVxuICB9XG59IiwiLyog4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSBXG7ilrrilrrilrogU2NyaXB0cy9sYXlvdXRzL2NyZWRpdHNcbuKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgSAqL1xuXG5pbXBvcnQgeyBtb2R1bGUgfSBmcm9tICdtb2R1anMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWRpdHMgZXh0ZW5kcyBtb2R1bGUge1xuICBjb25zdHJ1Y3RvcihtKSB7XG4gICAgc3VwZXIobSlcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIGNsaWNrOiB7XG4gICAgICAgIGNyZWRpdHNDbG9zZXI6ICd0b2dnbGVNb2RhbCcsXG4gICAgICB9LFxuICAgIH1cbiAgICB0aGlzLnN0YXRlcyA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgIH1cbiAgfVxuICBcbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKCctYWN0aXZlJylcbiAgfVxufSIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ21vZHVqcydcbiAgXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5RnVsbCBleHRlbmRzIG1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKG0pIHtcbiAgICBzdXBlcihtKVxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgY2xpY2s6IHtcbiAgICAgICAgb3BlbkJ1dHRvbjogJ3RvZ2dsZUNvbnRlbnQnLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUNvbnRlbnQoKSB7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuXG4gICAgY29uc3QgY29udGVudEZ1bGwgPSB0aGlzLiQoJ2NvbnRlbnRGdWxsJylbMF1cbiAgICBjb25zdCBjb250ZW50SGlkZGVuID0gdGhpcy4kKCdjb250ZW50SGlkZGVuJylbMF1cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLiQoJ29wZW5CdXR0b24nKVswXVxuICAgIFxuICAgIHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZVxuICAgIFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc3RhdGUgPyBjb250ZW50SGlkZGVuLm9mZnNldEhlaWdodCA6IDBcbiAgICBjb250ZW50RnVsbC5zdHlsZS5oZWlnaHQgPSBgJHtgJHtoZWlnaHR9YH1weGBcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsKFwidXBkYXRlXCIsIG51bGwsIFwiU2Nyb2xsXCIpXG4gICAgICAvLyB0aGlzLmNhbGwoXCJzY3JvbGxUb1wiLCB7ZWw6IHRoaXMuZWwucGFyZW50Tm9kZSwgb2Zmc2V0OiAtMTUwfSwgXCJTY3JvbGxcIilcbiAgICB9LCAzMDApO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiLWFjdGl2ZVwiKVxuICB9XG59IiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnbW9kdWpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgbW9kdWxlIHtcbiAgY29uc3RydWN0b3IobSkge1xuICAgIHN1cGVyKG0pXG4gICAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJylcbiAgICB0aGlzLmRvU29tZXRoaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5kb1NvbWV0aGluZ1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgY2xpY2s6IHtcbiAgICAgICAgYnV0dG9uOiAnZG9Tb21ldGhpbmcnLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7fVxuXG4gIGFSZXNpemUoKSB7fVxuXG4gIGFuaW1hdGUoKSB7fVxuXG4gIGFBbmltYXRlKCkge31cblxuICBzdGF0aWMgZG9Tb21ldGhpbmcoKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnbW9kdWpzJ1xuICBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYWRlclNjcm9sbCBleHRlbmRzIG1vZHVsZSB7XG4gIHRvZ2dsZVN0aWNreSh5KSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3RbeSA+IDAgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0oXCItc3RpY2t5XCIpXG4gIH1cbn0iLCJpbXBvcnQgeyBtb2R1bGUgfSBmcm9tICdtb2R1anMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpbmtBY3RpdmUgZXh0ZW5kcyBtb2R1bGUge1xuICBjb25zdHJ1Y3RvcihtKSB7XG4gICAgc3VwZXIobSlcbiAgICB0aGlzLmRvU29tZXRoaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5kb1NvbWV0aGluZ1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgY2xpY2s6IHtcbiAgICAgICAgYnV0dG9uOiAnZG9Tb21ldGhpbmcnLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZG9Tb21ldGhpbmcoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGktbm90TG9nb1wiKTtcblxuICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIilcbiAgICB9KTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlXCIpXG4gIH1cbn0iLCJpbXBvcnQgeyBtb2R1bGUgfSBmcm9tICdtb2R1anMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBtb2R1bGUge1xuICBjb25zdHJ1Y3RvcihtKSB7XG4gICAgc3VwZXIobSlcbiAgICB0aGlzLnN0YXRlID0gZmFsc2VcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ21vZHVqcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9iaWxlTWVudSBleHRlbmRzIG1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKG0pIHtcbiAgICBzdXBlcihtKVxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMuY29uc3RydWN0b3IudG9nZ2xlTWVudVxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgY2xpY2s6IHtcbiAgICAgICAgYnV0dG9uOiAndG9nZ2xlTWVudScsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVNZW51KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxuICAgIGxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcIi1hY3RpdmVcIilcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIi1hY3RpdmVcIilcbiAgfVxufSIsImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ21vZHVqcydcbmltcG9ydCBMb2NvbW90aXZlU2Nyb2xsIGZyb20gJ2xvY29tb3RpdmUtc2Nyb2xsJ1xuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBtb2R1bGUge1xuICBpbml0KCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICB0aGlzLmVsLmRhdGFzZXQuaG9yaXpvbnRhbCAhPT0gdW5kZWZpbmVkID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgIHRoaXMuc2Nyb2xsID0gbmV3IExvY29tb3RpdmVTY3JvbGwoe1xuICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICBzbW9vdGg6IHRydWUsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICB0YWJsZXQ6IHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgfSxcbiAgICAgIHJlbG9hZE9uQ29udGV4dENoYW5nZTogdHJ1ZSxcbiAgICB9KVxuXG4gICAgdGhpcy5zY3JvbGwub24oJ2NhbGwnLCB0aGlzLm9uQ2FsbC5iaW5kKHRoaXMpKVxuICAgIHRoaXMudHJvdHRsZVNjcm9sbCA9IHRocm90dGxlKHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSAgLCAxMDApXG4gICAgdGhpcy5zY3JvbGwub24oJ3Njcm9sbCcsIHRoaXMudHJvdHRsZVNjcm9sbClcbiAgfVxuXG4gIG9uQ2FsbChmdW5jLCB3YXksIG9iaikge1xuICAgIHRoaXMuY2FsbChmdW5jWzBdLCB7IGVudGVyOiB3YXkgPT09ICdlbnRlcicsIG9iaiB9LCBmdW5jWzFdLCBmdW5jWzJdKVxuICB9XG5cbiAgb25TY3JvbGwoYXJncykge1xuICAgIHRoaXMuY2FsbChcInRvZ2dsZVN0aWNreVwiLCBhcmdzLnNjcm9sbC55LCBcImhlYWRlclNjcm9sbFwiKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpXG4gIH1cblxuICBzY3JvbGxUbyh7ZWwsIG9mZnNldCA9IDB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8oZWwsIHtvZmZzZXR9KVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjcm9sbC5kZXN0cm95KClcbiAgfVxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRXhhbXBsZSB9IGZyb20gJy4uL21vZHVsZXMvX2V4YW1wbGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuLi9tb2R1bGVzL19tZW51J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGwgfSBmcm9tICcuLi9tb2R1bGVzL19zY3JvbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpc3BsYXlGdWxsIH0gZnJvbSAnLi4vbW9kdWxlcy9fZGlzcGxheS1mdWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5rQWN0aXZlIH0gZnJvbSAnLi4vbW9kdWxlcy9fbGluay1hY3RpdmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vYmlsZU1lbnUgfSBmcm9tICcuLi9tb2R1bGVzL19tb2JpbGUtbWVudSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlZGl0cyB9IGZyb20gJy4uL21vZHVsZXMvX2NyZWRpdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWRpdHNCdXR0b24gfSBmcm9tICcuLi9tb2R1bGVzL19jcmVkaXRzLWJ1dHRvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVyU2Nyb2xsIH0gZnJvbSAnLi4vbW9kdWxlcy9faGVhZGVyLXNjcm9sbCdcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJhc2ljVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zL19iYXNpYy10cmFuc2l0aW9uJ1xuIiwiaW1wb3J0IG1vZHVsYXIgZnJvbSAnbW9kdWpzJ1xuaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJ1xuaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLmpzJ1xuaW1wb3J0IEF4ZXB0aW8gZnJvbSAnLi4vYXRvbXMvX2F4ZXB0aW8nXG5pbXBvcnQgKiBhcyB0cmFuc2l0aW9ucyBmcm9tICcuL190cmFuc2l0aW9ucydcbmltcG9ydCAqIGFzIG1vZHVsZXMgZnJvbSAnLi9fbW9kdWxlcydcbmltcG9ydCB7IGh0bWwsIGJvZHksIGlzRGVidWcgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IGRlYm91bmNlLCBsb2cgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vic2l0ZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgICB0aGlzLm1hbmFnZXIgPSBuZXcgbW9kdWxhcih7XG4gICAgICBtb2R1bGVzLFxuICAgIH0pXG5cbiAgICB0aGlzLnRyYW5zaXRpb25zID0gW11cbiAgICB0aGlzLnVwZGF0ZU1vZHVsZXMgPSBmYWxzZVxuXG4gICAgdGhpcy5heGVwdGlvID0gbmV3IEF4ZXB0aW8oKVxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZW50ZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25jZSA9IHRoaXMub25jZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5hZnRlckxlYXZlID0gdGhpcy5hZnRlckxlYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmJlZm9yZUxlYXZlID0gdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVMb2FkLmJpbmQodGhpcywgdHJ1ZSlcbiAgICB0aGlzLmRlYm91bmNlUmVzaXplID0gZGVib3VuY2UodGhpcy5yZXNpemUuYmluZCh0aGlzKSwgNjAwKVxuXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdpcy1yZWFkeScpXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9ucygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgYmFyYmEuaG9va3MuYWZ0ZXJMZWF2ZSh0aGlzLmFmdGVyTGVhdmUpXG4gICAgYmFyYmEuaG9va3MuZW50ZXIodGhpcy5lbnRlcilcbiAgICBiYXJiYS5ob29rcy5vbmNlKHRoaXMub25jZSlcbiAgICBiYXJiYS5ob29rcy5hZnRlcih0aGlzLmFmdGVyKVxuICAgIGJhcmJhLmhvb2tzLmJlZm9yZUxlYXZlKHRoaXMuY29uc3RydWN0b3IuYmVmb3JlTGVhdmUpXG4gICAgY29uc3QgY29uZmlnQmFyYmEgPSB7XG4gICAgICBkZWJ1ZzogaXNEZWJ1ZyxcbiAgICAgIHRyYW5zaXRpb25zOiB0aGlzLnRyYW5zaXRpb25zLFxuICAgIH1cblxuICAgIGlmIChpc0RlYnVnKSB7XG4gICAgICBjb25maWdCYXJiYS5sb2dMZXZlbCA9ICdpbmZvJ1xuICAgICAgY29uZmlnQmFyYmEudGltZW91dCA9IDEwMDAwXG4gICAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKClcbiAgICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tKVxuICAgIH1cbiAgICBiYXJiYS5pbml0KGNvbmZpZ0JhcmJhKVxuICB9XG5cbiAgYWZ0ZXIoKSB7XG4gICAgdGhpcy5heGVwdGlvLnVwZGF0ZUdhUGFnZSgpXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVMb2FkKGZhbHNlKVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXBkYXRlTW9kdWxlcyAmJiB0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLnBhcnNlTW9kdWxlc0Z1bmN0aW9ucygnYW5pbWF0ZScpXG4gICAgICB0aGlzLnBhcnNlTW9kdWxlc0Z1bmN0aW9ucygnYUFuaW1hdGUnKVxuICAgIH1cblxuICAgIC8vIG1vbml0b3JlZCBjb2RlIGdvZXMgaGVyZVxuICAgIGlmIChpc0RlYnVnKSB7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpXG4gICAgfVxuICAgIHRoaXMucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gIH1cblxuICBzdGF0aWMgY2hlY2tNb2R1bGVIYXNGdW5jdGlvbihtb2R1bGVzTGlzdCwgZnVuYykge1xuICAgIGNvbnN0IG1vZHVsZXNUb1JldHVybiA9IFtdXG4gICAgY29uc3Qgc3ViTW9kdWxlcyA9IE9iamVjdC5rZXlzKG1vZHVsZXNMaXN0KVxuICAgIGxldCBta2ogPSAwXG4gICAgY29uc3Qgc3ViTW9kdWxlc0xlbmd0aCA9IHN1Yk1vZHVsZXMubGVuZ3RoXG4gICAgY29uc3QgZmlyc3RTdWJNb2R1bGUgPSBtb2R1bGVzTGlzdFtzdWJNb2R1bGVzWzBdXVxuICAgIC8vIElmIGZpcnN0IG1vZHVsZSBoYXMgZnVuY3Rpb24sIHRoZW4gYWRkIGFsbCBpbnN0YW5jZXMgaW4gZnVuY3Rpb25zXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGZpcnN0U3ViTW9kdWxlW2Z1bmNdID09PSAnZnVuY3Rpb24nXG4gICAgICAvLyB0eXBlb2YgZmlyc3RTdWJNb2R1bGVbYWZ1bmNdID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBmb3IgKDsgbWtqIDwgc3ViTW9kdWxlc0xlbmd0aDsgbWtqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3VibW9kdWxlTmFtZSA9IHN1Yk1vZHVsZXNbbWtqXVxuICAgICAgICBjb25zdCBzdWJNb2R1bGUgPSBtb2R1bGVzTGlzdFtzdWJtb2R1bGVOYW1lXVxuICAgICAgICBtb2R1bGVzVG9SZXR1cm4ucHVzaChzdWJNb2R1bGUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2R1bGVzVG9SZXR1cm4ubGVuZ3RoID4gMCA/IG1vZHVsZXNUb1JldHVybiA6IG51bGxcbiAgfVxuXG4gIGJyb3dzZU1vZHVsZXNGdW5jdGlvbnMoZnVuY3MpIHtcbiAgICBjb25zdCBtb2R1bGVzVG9MaXN0ID0ge31cbiAgICBsZXQgaSA9IDBcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gZnVuY3NcbiAgICAvLyBwYXJzZSBmdW5jdGlvbnMgdG8gcGFyc2UgbW9kdWxlc1xuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBmdW5jc1tpXVxuICAgICAgbGV0IG1vZHVsZXNUb1JldHVybiA9IFtdXG5cbiAgICAgIGNvbnN0IG1vZHVsZXNUb1BhcnNlID0gT2JqZWN0LmtleXModGhpcy5tYW5hZ2VyLmFjdGl2ZU1vZHVsZXMpXG4gICAgICBsZXQgbWtpID0gMFxuICAgICAgY29uc3QgbWtsZW5ndGggPSBtb2R1bGVzVG9QYXJzZS5sZW5ndGhcbiAgICAgIC8vIFBhcnNlIG1vZHVsZXMgdG8gY2hlY2sgaWYgaW5zdGFuY2VzIGhhcyBmdW5jdGlvblxuICAgICAgZm9yICg7IG1raSA8IG1rbGVuZ3RoOyBta2kgKz0gMSkge1xuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gbW9kdWxlc1RvUGFyc2VbbWtpXVxuICAgICAgICBjb25zdCBtb2R1bGVzTGlzdCA9IHRoaXMubWFuYWdlci5hY3RpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gICAgICAgIGNvbnN0IG1vZHVsZXNUb1JldHVybkluc3RhbmNlcyA9XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01vZHVsZUhhc0Z1bmN0aW9uKG1vZHVsZXNMaXN0LCBmdW5jKVxuICAgICAgICBpZiAobW9kdWxlc1RvUmV0dXJuSW5zdGFuY2VzKSB7XG4gICAgICAgICAgbW9kdWxlc1RvUmV0dXJuID0gWy4uLm1vZHVsZXNUb1JldHVybiwgLi4ubW9kdWxlc1RvUmV0dXJuSW5zdGFuY2VzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtb2R1bGVzVG9MaXN0W2Z1bmNdID0gbW9kdWxlc1RvUmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZXNUb0xpc3RcbiAgfVxuXG4gIHBhcnNlTW9kdWxlc0Z1bmN0aW9ucyhmdW5jKSB7XG4gICAgbGV0IGkgPSAwXG4gICAgY29uc3QgbW9kdWxlc0Z1bmN0ID0gdGhpcy5tb2R1bGVzVG9MaXN0W2Z1bmNdXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG1vZHVsZXNGdW5jdFxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG1vZHVsZXNGdW5jdFtpXVtmdW5jXSgpXG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxvZygncmVzaXplJylcbiAgICBpZiAodGhpcy51cGRhdGVNb2R1bGVzKSB7XG4gICAgICB0aGlzLnBhcnNlTW9kdWxlc0Z1bmN0aW9ucygncmVzaXplJylcbiAgICAgIHRoaXMucGFyc2VNb2R1bGVzRnVuY3Rpb25zKCdhUmVzaXplJylcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlTG9hZChzdGF0ZSkge1xuICAgIGh0bWwuY2xhc3NMaXN0W3N0YXRlID8gJ3JlbW92ZScgOiAnYWRkJ10oJ2lzLWxvYWRlZCcpXG4gICAgaHRtbC5jbGFzc0xpc3Rbc3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaXMtbG9hZGluZycpXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9ICFzdGF0ZVxuICB9XG5cbiAgb25jZSgpIHtcbiAgICB0aGlzLm1hbmFnZXIuaW5pdCh0aGlzLm1hbmFnZXIpXG4gICAgdGhpcy5zZXRNb2R1bGVzRnVuY3Rpb25zKClcbiAgICB0aGlzLnVwZGF0ZU1vZHVsZXMgPSB0cnVlXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVMb2FkKGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmNlUmVzaXplKVxuICAgIHRoaXMucmVzaXplKClcbiAgICBpZiAoaXNEZWJ1ZyB8fCB0aGlzLmNvbmZpZy5hbmltYXRlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgIH1cbiAgfVxuXG4gIGFmdGVyTGVhdmUoZGF0YSkge1xuICAgIHRoaXMudXBkYXRlTW9kdWxlcyA9IGZhbHNlXG4gICAgaWYgKGRhdGEuY3VycmVudC5jb250YWluZXIpIHtcbiAgICAgIHRoaXMubWFuYWdlci5hcHAuZGVzdHJveShkYXRhLmN1cnJlbnQuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIGVudGVyKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5jdXJyZW50LmNvbnRhaW5lcikge1xuICAgICAgZGF0YS5jdXJyZW50LmNvbnRhaW5lci5yZW1vdmUoKVxuICAgIH1cbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICB0aGlzLm1hbmFnZXIuYXBwLnVwZGF0ZShkYXRhLm5leHQuY29udGFpbmVyKVxuICAgIHRoaXMuc2V0TW9kdWxlc0Z1bmN0aW9ucygpXG4gICAgdGhpcy51cGRhdGVNb2R1bGVzID0gdHJ1ZVxuICAgIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIHNldE1vZHVsZXNGdW5jdGlvbnMoKSB7XG4gICAgdGhpcy5tb2R1bGVzVG9MaXN0ID0gdGhpcy5icm93c2VNb2R1bGVzRnVuY3Rpb25zKFtcbiAgICAgICdyZXNpemUnLFxuICAgICAgJ2FSZXNpemUnLFxuICAgICAgJ2FuaW1hdGUnLFxuICAgICAgJ2FBbmltYXRlJyxcbiAgICBdKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbnMoKSB7XG4gICAgT2JqZWN0LmtleXModHJhbnNpdGlvbnMpLmZvckVhY2goKHRyYW5zaXRpb25OYW1lKSA9PiB7XG4gICAgICBjb25zdCBzaW5nbGVUcmFuc2l0aW9uID0gdHJhbnNpdGlvbnNbdHJhbnNpdGlvbk5hbWVdXG4gICAgICBzaW5nbGVUcmFuc2l0aW9uLmluaXQoe30pXG4gICAgICB0aGlzLnRyYW5zaXRpb25zLnB1c2goc2luZ2xlVHJhbnNpdGlvbilcbiAgICB9KVxuICB9XG59XG4iLCIvKiDilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIFcbuKWuuKWuuKWuiBTY3JpcHRzL21haW5cbuKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgSAqL1xuaW1wb3J0IFdlYnNpdGUgZnJvbSAnLi9vcmdhbmlzbXMvX3dlYnNpdGUnXG5pbXBvcnQgQXhlcHRpbyBmcm9tICcuL2F0b21zL19heGVwdGlvJ1xuXG4vLyB3aW5kb3cuYXhlcHRpb1NldHRpbmdzID0ge1xuLy8gICBjbGllbnRJZDogJzYxODUwYWYyYmExNjU5N2ZkNDJmNzllMycsXG4vLyAgIGNvb2tpZXNWZXJzaW9uOiAnYWxleGFuZHJhcGVybGVzLWJhc2UnLFxuLy8gICB1c2VyQ29va2llc0R1cmF0aW9uOiAzMCAqIDYsXG4vLyB9XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJyVjRmFpdCBhdmVjIOKdpO+4j+KdpO+4j+KdpO+4jyBwYXIgVFJPQScsXG4gICAgICAnZm9udC1zaXplOjEwcHg7Y29sb3I6I0FBQ0JGNDsgYmFja2dyb3VuZC1jb2xvcjojMjYzMDY5OyBwYWRkaW5nOjVweDsnXG4gICAgKVxuICAgIHdpbmRvdy53ZWJzaXRlID0gbmV3IFdlYnNpdGUoe1xuICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICB9KVxuICAgIC8vIHdpbmRvdy5heGVwdGlvID0gbmV3IEF4ZXB0aW8oKVxuICB9XG5cbiAgY29uc3QgJHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY3NzJylcblxuICBpZiAoISRzdHlsZSkge1xuICAgIGNvbnNvbGUud2FybignVGhlIFwibWFpbi1jc3NcIiBzdHlsZXNoZWV0IG5vdCBmb3VuZCcpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoJHN0eWxlLmlzTG9hZGVkKSB7XG4gICAgaW5pdCgpXG4gIH0gZWxzZSB7XG4gICAgJHN0eWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KVxuICB9XG59KVxuIiwiaW1wb3J0IGdzYXAsIHsgUG93ZXIzIH0gZnJvbSAnZ3NhcCdcbi8vIGltcG9ydCB7IGh0bWwgfSBmcm9tICcuLi91dGlscy9lbnZpcm9ubWVudCdcbi8vIGltcG9ydCBsb2FkSW1hZ2VzIGZyb20gJy4vX2ltYWdlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFmdGVyKCkge1xuXG4gICAgfSxcblxuICAgIGFmdGVyRW50ZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gZ3NhcC50byh0aGlzLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgZGVsYXk6IDIsXG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICBhdXRvQWxwaGE6ICcwJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluLFxuICAgICAgICAgICAgb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWxvYWRlclwiKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbG9nb1wiKTtcbiAgICAgICAgICAgICAgICBoLmNsYXNzTmFtZSArPSBcIiBpblwiO1xuICAgICAgICAgICAgICAgIGMuY2xhc3NOYW1lICs9IFwiIGluXCI7XG4gICAgICAgICAgICAgICAgbC5jbGFzc05hbWUgKz0gXCIgb3V0XCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgICAgICAgICBkLmNsYXNzTmFtZSArPSBcIiBnb2FuaW1cIjtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSxcblxuICAgIGFmdGVyTGVhdmUoKSB7fSxcblxuICAgIGJlZm9yZSgpIHt9LFxuXG4gICAgYmVmb3JlRW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2VzKFxuICAgICAgICAgICAgZGF0YS5uZXh0LmNvbnRhaW5lcixcbiAgICAgICAgKVxuXG4gICAgfSxcblxuICAgIGJlZm9yZUxlYXZlKCkge30sXG5cbiAgICBlbnRlcigpIHt9LFxuXG4gICAgaW5pdChjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtbG9hZGVyJylcbiAgICAgICAgdGhpcy5sb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxvYWRlci1sb2dvJylcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLWxvYWRlci1wZXJjZW50JylcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB9LFxuXG4gICAgaW52b2tlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWZ0ZXI6IHRoaXMuYWZ0ZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGFmdGVyRW50ZXI6IHRoaXMuYWZ0ZXJFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgYWZ0ZXJMZWF2ZTogdGhpcy5hZnRlckxlYXZlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBiZWZvcmU6IHRoaXMuYmVmb3JlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBiZWZvcmVFbnRlcjogdGhpcy5iZWZvcmVFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgYmVmb3JlTGVhdmU6IHRoaXMuYmVmb3JlTGVhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVudGVyOiB0aGlzLmVudGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBpbml0OiB0aGlzLmluaXQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGxlYXZlOiB0aGlzLmxlYXZlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBvbmNlOiB0aGlzLm9uY2UuYmluZCh0aGlzKSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAuZnJvbVRvKFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIsIHsgb3BhY2l0eTogMCwgYXV0b0FscGhhOiAwIH0sIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuNiwgZWFzZTogUG93ZXIzLmVhc2VPdXQsIGF1dG9BbHBoYTogMSB9LCB7IHk6ICctMTAwJScgfSwgeyB5OiAnMCUnLCBkdXJhdGlvbjogMSwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfVxuICAgICAgICApXG4gICAgfSxcblxuICAgIG5hbWU6ICdiYXNpYycsXG5cbiAgICBvbmNlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5hZnRlckVudGVyKGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZnRlcigpXG4gICAgICAgICAgICB3aW5kb3cud2Vic2l0ZS5hZnRlcigpXG4gICAgICAgIH0pXG4gICAgfSxcblxufS5pbnZva2UoKSIsImNvbnN0IEFQUF9OQU1FID0gJ01BVFNFQidcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IGdyaWRQb3NpdGlvbnNEZXNrdG9wID0gW1xuICB7IGNvbHVtbjogMCwgeTogMCwgd2lkdGg6IDAsIGludmVydDogZmFsc2UgfSxcbiAgeyBjb2x1bW46IDQsIHk6IDMsIHdpZHRoOiAwLCBpbnZlcnQ6IHRydWUgfSxcbiAgeyBjb2x1bW46IDYsIHk6IDAsIHdpZHRoOiAwLCBpbnZlcnQ6IGZhbHNlIH0sXG4gIHsgY29sdW1uOiA5LCB5OiAxMCwgd2lkdGg6IDAsIGludmVydDogdHJ1ZSB9LFxuICB7IGNvbHVtbjogMSwgeTogMjYsIHdpZHRoOiAwLCBpbnZlcnQ6IGZhbHNlIH0sXG4gIHsgY29sdW1uOiA1LCB5OiAzMCwgd2lkdGg6IDAsIGludmVydDogZmFsc2UgfSxcbiAgeyBjb2x1bW46IDMsIHk6IDM4LCB3aWR0aDogMCwgaW52ZXJ0OiBmYWxzZSB9LFxuICB7IGNvbHVtbjogNywgeTogNDQsIHdpZHRoOiAwLCBpbnZlcnQ6IGZhbHNlIH0sXG4gIHsgY29sdW1uOiAyLCB5OiA1NSwgd2lkdGg6IDAsIGludmVydDogdHJ1ZSB9LFxuICB7IGNvbHVtbjogNCwgeTogNjksIHdpZHRoOiAwLCBpbnZlcnQ6IHRydWUgfSxcbiAgeyBjb2x1bW46IDYsIHk6IDYzLCB3aWR0aDogMCwgaW52ZXJ0OiB0cnVlIH0sXG4gIHsgY29sdW1uOiA5LCB5OiA3NSwgd2lkdGg6IDAsIGludmVydDogdHJ1ZSB9LFxuXVxuXG5jb25zdCBncmlkUG9zaXRpb25zTW9iaWxlID0gW1xuICB7IGNvbHVtbjogMCwgeTogMCwgd2lkdGg6IDAsIGludmVydDogZmFsc2UgfSxcbiAgeyBjb2x1bW46IDQsIHk6IDMsIHdpZHRoOiAwLCBpbnZlcnQ6IHRydWUgfSxcbiAgeyBjb2x1bW46IDUsIHk6IDAsIHdpZHRoOiAwLCBpbnZlcnQ6IHRydWUgfSxcbiAgeyBjb2x1bW46IDEsIHk6IDI2LCB3aWR0aDogMCwgaW52ZXJ0OiBmYWxzZSB9LFxuICB7IGNvbHVtbjogNSwgeTogMzAsIHdpZHRoOiAwLCBpbnZlcnQ6IGZhbHNlIH0sXG4gIHsgY29sdW1uOiAzLCB5OiAzOCwgd2lkdGg6IDAsIGludmVydDogZmFsc2UgfSxcbiAgeyBjb2x1bW46IDIsIHk6IDU1LCB3aWR0aDogMCwgaW52ZXJ0OiB0cnVlIH0sXG4gIHsgY29sdW1uOiA0LCB5OiA2OSwgd2lkdGg6IDAsIGludmVydDogdHJ1ZSB9LFxuICB7IGNvbHVtbjogMCwgeTogNjMsIHdpZHRoOiAwLCBpbnZlcnQ6IGZhbHNlIH0sXG5dXG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbmNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnRcbmNvbnN0IGlzRGVidWcgPSBodG1sLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZWJ1ZycpXG5cbmV4cG9ydCB7IEFQUF9OQU1FLCBEQVRBX0FQSV9LRVksIGh0bWwsIGJvZHksIGlzRGVidWcsIGdyaWRQb3NpdGlvbnNEZXNrdG9wLCBncmlkUG9zaXRpb25zTW9iaWxlIH1cbiIsImltcG9ydCB7IGlzRGVidWcgfSBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuXG4vKipcbiAqIExpc3Qgb2YgdXNlZnVsbCB0b29sc1xuICpcbiAqIEBtb2R1bGUgdXRpbHNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZWFkeSB9IGZyb20gXCJwYXRoL3RvL3V0aWxzLmpzXCJcbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgYSBjYWxsYmFjayB3aGVuIGVsZW1lbnQgaXMgcmVhZHlcbiAqXG4gKiBAbWV0aG9kIHJlYWR5XG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBDYWxsYmFjayB0byBleGVjdXRlIGlmIGVsZW1lbnQgaXMgcmVhZHlcbiAqIEBwYXJhbSB7bm9kZUVsZW1lbnR9IFtlbGVtZW50XSAtIEVsZW1lbnQgb24gd2ljaCBjaGVjayBpZiBpdCdzIHJlYWR5XG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwicGF0aC90by91dGlscy5qc1wiXG4gKlxuICogcmVhZHkoKCkgPT4ge1xuICogICAvLyB5b3VyIGNvZGUgaGVyZVxuICogfSlcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWR5ID0gKGZuLCBlbGVtZW50ID0gZG9jdW1lbnQpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBlbGVtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiXG4gICAgPyBmbi5hcHBseShlbGVtZW50KVxuICAgIDogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbi5iaW5kKGVsZW1lbnQpKTtcbn07XG5cbi8qKlxuICogRGVib3VuY2luZyBlbmZvcmNlcyB0aGF0IGEgZnVuY3Rpb24gbm90IGJlIGNhbGxlZCBhZ2FpbiB1bnRpbCBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWUgaGFzIHBhc3NlZCB3aXRob3V0IGl0IGJlaW5nIGNhbGxlZC5cbiAqIEFzIGluIFwiZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uIG9ubHkgaWYgMTAwIG1pbGxpc2Vjb25kcyBoYXZlIHBhc3NlZCB3aXRob3V0IGl0IGJlaW5nIGNhbGxlZC5cIlxuICpcbiAqIEBtZXRob2QgZGVib3VuY2VcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtpbnRlZ2VyfSBkZWxheVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcInBhdGgvdG8vdXRpbHMuanNcIlxuICpcbiAqIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2UoXG4gKiAgICAoKSA9PiB7XG4gKiAgICAgIC8vIFlvdXIgY29kZSBoZXJlXG4gKiAgICAgIC8vIEV4ZWN1dGVkIDUwbXMgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgdG8gc2Nyb2xsXG4gKiAgICB9LCA1MFxuICogKSlcbiAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBsZXQgdGltZXI7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59O1xuXG4vKipcbiAqIFRocm90dGxpbmcgZW5mb3JjZXMgYSBtYXhpbXVtIG51bWJlciBvZiB0aW1lcyBhIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgb3ZlciB0aW1lLlxuICogQXMgaW4gXCJleGVjdXRlIHRoaXMgZnVuY3Rpb24gYXQgbW9zdCBvbmNlIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMuXCJcbiAqXG4gKiBAbWV0aG9kIHRocm90dGxlXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7aW50ZWdlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gXCJwYXRoL3RvL3V0aWxzLmpzXCJcbiAqXG4gKiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKFxuICogICAgKCkgPT4ge1xuICogICAgICAvLyBZb3VyIGNvZGUgaGVyZVxuICogICAgICAvLyBFeGVjdXRlZCBldmVyZXkgNTBtcyBkdXJpbmcgc2Nyb2xsaW5nXG4gKiAgICB9LCA1MFxuICogKSlcbiAqL1xuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBsZXQgbGFzdDtcbiAgbGV0IHRpbWVyO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyBkZWxheSkge1xuICAgICAgLy8gbGUgZMOpbGFpIG4nZXN0IHBhcyDDqWNvdWzDqSBvbiByZXNldCBsZSB0aW1lclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgY2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGNsb3Nlc3QgYW5jZXN0b3Igb2YgYW4gZWxlbWVudCBtYXRjaGluZyBhIHNlbGVjdG9yXG4gKlxuICogQG1ldGhvZCBjbG9zZXN0XG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtub2RlRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0b3BTZWxlY3Rvcj1cImJvZHlcIl1cbiAqIEByZXR1cm5zIHtub2RlRWxlbWVudH1cbiAqIEBleGFtcGxlXG4gKiA8IS0tIENvbnNpZGVyaW5nIGZvbGxvd2luZyBIVE1MIHN0cnVjdHVyZSAtLT5cbiAqIDxkaXYgY2xhc3M9XCJmb29cIj5cbiAqICAgIDxkaXYgY2xhc3M9XCJiYXJcIj5cbiAqICAgICAgPGRpdiBpZD1cImJhelwiPlxuICogICAgICAgIGxvcmVtIGlwc3VtXG4gKiAgICAgIDwvZGl2PlxuICogICAgPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjbG9zZXN0IH0gZnJvbSBcInBhdGgvdG8vdXRpbHMuanNcIlxuICpcbiAqIC8vIEl0IHJldHVybiB5b3UgYC5mb29gIGRpdlxuICogY2xvc2VzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF6JyksICcuZm9vJyk7XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5leHBvcnQgY29uc3QgY2xvc2VzdCA9IChlbGVtZW50LCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yID0gXCJib2R5XCIpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dmFsID0gZWxlbWVudDtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoc3RvcFNlbGVjdG9yICYmIGVsZW1lbnQubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gcmV0dmFsO1xufTtcblxuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNmb3JtID0gKGVsKSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG4gIHJldHVybiBzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWF0cml4ID0gKHRyYW5zZm9ybSkgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSB7fVxuICBsZXQgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pXG4gIGlmIChtYXQpIHtcbiAgICB0cmFuc2xhdGUueCA9IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEyXSlcbiAgICB0cmFuc2xhdGUueSA9IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSlcbiAgfSBlbHNlIHtcbiAgICBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pXG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwXG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwXG4gIH1cbiAgcmV0dXJuIHRyYW5zbGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpIHtcbiAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsKG5vbWJyZSwgcHJlY2lzaW9uID0gMikge1xuICAvLyB2YXIgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDI7XG4gIGNvbnN0IHRtcCA9IDEwICoqIHByZWNpc2lvblxuICAvLyBjb25zdCB0bXAgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobm9tYnJlICogdG1wKS90bXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGb3JtKGZvcm0pIHtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgY29uc3QgZW50cmllcyA9IEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKVxuICBjb25zdCBmaWx0ZXJzT2JqZWN0ID0ge31cbiAgZW50cmllcy5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZpbHRlcnNPYmplY3RbbmFtZV0gPSBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZpbHRlcnNPYmplY3RbbmFtZV0gPSB2YWx1ZVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcnNPYmplY3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhdGlvUHggKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAvIHdpbmRvdy5zY3JlZW4ud2lkdGggKiB3aW5kb3cudmlld3BvcnQud2lkdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNpdmVWYWx1ZSAocmVzcG9uc2l2ZU9iamVjdCkge1xuICBpZih0eXBlb2YgcmVzcG9uc2l2ZU9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgcmVzcG9uc2l2ZVZhbHVlID0gMVxuICAgIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNpdmVPYmplY3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKE51bWJlcihrZXkpIDwgd2luZG93LnNjcmVlbi53aWR0aCkge1xuICAgICAgICByZXNwb25zaXZlVmFsdWUgPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3BvbnNpdmVWYWx1ZVxuICB9IFxuICByZXR1cm4gcmVzcG9uc2l2ZU9iamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzVG91Y2hFdmVudCgpIHtcbiAgcmV0dXJuICggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkgfHwgXG4gICAgKCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwICkgfHxcbiAgICAoIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKGNvbnRlbnQpIHtcbiAgaWYgKGlzRGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50KVxuICB9XG59Il19
