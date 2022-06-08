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
var map__59656 = app__$1;
var map__59656__$1 = cljs.core.__destructure_map(map__59656);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59656__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
var new_props = (function (){var G__59657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__59658 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59657,G__59658) : com.fulcrologic.fulcro.components.computed.call(null,G__59657,G__59658));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-720442004,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__59659 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__59659) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__59659));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1624448810,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59660 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59661 = null;
var count__59662 = (0);
var i__59663 = (0);
while(true){
if((i__59663 < count__59662)){
var c = chunk__59661.cljs$core$IIndexed$_nth$arity$2(null,i__59663);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59797 = seq__59660;
var G__59798 = chunk__59661;
var G__59799 = count__59662;
var G__59800 = (i__59663 + (1));
seq__59660 = G__59797;
chunk__59661 = G__59798;
count__59662 = G__59799;
i__59663 = G__59800;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59660);
if(temp__5753__auto__){
var seq__59660__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59660__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59660__$1);
var G__59801 = cljs.core.chunk_rest(seq__59660__$1);
var G__59802 = c__4679__auto__;
var G__59803 = cljs.core.count(c__4679__auto__);
var G__59804 = (0);
seq__59660 = G__59801;
chunk__59661 = G__59802;
count__59662 = G__59803;
i__59663 = G__59804;
continue;
} else {
var c = cljs.core.first(seq__59660__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59805 = cljs.core.next(seq__59660__$1);
var G__59806 = null;
var G__59807 = (0);
var G__59808 = (0);
seq__59660 = G__59805;
chunk__59661 = G__59806;
count__59662 = G__59807;
i__59663 = G__59808;
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

var map__59670 = app__$1;
var map__59670__$1 = cljs.core.__destructure_map(map__59670);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59670__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59671 = cljs.core.deref(runtime_atom);
var map__59671__$1 = cljs.core.__destructure_map(map__59671);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59671__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59672 = indexes;
var map__59672__$1 = cljs.core.__destructure_map(map__59672);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59672__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59672__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59672__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__59674 = cljs.core.seq(classes);
var chunk__59675 = null;
var count__59676 = (0);
var i__59677 = (0);
while(true){
if((i__59677 < count__59676)){
var class$ = chunk__59675.cljs$core$IIndexed$_nth$arity$2(null,i__59677);
var seq__59697_59810 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59700_59811 = null;
var count__59701_59812 = (0);
var i__59702_59813 = (0);
while(true){
if((i__59702_59813 < count__59701_59812)){
var component_59818 = chunk__59700_59811.cljs$core$IIndexed$_nth$arity$2(null,i__59702_59813);
var component_ident_59819 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59818) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59818));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59819,component_59818);


var G__59820 = seq__59697_59810;
var G__59821 = chunk__59700_59811;
var G__59822 = count__59701_59812;
var G__59823 = (i__59702_59813 + (1));
seq__59697_59810 = G__59820;
chunk__59700_59811 = G__59821;
count__59701_59812 = G__59822;
i__59702_59813 = G__59823;
continue;
} else {
var temp__5753__auto___59824 = cljs.core.seq(seq__59697_59810);
if(temp__5753__auto___59824){
var seq__59697_59825__$1 = temp__5753__auto___59824;
if(cljs.core.chunked_seq_QMARK_(seq__59697_59825__$1)){
var c__4679__auto___59828 = cljs.core.chunk_first(seq__59697_59825__$1);
var G__59830 = cljs.core.chunk_rest(seq__59697_59825__$1);
var G__59831 = c__4679__auto___59828;
var G__59832 = cljs.core.count(c__4679__auto___59828);
var G__59833 = (0);
seq__59697_59810 = G__59830;
chunk__59700_59811 = G__59831;
count__59701_59812 = G__59832;
i__59702_59813 = G__59833;
continue;
} else {
var component_59835 = cljs.core.first(seq__59697_59825__$1);
var component_ident_59836 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59835) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59835));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59836,component_59835);


var G__59837 = cljs.core.next(seq__59697_59825__$1);
var G__59838 = null;
var G__59839 = (0);
var G__59840 = (0);
seq__59697_59810 = G__59837;
chunk__59700_59811 = G__59838;
count__59701_59812 = G__59839;
i__59702_59813 = G__59840;
continue;
}
} else {
}
}
break;
}


var G__59841 = seq__59674;
var G__59842 = chunk__59675;
var G__59843 = count__59676;
var G__59844 = (i__59677 + (1));
seq__59674 = G__59841;
chunk__59675 = G__59842;
count__59676 = G__59843;
i__59677 = G__59844;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59674);
if(temp__5753__auto__){
var seq__59674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59674__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59674__$1);
var G__59847 = cljs.core.chunk_rest(seq__59674__$1);
var G__59848 = c__4679__auto__;
var G__59849 = cljs.core.count(c__4679__auto__);
var G__59850 = (0);
seq__59674 = G__59847;
chunk__59675 = G__59848;
count__59676 = G__59849;
i__59677 = G__59850;
continue;
} else {
var class$ = cljs.core.first(seq__59674__$1);
var seq__59707_59852 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59709_59853 = null;
var count__59710_59854 = (0);
var i__59711_59855 = (0);
while(true){
if((i__59711_59855 < count__59710_59854)){
var component_59856 = chunk__59709_59853.cljs$core$IIndexed$_nth$arity$2(null,i__59711_59855);
var component_ident_59857 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59856) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59856));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59857,component_59856);


var G__59859 = seq__59707_59852;
var G__59860 = chunk__59709_59853;
var G__59861 = count__59710_59854;
var G__59862 = (i__59711_59855 + (1));
seq__59707_59852 = G__59859;
chunk__59709_59853 = G__59860;
count__59710_59854 = G__59861;
i__59711_59855 = G__59862;
continue;
} else {
var temp__5753__auto___59863__$1 = cljs.core.seq(seq__59707_59852);
if(temp__5753__auto___59863__$1){
var seq__59707_59864__$1 = temp__5753__auto___59863__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59707_59864__$1)){
var c__4679__auto___59865 = cljs.core.chunk_first(seq__59707_59864__$1);
var G__59866 = cljs.core.chunk_rest(seq__59707_59864__$1);
var G__59867 = c__4679__auto___59865;
var G__59868 = cljs.core.count(c__4679__auto___59865);
var G__59869 = (0);
seq__59707_59852 = G__59866;
chunk__59709_59853 = G__59867;
count__59710_59854 = G__59868;
i__59711_59855 = G__59869;
continue;
} else {
var component_59870 = cljs.core.first(seq__59707_59864__$1);
var component_ident_59871 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59870) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59870));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59871,component_59870);


var G__59872 = cljs.core.next(seq__59707_59864__$1);
var G__59873 = null;
var G__59874 = (0);
var G__59875 = (0);
seq__59707_59852 = G__59872;
chunk__59709_59853 = G__59873;
count__59710_59854 = G__59874;
i__59711_59855 = G__59875;
continue;
}
} else {
}
}
break;
}


var G__59876 = cljs.core.next(seq__59674__$1);
var G__59877 = null;
var G__59878 = (0);
var G__59879 = (0);
seq__59674 = G__59876;
chunk__59675 = G__59877;
count__59676 = G__59878;
i__59677 = G__59879;
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
var map__59717 = app__$1;
var map__59717__$1 = cljs.core.__destructure_map(map__59717);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59717__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59718 = cljs.core.deref(runtime_atom);
var map__59718__$1 = cljs.core.__destructure_map(map__59718);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59718__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59719 = indexes;
var map__59719__$1 = cljs.core.__destructure_map(map__59719);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59715_SHARP_,p2__59716_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59715_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59716_SHARP_) : class__GT_components.call(null,p2__59716_SHARP_)));
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
var map__59724 = app__$1;
var map__59724__$1 = cljs.core.__destructure_map(map__59724);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59725 = cljs.core.deref(runtime_atom);
var map__59725__$1 = cljs.core.__destructure_map(map__59725);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59726 = indexes;
var map__59726__$1 = cljs.core.__destructure_map(map__59726);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59727 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59727__$1 = cljs.core.__destructure_map(map__59727);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59730_59884 = cljs.core.seq(limited_to_render);
var chunk__59732_59885 = null;
var count__59733_59886 = (0);
var i__59734_59887 = (0);
while(true){
if((i__59734_59887 < count__59733_59886)){
var c_59888 = chunk__59732_59885.cljs$core$IIndexed$_nth$arity$2(null,i__59734_59887);
var ident_59889 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59888) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59888));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59889,c_59888);


var G__59890 = seq__59730_59884;
var G__59891 = chunk__59732_59885;
var G__59892 = count__59733_59886;
var G__59893 = (i__59734_59887 + (1));
seq__59730_59884 = G__59890;
chunk__59732_59885 = G__59891;
count__59733_59886 = G__59892;
i__59734_59887 = G__59893;
continue;
} else {
var temp__5753__auto___59895 = cljs.core.seq(seq__59730_59884);
if(temp__5753__auto___59895){
var seq__59730_59897__$1 = temp__5753__auto___59895;
if(cljs.core.chunked_seq_QMARK_(seq__59730_59897__$1)){
var c__4679__auto___59898 = cljs.core.chunk_first(seq__59730_59897__$1);
var G__59899 = cljs.core.chunk_rest(seq__59730_59897__$1);
var G__59900 = c__4679__auto___59898;
var G__59901 = cljs.core.count(c__4679__auto___59898);
var G__59902 = (0);
seq__59730_59884 = G__59899;
chunk__59732_59885 = G__59900;
count__59733_59886 = G__59901;
i__59734_59887 = G__59902;
continue;
} else {
var c_59903 = cljs.core.first(seq__59730_59897__$1);
var ident_59904 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59903) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59903));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59904,c_59903);


var G__59905 = cljs.core.next(seq__59730_59897__$1);
var G__59906 = null;
var G__59907 = (0);
var G__59908 = (0);
seq__59730_59884 = G__59905;
chunk__59732_59885 = G__59906;
count__59733_59886 = G__59907;
i__59734_59887 = G__59908;
continue;
}
} else {
}
}
break;
}

var seq__59740 = cljs.core.seq(limited_idents);
var chunk__59741 = null;
var count__59742 = (0);
var i__59743 = (0);
while(true){
if((i__59743 < count__59742)){
var i = chunk__59741.cljs$core$IIndexed$_nth$arity$2(null,i__59743);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59911 = seq__59740;
var G__59912 = chunk__59741;
var G__59913 = count__59742;
var G__59914 = (i__59743 + (1));
seq__59740 = G__59911;
chunk__59741 = G__59912;
count__59742 = G__59913;
i__59743 = G__59914;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59740);
if(temp__5753__auto__){
var seq__59740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59740__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59740__$1);
var G__59916 = cljs.core.chunk_rest(seq__59740__$1);
var G__59917 = c__4679__auto__;
var G__59918 = cljs.core.count(c__4679__auto__);
var G__59919 = (0);
seq__59740 = G__59916;
chunk__59741 = G__59917;
count__59742 = G__59918;
i__59743 = G__59919;
continue;
} else {
var i = cljs.core.first(seq__59740__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59921 = cljs.core.next(seq__59740__$1);
var G__59922 = null;
var G__59923 = (0);
var G__59924 = (0);
seq__59740 = G__59921;
chunk__59741 = G__59922;
count__59742 = G__59923;
i__59743 = G__59924;
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
var map__59748 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59748__$1 = cljs.core.__destructure_map(map__59748);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59757_59927 = cljs.core.seq(all_idents);
var chunk__59759_59928 = null;
var count__59760_59929 = (0);
var i__59762_59930 = (0);
while(true){
if((i__59762_59930 < count__59760_59929)){
var i_59931 = chunk__59759_59928.cljs$core$IIndexed$_nth$arity$2(null,i__59762_59930);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59931);


var G__59932 = seq__59757_59927;
var G__59933 = chunk__59759_59928;
var G__59934 = count__59760_59929;
var G__59935 = (i__59762_59930 + (1));
seq__59757_59927 = G__59932;
chunk__59759_59928 = G__59933;
count__59760_59929 = G__59934;
i__59762_59930 = G__59935;
continue;
} else {
var temp__5753__auto___59936 = cljs.core.seq(seq__59757_59927);
if(temp__5753__auto___59936){
var seq__59757_59937__$1 = temp__5753__auto___59936;
if(cljs.core.chunked_seq_QMARK_(seq__59757_59937__$1)){
var c__4679__auto___59938 = cljs.core.chunk_first(seq__59757_59937__$1);
var G__59940 = cljs.core.chunk_rest(seq__59757_59937__$1);
var G__59941 = c__4679__auto___59938;
var G__59942 = cljs.core.count(c__4679__auto___59938);
var G__59943 = (0);
seq__59757_59927 = G__59940;
chunk__59759_59928 = G__59941;
count__59760_59929 = G__59942;
i__59762_59930 = G__59943;
continue;
} else {
var i_59944 = cljs.core.first(seq__59757_59937__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59944);


var G__59945 = cljs.core.next(seq__59757_59937__$1);
var G__59946 = null;
var G__59947 = (0);
var G__59948 = (0);
seq__59757_59927 = G__59945;
chunk__59759_59928 = G__59946;
count__59760_59929 = G__59947;
i__59762_59930 = G__59948;
continue;
}
} else {
}
}
break;
}

var seq__59765 = cljs.core.seq(extra_to_force);
var chunk__59766 = null;
var count__59767 = (0);
var i__59768 = (0);
while(true){
if((i__59768 < count__59767)){
var c = chunk__59766.cljs$core$IIndexed$_nth$arity$2(null,i__59768);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__59949 = seq__59765;
var G__59950 = chunk__59766;
var G__59951 = count__59767;
var G__59952 = (i__59768 + (1));
seq__59765 = G__59949;
chunk__59766 = G__59950;
count__59767 = G__59951;
i__59768 = G__59952;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59765);
if(temp__5753__auto__){
var seq__59765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59765__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59765__$1);
var G__59953 = cljs.core.chunk_rest(seq__59765__$1);
var G__59954 = c__4679__auto__;
var G__59955 = cljs.core.count(c__4679__auto__);
var G__59956 = (0);
seq__59765 = G__59953;
chunk__59766 = G__59954;
count__59767 = G__59955;
i__59768 = G__59956;
continue;
} else {
var c = cljs.core.first(seq__59765__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__59959 = cljs.core.next(seq__59765__$1);
var G__59960 = null;
var G__59961 = (0);
var G__59962 = (0);
seq__59765 = G__59959;
chunk__59766 = G__59960;
count__59767 = G__59961;
i__59768 = G__59962;
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
var G__59778 = arguments.length;
switch (G__59778) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59786){
var map__59787 = p__59786;
var map__59787__$1 = cljs.core.__destructure_map(map__59787);
var options = map__59787__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59787__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59787__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e59788){var e = e59788;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1531478048,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
