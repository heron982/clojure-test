goog.provide('app.ui');

var options__45784__auto___48985 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_HelloComponent(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "a", "id": "id", "style": ({"color": "red"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Hello World"]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.HelloComponent !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.HelloComponent = (function app$ui$HelloComponent(props__45785__auto__){
var this__45786__auto__ = this;
var temp__5751__auto___48986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45784__auto___48985,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___48986)){
var init_state__45787__auto___48987 = temp__5751__auto___48986;
(this__45786__auto__.state = (function (){var obj48966 = ({"fulcro$state":(function (){var G__48967 = this__45786__auto__;
var G__48968 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45785__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45785__auto__,"fulcro$value"));
return (init_state__45787__auto___48987.cljs$core$IFn$_invoke$arity$2 ? init_state__45787__auto___48987.cljs$core$IFn$_invoke$arity$2(G__48967,G__48968) : init_state__45787__auto___48987.call(null,G__48967,G__48968));
})()});
return obj48966;
})());
} else {
(this__45786__auto__.state = (function (){var obj48970 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48970;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.HelloComponent,new cljs.core.Keyword("app.ui","HelloComponent","app.ui/HelloComponent",497620809),options__45784__auto___48985);

var options__45784__auto___48988 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PropPerson(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48971 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__48971__$1 = cljs.core.__destructure_map(map__48971);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Test: ",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Age: ",com.fulcrologic.fulcro.components.force_children(age)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PropPerson !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PropPerson = (function app$ui$PropPerson(props__45785__auto__){
var this__45786__auto__ = this;
var temp__5751__auto___48989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45784__auto___48988,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___48989)){
var init_state__45787__auto___48990 = temp__5751__auto___48989;
(this__45786__auto__.state = (function (){var obj48973 = ({"fulcro$state":(function (){var G__48974 = this__45786__auto__;
var G__48975 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45785__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45785__auto__,"fulcro$value"));
return (init_state__45787__auto___48990.cljs$core$IFn$_invoke$arity$2 ? init_state__45787__auto___48990.cljs$core$IFn$_invoke$arity$2(G__48974,G__48975) : init_state__45787__auto___48990.call(null,G__48974,G__48975));
})()});
return obj48973;
})());
} else {
(this__45786__auto__.state = (function (){var obj48977 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48977;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PropPerson,new cljs.core.Keyword("app.ui","PropPerson","app.ui/PropPerson",-56028383),options__45784__auto___48988);
app.ui.ui_hello = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.HelloComponent);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PropPerson);

var options__45784__auto___48991 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"TODO",com.fulcrologic.fulcro.components.force_children((function (){var G__48978 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null);
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$1(G__48978) : app.ui.ui_person.call(null,G__48978));
})())]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__45785__auto__){
var this__45786__auto__ = this;
var temp__5751__auto___48992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45784__auto___48991,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___48992)){
var init_state__45787__auto___48993 = temp__5751__auto___48992;
(this__45786__auto__.state = (function (){var obj48980 = ({"fulcro$state":(function (){var G__48981 = this__45786__auto__;
var G__48982 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45785__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45785__auto__,"fulcro$value"));
return (init_state__45787__auto___48993.cljs$core$IFn$_invoke$arity$2 ? init_state__45787__auto___48993.cljs$core$IFn$_invoke$arity$2(G__48981,G__48982) : init_state__45787__auto___48993.call(null,G__48981,G__48982));
})()});
return obj48980;
})());
} else {
(this__45786__auto__.state = (function (){var obj48984 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48984;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45784__auto___48991);

//# sourceMappingURL=app.ui.js.map
