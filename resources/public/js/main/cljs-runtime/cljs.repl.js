goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64458){
var map__64459 = p__64458;
var map__64459__$1 = cljs.core.__destructure_map(map__64459);
var m = map__64459__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64459__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64460_64565 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64461_64566 = null;
var count__64462_64567 = (0);
var i__64463_64568 = (0);
while(true){
if((i__64463_64568 < count__64462_64567)){
var f_64569 = chunk__64461_64566.cljs$core$IIndexed$_nth$arity$2(null,i__64463_64568);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_64569], 0));


var G__64570 = seq__64460_64565;
var G__64571 = chunk__64461_64566;
var G__64572 = count__64462_64567;
var G__64573 = (i__64463_64568 + (1));
seq__64460_64565 = G__64570;
chunk__64461_64566 = G__64571;
count__64462_64567 = G__64572;
i__64463_64568 = G__64573;
continue;
} else {
var temp__5753__auto___64574 = cljs.core.seq(seq__64460_64565);
if(temp__5753__auto___64574){
var seq__64460_64575__$1 = temp__5753__auto___64574;
if(cljs.core.chunked_seq_QMARK_(seq__64460_64575__$1)){
var c__4679__auto___64576 = cljs.core.chunk_first(seq__64460_64575__$1);
var G__64577 = cljs.core.chunk_rest(seq__64460_64575__$1);
var G__64578 = c__4679__auto___64576;
var G__64579 = cljs.core.count(c__4679__auto___64576);
var G__64580 = (0);
seq__64460_64565 = G__64577;
chunk__64461_64566 = G__64578;
count__64462_64567 = G__64579;
i__64463_64568 = G__64580;
continue;
} else {
var f_64581 = cljs.core.first(seq__64460_64575__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_64581], 0));


var G__64582 = cljs.core.next(seq__64460_64575__$1);
var G__64583 = null;
var G__64584 = (0);
var G__64585 = (0);
seq__64460_64565 = G__64582;
chunk__64461_64566 = G__64583;
count__64462_64567 = G__64584;
i__64463_64568 = G__64585;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64586 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_64586], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_64586)))?cljs.core.second(arglists_64586):arglists_64586)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64464_64592 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64465_64593 = null;
var count__64466_64594 = (0);
var i__64467_64595 = (0);
while(true){
if((i__64467_64595 < count__64466_64594)){
var vec__64478_64596 = chunk__64465_64593.cljs$core$IIndexed$_nth$arity$2(null,i__64467_64595);
var name_64597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64478_64596,(0),null);
var map__64481_64598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64478_64596,(1),null);
var map__64481_64599__$1 = cljs.core.__destructure_map(map__64481_64598);
var doc_64600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64481_64599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64481_64599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_64597], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_64601], 0));

if(cljs.core.truth_(doc_64600)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_64600], 0));
} else {
}


var G__64602 = seq__64464_64592;
var G__64603 = chunk__64465_64593;
var G__64604 = count__64466_64594;
var G__64605 = (i__64467_64595 + (1));
seq__64464_64592 = G__64602;
chunk__64465_64593 = G__64603;
count__64466_64594 = G__64604;
i__64467_64595 = G__64605;
continue;
} else {
var temp__5753__auto___64606 = cljs.core.seq(seq__64464_64592);
if(temp__5753__auto___64606){
var seq__64464_64607__$1 = temp__5753__auto___64606;
if(cljs.core.chunked_seq_QMARK_(seq__64464_64607__$1)){
var c__4679__auto___64608 = cljs.core.chunk_first(seq__64464_64607__$1);
var G__64609 = cljs.core.chunk_rest(seq__64464_64607__$1);
var G__64610 = c__4679__auto___64608;
var G__64611 = cljs.core.count(c__4679__auto___64608);
var G__64612 = (0);
seq__64464_64592 = G__64609;
chunk__64465_64593 = G__64610;
count__64466_64594 = G__64611;
i__64467_64595 = G__64612;
continue;
} else {
var vec__64482_64613 = cljs.core.first(seq__64464_64607__$1);
var name_64614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64482_64613,(0),null);
var map__64485_64615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64482_64613,(1),null);
var map__64485_64616__$1 = cljs.core.__destructure_map(map__64485_64615);
var doc_64617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64485_64616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64485_64616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_64614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_64618], 0));

if(cljs.core.truth_(doc_64617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_64617], 0));
} else {
}


var G__64619 = cljs.core.next(seq__64464_64607__$1);
var G__64620 = null;
var G__64621 = (0);
var G__64622 = (0);
seq__64464_64592 = G__64619;
chunk__64465_64593 = G__64620;
count__64466_64594 = G__64621;
i__64467_64595 = G__64622;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__64486 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64487 = null;
var count__64488 = (0);
var i__64489 = (0);
while(true){
if((i__64489 < count__64488)){
var role = chunk__64487.cljs$core$IIndexed$_nth$arity$2(null,i__64489);
var temp__5753__auto___64624__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___64624__$1)){
var spec_64625 = temp__5753__auto___64624__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_64625)], 0));
} else {
}


var G__64626 = seq__64486;
var G__64627 = chunk__64487;
var G__64628 = count__64488;
var G__64629 = (i__64489 + (1));
seq__64486 = G__64626;
chunk__64487 = G__64627;
count__64488 = G__64628;
i__64489 = G__64629;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__64486);
if(temp__5753__auto____$1){
var seq__64486__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__64486__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64486__$1);
var G__64630 = cljs.core.chunk_rest(seq__64486__$1);
var G__64631 = c__4679__auto__;
var G__64632 = cljs.core.count(c__4679__auto__);
var G__64633 = (0);
seq__64486 = G__64630;
chunk__64487 = G__64631;
count__64488 = G__64632;
i__64489 = G__64633;
continue;
} else {
var role = cljs.core.first(seq__64486__$1);
var temp__5753__auto___64634__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___64634__$2)){
var spec_64635 = temp__5753__auto___64634__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_64635)], 0));
} else {
}


var G__64636 = cljs.core.next(seq__64486__$1);
var G__64637 = null;
var G__64638 = (0);
var G__64639 = (0);
seq__64486 = G__64636;
chunk__64487 = G__64637;
count__64488 = G__64638;
i__64489 = G__64639;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__64644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__64645 = cljs.core.ex_cause(t);
via = G__64644;
t = G__64645;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__64498 = datafied_throwable;
var map__64498__$1 = cljs.core.__destructure_map(map__64498);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64498__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64498__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64498__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__64499 = cljs.core.last(via);
var map__64499__$1 = cljs.core.__destructure_map(map__64499);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64499__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__64500 = data;
var map__64500__$1 = cljs.core.__destructure_map(map__64500);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__64501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__64501__$1 = cljs.core.__destructure_map(map__64501);
var top_data = map__64501__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64502 = phase;
var G__64502__$1 = (((G__64502 instanceof cljs.core.Keyword))?G__64502.fqn:null);
switch (G__64502__$1) {
case "read-source":
var map__64503 = data;
var map__64503__$1 = cljs.core.__destructure_map(map__64503);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64503__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64503__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__64504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__64504__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64504,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64504);
var G__64504__$2 = (cljs.core.truth_((function (){var fexpr__64505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64505.cljs$core$IFn$_invoke$arity$1 ? fexpr__64505.cljs$core$IFn$_invoke$arity$1(source) : fexpr__64505.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64504__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64504__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64504__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__64506 = top_data;
var G__64506__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64506,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64506);
var G__64506__$2 = (cljs.core.truth_((function (){var fexpr__64507 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64507.cljs$core$IFn$_invoke$arity$1 ? fexpr__64507.cljs$core$IFn$_invoke$arity$1(source) : fexpr__64507.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64506__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64506__$1);
var G__64506__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64506__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64506__$2);
var G__64506__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64506__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64506__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64506__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64506__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__64508 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508,(3),null);
var G__64511 = top_data;
var G__64511__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64511,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__64511);
var G__64511__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__64511__$1);
var G__64511__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64511__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__64511__$2);
var G__64511__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64511__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64511__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64511__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64511__$4;
}

break;
case "execution":
var vec__64513 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__64497_SHARP_){
var or__4253__auto__ = (p1__64497_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__64516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64516.cljs$core$IFn$_invoke$arity$1 ? fexpr__64516.cljs$core$IFn$_invoke$arity$1(p1__64497_SHARP_) : fexpr__64516.call(null,p1__64497_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__64517 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__64517__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64517,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__64517);
var G__64517__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64517__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64517__$1);
var G__64517__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64517__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__64517__$2);
var G__64517__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64517__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__64517__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64517__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64517__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64502__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__64523){
var map__64524 = p__64523;
var map__64524__$1 = cljs.core.__destructure_map(map__64524);
var triage_data = map__64524__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__64525 = phase;
var G__64525__$1 = (((G__64525 instanceof cljs.core.Keyword))?G__64525.fqn:null);
switch (G__64525__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__64526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__64527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64528 = loc;
var G__64529 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64530_64652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64531_64653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64532_64654 = true;
var _STAR_print_fn_STAR__temp_val__64533_64655 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64532_64654);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64533_64655);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64521_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64521_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64531_64653);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64530_64652);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__64526,G__64527,G__64528,G__64529) : format.call(null,G__64526,G__64527,G__64528,G__64529));

break;
case "macroexpansion":
var G__64537 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__64538 = cause_type;
var G__64539 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64540 = loc;
var G__64541 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64537,G__64538,G__64539,G__64540,G__64541) : format.call(null,G__64537,G__64538,G__64539,G__64540,G__64541));

break;
case "compile-syntax-check":
var G__64542 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__64543 = cause_type;
var G__64544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64545 = loc;
var G__64546 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64542,G__64543,G__64544,G__64545,G__64546) : format.call(null,G__64542,G__64543,G__64544,G__64545,G__64546));

break;
case "compilation":
var G__64547 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__64548 = cause_type;
var G__64549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64550 = loc;
var G__64551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64547,G__64548,G__64549,G__64550,G__64551) : format.call(null,G__64547,G__64548,G__64549,G__64550,G__64551));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__64552 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__64553 = symbol;
var G__64554 = loc;
var G__64555 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64556_64657 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64557_64658 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64558_64659 = true;
var _STAR_print_fn_STAR__temp_val__64559_64660 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64558_64659);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64559_64660);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64522_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64522_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64557_64658);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64556_64657);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__64552,G__64553,G__64554,G__64555) : format.call(null,G__64552,G__64553,G__64554,G__64555));
} else {
var G__64560 = "Execution error%s at %s(%s).\n%s\n";
var G__64561 = cause_type;
var G__64562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64563 = loc;
var G__64564 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64560,G__64561,G__64562,G__64563,G__64564) : format.call(null,G__64560,G__64561,G__64562,G__64563,G__64564));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64525__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
