/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
Drupal.locale = { 'pluralFormula': function($n) { return Number(($n!=1)); }, 'strings': { "Unspecified error": "Error no especificado", "Select all rows in this table": "Seleccionar todas las filas de esta tabla", "Deselect all rows in this table": "Quitar la selección a todas las filas de esta tabla", "Join summary": "Unir resumen", "Split summary at cursor": "Definir resumen hasta el cursor", "Drag to re-order": "Arrastre para reordenar", "Changes made in this table will not be saved until the form is submitted.": "Los cambios realizados en esta tabla no se guardarán hasta que se envíe el formulario", "An error occurred. \n@uri\n@text": "An error occurred.  @uri @text", "An error occurred. \n@uri\n(no information available).": "Ha ocurrido un error. \r\n@uri\r\n(información no disponible).", "An HTTP error @status occurred. \n@uri": "Ocurrió un error HTTP @status. @uri", "Only files with the following extensions are allowed: %files-allowed.": "Sólo se permiten archivos con las siguientes extensiones: %files-allowed.", "Edit": "Editar", "Upload": "Subir", "Published": "Publicado", "Promoted to front page": "Promocionado a la página principal", "Anonymous": "Anónimo", "Not published": "No publicado", "Your server has been successfully tested to support this feature.": "Su servidor pasó con éxito la prueba sobre soporte de esta característica.", "Your system configuration does not currently support this feature. The \x3ca href=\"http://drupal.org/node/15365\"\x3ehandbook page on Clean URLs\x3c/a\x3e has additional troubleshooting information.": "La configuración de su sistema no soporta actualmente esta característica. La \x3ca href=\"http://drupal.org/node/15365\"\x3epágina del manual sobre URL limpios\x3c/a\x3e tiene más información sobre posibles problemas.", "Testing clean URLs...": "Probando URL limpios...", "The changes to these blocks will not be saved until the \x3cem\x3eSave blocks\x3c/em\x3e button is clicked.": "Los cambios sobre estos bloques no se guardarán hasta que no pulse el botón \x3cem\x3eGuardar bloques\x3c/em\x3e.", "None": "Ninguno", "Automatic alias": "Alias automático de ruta", "Next": "Próx.", "Close": "Cerrar", "Insert Teaser Break": "Insertar Marca de Separación", "Insert Page Break": "Insertar Salto de Página", "The document already contains a teaser break. Do you want to proceed by removing it first?": "El documento ya contiene una marca de separación. ¿Quiere eliminarla?", "Error !msg": "Error !msg", "Error on retrieving data from module.": "Error recuperando la información del módulo", "Embed Media Dialog": "Diálogo de incrustación multimedia", "Embed media code": "Incrustar código multimedia", "Paste embed code here": "Pegue el código incrustado aquí" } };;
/* $Id: lightbox.js,v 1.5.2.6.2.136 2010/09/24 08:39:40 snpower Exp $ */

/**
 * jQuery Lightbox
 * @author
 *   Stella Power, <http://drupal.org/user/66894>
 *
 * Based on Lightbox v2.03.3 by Lokesh Dhakar
 * <http://www.huddletogether.com/projects/lightbox2/>
 * Also partially based on the jQuery Lightbox by Warren Krewenki
 *   <http://warren.mesozen.com>
 *
 * Permission has been granted to Mark Ashmead & other Drupal Lightbox2 module
 * maintainers to distribute this file via Drupal.org
 * Under GPL license.
 *
 * Slideshow, iframe and video functionality added by Stella Power.
 */

var Lightbox = {
  auto_modal : false,
  overlayOpacity : 0.8, // Controls transparency of shadow overlay.
  overlayColor : '000', // Controls colour of shadow overlay.
  disableCloseClick : true,
  // Controls the order of the lightbox resizing animation sequence.
  resizeSequence: 0, // 0: simultaneous, 1: width then height, 2: height then width.
  resizeSpeed: 'normal', // Controls the speed of the lightbox resizing animation.
  fadeInSpeed: 'normal', // Controls the speed of the image appearance.
  slideDownSpeed: 'slow', // Controls the speed of the image details appearance.
  minWidth: 240,
  borderSize : 10,
  boxColor : 'fff',
  fontColor : '000',
  topPosition : '',
  infoHeight: 20,
  alternative_layout : false,
  imageArray : [],
  imageNum : null,
  total : 0,
  activeImage : null,
  inprogress : false,
  disableResize : false,
  disableZoom : false,
  isZoomedIn : false,
  rtl : false,
  loopItems : false,
  keysClose : ['c', 'x', 27],
  keysPrevious : ['p', 37],
  keysNext : ['n', 39],
  keysZoom : ['z'],
  keysPlayPause : [32],

  // Slideshow options.
  slideInterval : 5000, // In milliseconds.
  showPlayPause : true,
  autoStart : true,
  autoExit : true,
  pauseOnNextClick : false, // True to pause the slideshow when the "Next" button is clicked.
  pauseOnPrevClick : true, // True to pause the slideshow when the "Prev" button is clicked.
  slideIdArray : [],
  slideIdCount : 0,
  isSlideshow : false,
  isPaused : false,
  loopSlides : false,

  // Iframe options.
  isLightframe : false,
  iframe_width : 600,
  iframe_height : 400,
  iframe_border : 1,

  // Video and modal options.
  enableVideo : false,
  flvPlayer : '/flvplayer.swf',
  flvFlashvars : '',
  isModal : false,
  isVideo : false,
  videoId : false,
  modalWidth : 400,
  modalHeight : 400,
  modalHTML : null,


  // initialize()
  // Constructor runs on completion of the DOM loading.
  // The function inserts html at the bottom of the page which is used
  // to display the shadow overlay and the image container.
  initialize: function() {

    var s = Drupal.settings.lightbox2;
    Lightbox.overlayOpacity = s.overlay_opacity;
    Lightbox.overlayColor = s.overlay_color;
    Lightbox.disableCloseClick = s.disable_close_click;
    Lightbox.resizeSequence = s.resize_sequence;
    Lightbox.resizeSpeed = s.resize_speed;
    Lightbox.fadeInSpeed = s.fade_in_speed;
    Lightbox.slideDownSpeed = s.slide_down_speed;
    Lightbox.borderSize = s.border_size;
    Lightbox.boxColor = s.box_color;
    Lightbox.fontColor = s.font_color;
    Lightbox.topPosition = s.top_position;
    Lightbox.rtl = s.rtl;
    Lightbox.loopItems = s.loop_items;
    Lightbox.keysClose = s.keys_close.split(" ");
    Lightbox.keysPrevious = s.keys_previous.split(" ");
    Lightbox.keysNext = s.keys_next.split(" ");
    Lightbox.keysZoom = s.keys_zoom.split(" ");
    Lightbox.keysPlayPause = s.keys_play_pause.split(" ");
    Lightbox.disableResize = s.disable_resize;
    Lightbox.disableZoom = s.disable_zoom;
    Lightbox.slideInterval = s.slideshow_interval;
    Lightbox.showPlayPause = s.show_play_pause;
    Lightbox.showCaption = s.show_caption;
    Lightbox.autoStart = s.slideshow_automatic_start;
    Lightbox.autoExit = s.slideshow_automatic_exit;
    Lightbox.pauseOnNextClick = s.pause_on_next_click;
    Lightbox.pauseOnPrevClick = s.pause_on_previous_click;
    Lightbox.loopSlides = s.loop_slides;
    Lightbox.alternative_layout = s.use_alt_layout;
    Lightbox.iframe_width = s.iframe_width;
    Lightbox.iframe_height = s.iframe_height;
    Lightbox.iframe_border = s.iframe_border;
    Lightbox.enableVideo = s.enable_video;
    if (s.enable_video) {
      Lightbox.flvPlayer = s.flvPlayer;
      Lightbox.flvFlashvars = s.flvFlashvars;
    }

    // Make the lightbox divs.
    var layout_class = (s.use_alt_layout ? 'lightbox2-alt-layout' : 'lightbox2-orig-layout');
    var output = '<div id="lightbox2-overlay" style="display: none;"></div>\
      <div id="lightbox" style="display: none;" class="' + layout_class + '">\
        <div id="outerImageContainer"></div>\
        <div id="imageDataContainer" class="clearfix">\
          <div id="imageData"></div>\
        </div>\
      </div>';
    var loading = '<div id="loading"><a href="#" id="loadingLink"></a></div>';
    var modal = '<div id="modalContainer" style="display: none;"></div>';
    var frame = '<div id="frameContainer" style="display: none;"></div>';
    var imageContainer = '<div id="imageContainer" style="display: none;"></div>';
    var details = '<div id="imageDetails"></div>';
    var bottomNav = '<div id="bottomNav"></div>';
    var image = '<img id="lightboxImage" alt="" />';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" href="#"></a><a id="nextLink" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" href="#"></a><a id="frameNextLink" href="#"></a></div>';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="nextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="frameNextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var caption = '<span id="caption"></span>';
    var numberDisplay = '<span id="numberDisplay"></span>';
    var close = '<a id="bottomNavClose" title="' + Drupal.t('Close') + '" href="#"></a>';
    var zoom = '<a id="bottomNavZoom" href="#"></a>';
    var zoomOut = '<a id="bottomNavZoomOut" href="#"></a>';
    var pause = '<a id="lightshowPause" title="' + Drupal.t('Pause Slideshow') + '" href="#" style="display: none;"></a>';
    var play = '<a id="lightshowPlay" title="' + Drupal.t('Play Slideshow') + '" href="#" style="display: none;"></a>';

    $("body").append(output);
    $('#outerImageContainer').append(modal + frame + imageContainer + loading);
    if (!s.use_alt_layout) {
      $('#imageContainer').append(image + hoverNav);
      $('#imageData').append(details + bottomNav);
      $('#imageDetails').append(caption + numberDisplay);
      $('#bottomNav').append(frameNav + close + zoom + zoomOut + pause + play);
    }
    else {
      $('#outerImageContainer').append(bottomNav);
      $('#imageContainer').append(image);
      $('#bottomNav').append(close + zoom + zoomOut);
      $('#imageData').append(hoverNav + details);
      $('#imageDetails').append(caption + numberDisplay + pause + play);
    }

    // Setup onclick handlers.
    if (Lightbox.disableCloseClick) {
      $('#lightbox2-overlay').click(function() { Lightbox.end(); return false; } ).hide();
    }
    $('#loadingLink, #bottomNavClose').click(function() { Lightbox.end('forceClose'); return false; } );
    $('#prevLink, #framePrevLink').click(function() { Lightbox.changeData(Lightbox.activeImage - 1); return false; } );
    $('#nextLink, #frameNextLink').click(function() { Lightbox.changeData(Lightbox.activeImage + 1); return false; } );
    $('#bottomNavZoom').click(function() { Lightbox.changeData(Lightbox.activeImage, true); return false; } );
    $('#bottomNavZoomOut').click(function() { Lightbox.changeData(Lightbox.activeImage, false); return false; } );
    $('#lightshowPause').click(function() { Lightbox.togglePlayPause("lightshowPause", "lightshowPlay"); return false; } );
    $('#lightshowPlay').click(function() { Lightbox.togglePlayPause("lightshowPlay", "lightshowPause"); return false; } );

    // Fix positioning.
    $('#prevLink, #nextLink, #framePrevLink, #frameNextLink').css({ 'paddingTop': Lightbox.borderSize + 'px'});
    $('#imageContainer, #frameContainer, #modalContainer').css({ 'padding': Lightbox.borderSize + 'px'});
    $('#outerImageContainer, #imageDataContainer, #bottomNavClose').css({'backgroundColor': '#' + Lightbox.boxColor, 'color': '#'+Lightbox.fontColor});
    if (Lightbox.alternative_layout) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'bottom': Lightbox.borderSize + 'px', 'right': Lightbox.borderSize + 'px'});
    }
    else if (Lightbox.rtl == 1 && $.browser.msie) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'left': '0px'});
    }

    // Force navigation links to always be displayed
    if (s.force_show_nav) {
      $('#prevLink, #nextLink').addClass("force_show_nav");
    }

  },

  // initList()
  // Loops through anchor tags looking for 'lightbox', 'lightshow' and
  // 'lightframe', etc, references and applies onclick events to appropriate
  // links. You can rerun after dynamically adding images w/ajax.
  initList : function(context) {

    if (context == undefined || context == null) {
      context = document;
    }

    // Attach lightbox to any links with rel 'lightbox', 'lightshow' or
    // 'lightframe', etc.
    $("a[rel^='lightbox']:not(.lightbox-processed), area[rel^='lightbox']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightshow']:not(.lightbox-processed), area[rel^='lightshow']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, true, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightframe']:not(.lightbox-processed), area[rel^='lightframe']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, true, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    if (Lightbox.enableVideo) {
      $("a[rel^='lightvideo']:not(.lightbox-processed), area[rel^='lightvideo']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
        if (Lightbox.disableCloseClick) {
          $('#lightbox').unbind('click');
          $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
        }
        Lightbox.start(this, false, false, true, false);
        if (e.preventDefault) { e.preventDefault(); }
        return false;
      });
    }
    $("a[rel^='lightmodal']:not(.lightbox-processed), area[rel^='lightmodal']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      $('#lightbox').unbind('click');
      // Add classes from the link to the lightbox div - don't include lightbox-processed
      $('#lightbox').addClass($(this).attr('class'));
      $('#lightbox').removeClass('lightbox-processed');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("#lightboxAutoModal:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      Lightbox.auto_modal = true;
      $('#lightbox').unbind('click');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
  },

  // start()
  // Display overlay and lightbox. If image is part of a set, add siblings to
  // imageArray.
  start: function(imageLink, slideshow, lightframe, lightvideo, lightmodal) {

    Lightbox.isPaused = !Lightbox.autoStart;

    // Replaces hideSelectBoxes() and hideFlash() calls in original lightbox2.
    Lightbox.toggleSelectsFlash('hide');

    // Stretch overlay to fill page and fade in.
    var arrayPageSize = Lightbox.getPageSize();
    $("#lightbox2-overlay").hide().css({
      'width': '100%',
      'zIndex': '10090',
      'height': arrayPageSize[1] + 'px',
      'backgroundColor' : '#' + Lightbox.overlayColor
    });
    // Detect OS X FF2 opacity + flash issue.
    if (lightvideo && this.detectMacFF2()) {
      $("#lightbox2-overlay").removeClass("overlay_default");
      $("#lightbox2-overlay").addClass("overlay_macff2");
      $("#lightbox2-overlay").css({'opacity' : null});
    }
    else {
      $("#lightbox2-overlay").removeClass("overlay_macff2");
      $("#lightbox2-overlay").addClass("overlay_default");
      $("#lightbox2-overlay").css({'opacity' : Lightbox.overlayOpacity});
    }
    $("#lightbox2-overlay").fadeIn(Lightbox.fadeInSpeed);


    Lightbox.isSlideshow = slideshow;
    Lightbox.isLightframe = lightframe;
    Lightbox.isVideo = lightvideo;
    Lightbox.isModal = lightmodal;
    Lightbox.imageArray = [];
    Lightbox.imageNum = 0;

    var anchors = $(imageLink.tagName);
    var anchor = null;
    var rel_parts = Lightbox.parseRel(imageLink);
    var rel = rel_parts["rel"];
    var rel_group = rel_parts["group"];
    var title = (rel_parts["title"] ? rel_parts["title"] : imageLink.title);
    var rel_style = null;
    var i = 0;

    if (rel_parts["flashvars"]) {
      Lightbox.flvFlashvars = Lightbox.flvFlashvars + '&' + rel_parts["flashvars"];
    }

    // Set the title for image alternative text.
    var alt = imageLink.title;
    if (!alt) {
      var img = $(imageLink).find("img");
      if (img && $(img).attr("alt")) {
        alt = $(img).attr("alt");
      }
      else {
        alt = title;
      }
    }

    if ($(imageLink).attr('id') == 'lightboxAutoModal') {
      rel_style = rel_parts["style"];
      Lightbox.imageArray.push(['#lightboxAutoModal > *', title, alt, rel_style, 1]);
    }
    else {
      // Handle lightbox images with no grouping.
      if ((rel == 'lightbox' || rel == 'lightshow') && !rel_group) {
        Lightbox.imageArray.push([imageLink.href, title, alt]);
      }

      // Handle other items with no grouping.
      else if (!rel_group) {
        rel_style = rel_parts["style"];
        Lightbox.imageArray.push([imageLink.href, title, alt, rel_style]);
      }

      // Handle grouped items.
      else {

        // Loop through anchors and add them to imageArray.
        for (i = 0; i < anchors.length; i++) {
          anchor = anchors[i];
          if (anchor.href && typeof(anchor.href) == "string" && $(anchor).attr('rel')) {
            var rel_data = Lightbox.parseRel(anchor);
            var anchor_title = (rel_data["title"] ? rel_data["title"] : anchor.title);
            img_alt = anchor.title;
            if (!img_alt) {
              var anchor_img = $(anchor).find("img");
              if (anchor_img && $(anchor_img).attr("alt")) {
                img_alt = $(anchor_img).attr("alt");
              }
              else {
                img_alt = title;
              }
            }
            if (rel_data["rel"] == rel) {
              if (rel_data["group"] == rel_group) {
                if (Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) {
                  rel_style = rel_data["style"];
                }
                Lightbox.imageArray.push([anchor.href, anchor_title, img_alt, rel_style]);
              }
            }
          }
        }

        // Remove duplicates.
        for (i = 0; i < Lightbox.imageArray.length; i++) {
          for (j = Lightbox.imageArray.length-1; j > i; j--) {
            if (Lightbox.imageArray[i][0] == Lightbox.imageArray[j][0]) {
              Lightbox.imageArray.splice(j,1);
            }
          }
        }
        while (Lightbox.imageArray[Lightbox.imageNum][0] != imageLink.href) {
          Lightbox.imageNum++;
        }
      }
    }

    if (Lightbox.isSlideshow && Lightbox.showPlayPause && Lightbox.isPaused) {
      $('#lightshowPlay').show();
      $('#lightshowPause').hide();
    }

    // Calculate top and left offset for the lightbox.
    var arrayPageScroll = Lightbox.getPageScroll();
    var lightboxTop = arrayPageScroll[1] + (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
    var lightboxLeft = arrayPageScroll[0];
    $('#frameContainer, #modalContainer, #lightboxImage').hide();
    $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
    $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();
    $('#outerImageContainer').css({'width': '250px', 'height': '250px'});
    $('#lightbox').css({
      'zIndex': '10500',
      'top': lightboxTop + 'px',
      'left': lightboxLeft + 'px'
    }).show();

    Lightbox.total = Lightbox.imageArray.length;
    Lightbox.changeData(Lightbox.imageNum);
  },

  // changeData()
  // Hide most elements and preload image in preparation for resizing image
  // container.
  changeData: function(imageNum, zoomIn) {

    if (Lightbox.inprogress === false) {
      if (Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) {
        if (imageNum >= Lightbox.total) imageNum = 0;
        if (imageNum < 0) imageNum = Lightbox.total - 1;
      }

      if (Lightbox.isSlideshow) {
        for (var i = 0; i < Lightbox.slideIdCount; i++) {
          window.clearTimeout(Lightbox.slideIdArray[i]);
        }
      }
      Lightbox.inprogress = true;
      Lightbox.activeImage = imageNum;

      if (Lightbox.disableResize && !Lightbox.isSlideshow) {
        zoomIn = true;
      }
      Lightbox.isZoomedIn = zoomIn;


      // Hide elements during transition.
      $('#loading').css({'zIndex': '10500'}).show();
      if (!Lightbox.alternative_layout) {
        $('#imageContainer').hide();
      }
      $('#frameContainer, #modalContainer, #lightboxImage').hide();
      $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
      $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();

      // Preload image content, but not iframe pages.
      if (!Lightbox.isLightframe && !Lightbox.isVideo && !Lightbox.isModal) {
        $("#lightbox #imageDataContainer").removeClass('lightbox2-alt-layout-data');
        imgPreloader = new Image();
        imgPreloader.onerror = function() { Lightbox.imgNodeLoadingError(this); };

        imgPreloader.onload = function() {
          var photo = document.getElementById('lightboxImage');
          photo.src = Lightbox.imageArray[Lightbox.activeImage][0];
          photo.alt = Lightbox.imageArray[Lightbox.activeImage][2];

          var imageWidth = imgPreloader.width;
          var imageHeight = imgPreloader.height;

          // Resize code.
          var arrayPageSize = Lightbox.getPageSize();
          var targ = { w:arrayPageSize[2] - (Lightbox.borderSize * 2), h:arrayPageSize[3] - (Lightbox.borderSize * 6) - (Lightbox.infoHeight * 4) - (arrayPageSize[3] / 10) };
          var orig = { w:imgPreloader.width, h:imgPreloader.height };

          // Image is very large, so show a smaller version of the larger image
          // with zoom button.
          if (zoomIn !== true) {
            var ratio = 1.0; // Shrink image with the same aspect.
            $('#bottomNavZoomOut, #bottomNavZoom').hide();
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              ratio = ((targ.w / orig.w) < (targ.h / orig.h)) ? targ.w / orig.w : targ.h / orig.h;
              if (!Lightbox.disableZoom && !Lightbox.isSlideshow) {
                $('#bottomNavZoom').css({'zIndex': '10500'}).show();
              }
            }

            imageWidth  = Math.floor(orig.w * ratio);
            imageHeight = Math.floor(orig.h * ratio);
          }

          else {
            $('#bottomNavZoom').hide();
            // Only display zoom out button if the image is zoomed in already.
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              // Only display zoom out button if not a slideshow and if the
              // buttons aren't disabled.
              if (!Lightbox.disableResize && Lightbox.isSlideshow === false && !Lightbox.disableZoom) {
                $('#bottomNavZoomOut').css({'zIndex': '10500'}).show();
              }
            }
          }

          photo.style.width = (imageWidth) + 'px';
          photo.style.height = (imageHeight) + 'px';
          Lightbox.resizeContainer(imageWidth, imageHeight);

          // Clear onLoad, IE behaves irratically with animated gifs otherwise.
          imgPreloader.onload = function() {};
        };

        imgPreloader.src = Lightbox.imageArray[Lightbox.activeImage][0];
        imgPreloader.alt = Lightbox.imageArray[Lightbox.activeImage][2];
      }

      // Set up frame size, etc.
      else if (Lightbox.isLightframe) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var src = Lightbox.imageArray[Lightbox.activeImage][0];
        $('#frameContainer').html('<iframe id="lightboxFrame" style="display: none;" src="'+src+'"></iframe>');

        // Enable swf support in Gecko browsers.
        if ($.browser.mozilla && src.indexOf('.swf') != -1) {
          setTimeout(function () {
            document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
          }, 1000);
        }

        if (!Lightbox.iframe_border) {
          $('#lightboxFrame').css({'border': 'none'});
          $('#lightboxFrame').attr('frameborder', '0');
        }
        var iframe = document.getElementById('lightboxFrame');
        var iframeStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        iframe = Lightbox.setStyles(iframe, iframeStyles);
        Lightbox.resizeContainer(parseInt(iframe.width, 10), parseInt(iframe.height, 10));
      }
      else if (Lightbox.isVideo || Lightbox.isModal) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var container = document.getElementById('modalContainer');
        var modalStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        container = Lightbox.setStyles(container, modalStyles);
        if (Lightbox.isVideo) {
          Lightbox.modalHeight =  parseInt(container.height, 10) - 10;
          Lightbox.modalWidth =  parseInt(container.width, 10) - 10;
          Lightvideo.startVideo(Lightbox.imageArray[Lightbox.activeImage][0]);
        }
        Lightbox.resizeContainer(parseInt(container.width, 10), parseInt(container.height, 10));
      }
    }
  },

  // imgNodeLoadingError()
  imgNodeLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    var original_image = Lightbox.imageArray[Lightbox.activeImage][0];
    if (s.display_image_size !== "") {
      original_image = original_image.replace(new RegExp("."+s.display_image_size), "");
    }
    Lightbox.imageArray[Lightbox.activeImage][0] = original_image;
    image.onerror = function() { Lightbox.imgLoadingError(image); };
    image.src = original_image;
  },

  // imgLoadingError()
  imgLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    Lightbox.imageArray[Lightbox.activeImage][0] = s.default_image;
    image.src = s.default_image;
  },

  // resizeContainer()
  resizeContainer: function(imgWidth, imgHeight) {

    imgWidth = (imgWidth < Lightbox.minWidth ? Lightbox.minWidth : imgWidth);

    this.widthCurrent = $('#outerImageContainer').width();
    this.heightCurrent = $('#outerImageContainer').height();

    var widthNew = (imgWidth  + (Lightbox.borderSize * 2));
    var heightNew = (imgHeight  + (Lightbox.borderSize * 2));

    // Scalars based on change from old to new.
    this.xScale = ( widthNew / this.widthCurrent) * 100;
    this.yScale = ( heightNew / this.heightCurrent) * 100;

    // Calculate size difference between new and old image, and resize if
    // necessary.
    wDiff = this.widthCurrent - widthNew;
    hDiff = this.heightCurrent - heightNew;

    $('#modalContainer').css({'width': imgWidth, 'height': imgHeight});
    // Detect animation sequence.
    if (Lightbox.resizeSequence) {
      var animate1 = {width: widthNew};
      var animate2 = {height: heightNew};
      if (Lightbox.resizeSequence == 2) {
        animate1 = {height: heightNew};
        animate2 = {width: widthNew};
      }
      $('#outerImageContainer').animate(animate1, Lightbox.resizeSpeed).animate(animate2, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }
    // Simultaneous.
    else {
      $('#outerImageContainer').animate({'width': widthNew, 'height': heightNew}, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }

    // If new and old image are same size and no scaling transition is necessary
    // do a quick pause to prevent image flicker.
    if ((hDiff === 0) && (wDiff === 0)) {
      if ($.browser.msie) {
        Lightbox.pause(250);
      }
      else {
        Lightbox.pause(100);
      }
    }

    var s = Drupal.settings.lightbox2;
    if (!s.use_alt_layout) {
      $('#prevLink, #nextLink').css({'height': imgHeight + 'px'});
    }
    $('#imageDataContainer').css({'width': widthNew + 'px'});
  },

  // showData()
  // Display image and begin preloading neighbors.
  showData: function() {
    $('#loading').hide();

    if (Lightbox.isLightframe || Lightbox.isVideo || Lightbox.isModal) {
      Lightbox.updateDetails();
      if (Lightbox.isLightframe) {
        $('#frameContainer').show();
        if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
          $('#lightboxFrame').css({'zIndex': '10500'}).show();
        }
        else {
          $('#lightboxFrame').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
        }
      }
      else {
        if (Lightbox.isVideo) {
          $("#modalContainer").html(Lightbox.modalHTML).click(function(){return false;}).css('zIndex', '10500').show();
        }
        else {
          var src = unescape(Lightbox.imageArray[Lightbox.activeImage][0]);
          if (Lightbox.imageArray[Lightbox.activeImage][4]) {
            $(src).appendTo("#modalContainer");
            $('#modalContainer').css({'zIndex': '10500'}).show();
          }
          else {
            // Use a callback to show the new image, otherwise you get flicker.
            $("#modalContainer").hide().load(src, function () {$('#modalContainer').css({'zIndex': '10500'}).show();});
          }
          $('#modalContainer').unbind('click');
        }
        // This might be needed in the Lightframe section above.
        //$('#modalContainer').css({'zIndex': '10500'}).show();
      }
    }

    // Handle display of image content.
    else {
      $('#imageContainer').show();
      if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
        $('#lightboxImage').css({'zIndex': '10500'}).show();
      }
      else {
        $('#lightboxImage').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
      }
      Lightbox.updateDetails();
      this.preloadNeighborImages();
    }
    Lightbox.inprogress = false;

    // Slideshow specific stuff.
    if (Lightbox.isSlideshow) {
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        if (Lightbox.autoExit) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.end('slideshow');}, Lightbox.slideInterval);
        }
      }
      else {
        if (!Lightbox.isPaused && Lightbox.total > 1) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.changeData(Lightbox.activeImage + 1);}, Lightbox.slideInterval);
        }
      }
      if (Lightbox.showPlayPause && Lightbox.total > 1 && !Lightbox.isPaused) {
        $('#lightshowPause').show();
        $('#lightshowPlay').hide();
      }
      else if (Lightbox.showPlayPause && Lightbox.total > 1) {
        $('#lightshowPause').hide();
        $('#lightshowPlay').show();
      }
    }

    // Adjust the page overlay size.
    var arrayPageSize = Lightbox.getPageSize();
    var arrayPageScroll = Lightbox.getPageScroll();
    var pageHeight = arrayPageSize[1];
    if (Lightbox.isZoomedIn && arrayPageSize[1] > arrayPageSize[3]) {
      var lightboxTop = (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
      pageHeight = pageHeight + arrayPageScroll[1] + lightboxTop;
    }
    $('#lightbox2-overlay').css({'height': pageHeight + 'px', 'width': arrayPageSize[0] + 'px'});

    // Gecko browsers (e.g. Firefox, SeaMonkey, etc) don't handle pdfs as
    // expected.
    if ($.browser.mozilla) {
      if (Lightbox.imageArray[Lightbox.activeImage][0].indexOf(".pdf") != -1) {
        setTimeout(function () {
          document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
        }, 1000);
      }
    }
  },

  // updateDetails()
  // Display caption, image number, and bottom nav.
  updateDetails: function() {

    $("#imageDataContainer").hide();

    var s = Drupal.settings.lightbox2;

    if (s.show_caption) {
      var caption = Lightbox.filterXSS(Lightbox.imageArray[Lightbox.activeImage][1]);
      if (!caption) caption = '';
      $('#caption').html(caption).css({'zIndex': '10500'}).show();
    }

    // If image is part of set display 'Image x of x'.
    var numberDisplay = null;
    if (s.image_count && Lightbox.total > 1) {
      var currentImage = Lightbox.activeImage + 1;
      if (!Lightbox.isLightframe && !Lightbox.isModal && !Lightbox.isVideo) {
        numberDisplay = s.image_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else if (Lightbox.isVideo) {
        numberDisplay = s.video_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else {
        numberDisplay = s.page_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      $('#numberDisplay').html(numberDisplay).css({'zIndex': '10500'}).show();
    }
    else {
      $('#numberDisplay').hide();
    }

    $("#imageDataContainer").hide().slideDown(Lightbox.slideDownSpeed, function() {
      $("#bottomNav").show();
    });
    if (Lightbox.rtl == 1) {
      $("#bottomNav").css({'float': 'left'});
    }
    Lightbox.updateNav();
  },

  // updateNav()
  // Display appropriate previous and next hover navigation.
  updateNav: function() {

    $('#hoverNav').css({'zIndex': '10500'}).show();
    var prevLink = '#prevLink';
    var nextLink = '#nextLink';

    // Slideshow is separated as we need to show play / pause button.
    if (Lightbox.isSlideshow) {
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage !== 0) {
        $(prevLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnPrevClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage != (Lightbox.total - 1)) {
        $(nextLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnNextClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // All other types of content.
    else {

      if ((Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) && !Lightbox.alternative_layout) {
        $('#frameHoverNav').css({'zIndex': '10500'}).show();
        $('#hoverNav').css({'zIndex': '10500'}).hide();
        prevLink = '#framePrevLink';
        nextLink = '#frameNextLink';
      }

      // If not first image in set, display prev image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage !== 0) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(prevLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage != (Lightbox.total - 1)) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(nextLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // Don't enable keyboard shortcuts so forms will work.
    if (!Lightbox.isModal) {
      this.enableKeyboardNav();
    }
  },


  // enableKeyboardNav()
  enableKeyboardNav: function() {
    $(document).bind("keydown", this.keyboardAction);
  },

  // disableKeyboardNav()
  disableKeyboardNav: function() {
    $(document).unbind("keydown", this.keyboardAction);
  },

  // keyboardAction()
  keyboardAction: function(e) {
    if (e === null) { // IE.
      keycode = event.keyCode;
      escapeKey = 27;
    }
    else { // Mozilla.
      keycode = e.keyCode;
      escapeKey = e.DOM_VK_ESCAPE;
    }

    key = String.fromCharCode(keycode).toLowerCase();

    // Close lightbox.
    if (Lightbox.checkKey(Lightbox.keysClose, key, keycode)) {
      Lightbox.end('forceClose');
    }
    // Display previous image (p, <-).
    else if (Lightbox.checkKey(Lightbox.keysPrevious, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage !== 0) {
        Lightbox.changeData(Lightbox.activeImage - 1);
      }

    }
    // Display next image (n, ->).
    else if (Lightbox.checkKey(Lightbox.keysNext, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage != (Lightbox.total - 1)) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    // Zoom in.
    else if (Lightbox.checkKey(Lightbox.keysZoom, key, keycode) && !Lightbox.disableResize && !Lightbox.disableZoom && !Lightbox.isSlideshow && !Lightbox.isLightframe) {
      if (Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, false);
      }
      else if (!Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, true);
      }
      return false;
    }
    // Toggle play / pause (space).
    else if (Lightbox.checkKey(Lightbox.keysPlayPause, key, keycode) && Lightbox.isSlideshow) {

      if (Lightbox.isPaused) {
        Lightbox.togglePlayPause("lightshowPlay", "lightshowPause");
      }
      else {
        Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
      }
      return false;
    }
  },

  preloadNeighborImages: function() {

    if ((Lightbox.total - 1) > Lightbox.activeImage) {
      preloadNextImage = new Image();
      preloadNextImage.src = Lightbox.imageArray[Lightbox.activeImage + 1][0];
    }
    if (Lightbox.activeImage > 0) {
      preloadPrevImage = new Image();
      preloadPrevImage.src = Lightbox.imageArray[Lightbox.activeImage - 1][0];
    }

  },

  end: function(caller) {
    var closeClick = (caller == 'slideshow' ? false : true);
    if (Lightbox.isSlideshow && Lightbox.isPaused && !closeClick) {
      return;
    }
    // To prevent double clicks on navigation links.
    if (Lightbox.inprogress === true && caller != 'forceClose') {
      return;
    }
    Lightbox.disableKeyboardNav();
    $('#lightbox').hide();
    $("#lightbox2-overlay").fadeOut();
    Lightbox.isPaused = true;
    Lightbox.inprogress = false;
    // Replaces calls to showSelectBoxes() and showFlash() in original
    // lightbox2.
    Lightbox.toggleSelectsFlash('visible');
    if (Lightbox.isSlideshow) {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
      $('#lightshowPause, #lightshowPlay').hide();
    }
    else if (Lightbox.isLightframe) {
      $('#frameContainer').empty().hide();
    }
    else if (Lightbox.isVideo || Lightbox.isModal) {
      if (!Lightbox.auto_modal) {
        $('#modalContainer').hide().html("");
      }
      Lightbox.auto_modal = false;
    }
  },


  // getPageScroll()
  // Returns array with x,y page scroll values.
  // Core code from - quirksmode.com.
  getPageScroll : function() {

    var xScroll, yScroll;

    if (self.pageYOffset || self.pageXOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {  // Explorer 6 Strict.
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    }
    else if (document.body) {// All other Explorers.
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }

    arrayPageScroll = [xScroll,yScroll];
    return arrayPageScroll;
  },

  // getPageSize()
  // Returns array with page width, height and window width, height.
  // Core code from - quirksmode.com.
  // Edit for Firefox by pHaez.

  getPageSize : function() {

    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    }
    else if (document.body.scrollHeight > document.body.offsetHeight) { // All but Explorer Mac.
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    }
    else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari.
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;

    if (self.innerHeight) { // All except Explorer.
      if (document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      }
      else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode.
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    }
    else if (document.body) { // Other Explorers.
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }
    // For small pages with total height less than height of the viewport.
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    }
    else {
      pageHeight = yScroll;
    }
    // For small pages with total width less than width of the viewport.
    if (xScroll < windowWidth) {
      pageWidth = xScroll;
    }
    else {
      pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
    return arrayPageSize;
  },


  // pause(numberMillis)
  pause : function(ms) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < ms);
  },


  // toggleSelectsFlash()
  // Hide / unhide select lists and flash objects as they appear above the
  // lightbox in some browsers.
  toggleSelectsFlash: function (state) {
    if (state == 'visible') {
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").show();
    }
    else if (state == 'hide') {
      $("select:visible, embed:visible, object:visible").not('#lightboxAutoModal select, #lightboxAutoModal embed, #lightboxAutoModal object').addClass("lightbox_hidden");
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").hide();
    }
  },


  // parseRel()
  parseRel: function (link) {
    var parts = [];
    parts["rel"] = parts["title"] = parts["group"] = parts["style"] = parts["flashvars"] = null;
    if (!$(link).attr('rel')) return parts;
    parts["rel"] = $(link).attr('rel').match(/\w+/)[0];

    if ($(link).attr('rel').match(/\[(.*)\]/)) {
      var info = $(link).attr('rel').match(/\[(.*?)\]/)[1].split('|');
      parts["group"] = info[0];
      parts["style"] = info[1];
      if (parts["style"] != undefined && parts["style"].match(/flashvars:\s?(.*?);/)) {
        parts["flashvars"] = parts["style"].match(/flashvars:\s?(.*?);/)[1];
      }
    }
    if ($(link).attr('rel').match(/\[.*\]\[(.*)\]/)) {
      parts["title"] = $(link).attr('rel').match(/\[.*\]\[(.*)\]/)[1];
    }
    return parts;
  },

  // setStyles()
  setStyles: function(item, styles) {
    item.width = Lightbox.iframe_width;
    item.height = Lightbox.iframe_height;
    item.scrolling = "auto";

    if (!styles) return item;
    var stylesArray = styles.split(';');
    for (var i = 0; i< stylesArray.length; i++) {
      if (stylesArray[i].indexOf('width:') >= 0) {
        var w = stylesArray[i].replace('width:', '');
        item.width = jQuery.trim(w);
      }
      else if (stylesArray[i].indexOf('height:') >= 0) {
        var h = stylesArray[i].replace('height:', '');
        item.height = jQuery.trim(h);
      }
      else if (stylesArray[i].indexOf('scrolling:') >= 0) {
        var scrolling = stylesArray[i].replace('scrolling:', '');
        item.scrolling = jQuery.trim(scrolling);
      }
      else if (stylesArray[i].indexOf('overflow:') >= 0) {
        var overflow = stylesArray[i].replace('overflow:', '');
        item.overflow = jQuery.trim(overflow);
      }
    }
    return item;
  },


  // togglePlayPause()
  // Hide the pause / play button as appropriate.  If pausing the slideshow also
  // clear the timers, otherwise move onto the next image.
  togglePlayPause: function(hideId, showId) {
    if (Lightbox.isSlideshow && hideId == "lightshowPause") {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
    }
    $('#' + hideId).hide();
    $('#' + showId).show();

    if (hideId == "lightshowPlay") {
      Lightbox.isPaused = false;
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        Lightbox.end();
      }
      else if (Lightbox.total > 1) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    else {
      Lightbox.isPaused = true;
    }
  },

  triggerLightbox: function (rel_type, rel_group) {
    if (rel_type.length) {
      if (rel_group && rel_group.length) {
        $("a[rel^='" + rel_type +"\[" + rel_group + "\]'], area[rel^='" + rel_type +"\[" + rel_group + "\]']").eq(0).trigger("click");
      }
      else {
        $("a[rel^='" + rel_type +"'], area[rel^='" + rel_type +"']").eq(0).trigger("click");
      }
    }
  },

  detectMacFF2: function() {
    var ua = navigator.userAgent.toLowerCase();
    if (/firefox[\/\s](\d+\.\d+)/.test(ua)) {
      var ffversion = new Number(RegExp.$1);
      if (ffversion < 3 && ua.indexOf('mac') != -1) {
        return true;
      }
    }
    return false;
  },

  checkKey: function(keys, key, code) {
    return (jQuery.inArray(key, keys) != -1 || jQuery.inArray(String(code), keys) != -1);
  },

  filterXSS: function(str, allowed_tags) {
    var output = "";
    $.ajax({
      url: Drupal.settings.basePath + 'system/lightbox2/filter-xss',
      data: {
        'string' : str,
        'allowed_tags' : allowed_tags
      },
      type: "POST",
      async: false,
      dataType:  "json",
      success: function(data) {
        output = data;
      }
    });
    return output;
  }

};

// Initialize the lightbox.
Drupal.behaviors.initLightbox = function (context) {
  $('body:not(.lightbox-processed)', context).addClass('lightbox-processed').each(function() {
    Lightbox.initialize();
    return false; // Break the each loop.
  });

  // Attach lightbox to any links with lightbox rels.
  Lightbox.initList(context);
  $('#lightboxAutoModal', context).triggerHandler('click');
};

;
// $Id: mollom.js,v 1.2.2.13 2010/08/07 02:49:44 dries Exp $
(function ($) {

/**
 * Open Mollom privacy policy link in a new window.
 *
 * Required for valid XHTML Strict markup.
 */
Drupal.behaviors.mollomPrivacy = function (context) {
  $('.mollom-privacy a', context).click(function () {
    this.target = '_blank';
  });
};

/**
 * Attach click event handlers for CAPTCHA links.
 */
Drupal.behaviors.mollomCaptcha = function (context) {
  $('a.mollom-switch-captcha', context).click(getMollomCaptcha);
};

/**
 * Fetch a Mollom CAPTCHA and output the image or audio into the form.
 */
function getMollomCaptcha() {
  // Get the current requested CAPTCHA type from the clicked link.
  var newCaptchaType = $(this).hasClass('mollom-audio-captcha') ? 'audio' : 'image';

  var context = $(this).parents('form');

  // Extract the Mollom session id from the form.
  var mollomSessionId = $('input.mollom-session-id', context).val();

  // Retrieve a CAPTCHA:
  $.getJSON(Drupal.settings.basePath + 'mollom/captcha/' + newCaptchaType + '/' + mollomSessionId,
    function (data) {
      if (!(data && data.content)) {
        return;
      }
      // Inject new CAPTCHA.
      $('.mollom-captcha-content', context).parent().html(data.content);
      // Update session id.
      $('input.mollom-session-id', context).val(data.session_id);
      // Add an onclick-event handler for the new link.
      Drupal.attachBehaviors(context);
      // Focus on the CATPCHA input.
      $('input[name="mollom[captcha]"]', context).focus();
    }
  );
  return false;
}

})(jQuery);
;
// $Id: nice_menus.js,v 1.10.2.6 2008/08/04 23:45:51 add1sun Exp $

// We need to do some browser sniffing to weed out IE 6 only
// because only IE6 needs this hover hack.
if (document.all && !window.opera && (navigator.appVersion.search("MSIE 6.0") != -1) && $.browser.msie) {
  function IEHoverPseudo() {
      $("ul.nice-menu li.menuparent").hover(function(){
          $(this).addClass("over").find("> ul").show().addShim();
        },function(){
          $(this).removeClass("over").find("> ul").removeShim().hide();
        }
      );
      // Add a hover class to all li for CSS styling. Silly naming is done
      // so we don't break CSS compatibility for .over class already in use
      // and due to the fact that IE6 doesn't understand multiple selectors.
      $("ul.nice-menu li").hover(function(){
          $(this).addClass("ie-over");
        },function(){
          $(this).removeClass("ie-over");
        }
      );
    }

    // This is the jquery method of adding a function
    // to the BODY onload event.  (See jquery.com)
    $(document).ready(function(){ IEHoverPseudo() });
}

$.fn.addShim = function() {
  return this.each(function(){
	  if(document.all && $("select").size() > 0) {
	    var ifShim = document.createElement('iframe');
	    ifShim.src = "javascript:false";
			ifShim.style.width=$(this).width()+1+"px";
      ifShim.style.height=$(this).find("> li").size()*23+20+"px";
			ifShim.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
		  ifShim.style.zIndex="0";
    $(this).prepend(ifShim);
      $(this).css("zIndex","99");
		}
	});
};

$.fn.removeShim = function() {
  return this.each(function(){
	  if (document.all) $("iframe", this).remove();
	});
};
;
/* $Id$ */

Drupal.behaviors.toolbar = function (context) {

  // integration with admin_menu module
  if ( Drupal.behaviors.adminMenu ) {
    var adminMenuHeight = 21;
    if ( Drupal.settings.admin_menu.toolbar ) {
      adminMenuHeight += 9;
    }
    $('div#toolbar-toolbar').css('top', adminMenuHeight + 'px');

    // check if admin_menu position fixed is true
    if ( !Drupal.settings.admin_menu.position_fixed ) {
      // admin_menu is not fixed
      $(window).scroll(function() {

        // get window scroll position
        var top = $(window).scrollTop();

        // if window scroll position is less then adminMenuHeight then add adminMenuHeight to toolbars top position
        // otherwize set toolbar at top (admin_menu is not visible)
        if ( top <= adminMenuHeight) {
          $('div#toolbar-toolbar').css('top', adminMenuHeight + 'px');
        } else {
          $('div#toolbar-toolbar').css('top', '0px');
        }
      });
    }
  }

  $("div#toolbar-help").hide();

  $("span.trigger").toggle(function(){
    $(this).addClass("active");
    $(this).removeClass("hidden");
  }, function () {
    $(this).removeClass("active");
  });

  $('span.trigger').click(function(){
      $('div#toolbar-help').slideToggle('fast');
  });

  $("span.help-close").click(function() {
    $("div#toolbar-help").slideToggle("fast");
  });
}

Drupal.behaviors.toolbarMarginTop = function (context) {
  $('body:not(.toolbar)', context).addClass('toolbar');
};
;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.86 (05-APR-2010)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){var ver="2.86";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(opts2.currSlide,opts2.nextSlide,opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts2.rev);},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,1);}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.rev);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(curr,next,opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn(curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);;
// $Id: views_slideshow.js,v 1.1.2.1.2.34 2010/05/18 05:16:07 redndahead Exp $

/**
 *  @file
 *  A simple jQuery SingleFrame Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowSingleFrame = function (context) {
  $('.views_slideshow_singleframe_main:not(.viewsSlideshowSingleFrame-processed)', context).addClass('viewsSlideshowSingleFrame-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowSingleFrame[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
    settings.paused = false;

    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_hover==1 || settings.pager_click_to_page),
      prev:(settings.controls > 0)?'#views_slideshow_singleframe_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_singleframe_next_' + settings.vss_id:null,
      pager:(settings.pager > 0)?'#views_slideshow_singleframe_pager_' + settings.vss_id:null,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder: function(idx, slide) {
        var classes = 'pager-item pager-num-' + (idx+1);
        if (idx == 0) {
          classes += ' first';
        }
        if ($(slide).siblings().length == idx) {
          classes += ' last';
        }

        if (idx % 2) {
          classes += ' odd';
        }
        else {
          classes += ' even';
        }
        
        var theme = 'viewsSlideshowPager' + settings.pager_type;
        return Drupal.theme.prototype[theme] ? Drupal.theme(theme, classes, idx, slide, settings) : '';
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(curr, next, opts) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.vss_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
      },
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    }
    
    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.vss_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.pager_hover == 1) {
      settings.opts.pagerEvent = 'mouseover';
      settings.opts.pauseOnPagerHover = true;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowPause(settings);
      });
    }

    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }
    
    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_pause) {
      viewsSlideshowSingleFramePause(settings);
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_singleframe_image_count_' + settings.vss_id).show();

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_singleframe_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_singleframe_playpause_' + settings.vss_id).click(function(e) {
      	if (settings.paused) {
      	  viewsSlideshowSingleFrameResume(settings);
      	}
      	else {
      	  viewsSlideshowSingleFramePause(settings);
      	}
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowSingleFramePause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_singleframe_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowSingleFrameResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_singleframe_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

Drupal.theme.prototype.viewsSlideshowPagerThumbnails = function (classes, idx, slide, settings) {
  var href = '#';
  if (settings.pager_click_to_page) {
    href = $(slide).find('a').attr('href');
  }
  return '<div class="' + classes + '"><a href="' + href + '"><img src="' + $(slide).find('img').attr('src') + '" /></a></div>';
}

Drupal.theme.prototype.viewsSlideshowPagerNumbered = function (classes, idx, slide) {
  return '<div class="' + classes + '"><a href="#">' + (idx+1) + '</a></div>';
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
;
// $Id: views_slideshow.js,v 1.1.2.2.2.31 2010/05/18 05:16:07 redndahead Exp $

/**
 * @file
 * A simple jQuery ThumbnailHover Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowThumbnailHover = function (context) {
  $('.views_slideshow_thumbnailhover_main:not(.viewsSlideshowThumbnailHover-processed)', context).addClass('viewsSlideshowThumbnailHover-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowThumbnailHover[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
		settings.paused = false;
		
    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_event=='click')? false : true,
      pager:(settings.pager_event == 'hoverIntent') ? null : '#views_slideshow_breakout_teasers_' + settings.vss_id,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder:(settings.pager_event == 'hoverIntent') ? null : function(idx, slide) { 
        return '#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + idx; 
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(current, next) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.view_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
        
        var currId = (currId=$(current).attr('id')).substring(currId.lastIndexOf('_')+1)
        var nextId = (nextId=$(next).attr('id')).substring(nextId.lastIndexOf('_')+1)
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + currId).removeClass('activeSlide');
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + nextId).addClass('activeSlide');
      },
      pagerEvent: (settings.pager_event == 'hoverIntent') ? null : settings.pager_event,
      prev:(settings.controls > 0)?'#views_slideshow_thumbnailhover_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_thumbnailhover_next_' + settings.vss_id:null,
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    };

    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.view_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowThumbnailHoverPause(settings);
      });
    }
    
    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }

    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_pause) {
      viewsSlideshowThumbnailHoverPause(settings);
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id).show();
    
    if (settings.pager_event == 'hoverIntent') {
      $('#views_slideshow_thumbnailhover_breakout_teasers_' + settings.vss_id + ' .views_slideshow_thumbnailhover_div_breakout_teaser').each(function(i,obj) {
        $(obj).hoverIntent(
          function() {
            $('.views_slideshow_thumbnailhover_div_breakout_teaser').removeClass('activeSlide');
            var id = $(this).attr('id');
            id = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(id);
            $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + id).addClass('activeSlide');
            $(settings.targetId).cycle('stop');
          },
          function() {
            var id = $(this).attr('id');
            settings.opts.startingSlide = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(settings.opts);
          }
        );
      });
    }

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_thumbnailhover_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id).click(function(e) {
        if (settings.paused) {
          viewsSlideshowThumbnailHoverResume(settings);
        }
        else {
          viewsSlideshowThumbnailHoverPause(settings);
        }
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowThumbnailHoverPause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_thumbnailhover_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowThumbnailHoverResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_thumbnailhover_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;
// $Id: jquery.drilldown.js,v 1.1.2.5 2010/02/04 00:34:32 yhahn Exp $

/**
 * Generic menu drilldown plugin for standard Drupal menu tree markup.
 * The plugin should be inited against a DOM element that *contains*
 * a Drupal ul.menu tree. Example:
 * 
 *   $('div.block-menu').drilldown('init', params);
 * 
 * You must provide the following parameters as settings:
 * 
 *   var params = {
 *     activePath : A drupal menu path that is currently active including the basePath e.g. "/mysite/node"
 *     trail : A jquery selector to the DOM element that should act as the trail container, e.g. "div.my-menu-breadcrumb-trail"
 *   }
 *
 */
(function($) {
  $.fn.drilldown = function(method, settings) {
    var menu = this;
    var activePath;

    switch (method) {
      case 'goTo':
        // If the passed link refers to the current page, don't follow through
        // the link.
        if (this.activePath && this.activePath === $(settings.activeLink).attr('href')) {
          return false;
        }
        return true;
      case 'setActive':
        var breadcrumb = [];
        var activeMenu;

        $(settings.activeLink).each(function() {
          // Traverse backwards through menu parents and build breadcrumb array.
          $(this).parents('ul.menu').each(function() {
            $(this).siblings('a').each(function() {
              breadcrumb.unshift($(this));
            });
          });

          // If we have a child menu (actually a sibling in the DOM), use it
          // as the active menu. Otherwise treat our direct parent as the
          // active menu.
          if ($(this).next().is('ul.menu')) {
            activeMenu = $(this).next();
            breadcrumb.push($(this));
          }
          else {
            activeMenu = $(this).parents('ul.menu');
          }
          if (activeMenu) {
            $('.drilldown-active-trail', menu).removeClass('drilldown-active-trail');
            $('ul.menu', menu).removeClass('drilldown-active-menu').removeClass('clear-block');
            $(activeMenu[0]).parents('li').addClass('drilldown-active-trail');
            $(activeMenu[0]).addClass('drilldown-active-menu').addClass('clear-block').parents('li').show();
          }
        });

        // Render the breadcrumb to the target DOM object
        if (breadcrumb.length > 0) {
          var trail = $(settings.trail);
          trail.empty();
          for (var key in breadcrumb) {
            if (breadcrumb[key]) {
              // We don't use the $().clone() method here because of an
              // IE & jQuery 1.2 bug.
              // var clone = $(breadcrumb[key]).clone();
              var clone = $(breadcrumb[key]).get(0).cloneNode(true);
              $(clone)
                .unbind('click')
                .addClass('depth-'+key)
                .appendTo(trail);

              // We add a reference to the original link and a click handler
              // that traces back to that instance to set as the active link.
              $('a.depth-'+key, trail)
                .data('original', $(breadcrumb[key]))
                .click(function() {
                  settings.activeLink = $(this).data('original');
                  // If the clicked link does not reference the current
                  // active menu, set it to be active.
                  if (settings.activeLink.siblings('ul.drilldown-active-menu').size() === 0) {
                    menu.drilldown('setActive', settings);
                    return false;
                  }
                  // Otherwise, pass-through and allow the link to be clicked.
                  return menu.drilldown('goTo', settings);
                });
            }
          }
        }

        // Event in case others need to update themselves when a new active
        // link is set.
        $(menu).trigger('refresh.drilldown');
        break;
      case 'init':
        $(menu).addClass('drilldown');
        $(settings.trail).addClass('drilldown-trail');

        // Set initial active menu state.
        var activeLink;
        if (settings.activePath && $('ul.menu a[href='+settings.activePath+']', menu).size() > 0) {
          this.activePath = settings.activePath;
          activeLink = $('ul.menu a[href='+settings.activePath+']', menu).addClass('active');
        }
        if (!activeLink) {
          activeLink = $('ul.menu a.active', menu).size() ? $('ul.menu a.active', menu) : $('ul.menu > li > a', menu);
        }
        if (activeLink) {
          menu.drilldown('setActive', {'activeLink': $(activeLink[0]), 'trail': settings.trail});
        }

        // Attach click handlers to menu items
        $('ul.menu li:has(ul.menu)', this).click(function() {
          if ($(this).parent().is('.drilldown-active-menu')) {
            if (menu.data('disableMenu')) {
              return true;
            }
            else {
              var url = $(this).children('a').attr('href');
              var activeLink = $('ul.menu a[href='+url+']', menu);
              menu.drilldown('setActive', {'activeLink': activeLink, 'trail': settings.trail});
              return false;
            }
          }
        });
        $('ul.menu li:has(ul.menu) a', menu).click(function() {
          menu.data('disableMenu', true);
        });
        break;
    }
    return this;
  };
})(jQuery);
;
// $Id: admin.toolbar.js,v 1.1.2.6 2010/04/16 19:34:39 yhahn Exp $

Drupal.behaviors.adminToolbar = function(context) {
  $('#admin-toolbar:not(.processed)').each(function() {
    var toolbar = $(this);
    toolbar.addClass('processed');

    // Set initial toolbar state.
    Drupal.adminToolbar.init(toolbar);

    // Admin toggle.
    $('.admin-toggle', this).click(function() { Drupal.adminToolbar.toggle(toolbar); });

    // Admin tabs.
    $('div.admin-tab', this).click(function() { Drupal.adminToolbar.tab(toolbar, $(this), true); });
  });
  $('div.admin-panes:not(.processed)').each(function() {
    var panes = $(this);
    panes.addClass('processed');

    $('h2.admin-pane-title a').click(function() {
      var target = $(this).attr('href').split('#')[1];
      var panes = $(this).parents('div.admin-panes')[0];
      $('.admin-pane-active', panes).removeClass('admin-pane-active');
      $('div.admin-pane.' + target, panes).addClass('admin-pane-active');
      $(this).addClass('admin-pane-active');
      return false;
    });
  });
};

/**
 * Admin toolbar methods.
 */
Drupal.adminToolbar = {};

/**
 * Set the initial state of the toolbar.
 */
Drupal.adminToolbar.init = function (toolbar) {
  // Set expanded state.
  var expanded = this.getState('expanded');
  if (expanded == 1) {
    $(document.body).addClass('admin-expanded');
  }

  // Set default tab state.
  var target = this.getState('activeTab');
  if (target) {
    if ($('div.admin-tab.'+target).size() > 0) {
      var tab = $('div.admin-tab.'+target);
      this.tab(toolbar, tab, false);
    }
  }

  // Add layout class to body.
  var classes = toolbar.attr('class').split(' ');
  if (classes[0] === 'nw' || classes[0] === 'ne' || classes[0] === 'se' || classes[0] === 'sw' ) {
    $(document.body).addClass('admin-'+classes[0]);
  }
  if (classes[1] === 'horizontal' || classes[1] === 'vertical') {
    $(document.body).addClass('admin-'+classes[1]);
  }
};

/**
 * Set the active tab.
 */
Drupal.adminToolbar.tab = function(toolbar, tab, animate) {
  if (!tab.is('.admin-tab-active')) {
    var target = $('span', tab).attr('id').split('admin-tab-')[1];

    // Vertical
    // Use animations to make the vertical tab transition a bit smoother.
    if (toolbar.is('.vertical') && animate) {
      $('.admin-tab-active', toolbar).fadeOut('fast');
      $(tab).fadeOut('fast', function() {
        $('.admin-tab-active', toolbar).fadeIn('fast').removeClass('admin-tab-active');
        $(tab).slideDown('fast').addClass('admin-tab-active');
        Drupal.adminToolbar.setState('activeTab', target);
      });
    }
    // Horizontal
    // Tabs don't need animation assistance.
    else {
      $('div.admin-tab', toolbar).removeClass('admin-tab-active');
      $(tab, toolbar).addClass('admin-tab-active');
      Drupal.adminToolbar.setState('activeTab', target);
    }

    // Blocks
    $('div.admin-block.admin-active', toolbar).removeClass('admin-active');
    $('#block-'+target, toolbar).addClass('admin-active');
  }
  return false;
};

/**
 * Toggle the toolbar open or closed.
 */
Drupal.adminToolbar.toggle = function (toolbar) {
  if ($(document.body).is('.admin-expanded')) {
    if ($(toolbar).is('.vertical')) {
      $('div.admin-blocks', toolbar).animate({width:'0px'}, 'fast', function() { $(this).css('display', 'none'); });
      if ($(toolbar).is('.nw') || $(toolbar).is('sw')) {
        $(document.body).animate({marginLeft:'0px'}, 'fast', function() { $(this).toggleClass('admin-expanded'); });
      }
      else {
        $(document.body).animate({marginRight:'0px'}, 'fast', function() { $(this).toggleClass('admin-expanded'); });
      }
    }
    else {
      $('div.admin-blocks', toolbar).slideUp('fast', function() { $(document.body).toggleClass('admin-expanded'); });
    }
    this.setState('expanded', 0);
  }
  else {
    if ($(toolbar).is('.vertical')) {
      $('div.admin-blocks', toolbar).animate({width:'260px'}, 'fast');
      if ($(toolbar).is('.nw') || $(toolbar).is('sw')) {
        $(document.body).animate({marginLeft:'260px'}, 'fast', function() { $(this).toggleClass('admin-expanded'); });
      }
      else {
        $(document.body).animate({marginRight:'260px'}, 'fast', function() { $(this).toggleClass('admin-expanded'); });
      }
    }
    else {
      $('div.admin-blocks', toolbar).slideDown('fast', function() { $(document.body).toggleClass('admin-expanded'); });
    }
    this.setState('expanded', 1);
  }
};

/**
 * Get the value of a cookie variable.
 */
Drupal.adminToolbar.getState = function(key) {
  if (!Drupal.adminToolbar.state) {
    Drupal.adminToolbar.state = {};
    var cookie = $.cookie('DrupalAdminToolbar');
    var query = cookie ? cookie.split('&') : [];
    if (query) {
      for (var i in query) {
        var values = query[i].split('=');
        if (values.length === 2) {
          Drupal.adminToolbar.state[values[0]] = values[1];
        }
      }
    }
  }
  return Drupal.adminToolbar.state[key] ? Drupal.adminToolbar.state[key] : false;
};

/**
 * Set the value of a cookie variable.
 */
Drupal.adminToolbar.setState = function(key, value) {
  var existing = Drupal.adminToolbar.getState(key);
  if (existing != value) {
    Drupal.adminToolbar.state[key] = value;
    var query = [];
    for (var i in Drupal.adminToolbar.state) {
      query.push(i + '=' + Drupal.adminToolbar.state[i]);
    }
    $.cookie('DrupalAdminToolbar', query.join('&'), {expires: 7, path: '/'});
  }
};
;
// $Id: admin.menu.js,v 1.1.2.7 2010/04/25 17:17:11 yhahn Exp $

Drupal.behaviors.adminToolbarMenu = function(context) {
  if (jQuery().drilldown) {
    $('#admin-toolbar div.admin-block:has(ul.menu):not(.admin-toolbar-menu)')
      .addClass('admin-toolbar-menu')
      .each(function() {
        var menu = $(this);
        var trail = '#admin-toolbar div.admin-tab.' + $(this).attr('id').split('block-')[1] + ' span';

        // Replace the standard trail click handler with one that only
        // adjusts menu if the admin tab is active. Otherwise, switch
        // to that admin tab.
        menu.bind('refresh.drilldown', function() {
          $(trail + ' a').unbind('click').click(function() {
            if ($(this).parents('div.admin-tab').is('.admin-tab-active')) {
              var settings = {'activeLink': $(this).data('original'), 'trail': trail};

              // If the clicked link does not reference the current
              // active menu, set it to be active.
              if (settings.activeLink.siblings('ul.drilldown-active-menu').size() === 0) {
                menu.drilldown('setActive', settings);
                return false;
              }
              // Otherwise, pass-through and allow the link to be clicked.
              return menu.drilldown('goTo', settings);
            }
            $(this).parents('div.admin-tab').click();
            return false;
          });
        });

        // Init drilldown plugin.
        menu.drilldown('init', {'activePath': Drupal.settings.activePath, 'trail': trail});
      });
  }
};
;
// $Id: admin.devel.js,v 1.1.2.1 2009/11/20 02:44:32 yhahn Exp $

Drupal.behaviors.adminDevel = function(context) {
  $('#block-admin-devel:not(.admin-processed)').each(function() {
    var devel = $(this);
    devel.addClass('admin-processed');

    // Pull logged values from footer output into the block.
    $('li', devel).each(function() {
      var key = $(this).attr('class').split(' ')[0];
      if (key && $('body > .'+key).size() > 0) {
        var value = $('body > .'+key).html();
        $('div.dev-info', this).html(value);
      }
    });

    // Query list show handler.
    $('input.dev-querylog-show', devel).click(function() {
      $(this).hide().siblings('input.dev-querylog-hide').show();
      $('body > *:not(#admin-toolbar, .devel-querylog)').addClass('devel-hide');
      $('body > .devel-querylog').show();
      return false;
    });

    // Query list hide handler.
    $('input.dev-querylog-hide').click(function() {
      $(this).hide().siblings('input.dev-querylog-show').show();
      $('body > *:not(#admin-toolbar, .devel-querylog)').removeClass('devel-hide');
      $('body > .devel-querylog').hide();
      return false;
    });
  });
};
;
// $Id: autocomplete.js,v 1.23 2008/01/04 11:53:21 goba Exp $

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;
// $Id: textarea.js,v 1.22 2008/01/17 19:31:56 goba Exp $

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());;
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * � 2005 Microsoft Corporation. All Rights Reserved.
 * 
 * Trademark:
 * Calibri is either a registered trademark or a trademark of Microsoft
 * Corporation in the United States and/or other countries.
 * 
 * Description:
 * Calibri is a modern sans serif family with subtle roundings on stems and
 * corners. It features real italics, small caps, and multiple numeral sets. Its
 * proportions allow high impact in tightly set lines of big and small text alike.
 * Calibri's many curves and the new rasteriser team up in bigger sizes to reveal a
 * warm and soft character.
 * 
 * Manufacturer:
 * Microsoft Corporation
 * 
 * Designer:
 * Luc(as) de Groot
 * 
 * Vendor URL:
 * http://www.microsoft.com/typography/ctfonts
 * 
 * License information:
 * http://www.microsoft.com/typography/fonts/default.aspx
 */
Cufon.registerFont({"w":189,"face":{"font-family":"Calibri","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 15 5 2 2 2 4 3 2 4","ascent":"270","descent":"-90","x-height":"3","bbox":"-146 -342.553 437.219 68.75","underline-thickness":"23.5547","underline-position":"-29.0039","unicode-range":"U+0020-U+FB04"},"glyphs":{" ":{"w":81},"\u00a0":{"w":81},"A":{"d":"84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c0":{"d":"46,-291v1,-10,31,-8,34,1v11,14,25,26,35,41v1,5,-9,3,-16,4v-23,-10,-36,-30,-53,-46xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c1":{"d":"116,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c2":{"d":"106,-279v-14,12,-30,45,-58,30v19,-17,38,-61,75,-43r39,43v-26,15,-45,-18,-56,-30xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c3":{"d":"131,-268v17,3,6,-24,24,-20v7,1,9,1,10,7v0,22,-13,36,-35,36v-22,0,-30,-18,-50,-20v-18,-3,-4,22,-24,20v-7,-1,-9,-1,-10,-7v-1,-24,13,-36,35,-36v22,0,30,18,50,20xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c4":{"d":"69,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-14,0,-17,-2,-17,-16v0,-15,2,-17,17,-17xm141,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0100":{"d":"153,-279v9,1,7,21,0,23v-32,-2,-72,3,-100,-3v1,-7,-5,-20,4,-20r96,0xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0102":{"d":"140,-297v7,0,10,0,11,5v-1,29,-16,47,-46,47v-30,0,-45,-18,-46,-47v0,-5,22,-9,22,-1v2,14,8,27,24,27v15,0,24,-11,24,-25v1,-7,2,-6,11,-6xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c5":{"d":"106,-305v21,0,36,12,35,32v-1,22,-15,33,-37,34v-22,0,-35,-11,-35,-32v0,-22,15,-33,37,-34xm105,-255v10,0,16,-7,16,-17v0,-11,-5,-17,-16,-17v-10,-1,-17,6,-16,16v0,11,5,18,16,18xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u01fa":{"d":"139,-338v-17,13,-37,43,-63,33v15,-15,33,-50,63,-33xm102,-295v20,0,33,8,33,28v0,20,-14,30,-34,30v-21,0,-34,-8,-34,-28v0,-20,14,-30,35,-30xm85,-266v0,17,26,20,31,6v3,-11,-3,-21,-15,-21v-10,0,-16,6,-16,15xm84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0104":{"d":"172,27v-8,33,45,-4,33,31v-34,24,-91,-14,-48,-49r13,-13r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0r78,-217v5,-10,36,-10,40,0r76,216v-5,14,-21,22,-28,33xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-3,"?":12,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"v":7,"\u0163":9,"\u0165":9,"t":9,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"\u1e84":14,"\u0174":14,"\u1e82":14,"\u1e80":14,"W":14,"V":16,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":28,"\u0164":28,"T":28,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-4,"J":-4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u00c6":{"d":"250,-25v8,1,8,25,0,25r-110,0v-19,-2,-8,-37,-11,-56r-78,0v-11,18,-18,40,-32,56v-12,0,-35,5,-26,-11r121,-215r137,-1v4,4,6,25,-3,25r-89,0r0,71v26,2,59,-3,81,3v2,7,4,22,-4,22r-77,0r0,81r91,0xm129,-80r-1,-122r-66,122r67,0","w":274,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u01fc":{"d":"209,-291v-20,15,-36,54,-69,42v17,-17,24,-45,56,-48v7,0,14,1,13,6xm250,-25v8,1,8,25,0,25r-110,0v-19,-2,-8,-37,-11,-56r-78,0v-11,18,-18,40,-32,56v-12,0,-35,5,-26,-11r121,-215r137,-1v4,4,6,25,-3,25r-89,0r0,71v26,2,59,-3,81,3v2,7,4,22,-4,22r-77,0r0,81r91,0xm129,-80r-1,-122r-66,122r67,0","w":274,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"B":{"d":"136,-122v75,25,45,132,-35,122v-24,-3,-66,12,-71,-12r0,-203v2,-23,42,-8,63,-12v73,-14,96,81,43,105xm60,-129v41,3,75,-1,75,-38v0,-37,-36,-37,-75,-36r0,74xm60,-25v43,1,88,5,88,-38v0,-45,-43,-43,-88,-42r0,80","w":195,"k":{"\u201c":5,"\u2018":5,",":5,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"x":3,"v":4,"\u0163":4,"\u0165":4,"t":4,"f":4,"\u017b":4,"\u017d":4,"\u0179":4,"Z":4,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":8,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":8,"\u0164":8,"T":8,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"C":{"d":"118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"\u0106":{"d":"119,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"\u0108":{"d":"113,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-26,15,-45,-18,-56,-30xm118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"\u010c":{"d":"112,-263v15,-12,30,-45,59,-30v-19,17,-38,61,-75,43r-40,-43v26,-16,44,18,56,30xm118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"\u010a":{"d":"115,-286v13,1,18,4,18,17v0,14,-4,17,-18,17v-14,0,-17,-2,-17,-16v-1,-13,4,-19,17,-18xm118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"\u00c7":{"d":"178,-46v18,31,-25,48,-53,48v17,23,16,65,-23,62v-17,3,-40,-8,-25,-22v20,2,44,0,30,-22r-8,-18v-54,-8,-82,-49,-82,-113v1,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,86,68,88v28,1,42,-14,60,-22","w":191,"k":{"\u201d":-16,"\u201c":-2,"\u2019":-16,"\u2018":-2,",":2,"\u0162":-2,"\u0164":-2,"T":-2,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":-2,"J":-2,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c6":-4}},"D":{"d":"41,-227v99,-8,164,17,164,110v0,97,-61,126,-164,117v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12xm60,-25v75,7,113,-20,113,-91v0,-67,-39,-93,-113,-86r0,177","w":221,"k":{"\u201d":-1,"\u201c":3,"\u2019":-1,"\u2018":3,".":8,",":10,"\u017b":4,"\u017d":4,"\u0179":4,"Z":4,"\u0178":7,"\u0176":7,"\u00dd":7,"\u1ef2":7,"Y":7,"X":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":4,"\u0162":4,"\u0164":4,"T":4,"\u0134":4,"J":4,"\u00c6":5,"\u0104":5,"\u01fa":5,"\u00c5":5,"\u0102":5,"\u0100":5,"\u00c4":5,"\u00c3":5,"\u00c2":5,"\u00c1":5,"\u00c0":5,"A":5}},"\u010e":{"d":"106,-263v14,-12,30,-45,58,-30v-19,17,-38,61,-75,43r-39,-43v25,-16,45,18,56,30xm41,-227v99,-8,164,17,164,110v0,97,-61,126,-164,117v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12xm60,-25v75,7,113,-20,113,-91v0,-67,-39,-93,-113,-86r0,177","w":221,"k":{"\u201d":-1,"\u201c":3,"\u2019":-1,"\u2018":3,".":8,",":10,"\u017b":4,"\u017d":4,"\u0179":4,"Z":4,"\u0178":7,"\u0176":7,"\u00dd":7,"\u1ef2":7,"Y":7,"X":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":4,"\u0162":4,"\u0164":4,"T":4,"\u0134":4,"J":4,"\u00c6":5,"\u0104":5,"\u01fa":5,"\u00c5":5,"\u0102":5,"\u0100":5,"\u00c4":5,"\u00c3":5,"\u00c2":5,"\u00c1":5,"\u00c0":5,"A":5}},"\u0110":{"d":"45,-227v99,0,163,18,163,110v0,96,-61,126,-163,117v-7,0,-11,-4,-11,-12r0,-94v-18,6,-42,-7,-23,-25r23,0r0,-84v0,-9,3,-12,11,-12xm64,-25v75,7,112,-20,112,-91v0,-67,-38,-93,-112,-86r0,71v20,-2,64,-4,41,25r-41,0r0,81","w":224,"k":{"\u201d":-1,"\u201c":3,"\u2019":-1,"\u2018":3,".":8,",":10,"\u017b":4,"\u017d":4,"\u0179":4,"Z":4,"\u0178":7,"\u0176":7,"\u00dd":7,"\u1ef2":7,"Y":7,"X":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":4,"\u0162":4,"\u0164":4,"T":4,"\u0134":4,"J":4,"\u00c6":5,"\u0104":5,"\u01fa":5,"\u00c5":5,"\u0102":5,"\u0100":5,"\u00c4":5,"\u00c3":5,"\u00c2":5,"\u00c1":5,"\u00c0":5,"A":5}},"\u00d0":{"d":"45,-227v99,0,163,18,163,110v0,96,-61,126,-163,117v-7,0,-11,-4,-11,-12r0,-94v-18,6,-42,-7,-23,-25r23,0r0,-84v0,-9,3,-12,11,-12xm64,-25v75,7,112,-20,112,-91v0,-67,-38,-93,-112,-86r0,71v20,-2,64,-4,41,25r-41,0r0,81","w":224,"k":{"\u201d":-1,"\u201c":3,"\u2019":-1,"\u2018":3,".":8,",":10,"\u017b":4,"\u017d":4,"\u0179":4,"Z":4,"\u0178":7,"\u0176":7,"\u00dd":7,"\u1ef2":7,"Y":7,"X":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":4,"\u0162":4,"\u0164":4,"T":4,"\u0134":4,"J":4,"\u00c6":5,"\u0104":5,"\u01fa":5,"\u00c5":5,"\u0102":5,"\u0100":5,"\u00c4":5,"\u00c3":5,"\u00c2":5,"\u00c1":5,"\u00c0":5,"A":5}},"E":{"d":"151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00c8":{"d":"35,-291v33,-21,54,25,70,42v-33,13,-49,-29,-70,-42xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00c9":{"d":"107,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00ca":{"d":"94,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-27,15,-44,-18,-56,-30xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u011a":{"d":"92,-263v14,-12,29,-45,58,-30v-19,17,-38,61,-75,43v-13,-15,-28,-26,-39,-43v25,-16,45,18,56,30xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00cb":{"d":"58,-285v14,0,17,3,17,16v0,14,-3,17,-18,17v-14,0,-15,-3,-16,-16v0,-15,2,-17,17,-17xm130,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u0112":{"d":"142,-279v9,0,7,23,0,23v-33,-2,-72,3,-101,-3v1,-7,-5,-20,5,-20r96,0xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u0114":{"d":"127,-297v7,0,10,0,11,5v-1,30,-17,47,-47,47v-29,0,-44,-18,-45,-47v0,-5,22,-9,22,-1v0,15,9,27,24,27v14,0,23,-11,24,-25v1,-7,2,-6,11,-6xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u0116":{"d":"94,-286v13,1,18,4,18,17v0,14,-4,17,-18,17v-14,0,-17,-2,-17,-16v-1,-13,4,-19,17,-18xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u0118":{"d":"134,20v-9,7,-11,24,6,22v14,-3,31,1,21,18v-28,10,-76,1,-60,-35v3,-8,14,-18,21,-25r-81,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r79,1v5,3,6,23,-2,23r-77,0r0,82r91,0v17,16,-7,37,-17,45","w":175,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"F":{"d":"144,-227v8,1,8,24,0,25r-84,0r0,78r82,0v5,3,6,25,-3,25r-79,0r0,97v-4,5,-30,6,-30,-3r0,-210v0,-8,4,-12,11,-12r103,0","w":165,"k":{"\/":11,"\u201d":-1,"\u2019":-1,".":34,",":36,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":4,"\u0153":5,"\u01ff":5,"\u00f8":5,"\u0151":5,"\u014f":5,"\u014d":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"o":5,"\u0135":-3,"\u012d":-3,"\u012b":-6,"\u00ef":-4,"\u0129":-14,"\u00ee":-3,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":10,"\u01fb":10,"\u00e5":10,"\u0103":10,"\u0101":10,"\u00e4":10,"\u00e3":10,"\u00e2":10,"\u00e1":10,"\u00e0":10,"a":10,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"X":4,"\u0218":5,"\u015e":5,"\u0160":5,"\u015c":5,"\u015a":5,"S":5,"Q":3,"\u0152":3,"\u0150":3,"\u014e":3,"\u014c":3,"\u00d6":3,"\u00d5":3,"\u00d4":3,"\u00d3":3,"\u00d2":3,"O":3,"\u0134":19,"J":19,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3,"\u00c6":17,"\u0104":20,"\u01fa":20,"\u00c5":20,"\u0102":20,"\u0100":20,"\u00c4":20,"\u00c3":20,"\u00c2":20,"\u00c1":20,"\u00c0":20,"A":20}},"G":{"d":"129,-231v33,0,87,12,67,48v-18,-10,-39,-22,-68,-22v-53,0,-78,37,-80,91v-3,71,61,109,122,81r0,-67r-52,0v-8,1,-8,-20,-3,-24r79,0v16,18,3,68,7,99v-8,24,-43,28,-73,28v-73,0,-112,-43,-112,-115v0,-74,41,-119,113,-119","w":227,"k":{"\u00ff":5,"\u0177":5,"\u00fd":5,"\u1ef3":5,"y":5,"x":2,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":5,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u00c6":2}},"\u011c":{"d":"122,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-27,15,-44,-18,-56,-30xm129,-231v33,0,87,12,67,48v-18,-10,-39,-22,-68,-22v-53,0,-78,37,-80,91v-3,71,61,109,122,81r0,-67r-52,0v-8,1,-8,-20,-3,-24r79,0v16,18,3,68,7,99v-8,24,-43,28,-73,28v-73,0,-112,-43,-112,-115v0,-74,41,-119,113,-119","w":227,"k":{"\u00ff":5,"\u0177":5,"\u00fd":5,"\u1ef3":5,"y":5,"x":2,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":5,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u00c6":2}},"\u011e":{"d":"156,-297v7,0,9,0,10,5v-1,29,-16,48,-46,47v-29,-1,-45,-17,-45,-47v1,-5,3,-5,10,-5v6,0,11,-2,11,4v1,15,9,27,25,27v15,0,22,-13,24,-25v1,-7,2,-6,11,-6xm129,-231v33,0,87,12,67,48v-18,-10,-39,-22,-68,-22v-53,0,-78,37,-80,91v-3,71,61,109,122,81r0,-67r-52,0v-8,1,-8,-20,-3,-24r79,0v16,18,3,68,7,99v-8,24,-43,28,-73,28v-73,0,-112,-43,-112,-115v0,-74,41,-119,113,-119","w":227,"k":{"\u00ff":5,"\u0177":5,"\u00fd":5,"\u1ef3":5,"y":5,"x":2,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":5,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u00c6":2}},"\u0120":{"d":"127,-286v13,1,17,4,17,17v0,14,-4,17,-18,17v-14,0,-16,-3,-17,-16v-1,-12,5,-19,18,-18xm129,-231v33,0,87,12,67,48v-18,-10,-39,-22,-68,-22v-53,0,-78,37,-80,91v-3,71,61,109,122,81r0,-67r-52,0v-8,1,-8,-20,-3,-24r79,0v16,18,3,68,7,99v-8,24,-43,28,-73,28v-73,0,-112,-43,-112,-115v0,-74,41,-119,113,-119","w":227,"k":{"\u00ff":5,"\u0177":5,"\u00fd":5,"\u1ef3":5,"y":5,"x":2,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":5,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u00c6":2}},"\u0122":{"d":"129,-231v33,0,87,12,67,48v-18,-10,-39,-22,-68,-22v-53,0,-78,37,-80,91v-3,71,61,109,122,81r0,-67r-52,0v-8,1,-8,-20,-3,-24r79,0v16,18,3,68,7,99v-8,24,-43,28,-73,28v-73,0,-112,-43,-112,-115v0,-74,41,-119,113,-119xm117,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":227,"k":{"\u00ff":5,"\u0177":5,"\u00fd":5,"\u1ef3":5,"y":5,"x":2,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":5,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u00c6":2}},"H":{"d":"191,-227v5,68,3,159,0,227v-9,-1,-27,6,-27,-5r0,-100r-104,0r0,103v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,91r104,0v2,-31,-3,-68,3,-95v8,-2,17,-2,24,0","w":224,"k":{"\u201c":3,"\u2018":3,"\u012b":-2,"\u00ef":-2,"\u0129":-3,"\u00ee":-2}},"\u0124":{"d":"113,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-27,15,-44,-18,-56,-30xm191,-227v5,68,3,159,0,227v-9,-1,-27,6,-27,-5r0,-100r-104,0r0,103v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,91r104,0v2,-31,-3,-68,3,-95v8,-2,17,-2,24,0","w":224,"k":{"\u201c":3,"\u2018":3,"\u012b":-2,"\u00ef":-2,"\u0129":-3,"\u00ee":-2}},"\u0126":{"d":"66,-161r0,36r104,0r0,-36r-104,0xm170,-185v-5,-23,2,-59,30,-38r0,38v19,-5,43,6,25,24r-25,0r-3,161v-10,0,-24,4,-27,-4r0,-96r-104,0r0,96v0,7,-28,8,-30,0r0,-157v-17,6,-43,-6,-24,-24r24,0v0,0,-7,-54,27,-42v7,6,1,29,3,42r104,0","w":236},"I":{"d":"30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u00cc":{"d":"-9,-291v33,-21,55,25,70,42v-33,14,-49,-29,-70,-42xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u00cd":{"d":"100,-291v-20,15,-36,54,-70,42v18,-17,25,-45,56,-48v7,0,13,0,14,6xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u00ce":{"d":"47,-279v-14,13,-30,45,-59,30v20,-16,39,-61,75,-43r40,43v-27,15,-44,-18,-56,-30xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u0128":{"d":"71,-268v18,3,5,-23,24,-20v7,1,11,0,10,7v0,22,-13,36,-34,36v-22,0,-31,-17,-50,-20v-19,-3,-5,23,-25,20v-7,-1,-9,-1,-10,-7v1,-22,13,-36,35,-36v23,0,31,17,50,20xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u00cf":{"d":"9,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-14,0,-17,-3,-17,-16v0,-14,2,-17,17,-17xm82,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-13,0,-17,-2,-17,-16v1,-14,3,-17,17,-17xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u012a":{"d":"94,-279v9,0,7,23,0,23v-33,-2,-72,3,-101,-3v1,-7,-5,-20,5,-20r96,0xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u012c":{"d":"81,-297v7,0,9,1,11,5v-1,30,-17,47,-47,47v-29,0,-45,-17,-45,-47v0,-5,22,-9,22,-1v0,15,9,27,24,27v14,0,23,-11,24,-25v1,-7,2,-6,11,-6xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u0130":{"d":"46,-286v13,1,17,3,17,17v0,15,-3,17,-17,17v-15,0,-17,-3,-18,-16v0,-12,5,-19,18,-18xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u012e":{"d":"37,27v-11,31,49,-4,33,33v-38,19,-89,-16,-49,-50v3,-5,14,-8,9,-14r0,-219v3,-8,28,-9,30,0r0,224v-6,9,-20,17,-23,26","w":90},"\u0132":{"d":"30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218xm146,-223v3,-8,27,-8,30,0r0,166v8,52,-45,75,-82,50v-2,-6,-5,-24,4,-25v8,2,13,8,25,8v21,0,23,-16,23,-36r0,-163","w":205},"J":{"d":"55,-223v3,-8,27,-8,30,0r0,166v8,52,-45,75,-82,50v-2,-6,-5,-24,4,-25v8,2,13,8,25,8v21,0,23,-16,23,-36r0,-163","w":114,"k":{".":3,",":5,"X":4,"\u00c6":4,"\u0104":6,"\u01fa":6,"\u00c5":6,"\u0102":6,"\u0100":6,"\u00c4":6,"\u00c3":6,"\u00c2":6,"\u00c1":6,"\u00c0":6,"A":6}},"\u0134":{"d":"66,-279v-14,12,-29,45,-58,30v19,-17,38,-61,75,-43r40,43v-27,15,-45,-18,-57,-30xm55,-223v3,-8,27,-8,30,0r0,166v8,52,-45,75,-82,50v-2,-6,-5,-24,4,-25v8,2,13,8,25,8v21,0,23,-16,23,-36r0,-163","w":114,"k":{".":3,",":5,"X":4,"\u00c6":4,"\u0104":6,"\u01fa":6,"\u00c5":6,"\u0102":6,"\u0100":6,"\u00c4":6,"\u00c3":6,"\u00c2":6,"\u00c1":6,"\u00c0":6,"A":6}},"K":{"d":"174,-14v10,8,1,17,-11,15v-9,0,-17,1,-19,-6r-84,-113r0,116v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,101r83,-104v13,-5,41,-4,26,14r-76,90","w":187,"k":{"-":6,"\u00ff":15,"\u0177":15,"\u00fd":15,"\u1ef3":15,"y":15,"\u1e85":17,"\u0175":17,"\u1e83":17,"\u1e81":17,"w":17,"v":18,"\u0173":6,"\u0171":6,"\u016f":6,"\u016d":6,"\u016b":6,"\u00fc":6,"\u0169":6,"\u00fb":6,"\u00fa":6,"\u00f9":6,"u":6,"\u0163":7,"\u0165":7,"t":7,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"\u0157":6,"\u0159":6,"\u0155":6,"r":6,"q":6,"p":6,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u014b":6,"\u0146":6,"\u00f1":6,"\u0148":6,"\u0144":6,"n":6,"m":6,"\u0135":-6,"\u0131":6,"\u012d":-7,"\u012b":-6,"\u00ef":-5,"\u0129":-15,"\u00ee":-6,"\u00ec":-5,"f":4,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":6,"\u00e7":7,"\u010b":7,"\u010d":7,"\u0109":7,"\u0107":7,"c":7,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u1e84":6,"\u0174":6,"\u1e82":6,"\u1e80":6,"W":6,"\u0172":5,"\u0170":5,"\u016e":5,"\u016c":5,"\u016a":5,"\u00dc":5,"\u0168":5,"\u00db":5,"\u00da":5,"\u00d9":5,"U":5,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":17,"\u0152":17,"\u0150":17,"\u014e":17,"\u014c":17,"\u00d6":17,"\u00d5":17,"\u00d4":17,"\u00d3":17,"\u00d2":17,"O":17,"\u0122":14,"\u0120":14,"\u011e":14,"\u011c":14,"G":14,"\u00c7":14,"\u010a":14,"\u010c":14,"\u0108":14,"\u0106":14,"C":14}},"\u0136":{"d":"174,-14v10,8,1,17,-11,15v-9,0,-17,1,-19,-6r-84,-113r0,116v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,101r83,-104v13,-5,41,-4,26,14r-76,90xm96,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":187,"k":{"-":6,"\u00ff":15,"\u0177":15,"\u00fd":15,"\u1ef3":15,"y":15,"\u1e85":17,"\u0175":17,"\u1e83":17,"\u1e81":17,"w":17,"v":18,"\u0173":6,"\u0171":6,"\u016f":6,"\u016d":6,"\u016b":6,"\u00fc":6,"\u0169":6,"\u00fb":6,"\u00fa":6,"\u00f9":6,"u":6,"\u0163":7,"\u0165":7,"t":7,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"\u0157":6,"\u0159":6,"\u0155":6,"r":6,"q":6,"p":6,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u014b":6,"\u0146":6,"\u00f1":6,"\u0148":6,"\u0144":6,"n":6,"m":6,"\u0135":-6,"\u0131":6,"\u012d":-7,"\u012b":-6,"\u00ef":-5,"\u0129":-15,"\u00ee":-6,"\u00ec":-5,"f":4,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":6,"\u00e7":7,"\u010b":7,"\u010d":7,"\u0109":7,"\u0107":7,"c":7,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u1e84":6,"\u0174":6,"\u1e82":6,"\u1e80":6,"W":6,"\u0172":5,"\u0170":5,"\u016e":5,"\u016c":5,"\u016a":5,"\u00dc":5,"\u0168":5,"\u00db":5,"\u00da":5,"\u00d9":5,"U":5,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":17,"\u0152":17,"\u0150":17,"\u014e":17,"\u014c":17,"\u00d6":17,"\u00d5":17,"\u00d4":17,"\u00d3":17,"\u00d2":17,"O":17,"\u0122":14,"\u0120":14,"\u011e":14,"\u011c":14,"G":14,"\u00c7":14,"\u010a":14,"\u010c":14,"\u0108":14,"\u0106":14,"C":14}},"L":{"d":"142,-26v8,0,6,11,6,19v0,4,-3,7,-6,7r-101,0v-6,-1,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r82,0","w":151,"k":{"\u00b7":10,"\u201d":26,"\u201c":35,"\u2019":26,"\u2018":35,",":-3,"\u00ff":14,"\u0177":14,"\u00fd":14,"\u1ef3":14,"y":14,"\u1e85":13,"\u0175":13,"\u1e83":13,"\u1e81":13,"w":13,"v":14,"\u0163":7,"\u0165":7,"t":7,"f":4,"\u0178":29,"\u0176":29,"\u00dd":29,"\u1ef2":29,"Y":29,"\u1e84":21,"\u0174":21,"\u1e82":21,"\u1e80":21,"W":21,"V":26,"\u0172":8,"\u0170":8,"\u016e":8,"\u016c":8,"\u016a":8,"\u00dc":8,"\u0168":8,"\u00db":8,"\u00da":8,"\u00d9":8,"U":8,"\u0162":26,"\u0164":26,"T":26,"Q":8,"\u0152":8,"\u0150":8,"\u014e":8,"\u014c":8,"\u00d6":8,"\u00d5":8,"\u00d4":8,"\u00d3":8,"\u00d2":8,"O":8,"\u0134":-4,"J":-4,"\u0122":8,"\u0120":8,"\u011e":8,"\u011c":8,"G":8,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":-11}},"\u0139":{"d":"73,-251v-2,7,-23,9,-27,2v17,-17,24,-45,56,-48v9,-1,17,3,11,9xm142,-26v8,0,6,11,6,19v0,4,-3,7,-6,7r-101,0v-6,-1,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r82,0","w":151,"k":{"\u00b7":10,"\u201d":26,"\u201c":35,"\u2019":26,"\u2018":35,",":-3,"\u00ff":14,"\u0177":14,"\u00fd":14,"\u1ef3":14,"y":14,"\u1e85":13,"\u0175":13,"\u1e83":13,"\u1e81":13,"w":13,"v":14,"\u0163":7,"\u0165":7,"t":7,"f":4,"\u0178":29,"\u0176":29,"\u00dd":29,"\u1ef2":29,"Y":29,"\u1e84":21,"\u0174":21,"\u1e82":21,"\u1e80":21,"W":21,"V":26,"\u0172":8,"\u0170":8,"\u016e":8,"\u016c":8,"\u016a":8,"\u00dc":8,"\u0168":8,"\u00db":8,"\u00da":8,"\u00d9":8,"U":8,"\u0162":26,"\u0164":26,"T":26,"Q":8,"\u0152":8,"\u0150":8,"\u014e":8,"\u014c":8,"\u00d6":8,"\u00d5":8,"\u00d4":8,"\u00d3":8,"\u00d2":8,"O":8,"\u0134":-4,"J":-4,"\u0122":8,"\u0120":8,"\u011e":8,"\u011c":8,"G":8,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":-11}},"\u013d":{"d":"142,-26v8,0,6,11,6,19v0,4,-3,7,-6,7r-101,0v-6,-1,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r82,0xm110,-176v-1,5,-20,6,-21,1v7,-20,11,-45,21,-61v8,0,25,-5,22,5","w":152},"\u013b":{"d":"142,-26v8,0,6,11,6,19v0,4,-3,7,-6,7r-101,0v-6,-1,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r82,0xm86,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":151,"k":{"\u00b7":10,"\u201d":26,"\u201c":35,"\u2019":26,"\u2018":35,",":-3,"\u00ff":14,"\u0177":14,"\u00fd":14,"\u1ef3":14,"y":14,"\u1e85":13,"\u0175":13,"\u1e83":13,"\u1e81":13,"w":13,"v":14,"\u0163":7,"\u0165":7,"t":7,"f":4,"\u0178":29,"\u0176":29,"\u00dd":29,"\u1ef2":29,"Y":29,"\u1e84":21,"\u0174":21,"\u1e82":21,"\u1e80":21,"W":21,"V":26,"\u0172":8,"\u0170":8,"\u016e":8,"\u016c":8,"\u016a":8,"\u00dc":8,"\u0168":8,"\u00db":8,"\u00da":8,"\u00d9":8,"U":8,"\u0162":26,"\u0164":26,"T":26,"Q":8,"\u0152":8,"\u0150":8,"\u014e":8,"\u014c":8,"\u00d6":8,"\u00d5":8,"\u00d4":8,"\u00d3":8,"\u00d2":8,"O":8,"\u0134":-4,"J":-4,"\u0122":8,"\u0120":8,"\u011e":8,"\u011c":8,"G":8,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":-11}},"\u0141":{"d":"145,-26v10,1,9,25,0,26r-100,0v-7,0,-11,-4,-11,-12r0,-84v-9,3,-29,27,-29,4v-1,-19,18,-21,29,-30r0,-103v6,-5,27,-6,30,2r0,83v15,-8,29,-22,44,-25v9,32,-28,36,-44,50r0,89r81,0","w":154},"\u013f":{"d":"142,-26v8,0,6,11,6,19v0,4,-3,7,-6,7r-101,0v-6,-1,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r82,0xm156,-138v14,0,18,5,18,20v0,16,-4,21,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":196},"M":{"d":"223,-208v-1,-22,55,-30,55,-6r-1,212v-4,5,-28,6,-29,-3r0,-198r-81,199v-4,7,-26,8,-30,0r-77,-199r-1,201v-4,5,-28,6,-29,-3r0,-209v3,-23,56,-16,57,5r67,165","w":307},"N":{"d":"173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168","w":232},"\u0143":{"d":"131,-251v-2,7,-23,9,-27,2v17,-17,24,-45,56,-48v9,-1,17,3,11,9xm173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168","w":232},"\u0147":{"d":"117,-263v14,-12,29,-45,58,-30v-19,17,-38,61,-75,43r-40,-43v26,-16,45,18,57,30xm173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168","w":232},"\u00d1":{"d":"142,-268v17,3,6,-24,24,-20v7,1,9,1,10,7v0,22,-13,36,-35,36v-22,0,-30,-18,-50,-20v-18,-3,-4,22,-24,20v-7,-1,-9,-1,-10,-7v-1,-24,13,-36,34,-36v23,0,31,17,51,20xm173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168","w":232},"\u0145":{"d":"173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168xm109,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":232},"\u014a":{"d":"30,-214v1,-22,46,-16,48,1r90,160r2,-174v9,0,23,-5,26,4r0,229v1,41,-20,63,-65,57v-11,-2,-14,-18,-8,-26v28,8,49,-2,43,-37r-107,-191r-3,191v-9,0,-23,5,-26,-4r0,-210","w":226},"O":{"d":"121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d2":{"d":"66,-291v1,-10,31,-8,34,1v11,14,25,26,35,41v1,5,-9,3,-16,4v-23,-10,-36,-30,-53,-46xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d3":{"d":"172,-291v-20,15,-37,54,-70,42v17,-17,24,-45,56,-48v7,0,13,0,14,6xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d4":{"d":"121,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-27,15,-44,-18,-56,-30xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d5":{"d":"145,-268v18,3,6,-24,25,-20v7,1,9,1,10,7v0,22,-13,36,-35,36v-23,0,-31,-17,-50,-20v-18,-3,-4,22,-24,20v-7,-1,-9,-1,-10,-7v-1,-24,13,-36,34,-36v22,0,31,17,50,20xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d6":{"d":"83,-285v15,0,18,3,18,16v0,14,-3,17,-18,17v-14,0,-17,-3,-17,-16v0,-14,2,-17,17,-17xm156,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u014c":{"d":"168,-279v9,0,7,23,0,23v-32,-2,-72,3,-100,-3v-2,-6,-4,-19,4,-20r96,0xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u014e":{"d":"155,-297v7,0,10,0,11,5v-1,29,-16,47,-46,47v-30,0,-45,-18,-46,-47v0,-5,22,-9,22,-1v0,15,9,27,24,27v14,0,23,-11,24,-25v1,-7,2,-6,11,-6xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u0150":{"d":"104,-292v5,-8,32,-8,36,-1v-20,15,-30,52,-65,46v1,-16,21,-30,29,-45xm171,-292v5,-8,31,-7,36,-1v-20,16,-33,56,-68,45v9,-17,22,-29,32,-44xm121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":5,",":8,"\u017c":2,"\u017e":2,"\u017a":2,"z":2,"x":2,"\u017b":7,"\u017d":7,"\u0179":7,"Z":7,"\u0178":10,"\u0176":10,"\u00dd":10,"\u1ef2":10,"Y":10,"X":11,"\u1e84":4,"\u0174":4,"\u1e82":4,"\u1e80":4,"W":4,"V":4,"\u0162":10,"\u0164":10,"T":10,"\u0134":5,"J":5,"\u00c6":5,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"\u00d8":{"d":"183,-213v25,19,38,51,38,97v0,86,-58,136,-141,113v-13,16,-10,47,-43,43v-5,0,-6,-5,-4,-9r23,-45v-26,-20,-37,-53,-39,-98v-3,-86,59,-137,142,-112v12,-17,11,-50,43,-43v5,0,6,5,4,9xm91,-28v88,38,129,-89,78,-157xm148,-200v-90,-36,-127,90,-78,158","w":238},"\u01fe":{"d":"155,-291v-20,15,-37,54,-70,42v17,-17,24,-45,56,-48v7,0,13,0,14,6xm183,-213v25,19,38,51,38,97v0,86,-58,136,-141,113v-13,16,-10,47,-43,43v-5,0,-6,-5,-4,-9r23,-45v-26,-20,-37,-53,-39,-98v-3,-86,59,-137,142,-112v12,-17,11,-50,43,-43v5,0,6,5,4,9xm91,-28v88,38,129,-89,78,-157xm148,-200v-90,-36,-127,90,-78,158","w":238},"\u0152":{"d":"17,-112v-4,-90,72,-142,152,-108v1,-5,4,-7,9,-7r110,0v5,4,6,25,-3,25r-88,0r0,71r78,1v5,4,6,23,-2,24r-76,0r0,81r92,1v6,4,5,24,-2,24r-108,0v-5,-1,-11,-2,-11,-8v-13,7,-31,11,-51,11v-72,0,-97,-44,-100,-115xm118,-23v20,0,36,-6,48,-15r0,-153v-11,-7,-28,-14,-46,-14v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":312,"k":{"-":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":8,"\u0163":4,"\u0165":4,"t":4,"q":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":11,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":6,"\u0152":6,"\u0150":6,"\u014e":6,"\u014c":6,"\u00d6":6,"\u00d5":6,"\u00d4":6,"\u00d3":6,"\u00d2":6,"O":6,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":4,"\u01fa":4,"\u00c5":4,"\u0102":4,"\u0100":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"P":{"d":"42,-227v69,-4,128,1,128,66v0,59,-45,79,-110,75r0,81v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-209v0,-8,5,-13,12,-13xm60,-111v44,3,78,-5,78,-47v0,-42,-35,-47,-78,-44r0,91","w":185,"k":{"-":11,"\/":19,"\u201d":-8,"\u201c":-2,"\u2019":-8,"\u2018":-2,".":46,",":45,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":6,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"f":-2,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":6,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":8,"\u01fb":8,"\u00e5":8,"\u0103":8,"\u0101":8,"\u00e4":8,"\u00e3":8,"\u00e2":8,"\u00e1":8,"\u00e0":8,"a":8,"\u017b":5,"\u017d":5,"\u0179":5,"Z":5,"\u0178":2,"\u0176":2,"\u00dd":2,"\u1ef2":2,"Y":2,"X":6,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":25,"J":25,"\u00c6":25,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"\u00de":{"d":"60,-189v63,-4,110,9,110,66v0,59,-44,81,-110,75v0,25,8,62,-29,47r2,-226v6,-3,27,-4,27,4r0,34xm60,-73v45,4,78,-5,78,-47v0,-40,-34,-47,-78,-44r0,91","w":185},"Q":{"d":"121,-231v107,-7,123,144,71,206v18,15,33,23,54,32v4,6,5,25,-3,27v-28,-8,-54,-25,-74,-44v-13,7,-31,13,-52,13v-72,0,-100,-44,-100,-115v0,-72,33,-114,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":242,"k":{"}":-5,"]":-6,")":-5,"\/":-24,"\u201d":-1,"\u2019":-1,";":-11,",":-18,"x":-5,"j":-14,"\u0123":-10,"\u0121":-10,"\u011f":-10,"\u011d":-10,"g":-10,"\u0178":8,"\u0176":8,"\u00dd":8,"\u1ef2":8,"Y":8,"X":-2,"\u1e84":2,"\u0174":2,"\u1e82":2,"\u1e80":2,"W":2,"V":4,"\u0162":8,"\u0164":8,"T":8,"\u0134":-7,"J":-7,"\u00c6":-13}},"R":{"d":"168,-168v0,34,-19,49,-44,58v34,19,46,69,57,108v-5,6,-31,5,-32,-4v-21,-40,-18,-105,-89,-95r0,96v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-210v6,-25,53,-8,84,-11v32,6,54,21,54,58xm60,-126v39,1,76,1,76,-38v0,-38,-35,-40,-76,-38r0,76","w":195,"k":{".":-2,"\u00ff":6,"\u0177":6,"\u00fd":6,"\u1ef3":6,"y":6,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u0119":6,"\u0117":6,"\u0115":6,"\u0113":6,"\u00eb":6,"\u011b":6,"\u00ea":6,"\u00e9":6,"\u00e8":6,"e":6,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":5,"\u0162":4,"\u0164":4,"T":4,"\u0218":5,"\u015e":5,"\u0160":5,"\u015c":5,"\u015a":5,"S":5,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0154":{"d":"101,-251v-2,7,-23,9,-27,2v17,-17,24,-45,56,-48v9,-1,17,3,11,9xm168,-168v0,34,-19,49,-44,58v34,19,46,69,57,108v-5,6,-31,5,-32,-4v-21,-40,-18,-105,-89,-95r0,96v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-210v6,-25,53,-8,84,-11v32,6,54,21,54,58xm60,-126v39,1,76,1,76,-38v0,-38,-35,-40,-76,-38r0,76","w":195,"k":{".":-2,"\u00ff":6,"\u0177":6,"\u00fd":6,"\u1ef3":6,"y":6,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u0119":6,"\u0117":6,"\u0115":6,"\u0113":6,"\u00eb":6,"\u011b":6,"\u00ea":6,"\u00e9":6,"\u00e8":6,"e":6,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":5,"\u0162":4,"\u0164":4,"T":4,"\u0218":5,"\u015e":5,"\u0160":5,"\u015c":5,"\u015a":5,"S":5,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0158":{"d":"94,-263v14,-12,30,-45,58,-30v-19,17,-38,61,-75,43r-39,-43v25,-16,45,18,56,30xm168,-168v0,34,-19,49,-44,58v34,19,46,69,57,108v-5,6,-31,5,-32,-4v-21,-40,-18,-105,-89,-95r0,96v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-210v6,-25,53,-8,84,-11v32,6,54,21,54,58xm60,-126v39,1,76,1,76,-38v0,-38,-35,-40,-76,-38r0,76","w":195,"k":{".":-2,"\u00ff":6,"\u0177":6,"\u00fd":6,"\u1ef3":6,"y":6,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u0119":6,"\u0117":6,"\u0115":6,"\u0113":6,"\u00eb":6,"\u011b":6,"\u00ea":6,"\u00e9":6,"\u00e8":6,"e":6,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":5,"\u0162":4,"\u0164":4,"T":4,"\u0218":5,"\u015e":5,"\u0160":5,"\u015c":5,"\u015a":5,"S":5,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"\u0156":{"d":"168,-168v0,34,-19,49,-44,58v34,19,46,69,57,108v-5,6,-31,5,-32,-4v-21,-40,-18,-105,-89,-95r0,96v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-210v6,-25,53,-8,84,-11v32,6,54,21,54,58xm60,-126v39,1,76,1,76,-38v0,-38,-35,-40,-76,-38r0,76xm98,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":195,"k":{".":-2,"\u00ff":6,"\u0177":6,"\u00fd":6,"\u1ef3":6,"y":6,"\u1e85":6,"\u0175":6,"\u1e83":6,"\u1e81":6,"w":6,"v":5,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u0119":6,"\u0117":6,"\u0115":6,"\u0113":6,"\u00eb":6,"\u011b":6,"\u00ea":6,"\u00e9":6,"\u00e8":6,"e":6,"\u0178":5,"\u0176":5,"\u00dd":5,"\u1ef2":5,"Y":5,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":5,"\u0162":4,"\u0164":4,"T":4,"\u0218":5,"\u015e":5,"\u0160":5,"\u015c":5,"\u015a":5,"S":5,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":3,"\u0120":3,"\u011e":3,"\u011c":3,"G":3,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3}},"S":{"d":"49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"\u015a":{"d":"97,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"\u015c":{"d":"85,-279v-14,12,-30,45,-58,30v19,-17,38,-61,75,-43r40,43v-27,15,-45,-18,-57,-30xm49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"\u0160":{"d":"84,-263v14,-12,29,-45,58,-30v-19,17,-38,61,-75,43r-40,-43v26,-16,45,18,57,30xm49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"\u015e":{"d":"152,-64v0,40,-25,60,-61,66v16,23,17,65,-23,62v-17,3,-40,-8,-25,-22v20,2,44,0,30,-22r-7,-17v-27,-1,-69,-17,-48,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15v11,59,105,38,103,110","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"\u0218":{"d":"49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15xm77,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":165,"k":{"-":2,"\u201d":2,"\u201c":4,"\u2019":2,"\u2018":4,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"\u1e85":3,"\u0175":3,"\u1e83":3,"\u1e81":3,"w":3,"v":4,"\u0178":4,"\u0176":4,"\u00dd":4,"\u1ef2":4,"Y":4,"X":2,"\u1e84":3,"\u0174":3,"\u1e82":3,"\u1e80":3,"W":3,"V":2,"\u0162":2,"\u0164":2,"T":2,"\u0134":2,"J":2,"\u00c6":1,"\u0104":3,"\u01fa":3,"\u00c5":3,"\u0102":3,"\u0100":3,"\u00c4":3,"\u00c3":3,"\u00c2":3,"\u00c1":3,"\u00c0":3,"A":3}},"T":{"d":"167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0","w":175,"k":{"-":28,"\/":19,"\u201d":-8,"\u201c":-4,"\u2019":-8,"\u2018":-4,".":36,":":24,";":20,",":37,"\u017c":25,"\u017e":25,"\u017a":25,"z":25,"\u00ff":16,"\u0177":16,"\u00fd":16,"\u1ef3":16,"y":16,"x":16,"\u1e85":15,"\u0175":15,"\u1e83":15,"\u1e81":15,"w":15,"v":16,"\u0173":22,"\u0171":22,"\u016f":22,"\u016d":22,"\u016b":22,"\u00fc":22,"\u0169":22,"\u00fb":22,"\u00fa":22,"\u00f9":22,"u":22,"\u0219":27,"\u015f":27,"\u0161":27,"\u015d":27,"\u015b":27,"s":27,"\u0157":22,"\u0159":22,"\u0155":22,"r":22,"q":26,"p":22,"\u0153":32,"\u01ff":32,"\u00f8":32,"\u0151":32,"\u014f":32,"\u014d":32,"\u00f6":32,"\u00f5":32,"\u00f4":32,"\u00f3":32,"\u00f2":32,"o":32,"\u014b":22,"\u0146":22,"\u00f1":22,"\u0148":22,"\u0144":22,"n":22,"m":22,"\u0135":-11,"\u0131":22,"\u012d":-13,"\u012b":-17,"\u00ef":-15,"\u0129":-23,"\u00ee":-11,"\u00ec":-7,"\u0123":27,"\u0121":27,"\u011f":27,"\u011d":27,"g":27,"\u0119":32,"\u0117":32,"\u0115":32,"\u0113":32,"\u00eb":32,"\u011b":32,"\u00ea":32,"\u00e9":32,"\u00e8":32,"e":32,"d":26,"\u00e7":31,"\u010b":31,"\u010d":31,"\u0109":31,"\u0107":31,"c":31,"\u00e6":28,"\u01fb":28,"\u00e5":28,"\u0103":28,"\u0101":28,"\u00e4":28,"\u00e3":28,"\u00e2":28,"\u00e1":28,"\u00e0":28,"a":28,"\u0162":-5,"\u0164":-5,"T":-5,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":10,"\u0152":10,"\u0150":10,"\u014e":10,"\u014c":10,"\u00d6":10,"\u00d5":10,"\u00d4":10,"\u00d3":10,"\u00d2":10,"O":10,"\u0134":11,"J":11,"\u0122":10,"\u0120":10,"\u011e":10,"\u011c":10,"G":10,"\u00c7":7,"\u010a":7,"\u010c":7,"\u0108":7,"\u0106":7,"C":7,"\u00c6":30,"\u0104":28,"\u01fa":28,"\u00c5":28,"\u0102":28,"\u0100":28,"\u00c4":28,"\u00c3":28,"\u00c2":28,"\u00c1":28,"\u00c0":28,"A":28}},"\u0164":{"d":"87,-263v14,-12,29,-45,58,-30v-19,17,-38,61,-75,43r-40,-43v26,-16,45,17,57,30xm167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0","w":175,"k":{"-":28,"\/":19,"\u201d":-8,"\u201c":-4,"\u2019":-8,"\u2018":-4,".":36,":":24,";":20,",":37,"\u017c":25,"\u017e":25,"\u017a":25,"z":25,"\u00ff":16,"\u0177":16,"\u00fd":16,"\u1ef3":16,"y":16,"x":16,"\u1e85":15,"\u0175":15,"\u1e83":15,"\u1e81":15,"w":15,"v":16,"\u0173":22,"\u0171":22,"\u016f":22,"\u016d":22,"\u016b":22,"\u00fc":22,"\u0169":22,"\u00fb":22,"\u00fa":22,"\u00f9":22,"u":22,"\u0219":27,"\u015f":27,"\u0161":27,"\u015d":27,"\u015b":27,"s":27,"\u0157":22,"\u0159":22,"\u0155":22,"r":22,"q":26,"p":22,"\u0153":32,"\u01ff":32,"\u00f8":32,"\u0151":32,"\u014f":32,"\u014d":32,"\u00f6":32,"\u00f5":32,"\u00f4":32,"\u00f3":32,"\u00f2":32,"o":32,"\u014b":22,"\u0146":22,"\u00f1":22,"\u0148":22,"\u0144":22,"n":22,"m":22,"\u0135":-11,"\u0131":22,"\u012d":-13,"\u012b":-17,"\u00ef":-15,"\u0129":-23,"\u00ee":-11,"\u00ec":-7,"\u0123":27,"\u0121":27,"\u011f":27,"\u011d":27,"g":27,"\u0119":32,"\u0117":32,"\u0115":32,"\u0113":32,"\u00eb":32,"\u011b":32,"\u00ea":32,"\u00e9":32,"\u00e8":32,"e":32,"d":26,"\u00e7":31,"\u010b":31,"\u010d":31,"\u0109":31,"\u0107":31,"c":31,"\u00e6":28,"\u01fb":28,"\u00e5":28,"\u0103":28,"\u0101":28,"\u00e4":28,"\u00e3":28,"\u00e2":28,"\u00e1":28,"\u00e0":28,"a":28,"\u0162":-5,"\u0164":-5,"T":-5,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":10,"\u0152":10,"\u0150":10,"\u014e":10,"\u014c":10,"\u00d6":10,"\u00d5":10,"\u00d4":10,"\u00d3":10,"\u00d2":10,"O":10,"\u0134":11,"J":11,"\u0122":10,"\u0120":10,"\u011e":10,"\u011c":10,"G":10,"\u00c7":7,"\u010a":7,"\u010c":7,"\u0108":7,"\u0106":7,"C":7,"\u00c6":30,"\u0104":28,"\u01fa":28,"\u00c5":28,"\u0102":28,"\u0100":28,"\u00c4":28,"\u00c3":28,"\u00c2":28,"\u00c1":28,"\u00c0":28,"A":28}},"\u0162":{"d":"167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0xm84,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":175,"k":{"-":28,"\/":19,"\u201d":-8,"\u201c":-4,"\u2019":-8,"\u2018":-4,".":36,":":24,";":20,",":37,"\u017c":25,"\u017e":25,"\u017a":25,"z":25,"\u00ff":16,"\u0177":16,"\u00fd":16,"\u1ef3":16,"y":16,"x":16,"\u1e85":15,"\u0175":15,"\u1e83":15,"\u1e81":15,"w":15,"v":16,"\u0173":22,"\u0171":22,"\u016f":22,"\u016d":22,"\u016b":22,"\u00fc":22,"\u0169":22,"\u00fb":22,"\u00fa":22,"\u00f9":22,"u":22,"\u0219":27,"\u015f":27,"\u0161":27,"\u015d":27,"\u015b":27,"s":27,"\u0157":22,"\u0159":22,"\u0155":22,"r":22,"q":26,"p":22,"\u0153":32,"\u01ff":32,"\u00f8":32,"\u0151":32,"\u014f":32,"\u014d":32,"\u00f6":32,"\u00f5":32,"\u00f4":32,"\u00f3":32,"\u00f2":32,"o":32,"\u014b":22,"\u0146":22,"\u00f1":22,"\u0148":22,"\u0144":22,"n":22,"m":22,"\u0135":-11,"\u0131":22,"\u012d":-13,"\u012b":-17,"\u00ef":-15,"\u0129":-23,"\u00ee":-11,"\u00ec":-7,"\u0123":27,"\u0121":27,"\u011f":27,"\u011d":27,"g":27,"\u0119":32,"\u0117":32,"\u0115":32,"\u0113":32,"\u00eb":32,"\u011b":32,"\u00ea":32,"\u00e9":32,"\u00e8":32,"e":32,"d":26,"\u00e7":31,"\u010b":31,"\u010d":31,"\u0109":31,"\u0107":31,"c":31,"\u00e6":28,"\u01fb":28,"\u00e5":28,"\u0103":28,"\u0101":28,"\u00e4":28,"\u00e3":28,"\u00e2":28,"\u00e1":28,"\u00e0":28,"a":28,"\u0162":-5,"\u0164":-5,"T":-5,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":10,"\u0152":10,"\u0150":10,"\u014e":10,"\u014c":10,"\u00d6":10,"\u00d5":10,"\u00d4":10,"\u00d3":10,"\u00d2":10,"O":10,"\u0134":11,"J":11,"\u0122":10,"\u0120":10,"\u011e":10,"\u011c":10,"G":10,"\u00c7":7,"\u010a":7,"\u010c":7,"\u0108":7,"\u0106":7,"C":7,"\u00c6":30,"\u0104":28,"\u01fa":28,"\u00c5":28,"\u0102":28,"\u0100":28,"\u00c4":28,"\u00c3":28,"\u00c2":28,"\u00c1":28,"\u00c0":28,"A":28}},"\u021a":{"d":"167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0xm84,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":175},"\u0166":{"d":"167,-227v8,1,8,25,0,25r-64,0r0,73v16,1,35,-2,49,1v6,4,5,24,-2,24r-47,0v-2,34,3,74,-3,104v-9,-1,-25,5,-27,-4r0,-100v-20,-2,-66,11,-50,-24v14,-3,34,0,50,-1r0,-73r-67,0v-5,-4,-4,-21,0,-25r161,0","w":175},"U":{"d":"171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u00d9":{"d":"61,-288v-5,-6,3,-9,11,-9v31,2,39,31,56,48v1,5,-9,3,-16,4v-22,-10,-33,-29,-51,-43xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u00da":{"d":"126,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u00db":{"d":"116,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-26,15,-45,-18,-56,-30xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u0168":{"d":"141,-268v17,3,6,-24,24,-20v7,1,9,1,10,7v0,22,-13,36,-35,36v-22,0,-30,-18,-50,-20v-18,-3,-4,22,-24,20v-7,-1,-9,-1,-10,-7v-1,-24,13,-36,35,-36v22,0,30,18,50,20xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u00dc":{"d":"79,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-14,0,-17,-2,-17,-16v0,-15,2,-17,17,-17xm152,-285v14,0,17,3,17,16v0,14,-3,17,-18,17v-13,0,-17,-3,-17,-16v0,-14,4,-17,18,-17xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u016a":{"d":"163,-279v9,1,7,21,0,23v-32,-2,-72,3,-100,-3v1,-7,-5,-20,4,-20r96,0xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u016c":{"d":"150,-297v7,0,10,0,11,5v-1,29,-16,47,-46,47v-30,0,-45,-18,-46,-47v0,-5,22,-9,22,-1v1,14,9,26,24,27v15,0,24,-11,24,-25v1,-7,2,-6,11,-6xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u016e":{"d":"116,-305v21,0,36,12,35,32v-1,22,-15,33,-37,34v-22,0,-35,-11,-35,-32v0,-22,15,-33,37,-34xm115,-255v10,0,16,-7,16,-17v0,-11,-5,-17,-16,-17v-10,-1,-17,6,-16,16v0,11,5,18,16,18xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u0170":{"d":"99,-292v5,-8,32,-8,36,-1v-19,17,-30,52,-65,46v4,-17,20,-30,29,-45xm167,-292v5,-7,31,-8,35,-1v-18,17,-33,55,-68,45v9,-17,23,-29,33,-44xm171,-223v3,-8,27,-8,30,0r0,139v-1,56,-30,87,-87,87v-56,0,-84,-30,-84,-85v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"\u0172":{"d":"171,-223v3,-8,27,-8,30,0v-5,83,20,186,-42,219v-10,13,-27,19,-31,37v-4,20,49,-6,35,27v-38,18,-88,-16,-50,-49r8,-9v-58,5,-91,-28,-91,-84v0,-47,-3,-102,3,-145v9,-2,24,-4,27,4v7,78,-29,201,56,201v85,0,47,-124,55,-201","w":230,"k":{".":6,",":5,"\u0134":7,"J":7,"\u00c6":6,"\u0104":8,"\u01fa":8,"\u00c5":8,"\u0102":8,"\u0100":8,"\u00c4":8,"\u00c3":8,"\u00c2":8,"\u00c1":8,"\u00c0":8,"A":8}},"V":{"d":"167,-222v2,-11,41,-10,29,5r-74,212v-3,9,-37,10,-40,0r-76,-218v2,-9,29,-8,32,0r66,192","w":204,"k":{"-":18,"\/":19,"\u201d":-9,"\u2019":-9,".":36,":":13,";":19,",":29,"\u017c":14,"\u017e":14,"\u017a":14,"z":14,"\u00ff":6,"\u0177":6,"\u00fd":6,"\u1ef3":6,"y":6,"\u0173":9,"\u0171":9,"\u016f":9,"\u016d":9,"\u016b":9,"\u00fc":9,"\u0169":9,"\u00fb":9,"\u00fa":9,"\u00f9":9,"u":9,"\u0219":16,"\u015f":16,"\u0161":16,"\u015d":16,"\u015b":16,"s":16,"\u0157":9,"\u0159":9,"\u0155":9,"r":9,"q":15,"p":9,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":9,"\u0146":9,"\u00f1":9,"\u0148":9,"\u0144":9,"n":9,"m":9,"\u0135":-10,"\u0131":9,"\u012d":-12,"\u012b":-21,"\u00ef":-13,"\u0129":-23,"\u00ee":-11,"\u00ec":-8,"\u0123":18,"\u0121":18,"\u011f":18,"\u011d":18,"g":18,"\u0119":18,"\u0117":18,"\u0115":18,"\u0113":18,"\u00eb":18,"\u011b":18,"\u00ea":18,"\u00e9":18,"\u00e8":18,"e":18,"d":15,"\u00e7":18,"\u010b":18,"\u010d":18,"\u0109":18,"\u0107":18,"c":18,"\u00e6":20,"\u01fb":20,"\u00e5":20,"\u0103":20,"\u0101":20,"\u00e4":20,"\u00e3":20,"\u00e2":20,"\u00e1":20,"\u00e0":20,"a":20,"V":-2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":5,"\u0152":5,"\u0150":5,"\u014e":5,"\u014c":5,"\u00d6":5,"\u00d5":5,"\u00d4":5,"\u00d3":5,"\u00d2":5,"O":5,"\u0134":14,"J":14,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":3,"\u010a":3,"\u010c":3,"\u0108":3,"\u0106":3,"C":3,"\u00c6":26,"\u0104":17,"\u01fa":17,"\u00c5":17,"\u0102":17,"\u0100":17,"\u00c4":17,"\u00c3":17,"\u00c2":17,"\u00c1":17,"\u00c0":17,"A":17}},"W":{"d":"279,-222v2,-11,38,-10,29,5r-60,210v-2,12,-38,13,-42,0r-48,-171r-44,171v-1,12,-38,12,-42,0r-61,-216v0,-10,25,-6,31,-2r52,193r52,-195v10,-1,28,-5,30,5r53,190","w":320,"k":{"-":15,"\u201d":-2,"\u2019":-2,".":36,";":27,",":38,"\u00ff":9,"\u0177":9,"\u00fd":9,"\u1ef3":9,"y":9,"v":6,"\u0173":11,"\u0171":11,"\u016f":11,"\u016d":11,"\u016b":11,"\u00fc":11,"\u0169":11,"\u00fb":11,"\u00fa":11,"\u00f9":11,"u":11,"\u0219":13,"\u015f":13,"\u0161":13,"\u015d":13,"\u015b":13,"s":13,"\u0157":11,"\u0159":11,"\u0155":11,"r":11,"q":13,"p":11,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":11,"\u0146":11,"\u00f1":11,"\u0148":11,"\u0144":11,"n":11,"m":11,"\u0135":-7,"\u0131":11,"\u012d":-8,"\u012b":-8,"\u00ef":-8,"\u0129":-19,"\u00ee":-7,"\u00ec":-3,"\u0123":9,"\u0121":9,"\u011f":9,"\u011d":9,"g":9,"\u0119":13,"\u0117":13,"\u0115":13,"\u0113":13,"\u00eb":13,"\u011b":13,"\u00ea":13,"\u00e9":13,"\u00e8":13,"e":13,"d":13,"\u00e7":14,"\u010b":14,"\u010d":14,"\u0109":14,"\u0107":14,"c":14,"\u00e6":12,"\u01fb":12,"\u00e5":12,"\u0103":12,"\u0101":12,"\u00e4":12,"\u00e3":12,"\u00e2":12,"\u00e1":12,"\u00e0":12,"a":12,"X":2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":15,"J":15,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":22,"\u0104":16,"\u01fa":16,"\u00c5":16,"\u0102":16,"\u0100":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"A":16}},"\u1e80":{"d":"101,-291v33,-21,55,25,70,42v-33,14,-49,-29,-70,-42xm279,-222v2,-11,38,-10,29,5r-60,210v-2,12,-38,13,-42,0r-48,-171r-44,171v-1,12,-38,12,-42,0r-61,-216v0,-10,25,-6,31,-2r52,193r52,-195v10,-1,28,-5,30,5r53,190","w":320,"k":{"-":15,"\u201d":-2,"\u2019":-2,".":36,";":27,",":38,"\u00ff":9,"\u0177":9,"\u00fd":9,"\u1ef3":9,"y":9,"v":6,"\u0173":11,"\u0171":11,"\u016f":11,"\u016d":11,"\u016b":11,"\u00fc":11,"\u0169":11,"\u00fb":11,"\u00fa":11,"\u00f9":11,"u":11,"\u0219":13,"\u015f":13,"\u0161":13,"\u015d":13,"\u015b":13,"s":13,"\u0157":11,"\u0159":11,"\u0155":11,"r":11,"q":13,"p":11,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":11,"\u0146":11,"\u00f1":11,"\u0148":11,"\u0144":11,"n":11,"m":11,"\u0135":-7,"\u0131":11,"\u012d":-8,"\u012b":-8,"\u00ef":-8,"\u0129":-19,"\u00ee":-7,"\u00ec":-3,"\u0123":9,"\u0121":9,"\u011f":9,"\u011d":9,"g":9,"\u0119":13,"\u0117":13,"\u0115":13,"\u0113":13,"\u00eb":13,"\u011b":13,"\u00ea":13,"\u00e9":13,"\u00e8":13,"e":13,"d":13,"\u00e7":14,"\u010b":14,"\u010d":14,"\u0109":14,"\u0107":14,"c":14,"\u00e6":12,"\u01fb":12,"\u00e5":12,"\u0103":12,"\u0101":12,"\u00e4":12,"\u00e3":12,"\u00e2":12,"\u00e1":12,"\u00e0":12,"a":12,"X":2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":15,"J":15,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":22,"\u0104":16,"\u01fa":16,"\u00c5":16,"\u0102":16,"\u0100":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"A":16}},"\u1e82":{"d":"173,-251v-2,7,-23,9,-27,2v17,-17,24,-45,56,-48v9,-1,17,3,11,9xm279,-222v2,-11,38,-10,29,5r-60,210v-2,12,-38,13,-42,0r-48,-171r-44,171v-1,12,-38,12,-42,0r-61,-216v0,-10,25,-6,31,-2r52,193r52,-195v10,-1,28,-5,30,5r53,190","w":320,"k":{"-":15,"\u201d":-2,"\u2019":-2,".":36,";":27,",":38,"\u00ff":9,"\u0177":9,"\u00fd":9,"\u1ef3":9,"y":9,"v":6,"\u0173":11,"\u0171":11,"\u016f":11,"\u016d":11,"\u016b":11,"\u00fc":11,"\u0169":11,"\u00fb":11,"\u00fa":11,"\u00f9":11,"u":11,"\u0219":13,"\u015f":13,"\u0161":13,"\u015d":13,"\u015b":13,"s":13,"\u0157":11,"\u0159":11,"\u0155":11,"r":11,"q":13,"p":11,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":11,"\u0146":11,"\u00f1":11,"\u0148":11,"\u0144":11,"n":11,"m":11,"\u0135":-7,"\u0131":11,"\u012d":-8,"\u012b":-8,"\u00ef":-8,"\u0129":-19,"\u00ee":-7,"\u00ec":-3,"\u0123":9,"\u0121":9,"\u011f":9,"\u011d":9,"g":9,"\u0119":13,"\u0117":13,"\u0115":13,"\u0113":13,"\u00eb":13,"\u011b":13,"\u00ea":13,"\u00e9":13,"\u00e8":13,"e":13,"d":13,"\u00e7":14,"\u010b":14,"\u010d":14,"\u0109":14,"\u0107":14,"c":14,"\u00e6":12,"\u01fb":12,"\u00e5":12,"\u0103":12,"\u0101":12,"\u00e4":12,"\u00e3":12,"\u00e2":12,"\u00e1":12,"\u00e0":12,"a":12,"X":2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":15,"J":15,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":22,"\u0104":16,"\u01fa":16,"\u00c5":16,"\u0102":16,"\u0100":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"A":16}},"\u0174":{"d":"162,-279v-14,12,-30,45,-58,30v19,-17,38,-61,75,-43v13,15,28,26,39,43v-26,15,-45,-18,-56,-30xm279,-222v2,-11,38,-10,29,5r-60,210v-2,12,-38,13,-42,0r-48,-171r-44,171v-1,12,-38,12,-42,0r-61,-216v0,-10,25,-6,31,-2r52,193r52,-195v10,-1,28,-5,30,5r53,190","w":320,"k":{"-":15,"\u201d":-2,"\u2019":-2,".":36,";":27,",":38,"\u00ff":9,"\u0177":9,"\u00fd":9,"\u1ef3":9,"y":9,"v":6,"\u0173":11,"\u0171":11,"\u016f":11,"\u016d":11,"\u016b":11,"\u00fc":11,"\u0169":11,"\u00fb":11,"\u00fa":11,"\u00f9":11,"u":11,"\u0219":13,"\u015f":13,"\u0161":13,"\u015d":13,"\u015b":13,"s":13,"\u0157":11,"\u0159":11,"\u0155":11,"r":11,"q":13,"p":11,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":11,"\u0146":11,"\u00f1":11,"\u0148":11,"\u0144":11,"n":11,"m":11,"\u0135":-7,"\u0131":11,"\u012d":-8,"\u012b":-8,"\u00ef":-8,"\u0129":-19,"\u00ee":-7,"\u00ec":-3,"\u0123":9,"\u0121":9,"\u011f":9,"\u011d":9,"g":9,"\u0119":13,"\u0117":13,"\u0115":13,"\u0113":13,"\u00eb":13,"\u011b":13,"\u00ea":13,"\u00e9":13,"\u00e8":13,"e":13,"d":13,"\u00e7":14,"\u010b":14,"\u010d":14,"\u0109":14,"\u0107":14,"c":14,"\u00e6":12,"\u01fb":12,"\u00e5":12,"\u0103":12,"\u0101":12,"\u00e4":12,"\u00e3":12,"\u00e2":12,"\u00e1":12,"\u00e0":12,"a":12,"X":2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":15,"J":15,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":22,"\u0104":16,"\u01fa":16,"\u00c5":16,"\u0102":16,"\u0100":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"A":16}},"\u1e84":{"d":"125,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-14,0,-17,-2,-17,-16v0,-14,2,-17,17,-17xm198,-285v14,0,17,3,17,16v0,14,-3,17,-18,17v-13,0,-16,-3,-16,-16v0,-15,3,-17,17,-17xm279,-222v2,-11,38,-10,29,5r-60,210v-2,12,-38,13,-42,0r-48,-171r-44,171v-1,12,-38,12,-42,0r-61,-216v0,-10,25,-6,31,-2r52,193r52,-195v10,-1,28,-5,30,5r53,190","w":320,"k":{"-":15,"\u201d":-2,"\u2019":-2,".":36,";":27,",":38,"\u00ff":9,"\u0177":9,"\u00fd":9,"\u1ef3":9,"y":9,"v":6,"\u0173":11,"\u0171":11,"\u016f":11,"\u016d":11,"\u016b":11,"\u00fc":11,"\u0169":11,"\u00fb":11,"\u00fa":11,"\u00f9":11,"u":11,"\u0219":13,"\u015f":13,"\u0161":13,"\u015d":13,"\u015b":13,"s":13,"\u0157":11,"\u0159":11,"\u0155":11,"r":11,"q":13,"p":11,"\u0153":15,"\u01ff":15,"\u00f8":15,"\u0151":15,"\u014f":15,"\u014d":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"o":15,"\u014b":11,"\u0146":11,"\u00f1":11,"\u0148":11,"\u0144":11,"n":11,"m":11,"\u0135":-7,"\u0131":11,"\u012d":-8,"\u012b":-8,"\u00ef":-8,"\u0129":-19,"\u00ee":-7,"\u00ec":-3,"\u0123":9,"\u0121":9,"\u011f":9,"\u011d":9,"g":9,"\u0119":13,"\u0117":13,"\u0115":13,"\u0113":13,"\u00eb":13,"\u011b":13,"\u00ea":13,"\u00e9":13,"\u00e8":13,"e":13,"d":13,"\u00e7":14,"\u010b":14,"\u010d":14,"\u0109":14,"\u0107":14,"c":14,"\u00e6":12,"\u01fb":12,"\u00e5":12,"\u0103":12,"\u0101":12,"\u00e4":12,"\u00e3":12,"\u00e2":12,"\u00e1":12,"\u00e0":12,"a":12,"X":2,"\u0218":2,"\u015e":2,"\u0160":2,"\u015c":2,"\u015a":2,"S":2,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":15,"J":15,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u00c6":22,"\u0104":16,"\u01fa":16,"\u00c5":16,"\u0102":16,"\u0100":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"A":16}},"X":{"d":"143,-223v5,-10,39,-10,30,6r-59,101r64,111v0,10,-20,5,-30,5v-21,-28,-36,-64,-55,-95v-19,31,-34,66,-56,95v-11,1,-35,6,-25,-11r62,-104r-62,-108v-1,-7,8,-5,15,-6v6,2,16,0,19,6r49,85","w":186,"k":{"-":14,"\u201d":2,"\u2019":2,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"\u1e85":9,"\u0175":9,"\u1e83":9,"\u1e81":9,"w":9,"v":10,"u":7,"\u0163":5,"\u0165":5,"t":5,"q":8,"\u0153":7,"\u01ff":7,"\u00f8":7,"\u0151":7,"\u014f":7,"\u014d":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"o":7,"\u0123":2,"\u0121":2,"\u011f":2,"\u011d":2,"g":2,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"d":8,"\u0218":4,"\u015e":4,"\u0160":4,"\u015c":4,"\u015a":4,"S":4,"Q":10,"\u0152":10,"\u0150":10,"\u014e":10,"\u014c":10,"\u00d6":10,"\u00d5":10,"\u00d4":10,"\u00d3":10,"\u00d2":10,"O":10,"\u0122":11,"\u0120":11,"\u011e":11,"\u011c":11,"G":11,"\u00c7":10,"\u010a":10,"\u010c":10,"\u0108":10,"\u0106":10,"C":10}},"Y":{"d":"137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":21,"\/":22,"\u201d":-5,"\u2019":-5,".":42,":":27,";":24,",":44,"\u017c":18,"\u017e":18,"\u017a":18,"z":18,"\u00ff":11,"\u0177":11,"\u00fd":11,"\u1ef3":11,"y":11,"x":12,"\u1e85":11,"\u0175":11,"\u1e83":11,"\u1e81":11,"w":11,"v":12,"\u0173":17,"\u0171":17,"\u016f":17,"\u016d":17,"\u016b":17,"\u00fc":17,"\u0169":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"u":17,"\u0163":8,"\u0165":8,"t":8,"\u00df":13,"\u0219":20,"\u015f":20,"\u0161":20,"\u015d":20,"\u015b":20,"s":20,"\u0157":17,"\u0159":17,"\u0155":17,"r":17,"q":23,"p":17,"\u0153":27,"\u01ff":27,"\u00f8":27,"\u0151":27,"\u014f":27,"\u014d":27,"\u00f6":27,"\u00f5":27,"\u00f4":27,"\u00f3":27,"\u00f2":27,"o":27,"\u014b":17,"\u0146":17,"\u00f1":17,"\u0148":17,"\u0144":17,"n":17,"m":17,"\u0135":-8,"j":9,"\u0131":17,"\u012d":-11,"\u012b":-15,"\u00ef":-9,"\u0129":-17,"\u00ee":-8,"\u00ed":12,"\u00ec":-7,"i":6,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"f":11,"\u0119":26,"\u0117":26,"\u0115":26,"\u0113":26,"\u00eb":26,"\u011b":26,"\u00ea":26,"\u00e9":26,"\u00e8":26,"e":26,"d":23,"\u00e7":28,"\u010b":28,"\u010d":28,"\u0109":28,"\u0107":28,"c":28,"\u00e6":24,"\u01fb":24,"\u00e5":24,"\u0103":24,"\u0101":24,"\u00e4":24,"\u00e3":24,"\u00e2":24,"\u00e1":24,"\u00e0":24,"a":24,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":12,"\u0152":12,"\u0150":12,"\u014e":12,"\u014c":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"O":12,"\u0134":20,"J":20,"\u0122":12,"\u0120":12,"\u011e":12,"\u011c":12,"G":12,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":31,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"\u1ef2":{"d":"32,-291v33,-21,54,25,70,42v-33,13,-49,-29,-70,-42xm137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":21,"\/":22,"\u201d":-5,"\u2019":-5,".":42,":":27,";":24,",":44,"\u017c":18,"\u017e":18,"\u017a":18,"z":18,"\u00ff":11,"\u0177":11,"\u00fd":11,"\u1ef3":11,"y":11,"x":12,"\u1e85":11,"\u0175":11,"\u1e83":11,"\u1e81":11,"w":11,"v":12,"\u0173":17,"\u0171":17,"\u016f":17,"\u016d":17,"\u016b":17,"\u00fc":17,"\u0169":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"u":17,"\u0163":8,"\u0165":8,"t":8,"\u00df":13,"\u0219":20,"\u015f":20,"\u0161":20,"\u015d":20,"\u015b":20,"s":20,"\u0157":17,"\u0159":17,"\u0155":17,"r":17,"q":23,"p":17,"\u0153":27,"\u01ff":27,"\u00f8":27,"\u0151":27,"\u014f":27,"\u014d":27,"\u00f6":27,"\u00f5":27,"\u00f4":27,"\u00f3":27,"\u00f2":27,"o":27,"\u014b":17,"\u0146":17,"\u00f1":17,"\u0148":17,"\u0144":17,"n":17,"m":17,"\u0135":-8,"j":9,"\u0131":17,"\u012d":-11,"\u012b":-15,"\u00ef":-9,"\u0129":-17,"\u00ee":-8,"\u00ed":12,"\u00ec":-7,"i":6,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"f":11,"\u0119":26,"\u0117":26,"\u0115":26,"\u0113":26,"\u00eb":26,"\u011b":26,"\u00ea":26,"\u00e9":26,"\u00e8":26,"e":26,"d":23,"\u00e7":28,"\u010b":28,"\u010d":28,"\u0109":28,"\u0107":28,"c":28,"\u00e6":24,"\u01fb":24,"\u00e5":24,"\u0103":24,"\u0101":24,"\u00e4":24,"\u00e3":24,"\u00e2":24,"\u00e1":24,"\u00e0":24,"a":24,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":12,"\u0152":12,"\u0150":12,"\u014e":12,"\u014c":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"O":12,"\u0134":20,"J":20,"\u0122":12,"\u0120":12,"\u011e":12,"\u011c":12,"G":12,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":31,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"\u00dd":{"d":"106,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":21,"\/":22,"\u201d":-5,"\u2019":-5,".":42,":":27,";":24,",":44,"\u017c":18,"\u017e":18,"\u017a":18,"z":18,"\u00ff":11,"\u0177":11,"\u00fd":11,"\u1ef3":11,"y":11,"x":12,"\u1e85":11,"\u0175":11,"\u1e83":11,"\u1e81":11,"w":11,"v":12,"\u0173":17,"\u0171":17,"\u016f":17,"\u016d":17,"\u016b":17,"\u00fc":17,"\u0169":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"u":17,"\u0163":8,"\u0165":8,"t":8,"\u00df":13,"\u0219":20,"\u015f":20,"\u0161":20,"\u015d":20,"\u015b":20,"s":20,"\u0157":17,"\u0159":17,"\u0155":17,"r":17,"q":23,"p":17,"\u0153":27,"\u01ff":27,"\u00f8":27,"\u0151":27,"\u014f":27,"\u014d":27,"\u00f6":27,"\u00f5":27,"\u00f4":27,"\u00f3":27,"\u00f2":27,"o":27,"\u014b":17,"\u0146":17,"\u00f1":17,"\u0148":17,"\u0144":17,"n":17,"m":17,"\u0135":-8,"j":9,"\u0131":17,"\u012d":-11,"\u012b":-15,"\u00ef":-9,"\u0129":-17,"\u00ee":-8,"\u00ed":12,"\u00ec":-7,"i":6,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"f":11,"\u0119":26,"\u0117":26,"\u0115":26,"\u0113":26,"\u00eb":26,"\u011b":26,"\u00ea":26,"\u00e9":26,"\u00e8":26,"e":26,"d":23,"\u00e7":28,"\u010b":28,"\u010d":28,"\u0109":28,"\u0107":28,"c":28,"\u00e6":24,"\u01fb":24,"\u00e5":24,"\u0103":24,"\u0101":24,"\u00e4":24,"\u00e3":24,"\u00e2":24,"\u00e1":24,"\u00e0":24,"a":24,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":12,"\u0152":12,"\u0150":12,"\u014e":12,"\u014c":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"O":12,"\u0134":20,"J":20,"\u0122":12,"\u0120":12,"\u011e":12,"\u011c":12,"G":12,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":31,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"\u0176":{"d":"88,-279v-14,12,-30,45,-58,30v19,-17,38,-61,75,-43v13,15,28,26,39,43v-26,15,-45,-18,-56,-30xm137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":21,"\/":22,"\u201d":-5,"\u2019":-5,".":42,":":27,";":24,",":44,"\u017c":18,"\u017e":18,"\u017a":18,"z":18,"\u00ff":11,"\u0177":11,"\u00fd":11,"\u1ef3":11,"y":11,"x":12,"\u1e85":11,"\u0175":11,"\u1e83":11,"\u1e81":11,"w":11,"v":12,"\u0173":17,"\u0171":17,"\u016f":17,"\u016d":17,"\u016b":17,"\u00fc":17,"\u0169":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"u":17,"\u0163":8,"\u0165":8,"t":8,"\u00df":13,"\u0219":20,"\u015f":20,"\u0161":20,"\u015d":20,"\u015b":20,"s":20,"\u0157":17,"\u0159":17,"\u0155":17,"r":17,"q":23,"p":17,"\u0153":27,"\u01ff":27,"\u00f8":27,"\u0151":27,"\u014f":27,"\u014d":27,"\u00f6":27,"\u00f5":27,"\u00f4":27,"\u00f3":27,"\u00f2":27,"o":27,"\u014b":17,"\u0146":17,"\u00f1":17,"\u0148":17,"\u0144":17,"n":17,"m":17,"\u0135":-8,"j":9,"\u0131":17,"\u012d":-11,"\u012b":-15,"\u00ef":-9,"\u0129":-17,"\u00ee":-8,"\u00ed":12,"\u00ec":-7,"i":6,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"f":11,"\u0119":26,"\u0117":26,"\u0115":26,"\u0113":26,"\u00eb":26,"\u011b":26,"\u00ea":26,"\u00e9":26,"\u00e8":26,"e":26,"d":23,"\u00e7":28,"\u010b":28,"\u010d":28,"\u0109":28,"\u0107":28,"c":28,"\u00e6":24,"\u01fb":24,"\u00e5":24,"\u0103":24,"\u0101":24,"\u00e4":24,"\u00e3":24,"\u00e2":24,"\u00e1":24,"\u00e0":24,"a":24,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":12,"\u0152":12,"\u0150":12,"\u014e":12,"\u014c":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"O":12,"\u0134":20,"J":20,"\u0122":12,"\u0120":12,"\u011e":12,"\u011c":12,"G":12,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":31,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"\u0178":{"d":"52,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-14,0,-17,-2,-17,-16v0,-15,2,-17,17,-17xm124,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":21,"\/":22,"\u201d":-5,"\u2019":-5,".":42,":":27,";":24,",":44,"\u017c":18,"\u017e":18,"\u017a":18,"z":18,"\u00ff":11,"\u0177":11,"\u00fd":11,"\u1ef3":11,"y":11,"x":12,"\u1e85":11,"\u0175":11,"\u1e83":11,"\u1e81":11,"w":11,"v":12,"\u0173":17,"\u0171":17,"\u016f":17,"\u016d":17,"\u016b":17,"\u00fc":17,"\u0169":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"u":17,"\u0163":8,"\u0165":8,"t":8,"\u00df":13,"\u0219":20,"\u015f":20,"\u0161":20,"\u015d":20,"\u015b":20,"s":20,"\u0157":17,"\u0159":17,"\u0155":17,"r":17,"q":23,"p":17,"\u0153":27,"\u01ff":27,"\u00f8":27,"\u0151":27,"\u014f":27,"\u014d":27,"\u00f6":27,"\u00f5":27,"\u00f4":27,"\u00f3":27,"\u00f2":27,"o":27,"\u014b":17,"\u0146":17,"\u00f1":17,"\u0148":17,"\u0144":17,"n":17,"m":17,"\u0135":-8,"j":9,"\u0131":17,"\u012d":-11,"\u012b":-15,"\u00ef":-9,"\u0129":-17,"\u00ee":-8,"\u00ed":12,"\u00ec":-7,"i":6,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"f":11,"\u0119":26,"\u0117":26,"\u0115":26,"\u0113":26,"\u00eb":26,"\u011b":26,"\u00ea":26,"\u00e9":26,"\u00e8":26,"e":26,"d":23,"\u00e7":28,"\u010b":28,"\u010d":28,"\u0109":28,"\u0107":28,"c":28,"\u00e6":24,"\u01fb":24,"\u00e5":24,"\u0103":24,"\u0101":24,"\u00e4":24,"\u00e3":24,"\u00e2":24,"\u00e1":24,"\u00e0":24,"a":24,"\u017b":2,"\u017d":2,"\u0179":2,"Z":2,"\u0218":3,"\u015e":3,"\u0160":3,"\u015c":3,"\u015a":3,"S":3,"Q":12,"\u0152":12,"\u0150":12,"\u014e":12,"\u014c":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"O":12,"\u0134":20,"J":20,"\u0122":12,"\u0120":12,"\u011e":12,"\u011c":12,"G":12,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":31,"\u0104":27,"\u01fa":27,"\u00c5":27,"\u0102":27,"\u0100":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"A":27}},"Z":{"d":"155,-25v8,0,9,25,0,25r-134,0v-18,0,-10,-32,-3,-38r105,-164r-107,-1v-5,-2,-6,-24,3,-24r127,0v17,-1,10,32,2,38r-104,164r111,0","w":168,"k":{"-":8,"\u201d":-8,"\u2019":-8,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"\u1e85":7,"\u0175":7,"\u1e83":7,"\u1e81":7,"w":7,"v":8,"q":3,"\u0153":5,"\u01ff":5,"\u00f8":5,"\u0151":5,"\u014f":5,"\u014d":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"o":5,"\u0135":-7,"\u012d":-6,"\u012b":-12,"\u00ef":-10,"\u0129":-18,"\u00ee":-7,"\u00ec":-3,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":2,"\u01fb":2,"\u00e5":2,"\u0103":2,"\u0101":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"a":2,"\u0178":1,"\u0176":1,"\u00dd":1,"\u1ef2":1,"Y":1,"\u1e84":1,"\u0174":1,"\u1e82":1,"\u1e80":1,"W":1,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":2,"\u01fa":2,"\u00c5":2,"\u0102":2,"\u0100":2,"\u00c4":2,"\u00c3":2,"\u00c2":2,"\u00c1":2,"\u00c0":2,"A":2}},"\u0179":{"d":"94,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm155,-25v8,0,9,25,0,25r-134,0v-18,0,-10,-32,-3,-38r105,-164r-107,-1v-5,-2,-6,-24,3,-24r127,0v17,-1,10,32,2,38r-104,164r111,0","w":168,"k":{"-":8,"\u201d":-8,"\u2019":-8,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"\u1e85":7,"\u0175":7,"\u1e83":7,"\u1e81":7,"w":7,"v":8,"q":3,"\u0153":5,"\u01ff":5,"\u00f8":5,"\u0151":5,"\u014f":5,"\u014d":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"o":5,"\u0135":-7,"\u012d":-6,"\u012b":-12,"\u00ef":-10,"\u0129":-18,"\u00ee":-7,"\u00ec":-3,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":2,"\u01fb":2,"\u00e5":2,"\u0103":2,"\u0101":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"a":2,"\u0178":1,"\u0176":1,"\u00dd":1,"\u1ef2":1,"Y":1,"\u1e84":1,"\u0174":1,"\u1e82":1,"\u1e80":1,"W":1,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":2,"\u01fa":2,"\u00c5":2,"\u0102":2,"\u0100":2,"\u00c4":2,"\u00c3":2,"\u00c2":2,"\u00c1":2,"\u00c0":2,"A":2}},"\u017d":{"d":"84,-263v14,-12,30,-45,58,-30v-19,17,-38,61,-75,43r-39,-43v25,-16,45,18,56,30xm155,-25v8,0,9,25,0,25r-134,0v-18,0,-10,-32,-3,-38r105,-164r-107,-1v-5,-2,-6,-24,3,-24r127,0v17,-1,10,32,2,38r-104,164r111,0","w":168,"k":{"-":8,"\u201d":-8,"\u2019":-8,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"\u1e85":7,"\u0175":7,"\u1e83":7,"\u1e81":7,"w":7,"v":8,"q":3,"\u0153":5,"\u01ff":5,"\u00f8":5,"\u0151":5,"\u014f":5,"\u014d":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"o":5,"\u0135":-7,"\u012d":-6,"\u012b":-12,"\u00ef":-10,"\u0129":-18,"\u00ee":-7,"\u00ec":-3,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":2,"\u01fb":2,"\u00e5":2,"\u0103":2,"\u0101":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"a":2,"\u0178":1,"\u0176":1,"\u00dd":1,"\u1ef2":1,"Y":1,"\u1e84":1,"\u0174":1,"\u1e82":1,"\u1e80":1,"W":1,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":2,"\u01fa":2,"\u00c5":2,"\u0102":2,"\u0100":2,"\u00c4":2,"\u00c3":2,"\u00c2":2,"\u00c1":2,"\u00c0":2,"A":2}},"\u017b":{"d":"85,-286v13,1,18,4,18,17v0,14,-4,17,-18,17v-14,0,-17,-2,-17,-16v-1,-13,4,-19,17,-18xm155,-25v8,0,9,25,0,25r-134,0v-18,0,-10,-32,-3,-38r105,-164r-107,-1v-5,-2,-6,-24,3,-24r127,0v17,-1,10,32,2,38r-104,164r111,0","w":168,"k":{"-":8,"\u201d":-8,"\u2019":-8,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"\u1e85":7,"\u0175":7,"\u1e83":7,"\u1e81":7,"w":7,"v":8,"q":3,"\u0153":5,"\u01ff":5,"\u00f8":5,"\u0151":5,"\u014f":5,"\u014d":5,"\u00f6":5,"\u00f5":5,"\u00f4":5,"\u00f3":5,"\u00f2":5,"o":5,"\u0135":-7,"\u012d":-6,"\u012b":-12,"\u00ef":-10,"\u0129":-18,"\u00ee":-7,"\u00ec":-3,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":2,"\u01fb":2,"\u00e5":2,"\u0103":2,"\u0101":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"a":2,"\u0178":1,"\u0176":1,"\u00dd":1,"\u1ef2":1,"Y":1,"\u1e84":1,"\u0174":1,"\u1e82":1,"\u1e80":1,"W":1,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0122":4,"\u0120":4,"\u011e":4,"\u011c":4,"G":4,"\u00c7":4,"\u010a":4,"\u010c":4,"\u0108":4,"\u0106":4,"C":4,"\u0104":2,"\u01fa":2,"\u00c5":2,"\u0102":2,"\u0100":2,"\u00c4":2,"\u00c3":2,"\u00c2":2,"\u00c1":2,"\u00c0":2,"A":2}},"a":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e0":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm44,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e1":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm132,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e2":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm132,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e3":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm124,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e4":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm56,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm118,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0101":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm41,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0103":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm86,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e5":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30xm87,-252v21,-1,34,12,34,31v-1,21,-13,32,-35,32v-22,0,-34,-10,-34,-31v1,-21,13,-31,35,-32xm87,-204v10,0,17,-6,16,-16v0,-11,-6,-17,-17,-17v-10,0,-15,6,-15,16v0,11,3,17,16,17","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u01fb":{"d":"86,-239v19,1,31,8,31,27v0,19,-14,29,-32,29v-19,0,-32,-9,-32,-28v0,-19,13,-28,33,-28xm85,-197v10,0,15,-6,15,-14v0,-9,-5,-15,-15,-15v-9,-1,-15,6,-15,14v0,9,4,15,15,15xm130,-283v-17,11,-33,42,-59,30v15,-12,30,-45,59,-30xm25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0105":{"d":"126,27v-13,30,52,1,27,34v-38,16,-79,-20,-43,-51v8,-6,13,-14,11,-30v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-13,-30,29,-40,57,-40v41,0,63,18,62,60r-1,114v-4,9,-16,14,-19,24xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30","w":172,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00e6":{"d":"254,-26v-1,48,-113,33,-123,0v-21,37,-118,44,-115,-19v2,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-24,0,-39,18,-56,14v-6,-34,32,-38,59,-38v28,0,43,10,53,27v10,-16,30,-27,55,-27v48,1,70,31,69,81v0,9,-4,11,-11,12r-104,0v-7,63,63,66,106,46xm232,-99v9,-55,-70,-65,-82,-19v-2,6,-4,13,-4,19r86,0xm46,-46v0,42,61,27,75,-1v-2,-8,-5,-19,-4,-29v-34,0,-71,-2,-71,30","w":278,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u01fd":{"d":"254,-26v-1,48,-113,33,-123,0v-21,37,-118,44,-115,-19v2,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-24,0,-39,18,-56,14v-6,-34,32,-38,59,-38v28,0,43,10,53,27v10,-16,30,-27,55,-27v48,1,70,31,69,81v0,9,-4,11,-11,12r-104,0v-7,63,63,66,106,46xm232,-99v9,-55,-70,-65,-82,-19v-2,6,-4,13,-4,19r86,0xm46,-46v0,42,61,27,75,-1v-2,-8,-5,-19,-4,-29v-34,0,-71,-2,-71,30xm186,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":278,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"b":{"d":"108,-171v47,0,64,37,64,85v0,52,-18,87,-68,89v-27,0,-37,-13,-51,-27v7,17,-10,36,-26,20r3,-239v5,-3,25,-4,26,4r0,95v14,-15,26,-27,52,-27xm101,-22v57,1,56,-124,2,-124v-24,0,-34,16,-47,31r0,63v13,15,22,30,45,30","k":{"\u201c":4,"\u2018":4,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"\u0219":2,"\u015f":2,"\u0161":2,"\u015d":2,"\u015b":2,"s":2,"f":3}},"c":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"\u0107":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61xm129,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"\u0109":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61xm130,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"\u010d":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61xm41,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"\u010b":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61xm86,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"\u00e7":{"d":"90,-22v24,2,35,-24,49,-17v8,31,-19,38,-43,42v16,22,16,65,-23,61v-12,-2,-30,2,-30,-12v-5,-25,54,8,35,-32r-8,-18v-37,-8,-54,-38,-54,-84v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61","w":152,"k":{"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u00e6":3,"\u01fb":3,"\u00e5":3,"\u0103":3,"\u0101":3,"\u00e4":3,"\u00e3":3,"\u00e2":3,"\u00e1":3,"\u00e0":3,"a":3}},"d":{"d":"133,-239v2,-8,29,-7,29,0r-2,239v-8,-1,-23,5,-23,-4r0,-21v-14,15,-30,28,-56,28v-48,-1,-60,-38,-64,-85v-7,-76,72,-115,116,-65r0,-92xm86,-21v24,0,34,-16,47,-31r0,-64v-14,-15,-23,-30,-45,-30v-55,0,-57,125,-2,125"},"\u010f":{"d":"133,-239v2,-8,29,-7,29,0r-2,239v-8,-1,-23,5,-23,-4r0,-21v-14,15,-30,28,-56,28v-48,-1,-60,-38,-64,-85v-7,-76,72,-115,116,-65r0,-92xm86,-21v24,0,34,-16,47,-31r0,-64v-14,-15,-23,-30,-45,-30v-55,0,-57,125,-2,125xm198,-184v-1,5,-20,6,-21,1v7,-20,11,-45,21,-61v8,0,25,-5,22,5","w":204,"k":{"\u00fe":-5,"\u0140":-5,"\u013c":-5,"\u013e":-5,"\u013a":-5,"l":-5,"\u0137":-5,"k":-5,"h":-5,"b":-5}},"\u0111":{"d":"162,-217v18,-5,42,6,24,23r-24,0r-2,194v-8,-1,-23,5,-23,-4r0,-21v-14,15,-30,28,-56,28v-48,-1,-64,-37,-64,-85v0,-51,19,-88,68,-88v22,0,35,11,48,24r0,-48v-20,1,-64,4,-43,-23r43,0v-3,-18,0,-34,26,-26v7,2,2,17,3,26xm86,-21v24,0,34,-16,47,-31r0,-63v-14,-16,-23,-30,-46,-30v-55,0,-55,124,-1,124","w":198},"\u00f0":{"d":"17,-82v-6,-72,64,-116,112,-68v-6,-20,-16,-37,-29,-51v-17,4,-32,10,-51,13v-5,-1,-5,-21,3,-21r33,-9v-5,-8,-19,-15,-19,-25v24,-6,42,4,49,18v16,-4,30,-10,48,-12v5,2,5,22,-4,21r-30,8v49,48,61,211,-43,211v-52,0,-65,-36,-69,-85xm87,-21v46,0,49,-46,48,-95v-14,-13,-24,-30,-47,-30v-56,0,-57,125,-1,125"},"e":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u00e8":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm49,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u00e9":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm136,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u00ea":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm136,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u011b":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm46,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u00eb":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm60,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm122,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u0113":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm45,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u0115":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm89,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u0117":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm92,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"\u0119":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v12,35,-28,38,-33,65v-4,21,48,-4,34,27v-37,18,-86,-16,-49,-49r10,-10v-62,11,-102,-22,-99,-84v2,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0","w":179,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"f":{"d":"34,-167v-10,-61,35,-97,78,-70v2,6,3,17,-2,20v-32,-15,-54,7,-46,50v15,3,41,-9,41,12v0,20,-25,9,-41,12v-2,46,3,101,-3,143v-10,0,-24,4,-27,-4r0,-139v-18,6,-38,-8,-22,-24r22,0","w":109,"k":{"\u00ae":-4,")":-5,"-":10,"\u201d":-19,"\u201c":-4,"\u2019":-19,"\u2018":-4,".":24,",":22,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0219":5,"\u015f":5,"\u0161":5,"\u015d":5,"\u015b":5,"s":5,"q":9,"\u0153":8,"\u01ff":8,"\u00f8":8,"\u0151":8,"\u014f":8,"\u014d":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"o":8,"\u0123":11,"\u0121":11,"\u011f":11,"\u011d":11,"g":11,"f":4,"\u0119":9,"\u0117":9,"\u0115":9,"\u0113":9,"\u00eb":9,"\u011b":9,"\u00ea":9,"\u00e9":9,"\u00e8":9,"e":9,"d":9,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"g":{"d":"142,-114v3,49,-56,70,-94,48v-13,10,-6,31,14,31v45,0,95,0,95,45v0,40,-34,54,-77,54v-38,-1,-71,-8,-71,-42v0,-20,11,-31,23,-40v-25,-9,-18,-48,-1,-60v-34,-44,9,-110,74,-89v18,6,54,-11,54,12v0,16,-16,10,-29,11v7,7,12,17,12,30xm80,-79v22,-1,33,-13,34,-35v0,-21,-13,-35,-34,-34v-22,1,-33,14,-34,35v-1,20,13,35,34,34xm38,19v0,35,92,32,90,-7v-2,-29,-43,-21,-72,-23v-10,7,-18,14,-18,30","w":169,"k":{"\/":-13,"\u201d":-15,"\u201c":-2,"\u2019":-15,"\u2018":-2,",":-4,"\u0163":5,"\u0165":5,"t":5,"q":3,"\u0153":2,"\u01ff":2,"\u00f8":2,"\u0151":2,"\u014f":2,"\u014d":2,"\u00f6":2,"\u00f5":2,"\u00f4":2,"\u00f3":2,"\u00f2":2,"o":2,"\u0123":-3,"\u0121":-3,"\u011f":-3,"\u011d":-3,"g":-3,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u011d":{"d":"142,-114v3,49,-56,70,-94,48v-13,10,-6,31,14,31v45,0,95,0,95,45v0,40,-34,54,-77,54v-38,-1,-71,-8,-71,-42v0,-20,11,-31,23,-40v-25,-9,-18,-48,-1,-60v-34,-44,9,-110,74,-89v18,6,54,-11,54,12v0,16,-16,10,-29,11v7,7,12,17,12,30xm80,-79v22,-1,33,-13,34,-35v0,-21,-13,-35,-34,-34v-22,1,-33,14,-34,35v-1,20,13,35,34,34xm38,19v0,35,92,32,90,-7v-2,-29,-43,-21,-72,-23v-10,7,-18,14,-18,30xm130,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":169,"k":{"\/":-13,"\u201d":-15,"\u201c":-2,"\u2019":-15,"\u2018":-2,",":-4,"\u0163":5,"\u0165":5,"t":5,"q":3,"\u0153":2,"\u01ff":2,"\u00f8":2,"\u0151":2,"\u014f":2,"\u014d":2,"\u00f6":2,"\u00f5":2,"\u00f4":2,"\u00f3":2,"\u00f2":2,"o":2,"\u0123":-3,"\u0121":-3,"\u011f":-3,"\u011d":-3,"g":-3,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u011f":{"d":"142,-114v3,49,-56,70,-94,48v-13,10,-6,31,14,31v45,0,95,0,95,45v0,40,-34,54,-77,54v-38,-1,-71,-8,-71,-42v0,-20,11,-31,23,-40v-25,-9,-18,-48,-1,-60v-34,-44,9,-110,74,-89v18,6,54,-11,54,12v0,16,-16,10,-29,11v7,7,12,17,12,30xm80,-79v22,-1,33,-13,34,-35v0,-21,-13,-35,-34,-34v-22,1,-33,14,-34,35v-1,20,13,35,34,34xm38,19v0,35,92,32,90,-7v-2,-29,-43,-21,-72,-23v-10,7,-18,14,-18,30xm84,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":169,"k":{"\/":-13,"\u201d":-15,"\u201c":-2,"\u2019":-15,"\u2018":-2,",":-4,"\u0163":5,"\u0165":5,"t":5,"q":3,"\u0153":2,"\u01ff":2,"\u00f8":2,"\u0151":2,"\u014f":2,"\u014d":2,"\u00f6":2,"\u00f5":2,"\u00f4":2,"\u00f3":2,"\u00f2":2,"o":2,"\u0123":-3,"\u0121":-3,"\u011f":-3,"\u011d":-3,"g":-3,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u0121":{"d":"142,-114v3,49,-56,70,-94,48v-13,10,-6,31,14,31v45,0,95,0,95,45v0,40,-34,54,-77,54v-38,-1,-71,-8,-71,-42v0,-20,11,-31,23,-40v-25,-9,-18,-48,-1,-60v-34,-44,9,-110,74,-89v18,6,54,-11,54,12v0,16,-16,10,-29,11v7,7,12,17,12,30xm80,-79v22,-1,33,-13,34,-35v0,-21,-13,-35,-34,-34v-22,1,-33,14,-34,35v-1,20,13,35,34,34xm38,19v0,35,92,32,90,-7v-2,-29,-43,-21,-72,-23v-10,7,-18,14,-18,30xm86,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":169,"k":{"\/":-13,"\u201d":-15,"\u201c":-2,"\u2019":-15,"\u2018":-2,",":-4,"\u0163":5,"\u0165":5,"t":5,"q":3,"\u0153":2,"\u01ff":2,"\u00f8":2,"\u0151":2,"\u014f":2,"\u014d":2,"\u00f6":2,"\u00f5":2,"\u00f4":2,"\u00f3":2,"\u00f2":2,"o":2,"\u0123":-3,"\u0121":-3,"\u011f":-3,"\u011d":-3,"g":-3,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u0123":{"d":"142,-114v3,49,-56,70,-94,48v-13,10,-6,31,14,31v45,0,95,0,95,45v0,40,-34,54,-77,54v-38,-1,-71,-8,-71,-42v0,-20,11,-31,23,-40v-25,-9,-18,-48,-1,-60v-34,-44,9,-110,74,-89v18,6,54,-11,54,12v0,16,-16,10,-29,11v7,7,12,17,12,30xm80,-79v22,-1,33,-13,34,-35v0,-21,-13,-35,-34,-34v-22,1,-33,14,-34,35v-1,20,13,35,34,34xm38,19v0,35,92,32,90,-7v-2,-29,-43,-21,-72,-23v-10,7,-18,14,-18,30xm67,-192v15,-16,19,-62,52,-47v-8,20,-19,65,-52,47","w":169,"k":{"\/":-13,"\u201d":-15,"\u201c":-2,"\u2019":-15,"\u2018":-2,",":-4,"\u0163":5,"\u0165":5,"t":5,"q":3,"\u0153":2,"\u01ff":2,"\u00f8":2,"\u0151":2,"\u014f":2,"\u014d":2,"\u00f6":2,"\u00f5":2,"\u00f4":2,"\u00f3":2,"\u00f2":2,"o":2,"\u0123":-3,"\u0121":-3,"\u011f":-3,"\u011d":-3,"g":-3,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":2,"\u010b":2,"\u010d":2,"\u0109":2,"\u0107":2,"c":2,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"h":{"d":"56,-144v31,-45,116,-29,107,43v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r3,-239v5,-3,25,-4,26,4r0,95","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0125":{"d":"56,-144v31,-45,116,-29,107,43v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r3,-223v9,1,26,-5,26,5r0,78xm44,-279v-14,12,-31,45,-58,30v19,-17,38,-61,75,-43r39,43v-27,15,-44,-18,-56,-30","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0127":{"d":"109,-168v75,-5,59,103,54,168v-9,-1,-24,5,-26,-4v-6,-52,20,-139,-34,-139v-21,0,-32,15,-44,30v-2,36,3,80,-3,113v-8,-1,-26,6,-26,-4r0,-190v-17,2,-41,2,-28,-22v7,-2,19,0,28,-1v-5,-19,4,-38,28,-25v2,6,0,17,1,25v19,-1,62,-5,42,23r-42,0r0,52v13,-15,27,-25,50,-26","w":191,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"i":{"d":"53,-167v7,46,3,119,0,167v-9,-1,-23,5,-26,-4r3,-163v7,0,17,-2,23,0xm41,-233v14,0,18,3,18,17v0,15,-4,18,-18,18v-14,0,-18,-3,-18,-18v0,-14,4,-17,18,-17","w":82,"k":{"\u201d":-4,"\u2019":-4}},"\u00ec":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm-1,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":82},"\u00ed":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm85,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":82,"k":{"\u201d":-13,"\u201c":-1,"\u2019":-13,"\u2018":-1}},"\u00ee":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm87,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":82,"k":{"\u201d":-14,"\u201c":-7,"\u2019":-14,"\u2018":-7,"\u00fe":-2,"\u0140":-2,"\u013c":-2,"\u013e":-2,"\u013a":-2,"l":-2,"\u0137":-2,"k":-2,"h":-2,"b":-2}},"\u0129":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm80,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","w":82,"k":{"\u201d":-19,"\u201c":-4,"\u2019":-19,"\u2018":-4,"\u00fe":-5,"\u0140":-5,"\u013c":-5,"\u013e":-5,"\u013a":-5,"l":-5,"\u0137":-5,"k":-5,"h":-5,"b":-5}},"\u00ef":{"d":"14,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-16,-4,-16,-16v0,-12,3,-17,16,-17xm69,-230v13,0,16,4,16,16v0,12,-4,17,-16,17v-12,0,-16,-3,-16,-16v0,-13,2,-17,16,-17xm27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159","w":82,"k":{"\u201d":-9,"\u201c":-7,"\u2019":-9,"\u2018":-7,"\u00fe":-2,"\u0140":-2,"\u013c":-2,"\u013e":-2,"\u013a":-2,"l":-2,"\u0137":-2,"k":-2,"h":-2,"b":-2}},"\u012b":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm-5,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":82,"k":{"\u201d":-9,"\u201c":-7,"\u2019":-9,"\u2018":-7,"\u00fe":-2,"\u0140":-2,"\u013c":-2,"\u013e":-2,"\u013a":-2,"l":-2,"\u0137":-2,"k":-2,"h":-2,"b":-2}},"\u012d":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159xm41,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":82,"k":{"\u201d":-7,"\u2019":-7}},"\u012f":{"d":"68,51v-8,26,-73,16,-65,-19v4,-15,16,-22,24,-32r3,-167v9,1,23,-5,26,4r-1,164v-6,12,-23,17,-24,33v-1,19,35,-3,37,17xm41,-233v14,0,18,3,18,17v0,15,-4,18,-18,18v-14,0,-18,-3,-18,-18v0,-14,4,-17,18,-17","w":82},"\u0131":{"d":"27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159","w":82},"\u0133":{"d":"53,-167v7,46,3,119,0,167v-9,-1,-23,5,-26,-4r3,-163v7,0,17,-2,23,0xm41,-233v14,0,18,3,18,17v0,15,-4,18,-18,18v-14,0,-18,-3,-18,-18v0,-14,4,-17,18,-17xm77,41v20,-4,43,-4,36,-39r3,-169v9,1,24,-5,26,4r0,166v2,42,-16,65,-56,60v-13,2,-12,-13,-9,-22xm128,-233v15,0,17,3,18,17v0,15,-5,18,-19,18v-14,0,-16,-4,-17,-18v-1,-14,4,-17,18,-17","w":168},"j":{"d":"-6,41v20,-4,43,-4,36,-39r3,-169v9,1,24,-5,26,4r0,166v2,42,-16,65,-56,60v-13,2,-12,-13,-9,-22xm45,-233v15,0,17,3,18,17v0,15,-5,18,-19,18v-14,0,-16,-4,-17,-18v-1,-14,4,-17,18,-17","w":86,"k":{"\u201d":-4,"\u2019":-4}},"\u0135":{"d":"-6,41v20,-4,43,-4,36,-39r3,-169v9,1,24,-5,26,4r0,166v2,42,-16,65,-56,60v-13,2,-12,-13,-9,-22xm88,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":86},"k":{"d":"116,-162v3,-8,32,-10,34,-1v-15,28,-43,44,-62,67r69,91v-1,10,-31,8,-34,0r-67,-87v-2,30,3,66,-3,92v-9,-1,-23,5,-26,-4r3,-239v5,-3,25,-4,26,4r0,143","w":163,"k":{"-":14,"u":5,"\u0163":2,"\u0165":2,"t":2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":10,"\u0153":12,"\u01ff":12,"\u00f8":12,"\u0151":12,"\u014f":12,"\u014d":12,"\u00f6":12,"\u00f5":12,"\u00f4":12,"\u00f3":12,"\u00f2":12,"o":12,"\u0119":12,"\u0117":12,"\u0115":12,"\u0113":12,"\u00eb":12,"\u011b":12,"\u00ea":12,"\u00e9":12,"\u00e8":12,"e":12,"d":10,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u0137":{"d":"116,-162v3,-8,32,-10,34,-1v-15,28,-43,44,-62,67r69,91v-1,10,-31,8,-34,0r-67,-87v-2,30,3,66,-3,92v-9,-1,-23,5,-26,-4r3,-239v5,-3,25,-4,26,4r0,143xm83,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":163,"k":{"-":14,"u":5,"\u0163":2,"\u0165":2,"t":2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":10,"\u0153":12,"\u01ff":12,"\u00f8":12,"\u0151":12,"\u014f":12,"\u014d":12,"\u00f6":12,"\u00f5":12,"\u00f4":12,"\u00f3":12,"\u00f2":12,"o":12,"\u0119":12,"\u0117":12,"\u0115":12,"\u0113":12,"\u00eb":12,"\u011b":12,"\u00ea":12,"\u00e9":12,"\u00e8":12,"e":12,"d":10,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u0138":{"d":"119,-162v3,-9,30,-9,33,-1v-17,29,-43,48,-64,73r68,85v-2,10,-31,8,-34,0r-66,-81v-2,28,3,62,-3,86v-9,-1,-23,5,-26,-4r1,-161v3,-5,26,-6,28,2r0,73","w":163,"k":{"-":14,"u":5,"\u0163":2,"\u0165":2,"t":2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":10,"\u0153":12,"\u01ff":12,"\u00f8":12,"\u0151":12,"\u014f":12,"\u014d":12,"\u00f6":12,"\u00f5":12,"\u00f4":12,"\u00f3":12,"\u00f2":12,"o":12,"\u0119":12,"\u0117":12,"\u0115":12,"\u0113":12,"\u00eb":12,"\u011b":12,"\u00ea":12,"\u00e9":12,"\u00e8":12,"e":12,"d":10,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"l":{"d":"53,-243v5,73,3,169,0,243v-9,-1,-23,5,-26,-4r3,-239v4,-3,19,-3,23,0","w":82},"\u013a":{"d":"52,-261v-8,2,-28,2,-19,-6v18,-15,22,-43,54,-44v8,-2,16,2,11,8xm53,-243v5,73,3,169,0,243v-9,-1,-23,5,-26,-4r3,-239v4,-3,19,-3,23,0","w":82},"\u013e":{"d":"53,-243v5,73,3,169,0,243v-9,-1,-23,5,-26,-4r3,-239v4,-3,19,-3,23,0xm88,-184v-1,5,-20,6,-21,1v7,-20,11,-45,21,-61v8,0,25,-5,22,5","w":94},"\u013c":{"d":"53,-243v5,73,3,169,0,243v-9,-1,-23,5,-26,-4r3,-239v4,-3,19,-3,23,0xm37,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":82},"\u0142":{"d":"83,-178v6,23,-10,30,-24,37v-2,46,3,99,-3,141v-9,-1,-23,5,-26,-4r0,-119v-8,4,-25,24,-25,2v0,-17,15,-19,25,-27v2,-30,-3,-68,3,-95v5,-3,25,-4,26,4r0,73v8,-3,15,-14,24,-12","w":89},"\u0140":{"d":"53,-243v5,73,3,169,0,243v-9,-1,-23,5,-26,-4r3,-239v4,-3,19,-3,23,0xm107,-123v14,0,18,5,18,20v0,16,-4,21,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":134},"m":{"d":"207,-171v73,-4,57,106,52,171v-9,-1,-24,5,-27,-4v-6,-51,21,-141,-31,-141v-20,0,-30,15,-42,30v-2,37,3,82,-3,115v-9,-1,-24,5,-26,-4v-6,-51,20,-141,-32,-141v-20,0,-30,15,-42,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21v15,-15,27,-29,51,-29v26,0,42,12,49,32v14,-16,29,-31,54,-32","w":287,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"n":{"d":"53,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0144":{"d":"53,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm144,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0148":{"d":"53,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm55,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u00f1":{"d":"53,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm133,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0146":{"d":"53,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm93,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u0149":{"d":"72,-142v31,-47,119,-34,110,41v-4,32,3,72,-3,101v-9,0,-25,5,-26,-4v-7,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm16,-246v33,-8,28,34,14,49v-13,14,-18,49,-48,39v9,-24,27,-38,24,-74v0,-9,4,-12,10,-14","w":208,"k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"\u014b":{"d":"53,-142v31,-47,119,-34,110,41v-8,66,22,166,-49,165v-20,5,-33,-12,-21,-27v29,9,44,-6,41,-41v-6,-52,20,-141,-33,-141v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21","k":{"\u201c":7,"\u2018":7,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":3,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":6,"\u0163":3,"\u0165":3,"t":3,"f":2}},"o":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f2":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm52,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f3":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm141,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f4":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm140,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f5":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm133,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f6":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm64,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm126,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u014d":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm49,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u014f":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm94,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u0151":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm84,-238v4,-8,39,-8,29,4v-19,14,-26,53,-60,44v9,-18,21,-32,31,-48xm145,-239v5,-6,30,-7,31,1v-22,15,-26,53,-63,49v4,-18,23,-33,32,-50","k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u00f8":{"d":"16,-82v-2,-64,44,-101,107,-85v6,-14,11,-37,35,-27v0,14,-10,24,-14,36v20,14,31,39,31,73v1,63,-43,99,-107,85v-7,13,-12,37,-36,27v1,-14,11,-24,15,-36v-21,-14,-30,-39,-31,-73xm78,-23v62,24,88,-63,53,-109xm113,-145v-64,-21,-87,66,-53,110","w":190,"k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u01ff":{"d":"16,-82v-2,-64,44,-101,107,-85v6,-14,11,-37,35,-27v0,14,-10,24,-14,36v20,14,31,39,31,73v1,63,-43,99,-107,85v-7,13,-12,37,-36,27v1,-14,11,-24,15,-36v-21,-14,-30,-39,-31,-73xm78,-23v62,24,88,-63,53,-109xm113,-145v-64,-21,-87,66,-53,110xm129,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":190,"k":{",":7,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":1,"\u0175":1,"\u1e83":1,"\u1e81":1,"w":1,"v":2}},"\u0153":{"d":"282,-14v-28,28,-113,22,-125,-17v-11,21,-32,34,-64,34v-54,0,-77,-33,-77,-85v0,-55,27,-88,81,-89v31,0,50,13,62,34v11,-20,31,-34,60,-34v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-9,64,63,66,105,46v5,2,2,11,3,18xm260,-99v8,-53,-70,-66,-83,-19v-2,6,-3,13,-3,19r86,0xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63","w":305,"k":{"\u201c":3,"\u2018":3,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":5,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"f":3}},"p":{"d":"109,-171v47,0,63,37,63,85v0,52,-19,87,-68,89v-25,1,-35,-12,-48,-24v-2,27,3,61,-3,84v-9,-1,-26,5,-26,-5r0,-223v3,-4,25,-7,25,2r0,22v15,-15,29,-30,57,-30xm101,-22v56,0,57,-124,2,-124v-24,0,-34,16,-47,31r0,63v13,15,22,30,45,30","k":{"\u201c":4,"\u2018":4,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"\u0219":2,"\u015f":2,"\u0161":2,"\u015d":2,"\u015b":2,"s":2,"f":3}},"\u00fe":{"d":"108,-171v47,0,64,37,64,85v0,52,-18,88,-68,89v-25,1,-35,-12,-48,-24v-2,27,3,61,-3,84v-9,-1,-26,5,-26,-5r3,-301v5,-3,25,-4,26,4r0,95v14,-13,27,-27,52,-27xm101,-22v57,1,56,-124,1,-124v-23,0,-33,16,-46,31r0,63v13,15,22,30,45,30","k":{"\u201c":4,"\u2018":4,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":2,"\u0177":2,"\u00fd":2,"\u1ef3":2,"y":2,"x":7,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":2,"\u0163":2,"\u0165":2,"t":2,"\u0219":2,"\u015f":2,"\u0161":2,"\u015d":2,"\u015b":2,"s":2,"f":3}},"q":{"d":"85,-171v26,0,38,14,52,28v-7,-17,9,-36,25,-20r0,221v2,9,-18,6,-26,5v-8,-21,-1,-59,-3,-86v-13,15,-25,26,-52,26v-48,0,-63,-38,-64,-85v0,-52,20,-89,68,-89xm86,-21v24,0,34,-16,47,-31r0,-64v-14,-15,-23,-30,-45,-30v-55,0,-57,125,-2,125","k":{"\u0123":-2,"\u0121":-2,"\u011f":-2,"\u011d":-2,"g":-2}},"r":{"d":"53,-140v10,-21,45,-43,66,-22v-1,8,2,23,-4,23v-29,-11,-49,9,-59,31v-2,35,3,77,-3,108v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,23","w":125,"k":{"-":11,"\u201d":-16,"\u201c":-5,"\u2019":-16,"\u2018":-5,".":36,",":31,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-2,"\u0175":-2,"\u1e83":-2,"\u1e81":-2,"w":-2,"v":-3,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":5,"\u0153":6,"\u01ff":6,"\u00f8":6,"\u0151":6,"\u014f":6,"\u014d":6,"\u00f6":6,"\u00f5":6,"\u00f4":6,"\u00f3":6,"\u00f2":6,"o":6,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u0155":{"d":"53,-140v10,-21,45,-43,66,-22v-1,8,2,23,-4,23v-29,-11,-49,9,-59,31v-2,35,3,77,-3,108v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,23xm115,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":125,"k":{"-":11,"\u201d":-16,"\u201c":-5,"\u2019":-16,"\u2018":-5,".":36,",":31,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-2,"\u0175":-2,"\u1e83":-2,"\u1e81":-2,"w":-2,"v":-3,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":5,"\u0153":6,"\u01ff":6,"\u00f8":6,"\u0151":6,"\u014f":6,"\u014d":6,"\u00f6":6,"\u00f5":6,"\u00f4":6,"\u00f3":6,"\u00f2":6,"o":6,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u0159":{"d":"53,-140v10,-21,45,-43,66,-22v-1,8,2,23,-4,23v-29,-11,-49,9,-59,31v-2,35,3,77,-3,108v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,23xm25,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":125,"k":{"-":11,"\u201d":-16,"\u201c":-5,"\u2019":-16,"\u2018":-5,".":36,",":31,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-2,"\u0175":-2,"\u1e83":-2,"\u1e81":-2,"w":-2,"v":-3,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":5,"\u0153":6,"\u01ff":6,"\u00f8":6,"\u0151":6,"\u014f":6,"\u014d":6,"\u00f6":6,"\u00f5":6,"\u00f4":6,"\u00f3":6,"\u00f2":6,"o":6,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"\u0157":{"d":"53,-140v10,-21,45,-43,66,-22v-1,8,2,23,-4,23v-29,-11,-49,9,-59,31v-2,35,3,77,-3,108v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,23xm43,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":125,"k":{"-":11,"\u201d":-16,"\u201c":-5,"\u2019":-16,"\u2018":-5,".":36,",":31,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-2,"\u0175":-2,"\u1e83":-2,"\u1e81":-2,"w":-2,"v":-3,"\u0219":6,"\u015f":6,"\u0161":6,"\u015d":6,"\u015b":6,"s":6,"q":5,"\u0153":6,"\u01ff":6,"\u00f8":6,"\u0151":6,"\u014f":6,"\u014d":6,"\u00f6":6,"\u00f5":6,"\u00f4":6,"\u00f3":6,"\u00f2":6,"o":6,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"\u0119":5,"\u0117":5,"\u0115":5,"\u0113":5,"\u00eb":5,"\u011b":5,"\u00ea":5,"\u00e9":5,"\u00e8":5,"e":5,"d":5,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"s":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u015b":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16xm117,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u015d":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16xm116,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u0161":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16xm25,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u015f":{"d":"86,-93v49,4,53,90,-1,94v17,22,19,66,-22,63v-12,-2,-30,2,-30,-12v-5,-25,54,8,35,-32r-7,-17v-26,1,-60,-13,-42,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,16,-4,16v-19,-16,-82,-19,-65,22v8,11,24,15,37,21","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u0219":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16xm65,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":140,"k":{"\u201c":5,"\u2018":5,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":7,"\u0177":7,"\u00fd":7,"\u1ef3":7,"y":7,"x":4,"\u1e85":2,"\u0175":2,"\u1e83":2,"\u1e81":2,"w":2,"v":5,"\u0163":4,"\u0165":4,"t":4,"f":3}},"\u00df":{"d":"114,-128v8,39,64,33,64,81v0,46,-64,65,-92,37v0,-7,-4,-17,4,-19v16,12,61,15,58,-15v-5,-44,-80,-37,-60,-98v5,-15,20,-24,38,-27v9,-26,-3,-55,-32,-53v-28,1,-38,20,-38,48r-3,173v-5,3,-25,4,-26,-4r0,-168v0,-46,23,-73,68,-73v38,0,63,19,63,56v0,16,-1,39,-15,40v-16,2,-28,7,-29,22","k":{"\u201c":8,"\u2018":8,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"x":5,"\u1e85":7,"\u0175":7,"\u1e83":7,"\u1e81":7,"w":7,"v":5,"u":3,"\u0163":5,"\u0165":5,"t":5,"f":5}},"\u017f":{"d":"27,-184v-9,-48,45,-82,75,-50v3,19,-9,15,-23,12v-21,0,-23,17,-23,38r-3,184v-9,-1,-23,5,-26,-4r0,-180","w":87},"t":{"d":"63,-55v-5,35,25,33,45,30v5,22,-8,28,-28,28v-67,0,-41,-86,-46,-146v-19,4,-37,-3,-25,-24r25,0v-3,-22,-2,-59,29,-38r0,38r43,0v4,4,6,24,-3,24r-40,0r0,88","w":120,"k":{"-":11,"\u201d":-12,"\u201c":-2,"\u2019":-12,"\u2018":-2,"\u0163":5,"\u0165":5,"t":5,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u0165":{"d":"63,-55v-5,35,25,33,45,30v5,22,-8,28,-28,28v-67,0,-41,-86,-46,-146v-19,4,-37,-3,-25,-24r25,0v-3,-22,-2,-59,29,-38r0,38r43,0v4,4,6,24,-3,24r-40,0r0,88xm105,-198v-1,5,-20,6,-21,1v7,-20,11,-45,21,-61v8,0,25,-5,22,5","w":124},"\u0163":{"d":"63,-55v-5,35,25,33,45,30v5,22,-8,28,-28,28v-67,0,-41,-86,-46,-146v-19,4,-37,-3,-25,-24r25,0v-3,-22,-2,-59,29,-38r0,38r43,0v4,4,6,24,-3,24r-40,0r0,88xm68,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":120,"k":{"-":11,"\u201d":-12,"\u201c":-2,"\u2019":-12,"\u2018":-2,"\u0163":5,"\u0165":5,"t":5,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u021b":{"d":"63,-55v-5,35,25,33,45,30v5,22,-8,28,-28,28v-67,0,-41,-86,-46,-146v-19,4,-37,-3,-25,-24r25,0v-3,-22,-2,-59,29,-38r0,38r43,0v4,4,6,24,-3,24r-40,0r0,88xm68,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":120},"\u0167":{"d":"109,-6v-30,23,-84,3,-74,-44r0,-27v-17,5,-40,-6,-23,-23r23,0r0,-44v-17,5,-40,-6,-23,-23r23,0v-3,-22,-2,-59,29,-38r0,38r43,0v16,31,-22,22,-43,23r0,44v19,-3,50,1,31,23r-31,0v1,26,-5,58,22,56v10,1,20,-11,24,0v0,5,1,12,-1,15","w":123},"u":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111"},"\u00f9":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm50,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42"},"\u00fa":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm141,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5"},"\u00fb":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm140,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40"},"\u0169":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm133,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18"},"\u00fc":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm64,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm126,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17"},"\u016b":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm49,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18"},"\u016d":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm94,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31"},"\u016f":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm95,-252v21,-1,34,12,34,31v-1,21,-13,32,-35,32v-22,0,-34,-10,-34,-31v1,-21,13,-31,35,-32xm95,-204v10,0,17,-6,16,-16v0,-11,-6,-17,-17,-17v-10,0,-15,6,-15,16v0,11,3,17,16,17"},"\u0171":{"d":"133,-163v2,-8,29,-7,29,0r-2,163v-9,0,-22,4,-24,-4r0,-21v-15,15,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r0,-111xm83,-238v4,-8,39,-8,29,4v-19,14,-26,53,-60,44v9,-18,21,-32,31,-48xm144,-239v5,-6,30,-7,31,1v-22,15,-26,53,-63,49v4,-18,23,-33,32,-50"},"\u0173":{"d":"141,27v-12,31,52,0,27,34v-38,17,-79,-22,-42,-52v9,-4,15,-20,10,-34v-14,16,-29,27,-53,28v-77,4,-55,-99,-56,-168v3,-5,26,-6,28,2v6,52,-21,141,34,141v21,0,31,-15,44,-30r1,-113v3,-5,27,-6,28,2r-2,168v-5,8,-15,13,-19,22"},"v":{"d":"82,-30v18,-44,29,-96,49,-137v12,-1,30,-5,24,11r-54,151v-3,9,-35,10,-39,0r-55,-160v4,-5,29,-6,30,3","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":30,",":28,"\u017c":5,"\u017e":5,"\u017a":5,"z":5,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-2,"\u0175":-2,"\u1e83":-2,"\u1e81":-2,"w":-2,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":2,"\u015f":2,"\u0161":2,"\u015d":2,"\u015b":2,"s":2,"q":4,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"w":{"d":"219,-162v4,-11,38,-9,28,6r-47,151v-3,9,-34,10,-39,0r-34,-117r-31,117v-2,9,-34,9,-39,0r-47,-160v4,-5,28,-5,30,3r38,132r39,-137v9,0,23,-5,26,4r38,133","w":257,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":23,",":31,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":3,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":-1,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u1e81":{"d":"219,-162v4,-11,38,-9,28,6r-47,151v-3,9,-34,10,-39,0r-34,-117r-31,117v-2,9,-34,9,-39,0r-47,-160v4,-5,28,-5,30,3r38,132r39,-137v9,0,23,-5,26,4r38,133xm83,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":257,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":23,",":31,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":3,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":-1,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u1e83":{"d":"219,-162v4,-11,38,-9,28,6r-47,151v-3,9,-34,10,-39,0r-34,-117r-31,117v-2,9,-34,9,-39,0r-47,-160v4,-5,28,-5,30,3r38,132r39,-137v9,0,23,-5,26,4r38,133xm175,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":257,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":23,",":31,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":3,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":-1,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u0175":{"d":"219,-162v4,-11,38,-9,28,6r-47,151v-3,9,-34,10,-39,0r-34,-117r-31,117v-2,9,-34,9,-39,0r-47,-160v4,-5,28,-5,30,3r38,132r39,-137v9,0,23,-5,26,4r38,133xm174,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":257,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":23,",":31,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":3,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":-1,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"\u1e85":{"d":"219,-162v4,-11,38,-9,28,6r-47,151v-3,9,-34,10,-39,0r-34,-117r-31,117v-2,9,-34,9,-39,0r-47,-160v4,-5,28,-5,30,3r38,132r39,-137v9,0,23,-5,26,4r38,133xm98,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm160,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":257,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":23,",":31,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":3,"\u0153":3,"\u01ff":3,"\u00f8":3,"\u0151":3,"\u014f":3,"\u014d":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"o":3,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":-1,"\u0119":3,"\u0117":3,"\u0115":3,"\u0113":3,"\u00eb":3,"\u011b":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"e":3,"d":3,"\u00e7":4,"\u010b":4,"\u010d":4,"\u0109":4,"\u0107":4,"c":4,"\u00e6":4,"\u01fb":4,"\u00e5":4,"\u0103":4,"\u0101":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"a":4}},"x":{"d":"116,-163v3,-8,27,-7,30,-1v-14,28,-33,52,-48,78v16,28,36,52,50,82v-1,8,-29,8,-33,0r-38,-63v-14,22,-26,47,-42,67v0,0,-33,5,-26,-8r49,-77r-48,-78v3,-8,29,-8,33,0r36,58","w":155,"k":{"-":11,"\u201d":-9,"\u2019":-9,"u":4,"\u0163":-1,"\u0165":-1,"t":-1,"\u0219":2,"\u015f":2,"\u0161":2,"\u015d":2,"\u015b":2,"s":2,"q":8,"\u0153":10,"\u01ff":10,"\u00f8":10,"\u0151":10,"\u014f":10,"\u014d":10,"\u00f6":10,"\u00f5":10,"\u00f4":10,"\u00f3":10,"\u00f2":10,"o":10,"\u0119":9,"\u0117":9,"\u0115":9,"\u0113":9,"\u00eb":9,"\u011b":9,"\u00ea":9,"\u00e9":9,"\u00e8":9,"e":9,"d":8,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7}},"y":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":24,",":26,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"\u1ef3":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127xm37,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":24,",":26,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"\u00fd":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127xm129,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":24,",":26,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"\u0177":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127xm127,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":24,",":26,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"\u00ff":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127xm51,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm113,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":162,"k":{"-":8,"\u201d":-11,"\u201c":-3,"\u2019":-11,"\u2018":-3,".":24,",":26,"\u017c":3,"\u017e":3,"\u017a":3,"z":3,"\u00ff":-2,"\u0177":-2,"\u00fd":-2,"\u1ef3":-2,"y":-2,"\u1e85":-1,"\u0175":-1,"\u1e83":-1,"\u1e81":-1,"w":-1,"v":-2,"\u0163":-2,"\u0165":-2,"t":-2,"\u0219":3,"\u015f":3,"\u0161":3,"\u015d":3,"\u015b":3,"s":3,"q":4,"\u0153":4,"\u01ff":4,"\u00f8":4,"\u0151":4,"\u014f":4,"\u014d":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"o":4,"\u0123":5,"\u0121":5,"\u011f":5,"\u011d":5,"g":5,"f":-2,"\u0119":4,"\u0117":4,"\u0115":4,"\u0113":4,"\u00eb":4,"\u011b":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"e":4,"d":4,"\u00e7":5,"\u010b":5,"\u010d":5,"\u0109":5,"\u0107":5,"c":5,"\u00e6":5,"\u01fb":5,"\u00e5":5,"\u0103":5,"\u0101":5,"\u00e4":5,"\u00e3":5,"\u00e2":5,"\u00e1":5,"\u00e0":5,"a":5}},"z":{"d":"121,-24v10,-1,8,19,3,23v-31,3,-67,0,-100,1v-13,0,-9,-28,-2,-34r70,-109r-68,0v-8,-1,-8,-20,-3,-24r97,0v9,5,5,28,-1,34r-70,109r74,0","w":142,"k":{"\u201d":-5,"\u2019":-5,"\u00ff":3,"\u0177":3,"\u00fd":3,"\u1ef3":3,"y":3,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":3,"u":2,"\u0219":4,"\u015f":4,"\u0161":4,"\u015d":4,"\u015b":4,"s":4,"q":8,"\u0153":8,"\u01ff":8,"\u00f8":8,"\u0151":8,"\u014f":8,"\u014d":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"o":8,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":2,"\u0119":8,"\u0117":8,"\u0115":8,"\u0113":8,"\u00eb":8,"\u011b":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"e":8,"d":8,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u017a":{"d":"121,-24v10,-1,8,19,3,23v-31,3,-67,0,-100,1v-13,0,-9,-28,-2,-34r70,-109r-68,0v-8,-1,-8,-20,-3,-24r97,0v9,5,5,28,-1,34r-70,109r74,0xm115,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":142,"k":{"\u201d":-5,"\u2019":-5,"\u00ff":3,"\u0177":3,"\u00fd":3,"\u1ef3":3,"y":3,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":3,"u":2,"\u0219":4,"\u015f":4,"\u0161":4,"\u015d":4,"\u015b":4,"s":4,"q":8,"\u0153":8,"\u01ff":8,"\u00f8":8,"\u0151":8,"\u014f":8,"\u014d":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"o":8,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":2,"\u0119":8,"\u0117":8,"\u0115":8,"\u0113":8,"\u00eb":8,"\u011b":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"e":8,"d":8,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u017e":{"d":"121,-24v10,-1,8,19,3,23v-31,3,-67,0,-100,1v-13,0,-9,-28,-2,-34r70,-109r-68,0v-8,-1,-8,-20,-3,-24r97,0v9,5,5,28,-1,34r-70,109r74,0xm27,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":142,"k":{"\u201d":-5,"\u2019":-5,"\u00ff":3,"\u0177":3,"\u00fd":3,"\u1ef3":3,"y":3,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":3,"u":2,"\u0219":4,"\u015f":4,"\u0161":4,"\u015d":4,"\u015b":4,"s":4,"q":8,"\u0153":8,"\u01ff":8,"\u00f8":8,"\u0151":8,"\u014f":8,"\u014d":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"o":8,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":2,"\u0119":8,"\u0117":8,"\u0115":8,"\u0113":8,"\u00eb":8,"\u011b":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"e":8,"d":8,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u017c":{"d":"121,-24v10,-1,8,19,3,23v-31,3,-67,0,-100,1v-13,0,-9,-28,-2,-34r70,-109r-68,0v-8,-1,-8,-20,-3,-24r97,0v9,5,5,28,-1,34r-70,109r74,0xm73,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":142,"k":{"\u201d":-5,"\u2019":-5,"\u00ff":3,"\u0177":3,"\u00fd":3,"\u1ef3":3,"y":3,"\u1e85":4,"\u0175":4,"\u1e83":4,"\u1e81":4,"w":4,"v":3,"u":2,"\u0219":4,"\u015f":4,"\u0161":4,"\u015d":4,"\u015b":4,"s":4,"q":8,"\u0153":8,"\u01ff":8,"\u00f8":8,"\u0151":8,"\u014f":8,"\u014d":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"o":8,"\u0123":3,"\u0121":3,"\u011f":3,"\u011d":3,"g":3,"f":2,"\u0119":8,"\u0117":8,"\u0115":8,"\u0113":8,"\u00eb":8,"\u011b":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"e":8,"d":8,"\u00e7":8,"\u010b":8,"\u010d":8,"\u0109":8,"\u0107":8,"c":8,"\u00e6":6,"\u01fb":6,"\u00e5":6,"\u0103":6,"\u0101":6,"\u00e4":6,"\u00e3":6,"\u00e2":6,"\u00e1":6,"\u00e0":6,"a":6}},"\u00aa":{"d":"27,-214v21,-26,98,-23,91,27v-3,25,3,56,-2,77v-12,3,-22,1,-21,-13v-16,25,-77,21,-75,-19v2,-35,35,-38,72,-37v8,-39,-41,-33,-59,-19v-7,0,-6,-8,-6,-16xm113,-83v5,0,6,4,6,11v0,6,0,12,-6,11r-87,0v-9,0,-8,-22,0,-22r87,0xm77,-162v-30,-7,-42,35,-11,35v18,1,29,-12,26,-35r-15,0","w":144},"\u00ba":{"d":"77,-230v38,0,57,23,57,60v0,39,-20,63,-58,63v-39,0,-58,-21,-58,-61v0,-40,19,-62,59,-62xm121,-83v5,0,6,4,6,11v0,6,0,12,-6,11r-91,0v-6,1,-6,-5,-6,-11v0,-7,1,-11,6,-11r91,0xm76,-129v22,-1,29,-15,29,-39v0,-23,-7,-41,-29,-41v-23,0,-29,18,-30,40v0,24,7,40,30,40","w":152},"\u207f":{"d":"40,-213v20,-28,78,-20,72,25v-2,19,5,47,-3,61v-7,-1,-20,4,-21,-3v-4,-30,12,-80,-20,-80v-12,0,-17,9,-25,16v-3,22,14,83,-24,64r0,-94v1,-7,20,-7,21,0r0,11","w":130},"`":{"d":"25,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":104},"\u0300":{"d":"-109,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":0},"\u00b4":{"d":"82,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":105},"\u0301":{"d":"-52,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":0},"\u02c6":{"d":"116,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":142},"\u0302":{"d":"-36,-202v5,7,1,11,-8,10v-21,-2,-24,-25,-37,-37v-14,13,-14,40,-44,37v-5,-1,-4,-7,-1,-10v15,-16,27,-57,61,-40","w":0},"\u02c7":{"d":"26,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":142},"\u030c":{"d":"-126,-237v-5,-6,0,-10,8,-9v22,2,24,25,37,37v14,-13,14,-40,44,-37v6,1,5,6,1,9v-15,16,-26,58,-61,41","w":0},"\u0315":{"d":"44,-176v-1,5,-20,6,-21,1v7,-20,11,-45,21,-61v8,0,25,-5,22,5","w":89},"\u02dc":{"d":"119,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","w":162},"\u0303":{"d":"-43,-233v0,-7,22,-8,21,2v-1,22,-12,38,-34,38v-25,0,-29,-21,-50,-23v-13,-1,-11,12,-14,22v-7,0,-19,5,-19,-6v0,-23,11,-38,34,-38v24,0,30,19,49,23v9,-1,13,-7,13,-18","w":0},"\u00a8":{"d":"40,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm102,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":141},"\u0308":{"d":"-112,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm-50,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":0},"\u00af":{"d":"25,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":141},"\u02c9":{"d":"25,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":141},"\u0304":{"d":"-127,-225v24,-5,68,-3,92,0v2,6,4,20,-4,20v-28,0,-64,4,-88,-2v-2,-6,-2,-13,0,-18","w":0},"\u02d8":{"d":"68,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":137},"\u0306":{"d":"-82,-213v17,-1,25,-9,25,-27v0,-7,13,-5,19,-4v7,29,-13,51,-44,51v-31,0,-45,-17,-45,-47v0,-7,13,-5,19,-4v4,15,6,32,26,31","w":0},"\u02da":{"d":"58,-252v21,-1,34,12,34,31v-1,21,-13,32,-35,32v-22,0,-34,-10,-34,-31v1,-21,13,-31,35,-32xm58,-204v10,0,17,-6,16,-16v0,-11,-6,-17,-17,-17v-10,0,-15,6,-15,16v0,11,3,17,16,17","w":115},"\u030a":{"d":"-81,-252v21,-1,34,12,34,31v-1,21,-13,32,-35,32v-22,0,-34,-10,-34,-31v1,-21,13,-31,35,-32xm-81,-204v10,0,17,-6,16,-16v0,-11,-6,-17,-17,-17v-10,0,-15,6,-15,16v0,11,3,17,16,17","w":0},"\u02dd":{"d":"54,-238v4,-8,39,-8,29,4v-19,14,-26,53,-60,44v9,-18,21,-32,31,-48xm115,-239v5,-6,30,-7,31,1v-22,15,-26,53,-63,49v4,-18,23,-33,32,-50","w":168},"\u030b":{"d":"-112,-238v4,-8,39,-8,29,4v-19,14,-26,53,-60,44v9,-18,21,-32,31,-48xm-51,-239v5,-6,30,-7,31,1v-22,15,-26,53,-63,49v4,-18,23,-33,32,-50","w":0},"\u02d9":{"d":"41,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":81},"\u0307":{"d":"-80,-233v13,0,17,3,17,16v0,15,-4,18,-18,18v-14,0,-16,-4,-17,-17v-1,-14,4,-17,18,-17","w":0},"\u00b8":{"d":"26,60v-18,-37,55,3,32,-40r-9,-20r26,0v4,12,12,22,13,36v2,29,-38,32,-62,24","w":110},"\u0327":{"d":"-111,60v-18,-37,55,3,32,-40r-9,-20r26,0v4,12,12,22,13,36v2,29,-38,32,-62,24","w":0},"\u02db":{"d":"89,51v-12,28,-82,12,-64,-26v4,-9,14,-18,22,-25r31,0v-9,11,-25,18,-27,34v-2,19,36,-3,38,17","w":112},"\u0328":{"d":"-48,51v-12,28,-82,12,-64,-26v4,-9,14,-18,22,-25r31,0v-9,11,-25,18,-27,34v-2,19,36,-3,38,17","w":0},"\u0326":{"d":"47,59v-2,7,-22,8,-24,1v10,-18,2,-51,37,-45v4,0,7,5,4,8","w":88},"\u0312":{"d":"23,-192v15,-16,19,-62,52,-47v-8,20,-19,65,-52,47","w":98},"\u0391":{"d":"84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-2,"?":11,"\u03ab":25,"\u03a5":25,"\u03a4":29,"\u039f":5,"\u0398":5}},"\u0386":{"d":"84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0xm25,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":208,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-2,"?":11,"\u03ab":25,"\u03a5":25,"\u03a4":29,"\u039f":5,"\u0398":5}},"\u0392":{"d":"136,-122v75,25,45,132,-35,122v-24,-3,-66,12,-71,-12r0,-203v2,-23,42,-8,63,-12v73,-14,96,81,43,105xm60,-129v41,3,75,-1,75,-38v0,-37,-36,-37,-75,-36r0,74xm60,-25v43,1,88,5,88,-38v0,-45,-43,-43,-88,-42r0,80","w":195,"k":{"\u201c":6,"\u2018":6,",":6,"\u03a7":8,"\u03ab":9,"\u03a5":9,"\u03a4":8,"\u039b":4,"\u0396":4,"\u0394":4,"\u0391":4}},"\u0393":{"d":"143,-227v9,1,7,25,0,25r-83,0r0,200v-4,5,-30,6,-30,-3r0,-209v0,-8,5,-13,12,-13r101,0","w":149},"\u0394":{"d":"82,-222v4,-10,36,-9,40,0r71,210v0,8,-4,12,-11,12r-161,0v-18,0,-9,-28,-5,-39xm100,-197r-58,172r118,0","w":203,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-2,"?":11,"\u03ab":25,"\u03a5":25,"\u03a4":29,"\u039f":5,"\u0398":5}},"\u0395":{"d":"151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"-":4,"\u03cc":7,"\u03bf":7,"\u039f":6,"\u039b":4,"\u0398":6,"\u0396":2,"\u0394":4,"\u0391":4}},"\u0388":{"d":"151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0xm-9,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":175,"k":{"-":4,"\u03cc":7,"\u03bf":7,"\u039f":6,"\u039b":4,"\u0398":6,"\u0396":2,"\u0394":4,"\u0391":4}},"\u0396":{"d":"155,-25v8,0,9,25,0,25r-134,0v-18,0,-10,-32,-3,-38r105,-164r-107,-1v-5,-2,-6,-24,3,-24r127,0v17,-1,10,32,2,38r-104,164r111,0","w":168,"k":{"-":9,"\u201d":-8,"\u2019":-8,"\u03cc":5,"\u03bf":5,"\u039f":5,"\u039b":2,"\u0398":5,"\u0394":2,"\u0391":2}},"\u0397":{"d":"191,-227v5,68,3,159,0,227v-9,-1,-27,6,-27,-5r0,-100r-104,0r0,103v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,91r104,0v2,-31,-3,-68,3,-95v8,-2,17,-2,24,0","w":224},"\u0389":{"d":"191,-227v5,68,3,159,0,227v-9,-1,-27,6,-27,-5r0,-100r-104,0r0,103v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,91r104,0v2,-31,-3,-68,3,-95v8,-2,17,-2,24,0xm-16,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":224},"\u0398":{"d":"121,-231v69,0,101,42,100,114v-1,73,-31,119,-104,120v-72,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v54,1,70,-40,71,-92v1,-53,-17,-89,-69,-90v-53,0,-71,40,-71,91v0,52,16,91,69,91xm153,-129v8,2,8,25,0,25r-71,0v-4,-4,-6,-25,3,-25r68,0","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":6,",":10,"\u03a7":11,"\u03ab":9,"\u03a5":9,"\u03a4":9,"\u039b":5,"\u0396":7,"\u0394":5,"\u0391":5}},"\u0399":{"d":"30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u038a":{"d":"30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218xm-13,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":90},"\u03aa":{"d":"10,-285v14,0,17,3,17,16v0,14,-3,17,-18,17v-14,0,-15,-3,-16,-16v0,-15,2,-17,17,-17xm82,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90},"\u039a":{"d":"174,-14v10,8,1,17,-11,15v-9,0,-17,1,-19,-6r-84,-113r0,116v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,101r83,-104v13,-5,41,-4,26,14r-76,90","w":187,"k":{"-":7,"\u03cc":11,"\u03bf":11,"\u039f":15,"\u0398":15}},"\u039b":{"d":"83,-222v5,-10,36,-10,40,0r76,218v-1,8,-29,8,-32,-1r-66,-192r-67,197v-11,-1,-32,7,-26,-11","w":206,"k":{"-":3,"\u201d":14,"\u201c":32,"\u2019":14,"\u2018":32,".":-2,",":-2,"?":11,"\u03ab":25,"\u03a5":25,"\u03a4":29,"\u039f":5,"\u0398":5}},"\u039c":{"d":"223,-208v-1,-22,55,-30,55,-6r-1,212v-4,5,-28,6,-29,-3r0,-198r-81,199v-4,7,-26,8,-30,0r-77,-199r-1,201v-4,5,-28,6,-29,-3r0,-209v3,-23,56,-16,57,5r67,165","w":307},"\u039d":{"d":"173,-222v2,-9,29,-9,29,0r0,210v-6,27,-50,8,-50,-10r-94,-172r-2,194v-9,-1,-26,5,-26,-5r0,-209v4,-24,51,-15,52,5r92,168","w":232},"\u039e":{"d":"154,-227v8,0,8,25,0,26r-131,0v-8,-1,-8,-25,0,-26r131,0xm136,-131v8,2,8,24,0,26r-98,-1v-5,-3,-6,-25,3,-25r95,0xm156,-27v6,1,6,5,6,13v0,8,0,14,-6,14r-135,0v-6,0,-6,-6,-6,-14v0,-8,0,-12,6,-13r135,0","w":177},"\u039f":{"d":"121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":6,",":10,"\u03a7":11,"\u03ab":9,"\u03a5":9,"\u03a4":9,"\u039b":5,"\u0396":7,"\u0394":5,"\u0391":5}},"\u038c":{"d":"121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92xm5,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":238,"k":{"\u201d":-2,"\u201c":3,"\u2019":-2,"\u2018":3,".":6,",":10,"\u03a7":11,"\u03ab":9,"\u03a5":9,"\u03a4":9,"\u039b":5,"\u0396":7,"\u0394":5,"\u0391":5}},"\u03a0":{"d":"182,-227v7,0,12,5,12,13r-3,214v-9,-1,-24,5,-27,-4r0,-197r-104,0r0,199v-4,5,-27,6,-30,-2r0,-210v0,-8,5,-13,12,-13r140,0","w":224},"\u03a1":{"d":"42,-227v69,-4,128,1,128,66v0,59,-45,79,-110,75r0,81v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-209v0,-8,5,-13,12,-13xm60,-111v44,3,78,-5,78,-47v0,-42,-35,-47,-78,-44r0,91","w":185,"k":{"-":11,"\/":22,"\u201d":-8,"\u201c":-2,"\u2019":-8,"\u2018":-2,".":47,",":47,"\u03cc":7,"\u03bf":7,"\u03a7":6,"\u03ab":2,"\u03a5":2,"\u03a4":2,"\u039b":27,"\u0396":5,"\u0394":27,"\u0391":27}},"\u03a3":{"d":"144,-25v9,1,9,25,0,25r-122,0v-16,-1,-10,-31,-2,-37r64,-84v-20,-34,-59,-49,-66,-95v-1,-8,4,-11,10,-11r117,0v4,4,6,24,-2,25r-89,0r61,76v0,7,-1,13,-4,17r-64,84r97,0","w":165},"\u03a4":{"d":"167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0","w":175,"k":{"-":29,"\/":19,"\u201d":-9,"\u201c":-4,"\u2019":-9,"\u2018":-4,".":38,":":24,";":21,",":38,"\u03cc":31,"\u03bf":31,"\u03a4":-5,"\u039f":10,"\u039b":28,"\u0398":10,"\u0394":28,"\u0391":28}},"\u03a5":{"d":"137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":24,"\/":23,"\u201d":-5,"\u2019":-5,".":42,":":24,";":20,",":43,"\u03cc":27,"\u03bf":27,"\u039f":10,"\u039b":25,"\u0398":10,"\u0396":2,"\u0394":25,"\u0391":25}},"\u038e":{"d":"137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106xm-25,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":175,"k":{"-":24,"\/":23,"\u201d":-5,"\u2019":-5,".":42,":":24,";":20,",":43,"\u03cc":27,"\u03bf":27,"\u039f":10,"\u039b":25,"\u0398":10,"\u0396":2,"\u0394":25,"\u0391":25}},"\u03ab":{"d":"52,-285v14,0,17,3,17,16v0,14,-3,17,-18,17v-14,0,-17,-3,-17,-16v0,-14,3,-17,18,-17xm124,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-13,0,-17,-3,-17,-16v0,-14,3,-17,17,-17xm137,-222v3,-9,31,-10,33,-1r-67,135v-2,28,3,63,-3,88v-10,-1,-26,5,-28,-5r0,-83r-66,-135v0,-11,30,-7,33,0r50,106","w":175,"k":{"-":24,"\/":23,"\u201d":-5,"\u2019":-5,".":42,":":24,";":20,",":43,"\u03cc":27,"\u03bf":27,"\u039f":10,"\u039b":25,"\u0398":10,"\u0396":2,"\u0394":25,"\u0391":25}},"\u03a6":{"d":"152,-222v67,3,106,38,106,107v0,70,-40,105,-106,110v6,19,-11,30,-30,20r0,-20v-67,-4,-106,-38,-106,-107v0,-70,38,-106,106,-110v-8,-19,16,-29,30,-16r0,16xm152,-30v84,6,97,-130,34,-159v-9,-5,-21,-7,-34,-8r0,167xm122,-197v-85,-7,-98,129,-35,159v9,5,22,7,35,8r0,-167","w":273},"\u03a7":{"d":"143,-223v5,-10,39,-10,30,6r-59,101r64,111v0,10,-20,5,-30,5v-21,-28,-36,-64,-55,-95v-19,31,-34,66,-56,95v-11,1,-35,6,-25,-11r62,-104r-62,-108v-1,-7,8,-5,15,-6v6,2,16,0,19,6r49,85","w":186,"k":{"-":19,"\u201d":-3,"\u2019":-3,"\u03cc":7,"\u03bf":7,"\u039f":11,"\u0398":11}},"\u03a8":{"d":"211,-223v3,-8,28,-8,31,0r0,87v-2,57,-36,87,-93,90v3,23,3,63,-31,42r0,-42v-57,-2,-93,-30,-93,-87r0,-90v4,-8,28,-8,31,0v2,67,-18,152,62,151r0,-151v4,-8,28,-8,31,0r0,151v40,-2,62,-22,62,-63r0,-88","w":270},"\u03a9":{"d":"172,-25v22,-1,66,-5,44,25r-67,0v-17,-3,-11,-34,3,-37v53,-27,57,-168,-32,-168v-86,0,-89,136,-33,168v13,4,19,35,2,37v-23,-2,-52,3,-71,-3v-1,-8,-4,-22,5,-22r43,0v-29,-18,-48,-47,-48,-94v1,-68,36,-112,104,-112v66,0,98,41,99,108v0,49,-18,80,-49,98","w":239},"\u038f":{"d":"172,-25v22,-1,66,-5,44,25r-67,0v-17,-3,-11,-34,3,-37v53,-27,57,-168,-32,-168v-86,0,-89,136,-33,168v13,4,19,35,2,37v-23,-2,-52,3,-71,-3v-1,-8,-4,-22,5,-22r43,0v-29,-18,-48,-47,-48,-94v1,-68,36,-112,104,-112v66,0,98,41,99,108v0,49,-18,80,-49,98xm0,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":239},"\u03b1":{"d":"158,-68v-3,35,11,51,38,45v4,18,-3,26,-23,26v-24,0,-33,-13,-36,-34v-9,19,-26,34,-54,34v-50,0,-66,-36,-66,-85v0,-52,21,-89,71,-89v36,0,53,24,58,57v4,-17,5,-37,10,-53v9,1,23,-5,26,4v-3,35,-14,67,-24,95xm86,-21v34,0,43,-31,43,-64v0,-34,-9,-61,-41,-61v-31,0,-41,29,-41,61v0,32,6,64,39,64","w":204,"k":{"\u03ce":3,"\u03c9":3,"\u03c3":3,"\u03bb":-1,"\u03b4":5,"\u03b3":1}},"\u03ac":{"d":"158,-68v-3,35,11,51,38,45v4,18,-3,26,-23,26v-24,0,-33,-13,-36,-34v-9,19,-26,34,-54,34v-50,0,-66,-36,-66,-85v0,-52,21,-89,71,-89v36,0,53,24,58,57v4,-17,5,-37,10,-53v9,1,23,-5,26,4v-3,35,-14,67,-24,95xm86,-21v34,0,43,-31,43,-64v0,-34,-9,-61,-41,-61v-31,0,-41,29,-41,61v0,32,6,64,39,64xm103,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":204,"k":{"\u03ce":3,"\u03c9":3,"\u03c3":3,"\u03bb":-1,"\u03b4":5,"\u03b3":1}},"\u03b2":{"d":"125,-135v30,6,46,28,49,63v5,65,-69,94,-119,61v-2,24,3,54,-2,74v-9,-1,-26,5,-26,-5r0,-229v1,-46,23,-71,68,-75v68,-6,83,92,30,111xm56,-37v28,26,87,19,87,-32v0,-38,-22,-50,-61,-48v-8,0,-9,-22,-1,-24v33,2,47,-16,47,-44v0,-22,-11,-38,-34,-37v-28,1,-39,21,-38,51r0,134","w":191,"k":{"\u03bb":2,"\u03b3":1}},"\u03b3":{"d":"118,-163v0,-7,27,-8,30,0v-2,73,-32,119,-67,163v-1,20,5,46,0,62v-9,-1,-26,6,-26,-4v-4,-86,-23,-152,-48,-217v-4,-10,3,-8,13,-9v29,-2,24,35,33,50v7,27,17,54,21,84v25,-34,44,-72,44,-129","w":160,"k":{"\u03ce":1,"\u03c9":1,"\u03c7":-2,"\u03c1":4,"\u03be":1,"\u03bd":-1,"\u03bb":8,"\u03ad":2,"\u03b5":2,"\u03b4":2}},"\u03b4":{"d":"101,-223v-44,3,-17,38,1,50v33,21,68,43,68,95v0,48,-28,80,-78,81v-51,1,-76,-29,-76,-77v0,-43,25,-73,55,-89v-42,-18,-28,-83,29,-83v27,0,72,8,53,36v-14,-5,-32,-13,-52,-13xm94,-21v54,0,56,-84,21,-107v-6,-6,-13,-12,-23,-18v-24,13,-46,32,-45,70v0,34,13,55,47,55","w":188},"\u03b5":{"d":"46,-48v2,48,79,15,99,16v7,34,-31,34,-60,35v-40,1,-69,-12,-69,-49v0,-24,15,-35,33,-42v-15,-7,-27,-14,-27,-36v-1,-55,93,-58,122,-28v-1,8,2,18,-4,21v-19,-13,-89,-32,-89,8v0,31,44,21,71,27v2,7,3,19,-5,20v-33,0,-72,-5,-71,28","w":164,"k":{"\u03c8":2,"\u03c6":3,"\u03c3":5,"\u03b8":4,"\u03b4":5,"\u03ac":3,"\u03b1":3}},"\u03ad":{"d":"46,-48v2,48,79,15,99,16v7,34,-31,34,-60,35v-40,1,-69,-12,-69,-49v0,-24,15,-35,33,-42v-15,-7,-27,-14,-27,-36v-1,-55,93,-58,122,-28v-1,8,2,18,-4,21v-19,-13,-89,-32,-89,8v0,31,44,21,71,27v2,7,3,19,-5,20v-33,0,-72,-5,-71,28xm87,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":164,"k":{"\u03c8":2,"\u03c6":3,"\u03c3":5,"\u03b8":4,"\u03b4":5,"\u03ac":3,"\u03b1":3}},"\u03b6":{"d":"43,-71v-5,64,82,29,82,85v0,25,-15,59,-42,43v8,-10,30,-47,4,-54v-38,-10,-75,-20,-73,-69v3,-63,36,-105,71,-138r-63,0v-8,-1,-9,-23,0,-23v32,0,70,-4,98,2v0,6,2,13,0,18v-33,30,-72,75,-77,136","w":125,"k":{"\u03ce":12,"\u03c9":12,"\u03b0":6,"\u03cb":6,"\u03cd":6,"\u03c5":6,"\u03c4":9,"\u03bd":14,"\u03bb":-4,"\u0390":8,"\u03ca":8,"\u03af":8,"\u03b9":8,"\u03ad":3,"\u03b5":3,"\u03ac":9,"\u03b1":9}},"\u03b7":{"d":"53,-142v31,-47,111,-34,110,41r-3,164v-9,0,-23,5,-26,-4r0,-156v0,-28,-7,-48,-33,-48v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21","w":193,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":8,"\u03b3":6}},"\u03ae":{"d":"53,-142v31,-47,111,-34,110,41r-3,164v-9,0,-23,5,-26,-4r0,-156v0,-28,-7,-48,-33,-48v-22,0,-32,15,-45,30v-2,37,3,82,-3,115v-9,-1,-23,5,-26,-4r0,-161v4,-4,26,-6,26,2r0,21xm101,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":193,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":8,"\u03b3":6}},"\u03b8":{"d":"97,-246v64,0,78,56,78,123v0,69,-15,126,-81,126v-65,0,-76,-56,-77,-123v0,-71,15,-126,80,-126xm144,-136v1,-50,-19,-103,-70,-80v-20,15,-26,45,-27,80r97,0xm47,-113v-2,53,17,109,70,86v21,-16,27,-48,27,-86r-97,0","w":191,"k":{"\u03c1":2,"\u03bb":2}},"\u03b9":{"d":"55,-55v-5,30,19,38,42,30v8,18,-6,28,-27,28v-70,0,-38,-106,-43,-168v3,-5,26,-6,28,2r0,108","w":98,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":5,"\u03bb":-2,"\u03b8":2,"\u03b4":2,"\u03b3":5}},"\u03af":{"d":"55,-55v-5,30,19,38,42,30v8,18,-6,28,-27,28v-70,0,-38,-106,-43,-168v3,-5,26,-6,28,2r0,108xm42,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":98,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":5,"\u03bb":-2,"\u03b8":2,"\u03b4":2,"\u03b3":5}},"\u03ca":{"d":"16,-230v13,0,16,4,16,16v0,13,-4,17,-17,17v-12,0,-15,-4,-15,-16v0,-13,2,-17,16,-17xm70,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-16,-4,-16,-16v0,-12,3,-17,16,-17xm55,-55v-5,30,19,38,42,30v8,18,-6,28,-27,28v-70,0,-38,-106,-43,-168v3,-5,26,-6,28,2r0,108","w":98,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":5,"\u03bb":-2,"\u03b8":2,"\u03b4":2,"\u03b3":5}},"\u0390":{"d":"55,-55v-5,30,19,38,42,30v8,18,-6,28,-27,28v-70,0,-38,-106,-43,-168v3,-5,26,-6,28,2r0,108xm43,-248v0,-7,29,-10,26,1r-16,51v-2,4,-22,8,-22,-1xm-2,-229v12,0,15,4,15,16v0,13,-3,16,-15,16v-13,0,-15,-3,-15,-16v0,-13,3,-16,15,-16xm82,-213v-2,-18,19,-19,27,-12v6,9,4,29,-12,28v-13,-1,-13,-4,-15,-16","w":98,"k":{"\u03c7":3,"\u03c4":5,"\u03bd":5,"\u03bb":-2,"\u03b8":2,"\u03b4":2,"\u03b3":5}},"\u03ba":{"d":"119,-162v3,-9,30,-9,33,-1v-17,29,-43,48,-64,73r68,85v-2,10,-31,8,-34,0r-66,-81v-2,28,3,62,-3,86v-9,-1,-23,5,-26,-4r1,-161v3,-5,26,-6,28,2r0,73","w":163,"k":{"\u03ce":8,"\u03c9":8,"\u03c6":9,"\u03b0":7,"\u03cb":7,"\u03cd":7,"\u03c5":7,"\u03c2":10,"\u03c1":3,"\u03cc":12,"\u03bf":12,"\u03bb":1,"\u0390":4,"\u03ca":4,"\u03af":4,"\u03b9":4,"\u03b8":4,"\u03b6":4,"\u03ad":5,"\u03b5":5,"\u03b4":10,"\u03ac":12,"\u03b1":12}},"\u03bb":{"d":"17,-218v-12,-13,2,-32,21,-28v36,0,44,25,53,55r53,165v8,3,32,6,17,27v-31,8,-45,-10,-53,-35r-29,-96r-43,124v-1,9,-29,11,-32,2v18,-57,42,-109,62,-165v-9,-30,-13,-63,-49,-49","w":166,"k":{"\u03ce":6,"\u03c9":6,"\u03c7":12,"\u03c6":3,"\u03b0":4,"\u03cb":4,"\u03cd":4,"\u03c5":4,"\u03c4":15,"\u03c3":4,"\u03c0":3,"\u03cc":4,"\u03bf":4,"\u03bd":14,"\u03bb":-2,"\u0390":3,"\u03ca":3,"\u03af":3,"\u03b9":3,"\u03b8":7,"\u03b4":3,"\u03b3":11,"\u03ac":5,"\u03b1":5}},"\u03bc":{"d":"163,-48v-4,25,13,26,30,26v3,17,-1,27,-21,25v-21,-2,-32,-8,-35,-28v-17,24,-59,40,-83,15v-1,23,6,55,-1,73v-9,-1,-26,5,-26,-5r1,-223v3,-5,26,-6,28,2v6,52,-20,141,33,141v22,0,32,-15,45,-30r1,-113v3,-5,26,-6,28,2r0,115","w":197,"k":{"\u03c4":2,"\u03c3":2,"\u03cc":3,"\u03bf":3,"\u03bd":2,"\u03bb":-2,"\u03b4":2,"\u03ac":2,"\u03b1":2}},"\u03bd":{"d":"121,-162v1,-10,31,-9,31,0v0,65,-31,122,-61,162v-11,-1,-28,5,-31,-5r-53,-160v4,-5,29,-6,30,3r44,133v19,-38,37,-80,40,-133","w":161,"k":{"\u03ce":2,"\u03c9":2,"\u03c7":-2,"\u03c4":-2,"\u03c3":2,"\u03c1":2,"\u03c0":-2,"\u03bd":-2,"\u03bb":4,"\u03ad":1,"\u03b5":1}},"\u03be":{"d":"44,-67v-3,61,89,24,87,82v0,25,-16,58,-42,42v8,-10,30,-47,3,-54v-38,-9,-80,-17,-78,-67v1,-35,19,-54,45,-65v-23,-5,-36,-22,-38,-50v-3,-52,57,-82,102,-60v5,21,-9,17,-30,17v-27,0,-43,14,-43,41v1,32,26,39,61,38v5,0,6,5,6,12v0,8,-1,12,-9,12v-36,0,-62,16,-64,52","w":135,"k":{"\u03ce":4,"\u03c9":4,"\u03b0":4,"\u03cb":4,"\u03cd":4,"\u03c5":4,"\u03c4":2,"\u03cc":4,"\u03bf":4,"\u03bb":-2,"\u0390":4,"\u03ca":4,"\u03af":4,"\u03b9":4,"\u03ad":4,"\u03b5":4,"\u03ac":4,"\u03b1":4}},"\u03bf":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63","k":{",":7,"\u03bb":3}},"\u03cc":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63xm97,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","k":{",":7,"\u03bb":3}},"\u03c0":{"d":"151,-143v1,57,-20,131,38,118v6,18,-3,28,-24,27v-62,-3,-43,-84,-42,-145r-56,0v0,57,-3,110,-23,143v-9,0,-25,4,-27,-3v14,-38,24,-83,22,-140v-19,6,-45,-7,-26,-24r167,1v6,4,6,23,-3,23r-26,0","w":198,"k":{"\u03ce":4,"\u03c9":4,"\u03c6":4,"\u03ac":4,"\u03b1":4}},"\u03c1":{"d":"95,-171v50,1,72,34,72,86v0,52,-19,89,-72,88v-20,0,-36,-5,-46,-15v0,23,5,56,-2,75v-9,-1,-26,6,-26,-5v0,-96,-28,-230,74,-229xm92,-22v34,0,44,-26,44,-61v0,-35,-8,-63,-42,-63v-49,0,-45,57,-44,107v10,10,24,17,42,17","w":183,"k":{"\u03c7":2,"\u03c4":2,"\u03c0":2,"\u03bd":2,"\u03bb":4,"\u03ad":1,"\u03b5":1,"\u03b3":2}},"\u03c3":{"d":"16,-81v0,-55,29,-86,84,-86v27,0,60,-3,83,3v1,8,2,21,-5,21r-39,0v17,13,27,36,28,65v0,51,-26,81,-75,81v-52,0,-77,-30,-76,-84xm93,-21v62,3,53,-105,13,-122v-42,-2,-59,21,-60,60v-1,37,12,61,47,62","w":191,"k":{"\u03c7":-2,"\u03c4":-4,"\u03c1":5,"\u03c0":-1,"\u03bd":-2,"\u03bb":4,"\u03b3":-1}},"\u03c2":{"d":"89,-146v-55,0,-55,99,-14,114v26,10,63,10,62,47v0,25,-16,58,-42,42v9,-10,29,-48,3,-54v-47,-11,-82,-30,-82,-87v0,-74,80,-116,120,-64v0,0,1,18,-6,18v-12,-5,-22,-16,-41,-16","w":147},"\u03c4":{"d":"76,-143v0,55,-18,137,42,117v7,20,-4,28,-27,28v-64,0,-43,-85,-43,-145v-21,1,-63,5,-42,-24r127,1v5,3,6,23,-2,23r-55,0","w":139,"k":{"\u03ce":1,"\u03c9":1,"\u03c6":2,"\u03c4":-8,"\u03c2":2,"\u03c3":3,"\u03c1":1,"\u03cc":3,"\u03bf":3,"\u03bb":1,"\u03b8":1,"\u03ac":2,"\u03b1":2}},"\u03c5":{"d":"130,-162v-1,-11,28,-7,29,-1v13,71,14,166,-68,166v-84,0,-66,-99,-63,-170v9,0,24,-5,26,4v10,50,-23,142,38,142v61,0,44,-90,38,-141","w":194,"k":{"\u03bb":10,"\u03ad":3,"\u03b5":3,"\u03b3":1}},"\u03cd":{"d":"130,-162v-1,-11,28,-7,29,-1v13,71,14,166,-68,166v-84,0,-66,-99,-63,-170v9,0,24,-5,26,4v10,50,-23,142,38,142v61,0,44,-90,38,-141xm97,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":194,"k":{"\u03bb":10,"\u03ad":3,"\u03b5":3,"\u03b3":1}},"\u03cb":{"d":"130,-162v-1,-11,28,-7,29,-1v13,71,14,166,-68,166v-84,0,-66,-99,-63,-170v9,0,24,-5,26,4v10,50,-23,142,38,142v61,0,44,-90,38,-141xm62,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm124,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":194,"k":{"\u03bb":10,"\u03ad":3,"\u03b5":3,"\u03b3":1}},"\u03b0":{"d":"130,-162v-1,-11,28,-7,29,-1v13,71,14,166,-68,166v-84,0,-66,-99,-63,-170v9,0,24,-5,26,4v10,50,-23,142,38,142v61,0,44,-90,38,-141xm89,-248v0,-7,29,-10,26,1r-16,51v-2,4,-22,8,-22,-1xm44,-229v12,0,15,4,15,16v0,13,-3,16,-15,16v-13,0,-15,-3,-15,-16v0,-13,3,-16,15,-16xm128,-213v-2,-18,19,-19,27,-12v6,9,4,29,-12,28v-13,-1,-13,-4,-15,-16","w":194,"k":{"\u03bb":10,"\u03ad":3,"\u03b5":3,"\u03b3":1}},"\u03c6":{"d":"103,3v-56,-3,-89,-28,-88,-86v1,-57,34,-83,88,-87r0,-72v6,-4,27,-6,29,3r0,69v56,2,88,29,88,85v0,56,-33,84,-88,88v-2,19,4,46,-3,60v-9,-1,-25,6,-26,-5r0,-55xm132,-20v63,5,78,-97,27,-120v-7,-3,-16,-6,-27,-7r0,127xm103,-147v-64,-6,-78,97,-28,120v7,3,17,6,28,7r0,-127","w":234,"k":{"\u03bb":2,"\u03b3":1}},"\u03c7":{"d":"123,23v-1,27,37,0,32,33v-20,21,-59,1,-60,-25v-7,-22,-16,-41,-21,-65v-13,34,-27,67,-44,96v-9,2,-31,5,-25,-7r55,-115v-12,-27,-18,-61,-34,-84v-10,-3,-29,8,-22,-17v9,-17,51,-8,53,9v9,21,19,46,24,71v12,-30,24,-59,39,-86v10,0,31,-5,25,8r-50,105","w":153,"k":{"\u03ce":4,"\u03c9":4,"\u03c6":5,"\u03c4":-1,"\u03c0":-2,"\u03cc":4,"\u03bf":4,"\u03bd":-1,"\u03bb":7,"\u03ad":3,"\u03b5":3,"\u03ac":9,"\u03b1":9}},"\u03c8":{"d":"140,-21v77,6,51,-94,52,-146v10,0,24,-4,27,4v2,25,7,48,7,76v1,59,-32,86,-86,90v-2,24,13,75,-29,58v-3,-17,0,-39,-1,-58v-84,4,-90,-67,-82,-151v-6,-16,4,-25,24,-19v19,44,-29,147,58,146r3,-222v6,-3,27,-4,27,4r0,218","w":254},"\u03c9":{"d":"170,-21v56,-13,29,-114,10,-145v7,-3,20,-3,27,0v35,41,42,169,-35,169v-26,0,-40,-12,-48,-29v-7,17,-22,30,-46,29v-76,-1,-69,-124,-36,-168v5,-3,26,-6,29,1v-11,20,-25,47,-24,80v1,31,6,63,35,63v39,0,27,-59,29,-100v4,-5,28,-6,29,3v2,41,-9,94,30,97","w":250,"k":{"\u03bd":1,"\u03bb":4,"\u03b3":1}},"\u03ce":{"d":"170,-21v56,-13,29,-114,10,-145v7,-3,20,-3,27,0v35,41,42,169,-35,169v-26,0,-40,-12,-48,-29v-7,17,-22,30,-46,29v-76,-1,-69,-124,-36,-168v5,-3,26,-6,29,1v-11,20,-25,47,-24,80v1,31,6,63,35,63v39,0,27,-59,29,-100v4,-5,28,-6,29,3v2,41,-9,94,30,97xm126,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":250,"k":{"\u03bd":1,"\u03bb":4,"\u03b3":1}},"\u0384":{"d":"46,-248v3,-7,25,-9,29,-2v-11,22,-6,63,-41,57v-4,-15,10,-37,12,-55","w":114},"\u0385":{"d":"85,-248v0,-7,29,-10,26,1r-16,51v-2,4,-22,8,-22,-1xm40,-229v12,0,15,4,15,16v0,13,-3,16,-15,16v-13,0,-15,-3,-15,-16v0,-13,3,-16,15,-16xm124,-213v-2,-18,19,-19,27,-12v6,9,4,29,-12,28v-13,-1,-13,-4,-15,-16","w":177},"\u0344":{"d":"-86,-248v0,-7,29,-10,26,1r-16,51v-2,4,-22,8,-22,-1xm-131,-229v12,0,15,4,15,16v0,13,-3,16,-15,16v-13,0,-15,-3,-15,-16v0,-13,3,-16,15,-16xm-47,-213v-2,-18,19,-19,27,-12v6,9,4,29,-12,28v-13,-1,-13,-4,-15,-16","w":0},"\u0387":{"d":"46,-188v14,0,18,5,18,20v0,16,-4,21,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":90},"\u037e":{"d":"51,-161v14,0,19,6,19,20v0,14,-5,20,-19,20v-14,0,-18,-7,-18,-20v0,-13,4,-20,18,-20xm46,-39v34,-9,25,34,13,49v-12,14,-20,50,-46,38v5,-27,27,-37,23,-73v-1,-9,3,-13,10,-14","w":96},"\u0374":{"d":"38,-236v-1,-10,16,-10,19,-4v-3,39,15,94,-29,91v-26,-24,19,-46,10,-87","w":89},"\u0375":{"d":"38,-44v-1,-10,14,-11,19,-5v-3,36,15,97,-29,91v-7,-1,-11,-7,-9,-16v5,-25,23,-34,19,-70","w":89},"\u0410":{"d":"84,-222v5,-10,36,-10,40,0r78,218v-1,9,-29,8,-32,0r-20,-56r-94,0r-19,55v-1,9,-30,10,-31,0xm142,-84r-40,-113r-39,113r79,0","w":208,"k":{"-":4,"\u201d":14,"\u201c":37,"\u2019":14,"\u2018":37,".":-2,":":-2,";":-3,",":-3,"?":12,"\u0454":2,"\u044a":13,"\u0447":7,"\u0444":5,"\u0475":12,"\u045e":12,"\u0443":12,"\u0442":14,"\u0441":2,"\u0473":2,"\u043e":2,"\u0451":2,"\u0450":2,"\u0435":2,"\u0431":4,"\u040b":22,"\u0402":22,"\u0404":9,"\u042a":22,"\u0427":23,"\u0424":15,"\u040e":17,"\u0423":17,"\u0422":22,"\u0405":2,"\u0421":10,"\u0472":9,"\u041e":9,"\u0408":-4,"\u0416":6}},"\u0411":{"d":"60,-131v64,-3,120,2,120,63v0,69,-66,71,-138,68v-7,-1,-12,-4,-12,-12r0,-203v0,-8,4,-12,11,-12r121,0v5,5,6,23,-2,25r-100,0r0,71xm60,-25v46,2,89,3,89,-41v0,-43,-44,-42,-89,-41r0,82","w":193,"k":{"\u044a":5,"\u0445":2,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":5,"\u0436":1,"\u040b":9,"\u0402":9,"\u042f":2,"\u042a":9,"\u0427":7,"\u0425":2,"\u0424":1,"\u040e":2,"\u0423":2,"\u0422":8,"\u0405":1,"\u0416":4,"\u0410":4}},"\u0412":{"d":"136,-122v75,25,45,132,-35,122v-24,-3,-66,12,-71,-12r0,-203v2,-23,42,-8,63,-12v73,-14,96,81,43,105xm60,-129v41,3,75,-1,75,-38v0,-37,-36,-37,-75,-36r0,74xm60,-25v43,1,88,5,88,-38v0,-45,-43,-43,-88,-42r0,80","w":195,"k":{"\u044a":3,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":1,"\u040b":7,"\u0402":7,"\u042f":2,"\u042a":7,"\u0427":7,"\u0425":5,"\u0424":1,"\u040e":3,"\u0423":3,"\u0422":7,"\u0421":1,"\u0416":7,"\u0410":4}},"\u0413":{"d":"146,-227v8,-1,8,21,3,25v-27,3,-60,0,-89,1r0,199v-4,5,-27,6,-30,-2r0,-211v0,-8,4,-12,11,-12r105,0","w":154,"k":{"-":11,"\u00bb":12,"\u201c":-6,"\u2018":-6,".":26,":":17,";":6,",":28,"\u044f":29,"\u044e":25,"\u0454":36,"\u044d":23,"\u044c":25,"\u044b":25,"\u044a":12,"\u0449":25,"\u0448":25,"\u0447":20,"\u045f":25,"\u0446":25,"\u0445":18,"\u0444":33,"\u0475":24,"\u045e":24,"\u0443":24,"\u0442":16,"\u0455":33,"\u0441":39,"\u0440":25,"\u043f":25,"\u0473":39,"\u043e":39,"\u045a":25,"\u043d":25,"\u043c":25,"\u0459":35,"\u043b":35,"\u045c":25,"\u043a":25,"\u0457":-18,"\u0439":25,"\u0438":25,"\u0437":25,"\u0436":27,"\u0451":36,"\u0450":36,"\u0435":36,"\u0434":39,"\u0491":25,"\u0453":25,"\u0433":25,"\u0432":25,"\u0431":8,"\u0430":26,"\u042f":4,"\u0404":12,"\u0424":16,"\u0405":1,"\u0421":12,"\u0472":12,"\u041e":12,"\u0409":23,"\u041b":23,"\u0408":14,"\u0416":1,"\u0414":23,"\u0410":27}},"\u0403":{"d":"146,-291v-20,15,-37,54,-70,42v17,-17,24,-45,56,-48v7,0,13,0,14,6xm146,-227v8,-1,8,21,3,25v-27,3,-60,0,-89,1r0,199v-4,5,-27,6,-30,-2r0,-211v0,-8,4,-12,11,-12r105,0","w":154,"k":{"-":11,"\u00bb":12,"\u201c":-6,"\u2018":-6,".":26,":":17,";":6,",":28,"\u044f":29,"\u044e":25,"\u0454":36,"\u044d":23,"\u044c":25,"\u044b":25,"\u044a":12,"\u0449":25,"\u0448":25,"\u0447":20,"\u045f":25,"\u0446":25,"\u0445":18,"\u0444":33,"\u0475":24,"\u045e":24,"\u0443":24,"\u0442":16,"\u0455":33,"\u0441":39,"\u0440":25,"\u043f":25,"\u0473":39,"\u043e":39,"\u045a":25,"\u043d":25,"\u043c":25,"\u0459":35,"\u043b":35,"\u045c":25,"\u043a":25,"\u0457":-18,"\u0439":25,"\u0438":25,"\u0437":25,"\u0436":27,"\u0451":36,"\u0450":36,"\u0435":36,"\u0434":39,"\u0491":25,"\u0453":25,"\u0433":25,"\u0432":25,"\u0431":8,"\u0430":26,"\u042f":4,"\u0404":12,"\u0424":16,"\u0405":1,"\u0421":12,"\u0472":12,"\u041e":12,"\u0409":23,"\u041b":23,"\u0408":14,"\u0416":1,"\u0414":23,"\u0410":27}},"\u0490":{"d":"150,-276v2,21,10,69,-9,75r-81,0r0,199v-4,5,-27,6,-30,-2r0,-211v0,-8,4,-12,11,-12r85,0v1,-16,-3,-37,2,-49v7,0,16,-2,22,0","w":155,"k":{"-":11,"\u00bb":12,"\u201c":-6,"\u2018":-6,".":26,":":17,";":6,",":28,"\u044f":29,"\u044e":25,"\u0454":36,"\u044d":23,"\u044c":25,"\u044b":25,"\u044a":12,"\u0449":25,"\u0448":25,"\u0447":20,"\u045f":25,"\u0446":25,"\u0445":18,"\u0444":33,"\u0475":24,"\u045e":24,"\u0443":24,"\u0442":16,"\u0455":33,"\u0441":39,"\u0440":25,"\u043f":25,"\u0473":39,"\u043e":39,"\u045a":25,"\u043d":25,"\u043c":25,"\u0459":35,"\u043b":35,"\u045c":25,"\u043a":25,"\u0457":-18,"\u0439":25,"\u0438":25,"\u0437":25,"\u0436":27,"\u0451":36,"\u0450":36,"\u0435":36,"\u0434":39,"\u0491":25,"\u0453":25,"\u0433":25,"\u0432":25,"\u0431":8,"\u0430":26,"\u042f":4,"\u0404":12,"\u0424":16,"\u0405":1,"\u0421":12,"\u0472":12,"\u041e":12,"\u0409":23,"\u041b":23,"\u0408":14,"\u0416":1,"\u0414":23,"\u0410":27}},"\u0414":{"d":"194,-26v12,1,30,-5,30,9v-2,24,3,56,-3,76v-8,0,-21,4,-23,-4r0,-55r-171,0v-2,19,5,46,-3,59v-8,-1,-23,5,-23,-4r0,-72v-2,-12,10,-8,20,-9v39,-44,32,-129,51,-198v30,-8,76,0,112,-3v6,0,10,4,10,12r0,189xm97,-202v-11,67,-12,134,-44,176r111,0r0,-176r-67,0","w":231,"k":{"\u201c":6,"\u2018":6,";":-11,",":-10,"\u0454":3,"\u044a":6,"\u0447":3,"\u0444":3,"\u0475":5,"\u045e":5,"\u0443":5,"\u0442":5,"\u0441":3,"\u0473":3,"\u043e":3,"\u0451":3,"\u0450":3,"\u0435":3,"\u0431":4,"\u040b":7,"\u0402":7,"\u0404":5,"\u042a":7,"\u0427":5,"\u0424":6,"\u040e":3,"\u0423":3,"\u0422":5,"\u0421":5,"\u0472":5,"\u041e":5}},"\u0415":{"d":"151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"\u0454":8,"\u044a":5,"\u0444":8,"\u0475":7,"\u045e":7,"\u0443":7,"\u0442":5,"\u0441":8,"\u0473":7,"\u043e":7,"\u0459":5,"\u043b":5,"\u0457":-2,"\u0451":8,"\u0450":8,"\u0435":8,"\u0434":5,"\u0431":5,"\u040b":7,"\u0402":7,"\u042f":2,"\u0404":8,"\u042a":7,"\u0427":7,"\u0424":9,"\u0422":2,"\u0421":8,"\u0472":8,"\u041e":8,"\u0409":4,"\u041b":4,"\u0414":2}},"\u0400":{"d":"35,-291v33,-21,54,25,70,42v-33,13,-49,-29,-70,-42xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"\u0454":8,"\u044a":5,"\u0444":8,"\u0475":7,"\u045e":7,"\u0443":7,"\u0442":5,"\u0441":8,"\u0473":7,"\u043e":7,"\u0459":5,"\u043b":5,"\u0457":-2,"\u0451":8,"\u0450":8,"\u0435":8,"\u0434":5,"\u0431":5,"\u040b":7,"\u0402":7,"\u042f":2,"\u0404":8,"\u042a":7,"\u0427":7,"\u0424":9,"\u0422":2,"\u0421":8,"\u0472":8,"\u041e":8,"\u0409":4,"\u041b":4,"\u0414":2}},"\u0401":{"d":"57,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-14,0,-17,-3,-17,-16v0,-14,2,-17,17,-17xm130,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-13,0,-17,-2,-17,-16v1,-14,3,-17,17,-17xm151,-25v8,2,8,23,0,25r-110,0v-6,-1,-11,-4,-11,-12r0,-203v0,-8,4,-12,11,-12r111,0v5,4,6,25,-3,25r-89,0r0,71r77,0v8,2,9,24,0,24r-77,0r0,82r91,0","w":175,"k":{"\u0454":8,"\u044a":5,"\u0444":8,"\u0475":7,"\u045e":7,"\u0443":7,"\u0442":5,"\u0441":8,"\u0473":7,"\u043e":7,"\u0459":5,"\u043b":5,"\u0457":-2,"\u0451":8,"\u0450":8,"\u0435":8,"\u0434":5,"\u0431":5,"\u040b":7,"\u0402":7,"\u042f":2,"\u0404":8,"\u042a":7,"\u0427":7,"\u0424":9,"\u0422":2,"\u0421":8,"\u0472":8,"\u041e":8,"\u0409":4,"\u041b":4,"\u0414":2}},"\u0416":{"d":"208,-119v45,14,48,71,65,114v1,9,-14,5,-23,6v-4,-1,-9,-3,-9,-7v-18,-42,-15,-105,-82,-98v-2,34,3,74,-3,104v-9,-1,-27,6,-27,-5r0,-99v-65,-7,-64,55,-82,98v-1,10,-34,12,-32,-2v17,-42,22,-95,65,-110v-39,-13,-48,-67,-57,-107v5,-6,30,-7,30,4v17,39,12,98,76,91v2,-31,-3,-70,3,-97v9,-2,24,-4,27,4r0,93v66,8,58,-59,80,-97v13,-3,33,-4,25,14v-15,35,-17,83,-56,94","w":288,"k":{"\u0454":5,"\u044a":10,"\u0447":6,"\u0444":6,"\u0475":8,"\u045e":8,"\u0443":8,"\u0442":6,"\u0441":8,"\u0473":5,"\u043e":5,"\u0457":-2,"\u0451":5,"\u0450":5,"\u0435":5,"\u0431":4,"\u0430":1,"\u040b":5,"\u0402":5,"\u0404":9,"\u042a":5,"\u0427":7,"\u0424":13,"\u0422":5,"\u0421":10,"\u0472":9,"\u041e":9}},"\u0417":{"d":"105,-121v26,8,50,23,50,57v0,47,-34,67,-85,67v-32,0,-68,-12,-53,-41v27,19,105,26,104,-25v0,-41,-41,-45,-85,-43v-5,-4,-7,-25,3,-24v41,2,77,-3,77,-41v0,-49,-69,-33,-95,-19v-13,-35,30,-41,60,-41v40,0,66,17,67,56v0,32,-18,48,-43,54","w":170,"k":{"\u040b":5,"\u0402":5,"\u042f":2,"\u042a":5,"\u0427":5,"\u0425":2,"\u040e":1,"\u0423":1,"\u0422":5,"\u0410":2}},"\u0418":{"d":"173,-223v3,-7,25,-8,28,0r-3,223v-9,-1,-25,5,-27,-4r0,-172r-118,176v-9,0,-23,5,-23,-5r0,-218v3,-8,28,-9,30,0r0,171","w":230,"k":{"\u0457":-1}},"\u0419":{"d":"145,-286v0,-11,19,-6,26,-4v0,34,-20,48,-54,49v-33,1,-60,-22,-51,-50v8,-1,24,-6,24,6v0,15,12,23,28,23v16,-1,27,-9,27,-24xm173,-223v3,-7,25,-8,28,0r-3,223v-9,-1,-25,5,-27,-4r0,-172r-118,176v-9,0,-23,5,-23,-5r0,-218v3,-8,28,-9,30,0r0,171","w":230,"k":{"\u0457":-1}},"\u040d":{"d":"64,-288v-5,-6,3,-9,11,-9v31,2,39,31,56,48v1,5,-9,3,-16,4v-22,-10,-33,-29,-51,-43xm173,-223v3,-7,25,-8,28,0r-3,223v-9,-1,-25,5,-27,-4r0,-172r-118,176v-9,0,-23,5,-23,-5r0,-218v3,-8,28,-9,30,0r0,171","w":230},"\u0406":{"d":"30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90,"k":{"\u0457":-1}},"\u0407":{"d":"9,-285v14,0,17,2,17,16v0,15,-2,17,-17,17v-14,0,-17,-3,-17,-16v0,-14,2,-17,17,-17xm82,-285v14,0,17,3,17,16v0,14,-2,17,-17,17v-13,0,-17,-2,-17,-16v1,-14,3,-17,17,-17xm30,-223v3,-8,28,-9,30,0r0,221v-4,5,-30,6,-30,-3r0,-218","w":90,"k":{"\u0457":-1}},"\u0408":{"d":"55,-223v3,-8,27,-8,30,0r0,166v8,52,-45,75,-82,50v-2,-6,-5,-24,4,-25v8,2,13,8,25,8v21,0,23,-16,23,-36r0,-163","w":114,"k":{".":5,",":6,"\u0425":1,"\u0409":2,"\u041b":2,"\u0414":1,"\u0410":2}},"\u041a":{"d":"182,-5v-2,11,-32,8,-33,-1v-20,-43,-19,-105,-89,-98r0,102v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,93v67,9,63,-57,86,-97v12,-3,35,-4,25,14v-17,34,-20,82,-59,94v46,15,51,71,70,114","w":195,"k":{"\u0454":5,"\u044a":10,"\u0447":6,"\u0444":6,"\u0475":8,"\u045e":8,"\u0443":8,"\u0442":6,"\u0441":8,"\u0473":5,"\u043e":5,"\u0457":-2,"\u0451":5,"\u0450":5,"\u0435":5,"\u0431":4,"\u0430":1,"\u040b":5,"\u0402":5,"\u0404":9,"\u042a":5,"\u0427":7,"\u0424":13,"\u0422":5,"\u0421":10,"\u0472":9,"\u041e":9}},"\u040c":{"d":"109,-251v-2,7,-26,9,-27,2v17,-17,24,-45,56,-48v8,-1,16,3,11,9xm182,-5v-2,11,-32,8,-33,-1v-20,-43,-19,-105,-89,-98r0,102v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,93v67,9,63,-57,86,-97v12,-3,35,-4,25,14v-17,34,-20,82,-59,94v46,15,51,71,70,114","w":195,"k":{"\u0454":5,"\u044a":10,"\u0447":6,"\u0444":6,"\u0475":8,"\u045e":8,"\u0443":8,"\u0442":6,"\u0441":8,"\u0473":5,"\u043e":5,"\u0457":-2,"\u0451":5,"\u0450":5,"\u0435":5,"\u0431":4,"\u0430":1,"\u040b":5,"\u0402":5,"\u0404":9,"\u042a":5,"\u0427":7,"\u0424":13,"\u0422":5,"\u0421":10,"\u0472":9,"\u041e":9}},"\u041b":{"d":"179,-227v7,0,11,4,11,12r-3,215v-10,0,-24,5,-28,-4r0,-197r-64,0v-12,64,-12,145,-45,187v-9,11,-26,19,-45,16v-7,-2,-7,-27,2,-27v45,-11,39,-70,51,-118v4,-21,5,-57,12,-81v30,-8,74,-1,109,-3","w":219,"k":{"\u0457":-1}},"\u0409":{"d":"174,-227v7,0,11,4,11,12r0,77v68,-4,119,7,120,67v1,68,-69,77,-143,70v-4,-1,-8,-5,-8,-11r0,-189r-59,0v-12,64,-12,145,-45,187v-9,11,-26,19,-45,16v-7,-2,-7,-27,2,-27v45,-11,40,-70,51,-118v4,-20,9,-44,9,-71v0,-8,4,-13,11,-13r96,0xm185,-25v46,1,88,1,88,-44v0,-45,-41,-46,-88,-44r0,88","w":313,"k":{"\u201c":16,"\u2018":16,"\u042f":2,"\u0427":18,"\u0425":5,"\u040e":17,"\u0423":17,"\u0422":25,"\u0409":2,"\u041b":2,"\u0416":2,"\u0414":2,"\u0410":2}},"\u041c":{"d":"223,-208v-1,-22,55,-30,55,-6r-1,212v-4,5,-28,6,-29,-3r0,-198r-81,199v-4,7,-26,8,-30,0r-77,-199r-1,201v-4,5,-28,6,-29,-3r0,-209v3,-23,56,-16,57,5r67,165","w":307,"k":{"\u0457":-1}},"\u041d":{"d":"191,-227v5,68,3,159,0,227v-9,-1,-27,6,-27,-5r0,-100r-104,0r0,103v-4,5,-30,6,-30,-3r3,-222v8,-1,25,-5,27,4r0,91r104,0v2,-31,-3,-68,3,-95v8,-2,17,-2,24,0","w":224,"k":{"\u0457":-1}},"\u040a":{"d":"186,-138v67,-3,119,6,120,67v1,69,-69,77,-142,70v-4,-1,-8,-5,-8,-11r0,-94r-96,0r0,104v-4,5,-27,6,-30,-2r3,-223v8,-1,25,-5,27,4r0,91r96,0v2,-31,-3,-68,3,-95v8,-1,25,-5,27,4r0,85xm186,-25v46,1,89,1,89,-43v0,-46,-41,-47,-89,-45r0,88","w":315,"k":{"\u201c":16,"\u2018":16,"\u042f":2,"\u0427":18,"\u0425":5,"\u040e":17,"\u0423":17,"\u0422":25,"\u0409":2,"\u041b":2,"\u0416":2,"\u0414":2,"\u0410":2}},"\u041e":{"d":"121,-231v70,0,100,44,100,115v0,71,-31,119,-104,119v-71,0,-100,-44,-100,-115v0,-72,33,-119,104,-119xm118,-23v53,0,70,-39,71,-91v1,-53,-17,-90,-69,-91v-52,0,-71,39,-71,90v0,52,16,92,69,92","w":238,"k":{".":7,",":7,"\u0459":7,"\u043b":7,"\u0434":8,"\u040b":11,"\u0402":11,"\u042f":2,"\u042d":3,"\u042a":11,"\u0427":3,"\u0425":7,"\u040e":6,"\u0423":6,"\u0422":8,"\u0409":9,"\u041b":9,"\u0408":5,"\u0417":3,"\u0416":6,"\u0414":9,"\u0410":9}},"\u0472":{"d":"121,-231v69,0,101,42,100,114v-1,73,-31,119,-104,120v-72,0,-100,-44,-100,-115v0,-71,32,-119,104,-119xm49,-103v-14,86,115,112,135,32v3,-10,5,-21,5,-32r-140,0xm189,-127v11,-84,-114,-108,-135,-31v-3,10,-5,20,-5,31r140,0","w":238,"k":{".":7,",":7,"\u0459":7,"\u043b":7,"\u0434":8,"\u040b":11,"\u0402":11,"\u042f":2,"\u042d":3,"\u042a":11,"\u0427":3,"\u0425":7,"\u040e":6,"\u0423":6,"\u0422":8,"\u0409":9,"\u041b":9,"\u0408":5,"\u0417":3,"\u0416":6,"\u0414":9,"\u0410":9}},"\u041f":{"d":"183,-227v7,0,11,4,11,12r-1,213v-5,5,-27,6,-30,-2r0,-197r-103,0r0,197v0,7,-28,8,-30,0r0,-211v0,-8,4,-12,11,-12r142,0","w":223,"k":{"\u0457":-1}},"\u0420":{"d":"42,-227v69,-4,128,1,128,66v0,59,-45,79,-110,75r0,81v1,9,-18,6,-27,5v-2,0,-2,-3,-3,-5r0,-209v0,-8,5,-13,12,-13xm60,-111v44,3,78,-5,78,-47v0,-42,-35,-47,-78,-44r0,91","w":185,"k":{".":36,",":36,"\u044f":4,"\u0454":5,"\u0444":6,"\u0441":5,"\u0473":5,"\u043e":5,"\u043c":4,"\u0459":25,"\u043b":25,"\u0451":5,"\u0450":5,"\u0435":5,"\u0434":27,"\u040b":2,"\u0402":2,"\u042f":2,"\u042a":2,"\u0425":5,"\u040e":1,"\u0423":1,"\u0422":3,"\u0409":23,"\u041b":23,"\u0408":14,"\u0416":5,"\u0414":22,"\u0410":20}},"\u0421":{"d":"118,-24v29,3,46,-24,63,-19v7,40,-34,46,-67,46v-67,0,-97,-45,-97,-114v0,-71,32,-119,100,-119v32,0,70,7,63,45r-4,3v-17,-8,-32,-23,-59,-22v-50,2,-66,41,-67,92v-1,52,19,84,68,88","w":191,"k":{"\u0457":-10,"\u0424":5,"\u0421":2}},"\u0405":{"d":"49,-174v11,59,105,38,103,110v0,46,-31,66,-77,67v-32,1,-79,-14,-57,-45v26,20,102,36,103,-18v-11,-59,-103,-39,-103,-111v0,-61,85,-77,121,-41v1,8,3,20,-4,23v-22,-17,-85,-30,-86,15","w":165,"k":{"\u0475":3,"\u045e":3,"\u0443":3,"\u040e":3,"\u0423":3,"\u0422":2,"\u0410":2}},"\u0422":{"d":"167,-227v8,1,8,24,0,25r-64,0r-3,202v-9,-1,-27,6,-27,-5r0,-197r-67,0v-5,-4,-4,-21,0,-25r161,0","w":175,"k":{"-":15,"\u00bb":9,"\u201c":-4,"\u2018":-4,".":24,":":15,";":5,",":30,"\u044f":25,"\u044e":26,"\u0454":32,"\u044d":29,"\u044c":26,"\u044b":26,"\u044a":23,"\u0449":26,"\u0448":26,"\u0447":22,"\u045f":26,"\u0446":26,"\u0445":20,"\u0444":31,"\u0475":22,"\u045e":22,"\u0443":22,"\u0442":15,"\u0455":28,"\u0441":33,"\u0440":26,"\u043f":26,"\u0473":33,"\u043e":33,"\u045a":26,"\u043d":26,"\u043c":29,"\u0459":33,"\u043b":33,"\u045c":26,"\u043a":26,"\u0457":-16,"\u0439":26,"\u0438":26,"\u0437":24,"\u0436":21,"\u0451":32,"\u0450":32,"\u0435":32,"\u0434":35,"\u0491":26,"\u0453":26,"\u0433":26,"\u0432":26,"\u0431":8,"\u0430":26,"\u042f":5,"\u0404":8,"\u0427":1,"\u0424":16,"\u040e":-4,"\u0423":-4,"\u0421":10,"\u0472":8,"\u041e":8,"\u0409":19,"\u041b":19,"\u0408":11,"\u0414":19,"\u0410":22}},"\u0423":{"d":"155,-223v2,-8,29,-8,32,-1v-19,56,-46,106,-65,161v-14,39,-45,85,-93,57v-2,-6,-5,-24,3,-26v23,15,50,2,54,-23r-83,-168v2,-10,31,-8,33,2r66,135","k":{"-":9,".":36,":":11,";":11,",":31,"\u044f":16,"\u044e":12,"\u0454":20,"\u044d":12,"\u044c":12,"\u044b":12,"\u0449":12,"\u0448":12,"\u0447":7,"\u045f":12,"\u0446":12,"\u0445":8,"\u0444":19,"\u0475":6,"\u045e":6,"\u0443":6,"\u0442":4,"\u0455":10,"\u0441":20,"\u0440":12,"\u043f":12,"\u0473":21,"\u043e":21,"\u045a":12,"\u043d":12,"\u043c":14,"\u0459":29,"\u043b":29,"\u045c":12,"\u043a":12,"\u0457":-17,"\u0439":12,"\u0438":12,"\u0437":10,"\u0436":11,"\u0451":20,"\u0450":20,"\u0435":20,"\u0434":33,"\u0491":12,"\u0453":12,"\u0433":12,"\u0432":12,"\u0431":8,"\u0430":12,"\u042f":4,"\u0404":8,"\u0427":4,"\u0424":10,"\u0405":5,"\u0421":8,"\u0472":8,"\u041e":8,"\u0409":25,"\u041b":25,"\u0408":14,"\u0414":25,"\u0410":27}},"\u040e":{"d":"124,-286v0,-11,19,-6,26,-4v0,34,-20,48,-54,49v-33,1,-60,-22,-51,-50v9,-2,23,-5,24,6v1,15,12,23,28,23v16,-1,27,-9,27,-24xm155,-223v2,-8,29,-8,32,-1v-19,56,-46,106,-65,161v-14,39,-45,85,-93,57v-2,-6,-5,-24,3,-26v23,15,50,2,54,-23r-83,-168v2,-10,31,-8,33,2r66,135","k":{"-":9,".":36,":":11,";":11,",":31,"\u044f":16,"\u044e":12,"\u0454":20,"\u044d":12,"\u044c":12,"\u044b":12,"\u0449":12,"\u0448":12,"\u0447":7,"\u045f":12,"\u0446":12,"\u0445":8,"\u0444":19,"\u0475":6,"\u045e":6,"\u0443":6,"\u0442":4,"\u0455":10,"\u0441":20,"\u0440":12,"\u043f":12,"\u0473":21,"\u043e":21,"\u045a":12,"\u043d":12,"\u043c":14,"\u0459":29,"\u043b":29,"\u045c":12,"\u043a":12,"\u0457":-17,"\u0439":12,"\u0438":12,"\u0437":10,"\u0436":11,"\u0451":20,"\u0450":20,"\u0435":20,"\u0434":33,"\u0491":12,"\u0453":12,"\u0433":12,"\u0432":12,"\u0431":8,"\u0430":12,"\u042f":4,"\u0404":8,"\u0427":4,"\u0424":10,"\u0405":5,"\u0421":8,"\u0472":8,"\u041e":8,"\u0409":25,"\u041b":25,"\u0408":14,"\u0414":25,"\u0410":27}},"\u0474":{"d":"136,-148v12,-42,28,-99,75,-76v1,10,5,27,-11,23v-24,5,-25,30,-33,55r-44,141v-4,9,-37,10,-41,0r-76,-218v1,-10,30,-7,33,1r65,191","w":212},"\u0424":{"d":"140,-205v58,3,96,25,95,85v-1,58,-38,84,-95,87v6,21,-5,48,-29,29r0,-29v-58,-1,-95,-26,-95,-85v0,-57,38,-84,95,-87v-6,-21,6,-43,29,-28r0,28xm140,-57v67,6,87,-96,30,-118v-8,-3,-18,-5,-30,-6r0,124xm111,-181v-69,-8,-87,96,-30,118v8,3,18,5,30,6r0,-124","w":251,"k":{".":26,",":31,"\u044f":1,"\u0459":15,"\u043b":15,"\u0434":15,"\u040b":13,"\u0402":13,"\u042f":4,"\u042d":3,"\u042a":13,"\u0427":3,"\u0425":11,"\u040e":7,"\u0423":7,"\u0422":15,"\u0405":3,"\u0409":15,"\u041b":15,"\u0408":9,"\u0417":3,"\u0416":8,"\u0414":15,"\u0410":15}},"\u0425":{"d":"143,-223v5,-10,39,-10,30,6r-59,101r64,111v0,10,-20,5,-30,5v-21,-28,-36,-64,-55,-95v-19,31,-34,66,-56,95v-11,1,-35,6,-25,-11r62,-104r-62,-108v-1,-7,8,-5,15,-6v6,2,16,0,19,6r49,85","w":186,"k":{"\u0454":8,"\u044a":7,"\u0447":7,"\u0444":8,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":5,"\u0441":7,"\u0473":7,"\u043e":7,"\u043c":2,"\u0457":-8,"\u0451":8,"\u0450":8,"\u0435":8,"\u0431":5,"\u0430":4,"\u0404":8,"\u0427":5,"\u0424":13,"\u0421":9,"\u0472":8,"\u041e":8}},"\u0426":{"d":"193,-26v11,2,31,-6,29,9v-2,24,4,56,-2,76v-8,0,-22,5,-24,-4r0,-55r-155,0v-7,0,-11,-4,-11,-12r3,-215v8,-1,25,-5,27,4r0,197r102,0r1,-199v6,-5,27,-6,30,2r0,197","w":229,"k":{"\u201c":6,"\u2018":6,";":-11,",":-10,"\u0454":3,"\u044a":6,"\u0447":3,"\u0444":3,"\u0475":5,"\u045e":5,"\u0443":5,"\u0442":5,"\u0441":3,"\u0473":3,"\u043e":3,"\u0451":3,"\u0450":3,"\u0435":3,"\u0431":4,"\u040b":7,"\u0402":7,"\u0404":5,"\u042a":7,"\u0427":5,"\u0424":6,"\u040e":3,"\u0423":3,"\u0422":5,"\u0421":5,"\u0472":5,"\u041e":5}},"\u040f":{"d":"99,0v-23,-4,-69,12,-69,-12r3,-215v8,-1,25,-5,27,4r0,197r103,0r0,-199v6,-5,27,-6,30,2r0,211v-3,24,-46,7,-69,12v-2,19,3,44,-2,59v-8,-1,-22,5,-23,-4r0,-55","w":223,"k":{"\u0457":-1}},"\u0427":{"d":"140,-223v1,-8,28,-8,30,0r-3,223v-9,0,-26,4,-27,-4r0,-88v-61,9,-125,1,-120,-66v2,-22,-5,-52,3,-69v9,-1,25,-5,27,4v-2,63,-7,108,71,108v6,0,13,-1,19,-2r0,-106","w":200,"k":{"\u0457":-1}},"\u0428":{"d":"252,-223v2,-9,30,-8,30,0r0,211v0,7,-4,12,-10,12r-231,0v-7,0,-11,-4,-11,-12r0,-211v2,-8,28,-8,30,0r0,197r81,0r0,-197v2,-8,30,-8,30,0r0,197r81,0r0,-197","w":312,"k":{"\u0457":-1}},"\u0429":{"d":"282,-26v12,2,32,-6,30,9v-2,24,4,56,-2,76v-8,0,-22,5,-24,-4r0,-55r-245,0v-7,0,-11,-4,-11,-12r0,-211v2,-8,28,-8,30,0r0,197r81,0r0,-197v2,-8,30,-8,30,0r0,197r81,0r1,-200v9,-2,28,-6,29,3r0,197","w":320,"k":{"\u201c":6,"\u2018":6,";":-11,",":-10,"\u0454":3,"\u044a":6,"\u0447":3,"\u0444":3,"\u0475":5,"\u045e":5,"\u0443":5,"\u0442":5,"\u0441":3,"\u0473":3,"\u043e":3,"\u0451":3,"\u0450":3,"\u0435":3,"\u0431":4,"\u040b":7,"\u0402":7,"\u0404":5,"\u042a":7,"\u0427":5,"\u0424":6,"\u040e":3,"\u0423":3,"\u0422":5,"\u0421":5,"\u0472":5,"\u041e":5}},"\u042a":{"d":"80,-227v7,0,13,4,12,13r0,76v67,-3,119,6,120,67v2,70,-70,76,-142,70v-4,-1,-8,-5,-8,-11r0,-190r-56,0v-4,-4,-7,-25,3,-25r71,0xm92,-25v47,2,89,0,89,-43v0,-46,-41,-47,-89,-45r0,88","w":221,"k":{"\u201c":16,"\u2018":16,"\u042f":2,"\u0427":18,"\u0425":5,"\u040e":17,"\u0423":17,"\u0422":25,"\u0409":2,"\u041b":2,"\u0416":2,"\u0414":2,"\u0410":2}},"\u042b":{"d":"214,-223v4,-8,27,-8,30,0r-3,223v-9,-1,-25,5,-27,-4r0,-219xm60,-137v66,-3,116,6,118,66v2,70,-68,76,-140,70v-4,-1,-8,-5,-8,-11r0,-211v3,-8,28,-9,30,0r0,86xm60,-25v46,2,87,0,87,-43v0,-44,-40,-46,-87,-44r0,87","w":274,"k":{"\u0457":-1}},"\u042c":{"d":"60,-138v68,-3,121,5,122,67v2,71,-71,76,-144,70v-4,-1,-8,-5,-8,-11r0,-211v3,-8,28,-9,30,0r0,85xm60,-25v47,2,90,1,90,-43v0,-47,-42,-47,-90,-45r0,88","w":191,"k":{"\u201c":16,"\u2018":16,"\u042f":2,"\u0427":18,"\u0425":5,"\u040e":17,"\u0423":17,"\u0422":25,"\u0409":2,"\u041b":2,"\u0416":2,"\u0414":2,"\u0410":2}},"\u042d":{"d":"82,-231v69,0,98,47,98,116v0,72,-29,118,-99,118v-30,0,-64,-4,-65,-35v0,-6,1,-10,5,-11v23,20,86,31,108,-1v11,-16,18,-34,18,-61r-111,-1v-5,-2,-5,-24,2,-24r109,0v-4,-44,-23,-72,-69,-75v-27,-2,-42,20,-59,17v-7,-38,32,-43,63,-43","w":197,"k":{".":7,",":7,"\u0459":7,"\u043b":7,"\u0434":8,"\u040b":11,"\u0402":11,"\u042f":2,"\u042d":3,"\u042a":11,"\u0427":3,"\u0425":7,"\u040e":6,"\u0423":6,"\u0422":8,"\u0409":9,"\u041b":9,"\u0408":5,"\u0417":3,"\u0416":6,"\u0414":9,"\u0410":9}},"\u0404":{"d":"120,-23v28,2,43,-21,60,-18v8,39,-32,44,-64,44v-70,0,-99,-45,-99,-116v0,-70,31,-118,99,-118v31,0,76,10,59,46v-23,-21,-86,-30,-107,2v-9,14,-16,32,-18,53r110,1v5,3,6,24,-3,24r-107,0v0,50,20,79,70,82","w":197,"k":{"\u0444":1,"\u0457":-2}},"\u042e":{"d":"202,-231v69,0,97,45,97,116v-1,72,-29,117,-100,118v-67,0,-95,-42,-96,-108r-43,0r0,103v-4,5,-27,6,-30,-2r0,-219v3,-8,28,-9,30,0r0,92r43,0v6,-59,34,-100,99,-100xm200,-23v51,0,67,-39,67,-90v0,-53,-14,-92,-67,-92v-51,0,-67,40,-67,91v0,50,14,91,67,91","w":316,"k":{".":7,",":7,"\u0459":7,"\u043b":7,"\u0434":8,"\u040b":11,"\u0402":11,"\u042f":2,"\u042d":3,"\u042a":11,"\u0427":3,"\u0425":7,"\u040e":6,"\u0423":6,"\u0422":8,"\u0409":9,"\u041b":9,"\u0408":5,"\u0417":3,"\u0416":6,"\u0414":9,"\u0410":9}},"\u042f":{"d":"111,-227v21,1,59,-10,59,12r-1,213v-5,5,-27,6,-30,-2r0,-95v-76,-14,-70,58,-97,99v-11,4,-35,3,-24,-16v18,-31,19,-78,53,-92v-27,-6,-45,-23,-45,-55v0,-47,31,-68,85,-64xm58,-164v0,40,38,42,81,40r0,-78v-42,-1,-81,-3,-81,38","w":199,"k":{"\u0457":-1}},"\u0402":{"d":"89,-131v64,-3,120,4,120,63v0,48,-34,73,-84,68v-6,-5,-7,-30,8,-25v28,0,44,-13,45,-40v1,-44,-44,-42,-89,-41r0,102v0,7,-28,8,-30,0r0,-197v-18,-2,-42,4,-55,-3v0,-9,-4,-23,5,-23r138,0v9,-1,7,16,5,23v-15,7,-43,1,-63,3r0,70","w":224,"k":{"\u0427":22,"\u0425":11,"\u040e":18,"\u0423":18,"\u0422":26,"\u0416":1}},"\u040b":{"d":"89,-131v68,-4,120,7,118,70v-1,25,13,76,-30,59v2,-56,6,-111,-56,-104r-32,0r0,102v0,7,-28,8,-30,0r0,-198v-23,-2,-69,12,-53,-25r142,0v6,3,6,25,-2,25r-57,0r0,71","w":222,"k":{"\u0427":20,"\u0424":2,"\u040e":11,"\u0423":11,"\u0422":20}},"\u0462":{"d":"59,-234v1,-10,32,-9,30,0r0,33v21,2,49,-4,65,3v0,8,5,23,-5,23r-60,0r0,44v64,-2,119,3,119,64v0,69,-71,71,-141,66v-4,-1,-8,-5,-8,-11r0,-163v-22,-2,-69,11,-53,-25v15,-3,36,0,53,-1r0,-33xm89,-24v46,1,88,2,88,-41v0,-42,-42,-44,-88,-42r0,83","w":225},"\u0430":{"d":"25,-149v30,-36,121,-32,121,38r0,107v0,8,-12,5,-20,5v-8,0,-4,-13,-5,-21v-24,34,-108,32,-105,-25v3,-48,49,-54,101,-52v2,-31,-5,-50,-36,-50v-23,0,-36,13,-54,16v-5,-2,-3,-13,-2,-18xm46,-46v0,40,59,29,71,3r0,-33v-34,0,-71,-2,-71,30","w":172,"k":{"\u0445":1,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":1,"\u0436":1}},"\u0431":{"d":"107,-166v47,0,67,32,67,80v-1,54,-27,87,-80,89v-99,5,-88,-158,-48,-214v21,-29,71,-29,116,-35v8,2,9,27,-4,28v-55,6,-113,11,-109,79v14,-15,30,-27,58,-27xm97,-21v35,0,44,-28,47,-62v5,-53,-47,-76,-81,-42v-7,7,-13,12,-13,27v0,43,6,77,47,77","w":191,"k":{"\u201c":4,"\u2018":4,"\u0445":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3,"\u0459":7,"\u043b":7,"\u0436":3,"\u0434":10}},"\u0432":{"d":"122,-91v21,4,34,18,35,41v0,54,-62,56,-116,50v-11,-1,-14,-5,-14,-16r0,-136v-1,-25,33,-13,56,-18v36,1,66,8,67,43v0,20,-12,31,-28,36xm55,-97v31,1,66,2,67,-26v1,-30,-40,-25,-67,-23r0,49xm55,-22v28,4,72,6,72,-27v0,-34,-39,-28,-72,-29r0,56","w":172,"k":{"\u044f":3,"\u044a":4,"\u0445":2,"\u0475":2,"\u045e":2,"\u0443":2,"\u0459":3,"\u043b":3,"\u0436":1,"\u0434":3}},"\u0433":{"d":"115,-167v8,0,10,26,0,26r-59,0v-2,46,3,99,-3,141v-9,-1,-23,5,-26,-4r0,-153v-1,-7,3,-11,9,-10r79,0","w":124,"k":{"-":9,"\u201c":-4,"\u2018":-4,".":16,",":16,"\u044f":3,"\u0454":4,"\u0444":5,"\u0441":4,"\u0473":4,"\u043e":4,"\u043c":3,"\u0459":14,"\u043b":14,"\u0451":4,"\u0450":4,"\u0435":4,"\u0434":18,"\u0430":1,"\u00e6":10,"\u01fb":10,"\u00e5":10,"\u0103":10,"\u0101":10,"\u00e4":10,"\u00e3":10,"\u00e2":10,"\u00e1":10,"\u00e0":10,"a":10}},"\u0453":{"d":"115,-167v8,0,10,26,0,26r-59,0v-2,46,3,99,-3,141v-9,-1,-23,5,-26,-4r0,-153v-1,-7,3,-11,9,-10r79,0xm112,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":124,"k":{"-":9,"\u201c":-4,"\u2018":-4,".":16,",":16,"\u044f":3,"\u0454":4,"\u0444":5,"\u0441":4,"\u0473":4,"\u043e":4,"\u043c":3,"\u0459":14,"\u043b":14,"\u0451":4,"\u0450":4,"\u0435":4,"\u0434":18,"\u0430":1,"\u00e6":10,"\u01fb":10,"\u00e5":10,"\u0103":10,"\u0101":10,"\u00e4":10,"\u00e3":10,"\u00e2":10,"\u00e1":10,"\u00e0":10,"a":10}},"\u0491":{"d":"27,-157v-1,-7,3,-11,9,-10r62,0v-3,-20,-1,-56,25,-37v-3,21,9,56,-9,63r-58,0v-2,46,3,99,-3,141v-9,-1,-23,5,-26,-4r0,-153","w":127,"k":{"-":9,"\u201c":-4,"\u2018":-4,".":16,",":16,"\u044f":3,"\u0454":4,"\u0444":5,"\u0441":4,"\u0473":4,"\u043e":4,"\u043c":3,"\u0459":14,"\u043b":14,"\u0451":4,"\u0450":4,"\u0435":4,"\u0434":18,"\u0430":1,"\u00e6":10,"\u01fb":10,"\u00e5":10,"\u0103":10,"\u0101":10,"\u00e4":10,"\u00e3":10,"\u00e2":10,"\u00e1":10,"\u00e0":10,"a":10}},"\u0434":{"d":"167,-25v11,1,29,-5,29,8v-2,23,3,54,-3,73v-7,2,-19,3,-22,-3r0,-53r-142,0v-1,22,9,73,-25,53r0,-70v-2,-11,9,-7,18,-8v27,-32,33,-81,40,-136v0,-4,4,-6,8,-6r88,0v6,0,10,3,9,10r0,132xm138,-143r-50,0v-7,49,-13,89,-36,118r86,0r0,-118","w":200,"k":{"\u201c":7,"\u2018":7,";":-9,",":-15,"\u0454":3,"\u044a":5,"\u0447":2,"\u0445":-3,"\u0444":4,"\u0475":3,"\u045e":3,"\u0443":3,"\u0442":4,"\u0441":4,"\u0473":4,"\u043e":4,"\u0451":3,"\u0450":3,"\u0435":3,"\u0434":-8,"\u0431":2}},"\u0435":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0","w":179,"k":{"\u201c":4,"\u2018":4,"\u0445":2,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":1,"\u043c":2,"\u0459":6,"\u043b":6,"\u0436":5,"\u0434":5}},"\u0450":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm49,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":179,"k":{"\u201c":4,"\u2018":4,"\u0445":2,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":1,"\u043c":2,"\u0459":6,"\u043b":6,"\u0436":5,"\u0434":5}},"\u0451":{"d":"92,-171v48,0,71,31,70,81v0,8,-5,11,-11,12r-104,0v-7,64,63,66,106,46v11,32,-29,34,-58,35v-55,0,-79,-32,-79,-86v0,-52,26,-88,76,-88xm133,-99v9,-54,-69,-65,-83,-19v-2,6,-3,13,-3,19r86,0xm61,-230v13,0,16,3,16,16v-1,13,-4,17,-17,17v-12,0,-16,-4,-16,-16v0,-14,3,-17,17,-17xm123,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-17,-4,-17,-16v0,-14,3,-17,17,-17","w":179,"k":{"\u201c":4,"\u2018":4,"\u0445":2,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":1,"\u043c":2,"\u0459":6,"\u043b":6,"\u0436":5,"\u0434":5}},"\u0436":{"d":"182,-88v32,14,46,53,54,87v-7,3,-26,4,-30,-3v-15,-30,-16,-76,-67,-71r0,72v-2,6,-18,4,-26,3v-2,0,-4,-1,-3,-3r0,-72v-55,-7,-50,47,-72,75v-10,0,-33,5,-25,-10v14,-29,21,-66,53,-77v-29,-12,-38,-47,-48,-79v8,-3,26,-4,31,3v15,27,11,72,61,65r0,-66v0,-6,27,-6,29,0r0,66v51,7,46,-43,66,-69v11,0,31,-5,24,10v-13,26,-18,60,-47,69","w":248,"k":{"\u0454":4,"\u044a":2,"\u0444":4,"\u0441":4,"\u0473":5,"\u043e":5,"\u0451":4,"\u0450":4,"\u0435":4,"\u0430":5}},"\u0437":{"d":"99,-89v21,3,35,17,37,41v4,57,-91,65,-122,33v0,-7,-4,-19,4,-20v20,15,88,29,88,-14v0,-30,-39,-24,-67,-27v-4,-2,-6,-21,2,-21v29,0,60,1,60,-27v0,-44,-68,-12,-84,-10v-6,-32,29,-37,55,-37v33,0,58,12,58,44v0,21,-14,33,-31,38","w":152,"k":{"\u044a":4,"\u0445":1,"\u0475":2,"\u045e":2,"\u0443":2,"\u0459":5,"\u043b":5,"\u0436":1,"\u0434":3}},"\u0438":{"d":"27,-163v2,-8,29,-7,29,0r-1,119r90,-123v8,0,21,-4,23,4r-3,163v-9,-1,-24,5,-26,-4r1,-119r-91,123v0,0,-20,4,-22,-4r0,-159","w":194},"\u0439":{"d":"126,-237v0,-11,20,-8,26,-3v1,35,-19,50,-54,51v-34,1,-60,-23,-51,-53v9,-2,24,-5,24,6v1,16,10,26,27,26v17,0,28,-10,28,-27xm27,-163v2,-8,29,-7,29,0r-1,119r90,-123v8,0,21,-4,23,4r-3,163v-9,-1,-24,5,-26,-4r1,-119r-91,123v0,0,-20,4,-22,-4r0,-159","w":194},"\u045d":{"d":"27,-163v2,-8,29,-7,29,0r-1,119r90,-123v8,0,21,-4,23,4r-3,163v-9,-1,-24,5,-26,-4r1,-119r-91,123v0,0,-20,4,-22,-4r0,-159xm49,-238v-4,-3,-1,-8,4,-8v37,-5,36,32,53,50v-30,15,-41,-29,-57,-42","w":194},"\u0456":{"d":"53,-167v7,46,3,119,0,167v-9,-1,-23,5,-26,-4r3,-163v7,0,17,-2,23,0xm41,-233v14,0,18,3,18,17v0,15,-4,18,-18,18v-14,0,-18,-3,-18,-18v0,-14,4,-17,18,-17","w":82},"\u0457":{"d":"14,-230v13,0,16,3,16,16v0,13,-3,17,-16,17v-12,0,-16,-4,-16,-16v0,-12,3,-17,16,-17xm69,-230v13,0,16,4,16,16v0,12,-4,17,-16,17v-12,0,-16,-3,-16,-16v0,-13,2,-17,16,-17xm27,-163v2,-8,29,-8,29,0r-3,163v-9,-1,-23,5,-26,-4r0,-159","w":82,"k":{"\u201c":-9,"\u2018":-9}},"\u0458":{"d":"-6,41v20,-4,43,-4,36,-39r3,-169v9,1,24,-5,26,4r0,166v2,42,-16,65,-56,60v-13,2,-12,-13,-9,-22xm45,-233v15,0,17,3,18,17v0,15,-5,18,-19,18v-14,0,-16,-4,-17,-18v-1,-14,4,-17,18,-17","w":86},"\u043a":{"d":"100,-88v32,14,47,53,55,87v-7,3,-26,4,-30,-3v-16,-30,-16,-77,-69,-71r0,72v-4,5,-25,6,-29,0r0,-161v2,-6,26,-6,29,0r0,66v52,8,48,-42,68,-69v10,0,32,-5,24,10v-13,26,-18,61,-48,69","w":166,"k":{"\u0454":4,"\u044a":2,"\u0444":4,"\u0441":4,"\u0473":5,"\u043e":5,"\u0451":4,"\u0450":4,"\u0435":4,"\u0430":5}},"\u045c":{"d":"100,-88v32,14,47,53,55,87v-7,3,-26,4,-30,-3v-16,-30,-16,-77,-69,-71r0,72v-4,5,-25,6,-29,0r0,-161v2,-6,26,-6,29,0r0,66v52,8,48,-42,68,-69v10,0,32,-5,24,10v-13,26,-18,61,-48,69xm131,-241v-17,16,-27,58,-59,45v17,-18,15,-54,53,-50v3,0,6,2,6,5","w":166,"k":{"\u0454":4,"\u044a":2,"\u0444":4,"\u0441":4,"\u0473":5,"\u043e":5,"\u0451":4,"\u0450":4,"\u0435":4,"\u0430":5}},"\u043b":{"d":"148,-167v5,1,9,4,9,10r-3,157v-9,-1,-24,5,-26,-4r0,-139r-44,0v-10,64,-12,148,-79,144v-2,-15,-3,-27,15,-27v31,-25,30,-81,38,-131v0,-7,3,-10,9,-10r81,0","w":183},"\u0459":{"d":"145,-167v19,2,5,41,9,60v52,-4,102,2,102,52v1,56,-60,63,-117,56v-10,-1,-14,-6,-14,-16r0,-128r-42,0v-9,66,-10,148,-78,144v-3,-12,-4,-28,13,-26v33,-24,32,-79,39,-132v0,-7,2,-11,9,-10r79,0xm154,-22v34,4,72,2,72,-31v0,-33,-39,-33,-72,-30r0,61","w":270,"k":{"\u201c":20,"\u2018":20,"\u0445":2,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":14,"\u0436":2}},"\u043c":{"d":"160,-150v0,-19,47,-27,49,-6r18,150v0,10,-19,8,-27,5r-17,-144r-47,139v-2,9,-27,10,-30,0r-46,-139r-16,143v-4,4,-28,7,-27,-4v8,-52,8,-112,21,-158v14,-7,47,-5,46,14r38,115","w":243,"k":{"\u201c":8,"\u2018":8,"\u044a":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3}},"\u043d":{"d":"137,-163v2,-9,29,-7,29,0r-3,163v-9,-1,-24,5,-26,-4r0,-70r-81,0v-2,24,3,54,-3,74v-9,-1,-23,5,-26,-4r1,-161v3,-5,26,-6,28,2r0,65r81,0r0,-65","w":192},"\u045a":{"d":"130,-163v2,-8,28,-8,29,0r0,56v52,-4,102,2,102,52v1,56,-59,63,-116,56v-27,-4,-11,-49,-15,-75r-74,0v-2,24,3,54,-3,74v-9,-1,-23,5,-26,-4r1,-161v3,-5,26,-6,28,2r0,65r74,0r0,-65xm159,-22v34,4,72,2,72,-31v0,-35,-40,-33,-72,-30r0,61","w":277,"k":{"\u201c":20,"\u2018":20,"\u0445":2,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":14,"\u0436":2}},"\u043e":{"d":"97,-171v53,0,77,33,77,86v0,54,-26,88,-81,88v-55,1,-77,-33,-77,-85v0,-55,27,-89,81,-89xm95,-21v34,-1,48,-25,48,-62v0,-37,-12,-63,-48,-63v-37,0,-49,27,-49,62v0,35,12,63,49,63","k":{"\u201c":4,"\u2018":4,"\u0445":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3,"\u0459":7,"\u043b":7,"\u0436":3,"\u0434":10}},"\u0473":{"d":"96,-171v53,0,77,33,77,86v0,54,-25,88,-80,88v-53,0,-78,-32,-77,-86v1,-54,27,-88,80,-88xm143,-95v7,-58,-80,-71,-94,-20v-2,6,-3,13,-3,20r97,0xm46,-74v-10,57,76,74,93,24v2,-7,4,-15,4,-24r-97,0","w":188,"k":{"\u201c":4,"\u2018":4,"\u0445":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3,"\u0459":7,"\u043b":7,"\u0436":3,"\u0434":10}},"\u043f":{"d":"152,-167v6,0,9,4,8,10r-2,157v-9,-1,-24,5,-27,-4r0,-139r-75,0v-2,46,3,101,-3,143v-9,-1,-23,5,-26,-4r0,-153v-1,-7,3,-11,9,-10r116,0","w":187},"\u0440":{"d":"109,-171v47,0,63,37,63,85v0,52,-19,87,-68,89v-25,1,-35,-12,-48,-24v-2,27,3,61,-3,84v-9,-1,-26,5,-26,-5r0,-223v3,-4,25,-7,25,2r0,22v15,-15,29,-30,57,-30xm101,-22v56,0,57,-124,2,-124v-24,0,-34,16,-47,31r0,63v13,15,22,30,45,30","k":{"\u044a":5,"\u0445":4,"\u0475":3,"\u045e":3,"\u0443":3,"\u0459":7,"\u043b":7,"\u0436":2,"\u0434":9}},"\u0441":{"d":"90,-22v24,2,35,-24,49,-17v8,34,-24,42,-53,42v-50,0,-70,-33,-70,-85v0,-75,76,-115,123,-67v1,8,2,21,-5,22v-13,-7,-23,-20,-45,-19v-32,0,-43,28,-43,63v0,35,11,58,44,61","w":152,"k":{"\u0441":2}},"\u0455":{"d":"115,-136v-18,-14,-83,-21,-66,22v21,26,78,17,77,67v0,36,-26,48,-62,50v-28,1,-63,-12,-45,-38v18,14,76,29,79,-10v-11,-41,-80,-24,-80,-79v0,-47,78,-64,100,-28v0,6,1,13,-3,16","w":140},"\u0442":{"d":"132,-167v8,3,8,23,0,26r-48,0v-2,46,3,99,-3,141v-9,0,-23,5,-26,-4r0,-137v-20,-5,-58,15,-53,-19v0,-4,3,-7,6,-7r124,0","w":139,"k":{"-":7,"\u201c":-3,"\u2018":-3,".":15,",":15,"\u044f":1,"\u0454":3,"\u0444":4,"\u0441":3,"\u0473":4,"\u043e":4,"\u043c":2,"\u0459":13,"\u043b":13,"\u0451":3,"\u0450":3,"\u0435":3,"\u0434":17}},"\u0443":{"d":"127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127","w":162,"k":{"\u201c":-3,"\u2018":-3,".":9,",":9,"\u044f":1,"\u0454":4,"\u0444":2,"\u0441":1,"\u0473":2,"\u043e":2,"\u043c":2,"\u0459":12,"\u043b":12,"\u0451":4,"\u0450":4,"\u0435":4,"\u0434":14}},"\u045e":{"d":"109,-237v0,-10,20,-8,26,-3v1,35,-19,50,-54,51v-34,1,-60,-23,-51,-53v8,-1,24,-6,24,6v0,17,11,26,28,26v17,0,27,-10,27,-27xm127,-162v2,-11,35,-11,29,5r-78,215v-3,7,-28,10,-32,1r23,-59v-26,-49,-43,-108,-63,-163v1,-9,31,-8,32,2r45,127","w":162,"k":{"\u201c":-3,"\u2018":-3,".":9,",":9,"\u044f":1,"\u0454":4,"\u0444":2,"\u0441":1,"\u0473":2,"\u043e":2,"\u043c":2,"\u0459":12,"\u043b":12,"\u0451":4,"\u0450":4,"\u0435":4,"\u0434":14}},"\u0475":{"d":"111,-130v2,-28,32,-53,56,-33v9,28,-28,14,-30,43r-35,115v-3,9,-36,10,-40,0r-55,-160v4,-5,29,-6,30,3r45,134","w":171},"\u0444":{"d":"127,-171v52,5,83,30,83,86v-1,55,-31,84,-83,88v-2,19,4,46,-3,60v-9,-1,-25,6,-26,-5r0,-55v-54,-3,-84,-30,-84,-85v0,-55,32,-84,84,-89r0,-69v9,-2,25,-6,29,3r0,66xm127,-21v53,4,65,-70,41,-107v-8,-11,-22,-16,-41,-18r0,125xm98,-146v-61,-5,-71,96,-25,119v7,3,15,5,25,6r0,-125","w":224,"k":{"\u044f":2,"\u044a":1,"\u0445":5,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":5,"\u043c":2,"\u0459":7,"\u043b":7,"\u0436":4,"\u0434":5}},"\u0445":{"d":"116,-163v3,-8,27,-7,30,-1v-14,28,-33,52,-48,78v16,28,36,52,50,82v-1,8,-29,8,-33,0r-38,-63v-14,22,-26,47,-42,67v0,0,-33,5,-26,-8r49,-77r-48,-78v3,-8,29,-8,33,0r36,58","w":155,"k":{"\u0454":6,"\u0444":6,"\u0441":6,"\u0473":6,"\u043e":6,"\u0451":6,"\u0450":6,"\u0435":6}},"\u0446":{"d":"161,-25v11,1,29,-5,29,7r0,72v-2,6,-23,6,-25,0r0,-54r-129,0v-5,0,-10,-4,-9,-10r1,-155v3,-5,26,-6,28,2r0,138r76,0r0,-140v4,-4,27,-6,29,2r0,138","w":194,"k":{"\u201c":7,"\u2018":7,";":-9,",":-15,"\u0454":3,"\u044a":5,"\u0447":2,"\u0445":-3,"\u0444":4,"\u0475":3,"\u045e":3,"\u0443":3,"\u0442":4,"\u0441":4,"\u0473":4,"\u043e":4,"\u0451":3,"\u0450":3,"\u0435":3,"\u0434":-8,"\u0431":2}},"\u045f":{"d":"133,-163v2,-8,28,-8,29,0r0,153v-2,19,-37,7,-55,10v-2,18,4,44,-3,57v-7,1,-19,2,-22,-3r0,-54v-19,-3,-55,9,-55,-10r1,-155v3,-5,26,-6,28,2r0,138r77,0r0,-138","w":188},"\u0447":{"d":"113,-163v2,-9,29,-7,29,0r-3,163v-9,-1,-24,5,-26,-4r0,-64v-42,19,-111,11,-101,-50r0,-47v4,-4,27,-6,29,2v1,37,-8,84,32,81v15,-1,28,-5,40,-10r0,-71","w":168},"\u0448":{"d":"206,-163v2,-8,28,-8,29,0r0,153v1,6,-4,10,-9,10r-190,0v-5,0,-10,-4,-9,-10r1,-155v3,-5,26,-6,28,2r0,138r61,0r1,-140v3,-5,27,-6,27,2r0,138r61,0r0,-138","w":262},"\u0449":{"d":"235,-25v10,2,30,-5,29,7v-2,24,4,57,-3,75v-7,0,-19,3,-21,-3r0,-54r-204,0v-5,0,-10,-4,-9,-10r1,-155v3,-5,26,-6,28,2r0,138r61,0r1,-140v3,-5,27,-6,27,2r0,138r61,0r1,-140v3,-4,28,-7,28,2r0,138","w":269,"k":{"\u201c":7,"\u2018":7,";":-9,",":-15,"\u0454":3,"\u044a":5,"\u0447":2,"\u0445":-3,"\u0444":4,"\u0475":3,"\u045e":3,"\u0443":3,"\u0442":4,"\u0441":4,"\u0473":4,"\u043e":4,"\u0451":3,"\u0450":3,"\u0435":3,"\u0434":-8,"\u0431":2}},"\u044a":{"d":"73,-167v17,4,4,41,8,60v51,-4,101,2,101,52v1,55,-58,63,-115,56v-10,-1,-14,-6,-15,-16r0,-126v-15,-1,-33,1,-47,-1v-5,-3,-6,-25,3,-25r65,0xm81,-22v34,4,71,1,71,-31v0,-33,-38,-33,-71,-30r0,61","w":193,"k":{"\u201c":20,"\u2018":20,"\u0445":2,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":14,"\u0436":2}},"\u044b":{"d":"184,-163v2,-9,29,-7,29,0r-3,163v-9,-1,-24,5,-26,-4r0,-159xm27,-163v2,-8,29,-7,29,0r0,56v50,-4,98,3,98,52v0,55,-57,63,-113,56v-10,-1,-14,-6,-14,-16r0,-148xm56,-22v33,4,68,1,68,-31v0,-34,-36,-33,-68,-30r0,61","w":239},"\u044c":{"d":"56,-107v51,-4,102,2,102,52v0,56,-60,63,-117,56v-10,-1,-14,-6,-14,-16r1,-150v3,-5,26,-6,28,2r0,56xm56,-22v34,4,72,2,72,-31v0,-33,-39,-33,-72,-30r0,61","w":169,"k":{"\u201c":20,"\u2018":20,"\u0445":2,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":14,"\u0436":2}},"\u044d":{"d":"114,-97v2,-55,-65,-59,-96,-32v-12,-31,25,-42,52,-42v49,0,74,34,74,84v0,54,-22,89,-76,90v-30,1,-66,-12,-50,-41v17,15,63,29,83,5v8,-9,12,-23,13,-42r-80,0v-7,-1,-6,-20,0,-22r80,0","w":159,"k":{"\u201c":4,"\u2018":4,"\u0445":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3,"\u0459":7,"\u043b":7,"\u0436":3,"\u0434":10}},"\u0454":{"d":"143,-37v16,26,-22,40,-52,40v-54,0,-70,-34,-75,-86v-7,-75,84,-115,128,-66v0,8,3,19,-3,21v-27,-30,-101,-21,-95,31r80,0v6,2,7,22,0,22r-80,0v2,32,15,55,48,55v23,1,34,-12,49,-17","w":159},"\u044e":{"d":"169,-171v52,0,75,34,75,85v0,53,-25,88,-78,89v-52,0,-72,-30,-75,-78r-35,0v-2,24,3,55,-3,75v-9,-1,-23,5,-26,-4r1,-161v3,-5,26,-6,28,2r0,65r36,0v5,-44,29,-73,77,-73xm166,-21v36,0,48,-28,48,-63v0,-33,-10,-62,-46,-62v-35,0,-47,26,-47,62v0,36,9,63,45,63","w":259,"k":{"\u201c":4,"\u2018":4,"\u0445":4,"\u0475":2,"\u045e":2,"\u0443":2,"\u0442":3,"\u0459":7,"\u043b":7,"\u0436":3,"\u0434":10}},"\u044f":{"d":"91,-169v22,0,53,-6,53,14r-3,155v-9,-1,-24,5,-26,-4r0,-67v-59,-10,-57,40,-79,71v-14,4,-35,1,-21,-17v9,-24,18,-51,41,-61v-20,-4,-38,-18,-37,-42v2,-37,31,-49,72,-49xm48,-119v0,31,35,27,67,27r0,-54v-31,-2,-67,-4,-67,27","w":170},"\u0452":{"d":"109,-167v51,2,61,49,61,101v0,67,-10,138,-78,128v0,-8,-5,-22,4,-24v48,-1,44,-53,44,-101v0,-39,-2,-79,-37,-79v-21,0,-31,15,-44,30v-2,36,3,80,-3,112v-8,-1,-26,6,-26,-4r0,-190v-19,5,-44,-6,-25,-23r25,0v-5,-19,4,-38,28,-25v2,6,0,17,1,25v16,4,47,-11,47,12v0,21,-31,7,-47,11r0,53v12,-14,26,-27,50,-26","w":194,"k":{"\u0447":4,"\u0475":8,"\u045e":8,"\u0443":8,"\u0442":8,"\u043c":3,"\u0459":6,"\u043b":6,"\u0434":6}},"\u045b":{"d":"109,-168v75,-5,59,103,54,168v-9,-1,-24,5,-26,-4v-6,-52,20,-139,-34,-139v-21,0,-32,15,-44,30v-2,36,3,80,-3,113v-8,-1,-26,6,-26,-4r0,-190v-17,2,-41,2,-28,-22v7,-2,19,0,28,-1v-5,-19,4,-38,28,-25v2,6,0,17,1,25v19,-1,62,-5,42,23r-42,0r0,52v13,-15,27,-25,50,-26","w":191},"\u0463":{"d":"116,-167v8,1,9,22,0,23r-46,0r0,41v51,-4,102,1,102,50v0,58,-69,62,-125,52v-4,-3,-6,-7,-6,-14r0,-128v-19,4,-50,-2,-31,-24r31,0v-1,-22,-6,-56,29,-40r0,40r46,0xm70,-21v33,3,72,3,72,-30v0,-33,-37,-31,-72,-30r0,60","w":186,"k":{"\u201c":20,"\u2018":20,"\u0445":2,"\u0475":9,"\u045e":9,"\u0443":9,"\u0442":14,"\u0436":2}},"!":{"d":"49,-233v0,-13,26,-10,32,-4r-3,174v-4,4,-26,6,-26,-3xm65,-38v14,0,19,6,19,20v0,14,-5,20,-19,20v-14,0,-18,-7,-18,-20v0,-14,3,-20,18,-20","w":117},"\u00a1":{"d":"68,25v0,13,-26,10,-32,4r3,-174v4,-4,26,-6,26,3xm52,-170v-14,-0,-19,-6,-19,-20v0,-14,5,-20,19,-20v14,-0,18,7,18,20v0,14,-3,20,-18,20","w":117},"?":{"d":"24,-223v38,-37,132,-19,126,49v-4,40,-21,64,-60,66v1,22,3,65,-28,43v4,-22,-15,-64,16,-63v29,0,40,-16,42,-44v4,-51,-63,-53,-91,-31v-7,0,-6,-14,-5,-20xm76,-38v14,0,19,6,19,20v0,14,-5,20,-19,20v-14,0,-18,-7,-18,-20v0,-14,4,-20,18,-20","w":166,"k":{"\u201d":-6,"\u2019":-6}},"\u00bf":{"d":"143,15v-38,37,-132,19,-126,-49v4,-40,21,-64,60,-66v-1,-22,-3,-65,28,-43v-4,22,15,64,-16,63v-29,-0,-40,16,-42,44v-4,51,63,53,91,31v7,-0,6,14,5,20xm91,-170v-14,-0,-19,-6,-19,-20v0,-14,5,-20,19,-20v14,-0,18,7,18,20v0,14,-4,20,-18,20","w":166,"k":{"\u00ff":12,"\u0177":12,"\u00fd":12,"\u1ef3":12,"y":12,"\u1e85":13,"\u0175":13,"\u1e83":13,"\u1e81":13,"w":13,"v":11,"j":-4,"f":8,"\u0178":20,"\u0176":20,"\u00dd":20,"\u1ef2":20,"Y":20,"V":17,"\u0162":18,"\u0164":18,"T":18}},"\u203d":{"d":"89,-111v35,-1,54,-46,31,-73v-7,-7,-17,-12,-30,-14xm22,-185v-16,-24,18,-36,38,-37v-9,-22,13,-38,31,-23r0,23v39,4,69,24,69,64v0,44,-31,64,-71,70v4,18,-3,39,-26,26r-3,-136v-17,1,-25,10,-38,13xm76,-38v14,-1,18,7,18,20v0,13,-4,20,-18,20v-15,0,-19,-6,-19,-20v0,-14,5,-20,19,-20","w":174},",":{"d":"41,-39v34,-9,27,34,14,49v-12,14,-20,51,-48,38v8,-24,27,-38,24,-73v-1,-9,3,-13,10,-14","w":89,"k":{"\u2013":9,"\u201d":25,"\u201c":32,"\u2019":25,"\u2018":32,"\u03ab":25,"\u03a5":25,"\u03a4":23,"\u039b":-3,"\u0394":-3,"\u0386":-4,"\u0391":-3,"\u0163":8,"\u0165":8,"t":8,"\u0178":26,"\u0176":26,"\u00dd":26,"\u1ef2":26,"Y":26,"X":-2,"\u1e84":26,"\u0174":26,"\u1e82":26,"\u1e80":26,"W":26,"V":24,"\u0162":23,"\u0164":23,"T":23,"\u0134":-4,"J":-4,"\u0104":-3,"\u01fa":-3,"\u00c5":-3,"\u0102":-3,"\u0100":-3,"\u00c4":-3,"\u00c3":-3,"\u00c2":-3,"\u00c1":-3,"\u00c0":-3,"A":-3}},";":{"d":"51,-161v14,0,19,6,19,20v0,14,-5,20,-19,20v-14,0,-18,-7,-18,-20v0,-13,4,-20,18,-20xm46,-39v34,-9,25,34,13,49v-12,14,-20,50,-46,38v5,-27,27,-37,23,-73v-1,-9,3,-13,10,-14","w":96},":":{"d":"51,-161v14,0,19,6,19,20v0,14,-5,20,-19,20v-14,0,-18,-7,-18,-20v0,-13,4,-20,18,-20xm51,-39v15,0,19,6,19,20v0,14,-4,21,-19,21v-15,0,-18,-8,-18,-21v0,-13,4,-20,18,-20","w":96},".":{"d":"46,-39v14,0,18,5,18,20v0,16,-5,20,-19,21v-15,0,-18,-6,-18,-21v0,-16,4,-20,19,-20","w":90,"k":{"-":20,"\u201d":26,"\u201c":34,"\u2019":26,"\u2018":34,"\u03ab":31,"\u03a5":31,"\u03a4":23,"\u039f":5,"\u039b":-2,"\u0398":5,"\u0394":-2,"\u0386":-2,"\u0391":-2,"\u017c":-2,"\u017e":-2,"\u017a":-2,"z":-2,"\u00ff":14,"\u0177":14,"\u00fd":14,"\u1ef3":14,"y":14,"\u1e85":12,"\u0175":12,"\u1e83":12,"\u1e81":12,"w":12,"v":14,"\u0163":8,"\u0165":8,"t":8,"\u0123":-4,"\u0121":-4,"\u011f":-4,"\u011d":-4,"g":-4,"f":7,"\u0178":33,"\u0176":33,"\u00dd":33,"\u1ef2":33,"Y":33,"\u1e84":25,"\u0174":25,"\u1e82":25,"\u1e80":25,"W":25,"V":27,"\u0172":3,"\u0170":3,"\u016e":3,"\u016c":3,"\u016a":3,"\u00dc":3,"\u0168":3,"\u00db":3,"\u00da":3,"\u00d9":3,"U":3,"\u0162":27,"\u0164":27,"T":27,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":-3,"J":-3,"\u0122":7,"\u0120":7,"\u011e":7,"\u011c":7,"G":7,"\u00c7":7,"\u010a":7,"\u010c":7,"\u0108":7,"\u0106":7,"C":7,"\u0104":-2,"\u01fa":-2,"\u00c5":-2,"\u0102":-2,"\u0100":-2,"\u00c4":-2,"\u00c3":-2,"\u00c2":-2,"\u00c1":-2,"\u00c0":-2,"A":-2}},"\u2026":{"d":"45,-39v14,0,18,5,18,20v0,15,-4,20,-18,21v-15,0,-19,-4,-19,-20v0,-16,4,-21,19,-21xm124,-39v15,0,19,4,19,20v0,16,-5,20,-19,21v-14,0,-18,-5,-18,-20v0,-15,3,-21,18,-21xm204,-39v14,0,18,5,18,20v0,16,-5,20,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":248},"\u2018":{"d":"49,-156v-33,9,-28,-34,-14,-49v12,-13,20,-50,47,-38v-6,26,-27,37,-24,73v0,8,-2,13,-9,14","w":89,"k":{".":34,",":33,"\u03cc":12,"\u03bf":12,"\u03ab":-8,"\u03a5":-8,"\u03a4":-15,"\u039f":5,"\u039b":30,"\u0398":5,"\u0394":30,"\u0391":30,"\u0219":8,"\u015f":8,"\u0161":8,"\u015d":8,"\u015b":8,"s":8,"q":16,"\u0153":12,"\u01ff":12,"\u00f8":12,"\u0151":12,"\u014f":12,"\u014d":12,"\u00f6":12,"\u00f5":12,"\u00f4":12,"\u00f3":12,"\u00f2":12,"o":12,"\u012d":-15,"\u012b":-11,"\u00ef":-12,"\u0129":-21,"\u00ee":-15,"\u00ec":-14,"\u0123":14,"\u0121":14,"\u011f":14,"\u011d":14,"g":14,"\u0119":15,"\u0117":15,"\u0115":15,"\u0113":15,"\u00eb":15,"\u011b":15,"\u00ea":15,"\u00e9":15,"\u00e8":15,"e":15,"d":16,"\u00e7":17,"\u010b":17,"\u010d":17,"\u0109":17,"\u0107":17,"c":17,"\u00e6":9,"\u01fb":9,"\u00e5":9,"\u0103":9,"\u0101":9,"\u00e4":9,"\u00e3":9,"\u00e2":9,"\u00e1":9,"\u00e0":9,"a":9,"\u0178":-8,"\u0176":-8,"\u00dd":-8,"\u1ef2":-8,"Y":-8,"\u1e84":-2,"\u0174":-2,"\u1e82":-2,"\u1e80":-2,"W":-2,"V":-10,"\u0162":-16,"\u0164":-16,"T":-16,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":16,"J":16,"\u0122":6,"\u0120":6,"\u011e":6,"\u011c":6,"G":6,"\u00c6":35,"\u0104":30,"\u01fa":30,"\u00c5":30,"\u0102":30,"\u0100":30,"\u00c4":30,"\u00c3":30,"\u00c2":30,"\u00c1":30,"\u00c0":30,"A":30}},"\u2019":{"d":"41,-246v33,-8,28,34,14,49v-13,14,-18,49,-48,39v9,-24,27,-38,24,-74v0,-9,4,-12,10,-14","w":89,"k":{".":34,",":35,"\u03cc":30,"\u03bf":30,"\u03a4":-3,"\u039f":12,"\u039b":43,"\u0398":12,"\u0394":43,"\u0391":43,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"x":8,"\u1e85":5,"\u0175":5,"\u1e83":5,"\u1e81":5,"w":5,"v":5,"\u0173":8,"\u0171":8,"\u016f":8,"\u016d":8,"\u016b":8,"\u00fc":8,"\u0169":8,"\u00fb":8,"\u00fa":8,"\u00f9":8,"u":8,"\u0219":22,"\u015f":22,"\u0161":22,"\u015d":22,"\u015b":22,"s":22,"\u0157":8,"\u0159":8,"\u0155":8,"r":8,"q":25,"p":8,"\u0153":26,"\u01ff":26,"\u00f8":26,"\u0151":26,"\u014f":26,"\u014d":26,"\u00f6":26,"\u00f5":26,"\u00f4":26,"\u00f3":26,"\u00f2":26,"o":26,"\u014b":8,"\u0146":8,"\u00f1":8,"\u0148":8,"\u0144":8,"n":8,"m":8,"j":2,"\u0131":8,"\u012d":-11,"\u012b":-8,"\u00ef":-8,"\u0129":-9,"\u00ee":-7,"\u00ec":-11,"i":-1,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"\u0119":25,"\u0117":25,"\u0115":25,"\u0113":25,"\u00eb":25,"\u011b":25,"\u00ea":25,"\u00e9":25,"\u00e8":25,"e":25,"d":25,"\u00e7":26,"\u010b":26,"\u010d":26,"\u0109":26,"\u0107":26,"c":26,"\u00e6":26,"\u01fb":26,"\u00e5":26,"\u0103":26,"\u0101":26,"\u00e4":26,"\u00e3":26,"\u00e2":26,"\u00e1":26,"\u00e0":26,"a":26,"\u0178":-2,"\u0176":-2,"\u00dd":-2,"\u1ef2":-2,"Y":-2,"\u0162":-3,"\u0164":-3,"T":-3,"Q":14,"\u0152":14,"\u0150":14,"\u014e":14,"\u014c":14,"\u00d6":14,"\u00d5":14,"\u00d4":14,"\u00d3":14,"\u00d2":14,"O":14,"\u0134":23,"J":23,"\u0122":14,"\u0120":14,"\u011e":14,"\u011c":14,"G":14,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":53,"\u0104":46,"\u01fa":46,"\u00c5":46,"\u0102":46,"\u0100":46,"\u00c4":46,"\u00c3":46,"\u00c2":46,"\u00c1":46,"\u00c0":46,"A":46}},"\u201c":{"d":"110,-156v-32,8,-26,-35,-13,-49v12,-13,20,-50,46,-38v-8,24,-27,38,-24,73v0,8,-3,12,-9,14xm47,-156v-32,8,-26,-35,-13,-49v12,-13,20,-50,46,-38v-8,24,-27,38,-24,73v0,8,-3,12,-9,14","w":150,"k":{".":34,",":33,"\u03cc":12,"\u03bf":12,"\u03ab":-8,"\u03a5":-8,"\u03a4":-15,"\u039f":5,"\u039b":30,"\u0398":5,"\u0394":30,"\u0391":30,"\u0219":8,"\u015f":8,"\u0161":8,"\u015d":8,"\u015b":8,"s":8,"q":16,"\u0153":12,"\u01ff":12,"\u00f8":12,"\u0151":12,"\u014f":12,"\u014d":12,"\u00f6":12,"\u00f5":12,"\u00f4":12,"\u00f3":12,"\u00f2":12,"o":12,"\u012d":-15,"\u012b":-11,"\u00ef":-12,"\u0129":-21,"\u00ee":-15,"\u00ec":-14,"\u0123":14,"\u0121":14,"\u011f":14,"\u011d":14,"g":14,"\u0119":15,"\u0117":15,"\u0115":15,"\u0113":15,"\u00eb":15,"\u011b":15,"\u00ea":15,"\u00e9":15,"\u00e8":15,"e":15,"d":16,"\u00e7":17,"\u010b":17,"\u010d":17,"\u0109":17,"\u0107":17,"c":17,"\u00e6":9,"\u01fb":9,"\u00e5":9,"\u0103":9,"\u0101":9,"\u00e4":9,"\u00e3":9,"\u00e2":9,"\u00e1":9,"\u00e0":9,"a":9,"\u0178":-8,"\u0176":-8,"\u00dd":-8,"\u1ef2":-8,"Y":-8,"\u1e84":-2,"\u0174":-2,"\u1e82":-2,"\u1e80":-2,"W":-2,"V":-10,"\u0162":-16,"\u0164":-16,"T":-16,"Q":4,"\u0152":4,"\u0150":4,"\u014e":4,"\u014c":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"O":4,"\u0134":16,"J":16,"\u0122":6,"\u0120":6,"\u011e":6,"\u011c":6,"G":6,"\u00c6":35,"\u0104":30,"\u01fa":30,"\u00c5":30,"\u0102":30,"\u0100":30,"\u00c4":30,"\u00c3":30,"\u00c2":30,"\u00c1":30,"\u00c0":30,"A":30}},"\u201d":{"d":"103,-246v34,-8,27,34,14,49v-11,14,-20,50,-46,38v5,-27,27,-37,23,-73v0,-8,2,-13,9,-14xm40,-246v34,-8,27,34,14,49v-11,14,-20,50,-46,38v5,-27,27,-37,23,-73v0,-8,2,-13,9,-14","w":150,"k":{".":34,",":35,"\u03cc":30,"\u03bf":30,"\u03a4":-3,"\u039f":12,"\u039b":43,"\u0398":12,"\u0394":43,"\u0391":43,"\u017c":4,"\u017e":4,"\u017a":4,"z":4,"\u00ff":8,"\u0177":8,"\u00fd":8,"\u1ef3":8,"y":8,"x":8,"\u1e85":5,"\u0175":5,"\u1e83":5,"\u1e81":5,"w":5,"v":5,"\u0173":8,"\u0171":8,"\u016f":8,"\u016d":8,"\u016b":8,"\u00fc":8,"\u0169":8,"\u00fb":8,"\u00fa":8,"\u00f9":8,"u":8,"\u0219":22,"\u015f":22,"\u0161":22,"\u015d":22,"\u015b":22,"s":22,"\u0157":8,"\u0159":8,"\u0155":8,"r":8,"q":25,"p":8,"\u0153":26,"\u01ff":26,"\u00f8":26,"\u0151":26,"\u014f":26,"\u014d":26,"\u00f6":26,"\u00f5":26,"\u00f4":26,"\u00f3":26,"\u00f2":26,"o":26,"\u014b":8,"\u0146":8,"\u00f1":8,"\u0148":8,"\u0144":8,"n":8,"m":8,"j":2,"\u0131":8,"\u012d":-11,"\u012b":-8,"\u00ef":-8,"\u0129":-9,"\u00ee":-7,"\u00ec":-11,"i":-1,"\u0123":25,"\u0121":25,"\u011f":25,"\u011d":25,"g":25,"\u0119":25,"\u0117":25,"\u0115":25,"\u0113":25,"\u00eb":25,"\u011b":25,"\u00ea":25,"\u00e9":25,"\u00e8":25,"e":25,"d":25,"\u00e7":26,"\u010b":26,"\u010d":26,"\u0109":26,"\u0107":26,"c":26,"\u00e6":26,"\u01fb":26,"\u00e5":26,"\u0103":26,"\u0101":26,"\u00e4":26,"\u00e3":26,"\u00e2":26,"\u00e1":26,"\u00e0":26,"a":26,"\u0178":-2,"\u0176":-2,"\u00dd":-2,"\u1ef2":-2,"Y":-2,"\u0162":-3,"\u0164":-3,"T":-3,"Q":14,"\u0152":14,"\u0150":14,"\u014e":14,"\u014c":14,"\u00d6":14,"\u00d5":14,"\u00d4":14,"\u00d3":14,"\u00d2":14,"O":14,"\u0134":23,"J":23,"\u0122":14,"\u0120":14,"\u011e":14,"\u011c":14,"G":14,"\u00c7":12,"\u010a":12,"\u010c":12,"\u0108":12,"\u0106":12,"C":12,"\u00c6":53,"\u0104":46,"\u01fa":46,"\u00c5":46,"\u0102":46,"\u0100":46,"\u00c4":46,"\u00c3":46,"\u00c2":46,"\u00c1":46,"\u00c0":46,"A":46}},"\u201a":{"d":"41,-39v34,-9,27,34,14,49v-12,14,-20,51,-48,38v8,-24,27,-38,24,-73v-1,-9,3,-13,10,-14","w":89,"k":{"\u0447":14,"\u0475":15,"\u045e":15,"\u0443":15,"\u0442":16,"\u0434":-3,"\u0427":41,"\u0424":18,"\u040e":14,"\u0423":14,"\u0422":28,"\u0409":-4,"\u041b":-4,"\u0414":-4,"\u03a7":-2,"\u03ab":35,"\u03a5":35,"\u03a4":32,"\u039f":7,"\u039b":-4,"\u0398":7,"\u0394":-4,"\u0386":-5,"\u0391":-4,"\u017c":-2,"\u017e":-2,"\u017a":-2,"z":-2,"\u00ff":24,"\u0177":24,"\u00fd":24,"\u1ef3":24,"y":24,"\u1e85":23,"\u0175":23,"\u1e83":23,"\u1e81":23,"w":23,"v":23,"\u0163":9,"\u0165":9,"t":9,"\u0123":-1,"\u0121":-1,"\u011f":-1,"\u011d":-1,"g":-1,"\u00e6":-1,"\u01fb":-1,"\u00e5":-1,"\u0103":-1,"\u0101":-1,"\u00e4":-1,"\u00e3":-1,"\u00e2":-1,"\u00e1":-1,"\u00e0":-1,"a":-1,"\u0178":38,"\u0176":38,"\u00dd":38,"\u1ef2":38,"Y":38,"X":-2,"\u1e84":27,"\u0174":27,"\u1e82":27,"\u1e80":27,"W":27,"V":34,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":34,"\u0164":34,"T":34,"Q":8,"\u0152":8,"\u0150":8,"\u014e":8,"\u014c":8,"\u00d6":8,"\u00d5":8,"\u00d4":8,"\u00d3":8,"\u00d2":8,"O":8,"\u0134":-5,"J":-5,"\u0122":5,"\u0120":5,"\u011e":5,"\u011c":5,"G":5,"\u00c7":5,"\u010a":5,"\u010c":5,"\u0108":5,"\u0106":5,"C":5,"\u00c6":-9,"\u0104":-4,"\u01fa":-4,"\u00c5":-4,"\u0102":-4,"\u0100":-4,"\u00c4":-4,"\u00c3":-4,"\u00c2":-4,"\u00c1":-4,"\u00c0":-4,"A":-4}},"\u201e":{"d":"103,-39v34,-8,26,33,14,49v-11,14,-21,50,-46,38v6,-26,26,-38,23,-73v0,-8,2,-13,9,-14xm40,-39v34,-8,26,33,14,49v-10,13,-25,54,-46,36v8,-23,26,-37,23,-71v0,-8,2,-13,9,-14","w":150,"k":{"\u0447":14,"\u0475":15,"\u045e":15,"\u0443":15,"\u0442":16,"\u0434":-3,"\u0427":41,"\u0424":18,"\u040e":14,"\u0423":14,"\u0422":28,"\u0409":-4,"\u041b":-4,"\u0414":-4,"\u03a7":-2,"\u03ab":35,"\u03a5":35,"\u03a4":32,"\u039f":7,"\u039b":-4,"\u0398":7,"\u0394":-4,"\u0386":-5,"\u0391":-4,"\u017c":-2,"\u017e":-2,"\u017a":-2,"z":-2,"\u00ff":24,"\u0177":24,"\u00fd":24,"\u1ef3":24,"y":24,"\u1e85":23,"\u0175":23,"\u1e83":23,"\u1e81":23,"w":23,"v":23,"\u0163":9,"\u0165":9,"t":9,"\u0123":-1,"\u0121":-1,"\u011f":-1,"\u011d":-1,"g":-1,"\u00e6":-1,"\u01fb":-1,"\u00e5":-1,"\u0103":-1,"\u0101":-1,"\u00e4":-1,"\u00e3":-1,"\u00e2":-1,"\u00e1":-1,"\u00e0":-1,"a":-1,"\u0178":38,"\u0176":38,"\u00dd":38,"\u1ef2":38,"Y":38,"X":-2,"\u1e84":27,"\u0174":27,"\u1e82":27,"\u1e80":27,"W":27,"V":34,"\u0172":6,"\u0170":6,"\u016e":6,"\u016c":6,"\u016a":6,"\u00dc":6,"\u0168":6,"\u00db":6,"\u00da":6,"\u00d9":6,"U":6,"\u0162":34,"\u0164":34,"T":34,"Q":8,"\u0152":8,"\u0150":8,"\u014e":8,"\u014c":8,"\u00d6":8,"\u00d5":8,"\u00d4":8,"\u00d3":8,"\u00d2":8,"O":8,"\u0134":-5,"J":-5,"\u0122":5,"\u0120":5,"\u011e":5,"\u011c":5,"G":5,"\u00c7":5,"\u010a":5,"\u010c":5,"\u0108":5,"\u0106":5,"C":5,"\u00c6":-9,"\u0104":-4,"\u01fa":-4,"\u00c5":-4,"\u0102":-4,"\u0100":-4,"\u00c4":-4,"\u00c3":-4,"\u00c2":-4,"\u00c1":-4,"\u00c0":-4,"A":-4}},"\u2039":{"d":"61,-160v2,-7,26,-7,27,0v-11,24,-27,46,-39,69r39,68v0,9,-24,6,-26,1v-14,-24,-31,-44,-42,-70v11,-24,28,-45,41,-68","w":121},"\u203a":{"d":"35,-157v-4,-7,4,-8,11,-8v5,1,14,0,14,5v13,23,30,43,41,69v-10,27,-28,48,-42,71v-6,2,-30,5,-24,-5r37,-66","w":121},"\u00ab":{"d":"126,-157v3,-6,27,-7,27,0v-11,23,-27,43,-39,65r40,67v-4,5,-25,6,-28,-1v-13,-22,-29,-42,-41,-66v11,-24,28,-43,41,-65xm61,-160v3,-7,26,-7,27,0v-11,24,-26,46,-38,69r38,68v0,9,-22,6,-26,1v-13,-24,-31,-43,-41,-70v10,-26,28,-44,40,-68","w":184},"\u00bb":{"d":"97,-157v-4,-7,4,-8,11,-8v5,1,13,0,15,5r41,69v-13,26,-27,51,-45,72v-8,0,-28,4,-22,-6r38,-66xm31,-154v-3,-6,5,-8,12,-7v6,1,12,0,15,4v13,22,29,42,41,66v-11,25,-29,45,-42,68v-7,3,-30,4,-25,-5r38,-63","w":184},"\/":{"d":"108,-251v1,-11,32,-10,28,2r-106,291v0,9,-26,11,-29,2","w":139,"k":{"\u2089":41,"\u2088":44,"\u2087":34,"\u2086":49,"\u2085":44,"\u2084":52,"\u2083":47,"\u2082":44,"\u2081":33,"\u2080":49,"\u2079":41,"\u2078":44,"\u2077":34,"\u2076":49,"\u2075":44,"\u2074":52,"\u00b3":47,"\u00b2":44,"\u00b9":33,"\u2070":49,"\u03cc":7,"\u03bf":7,"\u039b":14,"\u0394":14,"\u0391":14,"\u0219":7,"\u015f":7,"\u0161":7,"\u015d":7,"\u015b":7,"s":7,"\u0153":6,"\u01ff":6,"\u00f8":6,"\u0151":6,"\u014f":6,"\u014d":6,"\u00f6":6,"\u00f5":6,"\u00f4":6,"\u00f3":6,"\u00f2":6,"o":6,"\u0123":6,"\u0121":6,"\u011f":6,"\u011d":6,"g":6,"\u0119":7,"\u0117":7,"\u0115":7,"\u0113":7,"\u00eb":7,"\u011b":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"e":7,"\u00e7":7,"\u010b":7,"\u010d":7,"\u0109":7,"\u0107":7,"c":7,"\u00e6":7,"\u01fb":7,"\u00e5":7,"\u0103":7,"\u0101":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"a":7,"\u0134":7,"J":7,"\u00c6":12,"\u0104":12,"\u01fa":12,"\u00c5":12,"\u0102":12,"\u0100":12,"\u00c4":12,"\u00c3":12,"\u00c2":12,"\u00c1":12,"\u00c0":12,"A":12}},"|":{"d":"94,-251v5,97,3,217,0,314v-9,0,-22,5,-25,-4r3,-310v7,0,16,-2,22,0","w":165},"\u00a6":{"d":"103,-133v-1,7,-27,8,-27,0v2,-39,-4,-86,2,-121v8,-2,22,-4,25,4r0,117xm76,-55v1,-9,26,-7,27,0v-2,39,3,87,-3,122v-8,1,-24,5,-24,-4r0,-118","w":179},"\\":{"d":"2,-253v2,-7,29,-6,29,1r108,296v-2,6,-28,7,-29,-1","w":139},"-":{"d":"92,-101v8,0,10,25,0,24r-74,0v-9,0,-8,-23,0,-24r74,0","w":110,"k":{"\u0442":7,"\u0422":15,"\u0410":4,"\u03ab":18,"\u03a5":18,"\u00ff":4,"\u0177":4,"\u00fd":4,"\u1ef3":4,"y":4,"x":7,"v":3,"f":3,"\u0178":18,"\u0176":18,"\u00dd":18,"\u1ef2":18,"Y":18}},"\u2010":{"d":"92,-101v8,0,10,25,0,24r-74,0v-9,0,-8,-23,0,-24r74,0","w":110},"\u00ad":{"d":"92,-101v8,0,10,25,0,24r-74,0v-9,0,-8,-23,0,-24r74,0","w":110},"\u2013":{"d":"174,-112v6,0,7,6,6,13v0,7,-1,12,-6,12r-169,0v-10,0,-9,-25,0,-25r169,0","w":179},"\u2014":{"d":"293,-112v6,1,7,5,7,13v0,7,-1,12,-7,12r-260,0v-6,0,-7,-5,-7,-12v0,-7,1,-13,7,-13r260,0","w":325},"\u2015":{"d":"293,-112v6,1,7,5,7,13v0,7,-1,12,-7,12r-260,0v-6,0,-7,-5,-7,-12v0,-7,1,-13,7,-13r260,0","w":325},"_":{"d":"174,41v5,0,6,4,6,11v0,7,-1,12,-6,12r-169,0v-6,1,-6,-5,-6,-11v0,-7,1,-12,6,-12r169,0","w":179},"\u2022":{"d":"90,-169v32,0,55,21,55,56v0,35,-23,56,-56,56v-32,0,-55,-21,-55,-56v0,-35,23,-56,56,-56","w":179},"\u00b7":{"d":"46,-123v14,0,18,5,18,20v0,16,-4,21,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":90},"\u2219":{"d":"46,-123v14,0,18,5,18,20v0,16,-4,21,-19,21v-14,0,-18,-5,-18,-20v0,-16,4,-21,19,-21","w":90},"(":{"d":"88,-245v-44,81,-44,220,0,301v-2,7,-22,7,-26,1v-51,-76,-50,-233,3,-305v8,0,21,-4,23,3","w":109,"k":{"j":-11,"\u0123":-2,"\u0121":-2,"\u011f":-2,"\u011d":-2,"g":-2}},")":{"d":"44,-248v54,77,52,230,2,307v-8,1,-22,5,-24,-3v41,-82,43,-218,0,-301v0,-7,15,-4,22,-3","w":109},"[":{"d":"90,-246v6,2,7,20,0,22r-29,0r0,259v17,-3,46,1,29,21v-19,-4,-56,10,-56,-12r0,-278v1,-21,37,-9,56,-12","w":110},"]":{"d":"16,-235v2,-22,61,-15,61,1r0,278v0,22,-36,9,-56,12v-7,1,-5,-13,-4,-19v7,-4,22,-1,33,-2r0,-259v-13,-2,-36,7,-34,-11","w":110},"{":{"d":"88,34v15,-5,19,16,9,22v-56,10,-53,-45,-51,-99v1,-29,-9,-42,-30,-48v0,-7,-4,-18,5,-19v58,-9,-16,-158,78,-136v6,7,4,26,-10,21v-25,2,-16,40,-16,68v0,32,-7,52,-31,58v35,6,31,49,31,91v0,21,-3,40,15,42","w":113},"}":{"d":"24,-246v98,-22,13,134,81,136v4,4,5,20,-3,21v-58,9,16,171,-80,142v-1,-10,-3,-22,12,-19v25,-2,16,-40,16,-68v0,-33,6,-58,31,-65v-35,-4,-32,-43,-31,-84v0,-27,1,-44,-26,-43v-4,-2,-5,-17,0,-20","w":113},"*":{"d":"76,-243v-2,-9,18,-6,24,-5v5,14,-3,34,-3,51v17,-9,44,-45,53,-9v-10,13,-31,14,-45,23r43,19v6,5,-5,24,-13,22r-38,-27r5,46v1,8,-19,6,-24,4v-5,-13,3,-34,3,-50v-17,9,-44,45,-53,9v10,-13,31,-14,45,-23r-43,-19v-6,-5,5,-24,13,-22r38,27","w":179},"\u2020":{"d":"101,-187v21,3,70,-12,55,22v-16,3,-37,0,-55,1v7,40,5,91,-4,129v-7,0,-16,4,-17,-4v-3,-42,-11,-86,-1,-125v-20,-3,-70,12,-55,-22v16,-3,37,0,55,-1v-2,-17,-6,-37,-4,-55v10,-9,40,-4,30,16","w":179},"\u2021":{"d":"153,-81v8,3,8,22,0,24r-53,0v2,17,6,32,5,52v-6,13,-44,8,-30,-13v1,-14,1,-26,4,-39v-18,-2,-44,4,-57,-3v0,-8,-4,-21,5,-21r51,0v-7,-24,-6,-59,0,-83v-20,-3,-69,12,-54,-22v16,-3,37,0,55,-1r-6,-53v0,-9,27,-8,32,-2v0,20,-3,38,-5,55v22,0,75,-7,53,23r-52,0v7,21,7,61,0,83r52,0","w":179},"\u00a7":{"d":"134,-202v-21,-12,-76,-24,-66,22v21,37,93,23,92,83v0,25,-16,38,-30,49v32,32,1,84,-49,84v-25,0,-63,-12,-45,-38v24,23,101,18,71,-30v-29,-24,-86,-21,-86,-74v1,-24,14,-39,30,-48v-30,-29,-7,-82,43,-82v24,0,50,7,40,34xm50,-108v1,35,81,68,81,13v0,-32,-40,-31,-60,-46v-13,5,-20,17,-21,33","w":179},"\u00b6":{"d":"170,-227v5,0,10,5,10,10r-3,257v-7,-1,-21,5,-22,-4r0,-241r-35,0r-3,245v-8,0,-22,4,-23,-4r0,-130v-47,0,-74,-21,-75,-66v-1,-73,76,-69,151,-67","w":210},"^":{"d":"70,-224v6,-8,30,-8,37,0r53,120v-1,7,-28,6,-31,-1r-41,-97r-39,97v-4,6,-37,11,-29,-5","w":179},"~":{"d":"146,-189v1,-8,18,-5,23,-2v2,35,-14,55,-45,57v-40,2,-36,-38,-68,-41v-17,-2,-22,14,-22,30v0,7,-19,7,-23,2v-11,-63,69,-71,92,-27v11,21,48,12,43,-19","w":179},"'":{"d":"24,-240v3,-8,28,-8,31,0v-3,28,0,62,-7,86v-8,0,-19,4,-20,-5","w":79},"\"":{"d":"87,-240v4,-8,26,-8,30,0r-6,86v-7,-1,-20,5,-20,-5xm24,-240v3,-8,28,-8,31,0v-3,28,0,62,-7,86v-8,0,-19,4,-20,-5","w":144},"&":{"d":"169,-24v-38,39,-153,40,-150,-36v2,-35,23,-51,47,-66v-12,-18,-26,-30,-26,-57v0,-37,27,-55,68,-55v35,0,60,13,60,47v0,41,-33,50,-60,69r59,61v11,-14,15,-37,16,-61v5,-5,33,-9,27,7v1,32,-10,52,-23,71v14,8,21,21,41,22v4,6,5,28,-11,25v-22,-4,-32,-16,-48,-27xm105,-214v-48,-3,-34,54,-13,74v21,-13,42,-20,46,-48v-1,-18,-13,-26,-33,-26xm81,-108v-16,11,-30,21,-31,45v-2,50,73,50,98,22v-25,-20,-46,-43,-67,-67","w":245},"@":{"d":"179,-233v70,0,112,30,112,98v0,56,-16,106,-71,106v-20,0,-33,-9,-36,-26v-22,33,-98,39,-92,-22v5,-47,17,-93,66,-93v19,0,30,11,39,23v-3,-15,14,-30,26,-16v-4,34,-21,70,-14,104v37,24,56,-31,55,-75v-1,-53,-32,-77,-87,-76v-85,2,-114,57,-120,141v-7,91,92,98,158,80v4,2,2,14,1,19v-14,11,-42,13,-66,13v-77,0,-122,-33,-120,-110v2,-100,46,-166,149,-166xm120,-79v0,47,49,20,61,1r8,-46v-7,-12,-15,-22,-30,-23v-30,5,-39,36,-39,68","w":321},"\u00a9":{"d":"54,-119v0,67,29,102,98,102v68,0,93,-42,94,-107v0,-67,-30,-102,-97,-102v-67,0,-95,40,-95,107xm150,-246v80,0,120,40,120,120v0,83,-37,130,-120,129v-80,0,-119,-40,-119,-120v0,-84,37,-128,119,-129xm155,-66v22,5,28,-21,43,-15v6,30,-20,37,-46,37v-45,0,-64,-29,-64,-76v0,-68,74,-106,111,-56v0,7,0,16,-5,15v-14,-3,-21,-17,-41,-16v-29,1,-39,24,-39,56v0,31,9,55,41,55","w":300},"\u2117":{"d":"54,-119v0,67,29,102,98,102v68,0,93,-42,94,-107v0,-67,-30,-102,-97,-102v-67,0,-95,40,-95,107xm150,-246v80,0,120,40,120,120v0,83,-37,130,-120,129v-80,0,-119,-40,-119,-120v0,-84,37,-128,119,-129xm113,-197v51,-2,100,0,100,48v0,43,-36,55,-84,52v-2,16,4,40,-3,51v-8,1,-20,3,-22,-4r0,-137v0,-5,5,-10,9,-10xm129,-117v31,2,57,0,57,-30v0,-29,-26,-32,-57,-30r0,60","w":300},"\u00ae":{"d":"92,-247v42,0,68,25,68,68v0,42,-27,68,-69,68v-43,0,-69,-27,-69,-68v0,-41,27,-68,70,-68xm91,-124v32,0,53,-21,53,-54v0,-33,-18,-55,-52,-55v-33,0,-54,21,-54,53v0,34,20,56,53,56xm91,-218v32,-6,40,36,13,41v11,4,19,20,18,33v-29,11,-12,-29,-41,-27v2,14,0,38,-18,24r0,-63v0,-13,17,-7,28,-8xm81,-185v18,5,29,-11,14,-19r-14,0r0,19","w":182},"\u2122":{"d":"86,-227v6,0,5,17,0,18r-25,0v-2,26,4,60,-2,82v-6,0,-16,3,-19,-2r0,-80v-14,3,-40,0,-25,-18r71,0xm191,-215v1,-15,36,-18,36,-4r-2,92v-6,0,-16,3,-18,-2r0,-79v-12,26,-18,59,-33,82v-5,-1,-15,2,-17,-2r-29,-80v-2,26,4,59,-2,81v-6,0,-15,3,-18,-2r0,-90v2,-15,39,-10,38,4r22,60","w":253},"\u2120":{"d":"38,-202v6,25,53,12,50,46v-1,22,-19,30,-42,31v-19,1,-40,-9,-29,-25v12,6,46,17,48,-5v-8,-23,-52,-12,-49,-45v1,-21,16,-29,38,-30v16,-1,39,8,25,24v-9,-6,-39,-14,-41,4xm192,-215v2,-14,36,-19,36,-4v0,29,4,67,-2,92v-6,0,-15,3,-18,-2r0,-79v-12,26,-17,59,-32,82v-5,-1,-15,2,-17,-2r-29,-80r-2,81v-6,0,-16,3,-18,-2r0,-90v-1,-12,21,-9,31,-6v12,20,18,47,28,70","w":255},"\u00b0":{"d":"62,-239v25,0,42,14,42,40v0,26,-18,41,-44,41v-25,0,-42,-14,-42,-40v0,-26,18,-41,44,-41xm61,-176v29,0,26,-45,0,-45v-12,0,-21,9,-21,22v-1,15,9,23,21,23","w":121},"\u00a4":{"d":"40,-52v-24,-20,-21,-77,0,-98v-9,-15,-21,-26,-28,-43v-1,-9,15,-5,24,-5v11,9,16,23,24,34v13,-9,46,-10,60,-1v12,-14,12,-39,44,-34v6,1,5,7,2,11r-26,37v21,22,19,77,-3,97v9,14,21,25,28,41v0,11,-24,8,-29,2r-19,-30v-14,8,-41,10,-56,2v-13,14,-12,39,-44,34v-6,-1,-6,-7,-2,-10xm90,-56v25,-1,38,-18,38,-45v0,-28,-11,-47,-39,-48v-27,0,-38,19,-39,45v-1,29,11,49,40,48","w":179},"\u20ac":{"d":"66,-75v-2,55,72,64,103,34v5,0,4,8,4,14v-1,27,-30,30,-56,30v-53,0,-76,-32,-84,-78v-19,6,-36,-9,-20,-23r19,0v-1,-10,0,-19,0,-30v-19,6,-35,-11,-19,-23r21,0v1,-64,80,-103,136,-63v2,6,4,19,0,25v-28,-17,-86,-26,-97,15v-2,7,-5,15,-7,23r57,0v4,5,5,23,-3,23r-56,0v0,10,-2,20,0,30v19,1,42,-2,59,1v4,4,5,21,-3,22r-54,0","w":182},"$":{"d":"148,-189v-23,-10,-96,-31,-96,17v0,66,142,31,106,133v-9,26,-37,36,-71,39v-3,17,3,55,-27,40r4,-41v-25,-1,-58,-11,-44,-40v31,19,133,29,108,-38v-32,-38,-128,-27,-102,-112v7,-24,31,-33,61,-36v2,-18,-1,-53,27,-37r-3,37v21,2,50,12,37,38","w":182},"\u00a2":{"d":"152,-71v17,22,-11,43,-35,44v3,17,1,41,-24,28v-2,-7,0,-19,-1,-28v-41,-5,-59,-36,-59,-84v0,-49,18,-80,59,-87v-3,-19,1,-41,25,-29r0,28v21,4,46,11,39,39r-5,4v-13,-7,-23,-20,-45,-19v-33,1,-43,27,-43,62v-1,37,12,60,45,62v21,1,31,-13,44,-20","w":179},"\u00a3":{"d":"161,-24v10,0,7,24,0,24r-142,-1v-5,-2,-8,-23,2,-23r22,0r0,-80v-18,6,-40,-9,-22,-24r22,0v-4,-61,11,-103,69,-102v27,1,57,8,50,40v-13,8,-26,-18,-49,-16v-38,3,-42,37,-41,78v22,1,82,-10,58,24r-58,0r0,80r89,0","w":182},"\u0192":{"d":"71,-180v-2,-48,52,-76,91,-51v1,7,3,20,-5,20v-27,-12,-59,0,-56,33r-6,42v21,-1,67,-4,45,24r-49,0v-10,56,-12,122,-26,172v-6,3,-26,5,-27,-4r24,-168v-21,3,-58,1,-37,-24r40,0","w":179},"\u00a5":{"d":"142,-223v3,-10,42,-7,28,6r-64,109r0,10r49,0v5,0,5,4,5,10v1,22,-36,6,-54,11r0,28r49,0v5,0,5,4,5,10v1,22,-36,6,-54,11v7,20,-9,41,-30,24r0,-24v-18,-4,-54,10,-54,-11v0,-21,36,-6,54,-10r0,-28v-18,-4,-54,10,-54,-11v0,-21,36,-6,54,-10r0,-10r-66,-115v2,-10,29,-7,33,0r49,92","w":182},"\u2105":{"d":"40,-172v-7,41,43,41,60,23v14,20,-11,35,-34,34v-35,-2,-53,-19,-53,-56v0,-54,63,-79,90,-42v-1,6,1,16,-5,15v-21,-16,-63,-15,-58,26xm200,-232v8,-3,30,-5,22,7r-161,229v-6,3,-30,5,-21,-7xm206,-113v37,1,58,19,57,57v-1,38,-22,58,-59,59v-39,1,-58,-20,-58,-57v0,-38,21,-59,60,-59xm204,-18v21,0,32,-13,32,-37v0,-23,-9,-37,-31,-37v-22,0,-32,14,-32,37v1,22,8,37,31,37","w":275},"\u2116":{"d":"291,-189v39,0,60,24,59,65v-1,42,-22,68,-63,68v-39,0,-60,-23,-59,-65v1,-42,21,-68,63,-68xm340,-24v5,0,6,5,6,12v0,7,-1,12,-6,12r-102,0v-8,-1,-8,-24,0,-24r102,0xm30,-214v-2,-19,31,-15,43,-9v34,57,60,123,91,183r3,-187v9,-2,23,-4,26,4r0,210v-9,27,-52,10,-52,-11r-82,-167r-3,191v-9,0,-23,5,-26,-4r0,-210xm288,-79v24,0,34,-19,34,-44v0,-25,-8,-43,-32,-43v-24,0,-33,19,-34,43v-1,26,9,44,32,44","w":368},"#":{"d":"147,-167v18,-6,37,9,20,22r-23,0r-7,59v18,-6,37,8,20,22r-23,0v-4,21,-3,46,-10,64v-9,0,-22,4,-24,-4r8,-60r-49,0v-4,21,-3,46,-10,64v-9,0,-22,4,-24,-4r8,-60v-18,6,-38,-8,-21,-22r24,0r7,-59v-12,-1,-30,5,-27,-11v-3,-17,17,-9,30,-11v4,-19,3,-44,10,-60v7,-1,21,-4,23,3r-7,57r49,0v4,-19,2,-44,9,-60v8,-2,21,-4,24,3xm69,-145r-7,59r49,0r7,-59r-49,0","w":179},"0":{"d":"94,-231v63,0,76,52,76,117v-1,65,-16,117,-81,117v-64,0,-77,-50,-76,-116v0,-66,17,-118,81,-118xm91,-21v43,0,48,-46,48,-91v0,-47,-2,-94,-47,-94v-44,0,-47,45,-48,91v0,49,3,94,47,94","w":182},"1":{"d":"115,-24v21,-1,64,-4,42,24r-121,-1v-7,-3,-7,-23,2,-23r47,0r0,-173r-49,28v-8,0,-7,-22,0,-24v23,-9,48,-49,79,-31r0,200","w":182},"2":{"d":"117,-151v17,-62,-62,-60,-88,-34v-18,-32,26,-44,57,-46v76,-4,78,89,38,132r-67,73r101,1v6,3,7,25,-2,25r-130,-1v-10,-4,-6,-27,1,-31v30,-39,76,-66,90,-119","w":182},"3":{"d":"118,-171v0,-51,-66,-33,-91,-16v-11,-35,28,-40,59,-44v74,-9,85,103,21,111v28,7,52,20,54,55v5,70,-103,87,-142,47v0,-7,-4,-21,4,-21v26,20,105,31,104,-23v-1,-39,-38,-45,-81,-43v-7,-2,-8,-24,2,-23v40,3,70,-8,70,-43","w":182},"4":{"d":"140,-77v14,1,34,-5,32,12v2,18,-17,12,-32,13v2,23,6,70,-30,48r0,-48r-97,-1v-8,-4,-5,-25,0,-32r84,-141v13,-2,36,-7,43,4r0,145xm110,-202r-74,125r74,0r0,-125","w":182},"5":{"d":"56,-137v56,-8,105,9,105,64v0,73,-95,96,-142,59v0,0,-4,-20,4,-22v31,21,106,24,106,-34v0,-46,-47,-47,-91,-42v-7,0,-9,-4,-9,-11r0,-93v0,-7,4,-12,11,-11r103,0v6,3,6,25,-2,26r-85,0r0,64","w":182},"6":{"d":"49,-125v43,-28,125,-18,119,51v-4,49,-27,77,-77,77v-61,1,-72,-47,-72,-108v-1,-73,24,-124,94,-126v23,0,53,4,42,32v-59,-22,-111,9,-106,74xm94,-21v30,0,41,-22,44,-50v6,-53,-61,-52,-89,-30v1,43,5,80,45,80","w":182},"7":{"d":"157,-227v14,-2,9,23,5,32r-84,193v-6,4,-36,8,-31,-6r86,-193r-109,0v-7,0,-8,-12,-6,-19v0,-4,2,-8,6,-7r133,0","w":182},"8":{"d":"116,-119v26,13,52,26,52,61v0,43,-33,61,-79,61v-45,1,-75,-16,-75,-56v0,-36,27,-49,52,-63v-22,-13,-44,-26,-44,-57v0,-40,30,-58,71,-58v39,0,67,16,67,53v0,32,-22,46,-44,59xm93,-130v38,-10,55,-77,-2,-77v-45,0,-50,53,-16,66v5,3,11,7,18,11xm92,-20v51,4,58,-58,18,-73v-6,-4,-13,-7,-21,-11v-21,11,-44,20,-44,48v0,25,20,34,47,36","w":182},"9":{"d":"91,-231v59,0,74,47,73,108v-2,72,-23,126,-97,126v-24,0,-55,-3,-44,-32v28,9,80,12,95,-16v8,-14,16,-34,16,-57v-12,8,-31,15,-52,14v-46,0,-68,-23,-68,-67v0,-47,27,-76,77,-76xm45,-158v-5,53,60,54,88,32v0,-44,-6,-81,-45,-81v-30,0,-40,20,-43,49","w":182},"\u2070":{"d":"71,-265v43,-1,57,28,57,70v0,43,-16,71,-58,71v-42,0,-57,-28,-57,-71v0,-43,16,-69,58,-70xm71,-145v27,0,31,-21,31,-49v0,-29,-5,-51,-32,-51v-26,0,-32,22,-32,49v0,28,5,52,33,51","w":140,"k":{"\u2044":50,"\u2087":6,"\u2082":3,"\u2077":6,"\u00b2":3,"\/":56}},"\u00b9":{"d":"6,-237v11,-14,38,-36,60,-24v-2,44,3,95,-3,135v0,0,-22,4,-22,-4r0,-110v-11,3,-36,28,-35,3","w":88,"k":{"\u2044":34,"\u2087":3,"\u2077":3,"\/":48}},"\u00b2":{"d":"103,-147v6,0,7,19,1,21r-87,-1v-13,-31,32,-43,43,-66v15,-12,22,-52,-8,-50v-17,-5,-29,20,-36,5v-1,-24,20,-25,42,-27v49,-5,53,52,26,79v-10,10,-28,27,-39,39r58,0","w":120,"k":{"\u2044":33,"\u2087":9,"\u2086":2,"\u2085":1,"\u2080":2,"\u2077":9,"\u2076":2,"\u2075":1,"\u2070":2,"\/":51}},"\u00b3":{"d":"72,-198v20,1,33,13,34,32v3,44,-62,51,-93,32v-1,-6,-5,-18,2,-20v17,11,62,18,63,-11v1,-25,-32,-17,-51,-24v-11,-31,49,-6,46,-39v-2,-27,-41,-15,-54,-7v-15,-21,17,-31,38,-30v48,-8,57,61,15,67","w":120,"k":{"\u2044":43,"\u2087":8,"\u2077":8,"\/":56}},"\u2074":{"d":"97,-177v12,0,28,-4,25,11v3,14,-14,8,-25,9v5,19,-5,44,-25,27r0,-27r-62,0v-6,-2,-4,-21,0,-26r52,-79v9,-3,28,-4,35,2r0,83xm72,-243r-44,66r44,0r0,-66","w":128,"k":{"\u2044":34,"\u2087":8,"\u2084":-1,"\u2077":8,"\u2074":-1,"\/":48}},"\u2075":{"d":"40,-210v34,-4,65,5,65,39v0,47,-68,62,-93,32v0,-6,0,-12,3,-14v16,12,63,16,63,-16v0,-25,-29,-23,-53,-21v-4,-1,-5,-2,-5,-7r0,-59v0,-6,2,-6,7,-7v23,4,84,-13,65,21r-52,0r0,32","w":119,"k":{"\u2044":47,"\u2089":1,"\u2087":8,"\u2086":1,"\u2085":2,"\u2083":2,"\u2082":4,"\u2081":2,"\u2079":1,"\u2077":8,"\u2076":1,"\u2075":2,"\u00b3":2,"\u00b2":4,"\u00b9":2,"\/":50}},"\u2076":{"d":"41,-204v27,-16,80,-9,76,34v-3,30,-21,46,-51,46v-38,0,-50,-26,-50,-65v0,-51,24,-83,79,-75v11,-2,19,16,9,23v-30,-12,-67,1,-63,37xm41,-185v-10,42,48,57,51,17v5,-30,-35,-29,-51,-17","w":129,"k":{"\u2044":38,"\u2087":4,"\u2082":3,"\u2077":4,"\u00b2":3,"\/":44}},"\u2077":{"d":"100,-263v11,0,7,18,4,25v-18,37,-33,78,-55,112v0,0,-25,5,-24,-6r53,-110r-65,0v-6,-1,-6,-19,0,-21r87,0","w":115,"k":{"\u2044":60,"\u2089":1,"\u2088":4,"\u2087":-3,"\u2086":7,"\u2084":8,"\u2083":2,"\u2082":7,"\u2081":-6,"\u2080":5,"\u2079":1,"\u2078":4,"\u2077":-3,"\u2076":7,"\u2074":8,"\u00b3":2,"\u00b2":7,"\u00b9":-6,"\u2070":5,"\/":65}},"\u2078":{"d":"85,-198v17,8,32,16,32,36v0,28,-23,38,-53,38v-29,0,-51,-8,-51,-35v0,-20,14,-29,31,-37v-44,-16,-27,-75,22,-69v51,-8,59,56,19,67xm65,-247v-36,1,-19,35,1,40v14,-7,21,-15,21,-24v0,-11,-10,-17,-22,-16xm65,-143v31,0,33,-29,11,-38v-14,-11,-36,1,-37,20v0,14,10,18,26,18","w":129,"k":{"\u2044":39,"\u2087":6,"\u2082":1,"\u2077":6,"\u00b2":1,"\/":45}},"\u2079":{"d":"63,-265v39,0,50,26,50,65v0,57,-49,96,-95,66v-1,-5,-2,-16,3,-16v30,15,71,1,67,-36v-27,18,-80,9,-76,-33v3,-30,19,-46,51,-46xm37,-221v-3,29,35,29,51,17v-1,-23,-4,-40,-26,-41v-17,-1,-23,10,-25,24","w":129,"k":{"\u2044":48,"\u2087":7,"\u2082":4,"\u2077":7,"\u00b2":4,"\/":54}},"\u207a":{"d":"76,-197v19,-2,55,-2,36,19r-36,0v1,19,4,54,-22,37r0,-37v-18,2,-53,2,-35,-19r35,0v3,-15,-9,-43,12,-40v19,-2,7,26,10,40","w":131},"\u207b":{"d":"110,-197v7,0,7,20,0,20r-91,0v-7,0,-7,-20,0,-20r91,0","w":129},"\u207c":{"d":"107,-218v5,1,6,19,0,19r-87,0v-6,-1,-7,-19,0,-19r87,0xm107,-176v6,0,6,19,0,19r-87,0v-6,-1,-8,-20,0,-19r87,0","w":126},"\u207d":{"d":"45,-103v-37,-39,-36,-145,-1,-186v6,1,18,-4,18,5v-32,49,-19,131,-1,180","w":78},"\u207e":{"d":"34,-289v35,42,36,146,-1,186v-6,-1,-21,2,-17,-5v29,-50,20,-132,1,-180","w":78},"\u2080":{"d":"71,-103v43,-1,57,28,57,70v0,43,-16,71,-58,71v-42,0,-57,-28,-57,-71v0,-43,16,-69,58,-70xm71,17v27,0,31,-21,31,-49v0,-29,-5,-51,-32,-51v-26,0,-32,22,-32,49v0,28,5,52,33,51","w":140,"k":{"\u2087":6,"\u2082":3,"\u2077":6,"\u00b2":3}},"\u2081":{"d":"6,-75v11,-14,38,-36,60,-24v-2,44,3,95,-3,135v0,0,-22,4,-22,-4r0,-110v-11,3,-36,28,-35,3","w":88,"k":{"\u2087":3,"\u2077":3}},"\u2082":{"d":"103,15v6,0,7,19,1,21r-87,-1v-13,-31,32,-43,43,-66v15,-12,22,-52,-8,-50v-17,-5,-29,20,-36,5v-1,-24,20,-25,42,-27v49,-5,53,52,26,79v-10,10,-28,27,-39,39r58,0","w":120,"k":{"\u2087":9,"\u2086":2,"\u2085":1,"\u2080":2,"\u2077":9,"\u2076":2,"\u2075":1,"\u2070":2}},"\u2083":{"d":"72,-36v20,1,33,13,34,32v3,44,-62,51,-93,32v-1,-6,-5,-18,2,-20v17,11,62,18,63,-11v1,-25,-32,-17,-51,-24v-11,-31,49,-6,46,-39v-2,-27,-41,-15,-54,-7v-15,-21,17,-31,38,-30v48,-8,57,61,15,67","w":120,"k":{"\u2087":8,"\u2077":8}},"\u2084":{"d":"97,-15v12,0,28,-4,25,11v3,14,-14,8,-25,9v5,19,-5,44,-25,27r0,-27r-62,0v-6,-2,-4,-21,0,-26r52,-79v9,-3,28,-4,35,2r0,83xm72,-81r-44,66r44,0r0,-66","w":128,"k":{"\u2087":8,"\u2084":-1,"\u2077":8,"\u2074":-1}},"\u2085":{"d":"40,-48v34,-4,65,5,65,39v0,47,-68,62,-93,32v0,-6,0,-12,3,-14v16,12,63,16,63,-16v0,-25,-29,-23,-53,-21v-4,-1,-5,-2,-5,-7r0,-59v0,-6,2,-6,7,-7v23,4,84,-13,65,21r-52,0r0,32","w":119,"k":{"\u2089":1,"\u2087":8,"\u2086":1,"\u2085":2,"\u2083":2,"\u2082":4,"\u2081":2,"\u2079":1,"\u2077":8,"\u2076":1,"\u2075":2,"\u00b3":2,"\u00b2":4,"\u00b9":2}},"\u2086":{"d":"41,-42v27,-16,80,-9,76,34v-3,30,-21,46,-51,46v-38,0,-50,-26,-50,-65v0,-51,24,-83,79,-75v11,-2,19,16,9,23v-30,-12,-67,1,-63,37xm41,-23v-10,42,48,57,51,17v5,-30,-35,-29,-51,-17","w":129,"k":{"\u2087":4,"\u2082":3,"\u2077":4,"\u00b2":3}},"\u2087":{"d":"100,-101v11,0,7,18,4,25v-18,37,-33,78,-55,112v0,0,-25,5,-24,-6r53,-110r-65,0v-6,-1,-6,-19,0,-21r87,0","w":115,"k":{"\u2089":1,"\u2088":4,"\u2087":-3,"\u2086":7,"\u2084":8,"\u2083":2,"\u2082":7,"\u2081":-6,"\u2080":5,"\u2079":1,"\u2078":4,"\u2077":-3,"\u2076":7,"\u2074":8,"\u00b3":2,"\u00b2":7,"\u00b9":-6,"\u2070":5}},"\u2088":{"d":"85,-36v17,8,32,16,32,36v0,28,-23,38,-53,38v-29,0,-51,-8,-51,-35v0,-20,14,-29,31,-37v-44,-16,-27,-75,22,-69v51,-8,59,56,19,67xm65,-85v-36,1,-19,35,1,40v14,-7,21,-15,21,-24v0,-11,-10,-17,-22,-16xm65,19v31,0,33,-29,11,-38v-14,-11,-36,1,-37,20v0,14,10,18,26,18","w":129,"k":{"\u2087":6,"\u2082":1,"\u2077":6,"\u00b2":1}},"\u2089":{"d":"63,-103v39,0,50,26,50,65v0,57,-49,96,-95,66v-1,-5,-2,-16,3,-16v30,15,71,1,67,-36v-27,18,-80,9,-76,-33v3,-30,19,-46,51,-46xm37,-59v-3,29,35,29,51,17v-1,-23,-4,-40,-26,-41v-17,-1,-23,10,-25,24","w":129,"k":{"\u2087":7,"\u2082":4,"\u2077":7,"\u00b2":4}},"\u208a":{"d":"76,-35v19,-2,55,-2,36,19r-36,0v1,19,4,54,-22,37r0,-37v-18,2,-53,2,-35,-19r35,0v3,-15,-9,-43,12,-40v19,-2,7,26,10,40","w":131},"\u208b":{"d":"110,-35v7,0,7,20,0,20r-91,0v-7,0,-7,-20,0,-20r91,0","w":129},"\u208c":{"d":"107,-56v5,1,6,19,0,19r-87,0v-6,-1,-7,-19,0,-19r87,0xm107,-14v6,0,6,19,0,19r-87,0v-6,-1,-8,-20,0,-19r87,0","w":126},"\u208d":{"d":"45,59v-37,-39,-36,-145,-1,-186v6,1,18,-4,18,5v-32,49,-19,131,-1,180","w":78},"\u208e":{"d":"34,-127v35,42,36,146,-1,186v-6,-1,-21,2,-17,-5v29,-50,20,-132,1,-180","w":78},"\u2044":{"d":"128,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":121,"k":{"\u2089":35,"\u2088":39,"\u2087":27,"\u2086":49,"\u2085":33,"\u2084":48,"\u2083":31,"\u2082":40,"\u2081":28,"\u2080":49,"\u2079":35,"\u2078":39,"\u2077":27,"\u2076":49,"\u2075":33,"\u2074":48,"\u00b3":31,"\u00b2":40,"\u00b9":28,"\u2070":49}},"\u215f":{"d":"16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":138},"\u00bd":{"d":"221,-20v7,0,7,19,1,20r-76,0v-16,-38,47,-41,47,-81v0,-22,-35,-16,-45,-6v-14,-18,13,-31,33,-29v43,-6,48,46,23,68v-10,9,-23,19,-33,28r50,0xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":241},"\u2153":{"d":"197,-60v17,2,28,10,29,27v1,38,-63,46,-85,24v-9,-36,50,17,57,-23v5,-29,-59,-2,-40,-35v19,1,37,-1,37,-17v0,-29,-45,1,-51,-10v-1,-21,20,-19,38,-22v42,-6,50,50,15,56xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":243},"\u00bc":{"d":"199,-41v15,-5,23,9,13,18r-13,0v5,17,-7,33,-25,20r0,-20v-21,-3,-68,13,-52,-25v22,-22,29,-81,77,-63r0,70xm174,-94r-35,53r35,0r0,-53xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":229},"\u2155":{"d":"167,-70v32,-1,58,3,59,33v2,39,-59,51,-84,30v1,-5,-3,-15,3,-15v16,7,55,13,55,-13v0,-22,-26,-18,-47,-17v-4,0,-7,-1,-6,-6r0,-49v0,-4,3,-7,7,-7r60,0v6,0,6,19,0,19r-47,0r0,25xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":243},"\u2159":{"d":"158,-66v25,-13,68,-6,65,29v-2,26,-19,40,-44,40v-32,0,-45,-21,-45,-55v0,-49,38,-79,81,-57v5,32,-58,-14,-57,43xm179,-15v12,0,20,-8,20,-21v0,-24,-29,-22,-41,-13v1,18,4,34,21,34xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":233},"\u215b":{"d":"203,-60v14,6,28,13,27,30v-1,24,-21,33,-47,33v-25,0,-45,-5,-45,-30v0,-19,14,-24,26,-31v-12,-6,-23,-12,-23,-28v0,-21,18,-31,44,-30v44,-7,53,46,18,56xm165,-86v1,17,37,23,37,0v0,-10,-6,-14,-18,-14v-12,1,-19,3,-19,14xm185,-14v37,0,15,-31,-3,-35v-9,4,-18,9,-20,20v0,12,11,15,23,15xm16,-190v-12,-24,29,-44,55,-37r0,112v-6,2,-22,4,-25,-2r0,-88xm177,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":239},"\u2154":{"d":"91,-133v5,-1,5,5,5,10v0,5,-1,8,-4,9r-74,0v-16,-37,47,-41,47,-81v0,-28,-38,-7,-48,-8v-6,-24,17,-25,36,-27v43,-5,49,48,22,68v-8,9,-22,20,-32,29r48,0xm199,-116v42,-6,50,50,15,56v17,2,27,10,28,27v2,39,-63,45,-84,24v-9,-36,52,17,57,-23v2,-22,-28,-13,-44,-19v-11,-28,42,-5,40,-33v-2,-30,-44,1,-50,-10v-3,-20,20,-19,38,-22xm197,-232v8,-3,30,-5,22,7r-161,229v-7,3,-30,5,-22,-7","w":260},"\u2156":{"d":"91,-133v5,-1,5,5,5,10v0,5,-1,8,-4,9r-74,0v-16,-37,47,-41,47,-81v0,-28,-38,-7,-48,-8v-6,-24,17,-25,36,-27v43,-5,49,48,22,68v-8,9,-22,20,-32,29r48,0xm197,-232v8,-3,30,-5,22,7r-161,229v-7,3,-30,5,-22,-7xm183,-70v32,-1,58,3,59,33v2,39,-59,51,-84,30v1,-5,-3,-15,3,-15v16,7,55,13,55,-13v0,-22,-26,-18,-47,-17v-4,0,-7,-1,-6,-6r0,-49v0,-4,3,-7,7,-7r60,0v6,0,6,19,0,19r-47,0r0,25","w":260},"\u00be":{"d":"213,-41v15,-5,23,9,13,18r-13,0v5,17,-7,33,-25,20r0,-20v-21,-3,-68,13,-52,-25v22,-22,29,-81,77,-63r0,70xm188,-94r-35,53r35,0r0,-53xm54,-230v42,-7,50,51,15,57v17,1,27,10,28,27v2,38,-63,44,-84,23v-1,-4,-2,-15,3,-15v13,8,53,16,54,-8v8,-28,-60,-2,-40,-35v18,1,36,0,36,-16v0,-31,-43,1,-50,-11v-2,-22,21,-19,38,-22xm191,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":243},"\u2157":{"d":"180,-70v32,-1,58,3,59,33v2,40,-60,51,-84,30v0,-5,-3,-14,3,-15v15,7,55,13,55,-13v0,-23,-27,-17,-48,-17v-4,0,-5,-2,-5,-6r0,-49v-1,-5,3,-7,7,-7r59,0v6,1,7,20,0,19r-46,0r0,25xm54,-230v42,-7,50,51,15,57v17,1,27,10,28,27v2,38,-63,44,-84,23v-1,-4,-2,-15,3,-15v13,8,53,16,54,-8v8,-28,-60,-2,-40,-35v18,1,36,0,36,-16v0,-31,-43,1,-50,-11v-2,-22,21,-19,38,-22xm191,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":257},"\u215c":{"d":"217,-60v13,6,26,13,27,30v1,43,-93,46,-93,3v0,-18,14,-24,27,-31v-12,-6,-23,-11,-23,-28v1,-22,18,-30,43,-30v46,0,54,46,19,56xm198,-100v-29,2,-21,27,1,31v17,-3,26,-32,-1,-31xm198,-14v24,4,27,-25,8,-30v-11,-9,-30,1,-30,15v0,12,10,13,22,15xm54,-230v42,-7,50,51,15,57v17,1,27,10,28,27v2,38,-63,44,-84,23v-1,-4,-2,-15,3,-15v13,8,53,16,54,-8v8,-28,-60,-2,-40,-35v18,1,36,0,36,-16v0,-31,-43,1,-50,-11v-2,-22,21,-19,38,-22xm191,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":253},"\u2158":{"d":"184,-70v32,-1,58,3,59,33v2,40,-60,51,-84,30v0,-5,-3,-13,2,-15v16,7,56,14,56,-13v0,-23,-27,-17,-48,-17v-4,0,-5,-2,-5,-6r0,-49v-1,-5,3,-7,7,-7r59,0v6,0,6,19,0,19r-46,0r0,25xm87,-155v15,-5,23,9,13,18r-13,0v6,16,-7,34,-24,20r0,-20v-18,-1,-39,2,-55,-1v0,-8,-3,-18,2,-23r43,-65v10,-2,28,-5,34,2r0,69xm63,-155v-1,-17,2,-38,-1,-53r-35,53r36,0xm195,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":261},"\u215a":{"d":"172,-66v25,-14,68,-6,65,29v-2,26,-19,40,-45,40v-32,0,-44,-21,-44,-55v0,-46,23,-70,70,-63v10,-1,16,15,7,20v-27,-9,-55,0,-53,29xm172,-49v-8,35,39,46,41,13v3,-23,-29,-22,-41,-13xm38,-184v32,-1,58,3,59,34v1,39,-60,50,-84,29v0,-5,-3,-13,2,-15v16,8,55,14,56,-13v1,-21,-29,-19,-48,-16v-12,-8,-2,-39,-5,-56v0,-4,1,-7,6,-6r60,0v6,1,5,18,0,19r-46,0r0,24xm191,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":246},"\u215d":{"d":"217,-60v13,6,26,13,27,30v1,43,-93,46,-93,3v0,-18,14,-24,27,-31v-12,-6,-23,-11,-23,-28v1,-22,18,-30,43,-30v46,0,54,46,19,56xm198,-100v-29,2,-21,27,1,31v17,-3,26,-32,-1,-31xm198,-14v24,4,27,-25,8,-30v-11,-9,-30,1,-30,15v0,12,10,13,22,15xm38,-184v32,-1,58,3,59,34v1,39,-60,50,-84,29v0,-5,-3,-13,2,-15v16,8,55,14,56,-13v1,-21,-29,-19,-48,-16v-12,-8,-2,-39,-5,-56v0,-4,1,-7,6,-6r60,0v6,1,5,18,0,19r-46,0r0,24xm191,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":253},"\u215e":{"d":"196,-60v13,6,26,13,27,30v1,43,-93,46,-93,3v0,-18,14,-24,27,-31v-12,-6,-23,-11,-23,-28v1,-22,18,-30,43,-30v46,0,54,46,19,56xm176,-100v-28,0,-19,27,2,31v6,-5,17,-6,17,-17v0,-11,-7,-14,-19,-14xm155,-29v0,20,44,21,43,0v-1,-13,-14,-15,-24,-20v-8,5,-19,8,-19,20xm14,-208v-6,0,-8,-20,0,-19r81,1v0,7,2,17,-2,21r-43,88v-3,5,-23,6,-28,1r47,-92r-55,0xm170,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":232},"%":{"d":"196,-116v36,-1,49,25,49,59v0,36,-16,59,-50,60v-36,1,-48,-25,-48,-60v0,-35,13,-59,49,-59xm196,-17v21,0,24,-18,24,-40v0,-23,-5,-40,-25,-40v-20,0,-23,18,-23,39v-1,24,3,41,24,41xm62,-230v35,0,49,24,49,59v0,35,-15,60,-50,60v-36,0,-49,-23,-48,-60v1,-35,13,-59,49,-59xm62,-131v22,0,23,-18,24,-39v1,-23,-4,-41,-25,-41v-33,0,-34,80,1,80xm195,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":257},"\u2030":{"d":"313,-116v36,-1,48,24,48,59v0,36,-16,59,-50,60v-36,1,-48,-25,-48,-60v0,-35,14,-59,50,-59xm313,-17v20,-1,23,-19,23,-40v1,-23,-4,-40,-24,-40v-20,0,-24,17,-24,39v1,23,2,41,25,41xm195,-116v36,-1,49,23,49,59v0,36,-16,59,-50,60v-36,1,-48,-25,-48,-60v0,-35,13,-59,49,-59xm196,-17v20,-1,23,-19,23,-40v1,-23,-4,-40,-24,-40v-20,0,-24,17,-24,39v1,23,2,41,25,41xm62,-230v35,0,49,24,49,59v0,35,-15,60,-50,60v-36,0,-49,-23,-48,-60v1,-35,13,-59,49,-59xm62,-131v22,0,23,-18,24,-39v1,-23,-4,-41,-25,-41v-33,0,-34,80,1,80xm195,-229v4,-9,33,-8,24,4r-160,229v-6,3,-31,5,-22,-7","w":373},"+":{"d":"103,-114v24,3,78,-13,60,25r-60,0v-2,22,3,50,-3,68v-4,3,-23,4,-23,-4r0,-64r-61,0v-5,-5,-6,-25,3,-25r58,0r0,-66v5,-5,24,-6,26,2r0,64","w":179,"k":{"+":-3}},"\u2212":{"d":"159,-114v8,1,8,25,0,25r-139,0v-10,0,-9,-24,0,-25r139,0","w":179},"\u00d7":{"d":"143,-172v8,-6,22,8,18,18r-54,53v17,20,41,35,55,58v-1,9,-12,17,-19,13r-54,-53r-57,55v-7,-2,-21,-12,-13,-20r53,-53v-17,-20,-41,-35,-55,-58v2,-8,12,-18,20,-13r53,54","w":179},"\u00f7":{"d":"88,-187v15,0,21,6,21,21v0,15,-6,21,-21,21v-15,0,-20,-7,-20,-21v0,-15,5,-21,20,-21xm163,-114v8,2,8,23,0,25r-154,-3v0,0,-4,-20,4,-22r150,0xm88,-57v15,0,21,6,21,21v0,15,-6,21,-21,21v-15,0,-20,-7,-20,-21v0,-15,5,-21,20,-21","w":179},"=":{"d":"156,-148v10,0,9,25,0,25r-133,0v-6,-1,-6,-5,-6,-13v0,-7,1,-12,6,-12r133,0xm156,-80v6,0,7,6,7,13v0,7,-1,12,-7,12r-133,0v-6,0,-6,-4,-6,-12v0,-7,0,-13,6,-13r133,0","w":179},"\u2260":{"d":"157,-80v8,2,8,25,0,25r-78,0v-13,15,-12,48,-41,42v-10,-12,12,-29,15,-42v-20,1,-47,3,-33,-24v13,-3,30,0,45,-1r24,-43r-66,0v-8,1,-8,-20,-3,-24v24,-3,55,0,81,-1v12,-15,11,-46,40,-40v11,11,-11,28,-14,40v14,2,36,-7,36,12v0,23,-31,10,-48,13r-24,43r66,0","w":179},"\u2248":{"d":"152,-84v25,13,-2,35,-19,38v-36,8,-45,-20,-76,-20v-18,0,-34,25,-41,0v6,-15,21,-25,42,-25v30,-2,36,21,64,21v15,0,20,-11,30,-14xm122,-134v20,0,32,-26,42,-1v-10,31,-65,29,-86,9v-23,-22,-51,27,-62,-4v5,-16,21,-26,42,-26v28,0,38,22,64,22","w":179},"<":{"d":"16,-88v-6,-4,-6,-24,1,-27v49,-21,93,-52,143,-70v3,6,4,28,-5,29r-113,55r118,59v1,8,5,29,-5,24","w":179},">":{"d":"24,-156v-8,-2,-8,-27,-3,-30r142,71v5,4,6,23,0,28r-142,70v-6,-3,-5,-27,3,-29r113,-55","w":179},"\u00b1":{"d":"160,-139v8,2,8,25,-1,25r-57,0r0,65v-5,5,-23,6,-25,-2r0,-63r-57,0v-10,-1,-9,-25,0,-25r57,0v1,-22,-2,-46,1,-66v5,-4,19,-4,24,0r0,66r58,0xm159,-25v8,2,8,25,0,25r-140,-1v-6,-3,-6,-24,2,-24r138,0","w":179},"\u2264":{"d":"19,-111v-5,-5,-6,-25,1,-28v48,-22,93,-51,143,-69v0,10,4,24,-4,29r-114,54v38,21,82,36,118,59v0,8,5,29,-5,24xm158,-25v9,0,8,24,0,25r-137,0v-8,-1,-9,-25,0,-25r137,0","w":179},"\u2265":{"d":"160,-138v5,3,6,24,0,27r-138,69v-8,2,-7,0,-7,-10v0,-7,-1,-16,6,-18r113,-55v-38,-21,-82,-36,-118,-59v1,-7,-6,-29,6,-23xm158,-25v10,0,8,24,0,25r-137,0v-8,-1,-8,-25,0,-25r137,0","w":179},"\u00ac":{"d":"150,-113v22,0,10,41,11,59v-4,6,-25,5,-25,-2r0,-32r-122,-1v-5,-3,-5,-23,3,-24r133,0","w":179},"\u212e":{"d":"206,-162v-8,-54,-137,-54,-146,0r0,48r146,0r0,-48xm135,-217v65,0,122,45,122,105v0,8,-4,11,-11,11r-186,0r0,49v6,45,103,58,136,24v12,-13,24,-21,45,-13v-16,25,-60,46,-108,46v-66,0,-125,-44,-125,-111v0,-69,58,-111,127,-111","w":265},"\u2113":{"d":"16,-88v-9,0,-9,-25,-2,-26r22,-4v-1,-64,-3,-131,58,-129v33,1,50,20,50,53v0,52,-38,78,-78,94v-1,39,-2,78,36,78v31,0,34,-30,39,-56v10,0,25,-5,26,6v0,46,-21,75,-67,75v-55,2,-67,-39,-64,-95xm66,-127v27,-11,48,-31,50,-65v1,-18,-7,-30,-22,-30v-36,-1,-26,55,-28,95","w":180},"\u221e":{"d":"233,-165v34,0,56,18,56,50v0,33,-22,53,-57,53v-35,0,-57,-21,-80,-36v-23,14,-43,36,-78,36v-34,0,-55,-18,-56,-51v-1,-60,81,-61,115,-30r20,14v23,-14,44,-36,80,-36xm233,-85v18,0,29,-10,29,-28v0,-51,-72,-20,-89,-1v18,12,33,29,60,29xm45,-114v3,51,71,20,88,1v-20,-19,-81,-51,-88,-1","w":307},"\u2202":{"d":"70,-244v74,-3,95,65,95,143v0,60,-19,103,-78,104v-52,1,-66,-36,-70,-84v-7,-72,64,-115,114,-68v-6,-38,-20,-69,-62,-71v-5,-2,-3,-12,-3,-19v0,-2,1,-6,4,-5xm89,-21v44,0,47,-47,46,-95v-14,-13,-24,-29,-47,-29v-57,0,-56,124,1,124","w":191},"\u222b":{"d":"94,-234v18,0,38,10,24,29v-20,-12,-42,-2,-42,28r0,187v3,41,-20,60,-62,53v-13,2,-18,-23,-8,-27v20,10,41,3,41,-28r0,-187v1,-34,12,-55,47,-55","w":131},"\u221a":{"d":"139,-224v3,-7,34,-11,31,3r-61,216v-4,9,-36,10,-39,0r-44,-137v-20,7,-35,-13,-18,-25v15,2,38,-5,45,6r38,130","w":179},"\u2206":{"d":"82,-222v4,-10,36,-9,40,0r71,210v0,8,-4,12,-11,12r-161,0v-18,0,-9,-28,-5,-39xm100,-197r-58,172r118,0","w":203},"\u2126":{"d":"172,-25v22,-1,66,-5,44,25r-67,0v-17,-3,-11,-34,3,-37v53,-27,57,-168,-32,-168v-86,0,-89,136,-33,168v13,4,19,35,2,37v-23,-2,-52,3,-71,-3v-1,-8,-4,-22,5,-22r43,0v-29,-18,-48,-47,-48,-94v1,-68,36,-112,104,-112v66,0,98,41,99,108v0,49,-18,80,-49,98","w":239},"\u00b5":{"d":"163,-48v-4,25,13,26,30,26v3,17,-1,27,-21,25v-21,-2,-32,-8,-35,-28v-17,24,-59,40,-83,15v-1,23,6,55,-1,73v-9,-1,-26,5,-26,-5r1,-223v3,-5,26,-6,28,2v6,52,-20,141,33,141v22,0,32,-15,45,-30r1,-113v3,-5,26,-6,28,2r0,115","w":197},"\u220f":{"d":"257,-230v8,-2,6,11,6,19v0,14,-25,4,-38,7r0,265v-4,4,-28,7,-30,-2r0,-263r-107,0r0,263v-2,8,-28,8,-31,0r0,-263v-19,0,-49,7,-37,-23v-1,-2,2,-4,4,-3r233,0","w":287},"\u2211":{"d":"178,-223v0,8,2,19,-6,19r-120,0v31,40,66,74,94,117v-29,45,-68,82,-100,124r133,1v6,3,7,26,-2,26r-151,0v-16,-1,-11,-34,-2,-40r90,-110r-92,-115v-2,-9,-4,-29,9,-29r141,0v4,-1,6,3,6,7","w":194},"\u25ca":{"d":"72,-227v7,-8,31,-8,37,0v19,38,43,71,59,112v-17,41,-41,75,-61,113v-8,5,-31,5,-35,-3r-59,-111v16,-40,40,-73,59,-111xm139,-115r-50,-89r-46,88r49,89","w":183},"\u2190":{"d":"294,-120v9,1,7,25,0,26r-225,0r99,96v0,10,-13,21,-21,16r-119,-119v-3,-5,0,-15,4,-17r120,-117v7,3,21,14,14,21r-97,94r225,0","w":325},"\u2192":{"d":"32,-94v-7,-1,-9,-26,0,-26r225,0r-99,-96v1,-10,12,-22,21,-17r119,120v3,5,0,14,-4,16r-120,117v-6,-3,-20,-12,-14,-21r97,-93r-225,0","w":325},"\u2191":{"d":"177,32v-3,8,-24,8,-28,0r0,-247r-95,98v-10,-1,-20,-9,-17,-20r120,-119v5,-3,14,0,16,4r117,117v-1,11,-10,20,-21,17r-92,-97r0,247","w":325},"\u2193":{"d":"149,-247v3,-8,25,-8,28,0r0,246r95,-98v10,1,20,10,17,21r-120,119v-6,3,-14,0,-17,-4r-116,-117v1,-10,11,-22,20,-17r93,96r0,-246","w":325},"\u2197":{"d":"51,1v-9,4,-22,-9,-19,-18r186,-187r-137,2v-6,-2,-6,-22,0,-25r167,0v7,-1,15,7,14,14r0,166v-5,6,-29,6,-28,-4r3,-134","w":317},"\u2196":{"d":"285,-18v4,10,-9,22,-19,19r-185,-185r2,138v-6,5,-27,6,-28,-3r0,-164v-1,-8,7,-15,15,-14r165,0v6,4,6,26,-3,26r-132,-3","w":317},"\u2198":{"d":"32,-209v-3,-10,11,-22,20,-20r185,186r-2,-138v3,-6,23,-6,27,0r0,166v1,8,-6,16,-14,15r-165,0v-6,-2,-8,-27,3,-26r132,2","w":317},"\u2199":{"d":"55,-177v1,-10,28,-10,28,0r-2,134r188,-187v7,3,19,10,16,20r-186,186r138,-2v5,4,7,26,-3,26r-164,0v-8,1,-16,-7,-15,-15r0,-162","w":317},"\u2194":{"d":"310,-201v-7,-8,12,-26,19,-19r107,107v3,5,0,14,-4,16r-105,105v-10,0,-22,-13,-17,-21r85,-81r-326,0r86,83v0,10,-11,23,-20,17r-107,-107v-3,-5,0,-15,4,-17r105,-104v10,0,21,12,16,21r-84,81r326,0","w":463},"\u2195":{"d":"231,-59v8,-6,27,12,19,19r-104,103v-5,3,-14,0,-16,-4r-102,-104v3,-6,12,-20,21,-14r77,81r0,-286r-79,82v-10,0,-23,-11,-17,-20r104,-103v6,-4,13,-2,16,3r102,102v0,10,-13,21,-21,16r-78,-80r0,286","w":279}}});
;
Cufon.replace('h1, h2, h3, h4, .primary-links, .quicktabs_tabs, .secondary-links, ul.tabs, #footer', {hover: true});;
