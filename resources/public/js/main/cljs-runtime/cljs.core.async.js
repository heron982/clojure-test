goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51511 = arguments.length;
switch (G__51511) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51516 = (function (f,blockable,meta51517){
this.f = f;
this.blockable = blockable;
this.meta51517 = meta51517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51518,meta51517__$1){
var self__ = this;
var _51518__$1 = this;
return (new cljs.core.async.t_cljs$core$async51516(self__.f,self__.blockable,meta51517__$1));
}));

(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51518){
var self__ = this;
var _51518__$1 = this;
return self__.meta51517;
}));

(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51517","meta51517",1112095836,null)], null);
}));

(cljs.core.async.t_cljs$core$async51516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51516");

(cljs.core.async.t_cljs$core$async51516.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51516.
 */
cljs.core.async.__GT_t_cljs$core$async51516 = (function cljs$core$async$__GT_t_cljs$core$async51516(f__$1,blockable__$1,meta51517){
return (new cljs.core.async.t_cljs$core$async51516(f__$1,blockable__$1,meta51517));
});

}

return (new cljs.core.async.t_cljs$core$async51516(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51539 = arguments.length;
switch (G__51539) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51555 = arguments.length;
switch (G__51555) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51569 = arguments.length;
switch (G__51569) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53381 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53381) : fn1.call(null,val_53381));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53381) : fn1.call(null,val_53381));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51579 = arguments.length;
switch (G__51579) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___53390 = n;
var x_53391 = (0);
while(true){
if((x_53391 < n__4741__auto___53390)){
(a[x_53391] = x_53391);

var G__53392 = (x_53391 + (1));
x_53391 = G__53392;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51587 = (function (flag,meta51588){
this.flag = flag;
this.meta51588 = meta51588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51589,meta51588__$1){
var self__ = this;
var _51589__$1 = this;
return (new cljs.core.async.t_cljs$core$async51587(self__.flag,meta51588__$1));
}));

(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51589){
var self__ = this;
var _51589__$1 = this;
return self__.meta51588;
}));

(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51588","meta51588",1321477659,null)], null);
}));

(cljs.core.async.t_cljs$core$async51587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51587");

(cljs.core.async.t_cljs$core$async51587.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51587.
 */
cljs.core.async.__GT_t_cljs$core$async51587 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51587(flag__$1,meta51588){
return (new cljs.core.async.t_cljs$core$async51587(flag__$1,meta51588));
});

}

return (new cljs.core.async.t_cljs$core$async51587(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51597 = (function (flag,cb,meta51598){
this.flag = flag;
this.cb = cb;
this.meta51598 = meta51598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51599,meta51598__$1){
var self__ = this;
var _51599__$1 = this;
return (new cljs.core.async.t_cljs$core$async51597(self__.flag,self__.cb,meta51598__$1));
}));

(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51599){
var self__ = this;
var _51599__$1 = this;
return self__.meta51598;
}));

(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51598","meta51598",755926937,null)], null);
}));

(cljs.core.async.t_cljs$core$async51597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51597");

(cljs.core.async.t_cljs$core$async51597.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51597.
 */
cljs.core.async.__GT_t_cljs$core$async51597 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51597(flag__$1,cb__$1,meta51598){
return (new cljs.core.async.t_cljs$core$async51597(flag__$1,cb__$1,meta51598));
});

}

return (new cljs.core.async.t_cljs$core$async51597(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51612_SHARP_){
var G__51614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51612_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51614) : fret.call(null,G__51614));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51613_SHARP_){
var G__51615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51613_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51615) : fret.call(null,G__51615));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53402 = (i + (1));
i = G__53402;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53405 = arguments.length;
var i__4865__auto___53406 = (0);
while(true){
if((i__4865__auto___53406 < len__4864__auto___53405)){
args__4870__auto__.push((arguments[i__4865__auto___53406]));

var G__53408 = (i__4865__auto___53406 + (1));
i__4865__auto___53406 = G__53408;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51618){
var map__51619 = p__51618;
var map__51619__$1 = cljs.core.__destructure_map(map__51619);
var opts = map__51619__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51616){
var G__51617 = cljs.core.first(seq51616);
var seq51616__$1 = cljs.core.next(seq51616);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51617,seq51616__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51621 = arguments.length;
switch (G__51621) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51411__auto___53413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_51655){
var state_val_51656 = (state_51655[(1)]);
if((state_val_51656 === (7))){
var inst_51651 = (state_51655[(2)]);
var state_51655__$1 = state_51655;
var statearr_51664_53414 = state_51655__$1;
(statearr_51664_53414[(2)] = inst_51651);

(statearr_51664_53414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (1))){
var state_51655__$1 = state_51655;
var statearr_51665_53415 = state_51655__$1;
(statearr_51665_53415[(2)] = null);

(statearr_51665_53415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (4))){
var inst_51625 = (state_51655[(7)]);
var inst_51625__$1 = (state_51655[(2)]);
var inst_51626 = (inst_51625__$1 == null);
var state_51655__$1 = (function (){var statearr_51666 = state_51655;
(statearr_51666[(7)] = inst_51625__$1);

return statearr_51666;
})();
if(cljs.core.truth_(inst_51626)){
var statearr_51667_53418 = state_51655__$1;
(statearr_51667_53418[(1)] = (5));

} else {
var statearr_51668_53419 = state_51655__$1;
(statearr_51668_53419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (13))){
var state_51655__$1 = state_51655;
var statearr_51671_53420 = state_51655__$1;
(statearr_51671_53420[(2)] = null);

(statearr_51671_53420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (6))){
var inst_51625 = (state_51655[(7)]);
var state_51655__$1 = state_51655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51655__$1,(11),to,inst_51625);
} else {
if((state_val_51656 === (3))){
var inst_51653 = (state_51655[(2)]);
var state_51655__$1 = state_51655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51655__$1,inst_51653);
} else {
if((state_val_51656 === (12))){
var state_51655__$1 = state_51655;
var statearr_51672_53424 = state_51655__$1;
(statearr_51672_53424[(2)] = null);

(statearr_51672_53424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (2))){
var state_51655__$1 = state_51655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51655__$1,(4),from);
} else {
if((state_val_51656 === (11))){
var inst_51644 = (state_51655[(2)]);
var state_51655__$1 = state_51655;
if(cljs.core.truth_(inst_51644)){
var statearr_51673_53426 = state_51655__$1;
(statearr_51673_53426[(1)] = (12));

} else {
var statearr_51674_53427 = state_51655__$1;
(statearr_51674_53427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (9))){
var state_51655__$1 = state_51655;
var statearr_51679_53428 = state_51655__$1;
(statearr_51679_53428[(2)] = null);

(statearr_51679_53428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (5))){
var state_51655__$1 = state_51655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51680_53429 = state_51655__$1;
(statearr_51680_53429[(1)] = (8));

} else {
var statearr_51690_53430 = state_51655__$1;
(statearr_51690_53430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (14))){
var inst_51649 = (state_51655[(2)]);
var state_51655__$1 = state_51655;
var statearr_51691_53431 = state_51655__$1;
(statearr_51691_53431[(2)] = inst_51649);

(statearr_51691_53431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (10))){
var inst_51641 = (state_51655[(2)]);
var state_51655__$1 = state_51655;
var statearr_51692_53432 = state_51655__$1;
(statearr_51692_53432[(2)] = inst_51641);

(statearr_51692_53432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51656 === (8))){
var inst_51638 = cljs.core.async.close_BANG_(to);
var state_51655__$1 = state_51655;
var statearr_51693_53433 = state_51655__$1;
(statearr_51693_53433[(2)] = inst_51638);

(statearr_51693_53433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_51694 = [null,null,null,null,null,null,null,null];
(statearr_51694[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_51694[(1)] = (1));

return statearr_51694;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_51655){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51655);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51695){var ex__51346__auto__ = e51695;
var statearr_51696_53436 = state_51655;
(statearr_51696_53436[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51655[(4)]))){
var statearr_51697_53438 = state_51655;
(statearr_51697_53438[(1)] = cljs.core.first((state_51655[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53440 = state_51655;
state_51655 = G__53440;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_51655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_51655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_51698 = f__51412__auto__();
(statearr_51698[(6)] = c__51411__auto___53413);

return statearr_51698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__51699){
var vec__51700 = p__51699;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51700,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51700,(1),null);
var job = vec__51700;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51411__auto___53444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_51709){
var state_val_51710 = (state_51709[(1)]);
if((state_val_51710 === (1))){
var state_51709__$1 = state_51709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51709__$1,(2),res,v);
} else {
if((state_val_51710 === (2))){
var inst_51706 = (state_51709[(2)]);
var inst_51707 = cljs.core.async.close_BANG_(res);
var state_51709__$1 = (function (){var statearr_51713 = state_51709;
(statearr_51713[(7)] = inst_51706);

return statearr_51713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51709__$1,inst_51707);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51714 = [null,null,null,null,null,null,null,null];
(statearr_51714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51714[(1)] = (1));

return statearr_51714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51709){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51709);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51715){var ex__51346__auto__ = e51715;
var statearr_51716_53449 = state_51709;
(statearr_51716_53449[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51709[(4)]))){
var statearr_51717_53450 = state_51709;
(statearr_51717_53450[(1)] = cljs.core.first((state_51709[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53452 = state_51709;
state_51709 = G__53452;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_51718 = f__51412__auto__();
(statearr_51718[(6)] = c__51411__auto___53444);

return statearr_51718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51719){
var vec__51721 = p__51719;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51721,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51721,(1),null);
var job = vec__51721;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___53454 = n;
var __53455 = (0);
while(true){
if((__53455 < n__4741__auto___53454)){
var G__51724_53457 = type;
var G__51724_53458__$1 = (((G__51724_53457 instanceof cljs.core.Keyword))?G__51724_53457.fqn:null);
switch (G__51724_53458__$1) {
case "compute":
var c__51411__auto___53461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53455,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = ((function (__53455,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function (state_51737){
var state_val_51738 = (state_51737[(1)]);
if((state_val_51738 === (1))){
var state_51737__$1 = state_51737;
var statearr_51744_53463 = state_51737__$1;
(statearr_51744_53463[(2)] = null);

(statearr_51744_53463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (2))){
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(4),jobs);
} else {
if((state_val_51738 === (3))){
var inst_51735 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51737__$1,inst_51735);
} else {
if((state_val_51738 === (4))){
var inst_51727 = (state_51737[(2)]);
var inst_51728 = process(inst_51727);
var state_51737__$1 = state_51737;
if(cljs.core.truth_(inst_51728)){
var statearr_51745_53467 = state_51737__$1;
(statearr_51745_53467[(1)] = (5));

} else {
var statearr_51746_53468 = state_51737__$1;
(statearr_51746_53468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (5))){
var state_51737__$1 = state_51737;
var statearr_51747_53469 = state_51737__$1;
(statearr_51747_53469[(2)] = null);

(statearr_51747_53469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (6))){
var state_51737__$1 = state_51737;
var statearr_51748_53470 = state_51737__$1;
(statearr_51748_53470[(2)] = null);

(statearr_51748_53470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (7))){
var inst_51733 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51749_53472 = state_51737__$1;
(statearr_51749_53472[(2)] = inst_51733);

(statearr_51749_53472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53455,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
;
return ((function (__53455,switch__51342__auto__,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51750 = [null,null,null,null,null,null,null];
(statearr_51750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51750[(1)] = (1));

return statearr_51750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51737){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51737);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51751){var ex__51346__auto__ = e51751;
var statearr_51752_53475 = state_51737;
(statearr_51752_53475[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51737[(4)]))){
var statearr_51753_53476 = state_51737;
(statearr_51753_53476[(1)] = cljs.core.first((state_51737[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53478 = state_51737;
state_51737 = G__53478;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
;})(__53455,switch__51342__auto__,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
})();
var state__51413__auto__ = (function (){var statearr_51754 = f__51412__auto__();
(statearr_51754[(6)] = c__51411__auto___53461);

return statearr_51754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
});})(__53455,c__51411__auto___53461,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
);


break;
case "async":
var c__51411__auto___53481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53455,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = ((function (__53455,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function (state_51767){
var state_val_51768 = (state_51767[(1)]);
if((state_val_51768 === (1))){
var state_51767__$1 = state_51767;
var statearr_51769_53482 = state_51767__$1;
(statearr_51769_53482[(2)] = null);

(statearr_51769_53482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51768 === (2))){
var state_51767__$1 = state_51767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51767__$1,(4),jobs);
} else {
if((state_val_51768 === (3))){
var inst_51765 = (state_51767[(2)]);
var state_51767__$1 = state_51767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51767__$1,inst_51765);
} else {
if((state_val_51768 === (4))){
var inst_51757 = (state_51767[(2)]);
var inst_51758 = async(inst_51757);
var state_51767__$1 = state_51767;
if(cljs.core.truth_(inst_51758)){
var statearr_51775_53486 = state_51767__$1;
(statearr_51775_53486[(1)] = (5));

} else {
var statearr_51776_53487 = state_51767__$1;
(statearr_51776_53487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51768 === (5))){
var state_51767__$1 = state_51767;
var statearr_51777_53488 = state_51767__$1;
(statearr_51777_53488[(2)] = null);

(statearr_51777_53488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51768 === (6))){
var state_51767__$1 = state_51767;
var statearr_51781_53491 = state_51767__$1;
(statearr_51781_53491[(2)] = null);

(statearr_51781_53491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51768 === (7))){
var inst_51763 = (state_51767[(2)]);
var state_51767__$1 = state_51767;
var statearr_51783_53492 = state_51767__$1;
(statearr_51783_53492[(2)] = inst_51763);

(statearr_51783_53492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53455,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
;
return ((function (__53455,switch__51342__auto__,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51784 = [null,null,null,null,null,null,null];
(statearr_51784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51784[(1)] = (1));

return statearr_51784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51767){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51767);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51785){var ex__51346__auto__ = e51785;
var statearr_51786_53495 = state_51767;
(statearr_51786_53495[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51767[(4)]))){
var statearr_51787_53496 = state_51767;
(statearr_51787_53496[(1)] = cljs.core.first((state_51767[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53497 = state_51767;
state_51767 = G__53497;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
;})(__53455,switch__51342__auto__,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
})();
var state__51413__auto__ = (function (){var statearr_51788 = f__51412__auto__();
(statearr_51788[(6)] = c__51411__auto___53481);

return statearr_51788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
});})(__53455,c__51411__auto___53481,G__51724_53457,G__51724_53458__$1,n__4741__auto___53454,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51724_53458__$1)].join('')));

}

var G__53500 = (__53455 + (1));
__53455 = G__53500;
continue;
} else {
}
break;
}

var c__51411__auto___53502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_51812){
var state_val_51813 = (state_51812[(1)]);
if((state_val_51813 === (7))){
var inst_51808 = (state_51812[(2)]);
var state_51812__$1 = state_51812;
var statearr_51814_53504 = state_51812__$1;
(statearr_51814_53504[(2)] = inst_51808);

(statearr_51814_53504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (1))){
var state_51812__$1 = state_51812;
var statearr_51815_53505 = state_51812__$1;
(statearr_51815_53505[(2)] = null);

(statearr_51815_53505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (4))){
var inst_51793 = (state_51812[(7)]);
var inst_51793__$1 = (state_51812[(2)]);
var inst_51794 = (inst_51793__$1 == null);
var state_51812__$1 = (function (){var statearr_51816 = state_51812;
(statearr_51816[(7)] = inst_51793__$1);

return statearr_51816;
})();
if(cljs.core.truth_(inst_51794)){
var statearr_51817_53508 = state_51812__$1;
(statearr_51817_53508[(1)] = (5));

} else {
var statearr_51818_53509 = state_51812__$1;
(statearr_51818_53509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (6))){
var inst_51793 = (state_51812[(7)]);
var inst_51798 = (state_51812[(8)]);
var inst_51798__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51800 = [inst_51793,inst_51798__$1];
var inst_51801 = (new cljs.core.PersistentVector(null,2,(5),inst_51799,inst_51800,null));
var state_51812__$1 = (function (){var statearr_51819 = state_51812;
(statearr_51819[(8)] = inst_51798__$1);

return statearr_51819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51812__$1,(8),jobs,inst_51801);
} else {
if((state_val_51813 === (3))){
var inst_51810 = (state_51812[(2)]);
var state_51812__$1 = state_51812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51812__$1,inst_51810);
} else {
if((state_val_51813 === (2))){
var state_51812__$1 = state_51812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51812__$1,(4),from);
} else {
if((state_val_51813 === (9))){
var inst_51805 = (state_51812[(2)]);
var state_51812__$1 = (function (){var statearr_51822 = state_51812;
(statearr_51822[(9)] = inst_51805);

return statearr_51822;
})();
var statearr_51823_53513 = state_51812__$1;
(statearr_51823_53513[(2)] = null);

(statearr_51823_53513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (5))){
var inst_51796 = cljs.core.async.close_BANG_(jobs);
var state_51812__$1 = state_51812;
var statearr_51825_53515 = state_51812__$1;
(statearr_51825_53515[(2)] = inst_51796);

(statearr_51825_53515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (8))){
var inst_51798 = (state_51812[(8)]);
var inst_51803 = (state_51812[(2)]);
var state_51812__$1 = (function (){var statearr_51829 = state_51812;
(statearr_51829[(10)] = inst_51803);

return statearr_51829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51812__$1,(9),results,inst_51798);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51834[(1)] = (1));

return statearr_51834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51812){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51812);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51835){var ex__51346__auto__ = e51835;
var statearr_51836_53516 = state_51812;
(statearr_51836_53516[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51812[(4)]))){
var statearr_51838_53521 = state_51812;
(statearr_51838_53521[(1)] = cljs.core.first((state_51812[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53522 = state_51812;
state_51812 = G__53522;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_51839 = f__51412__auto__();
(statearr_51839[(6)] = c__51411__auto___53502);

return statearr_51839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


var c__51411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_51877){
var state_val_51878 = (state_51877[(1)]);
if((state_val_51878 === (7))){
var inst_51873 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51879_53524 = state_51877__$1;
(statearr_51879_53524[(2)] = inst_51873);

(statearr_51879_53524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (20))){
var state_51877__$1 = state_51877;
var statearr_51880_53525 = state_51877__$1;
(statearr_51880_53525[(2)] = null);

(statearr_51880_53525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (1))){
var state_51877__$1 = state_51877;
var statearr_51881_53526 = state_51877__$1;
(statearr_51881_53526[(2)] = null);

(statearr_51881_53526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (4))){
var inst_51842 = (state_51877[(7)]);
var inst_51842__$1 = (state_51877[(2)]);
var inst_51843 = (inst_51842__$1 == null);
var state_51877__$1 = (function (){var statearr_51882 = state_51877;
(statearr_51882[(7)] = inst_51842__$1);

return statearr_51882;
})();
if(cljs.core.truth_(inst_51843)){
var statearr_51883_53527 = state_51877__$1;
(statearr_51883_53527[(1)] = (5));

} else {
var statearr_51884_53529 = state_51877__$1;
(statearr_51884_53529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (15))){
var inst_51855 = (state_51877[(8)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51877__$1,(18),to,inst_51855);
} else {
if((state_val_51878 === (21))){
var inst_51868 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51885_53530 = state_51877__$1;
(statearr_51885_53530[(2)] = inst_51868);

(statearr_51885_53530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (13))){
var inst_51870 = (state_51877[(2)]);
var state_51877__$1 = (function (){var statearr_51888 = state_51877;
(statearr_51888[(9)] = inst_51870);

return statearr_51888;
})();
var statearr_51889_53532 = state_51877__$1;
(statearr_51889_53532[(2)] = null);

(statearr_51889_53532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (6))){
var inst_51842 = (state_51877[(7)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(11),inst_51842);
} else {
if((state_val_51878 === (17))){
var inst_51863 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51863)){
var statearr_51891_53535 = state_51877__$1;
(statearr_51891_53535[(1)] = (19));

} else {
var statearr_51892_53536 = state_51877__$1;
(statearr_51892_53536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (3))){
var inst_51875 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51877__$1,inst_51875);
} else {
if((state_val_51878 === (12))){
var inst_51852 = (state_51877[(10)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(14),inst_51852);
} else {
if((state_val_51878 === (2))){
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(4),results);
} else {
if((state_val_51878 === (19))){
var state_51877__$1 = state_51877;
var statearr_51896_53538 = state_51877__$1;
(statearr_51896_53538[(2)] = null);

(statearr_51896_53538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (11))){
var inst_51852 = (state_51877[(2)]);
var state_51877__$1 = (function (){var statearr_51897 = state_51877;
(statearr_51897[(10)] = inst_51852);

return statearr_51897;
})();
var statearr_51898_53540 = state_51877__$1;
(statearr_51898_53540[(2)] = null);

(statearr_51898_53540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (9))){
var state_51877__$1 = state_51877;
var statearr_51899_53541 = state_51877__$1;
(statearr_51899_53541[(2)] = null);

(statearr_51899_53541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (5))){
var state_51877__$1 = state_51877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51900_53542 = state_51877__$1;
(statearr_51900_53542[(1)] = (8));

} else {
var statearr_51901_53543 = state_51877__$1;
(statearr_51901_53543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (14))){
var inst_51855 = (state_51877[(8)]);
var inst_51857 = (state_51877[(11)]);
var inst_51855__$1 = (state_51877[(2)]);
var inst_51856 = (inst_51855__$1 == null);
var inst_51857__$1 = cljs.core.not(inst_51856);
var state_51877__$1 = (function (){var statearr_51902 = state_51877;
(statearr_51902[(8)] = inst_51855__$1);

(statearr_51902[(11)] = inst_51857__$1);

return statearr_51902;
})();
if(inst_51857__$1){
var statearr_51903_53544 = state_51877__$1;
(statearr_51903_53544[(1)] = (15));

} else {
var statearr_51904_53546 = state_51877__$1;
(statearr_51904_53546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (16))){
var inst_51857 = (state_51877[(11)]);
var state_51877__$1 = state_51877;
var statearr_51905_53548 = state_51877__$1;
(statearr_51905_53548[(2)] = inst_51857);

(statearr_51905_53548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (10))){
var inst_51849 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51906_53550 = state_51877__$1;
(statearr_51906_53550[(2)] = inst_51849);

(statearr_51906_53550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (18))){
var inst_51860 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51907_53551 = state_51877__$1;
(statearr_51907_53551[(2)] = inst_51860);

(statearr_51907_53551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (8))){
var inst_51846 = cljs.core.async.close_BANG_(to);
var state_51877__$1 = state_51877;
var statearr_51908_53552 = state_51877__$1;
(statearr_51908_53552[(2)] = inst_51846);

(statearr_51908_53552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51909[(1)] = (1));

return statearr_51909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51877){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51877);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51910){var ex__51346__auto__ = e51910;
var statearr_51911_53556 = state_51877;
(statearr_51911_53556[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51877[(4)]))){
var statearr_51915_53557 = state_51877;
(statearr_51915_53557[(1)] = cljs.core.first((state_51877[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53558 = state_51877;
state_51877 = G__53558;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_51916 = f__51412__auto__();
(statearr_51916[(6)] = c__51411__auto__);

return statearr_51916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

return c__51411__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51924 = arguments.length;
switch (G__51924) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51935 = arguments.length;
switch (G__51935) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51943 = arguments.length;
switch (G__51943) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51411__auto___53568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_51971){
var state_val_51972 = (state_51971[(1)]);
if((state_val_51972 === (7))){
var inst_51967 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51973_53570 = state_51971__$1;
(statearr_51973_53570[(2)] = inst_51967);

(statearr_51973_53570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (1))){
var state_51971__$1 = state_51971;
var statearr_51974_53571 = state_51971__$1;
(statearr_51974_53571[(2)] = null);

(statearr_51974_53571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (4))){
var inst_51948 = (state_51971[(7)]);
var inst_51948__$1 = (state_51971[(2)]);
var inst_51949 = (inst_51948__$1 == null);
var state_51971__$1 = (function (){var statearr_51975 = state_51971;
(statearr_51975[(7)] = inst_51948__$1);

return statearr_51975;
})();
if(cljs.core.truth_(inst_51949)){
var statearr_51976_53572 = state_51971__$1;
(statearr_51976_53572[(1)] = (5));

} else {
var statearr_51977_53573 = state_51971__$1;
(statearr_51977_53573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (13))){
var state_51971__$1 = state_51971;
var statearr_51978_53575 = state_51971__$1;
(statearr_51978_53575[(2)] = null);

(statearr_51978_53575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (6))){
var inst_51948 = (state_51971[(7)]);
var inst_51954 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51948) : p.call(null,inst_51948));
var state_51971__$1 = state_51971;
if(cljs.core.truth_(inst_51954)){
var statearr_51979_53578 = state_51971__$1;
(statearr_51979_53578[(1)] = (9));

} else {
var statearr_51980_53580 = state_51971__$1;
(statearr_51980_53580[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (3))){
var inst_51969 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51971__$1,inst_51969);
} else {
if((state_val_51972 === (12))){
var state_51971__$1 = state_51971;
var statearr_51981_53581 = state_51971__$1;
(statearr_51981_53581[(2)] = null);

(statearr_51981_53581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (2))){
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51971__$1,(4),ch);
} else {
if((state_val_51972 === (11))){
var inst_51948 = (state_51971[(7)]);
var inst_51958 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51971__$1,(8),inst_51958,inst_51948);
} else {
if((state_val_51972 === (9))){
var state_51971__$1 = state_51971;
var statearr_51983_53582 = state_51971__$1;
(statearr_51983_53582[(2)] = tc);

(statearr_51983_53582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (5))){
var inst_51951 = cljs.core.async.close_BANG_(tc);
var inst_51952 = cljs.core.async.close_BANG_(fc);
var state_51971__$1 = (function (){var statearr_51984 = state_51971;
(statearr_51984[(8)] = inst_51951);

return statearr_51984;
})();
var statearr_51985_53584 = state_51971__$1;
(statearr_51985_53584[(2)] = inst_51952);

(statearr_51985_53584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (14))){
var inst_51965 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51987_53585 = state_51971__$1;
(statearr_51987_53585[(2)] = inst_51965);

(statearr_51987_53585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (10))){
var state_51971__$1 = state_51971;
var statearr_51988_53586 = state_51971__$1;
(statearr_51988_53586[(2)] = fc);

(statearr_51988_53586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (8))){
var inst_51960 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
if(cljs.core.truth_(inst_51960)){
var statearr_51989_53587 = state_51971__$1;
(statearr_51989_53587[(1)] = (12));

} else {
var statearr_51990_53589 = state_51971__$1;
(statearr_51990_53589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_51992 = [null,null,null,null,null,null,null,null,null];
(statearr_51992[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_51992[(1)] = (1));

return statearr_51992;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_51971){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51971);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51993){var ex__51346__auto__ = e51993;
var statearr_51994_53590 = state_51971;
(statearr_51994_53590[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51971[(4)]))){
var statearr_51997_53591 = state_51971;
(statearr_51997_53591[(1)] = cljs.core.first((state_51971[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53593 = state_51971;
state_51971 = G__53593;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_51971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_51971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_51999 = f__51412__auto__();
(statearr_51999[(6)] = c__51411__auto___53568);

return statearr_51999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52022){
var state_val_52023 = (state_52022[(1)]);
if((state_val_52023 === (7))){
var inst_52018 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52025_53595 = state_52022__$1;
(statearr_52025_53595[(2)] = inst_52018);

(statearr_52025_53595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (1))){
var inst_52001 = init;
var inst_52002 = inst_52001;
var state_52022__$1 = (function (){var statearr_52026 = state_52022;
(statearr_52026[(7)] = inst_52002);

return statearr_52026;
})();
var statearr_52027_53596 = state_52022__$1;
(statearr_52027_53596[(2)] = null);

(statearr_52027_53596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (4))){
var inst_52005 = (state_52022[(8)]);
var inst_52005__$1 = (state_52022[(2)]);
var inst_52006 = (inst_52005__$1 == null);
var state_52022__$1 = (function (){var statearr_52033 = state_52022;
(statearr_52033[(8)] = inst_52005__$1);

return statearr_52033;
})();
if(cljs.core.truth_(inst_52006)){
var statearr_52038_53597 = state_52022__$1;
(statearr_52038_53597[(1)] = (5));

} else {
var statearr_52047_53598 = state_52022__$1;
(statearr_52047_53598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (6))){
var inst_52005 = (state_52022[(8)]);
var inst_52002 = (state_52022[(7)]);
var inst_52009 = (state_52022[(9)]);
var inst_52009__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52002,inst_52005) : f.call(null,inst_52002,inst_52005));
var inst_52010 = cljs.core.reduced_QMARK_(inst_52009__$1);
var state_52022__$1 = (function (){var statearr_52052 = state_52022;
(statearr_52052[(9)] = inst_52009__$1);

return statearr_52052;
})();
if(inst_52010){
var statearr_52053_53601 = state_52022__$1;
(statearr_52053_53601[(1)] = (8));

} else {
var statearr_52054_53602 = state_52022__$1;
(statearr_52054_53602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (3))){
var inst_52020 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52022__$1,inst_52020);
} else {
if((state_val_52023 === (2))){
var state_52022__$1 = state_52022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52022__$1,(4),ch);
} else {
if((state_val_52023 === (9))){
var inst_52009 = (state_52022[(9)]);
var inst_52002 = inst_52009;
var state_52022__$1 = (function (){var statearr_52058 = state_52022;
(statearr_52058[(7)] = inst_52002);

return statearr_52058;
})();
var statearr_52059_53605 = state_52022__$1;
(statearr_52059_53605[(2)] = null);

(statearr_52059_53605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (5))){
var inst_52002 = (state_52022[(7)]);
var state_52022__$1 = state_52022;
var statearr_52063_53611 = state_52022__$1;
(statearr_52063_53611[(2)] = inst_52002);

(statearr_52063_53611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (10))){
var inst_52016 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52065_53616 = state_52022__$1;
(statearr_52065_53616[(2)] = inst_52016);

(statearr_52065_53616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52023 === (8))){
var inst_52009 = (state_52022[(9)]);
var inst_52012 = cljs.core.deref(inst_52009);
var state_52022__$1 = state_52022;
var statearr_52066_53622 = state_52022__$1;
(statearr_52066_53622[(2)] = inst_52012);

(statearr_52066_53622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__51343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51343__auto____0 = (function (){
var statearr_52067 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52067[(0)] = cljs$core$async$reduce_$_state_machine__51343__auto__);

(statearr_52067[(1)] = (1));

return statearr_52067;
});
var cljs$core$async$reduce_$_state_machine__51343__auto____1 = (function (state_52022){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52022);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52068){var ex__51346__auto__ = e52068;
var statearr_52069_53624 = state_52022;
(statearr_52069_53624[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52022[(4)]))){
var statearr_52070_53625 = state_52022;
(statearr_52070_53625[(1)] = cljs.core.first((state_52022[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53626 = state_52022;
state_52022 = G__53626;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51343__auto__ = function(state_52022){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51343__auto____1.call(this,state_52022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51343__auto____0;
cljs$core$async$reduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51343__auto____1;
return cljs$core$async$reduce_$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52075 = f__51412__auto__();
(statearr_52075[(6)] = c__51411__auto__);

return statearr_52075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

return c__51411__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52081){
var state_val_52082 = (state_52081[(1)]);
if((state_val_52082 === (1))){
var inst_52076 = cljs.core.async.reduce(f__$1,init,ch);
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52081__$1,(2),inst_52076);
} else {
if((state_val_52082 === (2))){
var inst_52078 = (state_52081[(2)]);
var inst_52079 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52078) : f__$1.call(null,inst_52078));
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52081__$1,inst_52079);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51343__auto____0 = (function (){
var statearr_52084 = [null,null,null,null,null,null,null];
(statearr_52084[(0)] = cljs$core$async$transduce_$_state_machine__51343__auto__);

(statearr_52084[(1)] = (1));

return statearr_52084;
});
var cljs$core$async$transduce_$_state_machine__51343__auto____1 = (function (state_52081){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52081);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52085){var ex__51346__auto__ = e52085;
var statearr_52086_53633 = state_52081;
(statearr_52086_53633[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52081[(4)]))){
var statearr_52087_53634 = state_52081;
(statearr_52087_53634[(1)] = cljs.core.first((state_52081[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53640 = state_52081;
state_52081 = G__53640;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51343__auto__ = function(state_52081){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51343__auto____1.call(this,state_52081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51343__auto____0;
cljs$core$async$transduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51343__auto____1;
return cljs$core$async$transduce_$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52088 = f__51412__auto__();
(statearr_52088[(6)] = c__51411__auto__);

return statearr_52088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

return c__51411__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__52093 = arguments.length;
switch (G__52093) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52120){
var state_val_52121 = (state_52120[(1)]);
if((state_val_52121 === (7))){
var inst_52100 = (state_52120[(2)]);
var state_52120__$1 = state_52120;
var statearr_52122_53643 = state_52120__$1;
(statearr_52122_53643[(2)] = inst_52100);

(statearr_52122_53643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (1))){
var inst_52094 = cljs.core.seq(coll);
var inst_52095 = inst_52094;
var state_52120__$1 = (function (){var statearr_52123 = state_52120;
(statearr_52123[(7)] = inst_52095);

return statearr_52123;
})();
var statearr_52124_53644 = state_52120__$1;
(statearr_52124_53644[(2)] = null);

(statearr_52124_53644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (4))){
var inst_52095 = (state_52120[(7)]);
var inst_52098 = cljs.core.first(inst_52095);
var state_52120__$1 = state_52120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52120__$1,(7),ch,inst_52098);
} else {
if((state_val_52121 === (13))){
var inst_52114 = (state_52120[(2)]);
var state_52120__$1 = state_52120;
var statearr_52125_53645 = state_52120__$1;
(statearr_52125_53645[(2)] = inst_52114);

(statearr_52125_53645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (6))){
var inst_52103 = (state_52120[(2)]);
var state_52120__$1 = state_52120;
if(cljs.core.truth_(inst_52103)){
var statearr_52127_53647 = state_52120__$1;
(statearr_52127_53647[(1)] = (8));

} else {
var statearr_52128_53648 = state_52120__$1;
(statearr_52128_53648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (3))){
var inst_52118 = (state_52120[(2)]);
var state_52120__$1 = state_52120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52120__$1,inst_52118);
} else {
if((state_val_52121 === (12))){
var state_52120__$1 = state_52120;
var statearr_52129_53653 = state_52120__$1;
(statearr_52129_53653[(2)] = null);

(statearr_52129_53653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (2))){
var inst_52095 = (state_52120[(7)]);
var state_52120__$1 = state_52120;
if(cljs.core.truth_(inst_52095)){
var statearr_52130_53654 = state_52120__$1;
(statearr_52130_53654[(1)] = (4));

} else {
var statearr_52131_53655 = state_52120__$1;
(statearr_52131_53655[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (11))){
var inst_52111 = cljs.core.async.close_BANG_(ch);
var state_52120__$1 = state_52120;
var statearr_52132_53657 = state_52120__$1;
(statearr_52132_53657[(2)] = inst_52111);

(statearr_52132_53657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (9))){
var state_52120__$1 = state_52120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52133_53658 = state_52120__$1;
(statearr_52133_53658[(1)] = (11));

} else {
var statearr_52134_53659 = state_52120__$1;
(statearr_52134_53659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (5))){
var inst_52095 = (state_52120[(7)]);
var state_52120__$1 = state_52120;
var statearr_52135_53660 = state_52120__$1;
(statearr_52135_53660[(2)] = inst_52095);

(statearr_52135_53660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (10))){
var inst_52116 = (state_52120[(2)]);
var state_52120__$1 = state_52120;
var statearr_52136_53661 = state_52120__$1;
(statearr_52136_53661[(2)] = inst_52116);

(statearr_52136_53661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52121 === (8))){
var inst_52095 = (state_52120[(7)]);
var inst_52105 = cljs.core.next(inst_52095);
var inst_52095__$1 = inst_52105;
var state_52120__$1 = (function (){var statearr_52137 = state_52120;
(statearr_52137[(7)] = inst_52095__$1);

return statearr_52137;
})();
var statearr_52138_53662 = state_52120__$1;
(statearr_52138_53662[(2)] = null);

(statearr_52138_53662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_52140 = [null,null,null,null,null,null,null,null];
(statearr_52140[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52140[(1)] = (1));

return statearr_52140;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52120){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52120);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52141){var ex__51346__auto__ = e52141;
var statearr_52142_53669 = state_52120;
(statearr_52142_53669[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52120[(4)]))){
var statearr_52143_53670 = state_52120;
(statearr_52143_53670[(1)] = cljs.core.first((state_52120[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53672 = state_52120;
state_52120 = G__53672;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52144 = f__51412__auto__();
(statearr_52144[(6)] = c__51411__auto__);

return statearr_52144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

return c__51411__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52148 = arguments.length;
switch (G__52148) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53675 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53675(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53682 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53682(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53684 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53684(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53689 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53689(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52157 = (function (ch,cs,meta52158){
this.ch = ch;
this.cs = cs;
this.meta52158 = meta52158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52159,meta52158__$1){
var self__ = this;
var _52159__$1 = this;
return (new cljs.core.async.t_cljs$core$async52157(self__.ch,self__.cs,meta52158__$1));
}));

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52159){
var self__ = this;
var _52159__$1 = this;
return self__.meta52158;
}));

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52157.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52158","meta52158",1584344087,null)], null);
}));

(cljs.core.async.t_cljs$core$async52157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52157");

(cljs.core.async.t_cljs$core$async52157.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52157.
 */
cljs.core.async.__GT_t_cljs$core$async52157 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52157(ch__$1,cs__$1,meta52158){
return (new cljs.core.async.t_cljs$core$async52157(ch__$1,cs__$1,meta52158));
});

}

return (new cljs.core.async.t_cljs$core$async52157(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__51411__auto___53696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52299){
var state_val_52300 = (state_52299[(1)]);
if((state_val_52300 === (7))){
var inst_52294 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52301_53697 = state_52299__$1;
(statearr_52301_53697[(2)] = inst_52294);

(statearr_52301_53697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (20))){
var inst_52197 = (state_52299[(7)]);
var inst_52210 = cljs.core.first(inst_52197);
var inst_52211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52210,(0),null);
var inst_52212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52210,(1),null);
var state_52299__$1 = (function (){var statearr_52303 = state_52299;
(statearr_52303[(8)] = inst_52211);

return statearr_52303;
})();
if(cljs.core.truth_(inst_52212)){
var statearr_52304_53698 = state_52299__$1;
(statearr_52304_53698[(1)] = (22));

} else {
var statearr_52305_53699 = state_52299__$1;
(statearr_52305_53699[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (27))){
var inst_52165 = (state_52299[(9)]);
var inst_52248 = (state_52299[(10)]);
var inst_52243 = (state_52299[(11)]);
var inst_52241 = (state_52299[(12)]);
var inst_52248__$1 = cljs.core._nth(inst_52241,inst_52243);
var inst_52249 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52248__$1,inst_52165,done);
var state_52299__$1 = (function (){var statearr_52306 = state_52299;
(statearr_52306[(10)] = inst_52248__$1);

return statearr_52306;
})();
if(cljs.core.truth_(inst_52249)){
var statearr_52307_53700 = state_52299__$1;
(statearr_52307_53700[(1)] = (30));

} else {
var statearr_52308_53701 = state_52299__$1;
(statearr_52308_53701[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (1))){
var state_52299__$1 = state_52299;
var statearr_52309_53702 = state_52299__$1;
(statearr_52309_53702[(2)] = null);

(statearr_52309_53702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (24))){
var inst_52197 = (state_52299[(7)]);
var inst_52217 = (state_52299[(2)]);
var inst_52218 = cljs.core.next(inst_52197);
var inst_52174 = inst_52218;
var inst_52175 = null;
var inst_52176 = (0);
var inst_52177 = (0);
var state_52299__$1 = (function (){var statearr_52310 = state_52299;
(statearr_52310[(13)] = inst_52217);

(statearr_52310[(14)] = inst_52176);

(statearr_52310[(15)] = inst_52175);

(statearr_52310[(16)] = inst_52174);

(statearr_52310[(17)] = inst_52177);

return statearr_52310;
})();
var statearr_52311_53703 = state_52299__$1;
(statearr_52311_53703[(2)] = null);

(statearr_52311_53703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (39))){
var state_52299__$1 = state_52299;
var statearr_52316_53704 = state_52299__$1;
(statearr_52316_53704[(2)] = null);

(statearr_52316_53704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (4))){
var inst_52165 = (state_52299[(9)]);
var inst_52165__$1 = (state_52299[(2)]);
var inst_52166 = (inst_52165__$1 == null);
var state_52299__$1 = (function (){var statearr_52317 = state_52299;
(statearr_52317[(9)] = inst_52165__$1);

return statearr_52317;
})();
if(cljs.core.truth_(inst_52166)){
var statearr_52318_53705 = state_52299__$1;
(statearr_52318_53705[(1)] = (5));

} else {
var statearr_52319_53706 = state_52299__$1;
(statearr_52319_53706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (15))){
var inst_52176 = (state_52299[(14)]);
var inst_52175 = (state_52299[(15)]);
var inst_52174 = (state_52299[(16)]);
var inst_52177 = (state_52299[(17)]);
var inst_52193 = (state_52299[(2)]);
var inst_52194 = (inst_52177 + (1));
var tmp52313 = inst_52176;
var tmp52314 = inst_52175;
var tmp52315 = inst_52174;
var inst_52174__$1 = tmp52315;
var inst_52175__$1 = tmp52314;
var inst_52176__$1 = tmp52313;
var inst_52177__$1 = inst_52194;
var state_52299__$1 = (function (){var statearr_52320 = state_52299;
(statearr_52320[(14)] = inst_52176__$1);

(statearr_52320[(15)] = inst_52175__$1);

(statearr_52320[(18)] = inst_52193);

(statearr_52320[(16)] = inst_52174__$1);

(statearr_52320[(17)] = inst_52177__$1);

return statearr_52320;
})();
var statearr_52321_53707 = state_52299__$1;
(statearr_52321_53707[(2)] = null);

(statearr_52321_53707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (21))){
var inst_52221 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52325_53708 = state_52299__$1;
(statearr_52325_53708[(2)] = inst_52221);

(statearr_52325_53708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (31))){
var inst_52248 = (state_52299[(10)]);
var inst_52252 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52248);
var state_52299__$1 = state_52299;
var statearr_52329_53709 = state_52299__$1;
(statearr_52329_53709[(2)] = inst_52252);

(statearr_52329_53709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (32))){
var inst_52242 = (state_52299[(19)]);
var inst_52240 = (state_52299[(20)]);
var inst_52243 = (state_52299[(11)]);
var inst_52241 = (state_52299[(12)]);
var inst_52254 = (state_52299[(2)]);
var inst_52255 = (inst_52243 + (1));
var tmp52322 = inst_52242;
var tmp52323 = inst_52240;
var tmp52324 = inst_52241;
var inst_52240__$1 = tmp52323;
var inst_52241__$1 = tmp52324;
var inst_52242__$1 = tmp52322;
var inst_52243__$1 = inst_52255;
var state_52299__$1 = (function (){var statearr_52330 = state_52299;
(statearr_52330[(19)] = inst_52242__$1);

(statearr_52330[(20)] = inst_52240__$1);

(statearr_52330[(11)] = inst_52243__$1);

(statearr_52330[(21)] = inst_52254);

(statearr_52330[(12)] = inst_52241__$1);

return statearr_52330;
})();
var statearr_52332_53713 = state_52299__$1;
(statearr_52332_53713[(2)] = null);

(statearr_52332_53713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (40))){
var inst_52267 = (state_52299[(22)]);
var inst_52271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52267);
var state_52299__$1 = state_52299;
var statearr_52333_53715 = state_52299__$1;
(statearr_52333_53715[(2)] = inst_52271);

(statearr_52333_53715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (33))){
var inst_52258 = (state_52299[(23)]);
var inst_52260 = cljs.core.chunked_seq_QMARK_(inst_52258);
var state_52299__$1 = state_52299;
if(inst_52260){
var statearr_52334_53717 = state_52299__$1;
(statearr_52334_53717[(1)] = (36));

} else {
var statearr_52339_53718 = state_52299__$1;
(statearr_52339_53718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (13))){
var inst_52187 = (state_52299[(24)]);
var inst_52190 = cljs.core.async.close_BANG_(inst_52187);
var state_52299__$1 = state_52299;
var statearr_52340_53719 = state_52299__$1;
(statearr_52340_53719[(2)] = inst_52190);

(statearr_52340_53719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (22))){
var inst_52211 = (state_52299[(8)]);
var inst_52214 = cljs.core.async.close_BANG_(inst_52211);
var state_52299__$1 = state_52299;
var statearr_52341_53721 = state_52299__$1;
(statearr_52341_53721[(2)] = inst_52214);

(statearr_52341_53721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (36))){
var inst_52258 = (state_52299[(23)]);
var inst_52262 = cljs.core.chunk_first(inst_52258);
var inst_52263 = cljs.core.chunk_rest(inst_52258);
var inst_52264 = cljs.core.count(inst_52262);
var inst_52240 = inst_52263;
var inst_52241 = inst_52262;
var inst_52242 = inst_52264;
var inst_52243 = (0);
var state_52299__$1 = (function (){var statearr_52344 = state_52299;
(statearr_52344[(19)] = inst_52242);

(statearr_52344[(20)] = inst_52240);

(statearr_52344[(11)] = inst_52243);

(statearr_52344[(12)] = inst_52241);

return statearr_52344;
})();
var statearr_52345_53722 = state_52299__$1;
(statearr_52345_53722[(2)] = null);

(statearr_52345_53722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (41))){
var inst_52258 = (state_52299[(23)]);
var inst_52273 = (state_52299[(2)]);
var inst_52274 = cljs.core.next(inst_52258);
var inst_52240 = inst_52274;
var inst_52241 = null;
var inst_52242 = (0);
var inst_52243 = (0);
var state_52299__$1 = (function (){var statearr_52346 = state_52299;
(statearr_52346[(25)] = inst_52273);

(statearr_52346[(19)] = inst_52242);

(statearr_52346[(20)] = inst_52240);

(statearr_52346[(11)] = inst_52243);

(statearr_52346[(12)] = inst_52241);

return statearr_52346;
})();
var statearr_52347_53724 = state_52299__$1;
(statearr_52347_53724[(2)] = null);

(statearr_52347_53724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (43))){
var state_52299__$1 = state_52299;
var statearr_52349_53725 = state_52299__$1;
(statearr_52349_53725[(2)] = null);

(statearr_52349_53725[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (29))){
var inst_52282 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52352_53726 = state_52299__$1;
(statearr_52352_53726[(2)] = inst_52282);

(statearr_52352_53726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (44))){
var inst_52291 = (state_52299[(2)]);
var state_52299__$1 = (function (){var statearr_52353 = state_52299;
(statearr_52353[(26)] = inst_52291);

return statearr_52353;
})();
var statearr_52354_53727 = state_52299__$1;
(statearr_52354_53727[(2)] = null);

(statearr_52354_53727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (6))){
var inst_52231 = (state_52299[(27)]);
var inst_52230 = cljs.core.deref(cs);
var inst_52231__$1 = cljs.core.keys(inst_52230);
var inst_52232 = cljs.core.count(inst_52231__$1);
var inst_52233 = cljs.core.reset_BANG_(dctr,inst_52232);
var inst_52239 = cljs.core.seq(inst_52231__$1);
var inst_52240 = inst_52239;
var inst_52241 = null;
var inst_52242 = (0);
var inst_52243 = (0);
var state_52299__$1 = (function (){var statearr_52355 = state_52299;
(statearr_52355[(28)] = inst_52233);

(statearr_52355[(19)] = inst_52242);

(statearr_52355[(20)] = inst_52240);

(statearr_52355[(27)] = inst_52231__$1);

(statearr_52355[(11)] = inst_52243);

(statearr_52355[(12)] = inst_52241);

return statearr_52355;
})();
var statearr_52356_53729 = state_52299__$1;
(statearr_52356_53729[(2)] = null);

(statearr_52356_53729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (28))){
var inst_52258 = (state_52299[(23)]);
var inst_52240 = (state_52299[(20)]);
var inst_52258__$1 = cljs.core.seq(inst_52240);
var state_52299__$1 = (function (){var statearr_52359 = state_52299;
(statearr_52359[(23)] = inst_52258__$1);

return statearr_52359;
})();
if(inst_52258__$1){
var statearr_52361_53734 = state_52299__$1;
(statearr_52361_53734[(1)] = (33));

} else {
var statearr_52362_53735 = state_52299__$1;
(statearr_52362_53735[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (25))){
var inst_52242 = (state_52299[(19)]);
var inst_52243 = (state_52299[(11)]);
var inst_52245 = (inst_52243 < inst_52242);
var inst_52246 = inst_52245;
var state_52299__$1 = state_52299;
if(cljs.core.truth_(inst_52246)){
var statearr_52363_53736 = state_52299__$1;
(statearr_52363_53736[(1)] = (27));

} else {
var statearr_52364_53737 = state_52299__$1;
(statearr_52364_53737[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (34))){
var state_52299__$1 = state_52299;
var statearr_52365_53738 = state_52299__$1;
(statearr_52365_53738[(2)] = null);

(statearr_52365_53738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (17))){
var state_52299__$1 = state_52299;
var statearr_52366_53740 = state_52299__$1;
(statearr_52366_53740[(2)] = null);

(statearr_52366_53740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (3))){
var inst_52296 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52299__$1,inst_52296);
} else {
if((state_val_52300 === (12))){
var inst_52226 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52369_53742 = state_52299__$1;
(statearr_52369_53742[(2)] = inst_52226);

(statearr_52369_53742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (2))){
var state_52299__$1 = state_52299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52299__$1,(4),ch);
} else {
if((state_val_52300 === (23))){
var state_52299__$1 = state_52299;
var statearr_52373_53744 = state_52299__$1;
(statearr_52373_53744[(2)] = null);

(statearr_52373_53744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (35))){
var inst_52280 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52375_53745 = state_52299__$1;
(statearr_52375_53745[(2)] = inst_52280);

(statearr_52375_53745[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (19))){
var inst_52197 = (state_52299[(7)]);
var inst_52201 = cljs.core.chunk_first(inst_52197);
var inst_52203 = cljs.core.chunk_rest(inst_52197);
var inst_52204 = cljs.core.count(inst_52201);
var inst_52174 = inst_52203;
var inst_52175 = inst_52201;
var inst_52176 = inst_52204;
var inst_52177 = (0);
var state_52299__$1 = (function (){var statearr_52376 = state_52299;
(statearr_52376[(14)] = inst_52176);

(statearr_52376[(15)] = inst_52175);

(statearr_52376[(16)] = inst_52174);

(statearr_52376[(17)] = inst_52177);

return statearr_52376;
})();
var statearr_52377_53746 = state_52299__$1;
(statearr_52377_53746[(2)] = null);

(statearr_52377_53746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (11))){
var inst_52174 = (state_52299[(16)]);
var inst_52197 = (state_52299[(7)]);
var inst_52197__$1 = cljs.core.seq(inst_52174);
var state_52299__$1 = (function (){var statearr_52378 = state_52299;
(statearr_52378[(7)] = inst_52197__$1);

return statearr_52378;
})();
if(inst_52197__$1){
var statearr_52379_53747 = state_52299__$1;
(statearr_52379_53747[(1)] = (16));

} else {
var statearr_52380_53748 = state_52299__$1;
(statearr_52380_53748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (9))){
var inst_52228 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52389_53750 = state_52299__$1;
(statearr_52389_53750[(2)] = inst_52228);

(statearr_52389_53750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (5))){
var inst_52172 = cljs.core.deref(cs);
var inst_52173 = cljs.core.seq(inst_52172);
var inst_52174 = inst_52173;
var inst_52175 = null;
var inst_52176 = (0);
var inst_52177 = (0);
var state_52299__$1 = (function (){var statearr_52390 = state_52299;
(statearr_52390[(14)] = inst_52176);

(statearr_52390[(15)] = inst_52175);

(statearr_52390[(16)] = inst_52174);

(statearr_52390[(17)] = inst_52177);

return statearr_52390;
})();
var statearr_52391_53756 = state_52299__$1;
(statearr_52391_53756[(2)] = null);

(statearr_52391_53756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (14))){
var state_52299__$1 = state_52299;
var statearr_52393_53757 = state_52299__$1;
(statearr_52393_53757[(2)] = null);

(statearr_52393_53757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (45))){
var inst_52288 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52394_53759 = state_52299__$1;
(statearr_52394_53759[(2)] = inst_52288);

(statearr_52394_53759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (26))){
var inst_52231 = (state_52299[(27)]);
var inst_52284 = (state_52299[(2)]);
var inst_52285 = cljs.core.seq(inst_52231);
var state_52299__$1 = (function (){var statearr_52395 = state_52299;
(statearr_52395[(29)] = inst_52284);

return statearr_52395;
})();
if(inst_52285){
var statearr_52396_53760 = state_52299__$1;
(statearr_52396_53760[(1)] = (42));

} else {
var statearr_52397_53761 = state_52299__$1;
(statearr_52397_53761[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (16))){
var inst_52197 = (state_52299[(7)]);
var inst_52199 = cljs.core.chunked_seq_QMARK_(inst_52197);
var state_52299__$1 = state_52299;
if(inst_52199){
var statearr_52398_53762 = state_52299__$1;
(statearr_52398_53762[(1)] = (19));

} else {
var statearr_52399_53763 = state_52299__$1;
(statearr_52399_53763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (38))){
var inst_52277 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52403_53764 = state_52299__$1;
(statearr_52403_53764[(2)] = inst_52277);

(statearr_52403_53764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (30))){
var state_52299__$1 = state_52299;
var statearr_52408_53765 = state_52299__$1;
(statearr_52408_53765[(2)] = null);

(statearr_52408_53765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (10))){
var inst_52175 = (state_52299[(15)]);
var inst_52177 = (state_52299[(17)]);
var inst_52186 = cljs.core._nth(inst_52175,inst_52177);
var inst_52187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52186,(0),null);
var inst_52188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52186,(1),null);
var state_52299__$1 = (function (){var statearr_52410 = state_52299;
(statearr_52410[(24)] = inst_52187);

return statearr_52410;
})();
if(cljs.core.truth_(inst_52188)){
var statearr_52417_53767 = state_52299__$1;
(statearr_52417_53767[(1)] = (13));

} else {
var statearr_52418_53768 = state_52299__$1;
(statearr_52418_53768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (18))){
var inst_52224 = (state_52299[(2)]);
var state_52299__$1 = state_52299;
var statearr_52424_53773 = state_52299__$1;
(statearr_52424_53773[(2)] = inst_52224);

(statearr_52424_53773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (42))){
var state_52299__$1 = state_52299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52299__$1,(45),dchan);
} else {
if((state_val_52300 === (37))){
var inst_52165 = (state_52299[(9)]);
var inst_52258 = (state_52299[(23)]);
var inst_52267 = (state_52299[(22)]);
var inst_52267__$1 = cljs.core.first(inst_52258);
var inst_52268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52267__$1,inst_52165,done);
var state_52299__$1 = (function (){var statearr_52427 = state_52299;
(statearr_52427[(22)] = inst_52267__$1);

return statearr_52427;
})();
if(cljs.core.truth_(inst_52268)){
var statearr_52428_53776 = state_52299__$1;
(statearr_52428_53776[(1)] = (39));

} else {
var statearr_52429_53777 = state_52299__$1;
(statearr_52429_53777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52300 === (8))){
var inst_52176 = (state_52299[(14)]);
var inst_52177 = (state_52299[(17)]);
var inst_52179 = (inst_52177 < inst_52176);
var inst_52180 = inst_52179;
var state_52299__$1 = state_52299;
if(cljs.core.truth_(inst_52180)){
var statearr_52430_53779 = state_52299__$1;
(statearr_52430_53779[(1)] = (10));

} else {
var statearr_52431_53780 = state_52299__$1;
(statearr_52431_53780[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__51343__auto__ = null;
var cljs$core$async$mult_$_state_machine__51343__auto____0 = (function (){
var statearr_52434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52434[(0)] = cljs$core$async$mult_$_state_machine__51343__auto__);

(statearr_52434[(1)] = (1));

return statearr_52434;
});
var cljs$core$async$mult_$_state_machine__51343__auto____1 = (function (state_52299){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52299);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52437){var ex__51346__auto__ = e52437;
var statearr_52438_53781 = state_52299;
(statearr_52438_53781[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52299[(4)]))){
var statearr_52439_53782 = state_52299;
(statearr_52439_53782[(1)] = cljs.core.first((state_52299[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53783 = state_52299;
state_52299 = G__53783;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51343__auto__ = function(state_52299){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51343__auto____1.call(this,state_52299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51343__auto____0;
cljs$core$async$mult_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51343__auto____1;
return cljs$core$async$mult_$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52440 = f__51412__auto__();
(statearr_52440[(6)] = c__51411__auto___53696);

return statearr_52440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52443 = arguments.length;
switch (G__52443) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53792 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53792(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53796 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53796(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53797 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53797(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53801 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53801(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53805 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53805(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53809 = arguments.length;
var i__4865__auto___53810 = (0);
while(true){
if((i__4865__auto___53810 < len__4864__auto___53809)){
args__4870__auto__.push((arguments[i__4865__auto___53810]));

var G__53811 = (i__4865__auto___53810 + (1));
i__4865__auto___53810 = G__53811;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52458){
var map__52459 = p__52458;
var map__52459__$1 = cljs.core.__destructure_map(map__52459);
var opts = map__52459__$1;
var statearr_52460_53815 = state;
(statearr_52460_53815[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52461_53816 = state;
(statearr_52461_53816[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_52462_53819 = state;
(statearr_52462_53819[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52450){
var G__52451 = cljs.core.first(seq52450);
var seq52450__$1 = cljs.core.next(seq52450);
var G__52452 = cljs.core.first(seq52450__$1);
var seq52450__$2 = cljs.core.next(seq52450__$1);
var G__52453 = cljs.core.first(seq52450__$2);
var seq52450__$3 = cljs.core.next(seq52450__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52451,G__52452,G__52453,seq52450__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52463 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52464){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52464 = meta52464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52465,meta52464__$1){
var self__ = this;
var _52465__$1 = this;
return (new cljs.core.async.t_cljs$core$async52463(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52464__$1));
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52465){
var self__ = this;
var _52465__$1 = this;
return self__.meta52464;
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52463.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52464","meta52464",-999617522,null)], null);
}));

(cljs.core.async.t_cljs$core$async52463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52463");

(cljs.core.async.t_cljs$core$async52463.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52463.
 */
cljs.core.async.__GT_t_cljs$core$async52463 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52464){
return (new cljs.core.async.t_cljs$core$async52463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52464));
});

}

return (new cljs.core.async.t_cljs$core$async52463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51411__auto___53835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52538){
var state_val_52539 = (state_52538[(1)]);
if((state_val_52539 === (7))){
var inst_52493 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
if(cljs.core.truth_(inst_52493)){
var statearr_52542_53842 = state_52538__$1;
(statearr_52542_53842[(1)] = (8));

} else {
var statearr_52543_53843 = state_52538__$1;
(statearr_52543_53843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (20))){
var inst_52486 = (state_52538[(7)]);
var state_52538__$1 = state_52538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52538__$1,(23),out,inst_52486);
} else {
if((state_val_52539 === (1))){
var inst_52469 = calc_state();
var inst_52470 = cljs.core.__destructure_map(inst_52469);
var inst_52471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52470,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52470,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52470,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52474 = inst_52469;
var state_52538__$1 = (function (){var statearr_52544 = state_52538;
(statearr_52544[(8)] = inst_52472);

(statearr_52544[(9)] = inst_52473);

(statearr_52544[(10)] = inst_52474);

(statearr_52544[(11)] = inst_52471);

return statearr_52544;
})();
var statearr_52545_53849 = state_52538__$1;
(statearr_52545_53849[(2)] = null);

(statearr_52545_53849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (24))){
var inst_52477 = (state_52538[(12)]);
var inst_52474 = inst_52477;
var state_52538__$1 = (function (){var statearr_52546 = state_52538;
(statearr_52546[(10)] = inst_52474);

return statearr_52546;
})();
var statearr_52549_53852 = state_52538__$1;
(statearr_52549_53852[(2)] = null);

(statearr_52549_53852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (4))){
var inst_52488 = (state_52538[(13)]);
var inst_52486 = (state_52538[(7)]);
var inst_52485 = (state_52538[(2)]);
var inst_52486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52485,(0),null);
var inst_52487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52485,(1),null);
var inst_52488__$1 = (inst_52486__$1 == null);
var state_52538__$1 = (function (){var statearr_52550 = state_52538;
(statearr_52550[(13)] = inst_52488__$1);

(statearr_52550[(7)] = inst_52486__$1);

(statearr_52550[(14)] = inst_52487);

return statearr_52550;
})();
if(cljs.core.truth_(inst_52488__$1)){
var statearr_52552_53853 = state_52538__$1;
(statearr_52552_53853[(1)] = (5));

} else {
var statearr_52553_53854 = state_52538__$1;
(statearr_52553_53854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (15))){
var inst_52507 = (state_52538[(15)]);
var inst_52478 = (state_52538[(16)]);
var inst_52507__$1 = cljs.core.empty_QMARK_(inst_52478);
var state_52538__$1 = (function (){var statearr_52554 = state_52538;
(statearr_52554[(15)] = inst_52507__$1);

return statearr_52554;
})();
if(inst_52507__$1){
var statearr_52559_53856 = state_52538__$1;
(statearr_52559_53856[(1)] = (17));

} else {
var statearr_52560_53858 = state_52538__$1;
(statearr_52560_53858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (21))){
var inst_52477 = (state_52538[(12)]);
var inst_52474 = inst_52477;
var state_52538__$1 = (function (){var statearr_52561 = state_52538;
(statearr_52561[(10)] = inst_52474);

return statearr_52561;
})();
var statearr_52562_53860 = state_52538__$1;
(statearr_52562_53860[(2)] = null);

(statearr_52562_53860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (13))){
var inst_52500 = (state_52538[(2)]);
var inst_52501 = calc_state();
var inst_52474 = inst_52501;
var state_52538__$1 = (function (){var statearr_52563 = state_52538;
(statearr_52563[(10)] = inst_52474);

(statearr_52563[(17)] = inst_52500);

return statearr_52563;
})();
var statearr_52564_53863 = state_52538__$1;
(statearr_52564_53863[(2)] = null);

(statearr_52564_53863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (22))){
var inst_52530 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
var statearr_52565_53864 = state_52538__$1;
(statearr_52565_53864[(2)] = inst_52530);

(statearr_52565_53864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (6))){
var inst_52487 = (state_52538[(14)]);
var inst_52491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52487,change);
var state_52538__$1 = state_52538;
var statearr_52566_53865 = state_52538__$1;
(statearr_52566_53865[(2)] = inst_52491);

(statearr_52566_53865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (25))){
var state_52538__$1 = state_52538;
var statearr_52567_53871 = state_52538__$1;
(statearr_52567_53871[(2)] = null);

(statearr_52567_53871[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (17))){
var inst_52487 = (state_52538[(14)]);
var inst_52479 = (state_52538[(18)]);
var inst_52509 = (inst_52479.cljs$core$IFn$_invoke$arity$1 ? inst_52479.cljs$core$IFn$_invoke$arity$1(inst_52487) : inst_52479.call(null,inst_52487));
var inst_52510 = cljs.core.not(inst_52509);
var state_52538__$1 = state_52538;
var statearr_52572_53873 = state_52538__$1;
(statearr_52572_53873[(2)] = inst_52510);

(statearr_52572_53873[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (3))){
var inst_52534 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52538__$1,inst_52534);
} else {
if((state_val_52539 === (12))){
var state_52538__$1 = state_52538;
var statearr_52573_53874 = state_52538__$1;
(statearr_52573_53874[(2)] = null);

(statearr_52573_53874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (2))){
var inst_52477 = (state_52538[(12)]);
var inst_52474 = (state_52538[(10)]);
var inst_52477__$1 = cljs.core.__destructure_map(inst_52474);
var inst_52478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52477__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52477__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52477__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52538__$1 = (function (){var statearr_52574 = state_52538;
(statearr_52574[(12)] = inst_52477__$1);

(statearr_52574[(16)] = inst_52478);

(statearr_52574[(18)] = inst_52479);

return statearr_52574;
})();
return cljs.core.async.ioc_alts_BANG_(state_52538__$1,(4),inst_52480);
} else {
if((state_val_52539 === (23))){
var inst_52518 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
if(cljs.core.truth_(inst_52518)){
var statearr_52575_53876 = state_52538__$1;
(statearr_52575_53876[(1)] = (24));

} else {
var statearr_52576_53877 = state_52538__$1;
(statearr_52576_53877[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (19))){
var inst_52513 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
var statearr_52577_53878 = state_52538__$1;
(statearr_52577_53878[(2)] = inst_52513);

(statearr_52577_53878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (11))){
var inst_52487 = (state_52538[(14)]);
var inst_52497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52487);
var state_52538__$1 = state_52538;
var statearr_52578_53880 = state_52538__$1;
(statearr_52578_53880[(2)] = inst_52497);

(statearr_52578_53880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (9))){
var inst_52478 = (state_52538[(16)]);
var inst_52487 = (state_52538[(14)]);
var inst_52504 = (state_52538[(19)]);
var inst_52504__$1 = (inst_52478.cljs$core$IFn$_invoke$arity$1 ? inst_52478.cljs$core$IFn$_invoke$arity$1(inst_52487) : inst_52478.call(null,inst_52487));
var state_52538__$1 = (function (){var statearr_52579 = state_52538;
(statearr_52579[(19)] = inst_52504__$1);

return statearr_52579;
})();
if(cljs.core.truth_(inst_52504__$1)){
var statearr_52580_53881 = state_52538__$1;
(statearr_52580_53881[(1)] = (14));

} else {
var statearr_52581_53882 = state_52538__$1;
(statearr_52581_53882[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (5))){
var inst_52488 = (state_52538[(13)]);
var state_52538__$1 = state_52538;
var statearr_52583_53883 = state_52538__$1;
(statearr_52583_53883[(2)] = inst_52488);

(statearr_52583_53883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (14))){
var inst_52504 = (state_52538[(19)]);
var state_52538__$1 = state_52538;
var statearr_52584_53884 = state_52538__$1;
(statearr_52584_53884[(2)] = inst_52504);

(statearr_52584_53884[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (26))){
var inst_52526 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
var statearr_52585_53885 = state_52538__$1;
(statearr_52585_53885[(2)] = inst_52526);

(statearr_52585_53885[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (16))){
var inst_52515 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
if(cljs.core.truth_(inst_52515)){
var statearr_52586_53886 = state_52538__$1;
(statearr_52586_53886[(1)] = (20));

} else {
var statearr_52587_53887 = state_52538__$1;
(statearr_52587_53887[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (10))){
var inst_52532 = (state_52538[(2)]);
var state_52538__$1 = state_52538;
var statearr_52588_53889 = state_52538__$1;
(statearr_52588_53889[(2)] = inst_52532);

(statearr_52588_53889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (18))){
var inst_52507 = (state_52538[(15)]);
var state_52538__$1 = state_52538;
var statearr_52589_53890 = state_52538__$1;
(statearr_52589_53890[(2)] = inst_52507);

(statearr_52589_53890[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52539 === (8))){
var inst_52486 = (state_52538[(7)]);
var inst_52495 = (inst_52486 == null);
var state_52538__$1 = state_52538;
if(cljs.core.truth_(inst_52495)){
var statearr_52590_53891 = state_52538__$1;
(statearr_52590_53891[(1)] = (11));

} else {
var statearr_52591_53892 = state_52538__$1;
(statearr_52591_53892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__51343__auto__ = null;
var cljs$core$async$mix_$_state_machine__51343__auto____0 = (function (){
var statearr_52594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52594[(0)] = cljs$core$async$mix_$_state_machine__51343__auto__);

(statearr_52594[(1)] = (1));

return statearr_52594;
});
var cljs$core$async$mix_$_state_machine__51343__auto____1 = (function (state_52538){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52538);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52595){var ex__51346__auto__ = e52595;
var statearr_52596_53894 = state_52538;
(statearr_52596_53894[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52538[(4)]))){
var statearr_52597_53896 = state_52538;
(statearr_52597_53896[(1)] = cljs.core.first((state_52538[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53899 = state_52538;
state_52538 = G__53899;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51343__auto__ = function(state_52538){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51343__auto____1.call(this,state_52538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51343__auto____0;
cljs$core$async$mix_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51343__auto____1;
return cljs$core$async$mix_$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52598 = f__51412__auto__();
(statearr_52598[(6)] = c__51411__auto___53835);

return statearr_52598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53903 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53903(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53905 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53905(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53907 = (function() {
var G__53908 = null;
var G__53908__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53908__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53908 = function(p,v){
switch(arguments.length){
case 1:
return G__53908__1.call(this,p);
case 2:
return G__53908__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53908.cljs$core$IFn$_invoke$arity$1 = G__53908__1;
G__53908.cljs$core$IFn$_invoke$arity$2 = G__53908__2;
return G__53908;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52609 = arguments.length;
switch (G__52609) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53907(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53907(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52612 = arguments.length;
switch (G__52612) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52610_SHARP_){
if(cljs.core.truth_((p1__52610_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52610_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52610_SHARP_.call(null,topic)))){
return p1__52610_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52610_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52614 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52615){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52615 = meta52615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52616,meta52615__$1){
var self__ = this;
var _52616__$1 = this;
return (new cljs.core.async.t_cljs$core$async52614(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52615__$1));
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52616){
var self__ = this;
var _52616__$1 = this;
return self__.meta52615;
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52615","meta52615",-1823042730,null)], null);
}));

(cljs.core.async.t_cljs$core$async52614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52614");

(cljs.core.async.t_cljs$core$async52614.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52614.
 */
cljs.core.async.__GT_t_cljs$core$async52614 = (function cljs$core$async$__GT_t_cljs$core$async52614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52615){
return (new cljs.core.async.t_cljs$core$async52614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52615));
});

}

return (new cljs.core.async.t_cljs$core$async52614(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51411__auto___53920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52695){
var state_val_52696 = (state_52695[(1)]);
if((state_val_52696 === (7))){
var inst_52691 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52697_53922 = state_52695__$1;
(statearr_52697_53922[(2)] = inst_52691);

(statearr_52697_53922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (20))){
var state_52695__$1 = state_52695;
var statearr_52698_53923 = state_52695__$1;
(statearr_52698_53923[(2)] = null);

(statearr_52698_53923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (1))){
var state_52695__$1 = state_52695;
var statearr_52699_53924 = state_52695__$1;
(statearr_52699_53924[(2)] = null);

(statearr_52699_53924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (24))){
var inst_52674 = (state_52695[(7)]);
var inst_52683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52674);
var state_52695__$1 = state_52695;
var statearr_52700_53925 = state_52695__$1;
(statearr_52700_53925[(2)] = inst_52683);

(statearr_52700_53925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (4))){
var inst_52626 = (state_52695[(8)]);
var inst_52626__$1 = (state_52695[(2)]);
var inst_52627 = (inst_52626__$1 == null);
var state_52695__$1 = (function (){var statearr_52701 = state_52695;
(statearr_52701[(8)] = inst_52626__$1);

return statearr_52701;
})();
if(cljs.core.truth_(inst_52627)){
var statearr_52702_53926 = state_52695__$1;
(statearr_52702_53926[(1)] = (5));

} else {
var statearr_52703_53927 = state_52695__$1;
(statearr_52703_53927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (15))){
var inst_52668 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52704_53928 = state_52695__$1;
(statearr_52704_53928[(2)] = inst_52668);

(statearr_52704_53928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (21))){
var inst_52688 = (state_52695[(2)]);
var state_52695__$1 = (function (){var statearr_52705 = state_52695;
(statearr_52705[(9)] = inst_52688);

return statearr_52705;
})();
var statearr_52706_53931 = state_52695__$1;
(statearr_52706_53931[(2)] = null);

(statearr_52706_53931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (13))){
var inst_52650 = (state_52695[(10)]);
var inst_52652 = cljs.core.chunked_seq_QMARK_(inst_52650);
var state_52695__$1 = state_52695;
if(inst_52652){
var statearr_52707_53933 = state_52695__$1;
(statearr_52707_53933[(1)] = (16));

} else {
var statearr_52708_53935 = state_52695__$1;
(statearr_52708_53935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (22))){
var inst_52680 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
if(cljs.core.truth_(inst_52680)){
var statearr_52710_53936 = state_52695__$1;
(statearr_52710_53936[(1)] = (23));

} else {
var statearr_52712_53937 = state_52695__$1;
(statearr_52712_53937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (6))){
var inst_52676 = (state_52695[(11)]);
var inst_52626 = (state_52695[(8)]);
var inst_52674 = (state_52695[(7)]);
var inst_52674__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52626) : topic_fn.call(null,inst_52626));
var inst_52675 = cljs.core.deref(mults);
var inst_52676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52675,inst_52674__$1);
var state_52695__$1 = (function (){var statearr_52713 = state_52695;
(statearr_52713[(11)] = inst_52676__$1);

(statearr_52713[(7)] = inst_52674__$1);

return statearr_52713;
})();
if(cljs.core.truth_(inst_52676__$1)){
var statearr_52714_53941 = state_52695__$1;
(statearr_52714_53941[(1)] = (19));

} else {
var statearr_52715_53943 = state_52695__$1;
(statearr_52715_53943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (25))){
var inst_52685 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52716_53944 = state_52695__$1;
(statearr_52716_53944[(2)] = inst_52685);

(statearr_52716_53944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (17))){
var inst_52650 = (state_52695[(10)]);
var inst_52659 = cljs.core.first(inst_52650);
var inst_52660 = cljs.core.async.muxch_STAR_(inst_52659);
var inst_52661 = cljs.core.async.close_BANG_(inst_52660);
var inst_52662 = cljs.core.next(inst_52650);
var inst_52636 = inst_52662;
var inst_52637 = null;
var inst_52638 = (0);
var inst_52639 = (0);
var state_52695__$1 = (function (){var statearr_52717 = state_52695;
(statearr_52717[(12)] = inst_52639);

(statearr_52717[(13)] = inst_52637);

(statearr_52717[(14)] = inst_52661);

(statearr_52717[(15)] = inst_52636);

(statearr_52717[(16)] = inst_52638);

return statearr_52717;
})();
var statearr_52718_53945 = state_52695__$1;
(statearr_52718_53945[(2)] = null);

(statearr_52718_53945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (3))){
var inst_52693 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52695__$1,inst_52693);
} else {
if((state_val_52696 === (12))){
var inst_52670 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52719_53948 = state_52695__$1;
(statearr_52719_53948[(2)] = inst_52670);

(statearr_52719_53948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (2))){
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52695__$1,(4),ch);
} else {
if((state_val_52696 === (23))){
var state_52695__$1 = state_52695;
var statearr_52720_53949 = state_52695__$1;
(statearr_52720_53949[(2)] = null);

(statearr_52720_53949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (19))){
var inst_52676 = (state_52695[(11)]);
var inst_52626 = (state_52695[(8)]);
var inst_52678 = cljs.core.async.muxch_STAR_(inst_52676);
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52695__$1,(22),inst_52678,inst_52626);
} else {
if((state_val_52696 === (11))){
var inst_52650 = (state_52695[(10)]);
var inst_52636 = (state_52695[(15)]);
var inst_52650__$1 = cljs.core.seq(inst_52636);
var state_52695__$1 = (function (){var statearr_52721 = state_52695;
(statearr_52721[(10)] = inst_52650__$1);

return statearr_52721;
})();
if(inst_52650__$1){
var statearr_52723_53952 = state_52695__$1;
(statearr_52723_53952[(1)] = (13));

} else {
var statearr_52725_53953 = state_52695__$1;
(statearr_52725_53953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (9))){
var inst_52672 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52726_53954 = state_52695__$1;
(statearr_52726_53954[(2)] = inst_52672);

(statearr_52726_53954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (5))){
var inst_52633 = cljs.core.deref(mults);
var inst_52634 = cljs.core.vals(inst_52633);
var inst_52635 = cljs.core.seq(inst_52634);
var inst_52636 = inst_52635;
var inst_52637 = null;
var inst_52638 = (0);
var inst_52639 = (0);
var state_52695__$1 = (function (){var statearr_52727 = state_52695;
(statearr_52727[(12)] = inst_52639);

(statearr_52727[(13)] = inst_52637);

(statearr_52727[(15)] = inst_52636);

(statearr_52727[(16)] = inst_52638);

return statearr_52727;
})();
var statearr_52728_53958 = state_52695__$1;
(statearr_52728_53958[(2)] = null);

(statearr_52728_53958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (14))){
var state_52695__$1 = state_52695;
var statearr_52732_53960 = state_52695__$1;
(statearr_52732_53960[(2)] = null);

(statearr_52732_53960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (16))){
var inst_52650 = (state_52695[(10)]);
var inst_52654 = cljs.core.chunk_first(inst_52650);
var inst_52655 = cljs.core.chunk_rest(inst_52650);
var inst_52656 = cljs.core.count(inst_52654);
var inst_52636 = inst_52655;
var inst_52637 = inst_52654;
var inst_52638 = inst_52656;
var inst_52639 = (0);
var state_52695__$1 = (function (){var statearr_52733 = state_52695;
(statearr_52733[(12)] = inst_52639);

(statearr_52733[(13)] = inst_52637);

(statearr_52733[(15)] = inst_52636);

(statearr_52733[(16)] = inst_52638);

return statearr_52733;
})();
var statearr_52734_53961 = state_52695__$1;
(statearr_52734_53961[(2)] = null);

(statearr_52734_53961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (10))){
var inst_52639 = (state_52695[(12)]);
var inst_52637 = (state_52695[(13)]);
var inst_52636 = (state_52695[(15)]);
var inst_52638 = (state_52695[(16)]);
var inst_52644 = cljs.core._nth(inst_52637,inst_52639);
var inst_52645 = cljs.core.async.muxch_STAR_(inst_52644);
var inst_52646 = cljs.core.async.close_BANG_(inst_52645);
var inst_52647 = (inst_52639 + (1));
var tmp52729 = inst_52637;
var tmp52730 = inst_52636;
var tmp52731 = inst_52638;
var inst_52636__$1 = tmp52730;
var inst_52637__$1 = tmp52729;
var inst_52638__$1 = tmp52731;
var inst_52639__$1 = inst_52647;
var state_52695__$1 = (function (){var statearr_52735 = state_52695;
(statearr_52735[(12)] = inst_52639__$1);

(statearr_52735[(13)] = inst_52637__$1);

(statearr_52735[(15)] = inst_52636__$1);

(statearr_52735[(17)] = inst_52646);

(statearr_52735[(16)] = inst_52638__$1);

return statearr_52735;
})();
var statearr_52736_53962 = state_52695__$1;
(statearr_52736_53962[(2)] = null);

(statearr_52736_53962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (18))){
var inst_52665 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52737_53965 = state_52695__$1;
(statearr_52737_53965[(2)] = inst_52665);

(statearr_52737_53965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (8))){
var inst_52639 = (state_52695[(12)]);
var inst_52638 = (state_52695[(16)]);
var inst_52641 = (inst_52639 < inst_52638);
var inst_52642 = inst_52641;
var state_52695__$1 = state_52695;
if(cljs.core.truth_(inst_52642)){
var statearr_52738_53967 = state_52695__$1;
(statearr_52738_53967[(1)] = (10));

} else {
var statearr_52739_53969 = state_52695__$1;
(statearr_52739_53969[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_52740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52740[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52740[(1)] = (1));

return statearr_52740;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52695){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52695);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52741){var ex__51346__auto__ = e52741;
var statearr_52742_53973 = state_52695;
(statearr_52742_53973[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52695[(4)]))){
var statearr_52743_53975 = state_52695;
(statearr_52743_53975[(1)] = cljs.core.first((state_52695[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53976 = state_52695;
state_52695 = G__53976;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52744 = f__51412__auto__();
(statearr_52744[(6)] = c__51411__auto___53920);

return statearr_52744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52746 = arguments.length;
switch (G__52746) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52753 = arguments.length;
switch (G__52753) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52759 = arguments.length;
switch (G__52759) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__51411__auto___53990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52807){
var state_val_52808 = (state_52807[(1)]);
if((state_val_52808 === (7))){
var state_52807__$1 = state_52807;
var statearr_52809_53991 = state_52807__$1;
(statearr_52809_53991[(2)] = null);

(statearr_52809_53991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (1))){
var state_52807__$1 = state_52807;
var statearr_52810_53992 = state_52807__$1;
(statearr_52810_53992[(2)] = null);

(statearr_52810_53992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (4))){
var inst_52768 = (state_52807[(7)]);
var inst_52767 = (state_52807[(8)]);
var inst_52770 = (inst_52768 < inst_52767);
var state_52807__$1 = state_52807;
if(cljs.core.truth_(inst_52770)){
var statearr_52811_53994 = state_52807__$1;
(statearr_52811_53994[(1)] = (6));

} else {
var statearr_52812_53995 = state_52807__$1;
(statearr_52812_53995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (15))){
var inst_52793 = (state_52807[(9)]);
var inst_52798 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52793);
var state_52807__$1 = state_52807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52807__$1,(17),out,inst_52798);
} else {
if((state_val_52808 === (13))){
var inst_52793 = (state_52807[(9)]);
var inst_52793__$1 = (state_52807[(2)]);
var inst_52794 = cljs.core.some(cljs.core.nil_QMARK_,inst_52793__$1);
var state_52807__$1 = (function (){var statearr_52813 = state_52807;
(statearr_52813[(9)] = inst_52793__$1);

return statearr_52813;
})();
if(cljs.core.truth_(inst_52794)){
var statearr_52814_53997 = state_52807__$1;
(statearr_52814_53997[(1)] = (14));

} else {
var statearr_52815_53998 = state_52807__$1;
(statearr_52815_53998[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (6))){
var state_52807__$1 = state_52807;
var statearr_52816_53999 = state_52807__$1;
(statearr_52816_53999[(2)] = null);

(statearr_52816_53999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (17))){
var inst_52800 = (state_52807[(2)]);
var state_52807__$1 = (function (){var statearr_52818 = state_52807;
(statearr_52818[(10)] = inst_52800);

return statearr_52818;
})();
var statearr_52819_54000 = state_52807__$1;
(statearr_52819_54000[(2)] = null);

(statearr_52819_54000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (3))){
var inst_52805 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52807__$1,inst_52805);
} else {
if((state_val_52808 === (12))){
var _ = (function (){var statearr_52820 = state_52807;
(statearr_52820[(4)] = cljs.core.rest((state_52807[(4)])));

return statearr_52820;
})();
var state_52807__$1 = state_52807;
var ex52817 = (state_52807__$1[(2)]);
var statearr_52821_54003 = state_52807__$1;
(statearr_52821_54003[(5)] = ex52817);


if((ex52817 instanceof Object)){
var statearr_52823_54004 = state_52807__$1;
(statearr_52823_54004[(1)] = (11));

(statearr_52823_54004[(5)] = null);

} else {
throw ex52817;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (2))){
var inst_52762 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52767 = cnt;
var inst_52768 = (0);
var state_52807__$1 = (function (){var statearr_52825 = state_52807;
(statearr_52825[(7)] = inst_52768);

(statearr_52825[(8)] = inst_52767);

(statearr_52825[(11)] = inst_52762);

return statearr_52825;
})();
var statearr_52826_54006 = state_52807__$1;
(statearr_52826_54006[(2)] = null);

(statearr_52826_54006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (11))){
var inst_52772 = (state_52807[(2)]);
var inst_52773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52807__$1 = (function (){var statearr_52827 = state_52807;
(statearr_52827[(12)] = inst_52772);

return statearr_52827;
})();
var statearr_52828_54009 = state_52807__$1;
(statearr_52828_54009[(2)] = inst_52773);

(statearr_52828_54009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (9))){
var inst_52768 = (state_52807[(7)]);
var _ = (function (){var statearr_52829 = state_52807;
(statearr_52829[(4)] = cljs.core.cons((12),(state_52807[(4)])));

return statearr_52829;
})();
var inst_52779 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52768) : chs__$1.call(null,inst_52768));
var inst_52780 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52768) : done.call(null,inst_52768));
var inst_52781 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52779,inst_52780);
var ___$1 = (function (){var statearr_52830 = state_52807;
(statearr_52830[(4)] = cljs.core.rest((state_52807[(4)])));

return statearr_52830;
})();
var state_52807__$1 = state_52807;
var statearr_52831_54011 = state_52807__$1;
(statearr_52831_54011[(2)] = inst_52781);

(statearr_52831_54011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (5))){
var inst_52791 = (state_52807[(2)]);
var state_52807__$1 = (function (){var statearr_52832 = state_52807;
(statearr_52832[(13)] = inst_52791);

return statearr_52832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52807__$1,(13),dchan);
} else {
if((state_val_52808 === (14))){
var inst_52796 = cljs.core.async.close_BANG_(out);
var state_52807__$1 = state_52807;
var statearr_52833_54013 = state_52807__$1;
(statearr_52833_54013[(2)] = inst_52796);

(statearr_52833_54013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (16))){
var inst_52803 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52834_54018 = state_52807__$1;
(statearr_52834_54018[(2)] = inst_52803);

(statearr_52834_54018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (10))){
var inst_52768 = (state_52807[(7)]);
var inst_52784 = (state_52807[(2)]);
var inst_52785 = (inst_52768 + (1));
var inst_52768__$1 = inst_52785;
var state_52807__$1 = (function (){var statearr_52835 = state_52807;
(statearr_52835[(7)] = inst_52768__$1);

(statearr_52835[(14)] = inst_52784);

return statearr_52835;
})();
var statearr_52837_54022 = state_52807__$1;
(statearr_52837_54022[(2)] = null);

(statearr_52837_54022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52808 === (8))){
var inst_52789 = (state_52807[(2)]);
var state_52807__$1 = state_52807;
var statearr_52838_54023 = state_52807__$1;
(statearr_52838_54023[(2)] = inst_52789);

(statearr_52838_54023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_52840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52840[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52840[(1)] = (1));

return statearr_52840;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52807){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52807);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52841){var ex__51346__auto__ = e52841;
var statearr_52842_54025 = state_52807;
(statearr_52842_54025[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52807[(4)]))){
var statearr_52843_54026 = state_52807;
(statearr_52843_54026[(1)] = cljs.core.first((state_52807[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54028 = state_52807;
state_52807 = G__54028;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52844 = f__51412__auto__();
(statearr_52844[(6)] = c__51411__auto___53990);

return statearr_52844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52847 = arguments.length;
switch (G__52847) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52882){
var state_val_52883 = (state_52882[(1)]);
if((state_val_52883 === (7))){
var inst_52861 = (state_52882[(7)]);
var inst_52862 = (state_52882[(8)]);
var inst_52861__$1 = (state_52882[(2)]);
var inst_52862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52861__$1,(0),null);
var inst_52863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52861__$1,(1),null);
var inst_52864 = (inst_52862__$1 == null);
var state_52882__$1 = (function (){var statearr_52884 = state_52882;
(statearr_52884[(9)] = inst_52863);

(statearr_52884[(7)] = inst_52861__$1);

(statearr_52884[(8)] = inst_52862__$1);

return statearr_52884;
})();
if(cljs.core.truth_(inst_52864)){
var statearr_52885_54036 = state_52882__$1;
(statearr_52885_54036[(1)] = (8));

} else {
var statearr_52886_54037 = state_52882__$1;
(statearr_52886_54037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (1))){
var inst_52851 = cljs.core.vec(chs);
var inst_52852 = inst_52851;
var state_52882__$1 = (function (){var statearr_52887 = state_52882;
(statearr_52887[(10)] = inst_52852);

return statearr_52887;
})();
var statearr_52888_54038 = state_52882__$1;
(statearr_52888_54038[(2)] = null);

(statearr_52888_54038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (4))){
var inst_52852 = (state_52882[(10)]);
var state_52882__$1 = state_52882;
return cljs.core.async.ioc_alts_BANG_(state_52882__$1,(7),inst_52852);
} else {
if((state_val_52883 === (6))){
var inst_52878 = (state_52882[(2)]);
var state_52882__$1 = state_52882;
var statearr_52889_54039 = state_52882__$1;
(statearr_52889_54039[(2)] = inst_52878);

(statearr_52889_54039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (3))){
var inst_52880 = (state_52882[(2)]);
var state_52882__$1 = state_52882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52882__$1,inst_52880);
} else {
if((state_val_52883 === (2))){
var inst_52852 = (state_52882[(10)]);
var inst_52854 = cljs.core.count(inst_52852);
var inst_52855 = (inst_52854 > (0));
var state_52882__$1 = state_52882;
if(cljs.core.truth_(inst_52855)){
var statearr_52891_54042 = state_52882__$1;
(statearr_52891_54042[(1)] = (4));

} else {
var statearr_52893_54043 = state_52882__$1;
(statearr_52893_54043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (11))){
var inst_52852 = (state_52882[(10)]);
var inst_52871 = (state_52882[(2)]);
var tmp52890 = inst_52852;
var inst_52852__$1 = tmp52890;
var state_52882__$1 = (function (){var statearr_52894 = state_52882;
(statearr_52894[(10)] = inst_52852__$1);

(statearr_52894[(11)] = inst_52871);

return statearr_52894;
})();
var statearr_52895_54044 = state_52882__$1;
(statearr_52895_54044[(2)] = null);

(statearr_52895_54044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (9))){
var inst_52862 = (state_52882[(8)]);
var state_52882__$1 = state_52882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52882__$1,(11),out,inst_52862);
} else {
if((state_val_52883 === (5))){
var inst_52876 = cljs.core.async.close_BANG_(out);
var state_52882__$1 = state_52882;
var statearr_52896_54047 = state_52882__$1;
(statearr_52896_54047[(2)] = inst_52876);

(statearr_52896_54047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (10))){
var inst_52874 = (state_52882[(2)]);
var state_52882__$1 = state_52882;
var statearr_52897_54049 = state_52882__$1;
(statearr_52897_54049[(2)] = inst_52874);

(statearr_52897_54049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52883 === (8))){
var inst_52863 = (state_52882[(9)]);
var inst_52861 = (state_52882[(7)]);
var inst_52852 = (state_52882[(10)]);
var inst_52862 = (state_52882[(8)]);
var inst_52866 = (function (){var cs = inst_52852;
var vec__52857 = inst_52861;
var v = inst_52862;
var c = inst_52863;
return (function (p1__52845_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52845_SHARP_);
});
})();
var inst_52867 = cljs.core.filterv(inst_52866,inst_52852);
var inst_52852__$1 = inst_52867;
var state_52882__$1 = (function (){var statearr_52898 = state_52882;
(statearr_52898[(10)] = inst_52852__$1);

return statearr_52898;
})();
var statearr_52899_54051 = state_52882__$1;
(statearr_52899_54051[(2)] = null);

(statearr_52899_54051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_52900 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52900[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52900[(1)] = (1));

return statearr_52900;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52882){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52882);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52901){var ex__51346__auto__ = e52901;
var statearr_52902_54057 = state_52882;
(statearr_52902_54057[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52882[(4)]))){
var statearr_52903_54061 = state_52882;
(statearr_52903_54061[(1)] = cljs.core.first((state_52882[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54062 = state_52882;
state_52882 = G__54062;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52904 = f__51412__auto__();
(statearr_52904[(6)] = c__51411__auto___54033);

return statearr_52904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52906 = arguments.length;
switch (G__52906) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_52931){
var state_val_52932 = (state_52931[(1)]);
if((state_val_52932 === (7))){
var inst_52913 = (state_52931[(7)]);
var inst_52913__$1 = (state_52931[(2)]);
var inst_52914 = (inst_52913__$1 == null);
var inst_52915 = cljs.core.not(inst_52914);
var state_52931__$1 = (function (){var statearr_52937 = state_52931;
(statearr_52937[(7)] = inst_52913__$1);

return statearr_52937;
})();
if(inst_52915){
var statearr_52938_54070 = state_52931__$1;
(statearr_52938_54070[(1)] = (8));

} else {
var statearr_52939_54071 = state_52931__$1;
(statearr_52939_54071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (1))){
var inst_52908 = (0);
var state_52931__$1 = (function (){var statearr_52940 = state_52931;
(statearr_52940[(8)] = inst_52908);

return statearr_52940;
})();
var statearr_52941_54072 = state_52931__$1;
(statearr_52941_54072[(2)] = null);

(statearr_52941_54072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (4))){
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52931__$1,(7),ch);
} else {
if((state_val_52932 === (6))){
var inst_52926 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
var statearr_52942_54074 = state_52931__$1;
(statearr_52942_54074[(2)] = inst_52926);

(statearr_52942_54074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (3))){
var inst_52928 = (state_52931[(2)]);
var inst_52929 = cljs.core.async.close_BANG_(out);
var state_52931__$1 = (function (){var statearr_52943 = state_52931;
(statearr_52943[(9)] = inst_52928);

return statearr_52943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52931__$1,inst_52929);
} else {
if((state_val_52932 === (2))){
var inst_52908 = (state_52931[(8)]);
var inst_52910 = (inst_52908 < n);
var state_52931__$1 = state_52931;
if(cljs.core.truth_(inst_52910)){
var statearr_52945_54076 = state_52931__$1;
(statearr_52945_54076[(1)] = (4));

} else {
var statearr_52946_54077 = state_52931__$1;
(statearr_52946_54077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (11))){
var inst_52908 = (state_52931[(8)]);
var inst_52918 = (state_52931[(2)]);
var inst_52919 = (inst_52908 + (1));
var inst_52908__$1 = inst_52919;
var state_52931__$1 = (function (){var statearr_52947 = state_52931;
(statearr_52947[(8)] = inst_52908__$1);

(statearr_52947[(10)] = inst_52918);

return statearr_52947;
})();
var statearr_52948_54078 = state_52931__$1;
(statearr_52948_54078[(2)] = null);

(statearr_52948_54078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (9))){
var state_52931__$1 = state_52931;
var statearr_52949_54082 = state_52931__$1;
(statearr_52949_54082[(2)] = null);

(statearr_52949_54082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (5))){
var state_52931__$1 = state_52931;
var statearr_52950_54083 = state_52931__$1;
(statearr_52950_54083[(2)] = null);

(statearr_52950_54083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (10))){
var inst_52923 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
var statearr_52951_54084 = state_52931__$1;
(statearr_52951_54084[(2)] = inst_52923);

(statearr_52951_54084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (8))){
var inst_52913 = (state_52931[(7)]);
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52931__$1,(11),out,inst_52913);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_52953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52953[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52953[(1)] = (1));

return statearr_52953;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52931){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52931);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52955){var ex__51346__auto__ = e52955;
var statearr_52956_54087 = state_52931;
(statearr_52956_54087[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52931[(4)]))){
var statearr_52957_54088 = state_52931;
(statearr_52957_54088[(1)] = cljs.core.first((state_52931[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54092 = state_52931;
state_52931 = G__54092;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_52958 = f__51412__auto__();
(statearr_52958[(6)] = c__51411__auto___54066);

return statearr_52958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52964 = (function (f,ch,meta52965){
this.f = f;
this.ch = ch;
this.meta52965 = meta52965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52966,meta52965__$1){
var self__ = this;
var _52966__$1 = this;
return (new cljs.core.async.t_cljs$core$async52964(self__.f,self__.ch,meta52965__$1));
}));

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52966){
var self__ = this;
var _52966__$1 = this;
return self__.meta52965;
}));

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52992 = (function (f,ch,meta52965,_,fn1,meta52993){
this.f = f;
this.ch = ch;
this.meta52965 = meta52965;
this._ = _;
this.fn1 = fn1;
this.meta52993 = meta52993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52994,meta52993__$1){
var self__ = this;
var _52994__$1 = this;
return (new cljs.core.async.t_cljs$core$async52992(self__.f,self__.ch,self__.meta52965,self__._,self__.fn1,meta52993__$1));
}));

(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52994){
var self__ = this;
var _52994__$1 = this;
return self__.meta52993;
}));

(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52963_SHARP_){
var G__52995 = (((p1__52963_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52963_SHARP_) : self__.f.call(null,p1__52963_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52995) : f1.call(null,G__52995));
});
}));

(cljs.core.async.t_cljs$core$async52992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52965","meta52965",-1955468215,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52964","cljs.core.async/t_cljs$core$async52964",-1463635032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52993","meta52993",1370215513,null)], null);
}));

(cljs.core.async.t_cljs$core$async52992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52992");

(cljs.core.async.t_cljs$core$async52992.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52992.
 */
cljs.core.async.__GT_t_cljs$core$async52992 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52992(f__$1,ch__$1,meta52965__$1,___$2,fn1__$1,meta52993){
return (new cljs.core.async.t_cljs$core$async52992(f__$1,ch__$1,meta52965__$1,___$2,fn1__$1,meta52993));
});

}

return (new cljs.core.async.t_cljs$core$async52992(self__.f,self__.ch,self__.meta52965,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52996 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52996) : self__.f.call(null,G__52996));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52965","meta52965",-1955468215,null)], null);
}));

(cljs.core.async.t_cljs$core$async52964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52964");

(cljs.core.async.t_cljs$core$async52964.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52964.
 */
cljs.core.async.__GT_t_cljs$core$async52964 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52964(f__$1,ch__$1,meta52965){
return (new cljs.core.async.t_cljs$core$async52964(f__$1,ch__$1,meta52965));
});

}

return (new cljs.core.async.t_cljs$core$async52964(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52997 = (function (f,ch,meta52998){
this.f = f;
this.ch = ch;
this.meta52998 = meta52998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52999,meta52998__$1){
var self__ = this;
var _52999__$1 = this;
return (new cljs.core.async.t_cljs$core$async52997(self__.f,self__.ch,meta52998__$1));
}));

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52999){
var self__ = this;
var _52999__$1 = this;
return self__.meta52998;
}));

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52998","meta52998",13349073,null)], null);
}));

(cljs.core.async.t_cljs$core$async52997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52997");

(cljs.core.async.t_cljs$core$async52997.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52997.
 */
cljs.core.async.__GT_t_cljs$core$async52997 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52997(f__$1,ch__$1,meta52998){
return (new cljs.core.async.t_cljs$core$async52997(f__$1,ch__$1,meta52998));
});

}

return (new cljs.core.async.t_cljs$core$async52997(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53000 = (function (p,ch,meta53001){
this.p = p;
this.ch = ch;
this.meta53001 = meta53001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53002,meta53001__$1){
var self__ = this;
var _53002__$1 = this;
return (new cljs.core.async.t_cljs$core$async53000(self__.p,self__.ch,meta53001__$1));
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53002){
var self__ = this;
var _53002__$1 = this;
return self__.meta53001;
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53001","meta53001",1018173034,null)], null);
}));

(cljs.core.async.t_cljs$core$async53000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53000");

(cljs.core.async.t_cljs$core$async53000.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async53000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53000.
 */
cljs.core.async.__GT_t_cljs$core$async53000 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53000(p__$1,ch__$1,meta53001){
return (new cljs.core.async.t_cljs$core$async53000(p__$1,ch__$1,meta53001));
});

}

return (new cljs.core.async.t_cljs$core$async53000(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53004 = arguments.length;
switch (G__53004) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_53025){
var state_val_53026 = (state_53025[(1)]);
if((state_val_53026 === (7))){
var inst_53021 = (state_53025[(2)]);
var state_53025__$1 = state_53025;
var statearr_53027_54137 = state_53025__$1;
(statearr_53027_54137[(2)] = inst_53021);

(statearr_53027_54137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (1))){
var state_53025__$1 = state_53025;
var statearr_53028_54142 = state_53025__$1;
(statearr_53028_54142[(2)] = null);

(statearr_53028_54142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (4))){
var inst_53007 = (state_53025[(7)]);
var inst_53007__$1 = (state_53025[(2)]);
var inst_53008 = (inst_53007__$1 == null);
var state_53025__$1 = (function (){var statearr_53029 = state_53025;
(statearr_53029[(7)] = inst_53007__$1);

return statearr_53029;
})();
if(cljs.core.truth_(inst_53008)){
var statearr_53030_54145 = state_53025__$1;
(statearr_53030_54145[(1)] = (5));

} else {
var statearr_53031_54149 = state_53025__$1;
(statearr_53031_54149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (6))){
var inst_53007 = (state_53025[(7)]);
var inst_53012 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53007) : p.call(null,inst_53007));
var state_53025__$1 = state_53025;
if(cljs.core.truth_(inst_53012)){
var statearr_53032_54152 = state_53025__$1;
(statearr_53032_54152[(1)] = (8));

} else {
var statearr_53033_54154 = state_53025__$1;
(statearr_53033_54154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (3))){
var inst_53023 = (state_53025[(2)]);
var state_53025__$1 = state_53025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53025__$1,inst_53023);
} else {
if((state_val_53026 === (2))){
var state_53025__$1 = state_53025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53025__$1,(4),ch);
} else {
if((state_val_53026 === (11))){
var inst_53015 = (state_53025[(2)]);
var state_53025__$1 = state_53025;
var statearr_53034_54155 = state_53025__$1;
(statearr_53034_54155[(2)] = inst_53015);

(statearr_53034_54155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (9))){
var state_53025__$1 = state_53025;
var statearr_53035_54156 = state_53025__$1;
(statearr_53035_54156[(2)] = null);

(statearr_53035_54156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (5))){
var inst_53010 = cljs.core.async.close_BANG_(out);
var state_53025__$1 = state_53025;
var statearr_53036_54158 = state_53025__$1;
(statearr_53036_54158[(2)] = inst_53010);

(statearr_53036_54158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (10))){
var inst_53018 = (state_53025[(2)]);
var state_53025__$1 = (function (){var statearr_53037 = state_53025;
(statearr_53037[(8)] = inst_53018);

return statearr_53037;
})();
var statearr_53038_54159 = state_53025__$1;
(statearr_53038_54159[(2)] = null);

(statearr_53038_54159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (8))){
var inst_53007 = (state_53025[(7)]);
var state_53025__$1 = state_53025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53025__$1,(11),out,inst_53007);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_53039 = [null,null,null,null,null,null,null,null,null];
(statearr_53039[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_53039[(1)] = (1));

return statearr_53039;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_53025){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_53025);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e53040){var ex__51346__auto__ = e53040;
var statearr_53041_54162 = state_53025;
(statearr_53041_54162[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53025[(4)]))){
var statearr_53042_54167 = state_53025;
(statearr_53042_54167[(1)] = cljs.core.first((state_53025[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54168 = state_53025;
state_53025 = G__54168;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_53025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_53025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_53043 = f__51412__auto__();
(statearr_53043[(6)] = c__51411__auto___54134);

return statearr_53043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53045 = arguments.length;
switch (G__53045) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51411__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_53107){
var state_val_53108 = (state_53107[(1)]);
if((state_val_53108 === (7))){
var inst_53103 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53109_54174 = state_53107__$1;
(statearr_53109_54174[(2)] = inst_53103);

(statearr_53109_54174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (20))){
var inst_53073 = (state_53107[(7)]);
var inst_53084 = (state_53107[(2)]);
var inst_53085 = cljs.core.next(inst_53073);
var inst_53059 = inst_53085;
var inst_53060 = null;
var inst_53061 = (0);
var inst_53062 = (0);
var state_53107__$1 = (function (){var statearr_53110 = state_53107;
(statearr_53110[(8)] = inst_53061);

(statearr_53110[(9)] = inst_53062);

(statearr_53110[(10)] = inst_53084);

(statearr_53110[(11)] = inst_53060);

(statearr_53110[(12)] = inst_53059);

return statearr_53110;
})();
var statearr_53111_54175 = state_53107__$1;
(statearr_53111_54175[(2)] = null);

(statearr_53111_54175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (1))){
var state_53107__$1 = state_53107;
var statearr_53112_54177 = state_53107__$1;
(statearr_53112_54177[(2)] = null);

(statearr_53112_54177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (4))){
var inst_53048 = (state_53107[(13)]);
var inst_53048__$1 = (state_53107[(2)]);
var inst_53049 = (inst_53048__$1 == null);
var state_53107__$1 = (function (){var statearr_53113 = state_53107;
(statearr_53113[(13)] = inst_53048__$1);

return statearr_53113;
})();
if(cljs.core.truth_(inst_53049)){
var statearr_53114_54181 = state_53107__$1;
(statearr_53114_54181[(1)] = (5));

} else {
var statearr_53115_54182 = state_53107__$1;
(statearr_53115_54182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (15))){
var state_53107__$1 = state_53107;
var statearr_53119_54183 = state_53107__$1;
(statearr_53119_54183[(2)] = null);

(statearr_53119_54183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (21))){
var state_53107__$1 = state_53107;
var statearr_53120_54184 = state_53107__$1;
(statearr_53120_54184[(2)] = null);

(statearr_53120_54184[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (13))){
var inst_53061 = (state_53107[(8)]);
var inst_53062 = (state_53107[(9)]);
var inst_53060 = (state_53107[(11)]);
var inst_53059 = (state_53107[(12)]);
var inst_53069 = (state_53107[(2)]);
var inst_53070 = (inst_53062 + (1));
var tmp53116 = inst_53061;
var tmp53117 = inst_53060;
var tmp53118 = inst_53059;
var inst_53059__$1 = tmp53118;
var inst_53060__$1 = tmp53117;
var inst_53061__$1 = tmp53116;
var inst_53062__$1 = inst_53070;
var state_53107__$1 = (function (){var statearr_53121 = state_53107;
(statearr_53121[(8)] = inst_53061__$1);

(statearr_53121[(14)] = inst_53069);

(statearr_53121[(9)] = inst_53062__$1);

(statearr_53121[(11)] = inst_53060__$1);

(statearr_53121[(12)] = inst_53059__$1);

return statearr_53121;
})();
var statearr_53122_54188 = state_53107__$1;
(statearr_53122_54188[(2)] = null);

(statearr_53122_54188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (22))){
var state_53107__$1 = state_53107;
var statearr_53123_54190 = state_53107__$1;
(statearr_53123_54190[(2)] = null);

(statearr_53123_54190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (6))){
var inst_53048 = (state_53107[(13)]);
var inst_53057 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53048) : f.call(null,inst_53048));
var inst_53058 = cljs.core.seq(inst_53057);
var inst_53059 = inst_53058;
var inst_53060 = null;
var inst_53061 = (0);
var inst_53062 = (0);
var state_53107__$1 = (function (){var statearr_53124 = state_53107;
(statearr_53124[(8)] = inst_53061);

(statearr_53124[(9)] = inst_53062);

(statearr_53124[(11)] = inst_53060);

(statearr_53124[(12)] = inst_53059);

return statearr_53124;
})();
var statearr_53125_54191 = state_53107__$1;
(statearr_53125_54191[(2)] = null);

(statearr_53125_54191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (17))){
var inst_53073 = (state_53107[(7)]);
var inst_53077 = cljs.core.chunk_first(inst_53073);
var inst_53078 = cljs.core.chunk_rest(inst_53073);
var inst_53079 = cljs.core.count(inst_53077);
var inst_53059 = inst_53078;
var inst_53060 = inst_53077;
var inst_53061 = inst_53079;
var inst_53062 = (0);
var state_53107__$1 = (function (){var statearr_53126 = state_53107;
(statearr_53126[(8)] = inst_53061);

(statearr_53126[(9)] = inst_53062);

(statearr_53126[(11)] = inst_53060);

(statearr_53126[(12)] = inst_53059);

return statearr_53126;
})();
var statearr_53127_54194 = state_53107__$1;
(statearr_53127_54194[(2)] = null);

(statearr_53127_54194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (3))){
var inst_53105 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53107__$1,inst_53105);
} else {
if((state_val_53108 === (12))){
var inst_53093 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53128_54196 = state_53107__$1;
(statearr_53128_54196[(2)] = inst_53093);

(statearr_53128_54196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (2))){
var state_53107__$1 = state_53107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53107__$1,(4),in$);
} else {
if((state_val_53108 === (23))){
var inst_53101 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53129_54198 = state_53107__$1;
(statearr_53129_54198[(2)] = inst_53101);

(statearr_53129_54198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (19))){
var inst_53088 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53130_54199 = state_53107__$1;
(statearr_53130_54199[(2)] = inst_53088);

(statearr_53130_54199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (11))){
var inst_53073 = (state_53107[(7)]);
var inst_53059 = (state_53107[(12)]);
var inst_53073__$1 = cljs.core.seq(inst_53059);
var state_53107__$1 = (function (){var statearr_53131 = state_53107;
(statearr_53131[(7)] = inst_53073__$1);

return statearr_53131;
})();
if(inst_53073__$1){
var statearr_53132_54200 = state_53107__$1;
(statearr_53132_54200[(1)] = (14));

} else {
var statearr_53133_54201 = state_53107__$1;
(statearr_53133_54201[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (9))){
var inst_53095 = (state_53107[(2)]);
var inst_53096 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53107__$1 = (function (){var statearr_53134 = state_53107;
(statearr_53134[(15)] = inst_53095);

return statearr_53134;
})();
if(cljs.core.truth_(inst_53096)){
var statearr_53135_54204 = state_53107__$1;
(statearr_53135_54204[(1)] = (21));

} else {
var statearr_53136_54205 = state_53107__$1;
(statearr_53136_54205[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (5))){
var inst_53051 = cljs.core.async.close_BANG_(out);
var state_53107__$1 = state_53107;
var statearr_53137_54206 = state_53107__$1;
(statearr_53137_54206[(2)] = inst_53051);

(statearr_53137_54206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (14))){
var inst_53073 = (state_53107[(7)]);
var inst_53075 = cljs.core.chunked_seq_QMARK_(inst_53073);
var state_53107__$1 = state_53107;
if(inst_53075){
var statearr_53138_54207 = state_53107__$1;
(statearr_53138_54207[(1)] = (17));

} else {
var statearr_53139_54208 = state_53107__$1;
(statearr_53139_54208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (16))){
var inst_53091 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53140_54209 = state_53107__$1;
(statearr_53140_54209[(2)] = inst_53091);

(statearr_53140_54209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (10))){
var inst_53062 = (state_53107[(9)]);
var inst_53060 = (state_53107[(11)]);
var inst_53067 = cljs.core._nth(inst_53060,inst_53062);
var state_53107__$1 = state_53107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53107__$1,(13),out,inst_53067);
} else {
if((state_val_53108 === (18))){
var inst_53073 = (state_53107[(7)]);
var inst_53082 = cljs.core.first(inst_53073);
var state_53107__$1 = state_53107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53107__$1,(20),out,inst_53082);
} else {
if((state_val_53108 === (8))){
var inst_53061 = (state_53107[(8)]);
var inst_53062 = (state_53107[(9)]);
var inst_53064 = (inst_53062 < inst_53061);
var inst_53065 = inst_53064;
var state_53107__$1 = state_53107;
if(cljs.core.truth_(inst_53065)){
var statearr_53141_54211 = state_53107__$1;
(statearr_53141_54211[(1)] = (10));

} else {
var statearr_53142_54212 = state_53107__$1;
(statearr_53142_54212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_53143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53143[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__);

(statearr_53143[(1)] = (1));

return statearr_53143;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____1 = (function (state_53107){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_53107);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e53144){var ex__51346__auto__ = e53144;
var statearr_53145_54214 = state_53107;
(statearr_53145_54214[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53107[(4)]))){
var statearr_53146_54216 = state_53107;
(statearr_53146_54216[(1)] = cljs.core.first((state_53107[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54217 = state_53107;
state_53107 = G__54217;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__ = function(state_53107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____1.call(this,state_53107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_53147 = f__51412__auto__();
(statearr_53147[(6)] = c__51411__auto__);

return statearr_53147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));

return c__51411__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53149 = arguments.length;
switch (G__53149) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53151 = arguments.length;
switch (G__53151) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53153 = arguments.length;
switch (G__53153) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_53177){
var state_val_53178 = (state_53177[(1)]);
if((state_val_53178 === (7))){
var inst_53172 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53179_54229 = state_53177__$1;
(statearr_53179_54229[(2)] = inst_53172);

(statearr_53179_54229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (1))){
var inst_53154 = null;
var state_53177__$1 = (function (){var statearr_53180 = state_53177;
(statearr_53180[(7)] = inst_53154);

return statearr_53180;
})();
var statearr_53181_54230 = state_53177__$1;
(statearr_53181_54230[(2)] = null);

(statearr_53181_54230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (4))){
var inst_53157 = (state_53177[(8)]);
var inst_53157__$1 = (state_53177[(2)]);
var inst_53158 = (inst_53157__$1 == null);
var inst_53159 = cljs.core.not(inst_53158);
var state_53177__$1 = (function (){var statearr_53182 = state_53177;
(statearr_53182[(8)] = inst_53157__$1);

return statearr_53182;
})();
if(inst_53159){
var statearr_53183_54234 = state_53177__$1;
(statearr_53183_54234[(1)] = (5));

} else {
var statearr_53184_54235 = state_53177__$1;
(statearr_53184_54235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (6))){
var state_53177__$1 = state_53177;
var statearr_53185_54236 = state_53177__$1;
(statearr_53185_54236[(2)] = null);

(statearr_53185_54236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (3))){
var inst_53174 = (state_53177[(2)]);
var inst_53175 = cljs.core.async.close_BANG_(out);
var state_53177__$1 = (function (){var statearr_53186 = state_53177;
(statearr_53186[(9)] = inst_53174);

return statearr_53186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53177__$1,inst_53175);
} else {
if((state_val_53178 === (2))){
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53177__$1,(4),ch);
} else {
if((state_val_53178 === (11))){
var inst_53157 = (state_53177[(8)]);
var inst_53166 = (state_53177[(2)]);
var inst_53154 = inst_53157;
var state_53177__$1 = (function (){var statearr_53187 = state_53177;
(statearr_53187[(7)] = inst_53154);

(statearr_53187[(10)] = inst_53166);

return statearr_53187;
})();
var statearr_53188_54239 = state_53177__$1;
(statearr_53188_54239[(2)] = null);

(statearr_53188_54239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (9))){
var inst_53157 = (state_53177[(8)]);
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53177__$1,(11),out,inst_53157);
} else {
if((state_val_53178 === (5))){
var inst_53154 = (state_53177[(7)]);
var inst_53157 = (state_53177[(8)]);
var inst_53161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53157,inst_53154);
var state_53177__$1 = state_53177;
if(inst_53161){
var statearr_53190_54240 = state_53177__$1;
(statearr_53190_54240[(1)] = (8));

} else {
var statearr_53191_54241 = state_53177__$1;
(statearr_53191_54241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (10))){
var inst_53169 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53192_54244 = state_53177__$1;
(statearr_53192_54244[(2)] = inst_53169);

(statearr_53192_54244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (8))){
var inst_53154 = (state_53177[(7)]);
var tmp53189 = inst_53154;
var inst_53154__$1 = tmp53189;
var state_53177__$1 = (function (){var statearr_53193 = state_53177;
(statearr_53193[(7)] = inst_53154__$1);

return statearr_53193;
})();
var statearr_53194_54245 = state_53177__$1;
(statearr_53194_54245[(2)] = null);

(statearr_53194_54245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_53195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53195[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_53195[(1)] = (1));

return statearr_53195;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_53177){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_53177);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e53196){var ex__51346__auto__ = e53196;
var statearr_53197_54249 = state_53177;
(statearr_53197_54249[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53177[(4)]))){
var statearr_53198_54250 = state_53177;
(statearr_53198_54250[(1)] = cljs.core.first((state_53177[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54251 = state_53177;
state_53177 = G__54251;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_53177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_53177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_53199 = f__51412__auto__();
(statearr_53199[(6)] = c__51411__auto___54228);

return statearr_53199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53201 = arguments.length;
switch (G__53201) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_53239){
var state_val_53240 = (state_53239[(1)]);
if((state_val_53240 === (7))){
var inst_53235 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53241_54256 = state_53239__$1;
(statearr_53241_54256[(2)] = inst_53235);

(statearr_53241_54256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (1))){
var inst_53202 = (new Array(n));
var inst_53203 = inst_53202;
var inst_53204 = (0);
var state_53239__$1 = (function (){var statearr_53242 = state_53239;
(statearr_53242[(7)] = inst_53204);

(statearr_53242[(8)] = inst_53203);

return statearr_53242;
})();
var statearr_53243_54257 = state_53239__$1;
(statearr_53243_54257[(2)] = null);

(statearr_53243_54257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (4))){
var inst_53207 = (state_53239[(9)]);
var inst_53207__$1 = (state_53239[(2)]);
var inst_53208 = (inst_53207__$1 == null);
var inst_53209 = cljs.core.not(inst_53208);
var state_53239__$1 = (function (){var statearr_53244 = state_53239;
(statearr_53244[(9)] = inst_53207__$1);

return statearr_53244;
})();
if(inst_53209){
var statearr_53245_54258 = state_53239__$1;
(statearr_53245_54258[(1)] = (5));

} else {
var statearr_53246_54259 = state_53239__$1;
(statearr_53246_54259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (15))){
var inst_53229 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53247_54260 = state_53239__$1;
(statearr_53247_54260[(2)] = inst_53229);

(statearr_53247_54260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (13))){
var state_53239__$1 = state_53239;
var statearr_53248_54261 = state_53239__$1;
(statearr_53248_54261[(2)] = null);

(statearr_53248_54261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (6))){
var inst_53204 = (state_53239[(7)]);
var inst_53225 = (inst_53204 > (0));
var state_53239__$1 = state_53239;
if(cljs.core.truth_(inst_53225)){
var statearr_53249_54267 = state_53239__$1;
(statearr_53249_54267[(1)] = (12));

} else {
var statearr_53250_54268 = state_53239__$1;
(statearr_53250_54268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (3))){
var inst_53237 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53239__$1,inst_53237);
} else {
if((state_val_53240 === (12))){
var inst_53203 = (state_53239[(8)]);
var inst_53227 = cljs.core.vec(inst_53203);
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53239__$1,(15),out,inst_53227);
} else {
if((state_val_53240 === (2))){
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53239__$1,(4),ch);
} else {
if((state_val_53240 === (11))){
var inst_53219 = (state_53239[(2)]);
var inst_53220 = (new Array(n));
var inst_53203 = inst_53220;
var inst_53204 = (0);
var state_53239__$1 = (function (){var statearr_53251 = state_53239;
(statearr_53251[(10)] = inst_53219);

(statearr_53251[(7)] = inst_53204);

(statearr_53251[(8)] = inst_53203);

return statearr_53251;
})();
var statearr_53252_54271 = state_53239__$1;
(statearr_53252_54271[(2)] = null);

(statearr_53252_54271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (9))){
var inst_53203 = (state_53239[(8)]);
var inst_53217 = cljs.core.vec(inst_53203);
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53239__$1,(11),out,inst_53217);
} else {
if((state_val_53240 === (5))){
var inst_53207 = (state_53239[(9)]);
var inst_53212 = (state_53239[(11)]);
var inst_53204 = (state_53239[(7)]);
var inst_53203 = (state_53239[(8)]);
var inst_53211 = (inst_53203[inst_53204] = inst_53207);
var inst_53212__$1 = (inst_53204 + (1));
var inst_53213 = (inst_53212__$1 < n);
var state_53239__$1 = (function (){var statearr_53253 = state_53239;
(statearr_53253[(12)] = inst_53211);

(statearr_53253[(11)] = inst_53212__$1);

return statearr_53253;
})();
if(cljs.core.truth_(inst_53213)){
var statearr_53254_54273 = state_53239__$1;
(statearr_53254_54273[(1)] = (8));

} else {
var statearr_53255_54275 = state_53239__$1;
(statearr_53255_54275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (14))){
var inst_53232 = (state_53239[(2)]);
var inst_53233 = cljs.core.async.close_BANG_(out);
var state_53239__$1 = (function (){var statearr_53257 = state_53239;
(statearr_53257[(13)] = inst_53232);

return statearr_53257;
})();
var statearr_53258_54279 = state_53239__$1;
(statearr_53258_54279[(2)] = inst_53233);

(statearr_53258_54279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (10))){
var inst_53223 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53259_54282 = state_53239__$1;
(statearr_53259_54282[(2)] = inst_53223);

(statearr_53259_54282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (8))){
var inst_53212 = (state_53239[(11)]);
var inst_53203 = (state_53239[(8)]);
var tmp53256 = inst_53203;
var inst_53203__$1 = tmp53256;
var inst_53204 = inst_53212;
var state_53239__$1 = (function (){var statearr_53260 = state_53239;
(statearr_53260[(7)] = inst_53204);

(statearr_53260[(8)] = inst_53203__$1);

return statearr_53260;
})();
var statearr_53261_54283 = state_53239__$1;
(statearr_53261_54283[(2)] = null);

(statearr_53261_54283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_53262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53262[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_53262[(1)] = (1));

return statearr_53262;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_53239){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_53239);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e53263){var ex__51346__auto__ = e53263;
var statearr_53264_54284 = state_53239;
(statearr_53264_54284[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53239[(4)]))){
var statearr_53265_54285 = state_53239;
(statearr_53265_54285[(1)] = cljs.core.first((state_53239[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54286 = state_53239;
state_53239 = G__54286;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_53239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_53239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_53266 = f__51412__auto__();
(statearr_53266[(6)] = c__51411__auto___54255);

return statearr_53266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53268 = arguments.length;
switch (G__53268) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51411__auto___54290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51412__auto__ = (function (){var switch__51342__auto__ = (function (state_53313){
var state_val_53314 = (state_53313[(1)]);
if((state_val_53314 === (7))){
var inst_53309 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53315_54291 = state_53313__$1;
(statearr_53315_54291[(2)] = inst_53309);

(statearr_53315_54291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (1))){
var inst_53269 = [];
var inst_53270 = inst_53269;
var inst_53271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53313__$1 = (function (){var statearr_53316 = state_53313;
(statearr_53316[(7)] = inst_53271);

(statearr_53316[(8)] = inst_53270);

return statearr_53316;
})();
var statearr_53317_54294 = state_53313__$1;
(statearr_53317_54294[(2)] = null);

(statearr_53317_54294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (4))){
var inst_53274 = (state_53313[(9)]);
var inst_53274__$1 = (state_53313[(2)]);
var inst_53275 = (inst_53274__$1 == null);
var inst_53276 = cljs.core.not(inst_53275);
var state_53313__$1 = (function (){var statearr_53318 = state_53313;
(statearr_53318[(9)] = inst_53274__$1);

return statearr_53318;
})();
if(inst_53276){
var statearr_53319_54297 = state_53313__$1;
(statearr_53319_54297[(1)] = (5));

} else {
var statearr_53320_54298 = state_53313__$1;
(statearr_53320_54298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (15))){
var inst_53270 = (state_53313[(8)]);
var inst_53301 = cljs.core.vec(inst_53270);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53313__$1,(18),out,inst_53301);
} else {
if((state_val_53314 === (13))){
var inst_53296 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53321_54300 = state_53313__$1;
(statearr_53321_54300[(2)] = inst_53296);

(statearr_53321_54300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (6))){
var inst_53270 = (state_53313[(8)]);
var inst_53298 = inst_53270.length;
var inst_53299 = (inst_53298 > (0));
var state_53313__$1 = state_53313;
if(cljs.core.truth_(inst_53299)){
var statearr_53322_54302 = state_53313__$1;
(statearr_53322_54302[(1)] = (15));

} else {
var statearr_53323_54303 = state_53313__$1;
(statearr_53323_54303[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (17))){
var inst_53306 = (state_53313[(2)]);
var inst_53307 = cljs.core.async.close_BANG_(out);
var state_53313__$1 = (function (){var statearr_53324 = state_53313;
(statearr_53324[(10)] = inst_53306);

return statearr_53324;
})();
var statearr_53325_54304 = state_53313__$1;
(statearr_53325_54304[(2)] = inst_53307);

(statearr_53325_54304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (3))){
var inst_53311 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53313__$1,inst_53311);
} else {
if((state_val_53314 === (12))){
var inst_53270 = (state_53313[(8)]);
var inst_53289 = cljs.core.vec(inst_53270);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53313__$1,(14),out,inst_53289);
} else {
if((state_val_53314 === (2))){
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53313__$1,(4),ch);
} else {
if((state_val_53314 === (11))){
var inst_53278 = (state_53313[(11)]);
var inst_53274 = (state_53313[(9)]);
var inst_53270 = (state_53313[(8)]);
var inst_53286 = inst_53270.push(inst_53274);
var tmp53326 = inst_53270;
var inst_53270__$1 = tmp53326;
var inst_53271 = inst_53278;
var state_53313__$1 = (function (){var statearr_53327 = state_53313;
(statearr_53327[(12)] = inst_53286);

(statearr_53327[(7)] = inst_53271);

(statearr_53327[(8)] = inst_53270__$1);

return statearr_53327;
})();
var statearr_53328_54306 = state_53313__$1;
(statearr_53328_54306[(2)] = null);

(statearr_53328_54306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (9))){
var inst_53271 = (state_53313[(7)]);
var inst_53282 = cljs.core.keyword_identical_QMARK_(inst_53271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_53313__$1 = state_53313;
var statearr_53329_54308 = state_53313__$1;
(statearr_53329_54308[(2)] = inst_53282);

(statearr_53329_54308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (5))){
var inst_53279 = (state_53313[(13)]);
var inst_53271 = (state_53313[(7)]);
var inst_53278 = (state_53313[(11)]);
var inst_53274 = (state_53313[(9)]);
var inst_53278__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53274) : f.call(null,inst_53274));
var inst_53279__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53278__$1,inst_53271);
var state_53313__$1 = (function (){var statearr_53330 = state_53313;
(statearr_53330[(13)] = inst_53279__$1);

(statearr_53330[(11)] = inst_53278__$1);

return statearr_53330;
})();
if(inst_53279__$1){
var statearr_53331_54311 = state_53313__$1;
(statearr_53331_54311[(1)] = (8));

} else {
var statearr_53332_54312 = state_53313__$1;
(statearr_53332_54312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (14))){
var inst_53278 = (state_53313[(11)]);
var inst_53274 = (state_53313[(9)]);
var inst_53291 = (state_53313[(2)]);
var inst_53292 = [];
var inst_53293 = inst_53292.push(inst_53274);
var inst_53270 = inst_53292;
var inst_53271 = inst_53278;
var state_53313__$1 = (function (){var statearr_53333 = state_53313;
(statearr_53333[(14)] = inst_53291);

(statearr_53333[(15)] = inst_53293);

(statearr_53333[(7)] = inst_53271);

(statearr_53333[(8)] = inst_53270);

return statearr_53333;
})();
var statearr_53334_54313 = state_53313__$1;
(statearr_53334_54313[(2)] = null);

(statearr_53334_54313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (16))){
var state_53313__$1 = state_53313;
var statearr_53335_54315 = state_53313__$1;
(statearr_53335_54315[(2)] = null);

(statearr_53335_54315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (10))){
var inst_53284 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
if(cljs.core.truth_(inst_53284)){
var statearr_53336_54317 = state_53313__$1;
(statearr_53336_54317[(1)] = (11));

} else {
var statearr_53337_54318 = state_53313__$1;
(statearr_53337_54318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (18))){
var inst_53303 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53338_54320 = state_53313__$1;
(statearr_53338_54320[(2)] = inst_53303);

(statearr_53338_54320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (8))){
var inst_53279 = (state_53313[(13)]);
var state_53313__$1 = state_53313;
var statearr_53339_54321 = state_53313__$1;
(statearr_53339_54321[(2)] = inst_53279);

(statearr_53339_54321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51343__auto__ = null;
var cljs$core$async$state_machine__51343__auto____0 = (function (){
var statearr_53340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53340[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_53340[(1)] = (1));

return statearr_53340;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_53313){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_53313);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e53341){var ex__51346__auto__ = e53341;
var statearr_53342_54323 = state_53313;
(statearr_53342_54323[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53313[(4)]))){
var statearr_53343_54324 = state_53313;
(statearr_53343_54324[(1)] = cljs.core.first((state_53313[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54326 = state_53313;
state_53313 = G__54326;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_53313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_53313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51413__auto__ = (function (){var statearr_53344 = f__51412__auto__();
(statearr_53344[(6)] = c__51411__auto___54290);

return statearr_53344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51413__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
