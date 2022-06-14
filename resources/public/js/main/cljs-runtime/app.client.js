goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__56925__auto___62408 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Hello World"]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = (function app$client$Root(props__56926__auto__){
var this__56927__auto__ = this;
var temp__5751__auto___62410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56925__auto___62408,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___62410)){
var init_state__56928__auto___62411 = temp__5751__auto___62410;
(this__56927__auto__.state = (function (){var obj62399 = ({"fulcro$state":(function (){var G__62401 = this__56927__auto__;
var G__62402 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__56926__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__56926__auto__,"fulcro$value"));
return (init_state__56928__auto___62411.cljs$core$IFn$_invoke$arity$2 ? init_state__56928__auto___62411.cljs$core$IFn$_invoke$arity$2(G__62401,G__62402) : init_state__56928__auto___62411.call(null,G__62401,G__62402));
})()});
return obj62399;
})());
} else {
(this__56927__auto__.state = (function (){var obj62404 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj62404;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__56925__auto___62408);
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.client.app);

return console.log("Hot Reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
