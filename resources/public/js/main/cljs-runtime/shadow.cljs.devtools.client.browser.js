goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65167 = arguments.length;
var i__4865__auto___65168 = (0);
while(true){
if((i__4865__auto___65168 < len__4864__auto___65167)){
args__4870__auto__.push((arguments[i__4865__auto___65168]));

var G__65169 = (i__4865__auto___65168 + (1));
i__4865__auto___65168 = G__65169;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65041){
var G__65042 = cljs.core.first(seq65041);
var seq65041__$1 = cljs.core.next(seq65041);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65042,seq65041__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65045 = cljs.core.seq(sources);
var chunk__65046 = null;
var count__65047 = (0);
var i__65048 = (0);
while(true){
if((i__65048 < count__65047)){
var map__65055 = chunk__65046.cljs$core$IIndexed$_nth$arity$2(null,i__65048);
var map__65055__$1 = cljs.core.__destructure_map(map__65055);
var src = map__65055__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65056){var e_65170 = e65056;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65170);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65170.message)].join('')));
}

var G__65171 = seq__65045;
var G__65172 = chunk__65046;
var G__65173 = count__65047;
var G__65174 = (i__65048 + (1));
seq__65045 = G__65171;
chunk__65046 = G__65172;
count__65047 = G__65173;
i__65048 = G__65174;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65045);
if(temp__5753__auto__){
var seq__65045__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65045__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65045__$1);
var G__65175 = cljs.core.chunk_rest(seq__65045__$1);
var G__65176 = c__4679__auto__;
var G__65177 = cljs.core.count(c__4679__auto__);
var G__65178 = (0);
seq__65045 = G__65175;
chunk__65046 = G__65176;
count__65047 = G__65177;
i__65048 = G__65178;
continue;
} else {
var map__65057 = cljs.core.first(seq__65045__$1);
var map__65057__$1 = cljs.core.__destructure_map(map__65057);
var src = map__65057__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65057__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65057__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65057__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65057__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65058){var e_65179 = e65058;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65179);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65179.message)].join('')));
}

var G__65180 = cljs.core.next(seq__65045__$1);
var G__65181 = null;
var G__65182 = (0);
var G__65183 = (0);
seq__65045 = G__65180;
chunk__65046 = G__65181;
count__65047 = G__65182;
i__65048 = G__65183;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__65059 = cljs.core.seq(js_requires);
var chunk__65060 = null;
var count__65061 = (0);
var i__65062 = (0);
while(true){
if((i__65062 < count__65061)){
var js_ns = chunk__65060.cljs$core$IIndexed$_nth$arity$2(null,i__65062);
var require_str_65184 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65184);


var G__65185 = seq__65059;
var G__65186 = chunk__65060;
var G__65187 = count__65061;
var G__65188 = (i__65062 + (1));
seq__65059 = G__65185;
chunk__65060 = G__65186;
count__65061 = G__65187;
i__65062 = G__65188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65059);
if(temp__5753__auto__){
var seq__65059__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65059__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65059__$1);
var G__65189 = cljs.core.chunk_rest(seq__65059__$1);
var G__65190 = c__4679__auto__;
var G__65191 = cljs.core.count(c__4679__auto__);
var G__65192 = (0);
seq__65059 = G__65189;
chunk__65060 = G__65190;
count__65061 = G__65191;
i__65062 = G__65192;
continue;
} else {
var js_ns = cljs.core.first(seq__65059__$1);
var require_str_65193 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65193);


var G__65194 = cljs.core.next(seq__65059__$1);
var G__65195 = null;
var G__65196 = (0);
var G__65197 = (0);
seq__65059 = G__65194;
chunk__65060 = G__65195;
count__65061 = G__65196;
i__65062 = G__65197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65064){
var map__65065 = p__65064;
var map__65065__$1 = cljs.core.__destructure_map(map__65065);
var msg = map__65065__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65066(s__65067){
return (new cljs.core.LazySeq(null,(function (){
var s__65067__$1 = s__65067;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65067__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__65072 = cljs.core.first(xs__6308__auto__);
var map__65072__$1 = cljs.core.__destructure_map(map__65072);
var src = map__65072__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65072__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65072__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__65067__$1,map__65072,map__65072__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65065,map__65065__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65066_$_iter__65068(s__65069){
return (new cljs.core.LazySeq(null,((function (s__65067__$1,map__65072,map__65072__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65065,map__65065__$1,msg,info,reload_info){
return (function (){
var s__65069__$1 = s__65069;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__65069__$1);
if(temp__5753__auto____$1){
var s__65069__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65069__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65069__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65071 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65070 = (0);
while(true){
if((i__65070 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__65070);
cljs.core.chunk_append(b__65071,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65198 = (i__65070 + (1));
i__65070 = G__65198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65071),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65066_$_iter__65068(cljs.core.chunk_rest(s__65069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65071),null);
}
} else {
var warning = cljs.core.first(s__65069__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65066_$_iter__65068(cljs.core.rest(s__65069__$2)));
}
} else {
return null;
}
break;
}
});})(s__65067__$1,map__65072,map__65072__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65065,map__65065__$1,msg,info,reload_info))
,null,null));
});})(s__65067__$1,map__65072,map__65072__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65065,map__65065__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65066(cljs.core.rest(s__65067__$1)));
} else {
var G__65199 = cljs.core.rest(s__65067__$1);
s__65067__$1 = G__65199;
continue;
}
} else {
var G__65200 = cljs.core.rest(s__65067__$1);
s__65067__$1 = G__65200;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__65073_65201 = cljs.core.seq(warnings);
var chunk__65074_65202 = null;
var count__65075_65203 = (0);
var i__65076_65204 = (0);
while(true){
if((i__65076_65204 < count__65075_65203)){
var map__65079_65205 = chunk__65074_65202.cljs$core$IIndexed$_nth$arity$2(null,i__65076_65204);
var map__65079_65206__$1 = cljs.core.__destructure_map(map__65079_65205);
var w_65207 = map__65079_65206__$1;
var msg_65208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079_65206__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079_65206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079_65206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079_65206__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65211)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65209),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65210),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65208__$1)].join(''));


var G__65212 = seq__65073_65201;
var G__65213 = chunk__65074_65202;
var G__65214 = count__65075_65203;
var G__65215 = (i__65076_65204 + (1));
seq__65073_65201 = G__65212;
chunk__65074_65202 = G__65213;
count__65075_65203 = G__65214;
i__65076_65204 = G__65215;
continue;
} else {
var temp__5753__auto___65216 = cljs.core.seq(seq__65073_65201);
if(temp__5753__auto___65216){
var seq__65073_65217__$1 = temp__5753__auto___65216;
if(cljs.core.chunked_seq_QMARK_(seq__65073_65217__$1)){
var c__4679__auto___65218 = cljs.core.chunk_first(seq__65073_65217__$1);
var G__65219 = cljs.core.chunk_rest(seq__65073_65217__$1);
var G__65220 = c__4679__auto___65218;
var G__65221 = cljs.core.count(c__4679__auto___65218);
var G__65222 = (0);
seq__65073_65201 = G__65219;
chunk__65074_65202 = G__65220;
count__65075_65203 = G__65221;
i__65076_65204 = G__65222;
continue;
} else {
var map__65080_65223 = cljs.core.first(seq__65073_65217__$1);
var map__65080_65224__$1 = cljs.core.__destructure_map(map__65080_65223);
var w_65225 = map__65080_65224__$1;
var msg_65226__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080_65224__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080_65224__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080_65224__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080_65224__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65229)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65227),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65228),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65226__$1)].join(''));


var G__65230 = cljs.core.next(seq__65073_65217__$1);
var G__65231 = null;
var G__65232 = (0);
var G__65233 = (0);
seq__65073_65201 = G__65230;
chunk__65074_65202 = G__65231;
count__65075_65203 = G__65232;
i__65076_65204 = G__65233;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65063_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65063_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65081){
var map__65082 = p__65081;
var map__65082__$1 = cljs.core.__destructure_map(map__65082);
var msg = map__65082__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__65083 = cljs.core.seq(updates);
var chunk__65085 = null;
var count__65086 = (0);
var i__65087 = (0);
while(true){
if((i__65087 < count__65086)){
var path = chunk__65085.cljs$core$IIndexed$_nth$arity$2(null,i__65087);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65117_65234 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65121_65235 = null;
var count__65122_65236 = (0);
var i__65123_65237 = (0);
while(true){
if((i__65123_65237 < count__65122_65236)){
var node_65238 = chunk__65121_65235.cljs$core$IIndexed$_nth$arity$2(null,i__65123_65237);
if(cljs.core.not(node_65238.shadow$old)){
var path_match_65239 = shadow.cljs.devtools.client.browser.match_paths(node_65238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65239)){
var new_link_65240 = (function (){var G__65129 = node_65238.cloneNode(true);
G__65129.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65129;
})();
(node_65238.shadow$old = true);

(new_link_65240.onload = ((function (seq__65117_65234,chunk__65121_65235,count__65122_65236,i__65123_65237,seq__65083,chunk__65085,count__65086,i__65087,new_link_65240,path_match_65239,node_65238,path,map__65082,map__65082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65238);
});})(seq__65117_65234,chunk__65121_65235,count__65122_65236,i__65123_65237,seq__65083,chunk__65085,count__65086,i__65087,new_link_65240,path_match_65239,node_65238,path,map__65082,map__65082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65239], 0));

goog.dom.insertSiblingAfter(new_link_65240,node_65238);


var G__65241 = seq__65117_65234;
var G__65242 = chunk__65121_65235;
var G__65243 = count__65122_65236;
var G__65244 = (i__65123_65237 + (1));
seq__65117_65234 = G__65241;
chunk__65121_65235 = G__65242;
count__65122_65236 = G__65243;
i__65123_65237 = G__65244;
continue;
} else {
var G__65245 = seq__65117_65234;
var G__65246 = chunk__65121_65235;
var G__65247 = count__65122_65236;
var G__65248 = (i__65123_65237 + (1));
seq__65117_65234 = G__65245;
chunk__65121_65235 = G__65246;
count__65122_65236 = G__65247;
i__65123_65237 = G__65248;
continue;
}
} else {
var G__65249 = seq__65117_65234;
var G__65250 = chunk__65121_65235;
var G__65251 = count__65122_65236;
var G__65252 = (i__65123_65237 + (1));
seq__65117_65234 = G__65249;
chunk__65121_65235 = G__65250;
count__65122_65236 = G__65251;
i__65123_65237 = G__65252;
continue;
}
} else {
var temp__5753__auto___65253 = cljs.core.seq(seq__65117_65234);
if(temp__5753__auto___65253){
var seq__65117_65254__$1 = temp__5753__auto___65253;
if(cljs.core.chunked_seq_QMARK_(seq__65117_65254__$1)){
var c__4679__auto___65255 = cljs.core.chunk_first(seq__65117_65254__$1);
var G__65256 = cljs.core.chunk_rest(seq__65117_65254__$1);
var G__65257 = c__4679__auto___65255;
var G__65258 = cljs.core.count(c__4679__auto___65255);
var G__65259 = (0);
seq__65117_65234 = G__65256;
chunk__65121_65235 = G__65257;
count__65122_65236 = G__65258;
i__65123_65237 = G__65259;
continue;
} else {
var node_65260 = cljs.core.first(seq__65117_65254__$1);
if(cljs.core.not(node_65260.shadow$old)){
var path_match_65261 = shadow.cljs.devtools.client.browser.match_paths(node_65260.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65261)){
var new_link_65262 = (function (){var G__65130 = node_65260.cloneNode(true);
G__65130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65261),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65130;
})();
(node_65260.shadow$old = true);

(new_link_65262.onload = ((function (seq__65117_65234,chunk__65121_65235,count__65122_65236,i__65123_65237,seq__65083,chunk__65085,count__65086,i__65087,new_link_65262,path_match_65261,node_65260,seq__65117_65254__$1,temp__5753__auto___65253,path,map__65082,map__65082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65260);
});})(seq__65117_65234,chunk__65121_65235,count__65122_65236,i__65123_65237,seq__65083,chunk__65085,count__65086,i__65087,new_link_65262,path_match_65261,node_65260,seq__65117_65254__$1,temp__5753__auto___65253,path,map__65082,map__65082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65261], 0));

goog.dom.insertSiblingAfter(new_link_65262,node_65260);


var G__65263 = cljs.core.next(seq__65117_65254__$1);
var G__65264 = null;
var G__65265 = (0);
var G__65266 = (0);
seq__65117_65234 = G__65263;
chunk__65121_65235 = G__65264;
count__65122_65236 = G__65265;
i__65123_65237 = G__65266;
continue;
} else {
var G__65267 = cljs.core.next(seq__65117_65254__$1);
var G__65268 = null;
var G__65269 = (0);
var G__65270 = (0);
seq__65117_65234 = G__65267;
chunk__65121_65235 = G__65268;
count__65122_65236 = G__65269;
i__65123_65237 = G__65270;
continue;
}
} else {
var G__65271 = cljs.core.next(seq__65117_65254__$1);
var G__65272 = null;
var G__65273 = (0);
var G__65274 = (0);
seq__65117_65234 = G__65271;
chunk__65121_65235 = G__65272;
count__65122_65236 = G__65273;
i__65123_65237 = G__65274;
continue;
}
}
} else {
}
}
break;
}


var G__65275 = seq__65083;
var G__65276 = chunk__65085;
var G__65277 = count__65086;
var G__65278 = (i__65087 + (1));
seq__65083 = G__65275;
chunk__65085 = G__65276;
count__65086 = G__65277;
i__65087 = G__65278;
continue;
} else {
var G__65279 = seq__65083;
var G__65280 = chunk__65085;
var G__65281 = count__65086;
var G__65282 = (i__65087 + (1));
seq__65083 = G__65279;
chunk__65085 = G__65280;
count__65086 = G__65281;
i__65087 = G__65282;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65083);
if(temp__5753__auto__){
var seq__65083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65083__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65083__$1);
var G__65283 = cljs.core.chunk_rest(seq__65083__$1);
var G__65284 = c__4679__auto__;
var G__65285 = cljs.core.count(c__4679__auto__);
var G__65286 = (0);
seq__65083 = G__65283;
chunk__65085 = G__65284;
count__65086 = G__65285;
i__65087 = G__65286;
continue;
} else {
var path = cljs.core.first(seq__65083__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65131_65287 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65135_65288 = null;
var count__65136_65289 = (0);
var i__65137_65290 = (0);
while(true){
if((i__65137_65290 < count__65136_65289)){
var node_65291 = chunk__65135_65288.cljs$core$IIndexed$_nth$arity$2(null,i__65137_65290);
if(cljs.core.not(node_65291.shadow$old)){
var path_match_65292 = shadow.cljs.devtools.client.browser.match_paths(node_65291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65292)){
var new_link_65293 = (function (){var G__65143 = node_65291.cloneNode(true);
G__65143.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65143;
})();
(node_65291.shadow$old = true);

(new_link_65293.onload = ((function (seq__65131_65287,chunk__65135_65288,count__65136_65289,i__65137_65290,seq__65083,chunk__65085,count__65086,i__65087,new_link_65293,path_match_65292,node_65291,path,seq__65083__$1,temp__5753__auto__,map__65082,map__65082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65291);
});})(seq__65131_65287,chunk__65135_65288,count__65136_65289,i__65137_65290,seq__65083,chunk__65085,count__65086,i__65087,new_link_65293,path_match_65292,node_65291,path,seq__65083__$1,temp__5753__auto__,map__65082,map__65082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65292], 0));

goog.dom.insertSiblingAfter(new_link_65293,node_65291);


var G__65294 = seq__65131_65287;
var G__65295 = chunk__65135_65288;
var G__65296 = count__65136_65289;
var G__65297 = (i__65137_65290 + (1));
seq__65131_65287 = G__65294;
chunk__65135_65288 = G__65295;
count__65136_65289 = G__65296;
i__65137_65290 = G__65297;
continue;
} else {
var G__65298 = seq__65131_65287;
var G__65299 = chunk__65135_65288;
var G__65300 = count__65136_65289;
var G__65301 = (i__65137_65290 + (1));
seq__65131_65287 = G__65298;
chunk__65135_65288 = G__65299;
count__65136_65289 = G__65300;
i__65137_65290 = G__65301;
continue;
}
} else {
var G__65302 = seq__65131_65287;
var G__65303 = chunk__65135_65288;
var G__65304 = count__65136_65289;
var G__65305 = (i__65137_65290 + (1));
seq__65131_65287 = G__65302;
chunk__65135_65288 = G__65303;
count__65136_65289 = G__65304;
i__65137_65290 = G__65305;
continue;
}
} else {
var temp__5753__auto___65306__$1 = cljs.core.seq(seq__65131_65287);
if(temp__5753__auto___65306__$1){
var seq__65131_65307__$1 = temp__5753__auto___65306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65131_65307__$1)){
var c__4679__auto___65308 = cljs.core.chunk_first(seq__65131_65307__$1);
var G__65309 = cljs.core.chunk_rest(seq__65131_65307__$1);
var G__65310 = c__4679__auto___65308;
var G__65311 = cljs.core.count(c__4679__auto___65308);
var G__65312 = (0);
seq__65131_65287 = G__65309;
chunk__65135_65288 = G__65310;
count__65136_65289 = G__65311;
i__65137_65290 = G__65312;
continue;
} else {
var node_65313 = cljs.core.first(seq__65131_65307__$1);
if(cljs.core.not(node_65313.shadow$old)){
var path_match_65314 = shadow.cljs.devtools.client.browser.match_paths(node_65313.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65314)){
var new_link_65315 = (function (){var G__65144 = node_65313.cloneNode(true);
G__65144.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65314),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65144;
})();
(node_65313.shadow$old = true);

(new_link_65315.onload = ((function (seq__65131_65287,chunk__65135_65288,count__65136_65289,i__65137_65290,seq__65083,chunk__65085,count__65086,i__65087,new_link_65315,path_match_65314,node_65313,seq__65131_65307__$1,temp__5753__auto___65306__$1,path,seq__65083__$1,temp__5753__auto__,map__65082,map__65082__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65313);
});})(seq__65131_65287,chunk__65135_65288,count__65136_65289,i__65137_65290,seq__65083,chunk__65085,count__65086,i__65087,new_link_65315,path_match_65314,node_65313,seq__65131_65307__$1,temp__5753__auto___65306__$1,path,seq__65083__$1,temp__5753__auto__,map__65082,map__65082__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65314], 0));

goog.dom.insertSiblingAfter(new_link_65315,node_65313);


var G__65316 = cljs.core.next(seq__65131_65307__$1);
var G__65317 = null;
var G__65318 = (0);
var G__65319 = (0);
seq__65131_65287 = G__65316;
chunk__65135_65288 = G__65317;
count__65136_65289 = G__65318;
i__65137_65290 = G__65319;
continue;
} else {
var G__65320 = cljs.core.next(seq__65131_65307__$1);
var G__65321 = null;
var G__65322 = (0);
var G__65323 = (0);
seq__65131_65287 = G__65320;
chunk__65135_65288 = G__65321;
count__65136_65289 = G__65322;
i__65137_65290 = G__65323;
continue;
}
} else {
var G__65324 = cljs.core.next(seq__65131_65307__$1);
var G__65325 = null;
var G__65326 = (0);
var G__65327 = (0);
seq__65131_65287 = G__65324;
chunk__65135_65288 = G__65325;
count__65136_65289 = G__65326;
i__65137_65290 = G__65327;
continue;
}
}
} else {
}
}
break;
}


var G__65328 = cljs.core.next(seq__65083__$1);
var G__65329 = null;
var G__65330 = (0);
var G__65331 = (0);
seq__65083 = G__65328;
chunk__65085 = G__65329;
count__65086 = G__65330;
i__65087 = G__65331;
continue;
} else {
var G__65332 = cljs.core.next(seq__65083__$1);
var G__65333 = null;
var G__65334 = (0);
var G__65335 = (0);
seq__65083 = G__65332;
chunk__65085 = G__65333;
count__65086 = G__65334;
i__65087 = G__65335;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65145){
var map__65146 = p__65145;
var map__65146__$1 = cljs.core.__destructure_map(map__65146);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65147){
var map__65148 = p__65147;
var map__65148__$1 = cljs.core.__destructure_map(map__65148);
var _ = map__65148__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65149,done,error){
var map__65150 = p__65149;
var map__65150__$1 = cljs.core.__destructure_map(map__65150);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65150__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65151,done,error){
var map__65152 = p__65151;
var map__65152__$1 = cljs.core.__destructure_map(map__65152);
var msg = map__65152__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65153){
var map__65154 = p__65153;
var map__65154__$1 = cljs.core.__destructure_map(map__65154);
var src = map__65154__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65154__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65155 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65155) : done.call(null,G__65155));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65156){
var map__65157 = p__65156;
var map__65157__$1 = cljs.core.__destructure_map(map__65157);
var msg__$1 = map__65157__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65157__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65158){var ex = e65158;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65159){
var map__65160 = p__65159;
var map__65160__$1 = cljs.core.__destructure_map(map__65160);
var env = map__65160__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65160__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__65161){
var map__65162 = p__65161;
var map__65162__$1 = cljs.core.__destructure_map(map__65162);
var msg = map__65162__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65162__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65163){
var map__65164 = p__65163;
var map__65164__$1 = cljs.core.__destructure_map(map__65164);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__65165){
var map__65166 = p__65165;
var map__65166__$1 = cljs.core.__destructure_map(map__65166);
var svc = map__65166__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
