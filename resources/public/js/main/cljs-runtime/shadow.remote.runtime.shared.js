goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__64009,res){
var map__64014 = p__64009;
var map__64014__$1 = cljs.core.__destructure_map(map__64014);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64014__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64014__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__64019 = res;
var G__64019__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64019,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__64019);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64019__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__64019__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__64030 = arguments.length;
switch (G__64030) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__64037,msg,handlers,timeout_after_ms){
var map__64038 = p__64037;
var map__64038__$1 = cljs.core.__destructure_map(map__64038);
var runtime = map__64038__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64332 = arguments.length;
var i__4865__auto___64333 = (0);
while(true){
if((i__4865__auto___64333 < len__4864__auto___64332)){
args__4870__auto__.push((arguments[i__4865__auto___64333]));

var G__64334 = (i__4865__auto___64333 + (1));
i__4865__auto___64333 = G__64334;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__64043,ev,args){
var map__64044 = p__64043;
var map__64044__$1 = cljs.core.__destructure_map(map__64044);
var runtime = map__64044__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__64046 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64049 = null;
var count__64050 = (0);
var i__64051 = (0);
while(true){
if((i__64051 < count__64050)){
var ext = chunk__64049.cljs$core$IIndexed$_nth$arity$2(null,i__64051);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__64335 = seq__64046;
var G__64336 = chunk__64049;
var G__64337 = count__64050;
var G__64338 = (i__64051 + (1));
seq__64046 = G__64335;
chunk__64049 = G__64336;
count__64050 = G__64337;
i__64051 = G__64338;
continue;
} else {
var G__64339 = seq__64046;
var G__64340 = chunk__64049;
var G__64341 = count__64050;
var G__64342 = (i__64051 + (1));
seq__64046 = G__64339;
chunk__64049 = G__64340;
count__64050 = G__64341;
i__64051 = G__64342;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64046);
if(temp__5753__auto__){
var seq__64046__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64046__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64046__$1);
var G__64343 = cljs.core.chunk_rest(seq__64046__$1);
var G__64344 = c__4679__auto__;
var G__64345 = cljs.core.count(c__4679__auto__);
var G__64346 = (0);
seq__64046 = G__64343;
chunk__64049 = G__64344;
count__64050 = G__64345;
i__64051 = G__64346;
continue;
} else {
var ext = cljs.core.first(seq__64046__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__64347 = cljs.core.next(seq__64046__$1);
var G__64348 = null;
var G__64349 = (0);
var G__64350 = (0);
seq__64046 = G__64347;
chunk__64049 = G__64348;
count__64050 = G__64349;
i__64051 = G__64350;
continue;
} else {
var G__64351 = cljs.core.next(seq__64046__$1);
var G__64352 = null;
var G__64353 = (0);
var G__64354 = (0);
seq__64046 = G__64351;
chunk__64049 = G__64352;
count__64050 = G__64353;
i__64051 = G__64354;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq64039){
var G__64040 = cljs.core.first(seq64039);
var seq64039__$1 = cljs.core.next(seq64039);
var G__64041 = cljs.core.first(seq64039__$1);
var seq64039__$2 = cljs.core.next(seq64039__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64040,G__64041,seq64039__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__64064,p__64065){
var map__64068 = p__64064;
var map__64068__$1 = cljs.core.__destructure_map(map__64068);
var runtime = map__64068__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64068__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__64069 = p__64065;
var map__64069__$1 = cljs.core.__destructure_map(map__64069);
var msg = map__64069__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64069__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__64071 = cljs.core.deref(state_ref);
var map__64071__$1 = cljs.core.__destructure_map(map__64071);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64071__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64071__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__64081){
var map__64083 = p__64081;
var map__64083__$1 = cljs.core.__destructure_map(map__64083);
var runtime = map__64083__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__64103,msg){
var map__64106 = p__64103;
var map__64106__$1 = cljs.core.__destructure_map(map__64106);
var runtime = map__64106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__64122,key,p__64123){
var map__64126 = p__64122;
var map__64126__$1 = cljs.core.__destructure_map(map__64126);
var state = map__64126__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64126__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__64127 = p__64123;
var map__64127__$1 = cljs.core.__destructure_map(map__64127);
var spec = map__64127__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__64130,key,spec){
var map__64132 = p__64130;
var map__64132__$1 = cljs.core.__destructure_map(map__64132);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64132__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__64135_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__64135_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__64136_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__64136_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__64137_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__64137_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__64138_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__64138_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__64139_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__64139_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__64186,key){
var map__64187 = p__64186;
var map__64187__$1 = cljs.core.__destructure_map(map__64187);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__64192,msg){
var map__64194 = p__64192;
var map__64194__$1 = cljs.core.__destructure_map(map__64194);
var runtime = map__64194__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64194__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__64214,p__64215){
var map__64216 = p__64214;
var map__64216__$1 = cljs.core.__destructure_map(map__64216);
var runtime = map__64216__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64216__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__64217 = p__64215;
var map__64217__$1 = cljs.core.__destructure_map(map__64217);
var msg = map__64217__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__64229 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64231 = null;
var count__64232 = (0);
var i__64233 = (0);
while(true){
if((i__64233 < count__64232)){
var map__64282 = chunk__64231.cljs$core$IIndexed$_nth$arity$2(null,i__64233);
var map__64282__$1 = cljs.core.__destructure_map(map__64282);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64282__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__64359 = seq__64229;
var G__64360 = chunk__64231;
var G__64361 = count__64232;
var G__64362 = (i__64233 + (1));
seq__64229 = G__64359;
chunk__64231 = G__64360;
count__64232 = G__64361;
i__64233 = G__64362;
continue;
} else {
var G__64363 = seq__64229;
var G__64364 = chunk__64231;
var G__64365 = count__64232;
var G__64366 = (i__64233 + (1));
seq__64229 = G__64363;
chunk__64231 = G__64364;
count__64232 = G__64365;
i__64233 = G__64366;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64229);
if(temp__5753__auto__){
var seq__64229__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64229__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64229__$1);
var G__64367 = cljs.core.chunk_rest(seq__64229__$1);
var G__64368 = c__4679__auto__;
var G__64369 = cljs.core.count(c__4679__auto__);
var G__64370 = (0);
seq__64229 = G__64367;
chunk__64231 = G__64368;
count__64232 = G__64369;
i__64233 = G__64370;
continue;
} else {
var map__64286 = cljs.core.first(seq__64229__$1);
var map__64286__$1 = cljs.core.__destructure_map(map__64286);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64286__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__64371 = cljs.core.next(seq__64229__$1);
var G__64372 = null;
var G__64373 = (0);
var G__64374 = (0);
seq__64229 = G__64371;
chunk__64231 = G__64372;
count__64232 = G__64373;
i__64233 = G__64374;
continue;
} else {
var G__64375 = cljs.core.next(seq__64229__$1);
var G__64376 = null;
var G__64377 = (0);
var G__64378 = (0);
seq__64229 = G__64375;
chunk__64231 = G__64376;
count__64232 = G__64377;
i__64233 = G__64378;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
