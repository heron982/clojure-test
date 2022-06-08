goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__61949){
var vec__61950 = p__61949;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61950,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61950,(1),null);
var pair = vec__61950;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__61953){
var vec__61954 = p__61953;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61954,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61954,(1),null);
var pair = vec__61954;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__61957){
var vec__61958 = p__61957;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61958,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__61961 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61961,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__61961;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__61963 = arguments.length;
switch (G__61963) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__61964 = component.refs;
var G__61964__$1 = (((G__61964 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__61964,name));
if((G__61964__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__61964__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__61965 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__61966 = (function (){var G__61967 = r;
if((G__61967 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__61967);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__61966) : ref.call(null,G__61966));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__61965) : factory.call(null,G__61965));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__61972 = arguments.length;
switch (G__61972) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___63091 = arguments.length;
var i__4865__auto___63092 = (0);
while(true){
if((i__4865__auto___63092 < len__4864__auto___63091)){
args_arr__4885__auto__.push((arguments[i__4865__auto___63092]));

var G__63095 = (i__4865__auto___63092 + (1));
i__4865__auto___63092 = G__63095;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq61969){
var G__61970 = cljs.core.first(seq61969);
var seq61969__$1 = cljs.core.next(seq61969);
var G__61971 = cljs.core.first(seq61969__$1);
var seq61969__$2 = cljs.core.next(seq61969__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61970,G__61971,seq61969__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4251__auto__ = tag;
if(cljs.core.truth_(and__4251__auto__)){
var G__61973 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__61973) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__61973));
} else {
return and__4251__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x61975_63108 = ctor.prototype;
(x61975_63108.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x61975_63108.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__61974_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__61974_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4251__auto__ = state_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = element_value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-1497523588,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x61975_63108.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__63121__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__63121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63122__i = 0, G__63122__a = new Array(arguments.length -  0);
while (G__63122__i < G__63122__a.length) {G__63122__a[G__63122__i] = arguments[G__63122__i + 0]; ++G__63122__i;}
  args = new cljs.core.IndexedSeq(G__63122__a,0,null);
} 
return G__63121__delegate.call(this,args);};
G__63121.cljs$lang$maxFixedArity = 0;
G__63121.cljs$lang$applyTo = (function (arglist__63124){
var args = cljs.core.seq(arglist__63124);
return G__63121__delegate(args);
});
G__63121.cljs$core$IFn$_invoke$arity$variadic = G__63121__delegate;
return G__63121;
})()
;
return (function() { 
var G__63125__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__63125 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__63126__i = 0, G__63126__a = new Array(arguments.length -  1);
while (G__63126__i < G__63126__a.length) {G__63126__a[G__63126__i] = arguments[G__63126__i + 1]; ++G__63126__i;}
  children = new cljs.core.IndexedSeq(G__63126__a,0,null);
} 
return G__63125__delegate.call(this,props,children);};
G__63125.cljs$lang$maxFixedArity = 1;
G__63125.cljs$lang$applyTo = (function (arglist__63127){
var props = cljs.core.first(arglist__63127);
var children = cljs.core.rest(arglist__63127);
return G__63125__delegate(props,children);
});
G__63125.cljs$core$IFn$_invoke$arity$variadic = G__63125__delegate;
return G__63125;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__61976 = tag;
switch (G__61976) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61976)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__61978 = arguments.length;
switch (G__61978) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__61979 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__61980 = cljs.core.seq(vec__61979);
var first__61981 = cljs.core.first(seq__61980);
var seq__61980__$1 = cljs.core.next(seq__61980);
var head = first__61981;
var tail = seq__61980__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__61982 = (function (){var G__61983 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61983,tail);

return G__61983;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61982) : f.call(null,G__61982));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__61984 = (function (){var G__61985 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61985,args);

return G__61985;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61984) : f.call(null,G__61984));
} else {
if(cljs.core.object_QMARK_(head)){
var G__61986 = (function (){var G__61987 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61987,tail);

return G__61987;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61986) : f.call(null,G__61986));
} else {
if(cljs.core.map_QMARK_(head)){
var G__61988 = (function (){var G__61989 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__61989,tail);

return G__61989;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61988) : f.call(null,G__61988));
} else {
var G__61990 = (function (){var G__61991 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61991,args);

return G__61991;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61990) : f.call(null,G__61990));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__61993 = arguments.length;
switch (G__61993) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__61994 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__61995 = cljs.core.seq(vec__61994);
var first__61996 = cljs.core.first(seq__61995);
var seq__61995__$1 = cljs.core.next(seq__61995);
var head = first__61996;
var tail = seq__61995__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61997 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61997,tail);

return G__61997;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61998 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61998,args);

return G__61998;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61999 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61999,tail);

return G__61999;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__62000 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__62000,tail);

return G__62000;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__62001 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__62001,args);

return G__62001;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63133 = arguments.length;
var i__4865__auto___63134 = (0);
while(true){
if((i__4865__auto___63134 < len__4864__auto___63133)){
args__4870__auto__.push((arguments[i__4865__auto___63134]));

var G__63135 = (i__4865__auto___63134 + (1));
i__4865__auto___63134 = G__63135;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62003 = conformed_args__60736__auto__;
var map__62003__$1 = cljs.core.__destructure_map(map__62003);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq62002){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63136 = arguments.length;
var i__4865__auto___63137 = (0);
while(true){
if((i__4865__auto___63137 < len__4864__auto___63136)){
args__4870__auto__.push((arguments[i__4865__auto___63137]));

var G__63138 = (i__4865__auto___63137 + (1));
i__4865__auto___63137 = G__63138;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62005 = conformed_args__60736__auto__;
var map__62005__$1 = cljs.core.__destructure_map(map__62005);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq62004){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63142 = arguments.length;
var i__4865__auto___63143 = (0);
while(true){
if((i__4865__auto___63143 < len__4864__auto___63142)){
args__4870__auto__.push((arguments[i__4865__auto___63143]));

var G__63145 = (i__4865__auto___63143 + (1));
i__4865__auto___63143 = G__63145;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62007 = conformed_args__60736__auto__;
var map__62007__$1 = cljs.core.__destructure_map(map__62007);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq62006){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63146 = arguments.length;
var i__4865__auto___63147 = (0);
while(true){
if((i__4865__auto___63147 < len__4864__auto___63146)){
args__4870__auto__.push((arguments[i__4865__auto___63147]));

var G__63148 = (i__4865__auto___63147 + (1));
i__4865__auto___63147 = G__63148;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62009 = conformed_args__60736__auto__;
var map__62009__$1 = cljs.core.__destructure_map(map__62009);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq62008){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62008));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63149 = arguments.length;
var i__4865__auto___63150 = (0);
while(true){
if((i__4865__auto___63150 < len__4864__auto___63149)){
args__4870__auto__.push((arguments[i__4865__auto___63150]));

var G__63153 = (i__4865__auto___63150 + (1));
i__4865__auto___63150 = G__63153;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62011 = conformed_args__60736__auto__;
var map__62011__$1 = cljs.core.__destructure_map(map__62011);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq62010){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63155 = arguments.length;
var i__4865__auto___63156 = (0);
while(true){
if((i__4865__auto___63156 < len__4864__auto___63155)){
args__4870__auto__.push((arguments[i__4865__auto___63156]));

var G__63157 = (i__4865__auto___63156 + (1));
i__4865__auto___63156 = G__63157;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62013 = conformed_args__60736__auto__;
var map__62013__$1 = cljs.core.__destructure_map(map__62013);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq62012){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63158 = arguments.length;
var i__4865__auto___63159 = (0);
while(true){
if((i__4865__auto___63159 < len__4864__auto___63158)){
args__4870__auto__.push((arguments[i__4865__auto___63159]));

var G__63160 = (i__4865__auto___63159 + (1));
i__4865__auto___63159 = G__63160;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62015 = conformed_args__60736__auto__;
var map__62015__$1 = cljs.core.__destructure_map(map__62015);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq62014){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63161 = arguments.length;
var i__4865__auto___63162 = (0);
while(true){
if((i__4865__auto___63162 < len__4864__auto___63161)){
args__4870__auto__.push((arguments[i__4865__auto___63162]));

var G__63163 = (i__4865__auto___63162 + (1));
i__4865__auto___63162 = G__63163;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62017 = conformed_args__60736__auto__;
var map__62017__$1 = cljs.core.__destructure_map(map__62017);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq62016){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63166 = arguments.length;
var i__4865__auto___63167 = (0);
while(true){
if((i__4865__auto___63167 < len__4864__auto___63166)){
args__4870__auto__.push((arguments[i__4865__auto___63167]));

var G__63168 = (i__4865__auto___63167 + (1));
i__4865__auto___63167 = G__63168;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62019 = conformed_args__60736__auto__;
var map__62019__$1 = cljs.core.__destructure_map(map__62019);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq62018){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63169 = arguments.length;
var i__4865__auto___63170 = (0);
while(true){
if((i__4865__auto___63170 < len__4864__auto___63169)){
args__4870__auto__.push((arguments[i__4865__auto___63170]));

var G__63175 = (i__4865__auto___63170 + (1));
i__4865__auto___63170 = G__63175;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62021 = conformed_args__60736__auto__;
var map__62021__$1 = cljs.core.__destructure_map(map__62021);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq62020){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62020));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63193 = arguments.length;
var i__4865__auto___63194 = (0);
while(true){
if((i__4865__auto___63194 < len__4864__auto___63193)){
args__4870__auto__.push((arguments[i__4865__auto___63194]));

var G__63199 = (i__4865__auto___63194 + (1));
i__4865__auto___63194 = G__63199;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62023 = conformed_args__60736__auto__;
var map__62023__$1 = cljs.core.__destructure_map(map__62023);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq62022){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62022));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63212 = arguments.length;
var i__4865__auto___63213 = (0);
while(true){
if((i__4865__auto___63213 < len__4864__auto___63212)){
args__4870__auto__.push((arguments[i__4865__auto___63213]));

var G__63222 = (i__4865__auto___63213 + (1));
i__4865__auto___63213 = G__63222;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62025 = conformed_args__60736__auto__;
var map__62025__$1 = cljs.core.__destructure_map(map__62025);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq62024){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63250 = arguments.length;
var i__4865__auto___63251 = (0);
while(true){
if((i__4865__auto___63251 < len__4864__auto___63250)){
args__4870__auto__.push((arguments[i__4865__auto___63251]));

var G__63258 = (i__4865__auto___63251 + (1));
i__4865__auto___63251 = G__63258;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62027 = conformed_args__60736__auto__;
var map__62027__$1 = cljs.core.__destructure_map(map__62027);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq62026){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63276 = arguments.length;
var i__4865__auto___63281 = (0);
while(true){
if((i__4865__auto___63281 < len__4864__auto___63276)){
args__4870__auto__.push((arguments[i__4865__auto___63281]));

var G__63283 = (i__4865__auto___63281 + (1));
i__4865__auto___63281 = G__63283;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62029 = conformed_args__60736__auto__;
var map__62029__$1 = cljs.core.__destructure_map(map__62029);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq62028){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63300 = arguments.length;
var i__4865__auto___63301 = (0);
while(true){
if((i__4865__auto___63301 < len__4864__auto___63300)){
args__4870__auto__.push((arguments[i__4865__auto___63301]));

var G__63302 = (i__4865__auto___63301 + (1));
i__4865__auto___63301 = G__63302;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62031 = conformed_args__60736__auto__;
var map__62031__$1 = cljs.core.__destructure_map(map__62031);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq62030){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63307 = arguments.length;
var i__4865__auto___63308 = (0);
while(true){
if((i__4865__auto___63308 < len__4864__auto___63307)){
args__4870__auto__.push((arguments[i__4865__auto___63308]));

var G__63309 = (i__4865__auto___63308 + (1));
i__4865__auto___63308 = G__63309;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62033 = conformed_args__60736__auto__;
var map__62033__$1 = cljs.core.__destructure_map(map__62033);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq62032){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63310 = arguments.length;
var i__4865__auto___63312 = (0);
while(true){
if((i__4865__auto___63312 < len__4864__auto___63310)){
args__4870__auto__.push((arguments[i__4865__auto___63312]));

var G__63313 = (i__4865__auto___63312 + (1));
i__4865__auto___63312 = G__63313;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62035 = conformed_args__60736__auto__;
var map__62035__$1 = cljs.core.__destructure_map(map__62035);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq62034){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63317 = arguments.length;
var i__4865__auto___63318 = (0);
while(true){
if((i__4865__auto___63318 < len__4864__auto___63317)){
args__4870__auto__.push((arguments[i__4865__auto___63318]));

var G__63319 = (i__4865__auto___63318 + (1));
i__4865__auto___63318 = G__63319;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62037 = conformed_args__60736__auto__;
var map__62037__$1 = cljs.core.__destructure_map(map__62037);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq62036){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63323 = arguments.length;
var i__4865__auto___63324 = (0);
while(true){
if((i__4865__auto___63324 < len__4864__auto___63323)){
args__4870__auto__.push((arguments[i__4865__auto___63324]));

var G__63325 = (i__4865__auto___63324 + (1));
i__4865__auto___63324 = G__63325;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62039 = conformed_args__60736__auto__;
var map__62039__$1 = cljs.core.__destructure_map(map__62039);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq62038){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62038));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63326 = arguments.length;
var i__4865__auto___63327 = (0);
while(true){
if((i__4865__auto___63327 < len__4864__auto___63326)){
args__4870__auto__.push((arguments[i__4865__auto___63327]));

var G__63328 = (i__4865__auto___63327 + (1));
i__4865__auto___63327 = G__63328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62041 = conformed_args__60736__auto__;
var map__62041__$1 = cljs.core.__destructure_map(map__62041);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq62040){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63329 = arguments.length;
var i__4865__auto___63330 = (0);
while(true){
if((i__4865__auto___63330 < len__4864__auto___63329)){
args__4870__auto__.push((arguments[i__4865__auto___63330]));

var G__63331 = (i__4865__auto___63330 + (1));
i__4865__auto___63330 = G__63331;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62043 = conformed_args__60736__auto__;
var map__62043__$1 = cljs.core.__destructure_map(map__62043);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq62042){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63332 = arguments.length;
var i__4865__auto___63333 = (0);
while(true){
if((i__4865__auto___63333 < len__4864__auto___63332)){
args__4870__auto__.push((arguments[i__4865__auto___63333]));

var G__63334 = (i__4865__auto___63333 + (1));
i__4865__auto___63333 = G__63334;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62045 = conformed_args__60736__auto__;
var map__62045__$1 = cljs.core.__destructure_map(map__62045);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq62044){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63335 = arguments.length;
var i__4865__auto___63336 = (0);
while(true){
if((i__4865__auto___63336 < len__4864__auto___63335)){
args__4870__auto__.push((arguments[i__4865__auto___63336]));

var G__63337 = (i__4865__auto___63336 + (1));
i__4865__auto___63336 = G__63337;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62047 = conformed_args__60736__auto__;
var map__62047__$1 = cljs.core.__destructure_map(map__62047);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq62046){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63338 = arguments.length;
var i__4865__auto___63339 = (0);
while(true){
if((i__4865__auto___63339 < len__4864__auto___63338)){
args__4870__auto__.push((arguments[i__4865__auto___63339]));

var G__63340 = (i__4865__auto___63339 + (1));
i__4865__auto___63339 = G__63340;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62049 = conformed_args__60736__auto__;
var map__62049__$1 = cljs.core.__destructure_map(map__62049);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq62048){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62048));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63341 = arguments.length;
var i__4865__auto___63342 = (0);
while(true){
if((i__4865__auto___63342 < len__4864__auto___63341)){
args__4870__auto__.push((arguments[i__4865__auto___63342]));

var G__63343 = (i__4865__auto___63342 + (1));
i__4865__auto___63342 = G__63343;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62051 = conformed_args__60736__auto__;
var map__62051__$1 = cljs.core.__destructure_map(map__62051);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq62050){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62050));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63348 = arguments.length;
var i__4865__auto___63349 = (0);
while(true){
if((i__4865__auto___63349 < len__4864__auto___63348)){
args__4870__auto__.push((arguments[i__4865__auto___63349]));

var G__63350 = (i__4865__auto___63349 + (1));
i__4865__auto___63349 = G__63350;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62053 = conformed_args__60736__auto__;
var map__62053__$1 = cljs.core.__destructure_map(map__62053);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq62052){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63351 = arguments.length;
var i__4865__auto___63352 = (0);
while(true){
if((i__4865__auto___63352 < len__4864__auto___63351)){
args__4870__auto__.push((arguments[i__4865__auto___63352]));

var G__63353 = (i__4865__auto___63352 + (1));
i__4865__auto___63352 = G__63353;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62055 = conformed_args__60736__auto__;
var map__62055__$1 = cljs.core.__destructure_map(map__62055);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq62054){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62054));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63354 = arguments.length;
var i__4865__auto___63355 = (0);
while(true){
if((i__4865__auto___63355 < len__4864__auto___63354)){
args__4870__auto__.push((arguments[i__4865__auto___63355]));

var G__63356 = (i__4865__auto___63355 + (1));
i__4865__auto___63355 = G__63356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62057 = conformed_args__60736__auto__;
var map__62057__$1 = cljs.core.__destructure_map(map__62057);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq62056){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62056));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63357 = arguments.length;
var i__4865__auto___63358 = (0);
while(true){
if((i__4865__auto___63358 < len__4864__auto___63357)){
args__4870__auto__.push((arguments[i__4865__auto___63358]));

var G__63359 = (i__4865__auto___63358 + (1));
i__4865__auto___63358 = G__63359;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62059 = conformed_args__60736__auto__;
var map__62059__$1 = cljs.core.__destructure_map(map__62059);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq62058){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63360 = arguments.length;
var i__4865__auto___63361 = (0);
while(true){
if((i__4865__auto___63361 < len__4864__auto___63360)){
args__4870__auto__.push((arguments[i__4865__auto___63361]));

var G__63362 = (i__4865__auto___63361 + (1));
i__4865__auto___63361 = G__63362;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62061 = conformed_args__60736__auto__;
var map__62061__$1 = cljs.core.__destructure_map(map__62061);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq62060){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62060));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63363 = arguments.length;
var i__4865__auto___63364 = (0);
while(true){
if((i__4865__auto___63364 < len__4864__auto___63363)){
args__4870__auto__.push((arguments[i__4865__auto___63364]));

var G__63365 = (i__4865__auto___63364 + (1));
i__4865__auto___63364 = G__63365;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62063 = conformed_args__60736__auto__;
var map__62063__$1 = cljs.core.__destructure_map(map__62063);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq62062){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62062));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63366 = arguments.length;
var i__4865__auto___63367 = (0);
while(true){
if((i__4865__auto___63367 < len__4864__auto___63366)){
args__4870__auto__.push((arguments[i__4865__auto___63367]));

var G__63368 = (i__4865__auto___63367 + (1));
i__4865__auto___63367 = G__63368;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62065 = conformed_args__60736__auto__;
var map__62065__$1 = cljs.core.__destructure_map(map__62065);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq62064){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62064));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63369 = arguments.length;
var i__4865__auto___63370 = (0);
while(true){
if((i__4865__auto___63370 < len__4864__auto___63369)){
args__4870__auto__.push((arguments[i__4865__auto___63370]));

var G__63371 = (i__4865__auto___63370 + (1));
i__4865__auto___63370 = G__63371;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62067 = conformed_args__60736__auto__;
var map__62067__$1 = cljs.core.__destructure_map(map__62067);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq62066){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63372 = arguments.length;
var i__4865__auto___63373 = (0);
while(true){
if((i__4865__auto___63373 < len__4864__auto___63372)){
args__4870__auto__.push((arguments[i__4865__auto___63373]));

var G__63374 = (i__4865__auto___63373 + (1));
i__4865__auto___63373 = G__63374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62069 = conformed_args__60736__auto__;
var map__62069__$1 = cljs.core.__destructure_map(map__62069);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq62068){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62068));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63379 = arguments.length;
var i__4865__auto___63380 = (0);
while(true){
if((i__4865__auto___63380 < len__4864__auto___63379)){
args__4870__auto__.push((arguments[i__4865__auto___63380]));

var G__63381 = (i__4865__auto___63380 + (1));
i__4865__auto___63380 = G__63381;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62071 = conformed_args__60736__auto__;
var map__62071__$1 = cljs.core.__destructure_map(map__62071);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq62070){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63382 = arguments.length;
var i__4865__auto___63383 = (0);
while(true){
if((i__4865__auto___63383 < len__4864__auto___63382)){
args__4870__auto__.push((arguments[i__4865__auto___63383]));

var G__63384 = (i__4865__auto___63383 + (1));
i__4865__auto___63383 = G__63384;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62073 = conformed_args__60736__auto__;
var map__62073__$1 = cljs.core.__destructure_map(map__62073);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq62072){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63385 = arguments.length;
var i__4865__auto___63386 = (0);
while(true){
if((i__4865__auto___63386 < len__4864__auto___63385)){
args__4870__auto__.push((arguments[i__4865__auto___63386]));

var G__63387 = (i__4865__auto___63386 + (1));
i__4865__auto___63386 = G__63387;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62075 = conformed_args__60736__auto__;
var map__62075__$1 = cljs.core.__destructure_map(map__62075);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq62074){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62074));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63388 = arguments.length;
var i__4865__auto___63389 = (0);
while(true){
if((i__4865__auto___63389 < len__4864__auto___63388)){
args__4870__auto__.push((arguments[i__4865__auto___63389]));

var G__63390 = (i__4865__auto___63389 + (1));
i__4865__auto___63389 = G__63390;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62077 = conformed_args__60736__auto__;
var map__62077__$1 = cljs.core.__destructure_map(map__62077);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq62076){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62076));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63394 = arguments.length;
var i__4865__auto___63395 = (0);
while(true){
if((i__4865__auto___63395 < len__4864__auto___63394)){
args__4870__auto__.push((arguments[i__4865__auto___63395]));

var G__63396 = (i__4865__auto___63395 + (1));
i__4865__auto___63395 = G__63396;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62079 = conformed_args__60736__auto__;
var map__62079__$1 = cljs.core.__destructure_map(map__62079);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq62078){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62078));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63397 = arguments.length;
var i__4865__auto___63398 = (0);
while(true){
if((i__4865__auto___63398 < len__4864__auto___63397)){
args__4870__auto__.push((arguments[i__4865__auto___63398]));

var G__63399 = (i__4865__auto___63398 + (1));
i__4865__auto___63398 = G__63399;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62081 = conformed_args__60736__auto__;
var map__62081__$1 = cljs.core.__destructure_map(map__62081);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq62080){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63400 = arguments.length;
var i__4865__auto___63401 = (0);
while(true){
if((i__4865__auto___63401 < len__4864__auto___63400)){
args__4870__auto__.push((arguments[i__4865__auto___63401]));

var G__63402 = (i__4865__auto___63401 + (1));
i__4865__auto___63401 = G__63402;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62083 = conformed_args__60736__auto__;
var map__62083__$1 = cljs.core.__destructure_map(map__62083);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq62082){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62082));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63406 = arguments.length;
var i__4865__auto___63407 = (0);
while(true){
if((i__4865__auto___63407 < len__4864__auto___63406)){
args__4870__auto__.push((arguments[i__4865__auto___63407]));

var G__63408 = (i__4865__auto___63407 + (1));
i__4865__auto___63407 = G__63408;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62085 = conformed_args__60736__auto__;
var map__62085__$1 = cljs.core.__destructure_map(map__62085);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq62084){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62084));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63409 = arguments.length;
var i__4865__auto___63410 = (0);
while(true){
if((i__4865__auto___63410 < len__4864__auto___63409)){
args__4870__auto__.push((arguments[i__4865__auto___63410]));

var G__63411 = (i__4865__auto___63410 + (1));
i__4865__auto___63410 = G__63411;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62087 = conformed_args__60736__auto__;
var map__62087__$1 = cljs.core.__destructure_map(map__62087);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq62086){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62086));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63415 = arguments.length;
var i__4865__auto___63416 = (0);
while(true){
if((i__4865__auto___63416 < len__4864__auto___63415)){
args__4870__auto__.push((arguments[i__4865__auto___63416]));

var G__63417 = (i__4865__auto___63416 + (1));
i__4865__auto___63416 = G__63417;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62089 = conformed_args__60736__auto__;
var map__62089__$1 = cljs.core.__destructure_map(map__62089);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq62088){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62088));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63418 = arguments.length;
var i__4865__auto___63419 = (0);
while(true){
if((i__4865__auto___63419 < len__4864__auto___63418)){
args__4870__auto__.push((arguments[i__4865__auto___63419]));

var G__63420 = (i__4865__auto___63419 + (1));
i__4865__auto___63419 = G__63420;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62091 = conformed_args__60736__auto__;
var map__62091__$1 = cljs.core.__destructure_map(map__62091);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq62090){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63421 = arguments.length;
var i__4865__auto___63422 = (0);
while(true){
if((i__4865__auto___63422 < len__4864__auto___63421)){
args__4870__auto__.push((arguments[i__4865__auto___63422]));

var G__63423 = (i__4865__auto___63422 + (1));
i__4865__auto___63422 = G__63423;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62093 = conformed_args__60736__auto__;
var map__62093__$1 = cljs.core.__destructure_map(map__62093);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq62092){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62092));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63424 = arguments.length;
var i__4865__auto___63425 = (0);
while(true){
if((i__4865__auto___63425 < len__4864__auto___63424)){
args__4870__auto__.push((arguments[i__4865__auto___63425]));

var G__63426 = (i__4865__auto___63425 + (1));
i__4865__auto___63425 = G__63426;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62095 = conformed_args__60736__auto__;
var map__62095__$1 = cljs.core.__destructure_map(map__62095);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq62094){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62094));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63427 = arguments.length;
var i__4865__auto___63428 = (0);
while(true){
if((i__4865__auto___63428 < len__4864__auto___63427)){
args__4870__auto__.push((arguments[i__4865__auto___63428]));

var G__63429 = (i__4865__auto___63428 + (1));
i__4865__auto___63428 = G__63429;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62097 = conformed_args__60736__auto__;
var map__62097__$1 = cljs.core.__destructure_map(map__62097);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq62096){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63430 = arguments.length;
var i__4865__auto___63431 = (0);
while(true){
if((i__4865__auto___63431 < len__4864__auto___63430)){
args__4870__auto__.push((arguments[i__4865__auto___63431]));

var G__63434 = (i__4865__auto___63431 + (1));
i__4865__auto___63431 = G__63434;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62099 = conformed_args__60736__auto__;
var map__62099__$1 = cljs.core.__destructure_map(map__62099);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq62098){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62098));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63437 = arguments.length;
var i__4865__auto___63438 = (0);
while(true){
if((i__4865__auto___63438 < len__4864__auto___63437)){
args__4870__auto__.push((arguments[i__4865__auto___63438]));

var G__63439 = (i__4865__auto___63438 + (1));
i__4865__auto___63438 = G__63439;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62101 = conformed_args__60736__auto__;
var map__62101__$1 = cljs.core.__destructure_map(map__62101);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq62100){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62100));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63440 = arguments.length;
var i__4865__auto___63441 = (0);
while(true){
if((i__4865__auto___63441 < len__4864__auto___63440)){
args__4870__auto__.push((arguments[i__4865__auto___63441]));

var G__63442 = (i__4865__auto___63441 + (1));
i__4865__auto___63441 = G__63442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62103 = conformed_args__60736__auto__;
var map__62103__$1 = cljs.core.__destructure_map(map__62103);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq62102){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63450 = arguments.length;
var i__4865__auto___63451 = (0);
while(true){
if((i__4865__auto___63451 < len__4864__auto___63450)){
args__4870__auto__.push((arguments[i__4865__auto___63451]));

var G__63452 = (i__4865__auto___63451 + (1));
i__4865__auto___63451 = G__63452;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62105 = conformed_args__60736__auto__;
var map__62105__$1 = cljs.core.__destructure_map(map__62105);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq62104){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62104));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63453 = arguments.length;
var i__4865__auto___63454 = (0);
while(true){
if((i__4865__auto___63454 < len__4864__auto___63453)){
args__4870__auto__.push((arguments[i__4865__auto___63454]));

var G__63455 = (i__4865__auto___63454 + (1));
i__4865__auto___63454 = G__63455;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62107 = conformed_args__60736__auto__;
var map__62107__$1 = cljs.core.__destructure_map(map__62107);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq62106){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62106));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63459 = arguments.length;
var i__4865__auto___63460 = (0);
while(true){
if((i__4865__auto___63460 < len__4864__auto___63459)){
args__4870__auto__.push((arguments[i__4865__auto___63460]));

var G__63461 = (i__4865__auto___63460 + (1));
i__4865__auto___63460 = G__63461;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62109 = conformed_args__60736__auto__;
var map__62109__$1 = cljs.core.__destructure_map(map__62109);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq62108){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62108));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63462 = arguments.length;
var i__4865__auto___63463 = (0);
while(true){
if((i__4865__auto___63463 < len__4864__auto___63462)){
args__4870__auto__.push((arguments[i__4865__auto___63463]));

var G__63464 = (i__4865__auto___63463 + (1));
i__4865__auto___63463 = G__63464;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62111 = conformed_args__60736__auto__;
var map__62111__$1 = cljs.core.__destructure_map(map__62111);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq62110){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62110));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63468 = arguments.length;
var i__4865__auto___63469 = (0);
while(true){
if((i__4865__auto___63469 < len__4864__auto___63468)){
args__4870__auto__.push((arguments[i__4865__auto___63469]));

var G__63470 = (i__4865__auto___63469 + (1));
i__4865__auto___63469 = G__63470;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62113 = conformed_args__60736__auto__;
var map__62113__$1 = cljs.core.__destructure_map(map__62113);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq62112){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62112));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63471 = arguments.length;
var i__4865__auto___63472 = (0);
while(true){
if((i__4865__auto___63472 < len__4864__auto___63471)){
args__4870__auto__.push((arguments[i__4865__auto___63472]));

var G__63473 = (i__4865__auto___63472 + (1));
i__4865__auto___63472 = G__63473;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62115 = conformed_args__60736__auto__;
var map__62115__$1 = cljs.core.__destructure_map(map__62115);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq62114){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62114));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63477 = arguments.length;
var i__4865__auto___63478 = (0);
while(true){
if((i__4865__auto___63478 < len__4864__auto___63477)){
args__4870__auto__.push((arguments[i__4865__auto___63478]));

var G__63479 = (i__4865__auto___63478 + (1));
i__4865__auto___63478 = G__63479;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62117 = conformed_args__60736__auto__;
var map__62117__$1 = cljs.core.__destructure_map(map__62117);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq62116){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63480 = arguments.length;
var i__4865__auto___63481 = (0);
while(true){
if((i__4865__auto___63481 < len__4864__auto___63480)){
args__4870__auto__.push((arguments[i__4865__auto___63481]));

var G__63482 = (i__4865__auto___63481 + (1));
i__4865__auto___63481 = G__63482;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62119 = conformed_args__60736__auto__;
var map__62119__$1 = cljs.core.__destructure_map(map__62119);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq62118){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63484 = arguments.length;
var i__4865__auto___63485 = (0);
while(true){
if((i__4865__auto___63485 < len__4864__auto___63484)){
args__4870__auto__.push((arguments[i__4865__auto___63485]));

var G__63486 = (i__4865__auto___63485 + (1));
i__4865__auto___63485 = G__63486;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62121 = conformed_args__60736__auto__;
var map__62121__$1 = cljs.core.__destructure_map(map__62121);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq62120){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63487 = arguments.length;
var i__4865__auto___63488 = (0);
while(true){
if((i__4865__auto___63488 < len__4864__auto___63487)){
args__4870__auto__.push((arguments[i__4865__auto___63488]));

var G__63492 = (i__4865__auto___63488 + (1));
i__4865__auto___63488 = G__63492;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62123 = conformed_args__60736__auto__;
var map__62123__$1 = cljs.core.__destructure_map(map__62123);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq62122){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62122));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63493 = arguments.length;
var i__4865__auto___63494 = (0);
while(true){
if((i__4865__auto___63494 < len__4864__auto___63493)){
args__4870__auto__.push((arguments[i__4865__auto___63494]));

var G__63495 = (i__4865__auto___63494 + (1));
i__4865__auto___63494 = G__63495;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62125 = conformed_args__60736__auto__;
var map__62125__$1 = cljs.core.__destructure_map(map__62125);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq62124){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62124));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63496 = arguments.length;
var i__4865__auto___63497 = (0);
while(true){
if((i__4865__auto___63497 < len__4864__auto___63496)){
args__4870__auto__.push((arguments[i__4865__auto___63497]));

var G__63498 = (i__4865__auto___63497 + (1));
i__4865__auto___63497 = G__63498;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62127 = conformed_args__60736__auto__;
var map__62127__$1 = cljs.core.__destructure_map(map__62127);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq62126){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62126));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63499 = arguments.length;
var i__4865__auto___63500 = (0);
while(true){
if((i__4865__auto___63500 < len__4864__auto___63499)){
args__4870__auto__.push((arguments[i__4865__auto___63500]));

var G__63501 = (i__4865__auto___63500 + (1));
i__4865__auto___63500 = G__63501;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62129 = conformed_args__60736__auto__;
var map__62129__$1 = cljs.core.__destructure_map(map__62129);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq62128){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62128));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63502 = arguments.length;
var i__4865__auto___63503 = (0);
while(true){
if((i__4865__auto___63503 < len__4864__auto___63502)){
args__4870__auto__.push((arguments[i__4865__auto___63503]));

var G__63504 = (i__4865__auto___63503 + (1));
i__4865__auto___63503 = G__63504;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62131 = conformed_args__60736__auto__;
var map__62131__$1 = cljs.core.__destructure_map(map__62131);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq62130){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63507 = arguments.length;
var i__4865__auto___63508 = (0);
while(true){
if((i__4865__auto___63508 < len__4864__auto___63507)){
args__4870__auto__.push((arguments[i__4865__auto___63508]));

var G__63509 = (i__4865__auto___63508 + (1));
i__4865__auto___63508 = G__63509;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62133 = conformed_args__60736__auto__;
var map__62133__$1 = cljs.core.__destructure_map(map__62133);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq62132){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63510 = arguments.length;
var i__4865__auto___63511 = (0);
while(true){
if((i__4865__auto___63511 < len__4864__auto___63510)){
args__4870__auto__.push((arguments[i__4865__auto___63511]));

var G__63513 = (i__4865__auto___63511 + (1));
i__4865__auto___63511 = G__63513;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62135 = conformed_args__60736__auto__;
var map__62135__$1 = cljs.core.__destructure_map(map__62135);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq62134){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62134));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63514 = arguments.length;
var i__4865__auto___63515 = (0);
while(true){
if((i__4865__auto___63515 < len__4864__auto___63514)){
args__4870__auto__.push((arguments[i__4865__auto___63515]));

var G__63516 = (i__4865__auto___63515 + (1));
i__4865__auto___63515 = G__63516;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62137 = conformed_args__60736__auto__;
var map__62137__$1 = cljs.core.__destructure_map(map__62137);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq62136){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63517 = arguments.length;
var i__4865__auto___63518 = (0);
while(true){
if((i__4865__auto___63518 < len__4864__auto___63517)){
args__4870__auto__.push((arguments[i__4865__auto___63518]));

var G__63519 = (i__4865__auto___63518 + (1));
i__4865__auto___63518 = G__63519;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62139 = conformed_args__60736__auto__;
var map__62139__$1 = cljs.core.__destructure_map(map__62139);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq62138){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63520 = arguments.length;
var i__4865__auto___63521 = (0);
while(true){
if((i__4865__auto___63521 < len__4864__auto___63520)){
args__4870__auto__.push((arguments[i__4865__auto___63521]));

var G__63522 = (i__4865__auto___63521 + (1));
i__4865__auto___63521 = G__63522;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62141 = conformed_args__60736__auto__;
var map__62141__$1 = cljs.core.__destructure_map(map__62141);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq62140){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62140));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63525 = arguments.length;
var i__4865__auto___63526 = (0);
while(true){
if((i__4865__auto___63526 < len__4864__auto___63525)){
args__4870__auto__.push((arguments[i__4865__auto___63526]));

var G__63527 = (i__4865__auto___63526 + (1));
i__4865__auto___63526 = G__63527;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62143 = conformed_args__60736__auto__;
var map__62143__$1 = cljs.core.__destructure_map(map__62143);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq62142){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63528 = arguments.length;
var i__4865__auto___63529 = (0);
while(true){
if((i__4865__auto___63529 < len__4864__auto___63528)){
args__4870__auto__.push((arguments[i__4865__auto___63529]));

var G__63531 = (i__4865__auto___63529 + (1));
i__4865__auto___63529 = G__63531;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62145 = conformed_args__60736__auto__;
var map__62145__$1 = cljs.core.__destructure_map(map__62145);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq62144){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62144));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63532 = arguments.length;
var i__4865__auto___63533 = (0);
while(true){
if((i__4865__auto___63533 < len__4864__auto___63532)){
args__4870__auto__.push((arguments[i__4865__auto___63533]));

var G__63534 = (i__4865__auto___63533 + (1));
i__4865__auto___63533 = G__63534;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62147 = conformed_args__60736__auto__;
var map__62147__$1 = cljs.core.__destructure_map(map__62147);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq62146){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62146));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63535 = arguments.length;
var i__4865__auto___63536 = (0);
while(true){
if((i__4865__auto___63536 < len__4864__auto___63535)){
args__4870__auto__.push((arguments[i__4865__auto___63536]));

var G__63537 = (i__4865__auto___63536 + (1));
i__4865__auto___63536 = G__63537;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62149 = conformed_args__60736__auto__;
var map__62149__$1 = cljs.core.__destructure_map(map__62149);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq62148){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62148));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63538 = arguments.length;
var i__4865__auto___63539 = (0);
while(true){
if((i__4865__auto___63539 < len__4864__auto___63538)){
args__4870__auto__.push((arguments[i__4865__auto___63539]));

var G__63540 = (i__4865__auto___63539 + (1));
i__4865__auto___63539 = G__63540;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62151 = conformed_args__60736__auto__;
var map__62151__$1 = cljs.core.__destructure_map(map__62151);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq62150){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63541 = arguments.length;
var i__4865__auto___63542 = (0);
while(true){
if((i__4865__auto___63542 < len__4864__auto___63541)){
args__4870__auto__.push((arguments[i__4865__auto___63542]));

var G__63543 = (i__4865__auto___63542 + (1));
i__4865__auto___63542 = G__63543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62153 = conformed_args__60736__auto__;
var map__62153__$1 = cljs.core.__destructure_map(map__62153);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq62152){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62152));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63544 = arguments.length;
var i__4865__auto___63545 = (0);
while(true){
if((i__4865__auto___63545 < len__4864__auto___63544)){
args__4870__auto__.push((arguments[i__4865__auto___63545]));

var G__63546 = (i__4865__auto___63545 + (1));
i__4865__auto___63545 = G__63546;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62155 = conformed_args__60736__auto__;
var map__62155__$1 = cljs.core.__destructure_map(map__62155);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq62154){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62154));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63551 = arguments.length;
var i__4865__auto___63552 = (0);
while(true){
if((i__4865__auto___63552 < len__4864__auto___63551)){
args__4870__auto__.push((arguments[i__4865__auto___63552]));

var G__63553 = (i__4865__auto___63552 + (1));
i__4865__auto___63552 = G__63553;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62157 = conformed_args__60736__auto__;
var map__62157__$1 = cljs.core.__destructure_map(map__62157);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq62156){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62156));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63555 = arguments.length;
var i__4865__auto___63556 = (0);
while(true){
if((i__4865__auto___63556 < len__4864__auto___63555)){
args__4870__auto__.push((arguments[i__4865__auto___63556]));

var G__63557 = (i__4865__auto___63556 + (1));
i__4865__auto___63556 = G__63557;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62159 = conformed_args__60736__auto__;
var map__62159__$1 = cljs.core.__destructure_map(map__62159);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq62158){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63559 = arguments.length;
var i__4865__auto___63560 = (0);
while(true){
if((i__4865__auto___63560 < len__4864__auto___63559)){
args__4870__auto__.push((arguments[i__4865__auto___63560]));

var G__63561 = (i__4865__auto___63560 + (1));
i__4865__auto___63560 = G__63561;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62161 = conformed_args__60736__auto__;
var map__62161__$1 = cljs.core.__destructure_map(map__62161);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq62160){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62160));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63562 = arguments.length;
var i__4865__auto___63563 = (0);
while(true){
if((i__4865__auto___63563 < len__4864__auto___63562)){
args__4870__auto__.push((arguments[i__4865__auto___63563]));

var G__63564 = (i__4865__auto___63563 + (1));
i__4865__auto___63563 = G__63564;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62163 = conformed_args__60736__auto__;
var map__62163__$1 = cljs.core.__destructure_map(map__62163);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq62162){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63569 = arguments.length;
var i__4865__auto___63570 = (0);
while(true){
if((i__4865__auto___63570 < len__4864__auto___63569)){
args__4870__auto__.push((arguments[i__4865__auto___63570]));

var G__63571 = (i__4865__auto___63570 + (1));
i__4865__auto___63570 = G__63571;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62165 = conformed_args__60736__auto__;
var map__62165__$1 = cljs.core.__destructure_map(map__62165);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq62164){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62164));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63572 = arguments.length;
var i__4865__auto___63573 = (0);
while(true){
if((i__4865__auto___63573 < len__4864__auto___63572)){
args__4870__auto__.push((arguments[i__4865__auto___63573]));

var G__63574 = (i__4865__auto___63573 + (1));
i__4865__auto___63573 = G__63574;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62167 = conformed_args__60736__auto__;
var map__62167__$1 = cljs.core.__destructure_map(map__62167);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq62166){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63575 = arguments.length;
var i__4865__auto___63576 = (0);
while(true){
if((i__4865__auto___63576 < len__4864__auto___63575)){
args__4870__auto__.push((arguments[i__4865__auto___63576]));

var G__63577 = (i__4865__auto___63576 + (1));
i__4865__auto___63576 = G__63577;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62169 = conformed_args__60736__auto__;
var map__62169__$1 = cljs.core.__destructure_map(map__62169);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq62168){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63578 = arguments.length;
var i__4865__auto___63579 = (0);
while(true){
if((i__4865__auto___63579 < len__4864__auto___63578)){
args__4870__auto__.push((arguments[i__4865__auto___63579]));

var G__63580 = (i__4865__auto___63579 + (1));
i__4865__auto___63579 = G__63580;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62171 = conformed_args__60736__auto__;
var map__62171__$1 = cljs.core.__destructure_map(map__62171);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq62170){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63581 = arguments.length;
var i__4865__auto___63582 = (0);
while(true){
if((i__4865__auto___63582 < len__4864__auto___63581)){
args__4870__auto__.push((arguments[i__4865__auto___63582]));

var G__63583 = (i__4865__auto___63582 + (1));
i__4865__auto___63582 = G__63583;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62173 = conformed_args__60736__auto__;
var map__62173__$1 = cljs.core.__destructure_map(map__62173);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq62172){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62172));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63584 = arguments.length;
var i__4865__auto___63585 = (0);
while(true){
if((i__4865__auto___63585 < len__4864__auto___63584)){
args__4870__auto__.push((arguments[i__4865__auto___63585]));

var G__63586 = (i__4865__auto___63585 + (1));
i__4865__auto___63585 = G__63586;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62178 = conformed_args__60736__auto__;
var map__62178__$1 = cljs.core.__destructure_map(map__62178);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq62175){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63591 = arguments.length;
var i__4865__auto___63592 = (0);
while(true){
if((i__4865__auto___63592 < len__4864__auto___63591)){
args__4870__auto__.push((arguments[i__4865__auto___63592]));

var G__63593 = (i__4865__auto___63592 + (1));
i__4865__auto___63592 = G__63593;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62180 = conformed_args__60736__auto__;
var map__62180__$1 = cljs.core.__destructure_map(map__62180);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq62179){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62179));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63594 = arguments.length;
var i__4865__auto___63595 = (0);
while(true){
if((i__4865__auto___63595 < len__4864__auto___63594)){
args__4870__auto__.push((arguments[i__4865__auto___63595]));

var G__63596 = (i__4865__auto___63595 + (1));
i__4865__auto___63595 = G__63596;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62183 = conformed_args__60736__auto__;
var map__62183__$1 = cljs.core.__destructure_map(map__62183);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq62182){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62182));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63597 = arguments.length;
var i__4865__auto___63598 = (0);
while(true){
if((i__4865__auto___63598 < len__4864__auto___63597)){
args__4870__auto__.push((arguments[i__4865__auto___63598]));

var G__63599 = (i__4865__auto___63598 + (1));
i__4865__auto___63598 = G__63599;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62185 = conformed_args__60736__auto__;
var map__62185__$1 = cljs.core.__destructure_map(map__62185);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq62184){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62184));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63600 = arguments.length;
var i__4865__auto___63601 = (0);
while(true){
if((i__4865__auto___63601 < len__4864__auto___63600)){
args__4870__auto__.push((arguments[i__4865__auto___63601]));

var G__63602 = (i__4865__auto___63601 + (1));
i__4865__auto___63601 = G__63602;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62187 = conformed_args__60736__auto__;
var map__62187__$1 = cljs.core.__destructure_map(map__62187);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq62186){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62186));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63603 = arguments.length;
var i__4865__auto___63604 = (0);
while(true){
if((i__4865__auto___63604 < len__4864__auto___63603)){
args__4870__auto__.push((arguments[i__4865__auto___63604]));

var G__63605 = (i__4865__auto___63604 + (1));
i__4865__auto___63604 = G__63605;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62189 = conformed_args__60736__auto__;
var map__62189__$1 = cljs.core.__destructure_map(map__62189);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq62188){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63608 = arguments.length;
var i__4865__auto___63609 = (0);
while(true){
if((i__4865__auto___63609 < len__4864__auto___63608)){
args__4870__auto__.push((arguments[i__4865__auto___63609]));

var G__63610 = (i__4865__auto___63609 + (1));
i__4865__auto___63609 = G__63610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62195 = conformed_args__60736__auto__;
var map__62195__$1 = cljs.core.__destructure_map(map__62195);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq62190){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62190));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63611 = arguments.length;
var i__4865__auto___63612 = (0);
while(true){
if((i__4865__auto___63612 < len__4864__auto___63611)){
args__4870__auto__.push((arguments[i__4865__auto___63612]));

var G__63613 = (i__4865__auto___63612 + (1));
i__4865__auto___63612 = G__63613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62197 = conformed_args__60736__auto__;
var map__62197__$1 = cljs.core.__destructure_map(map__62197);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq62196){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62196));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63614 = arguments.length;
var i__4865__auto___63615 = (0);
while(true){
if((i__4865__auto___63615 < len__4864__auto___63614)){
args__4870__auto__.push((arguments[i__4865__auto___63615]));

var G__63616 = (i__4865__auto___63615 + (1));
i__4865__auto___63615 = G__63616;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62206 = conformed_args__60736__auto__;
var map__62206__$1 = cljs.core.__destructure_map(map__62206);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq62202){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62202));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63617 = arguments.length;
var i__4865__auto___63618 = (0);
while(true){
if((i__4865__auto___63618 < len__4864__auto___63617)){
args__4870__auto__.push((arguments[i__4865__auto___63618]));

var G__63619 = (i__4865__auto___63618 + (1));
i__4865__auto___63618 = G__63619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62212 = conformed_args__60736__auto__;
var map__62212__$1 = cljs.core.__destructure_map(map__62212);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq62211){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63620 = arguments.length;
var i__4865__auto___63621 = (0);
while(true){
if((i__4865__auto___63621 < len__4864__auto___63620)){
args__4870__auto__.push((arguments[i__4865__auto___63621]));

var G__63622 = (i__4865__auto___63621 + (1));
i__4865__auto___63621 = G__63622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62214 = conformed_args__60736__auto__;
var map__62214__$1 = cljs.core.__destructure_map(map__62214);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq62213){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62213));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63623 = arguments.length;
var i__4865__auto___63624 = (0);
while(true){
if((i__4865__auto___63624 < len__4864__auto___63623)){
args__4870__auto__.push((arguments[i__4865__auto___63624]));

var G__63629 = (i__4865__auto___63624 + (1));
i__4865__auto___63624 = G__63629;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62220 = conformed_args__60736__auto__;
var map__62220__$1 = cljs.core.__destructure_map(map__62220);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq62219){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63632 = arguments.length;
var i__4865__auto___63633 = (0);
while(true){
if((i__4865__auto___63633 < len__4864__auto___63632)){
args__4870__auto__.push((arguments[i__4865__auto___63633]));

var G__63634 = (i__4865__auto___63633 + (1));
i__4865__auto___63633 = G__63634;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62231 = conformed_args__60736__auto__;
var map__62231__$1 = cljs.core.__destructure_map(map__62231);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq62229){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62229));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63636 = arguments.length;
var i__4865__auto___63637 = (0);
while(true){
if((i__4865__auto___63637 < len__4864__auto___63636)){
args__4870__auto__.push((arguments[i__4865__auto___63637]));

var G__63638 = (i__4865__auto___63637 + (1));
i__4865__auto___63637 = G__63638;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62237 = conformed_args__60736__auto__;
var map__62237__$1 = cljs.core.__destructure_map(map__62237);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq62236){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62236));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63640 = arguments.length;
var i__4865__auto___63641 = (0);
while(true){
if((i__4865__auto___63641 < len__4864__auto___63640)){
args__4870__auto__.push((arguments[i__4865__auto___63641]));

var G__63646 = (i__4865__auto___63641 + (1));
i__4865__auto___63641 = G__63646;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62241 = conformed_args__60736__auto__;
var map__62241__$1 = cljs.core.__destructure_map(map__62241);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq62239){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62239));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63649 = arguments.length;
var i__4865__auto___63650 = (0);
while(true){
if((i__4865__auto___63650 < len__4864__auto___63649)){
args__4870__auto__.push((arguments[i__4865__auto___63650]));

var G__63651 = (i__4865__auto___63650 + (1));
i__4865__auto___63650 = G__63651;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62248 = conformed_args__60736__auto__;
var map__62248__$1 = cljs.core.__destructure_map(map__62248);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq62246){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62246));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63652 = arguments.length;
var i__4865__auto___63653 = (0);
while(true){
if((i__4865__auto___63653 < len__4864__auto___63652)){
args__4870__auto__.push((arguments[i__4865__auto___63653]));

var G__63654 = (i__4865__auto___63653 + (1));
i__4865__auto___63653 = G__63654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62258 = conformed_args__60736__auto__;
var map__62258__$1 = cljs.core.__destructure_map(map__62258);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq62255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62255));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63656 = arguments.length;
var i__4865__auto___63657 = (0);
while(true){
if((i__4865__auto___63657 < len__4864__auto___63656)){
args__4870__auto__.push((arguments[i__4865__auto___63657]));

var G__63658 = (i__4865__auto___63657 + (1));
i__4865__auto___63657 = G__63658;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62262 = conformed_args__60736__auto__;
var map__62262__$1 = cljs.core.__destructure_map(map__62262);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq62261){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63661 = arguments.length;
var i__4865__auto___63662 = (0);
while(true){
if((i__4865__auto___63662 < len__4864__auto___63661)){
args__4870__auto__.push((arguments[i__4865__auto___63662]));

var G__63663 = (i__4865__auto___63662 + (1));
i__4865__auto___63662 = G__63663;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62266 = conformed_args__60736__auto__;
var map__62266__$1 = cljs.core.__destructure_map(map__62266);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq62265){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63667 = arguments.length;
var i__4865__auto___63668 = (0);
while(true){
if((i__4865__auto___63668 < len__4864__auto___63667)){
args__4870__auto__.push((arguments[i__4865__auto___63668]));

var G__63669 = (i__4865__auto___63668 + (1));
i__4865__auto___63668 = G__63669;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62276 = conformed_args__60736__auto__;
var map__62276__$1 = cljs.core.__destructure_map(map__62276);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq62269){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63672 = arguments.length;
var i__4865__auto___63673 = (0);
while(true){
if((i__4865__auto___63673 < len__4864__auto___63672)){
args__4870__auto__.push((arguments[i__4865__auto___63673]));

var G__63674 = (i__4865__auto___63673 + (1));
i__4865__auto___63673 = G__63674;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62290 = conformed_args__60736__auto__;
var map__62290__$1 = cljs.core.__destructure_map(map__62290);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq62289){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62289));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63677 = arguments.length;
var i__4865__auto___63678 = (0);
while(true){
if((i__4865__auto___63678 < len__4864__auto___63677)){
args__4870__auto__.push((arguments[i__4865__auto___63678]));

var G__63679 = (i__4865__auto___63678 + (1));
i__4865__auto___63678 = G__63679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62315 = conformed_args__60736__auto__;
var map__62315__$1 = cljs.core.__destructure_map(map__62315);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq62312){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62312));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63681 = arguments.length;
var i__4865__auto___63682 = (0);
while(true){
if((i__4865__auto___63682 < len__4864__auto___63681)){
args__4870__auto__.push((arguments[i__4865__auto___63682]));

var G__63683 = (i__4865__auto___63682 + (1));
i__4865__auto___63682 = G__63683;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62322 = conformed_args__60736__auto__;
var map__62322__$1 = cljs.core.__destructure_map(map__62322);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq62319){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63684 = arguments.length;
var i__4865__auto___63685 = (0);
while(true){
if((i__4865__auto___63685 < len__4864__auto___63684)){
args__4870__auto__.push((arguments[i__4865__auto___63685]));

var G__63686 = (i__4865__auto___63685 + (1));
i__4865__auto___63685 = G__63686;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62324 = conformed_args__60736__auto__;
var map__62324__$1 = cljs.core.__destructure_map(map__62324);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq62323){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62323));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63690 = arguments.length;
var i__4865__auto___63691 = (0);
while(true){
if((i__4865__auto___63691 < len__4864__auto___63690)){
args__4870__auto__.push((arguments[i__4865__auto___63691]));

var G__63692 = (i__4865__auto___63691 + (1));
i__4865__auto___63691 = G__63692;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62328 = conformed_args__60736__auto__;
var map__62328__$1 = cljs.core.__destructure_map(map__62328);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq62327){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62327));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63693 = arguments.length;
var i__4865__auto___63694 = (0);
while(true){
if((i__4865__auto___63694 < len__4864__auto___63693)){
args__4870__auto__.push((arguments[i__4865__auto___63694]));

var G__63695 = (i__4865__auto___63694 + (1));
i__4865__auto___63694 = G__63695;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62330 = conformed_args__60736__auto__;
var map__62330__$1 = cljs.core.__destructure_map(map__62330);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq62329){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63697 = arguments.length;
var i__4865__auto___63698 = (0);
while(true){
if((i__4865__auto___63698 < len__4864__auto___63697)){
args__4870__auto__.push((arguments[i__4865__auto___63698]));

var G__63699 = (i__4865__auto___63698 + (1));
i__4865__auto___63698 = G__63699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62335 = conformed_args__60736__auto__;
var map__62335__$1 = cljs.core.__destructure_map(map__62335);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq62334){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62334));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63707 = arguments.length;
var i__4865__auto___63708 = (0);
while(true){
if((i__4865__auto___63708 < len__4864__auto___63707)){
args__4870__auto__.push((arguments[i__4865__auto___63708]));

var G__63709 = (i__4865__auto___63708 + (1));
i__4865__auto___63708 = G__63709;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62346 = conformed_args__60736__auto__;
var map__62346__$1 = cljs.core.__destructure_map(map__62346);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq62336){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62336));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63713 = arguments.length;
var i__4865__auto___63714 = (0);
while(true){
if((i__4865__auto___63714 < len__4864__auto___63713)){
args__4870__auto__.push((arguments[i__4865__auto___63714]));

var G__63715 = (i__4865__auto___63714 + (1));
i__4865__auto___63714 = G__63715;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62356 = conformed_args__60736__auto__;
var map__62356__$1 = cljs.core.__destructure_map(map__62356);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq62351){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63719 = arguments.length;
var i__4865__auto___63720 = (0);
while(true){
if((i__4865__auto___63720 < len__4864__auto___63719)){
args__4870__auto__.push((arguments[i__4865__auto___63720]));

var G__63721 = (i__4865__auto___63720 + (1));
i__4865__auto___63720 = G__63721;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62358 = conformed_args__60736__auto__;
var map__62358__$1 = cljs.core.__destructure_map(map__62358);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq62357){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63725 = arguments.length;
var i__4865__auto___63726 = (0);
while(true){
if((i__4865__auto___63726 < len__4864__auto___63725)){
args__4870__auto__.push((arguments[i__4865__auto___63726]));

var G__63727 = (i__4865__auto___63726 + (1));
i__4865__auto___63726 = G__63727;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62360 = conformed_args__60736__auto__;
var map__62360__$1 = cljs.core.__destructure_map(map__62360);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq62359){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62359));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63728 = arguments.length;
var i__4865__auto___63729 = (0);
while(true){
if((i__4865__auto___63729 < len__4864__auto___63728)){
args__4870__auto__.push((arguments[i__4865__auto___63729]));

var G__63730 = (i__4865__auto___63729 + (1));
i__4865__auto___63729 = G__63730;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62362 = conformed_args__60736__auto__;
var map__62362__$1 = cljs.core.__destructure_map(map__62362);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq62361){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63734 = arguments.length;
var i__4865__auto___63735 = (0);
while(true){
if((i__4865__auto___63735 < len__4864__auto___63734)){
args__4870__auto__.push((arguments[i__4865__auto___63735]));

var G__63736 = (i__4865__auto___63735 + (1));
i__4865__auto___63735 = G__63736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62364 = conformed_args__60736__auto__;
var map__62364__$1 = cljs.core.__destructure_map(map__62364);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq62363){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62363));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63737 = arguments.length;
var i__4865__auto___63738 = (0);
while(true){
if((i__4865__auto___63738 < len__4864__auto___63737)){
args__4870__auto__.push((arguments[i__4865__auto___63738]));

var G__63740 = (i__4865__auto___63738 + (1));
i__4865__auto___63738 = G__63740;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62367 = conformed_args__60736__auto__;
var map__62367__$1 = cljs.core.__destructure_map(map__62367);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq62365){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62365));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63741 = arguments.length;
var i__4865__auto___63742 = (0);
while(true){
if((i__4865__auto___63742 < len__4864__auto___63741)){
args__4870__auto__.push((arguments[i__4865__auto___63742]));

var G__63743 = (i__4865__auto___63742 + (1));
i__4865__auto___63742 = G__63743;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62372 = conformed_args__60736__auto__;
var map__62372__$1 = cljs.core.__destructure_map(map__62372);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq62370){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63744 = arguments.length;
var i__4865__auto___63745 = (0);
while(true){
if((i__4865__auto___63745 < len__4864__auto___63744)){
args__4870__auto__.push((arguments[i__4865__auto___63745]));

var G__63746 = (i__4865__auto___63745 + (1));
i__4865__auto___63745 = G__63746;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62386 = conformed_args__60736__auto__;
var map__62386__$1 = cljs.core.__destructure_map(map__62386);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq62385){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63747 = arguments.length;
var i__4865__auto___63748 = (0);
while(true){
if((i__4865__auto___63748 < len__4864__auto___63747)){
args__4870__auto__.push((arguments[i__4865__auto___63748]));

var G__63749 = (i__4865__auto___63748 + (1));
i__4865__auto___63748 = G__63749;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62394 = conformed_args__60736__auto__;
var map__62394__$1 = cljs.core.__destructure_map(map__62394);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq62393){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63755 = arguments.length;
var i__4865__auto___63756 = (0);
while(true){
if((i__4865__auto___63756 < len__4864__auto___63755)){
args__4870__auto__.push((arguments[i__4865__auto___63756]));

var G__63757 = (i__4865__auto___63756 + (1));
i__4865__auto___63756 = G__63757;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62405 = conformed_args__60736__auto__;
var map__62405__$1 = cljs.core.__destructure_map(map__62405);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq62401){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62401));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63759 = arguments.length;
var i__4865__auto___63760 = (0);
while(true){
if((i__4865__auto___63760 < len__4864__auto___63759)){
args__4870__auto__.push((arguments[i__4865__auto___63760]));

var G__63761 = (i__4865__auto___63760 + (1));
i__4865__auto___63760 = G__63761;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62411 = conformed_args__60736__auto__;
var map__62411__$1 = cljs.core.__destructure_map(map__62411);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq62407){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63762 = arguments.length;
var i__4865__auto___63763 = (0);
while(true){
if((i__4865__auto___63763 < len__4864__auto___63762)){
args__4870__auto__.push((arguments[i__4865__auto___63763]));

var G__63764 = (i__4865__auto___63763 + (1));
i__4865__auto___63763 = G__63764;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62419 = conformed_args__60736__auto__;
var map__62419__$1 = cljs.core.__destructure_map(map__62419);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq62414){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63766 = arguments.length;
var i__4865__auto___63767 = (0);
while(true){
if((i__4865__auto___63767 < len__4864__auto___63766)){
args__4870__auto__.push((arguments[i__4865__auto___63767]));

var G__63768 = (i__4865__auto___63767 + (1));
i__4865__auto___63767 = G__63768;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62421 = conformed_args__60736__auto__;
var map__62421__$1 = cljs.core.__destructure_map(map__62421);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq62420){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63771 = arguments.length;
var i__4865__auto___63772 = (0);
while(true){
if((i__4865__auto___63772 < len__4864__auto___63771)){
args__4870__auto__.push((arguments[i__4865__auto___63772]));

var G__63773 = (i__4865__auto___63772 + (1));
i__4865__auto___63772 = G__63773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62425 = conformed_args__60736__auto__;
var map__62425__$1 = cljs.core.__destructure_map(map__62425);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq62424){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62424));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63774 = arguments.length;
var i__4865__auto___63775 = (0);
while(true){
if((i__4865__auto___63775 < len__4864__auto___63774)){
args__4870__auto__.push((arguments[i__4865__auto___63775]));

var G__63776 = (i__4865__auto___63775 + (1));
i__4865__auto___63775 = G__63776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62430 = conformed_args__60736__auto__;
var map__62430__$1 = cljs.core.__destructure_map(map__62430);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq62426){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63781 = arguments.length;
var i__4865__auto___63782 = (0);
while(true){
if((i__4865__auto___63782 < len__4864__auto___63781)){
args__4870__auto__.push((arguments[i__4865__auto___63782]));

var G__63783 = (i__4865__auto___63782 + (1));
i__4865__auto___63782 = G__63783;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62437 = conformed_args__60736__auto__;
var map__62437__$1 = cljs.core.__destructure_map(map__62437);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq62435){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63789 = arguments.length;
var i__4865__auto___63790 = (0);
while(true){
if((i__4865__auto___63790 < len__4864__auto___63789)){
args__4870__auto__.push((arguments[i__4865__auto___63790]));

var G__63791 = (i__4865__auto___63790 + (1));
i__4865__auto___63790 = G__63791;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62448 = conformed_args__60736__auto__;
var map__62448__$1 = cljs.core.__destructure_map(map__62448);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq62444){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62444));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63792 = arguments.length;
var i__4865__auto___63793 = (0);
while(true){
if((i__4865__auto___63793 < len__4864__auto___63792)){
args__4870__auto__.push((arguments[i__4865__auto___63793]));

var G__63795 = (i__4865__auto___63793 + (1));
i__4865__auto___63793 = G__63795;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62457 = conformed_args__60736__auto__;
var map__62457__$1 = cljs.core.__destructure_map(map__62457);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq62455){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63796 = arguments.length;
var i__4865__auto___63797 = (0);
while(true){
if((i__4865__auto___63797 < len__4864__auto___63796)){
args__4870__auto__.push((arguments[i__4865__auto___63797]));

var G__63798 = (i__4865__auto___63797 + (1));
i__4865__auto___63797 = G__63798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62463 = conformed_args__60736__auto__;
var map__62463__$1 = cljs.core.__destructure_map(map__62463);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq62458){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63799 = arguments.length;
var i__4865__auto___63800 = (0);
while(true){
if((i__4865__auto___63800 < len__4864__auto___63799)){
args__4870__auto__.push((arguments[i__4865__auto___63800]));

var G__63801 = (i__4865__auto___63800 + (1));
i__4865__auto___63800 = G__63801;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62473 = conformed_args__60736__auto__;
var map__62473__$1 = cljs.core.__destructure_map(map__62473);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq62464){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63805 = arguments.length;
var i__4865__auto___63806 = (0);
while(true){
if((i__4865__auto___63806 < len__4864__auto___63805)){
args__4870__auto__.push((arguments[i__4865__auto___63806]));

var G__63807 = (i__4865__auto___63806 + (1));
i__4865__auto___63806 = G__63807;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62504 = conformed_args__60736__auto__;
var map__62504__$1 = cljs.core.__destructure_map(map__62504);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq62492){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63812 = arguments.length;
var i__4865__auto___63813 = (0);
while(true){
if((i__4865__auto___63813 < len__4864__auto___63812)){
args__4870__auto__.push((arguments[i__4865__auto___63813]));

var G__63815 = (i__4865__auto___63813 + (1));
i__4865__auto___63813 = G__63815;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62522 = conformed_args__60736__auto__;
var map__62522__$1 = cljs.core.__destructure_map(map__62522);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq62515){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63816 = arguments.length;
var i__4865__auto___63817 = (0);
while(true){
if((i__4865__auto___63817 < len__4864__auto___63816)){
args__4870__auto__.push((arguments[i__4865__auto___63817]));

var G__63818 = (i__4865__auto___63817 + (1));
i__4865__auto___63817 = G__63818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62536 = conformed_args__60736__auto__;
var map__62536__$1 = cljs.core.__destructure_map(map__62536);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq62535){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62535));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63819 = arguments.length;
var i__4865__auto___63820 = (0);
while(true){
if((i__4865__auto___63820 < len__4864__auto___63819)){
args__4870__auto__.push((arguments[i__4865__auto___63820]));

var G__63821 = (i__4865__auto___63820 + (1));
i__4865__auto___63820 = G__63821;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62554 = conformed_args__60736__auto__;
var map__62554__$1 = cljs.core.__destructure_map(map__62554);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq62547){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63822 = arguments.length;
var i__4865__auto___63823 = (0);
while(true){
if((i__4865__auto___63823 < len__4864__auto___63822)){
args__4870__auto__.push((arguments[i__4865__auto___63823]));

var G__63824 = (i__4865__auto___63823 + (1));
i__4865__auto___63823 = G__63824;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62564 = conformed_args__60736__auto__;
var map__62564__$1 = cljs.core.__destructure_map(map__62564);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq62560){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63825 = arguments.length;
var i__4865__auto___63826 = (0);
while(true){
if((i__4865__auto___63826 < len__4864__auto___63825)){
args__4870__auto__.push((arguments[i__4865__auto___63826]));

var G__63831 = (i__4865__auto___63826 + (1));
i__4865__auto___63826 = G__63831;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62570 = conformed_args__60736__auto__;
var map__62570__$1 = cljs.core.__destructure_map(map__62570);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq62569){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63836 = arguments.length;
var i__4865__auto___63837 = (0);
while(true){
if((i__4865__auto___63837 < len__4864__auto___63836)){
args__4870__auto__.push((arguments[i__4865__auto___63837]));

var G__63838 = (i__4865__auto___63837 + (1));
i__4865__auto___63837 = G__63838;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62572 = conformed_args__60736__auto__;
var map__62572__$1 = cljs.core.__destructure_map(map__62572);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq62571){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62571));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63846 = arguments.length;
var i__4865__auto___63847 = (0);
while(true){
if((i__4865__auto___63847 < len__4864__auto___63846)){
args__4870__auto__.push((arguments[i__4865__auto___63847]));

var G__63848 = (i__4865__auto___63847 + (1));
i__4865__auto___63847 = G__63848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62580 = conformed_args__60736__auto__;
var map__62580__$1 = cljs.core.__destructure_map(map__62580);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq62579){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63856 = arguments.length;
var i__4865__auto___63857 = (0);
while(true){
if((i__4865__auto___63857 < len__4864__auto___63856)){
args__4870__auto__.push((arguments[i__4865__auto___63857]));

var G__63858 = (i__4865__auto___63857 + (1));
i__4865__auto___63857 = G__63858;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62584 = conformed_args__60736__auto__;
var map__62584__$1 = cljs.core.__destructure_map(map__62584);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq62583){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63866 = arguments.length;
var i__4865__auto___63867 = (0);
while(true){
if((i__4865__auto___63867 < len__4864__auto___63866)){
args__4870__auto__.push((arguments[i__4865__auto___63867]));

var G__63868 = (i__4865__auto___63867 + (1));
i__4865__auto___63867 = G__63868;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62607 = conformed_args__60736__auto__;
var map__62607__$1 = cljs.core.__destructure_map(map__62607);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq62593){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63876 = arguments.length;
var i__4865__auto___63877 = (0);
while(true){
if((i__4865__auto___63877 < len__4864__auto___63876)){
args__4870__auto__.push((arguments[i__4865__auto___63877]));

var G__63878 = (i__4865__auto___63877 + (1));
i__4865__auto___63877 = G__63878;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62609 = conformed_args__60736__auto__;
var map__62609__$1 = cljs.core.__destructure_map(map__62609);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq62608){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62608));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63879 = arguments.length;
var i__4865__auto___63880 = (0);
while(true){
if((i__4865__auto___63880 < len__4864__auto___63879)){
args__4870__auto__.push((arguments[i__4865__auto___63880]));

var G__63881 = (i__4865__auto___63880 + (1));
i__4865__auto___63880 = G__63881;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62617 = conformed_args__60736__auto__;
var map__62617__$1 = cljs.core.__destructure_map(map__62617);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq62616){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62616));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63882 = arguments.length;
var i__4865__auto___63883 = (0);
while(true){
if((i__4865__auto___63883 < len__4864__auto___63882)){
args__4870__auto__.push((arguments[i__4865__auto___63883]));

var G__63884 = (i__4865__auto___63883 + (1));
i__4865__auto___63883 = G__63884;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62625 = conformed_args__60736__auto__;
var map__62625__$1 = cljs.core.__destructure_map(map__62625);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq62624){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63885 = arguments.length;
var i__4865__auto___63886 = (0);
while(true){
if((i__4865__auto___63886 < len__4864__auto___63885)){
args__4870__auto__.push((arguments[i__4865__auto___63886]));

var G__63887 = (i__4865__auto___63886 + (1));
i__4865__auto___63886 = G__63887;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62633 = conformed_args__60736__auto__;
var map__62633__$1 = cljs.core.__destructure_map(map__62633);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq62632){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63888 = arguments.length;
var i__4865__auto___63889 = (0);
while(true){
if((i__4865__auto___63889 < len__4864__auto___63888)){
args__4870__auto__.push((arguments[i__4865__auto___63889]));

var G__63890 = (i__4865__auto___63889 + (1));
i__4865__auto___63889 = G__63890;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62635 = conformed_args__60736__auto__;
var map__62635__$1 = cljs.core.__destructure_map(map__62635);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq62634){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62634));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63891 = arguments.length;
var i__4865__auto___63892 = (0);
while(true){
if((i__4865__auto___63892 < len__4864__auto___63891)){
args__4870__auto__.push((arguments[i__4865__auto___63892]));

var G__63893 = (i__4865__auto___63892 + (1));
i__4865__auto___63892 = G__63893;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62642 = conformed_args__60736__auto__;
var map__62642__$1 = cljs.core.__destructure_map(map__62642);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq62641){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63894 = arguments.length;
var i__4865__auto___63895 = (0);
while(true){
if((i__4865__auto___63895 < len__4864__auto___63894)){
args__4870__auto__.push((arguments[i__4865__auto___63895]));

var G__63896 = (i__4865__auto___63895 + (1));
i__4865__auto___63895 = G__63896;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62648 = conformed_args__60736__auto__;
var map__62648__$1 = cljs.core.__destructure_map(map__62648);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq62645){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63897 = arguments.length;
var i__4865__auto___63898 = (0);
while(true){
if((i__4865__auto___63898 < len__4864__auto___63897)){
args__4870__auto__.push((arguments[i__4865__auto___63898]));

var G__63899 = (i__4865__auto___63898 + (1));
i__4865__auto___63898 = G__63899;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62651 = conformed_args__60736__auto__;
var map__62651__$1 = cljs.core.__destructure_map(map__62651);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq62649){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63900 = arguments.length;
var i__4865__auto___63901 = (0);
while(true){
if((i__4865__auto___63901 < len__4864__auto___63900)){
args__4870__auto__.push((arguments[i__4865__auto___63901]));

var G__63902 = (i__4865__auto___63901 + (1));
i__4865__auto___63901 = G__63902;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62654 = conformed_args__60736__auto__;
var map__62654__$1 = cljs.core.__destructure_map(map__62654);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq62653){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63904 = arguments.length;
var i__4865__auto___63905 = (0);
while(true){
if((i__4865__auto___63905 < len__4864__auto___63904)){
args__4870__auto__.push((arguments[i__4865__auto___63905]));

var G__63907 = (i__4865__auto___63905 + (1));
i__4865__auto___63905 = G__63907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62658 = conformed_args__60736__auto__;
var map__62658__$1 = cljs.core.__destructure_map(map__62658);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq62656){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63910 = arguments.length;
var i__4865__auto___63911 = (0);
while(true){
if((i__4865__auto___63911 < len__4864__auto___63910)){
args__4870__auto__.push((arguments[i__4865__auto___63911]));

var G__63912 = (i__4865__auto___63911 + (1));
i__4865__auto___63911 = G__63912;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62663 = conformed_args__60736__auto__;
var map__62663__$1 = cljs.core.__destructure_map(map__62663);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62662){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62662));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63913 = arguments.length;
var i__4865__auto___63914 = (0);
while(true){
if((i__4865__auto___63914 < len__4864__auto___63913)){
args__4870__auto__.push((arguments[i__4865__auto___63914]));

var G__63915 = (i__4865__auto___63914 + (1));
i__4865__auto___63914 = G__63915;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62678 = conformed_args__60736__auto__;
var map__62678__$1 = cljs.core.__destructure_map(map__62678);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq62674){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63917 = arguments.length;
var i__4865__auto___63918 = (0);
while(true){
if((i__4865__auto___63918 < len__4864__auto___63917)){
args__4870__auto__.push((arguments[i__4865__auto___63918]));

var G__63919 = (i__4865__auto___63918 + (1));
i__4865__auto___63918 = G__63919;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62687 = conformed_args__60736__auto__;
var map__62687__$1 = cljs.core.__destructure_map(map__62687);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq62684){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63920 = arguments.length;
var i__4865__auto___63921 = (0);
while(true){
if((i__4865__auto___63921 < len__4864__auto___63920)){
args__4870__auto__.push((arguments[i__4865__auto___63921]));

var G__63922 = (i__4865__auto___63921 + (1));
i__4865__auto___63921 = G__63922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62691 = conformed_args__60736__auto__;
var map__62691__$1 = cljs.core.__destructure_map(map__62691);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq62688){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62688));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63923 = arguments.length;
var i__4865__auto___63924 = (0);
while(true){
if((i__4865__auto___63924 < len__4864__auto___63923)){
args__4870__auto__.push((arguments[i__4865__auto___63924]));

var G__63925 = (i__4865__auto___63924 + (1));
i__4865__auto___63924 = G__63925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62693 = conformed_args__60736__auto__;
var map__62693__$1 = cljs.core.__destructure_map(map__62693);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq62692){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63928 = arguments.length;
var i__4865__auto___63929 = (0);
while(true){
if((i__4865__auto___63929 < len__4864__auto___63928)){
args__4870__auto__.push((arguments[i__4865__auto___63929]));

var G__63930 = (i__4865__auto___63929 + (1));
i__4865__auto___63929 = G__63930;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62695 = conformed_args__60736__auto__;
var map__62695__$1 = cljs.core.__destructure_map(map__62695);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq62694){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62694));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63931 = arguments.length;
var i__4865__auto___63932 = (0);
while(true){
if((i__4865__auto___63932 < len__4864__auto___63931)){
args__4870__auto__.push((arguments[i__4865__auto___63932]));

var G__63933 = (i__4865__auto___63932 + (1));
i__4865__auto___63932 = G__63933;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62701 = conformed_args__60736__auto__;
var map__62701__$1 = cljs.core.__destructure_map(map__62701);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62700){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63934 = arguments.length;
var i__4865__auto___63935 = (0);
while(true){
if((i__4865__auto___63935 < len__4864__auto___63934)){
args__4870__auto__.push((arguments[i__4865__auto___63935]));

var G__63936 = (i__4865__auto___63935 + (1));
i__4865__auto___63935 = G__63936;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62708 = conformed_args__60736__auto__;
var map__62708__$1 = cljs.core.__destructure_map(map__62708);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq62706){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63939 = arguments.length;
var i__4865__auto___63940 = (0);
while(true){
if((i__4865__auto___63940 < len__4864__auto___63939)){
args__4870__auto__.push((arguments[i__4865__auto___63940]));

var G__63941 = (i__4865__auto___63940 + (1));
i__4865__auto___63940 = G__63941;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62715 = conformed_args__60736__auto__;
var map__62715__$1 = cljs.core.__destructure_map(map__62715);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq62714){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63994 = arguments.length;
var i__4865__auto___63995 = (0);
while(true){
if((i__4865__auto___63995 < len__4864__auto___63994)){
args__4870__auto__.push((arguments[i__4865__auto___63995]));

var G__63996 = (i__4865__auto___63995 + (1));
i__4865__auto___63995 = G__63996;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62717 = conformed_args__60736__auto__;
var map__62717__$1 = cljs.core.__destructure_map(map__62717);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq62716){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63998 = arguments.length;
var i__4865__auto___63999 = (0);
while(true){
if((i__4865__auto___63999 < len__4864__auto___63998)){
args__4870__auto__.push((arguments[i__4865__auto___63999]));

var G__64000 = (i__4865__auto___63999 + (1));
i__4865__auto___63999 = G__64000;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62719 = conformed_args__60736__auto__;
var map__62719__$1 = cljs.core.__destructure_map(map__62719);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq62718){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62718));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64002 = arguments.length;
var i__4865__auto___64003 = (0);
while(true){
if((i__4865__auto___64003 < len__4864__auto___64002)){
args__4870__auto__.push((arguments[i__4865__auto___64003]));

var G__64004 = (i__4865__auto___64003 + (1));
i__4865__auto___64003 = G__64004;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62725 = conformed_args__60736__auto__;
var map__62725__$1 = cljs.core.__destructure_map(map__62725);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq62724){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64015 = arguments.length;
var i__4865__auto___64016 = (0);
while(true){
if((i__4865__auto___64016 < len__4864__auto___64015)){
args__4870__auto__.push((arguments[i__4865__auto___64016]));

var G__64018 = (i__4865__auto___64016 + (1));
i__4865__auto___64016 = G__64018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62727 = conformed_args__60736__auto__;
var map__62727__$1 = cljs.core.__destructure_map(map__62727);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq62726){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64024 = arguments.length;
var i__4865__auto___64025 = (0);
while(true){
if((i__4865__auto___64025 < len__4864__auto___64024)){
args__4870__auto__.push((arguments[i__4865__auto___64025]));

var G__64026 = (i__4865__auto___64025 + (1));
i__4865__auto___64025 = G__64026;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62740 = conformed_args__60736__auto__;
var map__62740__$1 = cljs.core.__destructure_map(map__62740);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq62729){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64028 = arguments.length;
var i__4865__auto___64029 = (0);
while(true){
if((i__4865__auto___64029 < len__4864__auto___64028)){
args__4870__auto__.push((arguments[i__4865__auto___64029]));

var G__64031 = (i__4865__auto___64029 + (1));
i__4865__auto___64029 = G__64031;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62742 = conformed_args__60736__auto__;
var map__62742__$1 = cljs.core.__destructure_map(map__62742);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq62741){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64035 = arguments.length;
var i__4865__auto___64036 = (0);
while(true){
if((i__4865__auto___64036 < len__4864__auto___64035)){
args__4870__auto__.push((arguments[i__4865__auto___64036]));

var G__64056 = (i__4865__auto___64036 + (1));
i__4865__auto___64036 = G__64056;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62744 = conformed_args__60736__auto__;
var map__62744__$1 = cljs.core.__destructure_map(map__62744);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq62743){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64058 = arguments.length;
var i__4865__auto___64059 = (0);
while(true){
if((i__4865__auto___64059 < len__4864__auto___64058)){
args__4870__auto__.push((arguments[i__4865__auto___64059]));

var G__64060 = (i__4865__auto___64059 + (1));
i__4865__auto___64059 = G__64060;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62750 = conformed_args__60736__auto__;
var map__62750__$1 = cljs.core.__destructure_map(map__62750);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq62749){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64061 = arguments.length;
var i__4865__auto___64062 = (0);
while(true){
if((i__4865__auto___64062 < len__4864__auto___64061)){
args__4870__auto__.push((arguments[i__4865__auto___64062]));

var G__64063 = (i__4865__auto___64062 + (1));
i__4865__auto___64062 = G__64063;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62753 = conformed_args__60736__auto__;
var map__62753__$1 = cljs.core.__destructure_map(map__62753);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq62751){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64066 = arguments.length;
var i__4865__auto___64067 = (0);
while(true){
if((i__4865__auto___64067 < len__4864__auto___64066)){
args__4870__auto__.push((arguments[i__4865__auto___64067]));

var G__64070 = (i__4865__auto___64067 + (1));
i__4865__auto___64067 = G__64070;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62755 = conformed_args__60736__auto__;
var map__62755__$1 = cljs.core.__destructure_map(map__62755);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq62754){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64072 = arguments.length;
var i__4865__auto___64073 = (0);
while(true){
if((i__4865__auto___64073 < len__4864__auto___64072)){
args__4870__auto__.push((arguments[i__4865__auto___64073]));

var G__64074 = (i__4865__auto___64073 + (1));
i__4865__auto___64073 = G__64074;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62765 = conformed_args__60736__auto__;
var map__62765__$1 = cljs.core.__destructure_map(map__62765);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq62756){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64079 = arguments.length;
var i__4865__auto___64080 = (0);
while(true){
if((i__4865__auto___64080 < len__4864__auto___64079)){
args__4870__auto__.push((arguments[i__4865__auto___64080]));

var G__64082 = (i__4865__auto___64080 + (1));
i__4865__auto___64080 = G__64082;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62769 = conformed_args__60736__auto__;
var map__62769__$1 = cljs.core.__destructure_map(map__62769);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq62768){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64143 = arguments.length;
var i__4865__auto___64144 = (0);
while(true){
if((i__4865__auto___64144 < len__4864__auto___64143)){
args__4870__auto__.push((arguments[i__4865__auto___64144]));

var G__64145 = (i__4865__auto___64144 + (1));
i__4865__auto___64144 = G__64145;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62771 = conformed_args__60736__auto__;
var map__62771__$1 = cljs.core.__destructure_map(map__62771);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq62770){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64152 = arguments.length;
var i__4865__auto___64153 = (0);
while(true){
if((i__4865__auto___64153 < len__4864__auto___64152)){
args__4870__auto__.push((arguments[i__4865__auto___64153]));

var G__64156 = (i__4865__auto___64153 + (1));
i__4865__auto___64153 = G__64156;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62789 = conformed_args__60736__auto__;
var map__62789__$1 = cljs.core.__destructure_map(map__62789);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq62782){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62782));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64175 = arguments.length;
var i__4865__auto___64176 = (0);
while(true){
if((i__4865__auto___64176 < len__4864__auto___64175)){
args__4870__auto__.push((arguments[i__4865__auto___64176]));

var G__64180 = (i__4865__auto___64176 + (1));
i__4865__auto___64176 = G__64180;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62810 = conformed_args__60736__auto__;
var map__62810__$1 = cljs.core.__destructure_map(map__62810);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq62809){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62809));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64256 = arguments.length;
var i__4865__auto___64257 = (0);
while(true){
if((i__4865__auto___64257 < len__4864__auto___64256)){
args__4870__auto__.push((arguments[i__4865__auto___64257]));

var G__64259 = (i__4865__auto___64257 + (1));
i__4865__auto___64257 = G__64259;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62818 = conformed_args__60736__auto__;
var map__62818__$1 = cljs.core.__destructure_map(map__62818);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq62811){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62811));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64283 = arguments.length;
var i__4865__auto___64284 = (0);
while(true){
if((i__4865__auto___64284 < len__4864__auto___64283)){
args__4870__auto__.push((arguments[i__4865__auto___64284]));

var G__64285 = (i__4865__auto___64284 + (1));
i__4865__auto___64284 = G__64285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62820 = conformed_args__60736__auto__;
var map__62820__$1 = cljs.core.__destructure_map(map__62820);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq62819){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64287 = arguments.length;
var i__4865__auto___64288 = (0);
while(true){
if((i__4865__auto___64288 < len__4864__auto___64287)){
args__4870__auto__.push((arguments[i__4865__auto___64288]));

var G__64289 = (i__4865__auto___64288 + (1));
i__4865__auto___64288 = G__64289;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62822 = conformed_args__60736__auto__;
var map__62822__$1 = cljs.core.__destructure_map(map__62822);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq62821){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64312 = arguments.length;
var i__4865__auto___64313 = (0);
while(true){
if((i__4865__auto___64313 < len__4864__auto___64312)){
args__4870__auto__.push((arguments[i__4865__auto___64313]));

var G__64317 = (i__4865__auto___64313 + (1));
i__4865__auto___64313 = G__64317;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62830 = conformed_args__60736__auto__;
var map__62830__$1 = cljs.core.__destructure_map(map__62830);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq62823){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64326 = arguments.length;
var i__4865__auto___64327 = (0);
while(true){
if((i__4865__auto___64327 < len__4864__auto___64326)){
args__4870__auto__.push((arguments[i__4865__auto___64327]));

var G__64329 = (i__4865__auto___64327 + (1));
i__4865__auto___64327 = G__64329;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62832 = conformed_args__60736__auto__;
var map__62832__$1 = cljs.core.__destructure_map(map__62832);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq62831){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62831));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64330 = arguments.length;
var i__4865__auto___64331 = (0);
while(true){
if((i__4865__auto___64331 < len__4864__auto___64330)){
args__4870__auto__.push((arguments[i__4865__auto___64331]));

var G__64379 = (i__4865__auto___64331 + (1));
i__4865__auto___64331 = G__64379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62840 = conformed_args__60736__auto__;
var map__62840__$1 = cljs.core.__destructure_map(map__62840);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq62833){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64380 = arguments.length;
var i__4865__auto___64381 = (0);
while(true){
if((i__4865__auto___64381 < len__4864__auto___64380)){
args__4870__auto__.push((arguments[i__4865__auto___64381]));

var G__64382 = (i__4865__auto___64381 + (1));
i__4865__auto___64381 = G__64382;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62842 = conformed_args__60736__auto__;
var map__62842__$1 = cljs.core.__destructure_map(map__62842);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq62841){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64383 = arguments.length;
var i__4865__auto___64384 = (0);
while(true){
if((i__4865__auto___64384 < len__4864__auto___64383)){
args__4870__auto__.push((arguments[i__4865__auto___64384]));

var G__64385 = (i__4865__auto___64384 + (1));
i__4865__auto___64384 = G__64385;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62846 = conformed_args__60736__auto__;
var map__62846__$1 = cljs.core.__destructure_map(map__62846);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq62845){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64386 = arguments.length;
var i__4865__auto___64387 = (0);
while(true){
if((i__4865__auto___64387 < len__4864__auto___64386)){
args__4870__auto__.push((arguments[i__4865__auto___64387]));

var G__64388 = (i__4865__auto___64387 + (1));
i__4865__auto___64387 = G__64388;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62850 = conformed_args__60736__auto__;
var map__62850__$1 = cljs.core.__destructure_map(map__62850);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq62849){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64389 = arguments.length;
var i__4865__auto___64390 = (0);
while(true){
if((i__4865__auto___64390 < len__4864__auto___64389)){
args__4870__auto__.push((arguments[i__4865__auto___64390]));

var G__64391 = (i__4865__auto___64390 + (1));
i__4865__auto___64390 = G__64391;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62863 = conformed_args__60736__auto__;
var map__62863__$1 = cljs.core.__destructure_map(map__62863);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq62857){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64392 = arguments.length;
var i__4865__auto___64393 = (0);
while(true){
if((i__4865__auto___64393 < len__4864__auto___64392)){
args__4870__auto__.push((arguments[i__4865__auto___64393]));

var G__64394 = (i__4865__auto___64393 + (1));
i__4865__auto___64393 = G__64394;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62866 = conformed_args__60736__auto__;
var map__62866__$1 = cljs.core.__destructure_map(map__62866);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq62865){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64395 = arguments.length;
var i__4865__auto___64396 = (0);
while(true){
if((i__4865__auto___64396 < len__4864__auto___64395)){
args__4870__auto__.push((arguments[i__4865__auto___64396]));

var G__64397 = (i__4865__auto___64396 + (1));
i__4865__auto___64396 = G__64397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62870 = conformed_args__60736__auto__;
var map__62870__$1 = cljs.core.__destructure_map(map__62870);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq62867){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64398 = arguments.length;
var i__4865__auto___64399 = (0);
while(true){
if((i__4865__auto___64399 < len__4864__auto___64398)){
args__4870__auto__.push((arguments[i__4865__auto___64399]));

var G__64400 = (i__4865__auto___64399 + (1));
i__4865__auto___64399 = G__64400;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62873 = conformed_args__60736__auto__;
var map__62873__$1 = cljs.core.__destructure_map(map__62873);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62873__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62873__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq62871){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62871));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64401 = arguments.length;
var i__4865__auto___64402 = (0);
while(true){
if((i__4865__auto___64402 < len__4864__auto___64401)){
args__4870__auto__.push((arguments[i__4865__auto___64402]));

var G__64403 = (i__4865__auto___64402 + (1));
i__4865__auto___64402 = G__64403;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62880 = conformed_args__60736__auto__;
var map__62880__$1 = cljs.core.__destructure_map(map__62880);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq62877){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62877));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64404 = arguments.length;
var i__4865__auto___64405 = (0);
while(true){
if((i__4865__auto___64405 < len__4864__auto___64404)){
args__4870__auto__.push((arguments[i__4865__auto___64405]));

var G__64406 = (i__4865__auto___64405 + (1));
i__4865__auto___64405 = G__64406;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62883 = conformed_args__60736__auto__;
var map__62883__$1 = cljs.core.__destructure_map(map__62883);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq62881){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64407 = arguments.length;
var i__4865__auto___64408 = (0);
while(true){
if((i__4865__auto___64408 < len__4864__auto___64407)){
args__4870__auto__.push((arguments[i__4865__auto___64408]));

var G__64409 = (i__4865__auto___64408 + (1));
i__4865__auto___64408 = G__64409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62907 = conformed_args__60736__auto__;
var map__62907__$1 = cljs.core.__destructure_map(map__62907);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq62898){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64411 = arguments.length;
var i__4865__auto___64412 = (0);
while(true){
if((i__4865__auto___64412 < len__4864__auto___64411)){
args__4870__auto__.push((arguments[i__4865__auto___64412]));

var G__64413 = (i__4865__auto___64412 + (1));
i__4865__auto___64412 = G__64413;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62930 = conformed_args__60736__auto__;
var map__62930__$1 = cljs.core.__destructure_map(map__62930);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq62927){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62927));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64414 = arguments.length;
var i__4865__auto___64415 = (0);
while(true){
if((i__4865__auto___64415 < len__4864__auto___64414)){
args__4870__auto__.push((arguments[i__4865__auto___64415]));

var G__64416 = (i__4865__auto___64415 + (1));
i__4865__auto___64415 = G__64416;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62933 = conformed_args__60736__auto__;
var map__62933__$1 = cljs.core.__destructure_map(map__62933);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq62931){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64421 = arguments.length;
var i__4865__auto___64422 = (0);
while(true){
if((i__4865__auto___64422 < len__4864__auto___64421)){
args__4870__auto__.push((arguments[i__4865__auto___64422]));

var G__64423 = (i__4865__auto___64422 + (1));
i__4865__auto___64422 = G__64423;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62938 = conformed_args__60736__auto__;
var map__62938__$1 = cljs.core.__destructure_map(map__62938);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq62934){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64424 = arguments.length;
var i__4865__auto___64425 = (0);
while(true){
if((i__4865__auto___64425 < len__4864__auto___64424)){
args__4870__auto__.push((arguments[i__4865__auto___64425]));

var G__64426 = (i__4865__auto___64425 + (1));
i__4865__auto___64425 = G__64426;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60736__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62941 = conformed_args__60736__auto__;
var map__62941__$1 = cljs.core.__destructure_map(map__62941);
var children__60738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__60737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60738__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60738__auto__);
var attrs_value__60740__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__60737__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60740__auto__], null),children__60738__auto____$1),css__60739__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq62940){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62940));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
