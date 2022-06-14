goog.provide('com.fulcrologic.fulcro.raw.components');
goog.scope(function(){
  com.fulcrologic.fulcro.raw.components.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.raw !== 'undefined') && (typeof com.fulcrologic.fulcro.raw.components !== 'undefined') && (typeof com.fulcrologic.fulcro.raw.components.component_registry !== 'undefined')){
} else {
com.fulcrologic.fulcro.raw.components.component_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = null;
/**
 * Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.raw.components.isoget_in = (function com$fulcrologic$fulcro$raw$components$isoget_in(var_args){
var G__55809 = arguments.length;
switch (G__55809) {
case 2:
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,kvs){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3(obj,kvs,null);
}));

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,kvs,default$){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
var G__55810 = k;
if((G__55810 == null)){
return null;
} else {
return cljs.core.name(G__55810);
}
}),kvs);
var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.raw.components.goog$module$goog$object.getValueByKeys,obj,ks);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.raw.components.isoget = (function com$fulcrologic$fulcro$raw$components$isoget(var_args){
var G__55812 = arguments.length;
switch (G__55812) {
case 2:
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4253__auto__ = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(obj,(function (){var G__55814 = k;
if((G__55814 == null)){
return null;
} else {
return cljs.core.name(G__55814);
}
})());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.raw.components.isoget.cljs$lang$maxFixedArity = 3);

/**
 * Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.raw.components.register_component_BANG_ = (function com$fulcrologic$fulcro$raw$components$register_component_BANG_(k,component_class){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.raw.components.component_registry,cljs.core.assoc,k,component_class);

return component_class;
});
/**
 * Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.raw.components.newer_props = (function com$fulcrologic$fulcro$raw$components$newer_props(props_a,props_b){
if((props_a == null)){
return props_b;
} else {
if((props_b == null)){
return props_a;
} else {
if(((function (){var or__4253__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_a);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (2);
}
})() > (function (){var or__4253__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_b);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})())){
return props_a;
} else {
return props_b;

}
}
}
});
/**
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.raw.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$raw$components$component_instance_QMARK_(x){
if((!((x == null)))){
return com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(x,"fulcro$isComponent") === true;
} else {
return false;
}
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.raw.components.any__GT_app = (function com$fulcrologic$fulcro$raw$components$any__GT_app(x){
var fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$raw$components$any__GT_app_$_fulcro_app_QMARK_(x__$1){
return ((cljs.core.map_QMARK_(x__$1)) && (cljs.core.contains_QMARK_(x__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366))));
});
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306)], null));
} else {
if(cljs.core.truth_(fulcro_app_QMARK_(x))){
return x;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var G__55816 = cljs.core.deref(x);
return (com.fulcrologic.fulcro.raw.components.any__GT_app.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.any__GT_app.cljs$core$IFn$_invoke$arity$1(G__55816) : com.fulcrologic.fulcro.raw.components.any__GT_app.call(null,G__55816));
} else {
return null;
}
}
}
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`.
 * 
 * This version does not rely on the dynamic var *shared*, which is only available from the react-based components ns.
 */
com.fulcrologic.fulcro.raw.components.shared = (function com$fulcrologic$fulcro$raw$components$shared(var_args){
var G__55818 = arguments.length;
switch (G__55818) {
case 1:
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (comp_or_app){
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2(comp_or_app,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_app,k_or_ks){
var shared = (function (){var G__55819 = com.fulcrologic.fulcro.raw.components.any__GT_app(comp_or_app);
var G__55819__$1 = (((G__55819 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__55819));
var G__55819__$2 = (((G__55819__$1 == null))?null:cljs.core.deref(G__55819__$1));
if((G__55819__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157).cljs$core$IFn$_invoke$arity$1(G__55819__$2);
}
})();
var ks = (function (){var G__55820 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__55820],null));
} else {
return G__55820;
}
})();
var G__55821 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__55821,ks);
} else {
return G__55821;
}
}));

(com.fulcrologic.fulcro.raw.components.shared.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.raw.components.component_QMARK_ = com.fulcrologic.fulcro.raw.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.raw.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$raw$components$component_class_QMARK_(x){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.goog$module$goog$object.containsKey(x,"fulcro$class"));
});
/**
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.raw.components.component_name = (function com$fulcrologic$fulcro$raw$components$component_name(class$){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
});
/**
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.raw.components.class__GT_registry_key = (function com$fulcrologic$fulcro$raw$components$class__GT_registry_key(class$){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"fulcro$registryKey","fulcro$registryKey",-155509270));
});
/**
 * Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.raw.components.registry_key__GT_class = (function com$fulcrologic$fulcro$raw$components$registry_key__GT_class(classname){
if((classname instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),classname);
} else {
if((classname instanceof cljs.core.Symbol)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(classname),cljs.core.name(classname));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),k);
} else {
if(((typeof classname === 'string') && (clojure.string.includes_QMARK_(classname,"/")))){
var vec__55822 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(classname,/\//);
var nspc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55822,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55822,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(nspc,nm);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),k);
} else {
return null;

}
}
}
});
/**
 * Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.raw.components.computed = (function com$fulcrologic$fulcro$raw$components$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__55825 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__55825,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__55825;
}
} else {
var G__55826 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55826,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__55826;
}
}
}
});
/**
 * Return the computed properties on a component or its props. Note that it requires that the normal properties are not nil.
 */
com.fulcrologic.fulcro.raw.components.get_computed = (function com$fulcrologic$fulcro$raw$components$get_computed(var_args){
var G__55828 = arguments.length;
switch (G__55828) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__55829 = x;
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
return (com.fulcrologic.fulcro.raw.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.props.cljs$core$IFn$_invoke$arity$1(G__55829) : com.fulcrologic.fulcro.raw.components.props.call(null,G__55829));
} else {
return G__55829;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__55830 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__55830],null));
} else {
return G__55830;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
}));

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$lang$maxFixedArity = 2);

/**
 * Return a component's props.
 */
com.fulcrologic.fulcro.raw.components.props = (function com$fulcrologic$fulcro$raw$components$props(component){
var props_from_parent = com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null));
var computed_from_parent = com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1(props_from_parent);
var props_from_updates = com.fulcrologic.fulcro.raw.components.computed(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null)),computed_from_parent);
return com.fulcrologic.fulcro.raw.components.newer_props(props_from_parent,props_from_updates);
});
/**
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.raw.components.children = (function com$fulcrologic$fulcro$raw$components$children(component){
var cs = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.raw.components.component_type = (function com$fulcrologic$fulcro$raw$components$component_type(x){
var or__4253__auto__ = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(x,"type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the react type (component class) of the given React element (instance). Is identity if used on a class.
 */
com.fulcrologic.fulcro.raw.components.get_class = (function com$fulcrologic$fulcro$raw$components$get_class(instance){
return com.fulcrologic.fulcro.raw.components.component_type(instance);
});
/**
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.raw.components.component_options = (function com$fulcrologic$fulcro$raw$components$component_options(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55976 = arguments.length;
var i__4865__auto___55977 = (0);
while(true){
if((i__4865__auto___55977 < len__4864__auto___55976)){
args__4870__auto__.push((arguments[i__4865__auto___55977]));

var G__55978 = (i__4865__auto___55977 + (1));
i__4865__auto___55977 = G__55978;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic = (function (instance_or_class,ks){
var c = com.fulcrologic.fulcro.raw.components.component_type(instance_or_class);
var options = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(instance_or_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
}
})();
if(cljs.core.seq(options)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.vec(ks));
} else {
return options;
}
}));

(com.fulcrologic.fulcro.raw.components.component_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.raw.components.component_options.cljs$lang$applyTo = (function (seq55831){
var G__55832 = cljs.core.first(seq55831);
var seq55831__$1 = cljs.core.next(seq55831);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55832,seq55831__$1);
}));

com.fulcrologic.fulcro.raw.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_(com.fulcrologic.fulcro.raw.components.component_options(component),option_key);
});
com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
com.fulcrologic.fulcro.raw.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
com.fulcrologic.fulcro.raw.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
com.fulcrologic.fulcro.raw.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
com.fulcrologic.fulcro.raw.components.ident = (function com$fulcrologic$fulcro$raw$components$ident(this$,props){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__55833 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
return (fexpr__55833.cljs$core$IFn$_invoke$arity$2 ? fexpr__55833.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__55833.call(null,this$,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.query = (function com$fulcrologic$fulcro$raw$components$query(this$){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__55834 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0));
return (fexpr__55834.cljs$core$IFn$_invoke$arity$1 ? fexpr__55834.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__55834.call(null,this$));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.initial_state = (function com$fulcrologic$fulcro$raw$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__55835 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(clz,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], 0));
return (fexpr__55835.cljs$core$IFn$_invoke$arity$1 ? fexpr__55835.cljs$core$IFn$_invoke$arity$1(params) : fexpr__55835.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.pre_merge = (function com$fulcrologic$fulcro$raw$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__55836 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)], 0));
return (fexpr__55836.cljs$core$IFn$_invoke$arity$1 ? fexpr__55836.cljs$core$IFn$_invoke$arity$1(data) : fexpr__55836.call(null,data));
} else {
return null;
}
});
/**
 * Make a given `render-fn` (a plain fn) act like a a Fulcro component with the given component options map. Registers the
 *   new component in the component-registry. Component options MUST contain :componentName as be a fully-qualified
 *   keyword to name the component in the registry.
 * 
 *   component-options *must* include a unique `:componentName` (keyword) that will be used for registering the given
 *   function as the faux class in the component registry.
 * 
 *   IMPORTANT: In CLJS this function adds extra things to the mutable js fn. In CLJ, components are just maps, and this
 *   side-effect cannot modify it. As such it returns the configured component so you can use it in CLJ.
 */
com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_ = (function com$fulcrologic$fulcro$raw$components$configure_anonymous_component_BANG_(render_fn,component_options){
var k = new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options);
var faux_classname = (cljs.core.truth_(k)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(k),cljs.core.name(k)], null)):"anonymous");
var result = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.extend(render_fn,({"fulcro$options": component_options, "displayName": faux_classname, "fulcro$class": render_fn, "type": render_fn, "cljs$lang$type": true, "cljs$lang$ctorStr": faux_classname, "cljs$lang$ctorPrWriter": (function (_,writer,___$1){
return cljs.core._write(writer,faux_classname);
}), "fulcro$registryKey": new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options)}));
if(cljs.core.truth_(k)){
com.fulcrologic.fulcro.raw.components.register_component_BANG_(k,render_fn);
} else {
}

return render_fn;
});
/**
 * Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.raw.components.get_initial_state = (function com$fulcrologic$fulcro$raw$components$get_initial_state(var_args){
var G__55838 = arguments.length;
switch (G__55838) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$1 = (function (class$){
var G__55839 = com.fulcrologic.fulcro.raw.components.initial_state(class$,cljs.core.PersistentArrayMap.EMPTY);
if((G__55839 == null)){
return null;
} else {
return cljs.core.with_meta(G__55839,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 = (function (class$,params){
var G__55840 = com.fulcrologic.fulcro.raw.components.initial_state(class$,params);
if((G__55840 == null)){
return null;
} else {
return cljs.core.with_meta(G__55840,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$lang$maxFixedArity = 2);

/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.raw.components.get_ident = (function com$fulcrologic$fulcro$raw$components$get_ident(var_args){
var G__55842 = arguments.length;
switch (G__55842) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component-instance? x)"));
}

var temp__5751__auto__ = com.fulcrologic.fulcro.raw.components.props(x);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return com.fulcrologic.fulcro.raw.components.ident(x,m);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,270,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident was invoked on ",com.fulcrologic.fulcro.raw.components.component_name(x)," with nil props (this could mean it wasn't yet mounted): ",x,"See https://book.fulcrologic.com/#warn-get-ident-with-nil-props"], null);
}),null)),null,-765893320,null);
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if(cljs.core.truth_((function (){var and__4251__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4251__auto__)){
return (!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,273,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident called with something that does not implement ident: ",class$,"See https://book.fulcrologic.com/#warn-get-ident-invalid-class"], null);
}),null)),null,720186322,null);
} else {
}

var temp__5751__auto__ = com.fulcrologic.fulcro.raw.components.ident(class$,props);
if(cljs.core.truth_(temp__5751__auto__)){
var id = temp__5751__auto__;
if(cljs.core.truth_((function (){var and__4251__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4251__auto__)){
return (!(edn_query_language.core.ident_QMARK_(id)));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,277,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.raw.components.component_name(class$),"get-ident returned invalid ident:",id,"See https://book.fulcrologic.com/#warn-get-ident-invalid-ident"], null);
}),null)),null,227791144,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.raw.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$raw$components$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
});
/**
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.raw.components.query_id = (function com$fulcrologic$fulcro$raw$components$query_id(class$,qualifier){
if((class$ == null)){
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,292,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query ID received no class (if you see this warning, it probably means metadata was lost on your query) See https://book.fulcrologic.com/#err-comp-query-id-no-class",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], null);
}),null)),null,-1802646709,null);
} else {
return null;
}
} else {
var temp__5753__auto__ = com.fulcrologic.fulcro.raw.components.component_name(class$);
if(cljs.core.truth_(temp__5753__auto__)){
var classname = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),(cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null)].join('');
} else {
return null;
}
}
});
/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
com.fulcrologic.fulcro.raw.components.denormalize_query = (function com$fulcrologic$fulcro$raw$components$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
var map__55843 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
var map__55843__$1 = cljs.core.__destructure_map(map__55843);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55843__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55843__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(component_key);
if(cljs.core.truth_(component)){
} else {
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
}

var G__55844 = query;
if((G__55844 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(G__55844,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"queryid","queryid",-271432056),id);
}
});
var temp__5753__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5753__auto__)){
var normalized_query = temp__5753__auto__;
return clojure.walk.prewalk((function (ele){
var temp__5751__auto__ = (function (){var and__4251__auto__ = typeof ele === 'string';
if(and__4251__auto__){
return get_stored_query(ele);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var q = temp__5751__auto__;
return q;
} else {
return ele;
}
}),normalized_query);
} else {
return null;
}
});
/**
 * Get the query id that is cached in the component's props.
 */
com.fulcrologic.fulcro.raw.components.get_query_id = (function com$fulcrologic$fulcro$raw$components$get_query_id(component){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),"fulcro$queryid"], null));
});
com.fulcrologic.fulcro.raw.components.get_query_by_id = (function com$fulcrologic$fulcro$raw$components$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.raw.components.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.raw.components.get_query = (function com$fulcrologic$fulcro$raw$components$get_query(var_args){
var G__55846 = arguments.length;
switch (G__55846) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anonymous",com.fulcrologic.fulcro.raw.components.component_name(class_or_factory))){
return com.fulcrologic.fulcro.raw.components.query(class_or_factory);
} else {
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
}
}));

(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
if((class_or_factory == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil passed to get-query",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var _STAR_query_state_STAR__orig_val__55847 = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__55848 = state_map;
(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__55848);

try{var class$ = ((com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.raw.components.component_type(class_or_factory):class_or_factory
));
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?(function (){var or__4253__auto__ = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return class$;
}
})():class$);
var qualifier = ((com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.raw.components.get_query_id(class_or_factory):com.fulcrologic.fulcro.raw.components.query_id(class$__$1,qualifier));
if(cljs.core.truth_((function (){var and__4251__auto__ = class$__$1;
if(cljs.core.truth_(and__4251__auto__)){
return com.fulcrologic.fulcro.raw.components.has_query_QMARK_(class$__$1);
} else {
return and__4251__auto__;
}
})())){
return com.fulcrologic.fulcro.raw.components.get_query_by_id(state_map,class$__$1,queryid);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__55847);
}}));

(com.fulcrologic.fulcro.raw.components.get_query.cljs$lang$maxFixedArity = 2);

/**
 * Dynamic var that affects the activation of transactions run via `transact!`. Defaults to false. When set to true
 * this option prevents a transaction from running until after the next render is complete. This typically should not be set
 * to true in scenarios where you are unsure if a render will occur, since that could make the transaction appear to
 * "hang".
 */
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = false;
/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the *default* supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 *   - `:synchronous?` - boolean. When turned on the transaction will run immediately on the calling thread. If run against
 *   a component then the props will be immediately tunneled back to the calling component, allowing for React (raw) input
 *   event handlers to behave as described in standard React Forms docs (uses setState behind the scenes). Any remote operations
 *   will still be queued as normal. Calling `transact!!` is a shorthand for this option. WARNING: ONLY the given component will
 *   be refreshed in the UI. If you have dependent data elsewhere in the UI you must either use `transact!` or schedule
 *   your own global render using `app/schedule-render!`.
 *   - `:after-render?` - Wait until the next render completes before allowing this transaction to run. This can be used
 *   when calling `transact!` from *within* another mutation to ensure that the effects of the current mutation finish
 *   before this transaction takes control of the CPU. This option defaults to `false`, but `defmutation` causes it to
 *   be set to true for any transactions run within mutation action sections. You can affect the default for this value
 *   in a dynamic scope by binding `*after-render*` to true
 *   - `:parallel?` - Boolean. If true, the mutation(s) in the transaction will NOT go into a network queue, nor
 *  will it block later mutations or queries.
 * 
 *   You may add any additional keys to the option map (namespaced is ideal), and any value is legal in the options
 *   map, including functions. The options will appear in the `env` of all mutations run in the transaction as
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/options`. This is the preferred way of passing things like
 *   lambdas (if you wanted something like a callback) to mutations. Note that mutation symbols are perfectly legal
 *   as mutation *arguments*, so chaining mutations can already be done via the normal transaction mechanism, and
 *   callbacks, while sometimes necessary/useful, should be limited to usages where there is no other clean way
 *   to accomplish the goal.
 * 
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.raw.components.transact_BANG_ = (function com$fulcrologic$fulcro$raw$components$transact_BANG_(var_args){
var G__55850 = arguments.length;
switch (G__55850) {
case 3:
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
var temp__5753__auto__ = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_component);
if(cljs.core.truth_(temp__5753__auto__)){
var app__$1 = temp__5753__auto__;
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
var options__$1 = (function (){var G__55851 = options;
var G__55851__$1 = (((((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"after-render?","after-render?",595994030))))) && (com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ === true)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55851,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),true):G__55851);
var G__55851__$2 = (((((new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(app_or_component))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55851__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(app_or_component)):G__55851__$1);
if((((new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(app_or_component)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55851__$2,new cljs.core.Keyword(null,"component","component",1555936782),app_or_component);
} else {
return G__55851__$2;
}
})();
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options__$1) : tx_BANG_.call(null,app__$1,tx,options__$1));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Shorthand for exactly `(transact! component tx (merge options {:synchronous? true}))`.
 * 
 *   Runs a synchronous transaction, which is an optimized mode where the optimistic behaviors of the mutations in the
 *   transaction run on the calling thread, and new props are immediately made available to the calling component via
 *   "props tunneling" (a behind-the-scenes mechanism using js/setState).
 * 
 *   This mode is meant to be used in form input event handlers, since React is designed to only work properly with
 *   raw DOM inputs via component-local state. This prevents things like the cursor jumping to the end of inputs
 *   unexpectedly.
 * 
 *   WARNING: Using an `app` instead of a component in synchronous transactions makes no sense. You must pass a component
 *   that has an ident.
 * 
 *   If you're using this, you can also set the compiler option:
 * 
 *   ```
 *   :compiler-options {:external-config {:fulcro     {:wrap-inputs? false}}}
 *   ```
 * 
 *   to turn off Fulcro DOM's generation of wrapped inputs (which try to solve this problem in a less-effective way).
 * 
 *   WARNING: Synchronous rendering does *not* refresh the full UI, only the component.
 *   
 */
com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_ = (function com$fulcrologic$fulcro$raw$components$transact_BANG__BANG_(var_args){
var G__55853 = arguments.length;
switch (G__55853) {
case 2:
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391),true], null)], 0)));
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.raw.components.link_element = (function com$fulcrologic$fulcro$raw$components$link_element(element){
return clojure.walk.prewalk((function com$fulcrologic$fulcro$raw$components$link_element_$_link_element_helper(ele){
var map__55854 = cljs.core.meta(ele);
var map__55854__$1 = cljs.core.__destructure_map(map__55854);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55854__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.raw.components.normalize_query_elements = (function com$fulcrologic$fulcro$raw$components$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$raw$components$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
try{var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var union_meta = cljs.core.meta(union_alternates);
var normalized_union_alternates = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.link_element,union_alternates)),union_meta);
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
var union_component_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates)));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"component-key","component-key",1189239034),union_component_key,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$raw$components$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__55856){
var vec__55857 = p__55856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(1),null);
return (com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : com.fulcrologic.fulcro.raw.components.normalize_query.call(null,s,subquery));
}),state,union_alternates)], 0));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)) && (com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element))))){
return state;
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)){
var G__55860 = state;
var G__55861 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element);
return (com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2(G__55860,G__55861) : com.fulcrologic.fulcro.raw.components.normalize_query.call(null,G__55860,G__55861));
} else {
return state;

}
}
}
}catch (e55855){var e = e55855;
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,486,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Query normalization failed. Perhaps you tried to set a query with a syntax error? See https://book.fulcrologic.com/#err-comp-q-norm-failed"], null);
}),null)),null,223444906,null);
} else {
return null;
}
}}),state_map,query);
});
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.raw.components.link_query = (function com$fulcrologic$fulcro$raw$components$link_query(query){
var metadata = cljs.core.meta(query);
if(cljs.core.map_QMARK_(query)){
return cljs.core.with_meta(taoensso.encore.map_vals((function (ele){
var map__55862 = cljs.core.meta(ele);
var map__55862__$1 = cljs.core.__destructure_map(map__55862);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55862__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
return queryid;
}),query),metadata);
} else {
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.link_element,query),metadata);
}
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.raw.components.normalize_query = (function com$fulcrologic$fulcro$raw$components$normalize_query(state_map,query){
var queryid = (function (){var G__55863 = query;
var G__55863__$1 = (((G__55863 == null))?null:cljs.core.meta(G__55863));
if((G__55863__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__55863__$1);
}
})();
var component_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key((function (){var G__55864 = query;
var G__55864__$1 = (((G__55864 == null))?null:cljs.core.meta(G__55864));
if((G__55864__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__55864__$1);
}
})());
var query_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.dissoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),new cljs.core.Keyword(null,"component","component",1555936782));
var new_state = com.fulcrologic.fulcro.raw.components.normalize_query_elements(state_map,query_SINGLEQUOTE_);
var new_state__$1 = (((new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = com.fulcrologic.fulcro.raw.components.link_query(query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4251__auto__ = queryid;
if(cljs.core.truth_(and__4251__auto__)){
return component_key;
} else {
return and__4251__auto__;
}
})())){
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid,new cljs.core.Keyword(null,"component-key","component-key",1189239034),component_key], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.raw.components.set_query_STAR_ = (function com$fulcrologic$fulcro$raw$components$set_query_STAR_(state_map,class_or_factory,p__55865){
var map__55866 = p__55865;
var map__55866__$1 = cljs.core.__destructure_map(map__55866);
var args = map__55866__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55866__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__55867 = class_or_factory;
var G__55867__$1 = (((G__55867 == null))?null:cljs.core.meta(G__55867));
if((G__55867__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__55867__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__55868 = class_or_factory;
var G__55868__$1 = (((G__55868 == null))?null:cljs.core.meta(G__55868));
if((G__55868__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__55868__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
var component = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return class_or_factory;
}
})();
var setq_STAR_ = (function (state){
return com.fulcrologic.fulcro.raw.components.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});
if(typeof queryid === 'string'){
var G__55869 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__55869);
} else {
return G__55869;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,542,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Set query failed. There was no query ID. Use a class or factory for the second argument. See https://book.fulcrologic.com/#err-comp-set-q-failed"], null);
}),null)),null,725230634,null);
} else {
}

return state_map;
}
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.raw.components.set_query_BANG_ = (function com$fulcrologic$fulcro$raw$components$set_query_BANG_(x,class_or_factory,p__55870){
var map__55871 = p__55870;
var map__55871__$1 = cljs.core.__destructure_map(map__55871);
var opts = map__55871__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55871__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55871__$1,new cljs.core.Keyword(null,"params","params",710516235));
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(x);
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__55872 = class_or_factory;
var G__55872__$1 = (((G__55872 == null))?null:cljs.core.meta(G__55872));
if((G__55872__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__55872__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__55873 = class_or_factory;
var G__55873__$1 = (((G__55873 == null))?null:cljs.core.meta(G__55873));
if((G__55873__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__55873__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof queryid === 'string';
if(and__4251__auto__){
var or__4253__auto__ = query;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return params;
}
} else {
return and__4251__auto__;
}
})())){
var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.raw.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

com.fulcrologic.fulcro.algorithms.do_not_use.dev_check_query(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,cljs.core.deref(state_atom)),com.fulcrologic.fulcro.raw.components.component_name);

if(cljs.core.truth_(schedule_render_BANG_)){
var G__55874 = app__$1;
var G__55875 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__55874,G__55875) : schedule_render_BANG_.call(null,G__55874,G__55875));
} else {
return null;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,567,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments. See https://book.fulcrologic.com/#err-comp-unable-set-q"], null);
}),null)),null,229376653,null);
} else {
return null;
}
}
});
var __set_query_BANG_ = (function com$fulcrologic$fulcro$raw$components$__set_query_BANG_(app__$1,class_or_factory,p__55880){
var map__55881 = p__55880;
var map__55881__$1 = cljs.core.__destructure_map(map__55881);
var params = map__55881__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__55882 = class_or_factory;
var G__55882__$1 = (((G__55882 == null))?null:cljs.core.meta(G__55882));
if((G__55882__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__55882__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__55883 = class_or_factory;
var G__55883__$1 = (((G__55883 == null))?null:cljs.core.meta(G__55883));
if((G__55883__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__55883__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof queryid === 'string';
if(and__4251__auto__){
var or__4253__auto__ = query;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return params;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.raw.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,578,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments. See https://book.fulcrologic.com/#err-comp-unable-set-q"], null);
}),null)),null,-1326649198,null);
} else {
return null;
}
}
});
/**
 * Refresh the current dynamic queries in app state to reflect any updates to the static queries of the components.
 * 
 *   This can be used at development time to update queries that have changed but that hot code reload does not
 *   reflect (because there is a current saved query in state). This is *not* always what you want, since a component
 *   may have a custom query whose prop-level elements are set to a particular thing on purpose.
 * 
 *   An component that has `:preserve-dynamic-query? true` in its component options will be ignored by
 *   this function.
 */
com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_ = (function com$fulcrologic$fulcro$raw$components$refresh_dynamic_queries_BANG_(var_args){
var G__55885 = arguments.length;
switch (G__55885) {
case 3:
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,cls,force_QMARK_){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var preserve_QMARK_ = (function (){var and__4251__auto__ = cljs.core.not(force_QMARK_);
if(and__4251__auto__){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(preserve_QMARK_)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.set_query_BANG_(app__$1,cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls,cljs.core.PersistentArrayMap.EMPTY)], null));
}
}));

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_ish){
var map__55886 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__55886__$1 = cljs.core.__destructure_map(map__55886);
var app__$1 = map__55886__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452));
var classnames = cljs.core.keys(queries);
var seq__55887_56031 = cljs.core.seq(classnames);
var chunk__55889_56032 = null;
var count__55890_56033 = (0);
var i__55891_56034 = (0);
while(true){
if((i__55891_56034 < count__55890_56033)){
var nm_56035 = chunk__55889_56032.cljs$core$IIndexed$_nth$arity$2(null,i__55891_56034);
var cls_56037 = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(nm_56035);
var preserve_QMARK__56038 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_56037,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__56038)){
} else {
__set_query_BANG_(app__$1,cls_56037,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_56037,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__56041 = seq__55887_56031;
var G__56042 = chunk__55889_56032;
var G__56043 = count__55890_56033;
var G__56044 = (i__55891_56034 + (1));
seq__55887_56031 = G__56041;
chunk__55889_56032 = G__56042;
count__55890_56033 = G__56043;
i__55891_56034 = G__56044;
continue;
} else {
var temp__5753__auto___56045 = cljs.core.seq(seq__55887_56031);
if(temp__5753__auto___56045){
var seq__55887_56046__$1 = temp__5753__auto___56045;
if(cljs.core.chunked_seq_QMARK_(seq__55887_56046__$1)){
var c__4679__auto___56047 = cljs.core.chunk_first(seq__55887_56046__$1);
var G__56048 = cljs.core.chunk_rest(seq__55887_56046__$1);
var G__56049 = c__4679__auto___56047;
var G__56050 = cljs.core.count(c__4679__auto___56047);
var G__56051 = (0);
seq__55887_56031 = G__56048;
chunk__55889_56032 = G__56049;
count__55890_56033 = G__56050;
i__55891_56034 = G__56051;
continue;
} else {
var nm_56052 = cljs.core.first(seq__55887_56046__$1);
var cls_56053 = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(nm_56052);
var preserve_QMARK__56054 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_56053,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__56054)){
} else {
__set_query_BANG_(app__$1,cls_56053,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_56053,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__56055 = cljs.core.next(seq__55887_56046__$1);
var G__56056 = null;
var G__56057 = (0);
var G__56058 = (0);
seq__55887_56031 = G__56055;
chunk__55889_56032 = G__56056;
count__55890_56033 = G__56057;
i__55891_56034 = G__56058;
continue;
}
} else {
}
}
break;
}

var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

if(cljs.core.truth_(schedule_render_BANG_)){
var G__55893 = app__$1;
var G__55894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__55893,G__55894) : schedule_render_BANG_.call(null,G__55893,G__55894));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$raw$components$compressible_transact_BANG_(var_args){
var G__55896 = arguments.length;
switch (G__55896) {
case 2:
return com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
}));

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get any custom external configuration that was added to the app at creation-time.
 */
com.fulcrologic.fulcro.raw.components.external_config = (function com$fulcrologic$fulcro$raw$components$external_config(app_ish,k){
var G__55897 = app_ish;
var G__55897__$1 = (((G__55897 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__55897));
if((G__55897__$1 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__55897__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"external-config","external-config",-471423941),k], null));
}
});
/**
 * Walks the complete list of components in the component registry and looks for problems. Used during dev mode to
 * detect common problems that can cause runtime misbehavior.
 */
com.fulcrologic.fulcro.raw.components.check_component_registry_BANG_ = (function com$fulcrologic$fulcro$raw$components$check_component_registry_BANG_(){
if(cljs.core.truth_(goog.DEBUG)){
var components = cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry));
var seq__55899 = cljs.core.seq(components);
var chunk__55900 = null;
var count__55901 = (0);
var i__55902 = (0);
while(true){
if((i__55902 < count__55901)){
var c = chunk__55900.cljs$core$IIndexed$_nth$arity$2(null,i__55902);
var ident_56064 = (function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(c);
if(and__4251__auto__){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4251__auto__;
}
})();
var query_56065 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(c);
var constant_ident_QMARK__56066 = (function (){var and__4251__auto__ = cljs.core.vector_QMARK_(ident_56064);
if(and__4251__auto__){
return cljs.core.second(ident_56064);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = constant_ident_QMARK__56066;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithms.form-state/FormConfig",com.fulcrologic.fulcro.raw.components.component_name(c))));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,640,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55899,chunk__55900,count__55901,i__55902,ident_56064,query_56065,constant_ident_QMARK__56066,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"has a constant ident (id in the ident is not nil for empty props),","but it has no initial state. This could cause this component's props to","appear as nil unless you have a mutation or load that connects it to the graph after application startup. See https://book.fulcrologic.com/#warn-constant-ident-no-initial-state"], null);
});})(seq__55899,chunk__55900,count__55901,i__55902,ident_56064,query_56065,constant_ident_QMARK__56066,c,components))
,null)),null,-736245243,null);
} else {
}

var temp__5753__auto___56070 = (function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c);
if(and__4251__auto__){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___56070)){
var initial_state_56072 = temp__5753__auto___56070;
if(cljs.core.map_QMARK_(initial_state_56072)){
var initial_keys_56073 = cljs.core.set(cljs.core.keys(initial_state_56072));
var join_map_56074 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56073,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components){
return (function (p1__55898_SHARP_){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55898_SHARP_));
if(and__4251__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__55898_SHARP_));
} else {
return and__4251__auto__;
}
});})(seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56073,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56073,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components){
return (function (p__55921){
var map__55922 = p__55921;
var map__55922__$1 = cljs.core.__destructure_map(map__55922);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55922__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55922__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,component], null);
});})(seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56073,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components))
)),(function (){var G__55923 = query_56065;
var G__55923__$1 = (((G__55923 == null))?null:edn_query_language.core.query__GT_ast(G__55923));
if((G__55923__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__55923__$1);
}
})());
var join_keys_56075 = cljs.core.set(cljs.core.keys(join_map_56074));
var temp__5753__auto___56077__$1 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(join_keys_56075,initial_keys_56073));
if(temp__5753__auto___56077__$1){
var missing_initial_keys_56078 = temp__5753__auto___56077__$1;
var seq__55924_56079 = cljs.core.seq(missing_initial_keys_56078);
var chunk__55926_56080 = null;
var count__55927_56081 = (0);
var i__55928_56082 = (0);
while(true){
if((i__55928_56082 < count__55927_56081)){
var k_56084 = chunk__55926_56080.cljs$core$IIndexed$_nth$arity$2(null,i__55928_56082);
var target_56086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_56074,k_56084);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_56086)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_56086),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,657,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55924_56079,chunk__55926_56080,count__55927_56081,i__55928_56082,seq__55899,chunk__55900,count__55901,i__55902,target_56086,k_56084,missing_initial_keys_56078,temp__5753__auto___56077__$1,initial_keys_56073,join_map_56074,join_keys_56075,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_56086),"at join key",k_56084,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_56086),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_56086),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__55924_56079,chunk__55926_56080,count__55927_56081,i__55928_56082,seq__55899,chunk__55900,count__55901,i__55902,target_56086,k_56084,missing_initial_keys_56078,temp__5753__auto___56077__$1,initial_keys_56073,join_map_56074,join_keys_56075,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components))
,null)),null,982751885,null);
} else {
}


var G__56088 = seq__55924_56079;
var G__56089 = chunk__55926_56080;
var G__56090 = count__55927_56081;
var G__56091 = (i__55928_56082 + (1));
seq__55924_56079 = G__56088;
chunk__55926_56080 = G__56089;
count__55927_56081 = G__56090;
i__55928_56082 = G__56091;
continue;
} else {
var temp__5753__auto___56092__$2 = cljs.core.seq(seq__55924_56079);
if(temp__5753__auto___56092__$2){
var seq__55924_56093__$1 = temp__5753__auto___56092__$2;
if(cljs.core.chunked_seq_QMARK_(seq__55924_56093__$1)){
var c__4679__auto___56094 = cljs.core.chunk_first(seq__55924_56093__$1);
var G__56095 = cljs.core.chunk_rest(seq__55924_56093__$1);
var G__56096 = c__4679__auto___56094;
var G__56097 = cljs.core.count(c__4679__auto___56094);
var G__56098 = (0);
seq__55924_56079 = G__56095;
chunk__55926_56080 = G__56096;
count__55927_56081 = G__56097;
i__55928_56082 = G__56098;
continue;
} else {
var k_56099 = cljs.core.first(seq__55924_56093__$1);
var target_56100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_56074,k_56099);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_56100)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_56100),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,657,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55924_56079,chunk__55926_56080,count__55927_56081,i__55928_56082,seq__55899,chunk__55900,count__55901,i__55902,target_56100,k_56099,seq__55924_56093__$1,temp__5753__auto___56092__$2,missing_initial_keys_56078,temp__5753__auto___56077__$1,initial_keys_56073,join_map_56074,join_keys_56075,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_56100),"at join key",k_56099,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_56100),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_56100),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__55924_56079,chunk__55926_56080,count__55927_56081,i__55928_56082,seq__55899,chunk__55900,count__55901,i__55902,target_56100,k_56099,seq__55924_56093__$1,temp__5753__auto___56092__$2,missing_initial_keys_56078,temp__5753__auto___56077__$1,initial_keys_56073,join_map_56074,join_keys_56075,initial_state_56072,temp__5753__auto___56070,ident_56064,query_56065,constant_ident_QMARK__56066,c,components))
,null)),null,-1557016254,null);
} else {
}


var G__56102 = cljs.core.next(seq__55924_56093__$1);
var G__56103 = null;
var G__56104 = (0);
var G__56105 = (0);
seq__55924_56079 = G__56102;
chunk__55926_56080 = G__56103;
count__55927_56081 = G__56104;
i__55928_56082 = G__56105;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}


var G__56109 = seq__55899;
var G__56110 = chunk__55900;
var G__56111 = count__55901;
var G__56112 = (i__55902 + (1));
seq__55899 = G__56109;
chunk__55900 = G__56110;
count__55901 = G__56111;
i__55902 = G__56112;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55899);
if(temp__5753__auto__){
var seq__55899__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55899__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__55899__$1);
var G__56113 = cljs.core.chunk_rest(seq__55899__$1);
var G__56114 = c__4679__auto__;
var G__56115 = cljs.core.count(c__4679__auto__);
var G__56116 = (0);
seq__55899 = G__56113;
chunk__55900 = G__56114;
count__55901 = G__56115;
i__55902 = G__56116;
continue;
} else {
var c = cljs.core.first(seq__55899__$1);
var ident_56117 = (function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(c);
if(and__4251__auto__){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4251__auto__;
}
})();
var query_56118 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(c);
var constant_ident_QMARK__56119 = (function (){var and__4251__auto__ = cljs.core.vector_QMARK_(ident_56117);
if(and__4251__auto__){
return cljs.core.second(ident_56117);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = constant_ident_QMARK__56119;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithms.form-state/FormConfig",com.fulcrologic.fulcro.raw.components.component_name(c))));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,640,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55899,chunk__55900,count__55901,i__55902,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"has a constant ident (id in the ident is not nil for empty props),","but it has no initial state. This could cause this component's props to","appear as nil unless you have a mutation or load that connects it to the graph after application startup. See https://book.fulcrologic.com/#warn-constant-ident-no-initial-state"], null);
});})(seq__55899,chunk__55900,count__55901,i__55902,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components))
,null)),null,562289131,null);
} else {
}

var temp__5753__auto___56120__$1 = (function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c);
if(and__4251__auto__){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___56120__$1)){
var initial_state_56122 = temp__5753__auto___56120__$1;
if(cljs.core.map_QMARK_(initial_state_56122)){
var initial_keys_56125 = cljs.core.set(cljs.core.keys(initial_state_56122));
var join_map_56126 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56125,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components){
return (function (p1__55898_SHARP_){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55898_SHARP_));
if(and__4251__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__55898_SHARP_));
} else {
return and__4251__auto__;
}
});})(seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56125,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56125,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components){
return (function (p__55930){
var map__55931 = p__55930;
var map__55931__$1 = cljs.core.__destructure_map(map__55931);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,component], null);
});})(seq__55899,chunk__55900,count__55901,i__55902,initial_keys_56125,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components))
)),(function (){var G__55932 = query_56118;
var G__55932__$1 = (((G__55932 == null))?null:edn_query_language.core.query__GT_ast(G__55932));
if((G__55932__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__55932__$1);
}
})());
var join_keys_56127 = cljs.core.set(cljs.core.keys(join_map_56126));
var temp__5753__auto___56132__$2 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(join_keys_56127,initial_keys_56125));
if(temp__5753__auto___56132__$2){
var missing_initial_keys_56134 = temp__5753__auto___56132__$2;
var seq__55933_56135 = cljs.core.seq(missing_initial_keys_56134);
var chunk__55935_56136 = null;
var count__55936_56137 = (0);
var i__55937_56138 = (0);
while(true){
if((i__55937_56138 < count__55936_56137)){
var k_56139 = chunk__55935_56136.cljs$core$IIndexed$_nth$arity$2(null,i__55937_56138);
var target_56140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_56126,k_56139);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_56140)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_56140),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,657,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55933_56135,chunk__55935_56136,count__55936_56137,i__55937_56138,seq__55899,chunk__55900,count__55901,i__55902,target_56140,k_56139,missing_initial_keys_56134,temp__5753__auto___56132__$2,initial_keys_56125,join_map_56126,join_keys_56127,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_56140),"at join key",k_56139,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_56140),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_56140),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__55933_56135,chunk__55935_56136,count__55936_56137,i__55937_56138,seq__55899,chunk__55900,count__55901,i__55902,target_56140,k_56139,missing_initial_keys_56134,temp__5753__auto___56132__$2,initial_keys_56125,join_map_56126,join_keys_56127,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components))
,null)),null,1094585135,null);
} else {
}


var G__56142 = seq__55933_56135;
var G__56143 = chunk__55935_56136;
var G__56144 = count__55936_56137;
var G__56145 = (i__55937_56138 + (1));
seq__55933_56135 = G__56142;
chunk__55935_56136 = G__56143;
count__55936_56137 = G__56144;
i__55937_56138 = G__56145;
continue;
} else {
var temp__5753__auto___56149__$3 = cljs.core.seq(seq__55933_56135);
if(temp__5753__auto___56149__$3){
var seq__55933_56151__$1 = temp__5753__auto___56149__$3;
if(cljs.core.chunked_seq_QMARK_(seq__55933_56151__$1)){
var c__4679__auto___56152 = cljs.core.chunk_first(seq__55933_56151__$1);
var G__56153 = cljs.core.chunk_rest(seq__55933_56151__$1);
var G__56154 = c__4679__auto___56152;
var G__56155 = cljs.core.count(c__4679__auto___56152);
var G__56156 = (0);
seq__55933_56135 = G__56153;
chunk__55935_56136 = G__56154;
count__55936_56137 = G__56155;
i__55937_56138 = G__56156;
continue;
} else {
var k_56157 = cljs.core.first(seq__55933_56151__$1);
var target_56158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_56126,k_56157);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_56158)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_56158),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,657,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__55933_56135,chunk__55935_56136,count__55936_56137,i__55937_56138,seq__55899,chunk__55900,count__55901,i__55902,target_56158,k_56157,seq__55933_56151__$1,temp__5753__auto___56149__$3,missing_initial_keys_56134,temp__5753__auto___56132__$2,initial_keys_56125,join_map_56126,join_keys_56127,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_56158),"at join key",k_56157,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_56158),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_56158),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__55933_56135,chunk__55935_56136,count__55936_56137,i__55937_56138,seq__55899,chunk__55900,count__55901,i__55902,target_56158,k_56157,seq__55933_56151__$1,temp__5753__auto___56149__$3,missing_initial_keys_56134,temp__5753__auto___56132__$2,initial_keys_56125,join_map_56126,join_keys_56127,initial_state_56122,temp__5753__auto___56120__$1,ident_56117,query_56118,constant_ident_QMARK__56119,c,seq__55899__$1,temp__5753__auto__,components))
,null)),null,1700736920,null);
} else {
}


var G__56160 = cljs.core.next(seq__55933_56151__$1);
var G__56161 = null;
var G__56162 = (0);
var G__56163 = (0);
seq__55933_56135 = G__56160;
chunk__55935_56136 = G__56161;
count__55936_56137 = G__56162;
i__55937_56138 = G__56163;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}


var G__56164 = cljs.core.next(seq__55899__$1);
var G__56165 = null;
var G__56166 = (0);
var G__56167 = (0);
seq__55899 = G__56164;
chunk__55900 = G__56165;
count__55901 = G__56166;
i__55902 = G__56167;
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
});
/**
 * Returns the keyword of the most likely ID attribute in the given props (the first one with the `name` "id").
 *   Returns nil if there isn't one. This is useful when trying to derive an ident from a sample tree of data, for example.
 */
com.fulcrologic.fulcro.raw.components.id_key = (function com$fulcrologic$fulcro$raw$components$id_key(props){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55939_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",cljs.core.name(p1__55939_SHARP_));
}),cljs.core.keys(props)));
});
/**
 * Returns the first child from a list of EQL AST nodes that looks like an entity ID key.
 */
com.fulcrologic.fulcro.raw.components.ast_id_key = (function com$fulcrologic$fulcro$raw$components$ast_id_key(children){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55940){
var map__55941 = p__55940;
var map__55941__$1 = cljs.core.__destructure_map(map__55941);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return (((key instanceof cljs.core.Keyword)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",cljs.core.name(key))))));
}),children)));
});
com.fulcrologic.fulcro.raw.components.normalize_STAR_ = (function com$fulcrologic$fulcro$raw$components$normalize_STAR_(p__55942,p__55943){
var map__55944 = p__55942;
var map__55944__$1 = cljs.core.__destructure_map(map__55944);
var original_node = map__55944__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55944__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__55945 = p__55943;
var map__55945__$1 = cljs.core.__destructure_map(map__55945);
var top_component_options = map__55945__$1;
var componentName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55945__$1,new cljs.core.Keyword(null,"componentName","componentName",-2103437555));
var detected_id_key = com.fulcrologic.fulcro.raw.components.ast_id_key(children);
var real_id_key = detected_id_key;
var component = (function() { 
var G__56168__delegate = function (args){
return null;
};
var G__56168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56171__i = 0, G__56171__a = new Array(arguments.length -  0);
while (G__56171__i < G__56171__a.length) {G__56171__a[G__56171__i] = arguments[G__56171__i + 0]; ++G__56171__i;}
  args = new cljs.core.IndexedSeq(G__56171__a,0,null);
} 
return G__56168__delegate.call(this,args);};
G__56168.cljs$lang$maxFixedArity = 0;
G__56168.cljs$lang$applyTo = (function (arglist__56173){
var args = cljs.core.seq(arglist__56173);
return G__56168__delegate(args);
});
G__56168.cljs$core$IFn$_invoke$arity$variadic = G__56168__delegate;
return G__56168;
})()
;
var new_children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__55946){
var map__55947 = p__55946;
var map__55947__$1 = cljs.core.__destructure_map(map__55947);
var node = map__55947__$1;
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55947__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"join","join",-758861890))) && (cljs.core.not(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(node))))){
var G__55948 = node;
var G__55949 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2(G__55948,G__55949) : com.fulcrologic.fulcro.raw.components.normalize_STAR_.call(null,G__55948,G__55949));
} else {
return node;
}
}),children);
var qatom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var component__$1 = com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_(component,(function (){var G__55950 = cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function() { 
var G__56178__delegate = function (args){
return cljs.core.PersistentArrayMap.EMPTY;
};
var G__56178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56179__i = 0, G__56179__a = new Array(arguments.length -  0);
while (G__56179__i < G__56179__a.length) {G__56179__a[G__56179__i] = arguments[G__56179__i + 0]; ++G__56179__i;}
  args = new cljs.core.IndexedSeq(G__56179__a,0,null);
} 
return G__56178__delegate.call(this,args);};
G__56178.cljs$lang$maxFixedArity = 0;
G__56178.cljs$lang$applyTo = (function (arglist__56181){
var args = cljs.core.seq(arglist__56181);
return G__56178__delegate(args);
});
G__56178.cljs$core$IFn$_invoke$arity$variadic = G__56178__delegate;
return G__56178;
})()
], null),top_component_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function() { 
var G__56182__delegate = function (args){
return cljs.core.deref(qatom);
};
var G__56182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56183__i = 0, G__56183__a = new Array(arguments.length -  0);
while (G__56183__i < G__56183__a.length) {G__56183__a[G__56183__i] = arguments[G__56183__i + 0]; ++G__56183__i;}
  args = new cljs.core.IndexedSeq(G__56183__a,0,null);
} 
return G__56182__delegate.call(this,args);};
G__56182.cljs$lang$maxFixedArity = 0;
G__56182.cljs$lang$applyTo = (function (arglist__56184){
var args = cljs.core.seq(arglist__56184);
return G__56182__delegate(args);
});
G__56182.cljs$core$IFn$_invoke$arity$variadic = G__56182__delegate;
return G__56182;
})()
,"props",new cljs.core.PersistentArrayMap(null, 1, ["fulcro$queryid",new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null));
var G__55950__$1 = (cljs.core.truth_(componentName)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55950,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),componentName):G__55950);
if(cljs.core.truth_((function (){var and__4251__auto__ = real_id_key;
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.contains_QMARK_(top_component_options,new cljs.core.Keyword(null,"ident","ident",-742346))));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55950__$1,new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,real_id_key)], null);
}));
} else {
return G__55950__$1;
}
})());
var updated_node = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(original_node,new cljs.core.Keyword(null,"children","children",-940561982),new_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),component__$1], 0));
var query = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"join","join",-758861890)))?edn_query_language.core.ast__GT_query(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(updated_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453))):edn_query_language.core.ast__GT_query(updated_node));
var _ = cljs.core.reset_BANG_(qatom,query);
return updated_node;
});
/**
 * Create an anonymous normalizing query component. By default the normalization will be auto-detected based on there being a prop at each
 * entity level that has (any) namespace, and a name of `id`. For example:
 * 
 * ```
 * [:list/id :list/name {:list/items [:item/id :item/complete? :item/label]}]
 * ```
 * 
 * will create a normalizing query that expects the top-level values to be normalized by `:list/id` and the nested
 * items to be normalized by `:item/id`. If there is more than one ID in your props, make sure the *first* one is
 * the one to use for normalization.
 * 
 * The `top-component-options` becomes the options map of the component.
 * 
 * You can include :componentName to push the resulting anonymous component definition into the component registry, which
 * is needed by some parts of Fulcro, like UISM.
 * 
 * NOTE: `nc` is recursive, and *does* compose if you want to name the components at various levels. It can be used with queries from
 * other defsc components:
 * 
 * ```
 * (def query (nc [:user/id
 *                 :user/name
 *                 ;; Generate an anonymous component that is available in the registry under ::Session
 *                 {:user/session-details (nc [:session/id :session/last-login] {:componentName ::Session})}
 *                 ;; Use a defsc query as the source
 *                 {:user/settings (comp/get-query Settings)}
 *                 ;; Autogenerates an anonymous address query component that has no name
 *                 {:user/address [:address/id :address/street]}]))
 * ```
 * 
 */
com.fulcrologic.fulcro.raw.components.nc = (function com$fulcrologic$fulcro$raw$components$nc(var_args){
var G__55952 = arguments.length;
switch (G__55952) {
case 1:
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1 = (function (query){
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2 = (function (query,p__55953){
var map__55954 = p__55953;
var map__55954__$1 = cljs.core.__destructure_map(map__55954);
var top_component_options = map__55954__$1;
var componentName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"componentName","componentName",-2103437555));
var ast = edn_query_language.core.query__GT_ast(query);
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.normalize_STAR_(ast,top_component_options));
}));

(com.fulcrologic.fulcro.raw.components.nc.cljs$lang$maxFixedArity = 2);

/**
 * Creates a normalizing component from an entity tree. Every sub-element of the tree provided will generate an anonymous
 * normalizing component if that element has an ID field. For to-many relations only the first item is used for query/ident
 * generation.
 * 
 * The returned anonymous component will have initial state that matches the provided entity data tree.
 * 
 * This means you can use a sample tree to generate both the initial state for a subtree of your app and the components
 * necessary to do I/O on that tree.
 * 
 * This kind of component will *not* be registered in the component registry unless you pass a :componentName
 * via the top-level-options. A registry entry is necessary for things that
 * require the registry, such as dynamic queries and UI state machines).
 * 
 */
com.fulcrologic.fulcro.raw.components.entity__GT_component = (function com$fulcrologic$fulcro$raw$components$entity__GT_component(var_args){
var G__55956 = arguments.length;
switch (G__55956) {
case 1:
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1 = (function (entity_data_tree){
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2(entity_data_tree,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2 = (function (entity_data_tree,top_level_options){
var map__55957 = cljs.core.reduce_kv((function (result,k,v){
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,v)))){
var c = com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1(cljs.core.first(v));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.assoc,k,com.fulcrologic.fulcro.raw.components.query(c));
} else {
if(cljs.core.map_QMARK_(v)){
var c = com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1(v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.assoc,k,com.fulcrologic.fulcro.raw.components.query(c));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj,k);

}
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.PersistentArrayMap.EMPTY], null),entity_data_tree);
var map__55957__$1 = cljs.core.__destructure_map(map__55957);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"joins","joins",1033962699));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var query = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(attrs),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$raw$components$build_subquery_STAR_(p__55958){
var vec__55959 = p__55958;
var join_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55959,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55959,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,subquery]);
})),joins);
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(query,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function() { 
var G__56195__delegate = function (args){
return initial_state;
};
var G__56195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56196__i = 0, G__56196__a = new Array(arguments.length -  0);
while (G__56196__i < G__56196__a.length) {G__56196__a[G__56196__i] = arguments[G__56196__i + 0]; ++G__56196__i;}
  args = new cljs.core.IndexedSeq(G__56196__a,0,null);
} 
return G__56195__delegate.call(this,args);};
G__56195.cljs$lang$maxFixedArity = 0;
G__56195.cljs$lang$applyTo = (function (arglist__56198){
var args = cljs.core.seq(arglist__56198);
return G__56195__delegate(args);
});
G__56195.cljs$core$IFn$_invoke$arity$variadic = G__56195__delegate;
return G__56195;
})()
], null),top_level_options], 0)));
}));

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$lang$maxFixedArity = 2);

var get_subquery_component_STAR_ = (function com$fulcrologic$fulcro$raw$components$get_subquery_component_STAR_(c,ast_nodes,query_path){
while(true){
if(cljs.core.empty_QMARK_(ast_nodes)){
return c;
} else {
var k = cljs.core.first(query_path);
var ks = cljs.core.rest(query_path);
var map__55964 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (c,ast_nodes,query_path,k,ks){
return (function (p1__55962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__55962_SHARP_));
});})(c,ast_nodes,query_path,k,ks))
,ast_nodes));
var map__55964__$1 = cljs.core.__destructure_map(map__55964);
var node = map__55964__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55964__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.seq(ks)){
var G__56206 = component;
var G__56207 = children;
var G__56208 = ks;
c = G__56206;
ast_nodes = G__56207;
query_path = G__56208;
continue;
} else {
return component;
}
}
break;
}
});
/**
 * Obtains the normalizing component that is associated with the given query path on the given component.
 * 
 *  For example `(get-subquery-component Person [:person/addresses])` would return the component for
 *  the `:person/addresses` join. If state-map is supplied then dynamic query support is possible; otherwise it
 *  will be the original static query.
 */
com.fulcrologic.fulcro.raw.components.get_subquery_component = (function com$fulcrologic$fulcro$raw$components$get_subquery_component(var_args){
var G__55966 = arguments.length;
switch (G__55966) {
case 2:
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$2 = (function (component,query_path){
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3(component,query_path,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3 = (function (component,query_path,state_map){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query));
return get_subquery_component_STAR_(component,ast_nodes,query_path);
}));

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$lang$maxFixedArity = 3);

/**
 * Uses `fdn/traced-db->tree` to get the props of the component at `ident`, and leverages those optimizations to return
 * `prior-props` if they are not stale.
 * 
 * A subsequent call (e.g. on next render frame) of this function with the prior return value (as `prior-props`)
 * thus gives you an efficient non-react replacement for `shouldComponentUpdate`, etc.
 * 
 */
com.fulcrologic.fulcro.raw.components.get_traced_props = (function com$fulcrologic$fulcro$raw$components$get_traced_props(state_map,component,ident,prior_props){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.denormalize.possibly_stale_QMARK_(state_map,prior_props))){
return com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree(state_map,ident,query);
} else {
return prior_props;
}
});
/**
 * Returns true if there is already data at a component's `ident`
 */
com.fulcrologic.fulcro.raw.components.has_active_state_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_active_state_QMARK_(state_map,ident){
var current_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident);
return ((cljs.core.map_QMARK_(current_value)) && (cljs.core.seq(current_value)));
});

//# sourceMappingURL=com.fulcrologic.fulcro.raw.components.js.map
