goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__59663 = app__$1;
var map__59663__$1 = cljs.core.__destructure_map(map__59663);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__59664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__59665 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59664,G__59665) : com.fulcrologic.fulcro.components.computed.call(null,G__59664,G__59665));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-455221018,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__59671 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__59671) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__59671));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,2091104539,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59675 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59676 = null;
var count__59677 = (0);
var i__59678 = (0);
while(true){
if((i__59678 < count__59677)){
var c = chunk__59676.cljs$core$IIndexed$_nth$arity$2(null,i__59678);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59825 = seq__59675;
var G__59826 = chunk__59676;
var G__59827 = count__59677;
var G__59828 = (i__59678 + (1));
seq__59675 = G__59825;
chunk__59676 = G__59826;
count__59677 = G__59827;
i__59678 = G__59828;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59675);
if(temp__5753__auto__){
var seq__59675__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59675__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59675__$1);
var G__59829 = cljs.core.chunk_rest(seq__59675__$1);
var G__59830 = c__4679__auto__;
var G__59831 = cljs.core.count(c__4679__auto__);
var G__59832 = (0);
seq__59675 = G__59829;
chunk__59676 = G__59830;
count__59677 = G__59831;
i__59678 = G__59832;
continue;
} else {
var c = cljs.core.first(seq__59675__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59833 = cljs.core.next(seq__59675__$1);
var G__59834 = null;
var G__59835 = (0);
var G__59836 = (0);
seq__59675 = G__59833;
chunk__59676 = G__59834;
count__59677 = G__59835;
i__59678 = G__59836;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__59687 = app__$1;
var map__59687__$1 = cljs.core.__destructure_map(map__59687);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59687__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59688 = cljs.core.deref(runtime_atom);
var map__59688__$1 = cljs.core.__destructure_map(map__59688);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59688__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59689 = indexes;
var map__59689__$1 = cljs.core.__destructure_map(map__59689);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59689__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59689__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59689__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__59691 = cljs.core.seq(classes);
var chunk__59692 = null;
var count__59693 = (0);
var i__59694 = (0);
while(true){
if((i__59694 < count__59693)){
var class$ = chunk__59692.cljs$core$IIndexed$_nth$arity$2(null,i__59694);
var seq__59719_59840 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59721_59841 = null;
var count__59722_59842 = (0);
var i__59723_59843 = (0);
while(true){
if((i__59723_59843 < count__59722_59842)){
var component_59844 = chunk__59721_59841.cljs$core$IIndexed$_nth$arity$2(null,i__59723_59843);
var component_ident_59845 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59844) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59844));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59845,component_59844);


var G__59846 = seq__59719_59840;
var G__59847 = chunk__59721_59841;
var G__59848 = count__59722_59842;
var G__59849 = (i__59723_59843 + (1));
seq__59719_59840 = G__59846;
chunk__59721_59841 = G__59847;
count__59722_59842 = G__59848;
i__59723_59843 = G__59849;
continue;
} else {
var temp__5753__auto___59850 = cljs.core.seq(seq__59719_59840);
if(temp__5753__auto___59850){
var seq__59719_59851__$1 = temp__5753__auto___59850;
if(cljs.core.chunked_seq_QMARK_(seq__59719_59851__$1)){
var c__4679__auto___59852 = cljs.core.chunk_first(seq__59719_59851__$1);
var G__59853 = cljs.core.chunk_rest(seq__59719_59851__$1);
var G__59854 = c__4679__auto___59852;
var G__59855 = cljs.core.count(c__4679__auto___59852);
var G__59856 = (0);
seq__59719_59840 = G__59853;
chunk__59721_59841 = G__59854;
count__59722_59842 = G__59855;
i__59723_59843 = G__59856;
continue;
} else {
var component_59858 = cljs.core.first(seq__59719_59851__$1);
var component_ident_59860 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59858) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59858));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59860,component_59858);


var G__59862 = cljs.core.next(seq__59719_59851__$1);
var G__59863 = null;
var G__59864 = (0);
var G__59865 = (0);
seq__59719_59840 = G__59862;
chunk__59721_59841 = G__59863;
count__59722_59842 = G__59864;
i__59723_59843 = G__59865;
continue;
}
} else {
}
}
break;
}


var G__59866 = seq__59691;
var G__59867 = chunk__59692;
var G__59868 = count__59693;
var G__59869 = (i__59694 + (1));
seq__59691 = G__59866;
chunk__59692 = G__59867;
count__59693 = G__59868;
i__59694 = G__59869;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59691);
if(temp__5753__auto__){
var seq__59691__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59691__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59691__$1);
var G__59870 = cljs.core.chunk_rest(seq__59691__$1);
var G__59871 = c__4679__auto__;
var G__59872 = cljs.core.count(c__4679__auto__);
var G__59873 = (0);
seq__59691 = G__59870;
chunk__59692 = G__59871;
count__59693 = G__59872;
i__59694 = G__59873;
continue;
} else {
var class$ = cljs.core.first(seq__59691__$1);
var seq__59744_59874 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59746_59875 = null;
var count__59747_59876 = (0);
var i__59748_59877 = (0);
while(true){
if((i__59748_59877 < count__59747_59876)){
var component_59878 = chunk__59746_59875.cljs$core$IIndexed$_nth$arity$2(null,i__59748_59877);
var component_ident_59879 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59878) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59878));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59879,component_59878);


var G__59880 = seq__59744_59874;
var G__59881 = chunk__59746_59875;
var G__59882 = count__59747_59876;
var G__59883 = (i__59748_59877 + (1));
seq__59744_59874 = G__59880;
chunk__59746_59875 = G__59881;
count__59747_59876 = G__59882;
i__59748_59877 = G__59883;
continue;
} else {
var temp__5753__auto___59884__$1 = cljs.core.seq(seq__59744_59874);
if(temp__5753__auto___59884__$1){
var seq__59744_59885__$1 = temp__5753__auto___59884__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59744_59885__$1)){
var c__4679__auto___59886 = cljs.core.chunk_first(seq__59744_59885__$1);
var G__59887 = cljs.core.chunk_rest(seq__59744_59885__$1);
var G__59888 = c__4679__auto___59886;
var G__59889 = cljs.core.count(c__4679__auto___59886);
var G__59890 = (0);
seq__59744_59874 = G__59887;
chunk__59746_59875 = G__59888;
count__59747_59876 = G__59889;
i__59748_59877 = G__59890;
continue;
} else {
var component_59891 = cljs.core.first(seq__59744_59885__$1);
var component_ident_59892 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59891) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59891));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59892,component_59891);


var G__59893 = cljs.core.next(seq__59744_59885__$1);
var G__59894 = null;
var G__59895 = (0);
var G__59896 = (0);
seq__59744_59874 = G__59893;
chunk__59746_59875 = G__59894;
count__59747_59876 = G__59895;
i__59748_59877 = G__59896;
continue;
}
} else {
}
}
break;
}


var G__59897 = cljs.core.next(seq__59691__$1);
var G__59898 = null;
var G__59899 = (0);
var G__59900 = (0);
seq__59691 = G__59897;
chunk__59692 = G__59898;
count__59693 = G__59899;
i__59694 = G__59900;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__59760 = app__$1;
var map__59760__$1 = cljs.core.__destructure_map(map__59760);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59761 = cljs.core.deref(runtime_atom);
var map__59761__$1 = cljs.core.__destructure_map(map__59761);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59761__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59762 = indexes;
var map__59762__$1 = cljs.core.__destructure_map(map__59762);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59758_SHARP_,p2__59759_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59758_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59759_SHARP_) : class__GT_components.call(null,p2__59759_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__59770 = app__$1;
var map__59770__$1 = cljs.core.__destructure_map(map__59770);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59771 = cljs.core.deref(runtime_atom);
var map__59771__$1 = cljs.core.__destructure_map(map__59771);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59772 = indexes;
var map__59772__$1 = cljs.core.__destructure_map(map__59772);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59777 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59777__$1 = cljs.core.__destructure_map(map__59777);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59779_59928 = cljs.core.seq(limited_to_render);
var chunk__59781_59929 = null;
var count__59782_59930 = (0);
var i__59783_59931 = (0);
while(true){
if((i__59783_59931 < count__59782_59930)){
var c_59932 = chunk__59781_59929.cljs$core$IIndexed$_nth$arity$2(null,i__59783_59931);
var ident_59933 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59932) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59932));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59933,c_59932);


var G__59934 = seq__59779_59928;
var G__59935 = chunk__59781_59929;
var G__59936 = count__59782_59930;
var G__59937 = (i__59783_59931 + (1));
seq__59779_59928 = G__59934;
chunk__59781_59929 = G__59935;
count__59782_59930 = G__59936;
i__59783_59931 = G__59937;
continue;
} else {
var temp__5753__auto___59938 = cljs.core.seq(seq__59779_59928);
if(temp__5753__auto___59938){
var seq__59779_59939__$1 = temp__5753__auto___59938;
if(cljs.core.chunked_seq_QMARK_(seq__59779_59939__$1)){
var c__4679__auto___59940 = cljs.core.chunk_first(seq__59779_59939__$1);
var G__59941 = cljs.core.chunk_rest(seq__59779_59939__$1);
var G__59942 = c__4679__auto___59940;
var G__59943 = cljs.core.count(c__4679__auto___59940);
var G__59944 = (0);
seq__59779_59928 = G__59941;
chunk__59781_59929 = G__59942;
count__59782_59930 = G__59943;
i__59783_59931 = G__59944;
continue;
} else {
var c_59945 = cljs.core.first(seq__59779_59939__$1);
var ident_59946 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59945) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59945));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59946,c_59945);


var G__59947 = cljs.core.next(seq__59779_59939__$1);
var G__59948 = null;
var G__59949 = (0);
var G__59950 = (0);
seq__59779_59928 = G__59947;
chunk__59781_59929 = G__59948;
count__59782_59930 = G__59949;
i__59783_59931 = G__59950;
continue;
}
} else {
}
}
break;
}

var seq__59788 = cljs.core.seq(limited_idents);
var chunk__59789 = null;
var count__59790 = (0);
var i__59791 = (0);
while(true){
if((i__59791 < count__59790)){
var i = chunk__59789.cljs$core$IIndexed$_nth$arity$2(null,i__59791);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59951 = seq__59788;
var G__59952 = chunk__59789;
var G__59953 = count__59790;
var G__59954 = (i__59791 + (1));
seq__59788 = G__59951;
chunk__59789 = G__59952;
count__59790 = G__59953;
i__59791 = G__59954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59788);
if(temp__5753__auto__){
var seq__59788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59788__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59788__$1);
var G__59955 = cljs.core.chunk_rest(seq__59788__$1);
var G__59956 = c__4679__auto__;
var G__59957 = cljs.core.count(c__4679__auto__);
var G__59958 = (0);
seq__59788 = G__59955;
chunk__59789 = G__59956;
count__59790 = G__59957;
i__59791 = G__59958;
continue;
} else {
var i = cljs.core.first(seq__59788__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59961 = cljs.core.next(seq__59788__$1);
var G__59962 = null;
var G__59963 = (0);
var G__59964 = (0);
seq__59788 = G__59961;
chunk__59789 = G__59962;
count__59790 = G__59963;
i__59791 = G__59964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__59793 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59793__$1 = cljs.core.__destructure_map(map__59793);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59797_59965 = cljs.core.seq(all_idents);
var chunk__59798_59966 = null;
var count__59799_59967 = (0);
var i__59800_59968 = (0);
while(true){
if((i__59800_59968 < count__59799_59967)){
var i_59969 = chunk__59798_59966.cljs$core$IIndexed$_nth$arity$2(null,i__59800_59968);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59969);


var G__59970 = seq__59797_59965;
var G__59971 = chunk__59798_59966;
var G__59972 = count__59799_59967;
var G__59973 = (i__59800_59968 + (1));
seq__59797_59965 = G__59970;
chunk__59798_59966 = G__59971;
count__59799_59967 = G__59972;
i__59800_59968 = G__59973;
continue;
} else {
var temp__5753__auto___59974 = cljs.core.seq(seq__59797_59965);
if(temp__5753__auto___59974){
var seq__59797_59975__$1 = temp__5753__auto___59974;
if(cljs.core.chunked_seq_QMARK_(seq__59797_59975__$1)){
var c__4679__auto___59976 = cljs.core.chunk_first(seq__59797_59975__$1);
var G__59977 = cljs.core.chunk_rest(seq__59797_59975__$1);
var G__59978 = c__4679__auto___59976;
var G__59979 = cljs.core.count(c__4679__auto___59976);
var G__59980 = (0);
seq__59797_59965 = G__59977;
chunk__59798_59966 = G__59978;
count__59799_59967 = G__59979;
i__59800_59968 = G__59980;
continue;
} else {
var i_59981 = cljs.core.first(seq__59797_59975__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59981);


var G__59982 = cljs.core.next(seq__59797_59975__$1);
var G__59983 = null;
var G__59984 = (0);
var G__59985 = (0);
seq__59797_59965 = G__59982;
chunk__59798_59966 = G__59983;
count__59799_59967 = G__59984;
i__59800_59968 = G__59985;
continue;
}
} else {
}
}
break;
}

var seq__59805 = cljs.core.seq(extra_to_force);
var chunk__59806 = null;
var count__59807 = (0);
var i__59808 = (0);
while(true){
if((i__59808 < count__59807)){
var c = chunk__59806.cljs$core$IIndexed$_nth$arity$2(null,i__59808);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__59987 = seq__59805;
var G__59988 = chunk__59806;
var G__59989 = count__59807;
var G__59990 = (i__59808 + (1));
seq__59805 = G__59987;
chunk__59806 = G__59988;
count__59807 = G__59989;
i__59808 = G__59990;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59805);
if(temp__5753__auto__){
var seq__59805__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59805__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59805__$1);
var G__59992 = cljs.core.chunk_rest(seq__59805__$1);
var G__59993 = c__4679__auto__;
var G__59994 = cljs.core.count(c__4679__auto__);
var G__59995 = (0);
seq__59805 = G__59992;
chunk__59806 = G__59993;
count__59807 = G__59994;
i__59808 = G__59995;
continue;
} else {
var c = cljs.core.first(seq__59805__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__59996 = cljs.core.next(seq__59805__$1);
var G__59997 = null;
var G__59998 = (0);
var G__59999 = (0);
seq__59805 = G__59996;
chunk__59806 = G__59997;
count__59807 = G__59998;
i__59808 = G__59999;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__59814 = arguments.length;
switch (G__59814) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59815){
var map__59816 = p__59815;
var map__59816__$1 = cljs.core.__destructure_map(map__59816);
var options = map__59816__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59816__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59816__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e59817){var e = e59817;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,841512946,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
