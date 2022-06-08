goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62868 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62868(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62869 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62869(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__62422 = coll;
var G__62423 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__62422,G__62423) : shadow.dom.lazy_native_coll_seq.call(null,G__62422,G__62423));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__62429 = arguments.length;
switch (G__62429) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__62432 = arguments.length;
switch (G__62432) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__62434 = arguments.length;
switch (G__62434) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__62438 = arguments.length;
switch (G__62438) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__62446 = arguments.length;
switch (G__62446) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__62450 = arguments.length;
switch (G__62450) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e62456){if((e62456 instanceof Object)){
var e = e62456;
return console.log("didnt support attachEvent",el,e);
} else {
throw e62456;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__62459 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__62460 = null;
var count__62461 = (0);
var i__62462 = (0);
while(true){
if((i__62462 < count__62461)){
var el = chunk__62460.cljs$core$IIndexed$_nth$arity$2(null,i__62462);
var handler_62882__$1 = ((function (seq__62459,chunk__62460,count__62461,i__62462,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62459,chunk__62460,count__62461,i__62462,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62882__$1);


var G__62884 = seq__62459;
var G__62885 = chunk__62460;
var G__62886 = count__62461;
var G__62887 = (i__62462 + (1));
seq__62459 = G__62884;
chunk__62460 = G__62885;
count__62461 = G__62886;
i__62462 = G__62887;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62459);
if(temp__5753__auto__){
var seq__62459__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62459__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62459__$1);
var G__62888 = cljs.core.chunk_rest(seq__62459__$1);
var G__62889 = c__4679__auto__;
var G__62890 = cljs.core.count(c__4679__auto__);
var G__62891 = (0);
seq__62459 = G__62888;
chunk__62460 = G__62889;
count__62461 = G__62890;
i__62462 = G__62891;
continue;
} else {
var el = cljs.core.first(seq__62459__$1);
var handler_62892__$1 = ((function (seq__62459,chunk__62460,count__62461,i__62462,el,seq__62459__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62459,chunk__62460,count__62461,i__62462,el,seq__62459__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62892__$1);


var G__62893 = cljs.core.next(seq__62459__$1);
var G__62894 = null;
var G__62895 = (0);
var G__62896 = (0);
seq__62459 = G__62893;
chunk__62460 = G__62894;
count__62461 = G__62895;
i__62462 = G__62896;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__62490 = arguments.length;
switch (G__62490) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__62507 = cljs.core.seq(events);
var chunk__62508 = null;
var count__62509 = (0);
var i__62510 = (0);
while(true){
if((i__62510 < count__62509)){
var vec__62519 = chunk__62508.cljs$core$IIndexed$_nth$arity$2(null,i__62510);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62899 = seq__62507;
var G__62900 = chunk__62508;
var G__62901 = count__62509;
var G__62902 = (i__62510 + (1));
seq__62507 = G__62899;
chunk__62508 = G__62900;
count__62509 = G__62901;
i__62510 = G__62902;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62507);
if(temp__5753__auto__){
var seq__62507__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62507__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62507__$1);
var G__62903 = cljs.core.chunk_rest(seq__62507__$1);
var G__62904 = c__4679__auto__;
var G__62905 = cljs.core.count(c__4679__auto__);
var G__62906 = (0);
seq__62507 = G__62903;
chunk__62508 = G__62904;
count__62509 = G__62905;
i__62510 = G__62906;
continue;
} else {
var vec__62532 = cljs.core.first(seq__62507__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62532,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62908 = cljs.core.next(seq__62507__$1);
var G__62909 = null;
var G__62910 = (0);
var G__62911 = (0);
seq__62507 = G__62908;
chunk__62508 = G__62909;
count__62509 = G__62910;
i__62510 = G__62911;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__62537 = cljs.core.seq(styles);
var chunk__62538 = null;
var count__62539 = (0);
var i__62540 = (0);
while(true){
if((i__62540 < count__62539)){
var vec__62548 = chunk__62538.cljs$core$IIndexed$_nth$arity$2(null,i__62540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62548,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62912 = seq__62537;
var G__62913 = chunk__62538;
var G__62914 = count__62539;
var G__62915 = (i__62540 + (1));
seq__62537 = G__62912;
chunk__62538 = G__62913;
count__62539 = G__62914;
i__62540 = G__62915;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62537);
if(temp__5753__auto__){
var seq__62537__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62537__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62537__$1);
var G__62916 = cljs.core.chunk_rest(seq__62537__$1);
var G__62917 = c__4679__auto__;
var G__62918 = cljs.core.count(c__4679__auto__);
var G__62919 = (0);
seq__62537 = G__62916;
chunk__62538 = G__62917;
count__62539 = G__62918;
i__62540 = G__62919;
continue;
} else {
var vec__62551 = cljs.core.first(seq__62537__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62551,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62920 = cljs.core.next(seq__62537__$1);
var G__62921 = null;
var G__62922 = (0);
var G__62923 = (0);
seq__62537 = G__62920;
chunk__62538 = G__62921;
count__62539 = G__62922;
i__62540 = G__62923;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__62562_62924 = key;
var G__62562_62925__$1 = (((G__62562_62924 instanceof cljs.core.Keyword))?G__62562_62924.fqn:null);
switch (G__62562_62925__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_62932 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_62932,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_62932,"aria-");
}
})())){
el.setAttribute(ks_62932,value);
} else {
(el[ks_62932] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__62573){
var map__62574 = p__62573;
var map__62574__$1 = cljs.core.__destructure_map(map__62574);
var props = map__62574__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62574__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__62575 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62575,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62575,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62575,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__62578 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__62578,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__62578;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__62582 = arguments.length;
switch (G__62582) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__62585){
var vec__62586 = p__62585;
var seq__62587 = cljs.core.seq(vec__62586);
var first__62588 = cljs.core.first(seq__62587);
var seq__62587__$1 = cljs.core.next(seq__62587);
var nn = first__62588;
var first__62588__$1 = cljs.core.first(seq__62587__$1);
var seq__62587__$2 = cljs.core.next(seq__62587__$1);
var np = first__62588__$1;
var nc = seq__62587__$2;
var node = vec__62586;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62589 = nn;
var G__62590 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62589,G__62590) : create_fn.call(null,G__62589,G__62590));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62591 = nn;
var G__62592 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62591,G__62592) : create_fn.call(null,G__62591,G__62592));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__62594 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(1),null);
var seq__62597_62942 = cljs.core.seq(node_children);
var chunk__62598_62943 = null;
var count__62599_62944 = (0);
var i__62600_62945 = (0);
while(true){
if((i__62600_62945 < count__62599_62944)){
var child_struct_62946 = chunk__62598_62943.cljs$core$IIndexed$_nth$arity$2(null,i__62600_62945);
var children_62947 = shadow.dom.dom_node(child_struct_62946);
if(cljs.core.seq_QMARK_(children_62947)){
var seq__62618_62948 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62947));
var chunk__62620_62949 = null;
var count__62621_62950 = (0);
var i__62622_62951 = (0);
while(true){
if((i__62622_62951 < count__62621_62950)){
var child_62952 = chunk__62620_62949.cljs$core$IIndexed$_nth$arity$2(null,i__62622_62951);
if(cljs.core.truth_(child_62952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62952);


var G__62953 = seq__62618_62948;
var G__62954 = chunk__62620_62949;
var G__62955 = count__62621_62950;
var G__62956 = (i__62622_62951 + (1));
seq__62618_62948 = G__62953;
chunk__62620_62949 = G__62954;
count__62621_62950 = G__62955;
i__62622_62951 = G__62956;
continue;
} else {
var G__62957 = seq__62618_62948;
var G__62958 = chunk__62620_62949;
var G__62959 = count__62621_62950;
var G__62960 = (i__62622_62951 + (1));
seq__62618_62948 = G__62957;
chunk__62620_62949 = G__62958;
count__62621_62950 = G__62959;
i__62622_62951 = G__62960;
continue;
}
} else {
var temp__5753__auto___62961 = cljs.core.seq(seq__62618_62948);
if(temp__5753__auto___62961){
var seq__62618_62962__$1 = temp__5753__auto___62961;
if(cljs.core.chunked_seq_QMARK_(seq__62618_62962__$1)){
var c__4679__auto___62963 = cljs.core.chunk_first(seq__62618_62962__$1);
var G__62965 = cljs.core.chunk_rest(seq__62618_62962__$1);
var G__62966 = c__4679__auto___62963;
var G__62967 = cljs.core.count(c__4679__auto___62963);
var G__62968 = (0);
seq__62618_62948 = G__62965;
chunk__62620_62949 = G__62966;
count__62621_62950 = G__62967;
i__62622_62951 = G__62968;
continue;
} else {
var child_62969 = cljs.core.first(seq__62618_62962__$1);
if(cljs.core.truth_(child_62969)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62969);


var G__62970 = cljs.core.next(seq__62618_62962__$1);
var G__62971 = null;
var G__62972 = (0);
var G__62973 = (0);
seq__62618_62948 = G__62970;
chunk__62620_62949 = G__62971;
count__62621_62950 = G__62972;
i__62622_62951 = G__62973;
continue;
} else {
var G__62974 = cljs.core.next(seq__62618_62962__$1);
var G__62975 = null;
var G__62976 = (0);
var G__62977 = (0);
seq__62618_62948 = G__62974;
chunk__62620_62949 = G__62975;
count__62621_62950 = G__62976;
i__62622_62951 = G__62977;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62947);
}


var G__62978 = seq__62597_62942;
var G__62979 = chunk__62598_62943;
var G__62980 = count__62599_62944;
var G__62981 = (i__62600_62945 + (1));
seq__62597_62942 = G__62978;
chunk__62598_62943 = G__62979;
count__62599_62944 = G__62980;
i__62600_62945 = G__62981;
continue;
} else {
var temp__5753__auto___62982 = cljs.core.seq(seq__62597_62942);
if(temp__5753__auto___62982){
var seq__62597_62983__$1 = temp__5753__auto___62982;
if(cljs.core.chunked_seq_QMARK_(seq__62597_62983__$1)){
var c__4679__auto___62984 = cljs.core.chunk_first(seq__62597_62983__$1);
var G__62985 = cljs.core.chunk_rest(seq__62597_62983__$1);
var G__62986 = c__4679__auto___62984;
var G__62987 = cljs.core.count(c__4679__auto___62984);
var G__62988 = (0);
seq__62597_62942 = G__62985;
chunk__62598_62943 = G__62986;
count__62599_62944 = G__62987;
i__62600_62945 = G__62988;
continue;
} else {
var child_struct_62989 = cljs.core.first(seq__62597_62983__$1);
var children_62990 = shadow.dom.dom_node(child_struct_62989);
if(cljs.core.seq_QMARK_(children_62990)){
var seq__62626_62991 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62990));
var chunk__62628_62992 = null;
var count__62629_62993 = (0);
var i__62630_62994 = (0);
while(true){
if((i__62630_62994 < count__62629_62993)){
var child_62995 = chunk__62628_62992.cljs$core$IIndexed$_nth$arity$2(null,i__62630_62994);
if(cljs.core.truth_(child_62995)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62995);


var G__62996 = seq__62626_62991;
var G__62997 = chunk__62628_62992;
var G__62998 = count__62629_62993;
var G__62999 = (i__62630_62994 + (1));
seq__62626_62991 = G__62996;
chunk__62628_62992 = G__62997;
count__62629_62993 = G__62998;
i__62630_62994 = G__62999;
continue;
} else {
var G__63000 = seq__62626_62991;
var G__63001 = chunk__62628_62992;
var G__63002 = count__62629_62993;
var G__63003 = (i__62630_62994 + (1));
seq__62626_62991 = G__63000;
chunk__62628_62992 = G__63001;
count__62629_62993 = G__63002;
i__62630_62994 = G__63003;
continue;
}
} else {
var temp__5753__auto___63004__$1 = cljs.core.seq(seq__62626_62991);
if(temp__5753__auto___63004__$1){
var seq__62626_63005__$1 = temp__5753__auto___63004__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62626_63005__$1)){
var c__4679__auto___63007 = cljs.core.chunk_first(seq__62626_63005__$1);
var G__63008 = cljs.core.chunk_rest(seq__62626_63005__$1);
var G__63009 = c__4679__auto___63007;
var G__63010 = cljs.core.count(c__4679__auto___63007);
var G__63011 = (0);
seq__62626_62991 = G__63008;
chunk__62628_62992 = G__63009;
count__62629_62993 = G__63010;
i__62630_62994 = G__63011;
continue;
} else {
var child_63012 = cljs.core.first(seq__62626_63005__$1);
if(cljs.core.truth_(child_63012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63012);


var G__63013 = cljs.core.next(seq__62626_63005__$1);
var G__63014 = null;
var G__63015 = (0);
var G__63016 = (0);
seq__62626_62991 = G__63013;
chunk__62628_62992 = G__63014;
count__62629_62993 = G__63015;
i__62630_62994 = G__63016;
continue;
} else {
var G__63018 = cljs.core.next(seq__62626_63005__$1);
var G__63019 = null;
var G__63020 = (0);
var G__63021 = (0);
seq__62626_62991 = G__63018;
chunk__62628_62992 = G__63019;
count__62629_62993 = G__63020;
i__62630_62994 = G__63021;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62990);
}


var G__63022 = cljs.core.next(seq__62597_62983__$1);
var G__63023 = null;
var G__63024 = (0);
var G__63025 = (0);
seq__62597_62942 = G__63022;
chunk__62598_62943 = G__63023;
count__62599_62944 = G__63024;
i__62600_62945 = G__63025;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__62637 = cljs.core.seq(node);
var chunk__62638 = null;
var count__62639 = (0);
var i__62640 = (0);
while(true){
if((i__62640 < count__62639)){
var n = chunk__62638.cljs$core$IIndexed$_nth$arity$2(null,i__62640);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63029 = seq__62637;
var G__63030 = chunk__62638;
var G__63031 = count__62639;
var G__63032 = (i__62640 + (1));
seq__62637 = G__63029;
chunk__62638 = G__63030;
count__62639 = G__63031;
i__62640 = G__63032;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62637);
if(temp__5753__auto__){
var seq__62637__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62637__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62637__$1);
var G__63033 = cljs.core.chunk_rest(seq__62637__$1);
var G__63034 = c__4679__auto__;
var G__63035 = cljs.core.count(c__4679__auto__);
var G__63036 = (0);
seq__62637 = G__63033;
chunk__62638 = G__63034;
count__62639 = G__63035;
i__62640 = G__63036;
continue;
} else {
var n = cljs.core.first(seq__62637__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63037 = cljs.core.next(seq__62637__$1);
var G__63038 = null;
var G__63039 = (0);
var G__63040 = (0);
seq__62637 = G__63037;
chunk__62638 = G__63038;
count__62639 = G__63039;
i__62640 = G__63040;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__62644 = arguments.length;
switch (G__62644) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__62647 = arguments.length;
switch (G__62647) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__62652 = arguments.length;
switch (G__62652) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63048 = arguments.length;
var i__4865__auto___63049 = (0);
while(true){
if((i__4865__auto___63049 < len__4864__auto___63048)){
args__4870__auto__.push((arguments[i__4865__auto___63049]));

var G__63050 = (i__4865__auto___63049 + (1));
i__4865__auto___63049 = G__63050;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__62657_63055 = cljs.core.seq(nodes);
var chunk__62659_63056 = null;
var count__62660_63057 = (0);
var i__62661_63058 = (0);
while(true){
if((i__62661_63058 < count__62660_63057)){
var node_63059 = chunk__62659_63056.cljs$core$IIndexed$_nth$arity$2(null,i__62661_63058);
fragment.appendChild(shadow.dom._to_dom(node_63059));


var G__63060 = seq__62657_63055;
var G__63061 = chunk__62659_63056;
var G__63062 = count__62660_63057;
var G__63063 = (i__62661_63058 + (1));
seq__62657_63055 = G__63060;
chunk__62659_63056 = G__63061;
count__62660_63057 = G__63062;
i__62661_63058 = G__63063;
continue;
} else {
var temp__5753__auto___63064 = cljs.core.seq(seq__62657_63055);
if(temp__5753__auto___63064){
var seq__62657_63065__$1 = temp__5753__auto___63064;
if(cljs.core.chunked_seq_QMARK_(seq__62657_63065__$1)){
var c__4679__auto___63066 = cljs.core.chunk_first(seq__62657_63065__$1);
var G__63067 = cljs.core.chunk_rest(seq__62657_63065__$1);
var G__63068 = c__4679__auto___63066;
var G__63069 = cljs.core.count(c__4679__auto___63066);
var G__63070 = (0);
seq__62657_63055 = G__63067;
chunk__62659_63056 = G__63068;
count__62660_63057 = G__63069;
i__62661_63058 = G__63070;
continue;
} else {
var node_63071 = cljs.core.first(seq__62657_63065__$1);
fragment.appendChild(shadow.dom._to_dom(node_63071));


var G__63072 = cljs.core.next(seq__62657_63065__$1);
var G__63073 = null;
var G__63074 = (0);
var G__63075 = (0);
seq__62657_63055 = G__63072;
chunk__62659_63056 = G__63073;
count__62660_63057 = G__63074;
i__62661_63058 = G__63075;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq62655){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62655));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__62664_63078 = cljs.core.seq(scripts);
var chunk__62665_63079 = null;
var count__62666_63080 = (0);
var i__62667_63081 = (0);
while(true){
if((i__62667_63081 < count__62666_63080)){
var vec__62675_63082 = chunk__62665_63079.cljs$core$IIndexed$_nth$arity$2(null,i__62667_63081);
var script_tag_63083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62675_63082,(0),null);
var script_body_63084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62675_63082,(1),null);
eval(script_body_63084);


var G__63086 = seq__62664_63078;
var G__63087 = chunk__62665_63079;
var G__63088 = count__62666_63080;
var G__63089 = (i__62667_63081 + (1));
seq__62664_63078 = G__63086;
chunk__62665_63079 = G__63087;
count__62666_63080 = G__63088;
i__62667_63081 = G__63089;
continue;
} else {
var temp__5753__auto___63090 = cljs.core.seq(seq__62664_63078);
if(temp__5753__auto___63090){
var seq__62664_63093__$1 = temp__5753__auto___63090;
if(cljs.core.chunked_seq_QMARK_(seq__62664_63093__$1)){
var c__4679__auto___63094 = cljs.core.chunk_first(seq__62664_63093__$1);
var G__63096 = cljs.core.chunk_rest(seq__62664_63093__$1);
var G__63097 = c__4679__auto___63094;
var G__63098 = cljs.core.count(c__4679__auto___63094);
var G__63099 = (0);
seq__62664_63078 = G__63096;
chunk__62665_63079 = G__63097;
count__62666_63080 = G__63098;
i__62667_63081 = G__63099;
continue;
} else {
var vec__62679_63100 = cljs.core.first(seq__62664_63093__$1);
var script_tag_63101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62679_63100,(0),null);
var script_body_63102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62679_63100,(1),null);
eval(script_body_63102);


var G__63103 = cljs.core.next(seq__62664_63093__$1);
var G__63104 = null;
var G__63105 = (0);
var G__63106 = (0);
seq__62664_63078 = G__63103;
chunk__62665_63079 = G__63104;
count__62666_63080 = G__63105;
i__62667_63081 = G__63106;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__62682){
var vec__62683 = p__62682;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62683,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62683,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__62690 = arguments.length;
switch (G__62690) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__62696 = cljs.core.seq(style_keys);
var chunk__62697 = null;
var count__62698 = (0);
var i__62699 = (0);
while(true){
if((i__62699 < count__62698)){
var it = chunk__62697.cljs$core$IIndexed$_nth$arity$2(null,i__62699);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63109 = seq__62696;
var G__63110 = chunk__62697;
var G__63111 = count__62698;
var G__63112 = (i__62699 + (1));
seq__62696 = G__63109;
chunk__62697 = G__63110;
count__62698 = G__63111;
i__62699 = G__63112;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62696);
if(temp__5753__auto__){
var seq__62696__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62696__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62696__$1);
var G__63113 = cljs.core.chunk_rest(seq__62696__$1);
var G__63114 = c__4679__auto__;
var G__63115 = cljs.core.count(c__4679__auto__);
var G__63116 = (0);
seq__62696 = G__63113;
chunk__62697 = G__63114;
count__62698 = G__63115;
i__62699 = G__63116;
continue;
} else {
var it = cljs.core.first(seq__62696__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63117 = cljs.core.next(seq__62696__$1);
var G__63118 = null;
var G__63119 = (0);
var G__63120 = (0);
seq__62696 = G__63117;
chunk__62697 = G__63118;
count__62698 = G__63119;
i__62699 = G__63120;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k62703,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__62709 = k62703;
var G__62709__$1 = (((G__62709 instanceof cljs.core.Keyword))?G__62709.fqn:null);
switch (G__62709__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62703,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__62710){
var vec__62711 = p__62710;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62711,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62711,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62702){
var self__ = this;
var G__62702__$1 = this;
return (new cljs.core.RecordIter((0),G__62702__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62704,other62705){
var self__ = this;
var this62704__$1 = this;
return (((!((other62705 == null)))) && ((((this62704__$1.constructor === other62705.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62704__$1.x,other62705.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62704__$1.y,other62705.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62704__$1.__extmap,other62705.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k62703){
var self__ = this;
var this__4509__auto____$1 = this;
var G__62720 = k62703;
var G__62720__$1 = (((G__62720 instanceof cljs.core.Keyword))?G__62720.fqn:null);
switch (G__62720__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62703);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__62702){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__62721 = cljs.core.keyword_identical_QMARK_;
var expr__62722 = k__4511__auto__;
if(cljs.core.truth_((pred__62721.cljs$core$IFn$_invoke$arity$2 ? pred__62721.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__62722) : pred__62721.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62722)))){
return (new shadow.dom.Coordinate(G__62702,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62721.cljs$core$IFn$_invoke$arity$2 ? pred__62721.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__62722) : pred__62721.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62722)))){
return (new shadow.dom.Coordinate(self__.x,G__62702,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__62702),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__62702){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__62702,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__62707){
var extmap__4542__auto__ = (function (){var G__62728 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62707,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__62707)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62728);
} else {
return G__62728;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62707),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62707),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k62731,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__62735 = k62731;
var G__62735__$1 = (((G__62735 instanceof cljs.core.Keyword))?G__62735.fqn:null);
switch (G__62735__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62731,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__62736){
var vec__62737 = p__62736;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62737,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62737,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62730){
var self__ = this;
var G__62730__$1 = this;
return (new cljs.core.RecordIter((0),G__62730__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62732,other62733){
var self__ = this;
var this62732__$1 = this;
return (((!((other62733 == null)))) && ((((this62732__$1.constructor === other62733.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62732__$1.w,other62733.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62732__$1.h,other62733.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62732__$1.__extmap,other62733.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k62731){
var self__ = this;
var this__4509__auto____$1 = this;
var G__62745 = k62731;
var G__62745__$1 = (((G__62745 instanceof cljs.core.Keyword))?G__62745.fqn:null);
switch (G__62745__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62731);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__62730){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__62746 = cljs.core.keyword_identical_QMARK_;
var expr__62747 = k__4511__auto__;
if(cljs.core.truth_((pred__62746.cljs$core$IFn$_invoke$arity$2 ? pred__62746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__62747) : pred__62746.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__62747)))){
return (new shadow.dom.Size(G__62730,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62746.cljs$core$IFn$_invoke$arity$2 ? pred__62746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__62747) : pred__62746.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__62747)))){
return (new shadow.dom.Size(self__.w,G__62730,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__62730),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__62730){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__62730,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__62734){
var extmap__4542__auto__ = (function (){var G__62752 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62734,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__62734)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62752);
} else {
return G__62752;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__62734),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__62734),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__63151 = (i + (1));
var G__63152 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63151;
ret = G__63152;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62761){
var vec__62762 = p__62761;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62762,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__62767 = arguments.length;
switch (G__62767) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__63164 = ps;
var G__63165 = (i + (1));
el__$1 = G__63164;
i = G__63165;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__62772 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62772,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62772,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62772,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__62775_63171 = cljs.core.seq(props);
var chunk__62776_63172 = null;
var count__62777_63173 = (0);
var i__62778_63174 = (0);
while(true){
if((i__62778_63174 < count__62777_63173)){
var vec__62786_63176 = chunk__62776_63172.cljs$core$IIndexed$_nth$arity$2(null,i__62778_63174);
var k_63177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62786_63176,(0),null);
var v_63178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62786_63176,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_63177);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63177),v_63178);


var G__63179 = seq__62775_63171;
var G__63180 = chunk__62776_63172;
var G__63181 = count__62777_63173;
var G__63182 = (i__62778_63174 + (1));
seq__62775_63171 = G__63179;
chunk__62776_63172 = G__63180;
count__62777_63173 = G__63181;
i__62778_63174 = G__63182;
continue;
} else {
var temp__5753__auto___63183 = cljs.core.seq(seq__62775_63171);
if(temp__5753__auto___63183){
var seq__62775_63184__$1 = temp__5753__auto___63183;
if(cljs.core.chunked_seq_QMARK_(seq__62775_63184__$1)){
var c__4679__auto___63185 = cljs.core.chunk_first(seq__62775_63184__$1);
var G__63186 = cljs.core.chunk_rest(seq__62775_63184__$1);
var G__63187 = c__4679__auto___63185;
var G__63188 = cljs.core.count(c__4679__auto___63185);
var G__63189 = (0);
seq__62775_63171 = G__63186;
chunk__62776_63172 = G__63187;
count__62777_63173 = G__63188;
i__62778_63174 = G__63189;
continue;
} else {
var vec__62790_63190 = cljs.core.first(seq__62775_63184__$1);
var k_63191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62790_63190,(0),null);
var v_63192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62790_63190,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_63191);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63191),v_63192);


var G__63195 = cljs.core.next(seq__62775_63184__$1);
var G__63196 = null;
var G__63197 = (0);
var G__63198 = (0);
seq__62775_63171 = G__63195;
chunk__62776_63172 = G__63196;
count__62777_63173 = G__63197;
i__62778_63174 = G__63198;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__62794 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62794,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62794,(1),null);
var seq__62797_63200 = cljs.core.seq(node_children);
var chunk__62799_63201 = null;
var count__62800_63202 = (0);
var i__62801_63203 = (0);
while(true){
if((i__62801_63203 < count__62800_63202)){
var child_struct_63204 = chunk__62799_63201.cljs$core$IIndexed$_nth$arity$2(null,i__62801_63203);
if((!((child_struct_63204 == null)))){
if(typeof child_struct_63204 === 'string'){
var text_63205 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63205),child_struct_63204].join(''));
} else {
var children_63206 = shadow.dom.svg_node(child_struct_63204);
if(cljs.core.seq_QMARK_(children_63206)){
var seq__62824_63207 = cljs.core.seq(children_63206);
var chunk__62826_63208 = null;
var count__62827_63209 = (0);
var i__62828_63210 = (0);
while(true){
if((i__62828_63210 < count__62827_63209)){
var child_63211 = chunk__62826_63208.cljs$core$IIndexed$_nth$arity$2(null,i__62828_63210);
if(cljs.core.truth_(child_63211)){
node.appendChild(child_63211);


var G__63214 = seq__62824_63207;
var G__63215 = chunk__62826_63208;
var G__63216 = count__62827_63209;
var G__63217 = (i__62828_63210 + (1));
seq__62824_63207 = G__63214;
chunk__62826_63208 = G__63215;
count__62827_63209 = G__63216;
i__62828_63210 = G__63217;
continue;
} else {
var G__63218 = seq__62824_63207;
var G__63219 = chunk__62826_63208;
var G__63220 = count__62827_63209;
var G__63221 = (i__62828_63210 + (1));
seq__62824_63207 = G__63218;
chunk__62826_63208 = G__63219;
count__62827_63209 = G__63220;
i__62828_63210 = G__63221;
continue;
}
} else {
var temp__5753__auto___63223 = cljs.core.seq(seq__62824_63207);
if(temp__5753__auto___63223){
var seq__62824_63224__$1 = temp__5753__auto___63223;
if(cljs.core.chunked_seq_QMARK_(seq__62824_63224__$1)){
var c__4679__auto___63225 = cljs.core.chunk_first(seq__62824_63224__$1);
var G__63226 = cljs.core.chunk_rest(seq__62824_63224__$1);
var G__63227 = c__4679__auto___63225;
var G__63228 = cljs.core.count(c__4679__auto___63225);
var G__63229 = (0);
seq__62824_63207 = G__63226;
chunk__62826_63208 = G__63227;
count__62827_63209 = G__63228;
i__62828_63210 = G__63229;
continue;
} else {
var child_63230 = cljs.core.first(seq__62824_63224__$1);
if(cljs.core.truth_(child_63230)){
node.appendChild(child_63230);


var G__63231 = cljs.core.next(seq__62824_63224__$1);
var G__63232 = null;
var G__63233 = (0);
var G__63234 = (0);
seq__62824_63207 = G__63231;
chunk__62826_63208 = G__63232;
count__62827_63209 = G__63233;
i__62828_63210 = G__63234;
continue;
} else {
var G__63235 = cljs.core.next(seq__62824_63224__$1);
var G__63236 = null;
var G__63237 = (0);
var G__63238 = (0);
seq__62824_63207 = G__63235;
chunk__62826_63208 = G__63236;
count__62827_63209 = G__63237;
i__62828_63210 = G__63238;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63206);
}
}


var G__63239 = seq__62797_63200;
var G__63240 = chunk__62799_63201;
var G__63241 = count__62800_63202;
var G__63242 = (i__62801_63203 + (1));
seq__62797_63200 = G__63239;
chunk__62799_63201 = G__63240;
count__62800_63202 = G__63241;
i__62801_63203 = G__63242;
continue;
} else {
var G__63243 = seq__62797_63200;
var G__63244 = chunk__62799_63201;
var G__63245 = count__62800_63202;
var G__63246 = (i__62801_63203 + (1));
seq__62797_63200 = G__63243;
chunk__62799_63201 = G__63244;
count__62800_63202 = G__63245;
i__62801_63203 = G__63246;
continue;
}
} else {
var temp__5753__auto___63247 = cljs.core.seq(seq__62797_63200);
if(temp__5753__auto___63247){
var seq__62797_63248__$1 = temp__5753__auto___63247;
if(cljs.core.chunked_seq_QMARK_(seq__62797_63248__$1)){
var c__4679__auto___63249 = cljs.core.chunk_first(seq__62797_63248__$1);
var G__63252 = cljs.core.chunk_rest(seq__62797_63248__$1);
var G__63253 = c__4679__auto___63249;
var G__63254 = cljs.core.count(c__4679__auto___63249);
var G__63255 = (0);
seq__62797_63200 = G__63252;
chunk__62799_63201 = G__63253;
count__62800_63202 = G__63254;
i__62801_63203 = G__63255;
continue;
} else {
var child_struct_63256 = cljs.core.first(seq__62797_63248__$1);
if((!((child_struct_63256 == null)))){
if(typeof child_struct_63256 === 'string'){
var text_63257 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63257),child_struct_63256].join(''));
} else {
var children_63259 = shadow.dom.svg_node(child_struct_63256);
if(cljs.core.seq_QMARK_(children_63259)){
var seq__62834_63260 = cljs.core.seq(children_63259);
var chunk__62836_63261 = null;
var count__62837_63262 = (0);
var i__62838_63263 = (0);
while(true){
if((i__62838_63263 < count__62837_63262)){
var child_63264 = chunk__62836_63261.cljs$core$IIndexed$_nth$arity$2(null,i__62838_63263);
if(cljs.core.truth_(child_63264)){
node.appendChild(child_63264);


var G__63265 = seq__62834_63260;
var G__63266 = chunk__62836_63261;
var G__63267 = count__62837_63262;
var G__63268 = (i__62838_63263 + (1));
seq__62834_63260 = G__63265;
chunk__62836_63261 = G__63266;
count__62837_63262 = G__63267;
i__62838_63263 = G__63268;
continue;
} else {
var G__63269 = seq__62834_63260;
var G__63270 = chunk__62836_63261;
var G__63271 = count__62837_63262;
var G__63272 = (i__62838_63263 + (1));
seq__62834_63260 = G__63269;
chunk__62836_63261 = G__63270;
count__62837_63262 = G__63271;
i__62838_63263 = G__63272;
continue;
}
} else {
var temp__5753__auto___63273__$1 = cljs.core.seq(seq__62834_63260);
if(temp__5753__auto___63273__$1){
var seq__62834_63274__$1 = temp__5753__auto___63273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62834_63274__$1)){
var c__4679__auto___63275 = cljs.core.chunk_first(seq__62834_63274__$1);
var G__63277 = cljs.core.chunk_rest(seq__62834_63274__$1);
var G__63278 = c__4679__auto___63275;
var G__63279 = cljs.core.count(c__4679__auto___63275);
var G__63280 = (0);
seq__62834_63260 = G__63277;
chunk__62836_63261 = G__63278;
count__62837_63262 = G__63279;
i__62838_63263 = G__63280;
continue;
} else {
var child_63282 = cljs.core.first(seq__62834_63274__$1);
if(cljs.core.truth_(child_63282)){
node.appendChild(child_63282);


var G__63284 = cljs.core.next(seq__62834_63274__$1);
var G__63285 = null;
var G__63286 = (0);
var G__63287 = (0);
seq__62834_63260 = G__63284;
chunk__62836_63261 = G__63285;
count__62837_63262 = G__63286;
i__62838_63263 = G__63287;
continue;
} else {
var G__63288 = cljs.core.next(seq__62834_63274__$1);
var G__63289 = null;
var G__63290 = (0);
var G__63291 = (0);
seq__62834_63260 = G__63288;
chunk__62836_63261 = G__63289;
count__62837_63262 = G__63290;
i__62838_63263 = G__63291;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63259);
}
}


var G__63292 = cljs.core.next(seq__62797_63248__$1);
var G__63293 = null;
var G__63294 = (0);
var G__63295 = (0);
seq__62797_63200 = G__63292;
chunk__62799_63201 = G__63293;
count__62800_63202 = G__63294;
i__62801_63203 = G__63295;
continue;
} else {
var G__63296 = cljs.core.next(seq__62797_63248__$1);
var G__63297 = null;
var G__63298 = (0);
var G__63299 = (0);
seq__62797_63200 = G__63296;
chunk__62799_63201 = G__63297;
count__62800_63202 = G__63298;
i__62801_63203 = G__63299;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63303 = arguments.length;
var i__4865__auto___63304 = (0);
while(true){
if((i__4865__auto___63304 < len__4864__auto___63303)){
args__4870__auto__.push((arguments[i__4865__auto___63304]));

var G__63305 = (i__4865__auto___63304 + (1));
i__4865__auto___63304 = G__63305;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62843){
var G__62844 = cljs.core.first(seq62843);
var seq62843__$1 = cljs.core.next(seq62843);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62844,seq62843__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62848 = arguments.length;
switch (G__62848) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__51411__auto___63311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_62855){
var state_val_62856 = (state_62855[(1)]);
if((state_val_62856 === (1))){
var state_62855__$1 = state_62855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62855__$1,(2),once_or_cleanup);
} else {
if((state_val_62856 === (2))){
var inst_62852 = (state_62855[(2)]);
var inst_62853 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62855__$1 = (function (){var statearr_62858 = state_62855;
(statearr_62858[(7)] = inst_62852);

return statearr_62858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62855__$1,inst_62853);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__51343__auto__ = null;
var shadow$dom$state_machine__51343__auto____0 = (function (){
var statearr_62859 = [null,null,null,null,null,null,null,null];
(statearr_62859[(0)] = shadow$dom$state_machine__51343__auto__);

(statearr_62859[(1)] = (1));

return statearr_62859;
});
var shadow$dom$state_machine__51343__auto____1 = (function (state_62855){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_62855);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e62860){var ex__51346__auto__ = e62860;
var statearr_62861_63314 = state_62855;
(statearr_62861_63314[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_62855[(4)]))){
var statearr_62862_63315 = state_62855;
(statearr_62862_63315[(1)] = cljs.core.first((state_62855[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63316 = state_62855;
state_62855 = G__63316;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
shadow$dom$state_machine__51343__auto__ = function(state_62855){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51343__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51343__auto____1.call(this,state_62855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51343__auto____0;
shadow$dom$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51343__auto____1;
return shadow$dom$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_62864 = f__51412__auto__();
(statearr_62864[(6)] = c__51411__auto___63311);

return statearr_62864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
