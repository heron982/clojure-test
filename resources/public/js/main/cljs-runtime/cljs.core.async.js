goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51475 = arguments.length;
switch (G__51475) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51477 = (function (f,blockable,meta51478){
this.f = f;
this.blockable = blockable;
this.meta51478 = meta51478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51479,meta51478__$1){
var self__ = this;
var _51479__$1 = this;
return (new cljs.core.async.t_cljs$core$async51477(self__.f,self__.blockable,meta51478__$1));
}));

(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51479){
var self__ = this;
var _51479__$1 = this;
return self__.meta51478;
}));

(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51478","meta51478",1509234011,null)], null);
}));

(cljs.core.async.t_cljs$core$async51477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51477");

(cljs.core.async.t_cljs$core$async51477.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51477.
 */
cljs.core.async.__GT_t_cljs$core$async51477 = (function cljs$core$async$__GT_t_cljs$core$async51477(f__$1,blockable__$1,meta51478){
return (new cljs.core.async.t_cljs$core$async51477(f__$1,blockable__$1,meta51478));
});

}

return (new cljs.core.async.t_cljs$core$async51477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51487 = arguments.length;
switch (G__51487) {
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
var G__51493 = arguments.length;
switch (G__51493) {
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
var G__51495 = arguments.length;
switch (G__51495) {
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
var val_53369 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53369) : fn1.call(null,val_53369));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53369) : fn1.call(null,val_53369));
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
var G__51501 = arguments.length;
switch (G__51501) {
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
var n__4741__auto___53377 = n;
var x_53378 = (0);
while(true){
if((x_53378 < n__4741__auto___53377)){
(a[x_53378] = x_53378);

var G__53380 = (x_53378 + (1));
x_53378 = G__53380;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51515 = (function (flag,meta51516){
this.flag = flag;
this.meta51516 = meta51516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51517,meta51516__$1){
var self__ = this;
var _51517__$1 = this;
return (new cljs.core.async.t_cljs$core$async51515(self__.flag,meta51516__$1));
}));

(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51517){
var self__ = this;
var _51517__$1 = this;
return self__.meta51516;
}));

(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51516","meta51516",-121453677,null)], null);
}));

(cljs.core.async.t_cljs$core$async51515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51515");

(cljs.core.async.t_cljs$core$async51515.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51515.
 */
cljs.core.async.__GT_t_cljs$core$async51515 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51515(flag__$1,meta51516){
return (new cljs.core.async.t_cljs$core$async51515(flag__$1,meta51516));
});

}

return (new cljs.core.async.t_cljs$core$async51515(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51525 = (function (flag,cb,meta51526){
this.flag = flag;
this.cb = cb;
this.meta51526 = meta51526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51527,meta51526__$1){
var self__ = this;
var _51527__$1 = this;
return (new cljs.core.async.t_cljs$core$async51525(self__.flag,self__.cb,meta51526__$1));
}));

(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51527){
var self__ = this;
var _51527__$1 = this;
return self__.meta51526;
}));

(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51526","meta51526",1659490328,null)], null);
}));

(cljs.core.async.t_cljs$core$async51525.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51525");

(cljs.core.async.t_cljs$core$async51525.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51525");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51525.
 */
cljs.core.async.__GT_t_cljs$core$async51525 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51525(flag__$1,cb__$1,meta51526){
return (new cljs.core.async.t_cljs$core$async51525(flag__$1,cb__$1,meta51526));
});

}

return (new cljs.core.async.t_cljs$core$async51525(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51535_SHARP_){
var G__51537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51535_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51537) : fret.call(null,G__51537));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51536_SHARP_){
var G__51538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51536_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51538) : fret.call(null,G__51538));
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
var G__53393 = (i + (1));
i = G__53393;
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
var len__4864__auto___53395 = arguments.length;
var i__4865__auto___53396 = (0);
while(true){
if((i__4865__auto___53396 < len__4864__auto___53395)){
args__4870__auto__.push((arguments[i__4865__auto___53396]));

var G__53397 = (i__4865__auto___53396 + (1));
i__4865__auto___53396 = G__53397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51558){
var map__51559 = p__51558;
var map__51559__$1 = cljs.core.__destructure_map(map__51559);
var opts = map__51559__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51539){
var G__51540 = cljs.core.first(seq51539);
var seq51539__$1 = cljs.core.next(seq51539);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51540,seq51539__$1);
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
var G__51572 = arguments.length;
switch (G__51572) {
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
var c__51398__auto___53404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_51614){
var state_val_51616 = (state_51614[(1)]);
if((state_val_51616 === (7))){
var inst_51610 = (state_51614[(2)]);
var state_51614__$1 = state_51614;
var statearr_51636_53407 = state_51614__$1;
(statearr_51636_53407[(2)] = inst_51610);

(statearr_51636_53407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (1))){
var state_51614__$1 = state_51614;
var statearr_51637_53409 = state_51614__$1;
(statearr_51637_53409[(2)] = null);

(statearr_51637_53409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (4))){
var inst_51593 = (state_51614[(7)]);
var inst_51593__$1 = (state_51614[(2)]);
var inst_51594 = (inst_51593__$1 == null);
var state_51614__$1 = (function (){var statearr_51638 = state_51614;
(statearr_51638[(7)] = inst_51593__$1);

return statearr_51638;
})();
if(cljs.core.truth_(inst_51594)){
var statearr_51639_53410 = state_51614__$1;
(statearr_51639_53410[(1)] = (5));

} else {
var statearr_51640_53411 = state_51614__$1;
(statearr_51640_53411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (13))){
var state_51614__$1 = state_51614;
var statearr_51641_53416 = state_51614__$1;
(statearr_51641_53416[(2)] = null);

(statearr_51641_53416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (6))){
var inst_51593 = (state_51614[(7)]);
var state_51614__$1 = state_51614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51614__$1,(11),to,inst_51593);
} else {
if((state_val_51616 === (3))){
var inst_51612 = (state_51614[(2)]);
var state_51614__$1 = state_51614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51614__$1,inst_51612);
} else {
if((state_val_51616 === (12))){
var state_51614__$1 = state_51614;
var statearr_51642_53419 = state_51614__$1;
(statearr_51642_53419[(2)] = null);

(statearr_51642_53419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (2))){
var state_51614__$1 = state_51614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51614__$1,(4),from);
} else {
if((state_val_51616 === (11))){
var inst_51603 = (state_51614[(2)]);
var state_51614__$1 = state_51614;
if(cljs.core.truth_(inst_51603)){
var statearr_51643_53420 = state_51614__$1;
(statearr_51643_53420[(1)] = (12));

} else {
var statearr_51644_53421 = state_51614__$1;
(statearr_51644_53421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (9))){
var state_51614__$1 = state_51614;
var statearr_51645_53422 = state_51614__$1;
(statearr_51645_53422[(2)] = null);

(statearr_51645_53422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (5))){
var state_51614__$1 = state_51614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51646_53423 = state_51614__$1;
(statearr_51646_53423[(1)] = (8));

} else {
var statearr_51647_53424 = state_51614__$1;
(statearr_51647_53424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (14))){
var inst_51608 = (state_51614[(2)]);
var state_51614__$1 = state_51614;
var statearr_51648_53425 = state_51614__$1;
(statearr_51648_53425[(2)] = inst_51608);

(statearr_51648_53425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (10))){
var inst_51600 = (state_51614[(2)]);
var state_51614__$1 = state_51614;
var statearr_51649_53426 = state_51614__$1;
(statearr_51649_53426[(2)] = inst_51600);

(statearr_51649_53426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51616 === (8))){
var inst_51597 = cljs.core.async.close_BANG_(to);
var state_51614__$1 = state_51614;
var statearr_51650_53428 = state_51614__$1;
(statearr_51650_53428[(2)] = inst_51597);

(statearr_51650_53428[(1)] = (10));


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
var statearr_51651 = [null,null,null,null,null,null,null,null];
(statearr_51651[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_51651[(1)] = (1));

return statearr_51651;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_51614){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51614);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51655){var ex__51346__auto__ = e51655;
var statearr_51656_53432 = state_51614;
(statearr_51656_53432[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51614[(4)]))){
var statearr_51657_53434 = state_51614;
(statearr_51657_53434[(1)] = cljs.core.first((state_51614[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53435 = state_51614;
state_51614 = G__53435;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_51614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_51614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_51658 = f__51399__auto__();
(statearr_51658[(6)] = c__51398__auto___53404);

return statearr_51658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var process = (function (p__51668){
var vec__51669 = p__51668;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(1),null);
var job = vec__51669;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51398__auto___53437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_51676){
var state_val_51677 = (state_51676[(1)]);
if((state_val_51677 === (1))){
var state_51676__$1 = state_51676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51676__$1,(2),res,v);
} else {
if((state_val_51677 === (2))){
var inst_51673 = (state_51676[(2)]);
var inst_51674 = cljs.core.async.close_BANG_(res);
var state_51676__$1 = (function (){var statearr_51679 = state_51676;
(statearr_51679[(7)] = inst_51673);

return statearr_51679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51676__$1,inst_51674);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51680 = [null,null,null,null,null,null,null,null];
(statearr_51680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51680[(1)] = (1));

return statearr_51680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51676){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51676);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51681){var ex__51346__auto__ = e51681;
var statearr_51682_53439 = state_51676;
(statearr_51682_53439[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51676[(4)]))){
var statearr_51683_53441 = state_51676;
(statearr_51683_53441[(1)] = cljs.core.first((state_51676[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53442 = state_51676;
state_51676 = G__53442;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_51684 = f__51399__auto__();
(statearr_51684[(6)] = c__51398__auto___53437);

return statearr_51684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51687){
var vec__51688 = p__51687;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51688,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51688,(1),null);
var job = vec__51688;
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
var n__4741__auto___53447 = n;
var __53448 = (0);
while(true){
if((__53448 < n__4741__auto___53447)){
var G__51701_53450 = type;
var G__51701_53451__$1 = (((G__51701_53450 instanceof cljs.core.Keyword))?G__51701_53450.fqn:null);
switch (G__51701_53451__$1) {
case "compute":
var c__51398__auto___53453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53448,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = ((function (__53448,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function (state_51716){
var state_val_51717 = (state_51716[(1)]);
if((state_val_51717 === (1))){
var state_51716__$1 = state_51716;
var statearr_51722_53455 = state_51716__$1;
(statearr_51722_53455[(2)] = null);

(statearr_51722_53455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51717 === (2))){
var state_51716__$1 = state_51716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51716__$1,(4),jobs);
} else {
if((state_val_51717 === (3))){
var inst_51714 = (state_51716[(2)]);
var state_51716__$1 = state_51716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51716__$1,inst_51714);
} else {
if((state_val_51717 === (4))){
var inst_51704 = (state_51716[(2)]);
var inst_51705 = process(inst_51704);
var state_51716__$1 = state_51716;
if(cljs.core.truth_(inst_51705)){
var statearr_51727_53456 = state_51716__$1;
(statearr_51727_53456[(1)] = (5));

} else {
var statearr_51728_53457 = state_51716__$1;
(statearr_51728_53457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51717 === (5))){
var state_51716__$1 = state_51716;
var statearr_51729_53458 = state_51716__$1;
(statearr_51729_53458[(2)] = null);

(statearr_51729_53458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51717 === (6))){
var state_51716__$1 = state_51716;
var statearr_51730_53459 = state_51716__$1;
(statearr_51730_53459[(2)] = null);

(statearr_51730_53459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51717 === (7))){
var inst_51712 = (state_51716[(2)]);
var state_51716__$1 = state_51716;
var statearr_51731_53461 = state_51716__$1;
(statearr_51731_53461[(2)] = inst_51712);

(statearr_51731_53461[(1)] = (3));


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
});})(__53448,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
;
return ((function (__53448,switch__51342__auto__,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51732 = [null,null,null,null,null,null,null];
(statearr_51732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51732[(1)] = (1));

return statearr_51732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51716){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51716);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51733){var ex__51346__auto__ = e51733;
var statearr_51734_53465 = state_51716;
(statearr_51734_53465[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51716[(4)]))){
var statearr_51735_53466 = state_51716;
(statearr_51735_53466[(1)] = cljs.core.first((state_51716[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53468 = state_51716;
state_51716 = G__53468;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
;})(__53448,switch__51342__auto__,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
})();
var state__51400__auto__ = (function (){var statearr_51740 = f__51399__auto__();
(statearr_51740[(6)] = c__51398__auto___53453);

return statearr_51740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
});})(__53448,c__51398__auto___53453,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
);


break;
case "async":
var c__51398__auto___53471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53448,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = ((function (__53448,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function (state_51753){
var state_val_51754 = (state_51753[(1)]);
if((state_val_51754 === (1))){
var state_51753__$1 = state_51753;
var statearr_51758_53473 = state_51753__$1;
(statearr_51758_53473[(2)] = null);

(statearr_51758_53473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (2))){
var state_51753__$1 = state_51753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51753__$1,(4),jobs);
} else {
if((state_val_51754 === (3))){
var inst_51751 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51753__$1,inst_51751);
} else {
if((state_val_51754 === (4))){
var inst_51743 = (state_51753[(2)]);
var inst_51744 = async(inst_51743);
var state_51753__$1 = state_51753;
if(cljs.core.truth_(inst_51744)){
var statearr_51760_53477 = state_51753__$1;
(statearr_51760_53477[(1)] = (5));

} else {
var statearr_51762_53478 = state_51753__$1;
(statearr_51762_53478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (5))){
var state_51753__$1 = state_51753;
var statearr_51766_53479 = state_51753__$1;
(statearr_51766_53479[(2)] = null);

(statearr_51766_53479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (6))){
var state_51753__$1 = state_51753;
var statearr_51767_53480 = state_51753__$1;
(statearr_51767_53480[(2)] = null);

(statearr_51767_53480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (7))){
var inst_51749 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51768_53484 = state_51753__$1;
(statearr_51768_53484[(2)] = inst_51749);

(statearr_51768_53484[(1)] = (3));


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
});})(__53448,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
;
return ((function (__53448,switch__51342__auto__,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0 = (function (){
var statearr_51769 = [null,null,null,null,null,null,null];
(statearr_51769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51769[(1)] = (1));

return statearr_51769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51753){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51753);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51770){var ex__51346__auto__ = e51770;
var statearr_51771_53488 = state_51753;
(statearr_51771_53488[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51753[(4)]))){
var statearr_51772_53489 = state_51753;
(statearr_51772_53489[(1)] = cljs.core.first((state_51753[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53490 = state_51753;
state_51753 = G__53490;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
;})(__53448,switch__51342__auto__,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
})();
var state__51400__auto__ = (function (){var statearr_51774 = f__51399__auto__();
(statearr_51774[(6)] = c__51398__auto___53471);

return statearr_51774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
});})(__53448,c__51398__auto___53471,G__51701_53450,G__51701_53451__$1,n__4741__auto___53447,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51701_53451__$1)].join('')));

}

var G__53494 = (__53448 + (1));
__53448 = G__53494;
continue;
} else {
}
break;
}

var c__51398__auto___53495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_51809){
var state_val_51810 = (state_51809[(1)]);
if((state_val_51810 === (7))){
var inst_51802 = (state_51809[(2)]);
var state_51809__$1 = state_51809;
var statearr_51812_53496 = state_51809__$1;
(statearr_51812_53496[(2)] = inst_51802);

(statearr_51812_53496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51810 === (1))){
var state_51809__$1 = state_51809;
var statearr_51813_53497 = state_51809__$1;
(statearr_51813_53497[(2)] = null);

(statearr_51813_53497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51810 === (4))){
var inst_51777 = (state_51809[(7)]);
var inst_51777__$1 = (state_51809[(2)]);
var inst_51788 = (inst_51777__$1 == null);
var state_51809__$1 = (function (){var statearr_51816 = state_51809;
(statearr_51816[(7)] = inst_51777__$1);

return statearr_51816;
})();
if(cljs.core.truth_(inst_51788)){
var statearr_51817_53500 = state_51809__$1;
(statearr_51817_53500[(1)] = (5));

} else {
var statearr_51818_53501 = state_51809__$1;
(statearr_51818_53501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51810 === (6))){
var inst_51777 = (state_51809[(7)]);
var inst_51792 = (state_51809[(8)]);
var inst_51792__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51794 = [inst_51777,inst_51792__$1];
var inst_51795 = (new cljs.core.PersistentVector(null,2,(5),inst_51793,inst_51794,null));
var state_51809__$1 = (function (){var statearr_51819 = state_51809;
(statearr_51819[(8)] = inst_51792__$1);

return statearr_51819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51809__$1,(8),jobs,inst_51795);
} else {
if((state_val_51810 === (3))){
var inst_51804 = (state_51809[(2)]);
var state_51809__$1 = state_51809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51809__$1,inst_51804);
} else {
if((state_val_51810 === (2))){
var state_51809__$1 = state_51809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51809__$1,(4),from);
} else {
if((state_val_51810 === (9))){
var inst_51799 = (state_51809[(2)]);
var state_51809__$1 = (function (){var statearr_51820 = state_51809;
(statearr_51820[(9)] = inst_51799);

return statearr_51820;
})();
var statearr_51821_53504 = state_51809__$1;
(statearr_51821_53504[(2)] = null);

(statearr_51821_53504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51810 === (5))){
var inst_51790 = cljs.core.async.close_BANG_(jobs);
var state_51809__$1 = state_51809;
var statearr_51824_53505 = state_51809__$1;
(statearr_51824_53505[(2)] = inst_51790);

(statearr_51824_53505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51810 === (8))){
var inst_51792 = (state_51809[(8)]);
var inst_51797 = (state_51809[(2)]);
var state_51809__$1 = (function (){var statearr_51825 = state_51809;
(statearr_51825[(10)] = inst_51797);

return statearr_51825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51809__$1,(9),results,inst_51792);
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
var statearr_51826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51826[(1)] = (1));

return statearr_51826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1 = (function (state_51809){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51809);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e51827){var ex__51346__auto__ = e51827;
var statearr_51828_53510 = state_51809;
(statearr_51828_53510[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51809[(4)]))){
var statearr_51829_53511 = state_51809;
(statearr_51829_53511[(1)] = cljs.core.first((state_51809[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53513 = state_51809;
state_51809 = G__53513;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__ = function(state_51809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1.call(this,state_51809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_51830 = f__51399__auto__();
(statearr_51830[(6)] = c__51398__auto___53495);

return statearr_51830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));


var c__51398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_51877){
var state_val_51878 = (state_51877[(1)]);
if((state_val_51878 === (7))){
var inst_51873 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51879_53517 = state_51877__$1;
(statearr_51879_53517[(2)] = inst_51873);

(statearr_51879_53517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (20))){
var state_51877__$1 = state_51877;
var statearr_51880_53519 = state_51877__$1;
(statearr_51880_53519[(2)] = null);

(statearr_51880_53519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (1))){
var state_51877__$1 = state_51877;
var statearr_51881_53521 = state_51877__$1;
(statearr_51881_53521[(2)] = null);

(statearr_51881_53521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (4))){
var inst_51834 = (state_51877[(7)]);
var inst_51834__$1 = (state_51877[(2)]);
var inst_51838 = (inst_51834__$1 == null);
var state_51877__$1 = (function (){var statearr_51882 = state_51877;
(statearr_51882[(7)] = inst_51834__$1);

return statearr_51882;
})();
if(cljs.core.truth_(inst_51838)){
var statearr_51883_53522 = state_51877__$1;
(statearr_51883_53522[(1)] = (5));

} else {
var statearr_51884_53523 = state_51877__$1;
(statearr_51884_53523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (15))){
var inst_51854 = (state_51877[(8)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51877__$1,(18),to,inst_51854);
} else {
if((state_val_51878 === (21))){
var inst_51867 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51885_53525 = state_51877__$1;
(statearr_51885_53525[(2)] = inst_51867);

(statearr_51885_53525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (13))){
var inst_51869 = (state_51877[(2)]);
var state_51877__$1 = (function (){var statearr_51886 = state_51877;
(statearr_51886[(9)] = inst_51869);

return statearr_51886;
})();
var statearr_51887_53526 = state_51877__$1;
(statearr_51887_53526[(2)] = null);

(statearr_51887_53526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (6))){
var inst_51834 = (state_51877[(7)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(11),inst_51834);
} else {
if((state_val_51878 === (17))){
var inst_51862 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51862)){
var statearr_51888_53530 = state_51877__$1;
(statearr_51888_53530[(1)] = (19));

} else {
var statearr_51889_53531 = state_51877__$1;
(statearr_51889_53531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (3))){
var inst_51875 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51877__$1,inst_51875);
} else {
if((state_val_51878 === (12))){
var inst_51847 = (state_51877[(10)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(14),inst_51847);
} else {
if((state_val_51878 === (2))){
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51877__$1,(4),results);
} else {
if((state_val_51878 === (19))){
var state_51877__$1 = state_51877;
var statearr_51896_53533 = state_51877__$1;
(statearr_51896_53533[(2)] = null);

(statearr_51896_53533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (11))){
var inst_51847 = (state_51877[(2)]);
var state_51877__$1 = (function (){var statearr_51897 = state_51877;
(statearr_51897[(10)] = inst_51847);

return statearr_51897;
})();
var statearr_51898_53534 = state_51877__$1;
(statearr_51898_53534[(2)] = null);

(statearr_51898_53534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (9))){
var state_51877__$1 = state_51877;
var statearr_51899_53535 = state_51877__$1;
(statearr_51899_53535[(2)] = null);

(statearr_51899_53535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (5))){
var state_51877__$1 = state_51877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51900_53537 = state_51877__$1;
(statearr_51900_53537[(1)] = (8));

} else {
var statearr_51901_53538 = state_51877__$1;
(statearr_51901_53538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (14))){
var inst_51854 = (state_51877[(8)]);
var inst_51856 = (state_51877[(11)]);
var inst_51854__$1 = (state_51877[(2)]);
var inst_51855 = (inst_51854__$1 == null);
var inst_51856__$1 = cljs.core.not(inst_51855);
var state_51877__$1 = (function (){var statearr_51902 = state_51877;
(statearr_51902[(8)] = inst_51854__$1);

(statearr_51902[(11)] = inst_51856__$1);

return statearr_51902;
})();
if(inst_51856__$1){
var statearr_51903_53540 = state_51877__$1;
(statearr_51903_53540[(1)] = (15));

} else {
var statearr_51904_53541 = state_51877__$1;
(statearr_51904_53541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (16))){
var inst_51856 = (state_51877[(11)]);
var state_51877__$1 = state_51877;
var statearr_51905_53542 = state_51877__$1;
(statearr_51905_53542[(2)] = inst_51856);

(statearr_51905_53542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (10))){
var inst_51844 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51906_53546 = state_51877__$1;
(statearr_51906_53546[(2)] = inst_51844);

(statearr_51906_53546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (18))){
var inst_51859 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51910_53547 = state_51877__$1;
(statearr_51910_53547[(2)] = inst_51859);

(statearr_51910_53547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (8))){
var inst_51841 = cljs.core.async.close_BANG_(to);
var state_51877__$1 = state_51877;
var statearr_51927_53548 = state_51877__$1;
(statearr_51927_53548[(2)] = inst_51841);

(statearr_51927_53548[(1)] = (10));


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
var statearr_51928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51343__auto__);

(statearr_51928[(1)] = (1));

return statearr_51928;
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
}catch (e51929){var ex__51346__auto__ = e51929;
var statearr_51930_53550 = state_51877;
(statearr_51930_53550[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51877[(4)]))){
var statearr_51931_53551 = state_51877;
(statearr_51931_53551[(1)] = cljs.core.first((state_51877[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53552 = state_51877;
state_51877 = G__53552;
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
var state__51400__auto__ = (function (){var statearr_51939 = f__51399__auto__();
(statearr_51939[(6)] = c__51398__auto__);

return statearr_51939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));

return c__51398__auto__;
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
var G__51941 = arguments.length;
switch (G__51941) {
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
var G__51947 = arguments.length;
switch (G__51947) {
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
var G__51953 = arguments.length;
switch (G__51953) {
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
var c__51398__auto___53563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_51980){
var state_val_51981 = (state_51980[(1)]);
if((state_val_51981 === (7))){
var inst_51976 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
var statearr_51983_53564 = state_51980__$1;
(statearr_51983_53564[(2)] = inst_51976);

(statearr_51983_53564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (1))){
var state_51980__$1 = state_51980;
var statearr_51984_53567 = state_51980__$1;
(statearr_51984_53567[(2)] = null);

(statearr_51984_53567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (4))){
var inst_51957 = (state_51980[(7)]);
var inst_51957__$1 = (state_51980[(2)]);
var inst_51958 = (inst_51957__$1 == null);
var state_51980__$1 = (function (){var statearr_51985 = state_51980;
(statearr_51985[(7)] = inst_51957__$1);

return statearr_51985;
})();
if(cljs.core.truth_(inst_51958)){
var statearr_51986_53570 = state_51980__$1;
(statearr_51986_53570[(1)] = (5));

} else {
var statearr_51987_53571 = state_51980__$1;
(statearr_51987_53571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (13))){
var state_51980__$1 = state_51980;
var statearr_51993_53573 = state_51980__$1;
(statearr_51993_53573[(2)] = null);

(statearr_51993_53573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (6))){
var inst_51957 = (state_51980[(7)]);
var inst_51963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51957) : p.call(null,inst_51957));
var state_51980__$1 = state_51980;
if(cljs.core.truth_(inst_51963)){
var statearr_52010_53575 = state_51980__$1;
(statearr_52010_53575[(1)] = (9));

} else {
var statearr_52011_53576 = state_51980__$1;
(statearr_52011_53576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (3))){
var inst_51978 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51980__$1,inst_51978);
} else {
if((state_val_51981 === (12))){
var state_51980__$1 = state_51980;
var statearr_52013_53577 = state_51980__$1;
(statearr_52013_53577[(2)] = null);

(statearr_52013_53577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (2))){
var state_51980__$1 = state_51980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51980__$1,(4),ch);
} else {
if((state_val_51981 === (11))){
var inst_51957 = (state_51980[(7)]);
var inst_51967 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51980__$1,(8),inst_51967,inst_51957);
} else {
if((state_val_51981 === (9))){
var state_51980__$1 = state_51980;
var statearr_52015_53578 = state_51980__$1;
(statearr_52015_53578[(2)] = tc);

(statearr_52015_53578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (5))){
var inst_51960 = cljs.core.async.close_BANG_(tc);
var inst_51961 = cljs.core.async.close_BANG_(fc);
var state_51980__$1 = (function (){var statearr_52016 = state_51980;
(statearr_52016[(8)] = inst_51960);

return statearr_52016;
})();
var statearr_52017_53581 = state_51980__$1;
(statearr_52017_53581[(2)] = inst_51961);

(statearr_52017_53581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (14))){
var inst_51974 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
var statearr_52018_53584 = state_51980__$1;
(statearr_52018_53584[(2)] = inst_51974);

(statearr_52018_53584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (10))){
var state_51980__$1 = state_51980;
var statearr_52022_53585 = state_51980__$1;
(statearr_52022_53585[(2)] = fc);

(statearr_52022_53585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (8))){
var inst_51969 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
if(cljs.core.truth_(inst_51969)){
var statearr_52023_53586 = state_51980__$1;
(statearr_52023_53586[(1)] = (12));

} else {
var statearr_52024_53587 = state_51980__$1;
(statearr_52024_53587[(1)] = (13));

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
var statearr_52025 = [null,null,null,null,null,null,null,null,null];
(statearr_52025[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52025[(1)] = (1));

return statearr_52025;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_51980){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_51980);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52026){var ex__51346__auto__ = e52026;
var statearr_52027_53588 = state_51980;
(statearr_52027_53588[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_51980[(4)]))){
var statearr_52028_53589 = state_51980;
(statearr_52028_53589[(1)] = cljs.core.first((state_51980[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53591 = state_51980;
state_51980 = G__53591;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_51980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_51980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52031 = f__51399__auto__();
(statearr_52031[(6)] = c__51398__auto___53563);

return statearr_52031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var c__51398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52057){
var state_val_52058 = (state_52057[(1)]);
if((state_val_52058 === (7))){
var inst_52053 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
var statearr_52060_53592 = state_52057__$1;
(statearr_52060_53592[(2)] = inst_52053);

(statearr_52060_53592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (1))){
var inst_52036 = init;
var inst_52037 = inst_52036;
var state_52057__$1 = (function (){var statearr_52061 = state_52057;
(statearr_52061[(7)] = inst_52037);

return statearr_52061;
})();
var statearr_52062_53594 = state_52057__$1;
(statearr_52062_53594[(2)] = null);

(statearr_52062_53594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (4))){
var inst_52040 = (state_52057[(8)]);
var inst_52040__$1 = (state_52057[(2)]);
var inst_52041 = (inst_52040__$1 == null);
var state_52057__$1 = (function (){var statearr_52064 = state_52057;
(statearr_52064[(8)] = inst_52040__$1);

return statearr_52064;
})();
if(cljs.core.truth_(inst_52041)){
var statearr_52065_53595 = state_52057__$1;
(statearr_52065_53595[(1)] = (5));

} else {
var statearr_52066_53596 = state_52057__$1;
(statearr_52066_53596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (6))){
var inst_52040 = (state_52057[(8)]);
var inst_52044 = (state_52057[(9)]);
var inst_52037 = (state_52057[(7)]);
var inst_52044__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52037,inst_52040) : f.call(null,inst_52037,inst_52040));
var inst_52045 = cljs.core.reduced_QMARK_(inst_52044__$1);
var state_52057__$1 = (function (){var statearr_52067 = state_52057;
(statearr_52067[(9)] = inst_52044__$1);

return statearr_52067;
})();
if(inst_52045){
var statearr_52068_53598 = state_52057__$1;
(statearr_52068_53598[(1)] = (8));

} else {
var statearr_52069_53599 = state_52057__$1;
(statearr_52069_53599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (3))){
var inst_52055 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52057__$1,inst_52055);
} else {
if((state_val_52058 === (2))){
var state_52057__$1 = state_52057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52057__$1,(4),ch);
} else {
if((state_val_52058 === (9))){
var inst_52044 = (state_52057[(9)]);
var inst_52037 = inst_52044;
var state_52057__$1 = (function (){var statearr_52071 = state_52057;
(statearr_52071[(7)] = inst_52037);

return statearr_52071;
})();
var statearr_52072_53601 = state_52057__$1;
(statearr_52072_53601[(2)] = null);

(statearr_52072_53601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (5))){
var inst_52037 = (state_52057[(7)]);
var state_52057__$1 = state_52057;
var statearr_52073_53602 = state_52057__$1;
(statearr_52073_53602[(2)] = inst_52037);

(statearr_52073_53602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (10))){
var inst_52051 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
var statearr_52074_53603 = state_52057__$1;
(statearr_52074_53603[(2)] = inst_52051);

(statearr_52074_53603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (8))){
var inst_52044 = (state_52057[(9)]);
var inst_52047 = cljs.core.deref(inst_52044);
var state_52057__$1 = state_52057;
var statearr_52078_53606 = state_52057__$1;
(statearr_52078_53606[(2)] = inst_52047);

(statearr_52078_53606[(1)] = (10));


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
var statearr_52081 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52081[(0)] = cljs$core$async$reduce_$_state_machine__51343__auto__);

(statearr_52081[(1)] = (1));

return statearr_52081;
});
var cljs$core$async$reduce_$_state_machine__51343__auto____1 = (function (state_52057){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52057);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52082){var ex__51346__auto__ = e52082;
var statearr_52083_53609 = state_52057;
(statearr_52083_53609[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52057[(4)]))){
var statearr_52084_53615 = state_52057;
(statearr_52084_53615[(1)] = cljs.core.first((state_52057[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53620 = state_52057;
state_52057 = G__53620;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51343__auto__ = function(state_52057){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51343__auto____1.call(this,state_52057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51343__auto____0;
cljs$core$async$reduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51343__auto____1;
return cljs$core$async$reduce_$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52086 = f__51399__auto__();
(statearr_52086[(6)] = c__51398__auto__);

return statearr_52086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));

return c__51398__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52093){
var state_val_52094 = (state_52093[(1)]);
if((state_val_52094 === (1))){
var inst_52088 = cljs.core.async.reduce(f__$1,init,ch);
var state_52093__$1 = state_52093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52093__$1,(2),inst_52088);
} else {
if((state_val_52094 === (2))){
var inst_52090 = (state_52093[(2)]);
var inst_52091 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52090) : f__$1.call(null,inst_52090));
var state_52093__$1 = state_52093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52093__$1,inst_52091);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51343__auto____0 = (function (){
var statearr_52095 = [null,null,null,null,null,null,null];
(statearr_52095[(0)] = cljs$core$async$transduce_$_state_machine__51343__auto__);

(statearr_52095[(1)] = (1));

return statearr_52095;
});
var cljs$core$async$transduce_$_state_machine__51343__auto____1 = (function (state_52093){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52093);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52096){var ex__51346__auto__ = e52096;
var statearr_52097_53627 = state_52093;
(statearr_52097_53627[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52093[(4)]))){
var statearr_52098_53629 = state_52093;
(statearr_52098_53629[(1)] = cljs.core.first((state_52093[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53634 = state_52093;
state_52093 = G__53634;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51343__auto__ = function(state_52093){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51343__auto____1.call(this,state_52093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51343__auto____0;
cljs$core$async$transduce_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51343__auto____1;
return cljs$core$async$transduce_$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52100 = f__51399__auto__();
(statearr_52100[(6)] = c__51398__auto__);

return statearr_52100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));

return c__51398__auto__;
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
var G__52103 = arguments.length;
switch (G__52103) {
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
var c__51398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52128){
var state_val_52129 = (state_52128[(1)]);
if((state_val_52129 === (7))){
var inst_52110 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52134_53642 = state_52128__$1;
(statearr_52134_53642[(2)] = inst_52110);

(statearr_52134_53642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (1))){
var inst_52104 = cljs.core.seq(coll);
var inst_52105 = inst_52104;
var state_52128__$1 = (function (){var statearr_52135 = state_52128;
(statearr_52135[(7)] = inst_52105);

return statearr_52135;
})();
var statearr_52136_53644 = state_52128__$1;
(statearr_52136_53644[(2)] = null);

(statearr_52136_53644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (4))){
var inst_52105 = (state_52128[(7)]);
var inst_52108 = cljs.core.first(inst_52105);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52128__$1,(7),ch,inst_52108);
} else {
if((state_val_52129 === (13))){
var inst_52122 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52137_53645 = state_52128__$1;
(statearr_52137_53645[(2)] = inst_52122);

(statearr_52137_53645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (6))){
var inst_52113 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
if(cljs.core.truth_(inst_52113)){
var statearr_52138_53647 = state_52128__$1;
(statearr_52138_53647[(1)] = (8));

} else {
var statearr_52139_53648 = state_52128__$1;
(statearr_52139_53648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (3))){
var inst_52126 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52128__$1,inst_52126);
} else {
if((state_val_52129 === (12))){
var state_52128__$1 = state_52128;
var statearr_52141_53653 = state_52128__$1;
(statearr_52141_53653[(2)] = null);

(statearr_52141_53653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (2))){
var inst_52105 = (state_52128[(7)]);
var state_52128__$1 = state_52128;
if(cljs.core.truth_(inst_52105)){
var statearr_52142_53655 = state_52128__$1;
(statearr_52142_53655[(1)] = (4));

} else {
var statearr_52143_53656 = state_52128__$1;
(statearr_52143_53656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (11))){
var inst_52119 = cljs.core.async.close_BANG_(ch);
var state_52128__$1 = state_52128;
var statearr_52145_53657 = state_52128__$1;
(statearr_52145_53657[(2)] = inst_52119);

(statearr_52145_53657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (9))){
var state_52128__$1 = state_52128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52146_53658 = state_52128__$1;
(statearr_52146_53658[(1)] = (11));

} else {
var statearr_52147_53659 = state_52128__$1;
(statearr_52147_53659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (5))){
var inst_52105 = (state_52128[(7)]);
var state_52128__$1 = state_52128;
var statearr_52148_53660 = state_52128__$1;
(statearr_52148_53660[(2)] = inst_52105);

(statearr_52148_53660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (10))){
var inst_52124 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52150_53661 = state_52128__$1;
(statearr_52150_53661[(2)] = inst_52124);

(statearr_52150_53661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (8))){
var inst_52105 = (state_52128[(7)]);
var inst_52115 = cljs.core.next(inst_52105);
var inst_52105__$1 = inst_52115;
var state_52128__$1 = (function (){var statearr_52151 = state_52128;
(statearr_52151[(7)] = inst_52105__$1);

return statearr_52151;
})();
var statearr_52152_53668 = state_52128__$1;
(statearr_52152_53668[(2)] = null);

(statearr_52152_53668[(1)] = (2));


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
var statearr_52154 = [null,null,null,null,null,null,null,null];
(statearr_52154[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52154[(1)] = (1));

return statearr_52154;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52128){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52128);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52155){var ex__51346__auto__ = e52155;
var statearr_52156_53670 = state_52128;
(statearr_52156_53670[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52128[(4)]))){
var statearr_52158_53671 = state_52128;
(statearr_52158_53671[(1)] = cljs.core.first((state_52128[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53672 = state_52128;
state_52128 = G__53672;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52159 = f__51399__auto__();
(statearr_52159[(6)] = c__51398__auto__);

return statearr_52159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));

return c__51398__auto__;
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
var G__52165 = arguments.length;
switch (G__52165) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_53683 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_53683(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53687 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_53687(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53693 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_53693(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53696 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_53696(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52187 = (function (ch,cs,meta52188){
this.ch = ch;
this.cs = cs;
this.meta52188 = meta52188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52189,meta52188__$1){
var self__ = this;
var _52189__$1 = this;
return (new cljs.core.async.t_cljs$core$async52187(self__.ch,self__.cs,meta52188__$1));
}));

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52189){
var self__ = this;
var _52189__$1 = this;
return self__.meta52188;
}));

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52187.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52188","meta52188",-1000558062,null)], null);
}));

(cljs.core.async.t_cljs$core$async52187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52187");

(cljs.core.async.t_cljs$core$async52187.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52187.
 */
cljs.core.async.__GT_t_cljs$core$async52187 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52187(ch__$1,cs__$1,meta52188){
return (new cljs.core.async.t_cljs$core$async52187(ch__$1,cs__$1,meta52188));
});

}

return (new cljs.core.async.t_cljs$core$async52187(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51398__auto___53702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52368){
var state_val_52369 = (state_52368[(1)]);
if((state_val_52369 === (7))){
var inst_52364 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52370_53703 = state_52368__$1;
(statearr_52370_53703[(2)] = inst_52364);

(statearr_52370_53703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (20))){
var inst_52259 = (state_52368[(7)]);
var inst_52271 = cljs.core.first(inst_52259);
var inst_52272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52271,(0),null);
var inst_52273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52271,(1),null);
var state_52368__$1 = (function (){var statearr_52371 = state_52368;
(statearr_52371[(8)] = inst_52272);

return statearr_52371;
})();
if(cljs.core.truth_(inst_52273)){
var statearr_52372_53705 = state_52368__$1;
(statearr_52372_53705[(1)] = (22));

} else {
var statearr_52373_53706 = state_52368__$1;
(statearr_52373_53706[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (27))){
var inst_52305 = (state_52368[(9)]);
var inst_52312 = (state_52368[(10)]);
var inst_52224 = (state_52368[(11)]);
var inst_52307 = (state_52368[(12)]);
var inst_52312__$1 = cljs.core._nth(inst_52305,inst_52307);
var inst_52313 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52312__$1,inst_52224,done);
var state_52368__$1 = (function (){var statearr_52374 = state_52368;
(statearr_52374[(10)] = inst_52312__$1);

return statearr_52374;
})();
if(cljs.core.truth_(inst_52313)){
var statearr_52375_53707 = state_52368__$1;
(statearr_52375_53707[(1)] = (30));

} else {
var statearr_52376_53708 = state_52368__$1;
(statearr_52376_53708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (1))){
var state_52368__$1 = state_52368;
var statearr_52377_53709 = state_52368__$1;
(statearr_52377_53709[(2)] = null);

(statearr_52377_53709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (24))){
var inst_52259 = (state_52368[(7)]);
var inst_52278 = (state_52368[(2)]);
var inst_52279 = cljs.core.next(inst_52259);
var inst_52233 = inst_52279;
var inst_52234 = null;
var inst_52235 = (0);
var inst_52236 = (0);
var state_52368__$1 = (function (){var statearr_52378 = state_52368;
(statearr_52378[(13)] = inst_52233);

(statearr_52378[(14)] = inst_52236);

(statearr_52378[(15)] = inst_52278);

(statearr_52378[(16)] = inst_52234);

(statearr_52378[(17)] = inst_52235);

return statearr_52378;
})();
var statearr_52379_53715 = state_52368__$1;
(statearr_52379_53715[(2)] = null);

(statearr_52379_53715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (39))){
var state_52368__$1 = state_52368;
var statearr_52383_53718 = state_52368__$1;
(statearr_52383_53718[(2)] = null);

(statearr_52383_53718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (4))){
var inst_52224 = (state_52368[(11)]);
var inst_52224__$1 = (state_52368[(2)]);
var inst_52225 = (inst_52224__$1 == null);
var state_52368__$1 = (function (){var statearr_52384 = state_52368;
(statearr_52384[(11)] = inst_52224__$1);

return statearr_52384;
})();
if(cljs.core.truth_(inst_52225)){
var statearr_52385_53720 = state_52368__$1;
(statearr_52385_53720[(1)] = (5));

} else {
var statearr_52386_53721 = state_52368__$1;
(statearr_52386_53721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (15))){
var inst_52233 = (state_52368[(13)]);
var inst_52236 = (state_52368[(14)]);
var inst_52234 = (state_52368[(16)]);
var inst_52235 = (state_52368[(17)]);
var inst_52255 = (state_52368[(2)]);
var inst_52256 = (inst_52236 + (1));
var tmp52380 = inst_52233;
var tmp52381 = inst_52234;
var tmp52382 = inst_52235;
var inst_52233__$1 = tmp52380;
var inst_52234__$1 = tmp52381;
var inst_52235__$1 = tmp52382;
var inst_52236__$1 = inst_52256;
var state_52368__$1 = (function (){var statearr_52387 = state_52368;
(statearr_52387[(13)] = inst_52233__$1);

(statearr_52387[(14)] = inst_52236__$1);

(statearr_52387[(18)] = inst_52255);

(statearr_52387[(16)] = inst_52234__$1);

(statearr_52387[(17)] = inst_52235__$1);

return statearr_52387;
})();
var statearr_52388_53722 = state_52368__$1;
(statearr_52388_53722[(2)] = null);

(statearr_52388_53722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (21))){
var inst_52282 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52392_53724 = state_52368__$1;
(statearr_52392_53724[(2)] = inst_52282);

(statearr_52392_53724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (31))){
var inst_52312 = (state_52368[(10)]);
var inst_52322 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52312);
var state_52368__$1 = state_52368;
var statearr_52393_53730 = state_52368__$1;
(statearr_52393_53730[(2)] = inst_52322);

(statearr_52393_53730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (32))){
var inst_52304 = (state_52368[(19)]);
var inst_52305 = (state_52368[(9)]);
var inst_52307 = (state_52368[(12)]);
var inst_52306 = (state_52368[(20)]);
var inst_52324 = (state_52368[(2)]);
var inst_52325 = (inst_52307 + (1));
var tmp52389 = inst_52304;
var tmp52390 = inst_52305;
var tmp52391 = inst_52306;
var inst_52304__$1 = tmp52389;
var inst_52305__$1 = tmp52390;
var inst_52306__$1 = tmp52391;
var inst_52307__$1 = inst_52325;
var state_52368__$1 = (function (){var statearr_52394 = state_52368;
(statearr_52394[(19)] = inst_52304__$1);

(statearr_52394[(21)] = inst_52324);

(statearr_52394[(9)] = inst_52305__$1);

(statearr_52394[(12)] = inst_52307__$1);

(statearr_52394[(20)] = inst_52306__$1);

return statearr_52394;
})();
var statearr_52395_53732 = state_52368__$1;
(statearr_52395_53732[(2)] = null);

(statearr_52395_53732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (40))){
var inst_52337 = (state_52368[(22)]);
var inst_52341 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52337);
var state_52368__$1 = state_52368;
var statearr_52396_53733 = state_52368__$1;
(statearr_52396_53733[(2)] = inst_52341);

(statearr_52396_53733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (33))){
var inst_52328 = (state_52368[(23)]);
var inst_52330 = cljs.core.chunked_seq_QMARK_(inst_52328);
var state_52368__$1 = state_52368;
if(inst_52330){
var statearr_52397_53734 = state_52368__$1;
(statearr_52397_53734[(1)] = (36));

} else {
var statearr_52398_53735 = state_52368__$1;
(statearr_52398_53735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (13))){
var inst_52249 = (state_52368[(24)]);
var inst_52252 = cljs.core.async.close_BANG_(inst_52249);
var state_52368__$1 = state_52368;
var statearr_52399_53741 = state_52368__$1;
(statearr_52399_53741[(2)] = inst_52252);

(statearr_52399_53741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (22))){
var inst_52272 = (state_52368[(8)]);
var inst_52275 = cljs.core.async.close_BANG_(inst_52272);
var state_52368__$1 = state_52368;
var statearr_52400_53745 = state_52368__$1;
(statearr_52400_53745[(2)] = inst_52275);

(statearr_52400_53745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (36))){
var inst_52328 = (state_52368[(23)]);
var inst_52332 = cljs.core.chunk_first(inst_52328);
var inst_52333 = cljs.core.chunk_rest(inst_52328);
var inst_52334 = cljs.core.count(inst_52332);
var inst_52304 = inst_52333;
var inst_52305 = inst_52332;
var inst_52306 = inst_52334;
var inst_52307 = (0);
var state_52368__$1 = (function (){var statearr_52401 = state_52368;
(statearr_52401[(19)] = inst_52304);

(statearr_52401[(9)] = inst_52305);

(statearr_52401[(12)] = inst_52307);

(statearr_52401[(20)] = inst_52306);

return statearr_52401;
})();
var statearr_52402_53746 = state_52368__$1;
(statearr_52402_53746[(2)] = null);

(statearr_52402_53746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (41))){
var inst_52328 = (state_52368[(23)]);
var inst_52343 = (state_52368[(2)]);
var inst_52344 = cljs.core.next(inst_52328);
var inst_52304 = inst_52344;
var inst_52305 = null;
var inst_52306 = (0);
var inst_52307 = (0);
var state_52368__$1 = (function (){var statearr_52403 = state_52368;
(statearr_52403[(25)] = inst_52343);

(statearr_52403[(19)] = inst_52304);

(statearr_52403[(9)] = inst_52305);

(statearr_52403[(12)] = inst_52307);

(statearr_52403[(20)] = inst_52306);

return statearr_52403;
})();
var statearr_52404_53753 = state_52368__$1;
(statearr_52404_53753[(2)] = null);

(statearr_52404_53753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (43))){
var state_52368__$1 = state_52368;
var statearr_52405_53755 = state_52368__$1;
(statearr_52405_53755[(2)] = null);

(statearr_52405_53755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (29))){
var inst_52352 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52406_53756 = state_52368__$1;
(statearr_52406_53756[(2)] = inst_52352);

(statearr_52406_53756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (44))){
var inst_52361 = (state_52368[(2)]);
var state_52368__$1 = (function (){var statearr_52412 = state_52368;
(statearr_52412[(26)] = inst_52361);

return statearr_52412;
})();
var statearr_52413_53757 = state_52368__$1;
(statearr_52413_53757[(2)] = null);

(statearr_52413_53757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (6))){
var inst_52292 = (state_52368[(27)]);
var inst_52291 = cljs.core.deref(cs);
var inst_52292__$1 = cljs.core.keys(inst_52291);
var inst_52297 = cljs.core.count(inst_52292__$1);
var inst_52298 = cljs.core.reset_BANG_(dctr,inst_52297);
var inst_52303 = cljs.core.seq(inst_52292__$1);
var inst_52304 = inst_52303;
var inst_52305 = null;
var inst_52306 = (0);
var inst_52307 = (0);
var state_52368__$1 = (function (){var statearr_52416 = state_52368;
(statearr_52416[(19)] = inst_52304);

(statearr_52416[(9)] = inst_52305);

(statearr_52416[(12)] = inst_52307);

(statearr_52416[(20)] = inst_52306);

(statearr_52416[(28)] = inst_52298);

(statearr_52416[(27)] = inst_52292__$1);

return statearr_52416;
})();
var statearr_52417_53761 = state_52368__$1;
(statearr_52417_53761[(2)] = null);

(statearr_52417_53761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (28))){
var inst_52304 = (state_52368[(19)]);
var inst_52328 = (state_52368[(23)]);
var inst_52328__$1 = cljs.core.seq(inst_52304);
var state_52368__$1 = (function (){var statearr_52418 = state_52368;
(statearr_52418[(23)] = inst_52328__$1);

return statearr_52418;
})();
if(inst_52328__$1){
var statearr_52419_53762 = state_52368__$1;
(statearr_52419_53762[(1)] = (33));

} else {
var statearr_52420_53763 = state_52368__$1;
(statearr_52420_53763[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (25))){
var inst_52307 = (state_52368[(12)]);
var inst_52306 = (state_52368[(20)]);
var inst_52309 = (inst_52307 < inst_52306);
var inst_52310 = inst_52309;
var state_52368__$1 = state_52368;
if(cljs.core.truth_(inst_52310)){
var statearr_52421_53764 = state_52368__$1;
(statearr_52421_53764[(1)] = (27));

} else {
var statearr_52422_53765 = state_52368__$1;
(statearr_52422_53765[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (34))){
var state_52368__$1 = state_52368;
var statearr_52425_53766 = state_52368__$1;
(statearr_52425_53766[(2)] = null);

(statearr_52425_53766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (17))){
var state_52368__$1 = state_52368;
var statearr_52426_53770 = state_52368__$1;
(statearr_52426_53770[(2)] = null);

(statearr_52426_53770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (3))){
var inst_52366 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52368__$1,inst_52366);
} else {
if((state_val_52369 === (12))){
var inst_52287 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52428_53771 = state_52368__$1;
(statearr_52428_53771[(2)] = inst_52287);

(statearr_52428_53771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (2))){
var state_52368__$1 = state_52368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52368__$1,(4),ch);
} else {
if((state_val_52369 === (23))){
var state_52368__$1 = state_52368;
var statearr_52433_53772 = state_52368__$1;
(statearr_52433_53772[(2)] = null);

(statearr_52433_53772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (35))){
var inst_52350 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52434_53775 = state_52368__$1;
(statearr_52434_53775[(2)] = inst_52350);

(statearr_52434_53775[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (19))){
var inst_52259 = (state_52368[(7)]);
var inst_52263 = cljs.core.chunk_first(inst_52259);
var inst_52264 = cljs.core.chunk_rest(inst_52259);
var inst_52265 = cljs.core.count(inst_52263);
var inst_52233 = inst_52264;
var inst_52234 = inst_52263;
var inst_52235 = inst_52265;
var inst_52236 = (0);
var state_52368__$1 = (function (){var statearr_52435 = state_52368;
(statearr_52435[(13)] = inst_52233);

(statearr_52435[(14)] = inst_52236);

(statearr_52435[(16)] = inst_52234);

(statearr_52435[(17)] = inst_52235);

return statearr_52435;
})();
var statearr_52436_53777 = state_52368__$1;
(statearr_52436_53777[(2)] = null);

(statearr_52436_53777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (11))){
var inst_52233 = (state_52368[(13)]);
var inst_52259 = (state_52368[(7)]);
var inst_52259__$1 = cljs.core.seq(inst_52233);
var state_52368__$1 = (function (){var statearr_52437 = state_52368;
(statearr_52437[(7)] = inst_52259__$1);

return statearr_52437;
})();
if(inst_52259__$1){
var statearr_52438_53778 = state_52368__$1;
(statearr_52438_53778[(1)] = (16));

} else {
var statearr_52439_53780 = state_52368__$1;
(statearr_52439_53780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (9))){
var inst_52289 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52440_53781 = state_52368__$1;
(statearr_52440_53781[(2)] = inst_52289);

(statearr_52440_53781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (5))){
var inst_52231 = cljs.core.deref(cs);
var inst_52232 = cljs.core.seq(inst_52231);
var inst_52233 = inst_52232;
var inst_52234 = null;
var inst_52235 = (0);
var inst_52236 = (0);
var state_52368__$1 = (function (){var statearr_52441 = state_52368;
(statearr_52441[(13)] = inst_52233);

(statearr_52441[(14)] = inst_52236);

(statearr_52441[(16)] = inst_52234);

(statearr_52441[(17)] = inst_52235);

return statearr_52441;
})();
var statearr_52442_53784 = state_52368__$1;
(statearr_52442_53784[(2)] = null);

(statearr_52442_53784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (14))){
var state_52368__$1 = state_52368;
var statearr_52443_53787 = state_52368__$1;
(statearr_52443_53787[(2)] = null);

(statearr_52443_53787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (45))){
var inst_52358 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52444_53789 = state_52368__$1;
(statearr_52444_53789[(2)] = inst_52358);

(statearr_52444_53789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (26))){
var inst_52292 = (state_52368[(27)]);
var inst_52354 = (state_52368[(2)]);
var inst_52355 = cljs.core.seq(inst_52292);
var state_52368__$1 = (function (){var statearr_52449 = state_52368;
(statearr_52449[(29)] = inst_52354);

return statearr_52449;
})();
if(inst_52355){
var statearr_52450_53791 = state_52368__$1;
(statearr_52450_53791[(1)] = (42));

} else {
var statearr_52451_53793 = state_52368__$1;
(statearr_52451_53793[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (16))){
var inst_52259 = (state_52368[(7)]);
var inst_52261 = cljs.core.chunked_seq_QMARK_(inst_52259);
var state_52368__$1 = state_52368;
if(inst_52261){
var statearr_52452_53795 = state_52368__$1;
(statearr_52452_53795[(1)] = (19));

} else {
var statearr_52453_53796 = state_52368__$1;
(statearr_52453_53796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (38))){
var inst_52347 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52454_53797 = state_52368__$1;
(statearr_52454_53797[(2)] = inst_52347);

(statearr_52454_53797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (30))){
var state_52368__$1 = state_52368;
var statearr_52455_53798 = state_52368__$1;
(statearr_52455_53798[(2)] = null);

(statearr_52455_53798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (10))){
var inst_52236 = (state_52368[(14)]);
var inst_52234 = (state_52368[(16)]);
var inst_52248 = cljs.core._nth(inst_52234,inst_52236);
var inst_52249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52248,(0),null);
var inst_52250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52248,(1),null);
var state_52368__$1 = (function (){var statearr_52456 = state_52368;
(statearr_52456[(24)] = inst_52249);

return statearr_52456;
})();
if(cljs.core.truth_(inst_52250)){
var statearr_52457_53802 = state_52368__$1;
(statearr_52457_53802[(1)] = (13));

} else {
var statearr_52458_53804 = state_52368__$1;
(statearr_52458_53804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (18))){
var inst_52285 = (state_52368[(2)]);
var state_52368__$1 = state_52368;
var statearr_52459_53805 = state_52368__$1;
(statearr_52459_53805[(2)] = inst_52285);

(statearr_52459_53805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (42))){
var state_52368__$1 = state_52368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52368__$1,(45),dchan);
} else {
if((state_val_52369 === (37))){
var inst_52337 = (state_52368[(22)]);
var inst_52328 = (state_52368[(23)]);
var inst_52224 = (state_52368[(11)]);
var inst_52337__$1 = cljs.core.first(inst_52328);
var inst_52338 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52337__$1,inst_52224,done);
var state_52368__$1 = (function (){var statearr_52460 = state_52368;
(statearr_52460[(22)] = inst_52337__$1);

return statearr_52460;
})();
if(cljs.core.truth_(inst_52338)){
var statearr_52461_53806 = state_52368__$1;
(statearr_52461_53806[(1)] = (39));

} else {
var statearr_52462_53807 = state_52368__$1;
(statearr_52462_53807[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52369 === (8))){
var inst_52236 = (state_52368[(14)]);
var inst_52235 = (state_52368[(17)]);
var inst_52238 = (inst_52236 < inst_52235);
var inst_52239 = inst_52238;
var state_52368__$1 = state_52368;
if(cljs.core.truth_(inst_52239)){
var statearr_52464_53809 = state_52368__$1;
(statearr_52464_53809[(1)] = (10));

} else {
var statearr_52465_53810 = state_52368__$1;
(statearr_52465_53810[(1)] = (11));

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
var statearr_52466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52466[(0)] = cljs$core$async$mult_$_state_machine__51343__auto__);

(statearr_52466[(1)] = (1));

return statearr_52466;
});
var cljs$core$async$mult_$_state_machine__51343__auto____1 = (function (state_52368){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52368);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52467){var ex__51346__auto__ = e52467;
var statearr_52468_53813 = state_52368;
(statearr_52468_53813[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52368[(4)]))){
var statearr_52469_53815 = state_52368;
(statearr_52469_53815[(1)] = cljs.core.first((state_52368[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53816 = state_52368;
state_52368 = G__53816;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51343__auto__ = function(state_52368){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51343__auto____1.call(this,state_52368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51343__auto____0;
cljs$core$async$mult_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51343__auto____1;
return cljs$core$async$mult_$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52470 = f__51399__auto__();
(statearr_52470[(6)] = c__51398__auto___53702);

return statearr_52470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var G__52474 = arguments.length;
switch (G__52474) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_53821 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_53821(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53824 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_53824(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53826 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53826(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53833 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_53833(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53837 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53837(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53842 = arguments.length;
var i__4865__auto___53843 = (0);
while(true){
if((i__4865__auto___53843 < len__4864__auto___53842)){
args__4870__auto__.push((arguments[i__4865__auto___53843]));

var G__53844 = (i__4865__auto___53843 + (1));
i__4865__auto___53843 = G__53844;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52488){
var map__52489 = p__52488;
var map__52489__$1 = cljs.core.__destructure_map(map__52489);
var opts = map__52489__$1;
var statearr_52490_53845 = state;
(statearr_52490_53845[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52491_53847 = state;
(statearr_52491_53847[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_52492_53849 = state;
(statearr_52492_53849[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52484){
var G__52485 = cljs.core.first(seq52484);
var seq52484__$1 = cljs.core.next(seq52484);
var G__52486 = cljs.core.first(seq52484__$1);
var seq52484__$2 = cljs.core.next(seq52484__$1);
var G__52487 = cljs.core.first(seq52484__$2);
var seq52484__$3 = cljs.core.next(seq52484__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52485,G__52486,G__52487,seq52484__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52493 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52494){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52494 = meta52494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52495,meta52494__$1){
var self__ = this;
var _52495__$1 = this;
return (new cljs.core.async.t_cljs$core$async52493(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52494__$1));
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52495){
var self__ = this;
var _52495__$1 = this;
return self__.meta52494;
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52494","meta52494",-1372302757,null)], null);
}));

(cljs.core.async.t_cljs$core$async52493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52493");

(cljs.core.async.t_cljs$core$async52493.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52493.
 */
cljs.core.async.__GT_t_cljs$core$async52493 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52494){
return (new cljs.core.async.t_cljs$core$async52493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52494));
});

}

return (new cljs.core.async.t_cljs$core$async52493(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51398__auto___53863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52571){
var state_val_52572 = (state_52571[(1)]);
if((state_val_52572 === (7))){
var inst_52524 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
if(cljs.core.truth_(inst_52524)){
var statearr_52573_53864 = state_52571__$1;
(statearr_52573_53864[(1)] = (8));

} else {
var statearr_52574_53865 = state_52571__$1;
(statearr_52574_53865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (20))){
var inst_52517 = (state_52571[(7)]);
var state_52571__$1 = state_52571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52571__$1,(23),out,inst_52517);
} else {
if((state_val_52572 === (1))){
var inst_52500 = calc_state();
var inst_52501 = cljs.core.__destructure_map(inst_52500);
var inst_52502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52501,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52501,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52501,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52505 = inst_52500;
var state_52571__$1 = (function (){var statearr_52575 = state_52571;
(statearr_52575[(8)] = inst_52502);

(statearr_52575[(9)] = inst_52503);

(statearr_52575[(10)] = inst_52505);

(statearr_52575[(11)] = inst_52504);

return statearr_52575;
})();
var statearr_52576_53870 = state_52571__$1;
(statearr_52576_53870[(2)] = null);

(statearr_52576_53870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (24))){
var inst_52508 = (state_52571[(12)]);
var inst_52505 = inst_52508;
var state_52571__$1 = (function (){var statearr_52577 = state_52571;
(statearr_52577[(10)] = inst_52505);

return statearr_52577;
})();
var statearr_52578_53871 = state_52571__$1;
(statearr_52578_53871[(2)] = null);

(statearr_52578_53871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (4))){
var inst_52517 = (state_52571[(7)]);
var inst_52519 = (state_52571[(13)]);
var inst_52516 = (state_52571[(2)]);
var inst_52517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52516,(0),null);
var inst_52518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52516,(1),null);
var inst_52519__$1 = (inst_52517__$1 == null);
var state_52571__$1 = (function (){var statearr_52579 = state_52571;
(statearr_52579[(7)] = inst_52517__$1);

(statearr_52579[(14)] = inst_52518);

(statearr_52579[(13)] = inst_52519__$1);

return statearr_52579;
})();
if(cljs.core.truth_(inst_52519__$1)){
var statearr_52580_53874 = state_52571__$1;
(statearr_52580_53874[(1)] = (5));

} else {
var statearr_52581_53875 = state_52571__$1;
(statearr_52581_53875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (15))){
var inst_52545 = (state_52571[(15)]);
var inst_52509 = (state_52571[(16)]);
var inst_52545__$1 = cljs.core.empty_QMARK_(inst_52509);
var state_52571__$1 = (function (){var statearr_52582 = state_52571;
(statearr_52582[(15)] = inst_52545__$1);

return statearr_52582;
})();
if(inst_52545__$1){
var statearr_52583_53877 = state_52571__$1;
(statearr_52583_53877[(1)] = (17));

} else {
var statearr_52584_53878 = state_52571__$1;
(statearr_52584_53878[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (21))){
var inst_52508 = (state_52571[(12)]);
var inst_52505 = inst_52508;
var state_52571__$1 = (function (){var statearr_52585 = state_52571;
(statearr_52585[(10)] = inst_52505);

return statearr_52585;
})();
var statearr_52586_53879 = state_52571__$1;
(statearr_52586_53879[(2)] = null);

(statearr_52586_53879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (13))){
var inst_52537 = (state_52571[(2)]);
var inst_52538 = calc_state();
var inst_52505 = inst_52538;
var state_52571__$1 = (function (){var statearr_52587 = state_52571;
(statearr_52587[(17)] = inst_52537);

(statearr_52587[(10)] = inst_52505);

return statearr_52587;
})();
var statearr_52588_53880 = state_52571__$1;
(statearr_52588_53880[(2)] = null);

(statearr_52588_53880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (22))){
var inst_52565 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
var statearr_52589_53882 = state_52571__$1;
(statearr_52589_53882[(2)] = inst_52565);

(statearr_52589_53882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (6))){
var inst_52518 = (state_52571[(14)]);
var inst_52522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52518,change);
var state_52571__$1 = state_52571;
var statearr_52590_53883 = state_52571__$1;
(statearr_52590_53883[(2)] = inst_52522);

(statearr_52590_53883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (25))){
var state_52571__$1 = state_52571;
var statearr_52591_53884 = state_52571__$1;
(statearr_52591_53884[(2)] = null);

(statearr_52591_53884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (17))){
var inst_52510 = (state_52571[(18)]);
var inst_52518 = (state_52571[(14)]);
var inst_52547 = (inst_52510.cljs$core$IFn$_invoke$arity$1 ? inst_52510.cljs$core$IFn$_invoke$arity$1(inst_52518) : inst_52510.call(null,inst_52518));
var inst_52548 = cljs.core.not(inst_52547);
var state_52571__$1 = state_52571;
var statearr_52592_53886 = state_52571__$1;
(statearr_52592_53886[(2)] = inst_52548);

(statearr_52592_53886[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (3))){
var inst_52569 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52571__$1,inst_52569);
} else {
if((state_val_52572 === (12))){
var state_52571__$1 = state_52571;
var statearr_52593_53887 = state_52571__$1;
(statearr_52593_53887[(2)] = null);

(statearr_52593_53887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (2))){
var inst_52508 = (state_52571[(12)]);
var inst_52505 = (state_52571[(10)]);
var inst_52508__$1 = cljs.core.__destructure_map(inst_52505);
var inst_52509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52508__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52508__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52508__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52571__$1 = (function (){var statearr_52594 = state_52571;
(statearr_52594[(12)] = inst_52508__$1);

(statearr_52594[(18)] = inst_52510);

(statearr_52594[(16)] = inst_52509);

return statearr_52594;
})();
return cljs.core.async.ioc_alts_BANG_(state_52571__$1,(4),inst_52511);
} else {
if((state_val_52572 === (23))){
var inst_52556 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
if(cljs.core.truth_(inst_52556)){
var statearr_52595_53889 = state_52571__$1;
(statearr_52595_53889[(1)] = (24));

} else {
var statearr_52597_53890 = state_52571__$1;
(statearr_52597_53890[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (19))){
var inst_52551 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
var statearr_52599_53891 = state_52571__$1;
(statearr_52599_53891[(2)] = inst_52551);

(statearr_52599_53891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (11))){
var inst_52518 = (state_52571[(14)]);
var inst_52534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52518);
var state_52571__$1 = state_52571;
var statearr_52600_53892 = state_52571__$1;
(statearr_52600_53892[(2)] = inst_52534);

(statearr_52600_53892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (9))){
var inst_52509 = (state_52571[(16)]);
var inst_52518 = (state_52571[(14)]);
var inst_52542 = (state_52571[(19)]);
var inst_52542__$1 = (inst_52509.cljs$core$IFn$_invoke$arity$1 ? inst_52509.cljs$core$IFn$_invoke$arity$1(inst_52518) : inst_52509.call(null,inst_52518));
var state_52571__$1 = (function (){var statearr_52601 = state_52571;
(statearr_52601[(19)] = inst_52542__$1);

return statearr_52601;
})();
if(cljs.core.truth_(inst_52542__$1)){
var statearr_52602_53893 = state_52571__$1;
(statearr_52602_53893[(1)] = (14));

} else {
var statearr_52603_53894 = state_52571__$1;
(statearr_52603_53894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (5))){
var inst_52519 = (state_52571[(13)]);
var state_52571__$1 = state_52571;
var statearr_52604_53895 = state_52571__$1;
(statearr_52604_53895[(2)] = inst_52519);

(statearr_52604_53895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (14))){
var inst_52542 = (state_52571[(19)]);
var state_52571__$1 = state_52571;
var statearr_52605_53896 = state_52571__$1;
(statearr_52605_53896[(2)] = inst_52542);

(statearr_52605_53896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (26))){
var inst_52561 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
var statearr_52606_53897 = state_52571__$1;
(statearr_52606_53897[(2)] = inst_52561);

(statearr_52606_53897[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (16))){
var inst_52553 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
if(cljs.core.truth_(inst_52553)){
var statearr_52607_53898 = state_52571__$1;
(statearr_52607_53898[(1)] = (20));

} else {
var statearr_52608_53899 = state_52571__$1;
(statearr_52608_53899[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (10))){
var inst_52567 = (state_52571[(2)]);
var state_52571__$1 = state_52571;
var statearr_52609_53900 = state_52571__$1;
(statearr_52609_53900[(2)] = inst_52567);

(statearr_52609_53900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (18))){
var inst_52545 = (state_52571[(15)]);
var state_52571__$1 = state_52571;
var statearr_52611_53901 = state_52571__$1;
(statearr_52611_53901[(2)] = inst_52545);

(statearr_52611_53901[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52572 === (8))){
var inst_52517 = (state_52571[(7)]);
var inst_52532 = (inst_52517 == null);
var state_52571__$1 = state_52571;
if(cljs.core.truth_(inst_52532)){
var statearr_52613_53902 = state_52571__$1;
(statearr_52613_53902[(1)] = (11));

} else {
var statearr_52614_53903 = state_52571__$1;
(statearr_52614_53903[(1)] = (12));

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
var statearr_52615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52615[(0)] = cljs$core$async$mix_$_state_machine__51343__auto__);

(statearr_52615[(1)] = (1));

return statearr_52615;
});
var cljs$core$async$mix_$_state_machine__51343__auto____1 = (function (state_52571){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52571);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52616){var ex__51346__auto__ = e52616;
var statearr_52617_53906 = state_52571;
(statearr_52617_53906[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52571[(4)]))){
var statearr_52618_53907 = state_52571;
(statearr_52618_53907[(1)] = cljs.core.first((state_52571[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53910 = state_52571;
state_52571 = G__53910;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51343__auto__ = function(state_52571){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51343__auto____1.call(this,state_52571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51343__auto____0;
cljs$core$async$mix_$_state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51343__auto____1;
return cljs$core$async$mix_$_state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52619 = f__51399__auto__();
(statearr_52619[(6)] = c__51398__auto___53863);

return statearr_52619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_53915 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_53915(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53916 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_53916(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53917 = (function() {
var G__53918 = null;
var G__53918__1 = (function (p){
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
var G__53918__2 = (function (p,v){
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
G__53918 = function(p,v){
switch(arguments.length){
case 1:
return G__53918__1.call(this,p);
case 2:
return G__53918__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53918.cljs$core$IFn$_invoke$arity$1 = G__53918__1;
G__53918.cljs$core$IFn$_invoke$arity$2 = G__53918__2;
return G__53918;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52625 = arguments.length;
switch (G__52625) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53917(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53917(p,v);
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
var G__52633 = arguments.length;
switch (G__52633) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52631_SHARP_){
if(cljs.core.truth_((p1__52631_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52631_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52631_SHARP_.call(null,topic)))){
return p1__52631_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52631_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52634 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52635){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52635 = meta52635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52636,meta52635__$1){
var self__ = this;
var _52636__$1 = this;
return (new cljs.core.async.t_cljs$core$async52634(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52635__$1));
}));

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52636){
var self__ = this;
var _52636__$1 = this;
return self__.meta52635;
}));

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52635","meta52635",-918035638,null)], null);
}));

(cljs.core.async.t_cljs$core$async52634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52634");

(cljs.core.async.t_cljs$core$async52634.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52634.
 */
cljs.core.async.__GT_t_cljs$core$async52634 = (function cljs$core$async$__GT_t_cljs$core$async52634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52635){
return (new cljs.core.async.t_cljs$core$async52634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52635));
});

}

return (new cljs.core.async.t_cljs$core$async52634(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51398__auto___53937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52713){
var state_val_52714 = (state_52713[(1)]);
if((state_val_52714 === (7))){
var inst_52709 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52715_53938 = state_52713__$1;
(statearr_52715_53938[(2)] = inst_52709);

(statearr_52715_53938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (20))){
var state_52713__$1 = state_52713;
var statearr_52716_53939 = state_52713__$1;
(statearr_52716_53939[(2)] = null);

(statearr_52716_53939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (1))){
var state_52713__$1 = state_52713;
var statearr_52717_53940 = state_52713__$1;
(statearr_52717_53940[(2)] = null);

(statearr_52717_53940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (24))){
var inst_52692 = (state_52713[(7)]);
var inst_52701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52692);
var state_52713__$1 = state_52713;
var statearr_52718_53941 = state_52713__$1;
(statearr_52718_53941[(2)] = inst_52701);

(statearr_52718_53941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (4))){
var inst_52644 = (state_52713[(8)]);
var inst_52644__$1 = (state_52713[(2)]);
var inst_52645 = (inst_52644__$1 == null);
var state_52713__$1 = (function (){var statearr_52719 = state_52713;
(statearr_52719[(8)] = inst_52644__$1);

return statearr_52719;
})();
if(cljs.core.truth_(inst_52645)){
var statearr_52720_53942 = state_52713__$1;
(statearr_52720_53942[(1)] = (5));

} else {
var statearr_52721_53943 = state_52713__$1;
(statearr_52721_53943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (15))){
var inst_52686 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52722_53944 = state_52713__$1;
(statearr_52722_53944[(2)] = inst_52686);

(statearr_52722_53944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (21))){
var inst_52706 = (state_52713[(2)]);
var state_52713__$1 = (function (){var statearr_52723 = state_52713;
(statearr_52723[(9)] = inst_52706);

return statearr_52723;
})();
var statearr_52724_53947 = state_52713__$1;
(statearr_52724_53947[(2)] = null);

(statearr_52724_53947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (13))){
var inst_52668 = (state_52713[(10)]);
var inst_52670 = cljs.core.chunked_seq_QMARK_(inst_52668);
var state_52713__$1 = state_52713;
if(inst_52670){
var statearr_52725_53948 = state_52713__$1;
(statearr_52725_53948[(1)] = (16));

} else {
var statearr_52726_53950 = state_52713__$1;
(statearr_52726_53950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (22))){
var inst_52698 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
if(cljs.core.truth_(inst_52698)){
var statearr_52727_53952 = state_52713__$1;
(statearr_52727_53952[(1)] = (23));

} else {
var statearr_52728_53953 = state_52713__$1;
(statearr_52728_53953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (6))){
var inst_52644 = (state_52713[(8)]);
var inst_52694 = (state_52713[(11)]);
var inst_52692 = (state_52713[(7)]);
var inst_52692__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52644) : topic_fn.call(null,inst_52644));
var inst_52693 = cljs.core.deref(mults);
var inst_52694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52693,inst_52692__$1);
var state_52713__$1 = (function (){var statearr_52729 = state_52713;
(statearr_52729[(11)] = inst_52694__$1);

(statearr_52729[(7)] = inst_52692__$1);

return statearr_52729;
})();
if(cljs.core.truth_(inst_52694__$1)){
var statearr_52730_53957 = state_52713__$1;
(statearr_52730_53957[(1)] = (19));

} else {
var statearr_52731_53959 = state_52713__$1;
(statearr_52731_53959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (25))){
var inst_52703 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52732_53960 = state_52713__$1;
(statearr_52732_53960[(2)] = inst_52703);

(statearr_52732_53960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (17))){
var inst_52668 = (state_52713[(10)]);
var inst_52677 = cljs.core.first(inst_52668);
var inst_52678 = cljs.core.async.muxch_STAR_(inst_52677);
var inst_52679 = cljs.core.async.close_BANG_(inst_52678);
var inst_52680 = cljs.core.next(inst_52668);
var inst_52654 = inst_52680;
var inst_52655 = null;
var inst_52656 = (0);
var inst_52657 = (0);
var state_52713__$1 = (function (){var statearr_52733 = state_52713;
(statearr_52733[(12)] = inst_52654);

(statearr_52733[(13)] = inst_52657);

(statearr_52733[(14)] = inst_52656);

(statearr_52733[(15)] = inst_52655);

(statearr_52733[(16)] = inst_52679);

return statearr_52733;
})();
var statearr_52734_53961 = state_52713__$1;
(statearr_52734_53961[(2)] = null);

(statearr_52734_53961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (3))){
var inst_52711 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52713__$1,inst_52711);
} else {
if((state_val_52714 === (12))){
var inst_52688 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52735_53965 = state_52713__$1;
(statearr_52735_53965[(2)] = inst_52688);

(statearr_52735_53965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (2))){
var state_52713__$1 = state_52713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52713__$1,(4),ch);
} else {
if((state_val_52714 === (23))){
var state_52713__$1 = state_52713;
var statearr_52736_53967 = state_52713__$1;
(statearr_52736_53967[(2)] = null);

(statearr_52736_53967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (19))){
var inst_52644 = (state_52713[(8)]);
var inst_52694 = (state_52713[(11)]);
var inst_52696 = cljs.core.async.muxch_STAR_(inst_52694);
var state_52713__$1 = state_52713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52713__$1,(22),inst_52696,inst_52644);
} else {
if((state_val_52714 === (11))){
var inst_52668 = (state_52713[(10)]);
var inst_52654 = (state_52713[(12)]);
var inst_52668__$1 = cljs.core.seq(inst_52654);
var state_52713__$1 = (function (){var statearr_52738 = state_52713;
(statearr_52738[(10)] = inst_52668__$1);

return statearr_52738;
})();
if(inst_52668__$1){
var statearr_52740_53968 = state_52713__$1;
(statearr_52740_53968[(1)] = (13));

} else {
var statearr_52741_53971 = state_52713__$1;
(statearr_52741_53971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (9))){
var inst_52690 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52742_53972 = state_52713__$1;
(statearr_52742_53972[(2)] = inst_52690);

(statearr_52742_53972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (5))){
var inst_52651 = cljs.core.deref(mults);
var inst_52652 = cljs.core.vals(inst_52651);
var inst_52653 = cljs.core.seq(inst_52652);
var inst_52654 = inst_52653;
var inst_52655 = null;
var inst_52656 = (0);
var inst_52657 = (0);
var state_52713__$1 = (function (){var statearr_52743 = state_52713;
(statearr_52743[(12)] = inst_52654);

(statearr_52743[(13)] = inst_52657);

(statearr_52743[(14)] = inst_52656);

(statearr_52743[(15)] = inst_52655);

return statearr_52743;
})();
var statearr_52744_53976 = state_52713__$1;
(statearr_52744_53976[(2)] = null);

(statearr_52744_53976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (14))){
var state_52713__$1 = state_52713;
var statearr_52748_53978 = state_52713__$1;
(statearr_52748_53978[(2)] = null);

(statearr_52748_53978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (16))){
var inst_52668 = (state_52713[(10)]);
var inst_52672 = cljs.core.chunk_first(inst_52668);
var inst_52673 = cljs.core.chunk_rest(inst_52668);
var inst_52674 = cljs.core.count(inst_52672);
var inst_52654 = inst_52673;
var inst_52655 = inst_52672;
var inst_52656 = inst_52674;
var inst_52657 = (0);
var state_52713__$1 = (function (){var statearr_52749 = state_52713;
(statearr_52749[(12)] = inst_52654);

(statearr_52749[(13)] = inst_52657);

(statearr_52749[(14)] = inst_52656);

(statearr_52749[(15)] = inst_52655);

return statearr_52749;
})();
var statearr_52750_53979 = state_52713__$1;
(statearr_52750_53979[(2)] = null);

(statearr_52750_53979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (10))){
var inst_52654 = (state_52713[(12)]);
var inst_52657 = (state_52713[(13)]);
var inst_52656 = (state_52713[(14)]);
var inst_52655 = (state_52713[(15)]);
var inst_52662 = cljs.core._nth(inst_52655,inst_52657);
var inst_52663 = cljs.core.async.muxch_STAR_(inst_52662);
var inst_52664 = cljs.core.async.close_BANG_(inst_52663);
var inst_52665 = (inst_52657 + (1));
var tmp52745 = inst_52654;
var tmp52746 = inst_52656;
var tmp52747 = inst_52655;
var inst_52654__$1 = tmp52745;
var inst_52655__$1 = tmp52747;
var inst_52656__$1 = tmp52746;
var inst_52657__$1 = inst_52665;
var state_52713__$1 = (function (){var statearr_52751 = state_52713;
(statearr_52751[(12)] = inst_52654__$1);

(statearr_52751[(13)] = inst_52657__$1);

(statearr_52751[(17)] = inst_52664);

(statearr_52751[(14)] = inst_52656__$1);

(statearr_52751[(15)] = inst_52655__$1);

return statearr_52751;
})();
var statearr_52752_53982 = state_52713__$1;
(statearr_52752_53982[(2)] = null);

(statearr_52752_53982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (18))){
var inst_52683 = (state_52713[(2)]);
var state_52713__$1 = state_52713;
var statearr_52753_53983 = state_52713__$1;
(statearr_52753_53983[(2)] = inst_52683);

(statearr_52753_53983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52714 === (8))){
var inst_52657 = (state_52713[(13)]);
var inst_52656 = (state_52713[(14)]);
var inst_52659 = (inst_52657 < inst_52656);
var inst_52660 = inst_52659;
var state_52713__$1 = state_52713;
if(cljs.core.truth_(inst_52660)){
var statearr_52754_53984 = state_52713__$1;
(statearr_52754_53984[(1)] = (10));

} else {
var statearr_52755_53985 = state_52713__$1;
(statearr_52755_53985[(1)] = (11));

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
var statearr_52756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52756[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52756[(1)] = (1));

return statearr_52756;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52713){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52713);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52757){var ex__51346__auto__ = e52757;
var statearr_52758_53988 = state_52713;
(statearr_52758_53988[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52713[(4)]))){
var statearr_52759_53989 = state_52713;
(statearr_52759_53989[(1)] = cljs.core.first((state_52713[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53990 = state_52713;
state_52713 = G__53990;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52760 = f__51399__auto__();
(statearr_52760[(6)] = c__51398__auto___53937);

return statearr_52760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var G__52762 = arguments.length;
switch (G__52762) {
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
var G__52765 = arguments.length;
switch (G__52765) {
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
var G__52768 = arguments.length;
switch (G__52768) {
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
var c__51398__auto___54006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52814){
var state_val_52815 = (state_52814[(1)]);
if((state_val_52815 === (7))){
var state_52814__$1 = state_52814;
var statearr_52816_54007 = state_52814__$1;
(statearr_52816_54007[(2)] = null);

(statearr_52816_54007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (1))){
var state_52814__$1 = state_52814;
var statearr_52817_54008 = state_52814__$1;
(statearr_52817_54008[(2)] = null);

(statearr_52817_54008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (4))){
var inst_52772 = (state_52814[(7)]);
var inst_52771 = (state_52814[(8)]);
var inst_52774 = (inst_52772 < inst_52771);
var state_52814__$1 = state_52814;
if(cljs.core.truth_(inst_52774)){
var statearr_52818_54010 = state_52814__$1;
(statearr_52818_54010[(1)] = (6));

} else {
var statearr_52819_54011 = state_52814__$1;
(statearr_52819_54011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (15))){
var inst_52800 = (state_52814[(9)]);
var inst_52805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52800);
var state_52814__$1 = state_52814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52814__$1,(17),out,inst_52805);
} else {
if((state_val_52815 === (13))){
var inst_52800 = (state_52814[(9)]);
var inst_52800__$1 = (state_52814[(2)]);
var inst_52801 = cljs.core.some(cljs.core.nil_QMARK_,inst_52800__$1);
var state_52814__$1 = (function (){var statearr_52820 = state_52814;
(statearr_52820[(9)] = inst_52800__$1);

return statearr_52820;
})();
if(cljs.core.truth_(inst_52801)){
var statearr_52821_54014 = state_52814__$1;
(statearr_52821_54014[(1)] = (14));

} else {
var statearr_52822_54016 = state_52814__$1;
(statearr_52822_54016[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (6))){
var state_52814__$1 = state_52814;
var statearr_52823_54017 = state_52814__$1;
(statearr_52823_54017[(2)] = null);

(statearr_52823_54017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (17))){
var inst_52807 = (state_52814[(2)]);
var state_52814__$1 = (function (){var statearr_52825 = state_52814;
(statearr_52825[(10)] = inst_52807);

return statearr_52825;
})();
var statearr_52826_54019 = state_52814__$1;
(statearr_52826_54019[(2)] = null);

(statearr_52826_54019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (3))){
var inst_52812 = (state_52814[(2)]);
var state_52814__$1 = state_52814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52814__$1,inst_52812);
} else {
if((state_val_52815 === (12))){
var _ = (function (){var statearr_52827 = state_52814;
(statearr_52827[(4)] = cljs.core.rest((state_52814[(4)])));

return statearr_52827;
})();
var state_52814__$1 = state_52814;
var ex52824 = (state_52814__$1[(2)]);
var statearr_52828_54021 = state_52814__$1;
(statearr_52828_54021[(5)] = ex52824);


if((ex52824 instanceof Object)){
var statearr_52829_54023 = state_52814__$1;
(statearr_52829_54023[(1)] = (11));

(statearr_52829_54023[(5)] = null);

} else {
throw ex52824;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (2))){
var inst_52770 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52771 = cnt;
var inst_52772 = (0);
var state_52814__$1 = (function (){var statearr_52830 = state_52814;
(statearr_52830[(7)] = inst_52772);

(statearr_52830[(8)] = inst_52771);

(statearr_52830[(11)] = inst_52770);

return statearr_52830;
})();
var statearr_52831_54024 = state_52814__$1;
(statearr_52831_54024[(2)] = null);

(statearr_52831_54024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (11))){
var inst_52776 = (state_52814[(2)]);
var inst_52779 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52814__$1 = (function (){var statearr_52832 = state_52814;
(statearr_52832[(12)] = inst_52776);

return statearr_52832;
})();
var statearr_52833_54025 = state_52814__$1;
(statearr_52833_54025[(2)] = inst_52779);

(statearr_52833_54025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (9))){
var inst_52772 = (state_52814[(7)]);
var _ = (function (){var statearr_52834 = state_52814;
(statearr_52834[(4)] = cljs.core.cons((12),(state_52814[(4)])));

return statearr_52834;
})();
var inst_52786 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52772) : chs__$1.call(null,inst_52772));
var inst_52787 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52772) : done.call(null,inst_52772));
var inst_52788 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52786,inst_52787);
var ___$1 = (function (){var statearr_52835 = state_52814;
(statearr_52835[(4)] = cljs.core.rest((state_52814[(4)])));

return statearr_52835;
})();
var state_52814__$1 = state_52814;
var statearr_52836_54028 = state_52814__$1;
(statearr_52836_54028[(2)] = inst_52788);

(statearr_52836_54028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (5))){
var inst_52798 = (state_52814[(2)]);
var state_52814__$1 = (function (){var statearr_52837 = state_52814;
(statearr_52837[(13)] = inst_52798);

return statearr_52837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52814__$1,(13),dchan);
} else {
if((state_val_52815 === (14))){
var inst_52803 = cljs.core.async.close_BANG_(out);
var state_52814__$1 = state_52814;
var statearr_52838_54029 = state_52814__$1;
(statearr_52838_54029[(2)] = inst_52803);

(statearr_52838_54029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (16))){
var inst_52810 = (state_52814[(2)]);
var state_52814__$1 = state_52814;
var statearr_52839_54030 = state_52814__$1;
(statearr_52839_54030[(2)] = inst_52810);

(statearr_52839_54030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (10))){
var inst_52772 = (state_52814[(7)]);
var inst_52791 = (state_52814[(2)]);
var inst_52792 = (inst_52772 + (1));
var inst_52772__$1 = inst_52792;
var state_52814__$1 = (function (){var statearr_52840 = state_52814;
(statearr_52840[(7)] = inst_52772__$1);

(statearr_52840[(14)] = inst_52791);

return statearr_52840;
})();
var statearr_52841_54032 = state_52814__$1;
(statearr_52841_54032[(2)] = null);

(statearr_52841_54032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52815 === (8))){
var inst_52796 = (state_52814[(2)]);
var state_52814__$1 = state_52814;
var statearr_52842_54033 = state_52814__$1;
(statearr_52842_54033[(2)] = inst_52796);

(statearr_52842_54033[(1)] = (5));


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
var statearr_52844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52844[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52844[(1)] = (1));

return statearr_52844;
});
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52814){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52814);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52845){var ex__51346__auto__ = e52845;
var statearr_52846_54036 = state_52814;
(statearr_52846_54036[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52814[(4)]))){
var statearr_52847_54038 = state_52814;
(statearr_52847_54038[(1)] = cljs.core.first((state_52814[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54039 = state_52814;
state_52814 = G__54039;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52848 = f__51399__auto__();
(statearr_52848[(6)] = c__51398__auto___54006);

return statearr_52848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var G__52851 = arguments.length;
switch (G__52851) {
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
var c__51398__auto___54041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52883){
var state_val_52884 = (state_52883[(1)]);
if((state_val_52884 === (7))){
var inst_52863 = (state_52883[(7)]);
var inst_52862 = (state_52883[(8)]);
var inst_52862__$1 = (state_52883[(2)]);
var inst_52863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52862__$1,(0),null);
var inst_52864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52862__$1,(1),null);
var inst_52865 = (inst_52863__$1 == null);
var state_52883__$1 = (function (){var statearr_52885 = state_52883;
(statearr_52885[(7)] = inst_52863__$1);

(statearr_52885[(9)] = inst_52864);

(statearr_52885[(8)] = inst_52862__$1);

return statearr_52885;
})();
if(cljs.core.truth_(inst_52865)){
var statearr_52886_54043 = state_52883__$1;
(statearr_52886_54043[(1)] = (8));

} else {
var statearr_52887_54044 = state_52883__$1;
(statearr_52887_54044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (1))){
var inst_52852 = cljs.core.vec(chs);
var inst_52853 = inst_52852;
var state_52883__$1 = (function (){var statearr_52888 = state_52883;
(statearr_52888[(10)] = inst_52853);

return statearr_52888;
})();
var statearr_52889_54049 = state_52883__$1;
(statearr_52889_54049[(2)] = null);

(statearr_52889_54049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (4))){
var inst_52853 = (state_52883[(10)]);
var state_52883__$1 = state_52883;
return cljs.core.async.ioc_alts_BANG_(state_52883__$1,(7),inst_52853);
} else {
if((state_val_52884 === (6))){
var inst_52879 = (state_52883[(2)]);
var state_52883__$1 = state_52883;
var statearr_52890_54053 = state_52883__$1;
(statearr_52890_54053[(2)] = inst_52879);

(statearr_52890_54053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (3))){
var inst_52881 = (state_52883[(2)]);
var state_52883__$1 = state_52883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52883__$1,inst_52881);
} else {
if((state_val_52884 === (2))){
var inst_52853 = (state_52883[(10)]);
var inst_52855 = cljs.core.count(inst_52853);
var inst_52856 = (inst_52855 > (0));
var state_52883__$1 = state_52883;
if(cljs.core.truth_(inst_52856)){
var statearr_52892_54054 = state_52883__$1;
(statearr_52892_54054[(1)] = (4));

} else {
var statearr_52893_54055 = state_52883__$1;
(statearr_52893_54055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (11))){
var inst_52853 = (state_52883[(10)]);
var inst_52872 = (state_52883[(2)]);
var tmp52891 = inst_52853;
var inst_52853__$1 = tmp52891;
var state_52883__$1 = (function (){var statearr_52894 = state_52883;
(statearr_52894[(11)] = inst_52872);

(statearr_52894[(10)] = inst_52853__$1);

return statearr_52894;
})();
var statearr_52895_54057 = state_52883__$1;
(statearr_52895_54057[(2)] = null);

(statearr_52895_54057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (9))){
var inst_52863 = (state_52883[(7)]);
var state_52883__$1 = state_52883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52883__$1,(11),out,inst_52863);
} else {
if((state_val_52884 === (5))){
var inst_52877 = cljs.core.async.close_BANG_(out);
var state_52883__$1 = state_52883;
var statearr_52896_54059 = state_52883__$1;
(statearr_52896_54059[(2)] = inst_52877);

(statearr_52896_54059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (10))){
var inst_52875 = (state_52883[(2)]);
var state_52883__$1 = state_52883;
var statearr_52897_54061 = state_52883__$1;
(statearr_52897_54061[(2)] = inst_52875);

(statearr_52897_54061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (8))){
var inst_52863 = (state_52883[(7)]);
var inst_52853 = (state_52883[(10)]);
var inst_52864 = (state_52883[(9)]);
var inst_52862 = (state_52883[(8)]);
var inst_52867 = (function (){var cs = inst_52853;
var vec__52858 = inst_52862;
var v = inst_52863;
var c = inst_52864;
return (function (p1__52849_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52849_SHARP_);
});
})();
var inst_52868 = cljs.core.filterv(inst_52867,inst_52853);
var inst_52853__$1 = inst_52868;
var state_52883__$1 = (function (){var statearr_52898 = state_52883;
(statearr_52898[(10)] = inst_52853__$1);

return statearr_52898;
})();
var statearr_52899_54064 = state_52883__$1;
(statearr_52899_54064[(2)] = null);

(statearr_52899_54064[(1)] = (2));


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
var cljs$core$async$state_machine__51343__auto____1 = (function (state_52883){
while(true){
var ret_value__51344__auto__ = (function (){try{while(true){
var result__51345__auto__ = switch__51342__auto__(state_52883);
if(cljs.core.keyword_identical_QMARK_(result__51345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51345__auto__;
}
break;
}
}catch (e52901){var ex__51346__auto__ = e52901;
var statearr_52902_54066 = state_52883;
(statearr_52902_54066[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52883[(4)]))){
var statearr_52903_54067 = state_52883;
(statearr_52903_54067[(1)] = cljs.core.first((state_52883[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54068 = state_52883;
state_52883 = G__54068;
continue;
} else {
return ret_value__51344__auto__;
}
break;
}
});
cljs$core$async$state_machine__51343__auto__ = function(state_52883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51343__auto____1.call(this,state_52883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51343__auto____0;
cljs$core$async$state_machine__51343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51343__auto____1;
return cljs$core$async$state_machine__51343__auto__;
})()
})();
var state__51400__auto__ = (function (){var statearr_52904 = f__51399__auto__();
(statearr_52904[(6)] = c__51398__auto___54041);

return statearr_52904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var c__51398__auto___54071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_52931){
var state_val_52932 = (state_52931[(1)]);
if((state_val_52932 === (7))){
var inst_52912 = (state_52931[(7)]);
var inst_52912__$1 = (state_52931[(2)]);
var inst_52913 = (inst_52912__$1 == null);
var inst_52914 = cljs.core.not(inst_52913);
var state_52931__$1 = (function (){var statearr_52933 = state_52931;
(statearr_52933[(7)] = inst_52912__$1);

return statearr_52933;
})();
if(inst_52914){
var statearr_52934_54075 = state_52931__$1;
(statearr_52934_54075[(1)] = (8));

} else {
var statearr_52935_54076 = state_52931__$1;
(statearr_52935_54076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (1))){
var inst_52907 = (0);
var state_52931__$1 = (function (){var statearr_52936 = state_52931;
(statearr_52936[(8)] = inst_52907);

return statearr_52936;
})();
var statearr_52937_54077 = state_52931__$1;
(statearr_52937_54077[(2)] = null);

(statearr_52937_54077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (4))){
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52931__$1,(7),ch);
} else {
if((state_val_52932 === (6))){
var inst_52925 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
var statearr_52938_54080 = state_52931__$1;
(statearr_52938_54080[(2)] = inst_52925);

(statearr_52938_54080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (3))){
var inst_52927 = (state_52931[(2)]);
var inst_52929 = cljs.core.async.close_BANG_(out);
var state_52931__$1 = (function (){var statearr_52939 = state_52931;
(statearr_52939[(9)] = inst_52927);

return statearr_52939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52931__$1,inst_52929);
} else {
if((state_val_52932 === (2))){
var inst_52907 = (state_52931[(8)]);
var inst_52909 = (inst_52907 < n);
var state_52931__$1 = state_52931;
if(cljs.core.truth_(inst_52909)){
var statearr_52940_54081 = state_52931__$1;
(statearr_52940_54081[(1)] = (4));

} else {
var statearr_52941_54083 = state_52931__$1;
(statearr_52941_54083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (11))){
var inst_52907 = (state_52931[(8)]);
var inst_52917 = (state_52931[(2)]);
var inst_52918 = (inst_52907 + (1));
var inst_52907__$1 = inst_52918;
var state_52931__$1 = (function (){var statearr_52942 = state_52931;
(statearr_52942[(10)] = inst_52917);

(statearr_52942[(8)] = inst_52907__$1);

return statearr_52942;
})();
var statearr_52943_54086 = state_52931__$1;
(statearr_52943_54086[(2)] = null);

(statearr_52943_54086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (9))){
var state_52931__$1 = state_52931;
var statearr_52944_54087 = state_52931__$1;
(statearr_52944_54087[(2)] = null);

(statearr_52944_54087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (5))){
var state_52931__$1 = state_52931;
var statearr_52949_54088 = state_52931__$1;
(statearr_52949_54088[(2)] = null);

(statearr_52949_54088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (10))){
var inst_52922 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
var statearr_52950_54089 = state_52931__$1;
(statearr_52950_54089[(2)] = inst_52922);

(statearr_52950_54089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (8))){
var inst_52912 = (state_52931[(7)]);
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52931__$1,(11),out,inst_52912);
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
var statearr_52951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52951[(0)] = cljs$core$async$state_machine__51343__auto__);

(statearr_52951[(1)] = (1));

return statearr_52951;
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
}catch (e52952){var ex__51346__auto__ = e52952;
var statearr_52953_54096 = state_52931;
(statearr_52953_54096[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_52931[(4)]))){
var statearr_52954_54097 = state_52931;
(statearr_52954_54097[(1)] = cljs.core.first((state_52931[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54098 = state_52931;
state_52931 = G__54098;
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
var state__51400__auto__ = (function (){var statearr_52955 = f__51399__auto__();
(statearr_52955[(6)] = c__51398__auto___54071);

return statearr_52955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52957 = (function (f,ch,meta52958){
this.f = f;
this.ch = ch;
this.meta52958 = meta52958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52959,meta52958__$1){
var self__ = this;
var _52959__$1 = this;
return (new cljs.core.async.t_cljs$core$async52957(self__.f,self__.ch,meta52958__$1));
}));

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52959){
var self__ = this;
var _52959__$1 = this;
return self__.meta52958;
}));

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52961 = (function (f,ch,meta52958,_,fn1,meta52962){
this.f = f;
this.ch = ch;
this.meta52958 = meta52958;
this._ = _;
this.fn1 = fn1;
this.meta52962 = meta52962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52963,meta52962__$1){
var self__ = this;
var _52963__$1 = this;
return (new cljs.core.async.t_cljs$core$async52961(self__.f,self__.ch,self__.meta52958,self__._,self__.fn1,meta52962__$1));
}));

(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52963){
var self__ = this;
var _52963__$1 = this;
return self__.meta52962;
}));

(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52956_SHARP_){
var G__52964 = (((p1__52956_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52956_SHARP_) : self__.f.call(null,p1__52956_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52964) : f1.call(null,G__52964));
});
}));

(cljs.core.async.t_cljs$core$async52961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52958","meta52958",-1042505041,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52957","cljs.core.async/t_cljs$core$async52957",1672596964,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52962","meta52962",-735571459,null)], null);
}));

(cljs.core.async.t_cljs$core$async52961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52961");

(cljs.core.async.t_cljs$core$async52961.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52961.
 */
cljs.core.async.__GT_t_cljs$core$async52961 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52961(f__$1,ch__$1,meta52958__$1,___$2,fn1__$1,meta52962){
return (new cljs.core.async.t_cljs$core$async52961(f__$1,ch__$1,meta52958__$1,___$2,fn1__$1,meta52962));
});

}

return (new cljs.core.async.t_cljs$core$async52961(self__.f,self__.ch,self__.meta52958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52966 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52966) : self__.f.call(null,G__52966));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52958","meta52958",-1042505041,null)], null);
}));

(cljs.core.async.t_cljs$core$async52957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52957");

(cljs.core.async.t_cljs$core$async52957.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52957.
 */
cljs.core.async.__GT_t_cljs$core$async52957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52957(f__$1,ch__$1,meta52958){
return (new cljs.core.async.t_cljs$core$async52957(f__$1,ch__$1,meta52958));
});

}

return (new cljs.core.async.t_cljs$core$async52957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52968 = (function (f,ch,meta52969){
this.f = f;
this.ch = ch;
this.meta52969 = meta52969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52970,meta52969__$1){
var self__ = this;
var _52970__$1 = this;
return (new cljs.core.async.t_cljs$core$async52968(self__.f,self__.ch,meta52969__$1));
}));

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52970){
var self__ = this;
var _52970__$1 = this;
return self__.meta52969;
}));

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52969","meta52969",-1963123672,null)], null);
}));

(cljs.core.async.t_cljs$core$async52968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52968");

(cljs.core.async.t_cljs$core$async52968.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52968.
 */
cljs.core.async.__GT_t_cljs$core$async52968 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52968(f__$1,ch__$1,meta52969){
return (new cljs.core.async.t_cljs$core$async52968(f__$1,ch__$1,meta52969));
});

}

return (new cljs.core.async.t_cljs$core$async52968(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52975 = (function (p,ch,meta52976){
this.p = p;
this.ch = ch;
this.meta52976 = meta52976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52977,meta52976__$1){
var self__ = this;
var _52977__$1 = this;
return (new cljs.core.async.t_cljs$core$async52975(self__.p,self__.ch,meta52976__$1));
}));

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52977){
var self__ = this;
var _52977__$1 = this;
return self__.meta52976;
}));

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52976","meta52976",912684277,null)], null);
}));

(cljs.core.async.t_cljs$core$async52975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52975");

(cljs.core.async.t_cljs$core$async52975.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async52975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52975.
 */
cljs.core.async.__GT_t_cljs$core$async52975 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52975(p__$1,ch__$1,meta52976){
return (new cljs.core.async.t_cljs$core$async52975(p__$1,ch__$1,meta52976));
});

}

return (new cljs.core.async.t_cljs$core$async52975(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51398__auto___54139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_53025){
var state_val_53026 = (state_53025[(1)]);
if((state_val_53026 === (7))){
var inst_53021 = (state_53025[(2)]);
var state_53025__$1 = state_53025;
var statearr_53027_54141 = state_53025__$1;
(statearr_53027_54141[(2)] = inst_53021);

(statearr_53027_54141[(1)] = (3));


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
var statearr_53030_54148 = state_53025__$1;
(statearr_53030_54148[(1)] = (5));

} else {
var statearr_53031_54150 = state_53025__$1;
(statearr_53031_54150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (6))){
var inst_53007 = (state_53025[(7)]);
var inst_53012 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53007) : p.call(null,inst_53007));
var state_53025__$1 = state_53025;
if(cljs.core.truth_(inst_53012)){
var statearr_53032_54151 = state_53025__$1;
(statearr_53032_54151[(1)] = (8));

} else {
var statearr_53033_54153 = state_53025__$1;
(statearr_53033_54153[(1)] = (9));

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
var statearr_53036_54157 = state_53025__$1;
(statearr_53036_54157[(2)] = inst_53010);

(statearr_53036_54157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53026 === (10))){
var inst_53018 = (state_53025[(2)]);
var state_53025__$1 = (function (){var statearr_53037 = state_53025;
(statearr_53037[(8)] = inst_53018);

return statearr_53037;
})();
var statearr_53038_54158 = state_53025__$1;
(statearr_53038_54158[(2)] = null);

(statearr_53038_54158[(1)] = (2));


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
var statearr_53041_54160 = state_53025;
(statearr_53041_54160[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53025[(4)]))){
var statearr_53042_54161 = state_53025;
(statearr_53042_54161[(1)] = cljs.core.first((state_53025[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54162 = state_53025;
state_53025 = G__54162;
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
var state__51400__auto__ = (function (){var statearr_53043 = f__51399__auto__();
(statearr_53043[(6)] = c__51398__auto___54139);

return statearr_53043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var c__51398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_53107){
var state_val_53108 = (state_53107[(1)]);
if((state_val_53108 === (7))){
var inst_53103 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53109_54165 = state_53107__$1;
(statearr_53109_54165[(2)] = inst_53103);

(statearr_53109_54165[(1)] = (3));


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
var statearr_53111_54171 = state_53107__$1;
(statearr_53111_54171[(2)] = null);

(statearr_53111_54171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (1))){
var state_53107__$1 = state_53107;
var statearr_53112_54172 = state_53107__$1;
(statearr_53112_54172[(2)] = null);

(statearr_53112_54172[(1)] = (2));


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
var statearr_53114_54173 = state_53107__$1;
(statearr_53114_54173[(1)] = (5));

} else {
var statearr_53115_54174 = state_53107__$1;
(statearr_53115_54174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (15))){
var state_53107__$1 = state_53107;
var statearr_53119_54175 = state_53107__$1;
(statearr_53119_54175[(2)] = null);

(statearr_53119_54175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (21))){
var state_53107__$1 = state_53107;
var statearr_53120_54177 = state_53107__$1;
(statearr_53120_54177[(2)] = null);

(statearr_53120_54177[(1)] = (23));


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
var statearr_53122_54178 = state_53107__$1;
(statearr_53122_54178[(2)] = null);

(statearr_53122_54178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (22))){
var state_53107__$1 = state_53107;
var statearr_53123_54179 = state_53107__$1;
(statearr_53123_54179[(2)] = null);

(statearr_53123_54179[(1)] = (2));


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
var statearr_53125_54183 = state_53107__$1;
(statearr_53125_54183[(2)] = null);

(statearr_53125_54183[(1)] = (8));


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
var statearr_53127_54184 = state_53107__$1;
(statearr_53127_54184[(2)] = null);

(statearr_53127_54184[(1)] = (8));


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
var statearr_53128_54187 = state_53107__$1;
(statearr_53128_54187[(2)] = inst_53093);

(statearr_53128_54187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (2))){
var state_53107__$1 = state_53107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53107__$1,(4),in$);
} else {
if((state_val_53108 === (23))){
var inst_53101 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53129_54190 = state_53107__$1;
(statearr_53129_54190[(2)] = inst_53101);

(statearr_53129_54190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (19))){
var inst_53088 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53130_54191 = state_53107__$1;
(statearr_53130_54191[(2)] = inst_53088);

(statearr_53130_54191[(1)] = (16));


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
var statearr_53132_54192 = state_53107__$1;
(statearr_53132_54192[(1)] = (14));

} else {
var statearr_53133_54193 = state_53107__$1;
(statearr_53133_54193[(1)] = (15));

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
var statearr_53135_54194 = state_53107__$1;
(statearr_53135_54194[(1)] = (21));

} else {
var statearr_53136_54195 = state_53107__$1;
(statearr_53136_54195[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (5))){
var inst_53051 = cljs.core.async.close_BANG_(out);
var state_53107__$1 = state_53107;
var statearr_53137_54196 = state_53107__$1;
(statearr_53137_54196[(2)] = inst_53051);

(statearr_53137_54196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (14))){
var inst_53073 = (state_53107[(7)]);
var inst_53075 = cljs.core.chunked_seq_QMARK_(inst_53073);
var state_53107__$1 = state_53107;
if(inst_53075){
var statearr_53138_54197 = state_53107__$1;
(statearr_53138_54197[(1)] = (17));

} else {
var statearr_53139_54198 = state_53107__$1;
(statearr_53139_54198[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53108 === (16))){
var inst_53091 = (state_53107[(2)]);
var state_53107__$1 = state_53107;
var statearr_53140_54199 = state_53107__$1;
(statearr_53140_54199[(2)] = inst_53091);

(statearr_53140_54199[(1)] = (12));


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
var statearr_53141_54204 = state_53107__$1;
(statearr_53141_54204[(1)] = (10));

} else {
var statearr_53142_54205 = state_53107__$1;
(statearr_53142_54205[(1)] = (11));

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
var statearr_53145_54206 = state_53107;
(statearr_53145_54206[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53107[(4)]))){
var statearr_53146_54208 = state_53107;
(statearr_53146_54208[(1)] = cljs.core.first((state_53107[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54210 = state_53107;
state_53107 = G__54210;
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
var state__51400__auto__ = (function (){var statearr_53147 = f__51399__auto__();
(statearr_53147[(6)] = c__51398__auto__);

return statearr_53147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));

return c__51398__auto__;
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
var c__51398__auto___54218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_53177){
var state_val_53178 = (state_53177[(1)]);
if((state_val_53178 === (7))){
var inst_53172 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53179_54220 = state_53177__$1;
(statearr_53179_54220[(2)] = inst_53172);

(statearr_53179_54220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (1))){
var inst_53154 = null;
var state_53177__$1 = (function (){var statearr_53180 = state_53177;
(statearr_53180[(7)] = inst_53154);

return statearr_53180;
})();
var statearr_53181_54221 = state_53177__$1;
(statearr_53181_54221[(2)] = null);

(statearr_53181_54221[(1)] = (2));


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
var statearr_53183_54223 = state_53177__$1;
(statearr_53183_54223[(1)] = (5));

} else {
var statearr_53184_54224 = state_53177__$1;
(statearr_53184_54224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (6))){
var state_53177__$1 = state_53177;
var statearr_53185_54225 = state_53177__$1;
(statearr_53185_54225[(2)] = null);

(statearr_53185_54225[(1)] = (7));


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
var statearr_53188_54227 = state_53177__$1;
(statearr_53188_54227[(2)] = null);

(statearr_53188_54227[(1)] = (2));


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
var statearr_53190_54228 = state_53177__$1;
(statearr_53190_54228[(1)] = (8));

} else {
var statearr_53191_54229 = state_53177__$1;
(statearr_53191_54229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (10))){
var inst_53169 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53192_54230 = state_53177__$1;
(statearr_53192_54230[(2)] = inst_53169);

(statearr_53192_54230[(1)] = (7));


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
var statearr_53194_54232 = state_53177__$1;
(statearr_53194_54232[(2)] = null);

(statearr_53194_54232[(1)] = (2));


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
var statearr_53197_54233 = state_53177;
(statearr_53197_54233[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53177[(4)]))){
var statearr_53198_54234 = state_53177;
(statearr_53198_54234[(1)] = cljs.core.first((state_53177[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54235 = state_53177;
state_53177 = G__54235;
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
var state__51400__auto__ = (function (){var statearr_53199 = f__51399__auto__();
(statearr_53199[(6)] = c__51398__auto___54218);

return statearr_53199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var c__51398__auto___54240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_53239){
var state_val_53240 = (state_53239[(1)]);
if((state_val_53240 === (7))){
var inst_53235 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53241_54241 = state_53239__$1;
(statearr_53241_54241[(2)] = inst_53235);

(statearr_53241_54241[(1)] = (3));


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
var statearr_53243_54242 = state_53239__$1;
(statearr_53243_54242[(2)] = null);

(statearr_53243_54242[(1)] = (2));


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
var statearr_53245_54246 = state_53239__$1;
(statearr_53245_54246[(1)] = (5));

} else {
var statearr_53246_54247 = state_53239__$1;
(statearr_53246_54247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (15))){
var inst_53229 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53247_54248 = state_53239__$1;
(statearr_53247_54248[(2)] = inst_53229);

(statearr_53247_54248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (13))){
var state_53239__$1 = state_53239;
var statearr_53248_54249 = state_53239__$1;
(statearr_53248_54249[(2)] = null);

(statearr_53248_54249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (6))){
var inst_53204 = (state_53239[(7)]);
var inst_53225 = (inst_53204 > (0));
var state_53239__$1 = state_53239;
if(cljs.core.truth_(inst_53225)){
var statearr_53249_54250 = state_53239__$1;
(statearr_53249_54250[(1)] = (12));

} else {
var statearr_53250_54251 = state_53239__$1;
(statearr_53250_54251[(1)] = (13));

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
var statearr_53252_54255 = state_53239__$1;
(statearr_53252_54255[(2)] = null);

(statearr_53252_54255[(1)] = (2));


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
var statearr_53254_54256 = state_53239__$1;
(statearr_53254_54256[(1)] = (8));

} else {
var statearr_53255_54257 = state_53239__$1;
(statearr_53255_54257[(1)] = (9));

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
var statearr_53258_54258 = state_53239__$1;
(statearr_53258_54258[(2)] = inst_53233);

(statearr_53258_54258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (10))){
var inst_53223 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53259_54261 = state_53239__$1;
(statearr_53259_54261[(2)] = inst_53223);

(statearr_53259_54261[(1)] = (7));


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
var statearr_53261_54262 = state_53239__$1;
(statearr_53261_54262[(2)] = null);

(statearr_53261_54262[(1)] = (2));


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
var statearr_53264_54264 = state_53239;
(statearr_53264_54264[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53239[(4)]))){
var statearr_53265_54266 = state_53239;
(statearr_53265_54266[(1)] = cljs.core.first((state_53239[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54267 = state_53239;
state_53239 = G__54267;
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
var state__51400__auto__ = (function (){var statearr_53266 = f__51399__auto__();
(statearr_53266[(6)] = c__51398__auto___54240);

return statearr_53266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
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
var c__51398__auto___54269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51399__auto__ = (function (){var switch__51342__auto__ = (function (state_53313){
var state_val_53314 = (state_53313[(1)]);
if((state_val_53314 === (7))){
var inst_53309 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53315_54270 = state_53313__$1;
(statearr_53315_54270[(2)] = inst_53309);

(statearr_53315_54270[(1)] = (3));


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
var statearr_53317_54274 = state_53313__$1;
(statearr_53317_54274[(2)] = null);

(statearr_53317_54274[(1)] = (2));


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
var statearr_53319_54275 = state_53313__$1;
(statearr_53319_54275[(1)] = (5));

} else {
var statearr_53320_54276 = state_53313__$1;
(statearr_53320_54276[(1)] = (6));

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
var statearr_53321_54277 = state_53313__$1;
(statearr_53321_54277[(2)] = inst_53296);

(statearr_53321_54277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (6))){
var inst_53270 = (state_53313[(8)]);
var inst_53298 = inst_53270.length;
var inst_53299 = (inst_53298 > (0));
var state_53313__$1 = state_53313;
if(cljs.core.truth_(inst_53299)){
var statearr_53322_54279 = state_53313__$1;
(statearr_53322_54279[(1)] = (15));

} else {
var statearr_53323_54280 = state_53313__$1;
(statearr_53323_54280[(1)] = (16));

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
var statearr_53325_54281 = state_53313__$1;
(statearr_53325_54281[(2)] = inst_53307);

(statearr_53325_54281[(1)] = (7));


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
var statearr_53328_54283 = state_53313__$1;
(statearr_53328_54283[(2)] = null);

(statearr_53328_54283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (9))){
var inst_53271 = (state_53313[(7)]);
var inst_53282 = cljs.core.keyword_identical_QMARK_(inst_53271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_53313__$1 = state_53313;
var statearr_53329_54284 = state_53313__$1;
(statearr_53329_54284[(2)] = inst_53282);

(statearr_53329_54284[(1)] = (10));


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
var statearr_53331_54285 = state_53313__$1;
(statearr_53331_54285[(1)] = (8));

} else {
var statearr_53332_54286 = state_53313__$1;
(statearr_53332_54286[(1)] = (9));

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
var statearr_53334_54289 = state_53313__$1;
(statearr_53334_54289[(2)] = null);

(statearr_53334_54289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (16))){
var state_53313__$1 = state_53313;
var statearr_53335_54293 = state_53313__$1;
(statearr_53335_54293[(2)] = null);

(statearr_53335_54293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (10))){
var inst_53284 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
if(cljs.core.truth_(inst_53284)){
var statearr_53336_54294 = state_53313__$1;
(statearr_53336_54294[(1)] = (11));

} else {
var statearr_53337_54295 = state_53313__$1;
(statearr_53337_54295[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (18))){
var inst_53303 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53338_54296 = state_53313__$1;
(statearr_53338_54296[(2)] = inst_53303);

(statearr_53338_54296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (8))){
var inst_53279 = (state_53313[(13)]);
var state_53313__$1 = state_53313;
var statearr_53339_54297 = state_53313__$1;
(statearr_53339_54297[(2)] = inst_53279);

(statearr_53339_54297[(1)] = (10));


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
var statearr_53342_54300 = state_53313;
(statearr_53342_54300[(2)] = ex__51346__auto__);


if(cljs.core.seq((state_53313[(4)]))){
var statearr_53343_54301 = state_53313;
(statearr_53343_54301[(1)] = cljs.core.first((state_53313[(4)])));

} else {
throw ex__51346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54303 = state_53313;
state_53313 = G__54303;
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
var state__51400__auto__ = (function (){var statearr_53344 = f__51399__auto__();
(statearr_53344[(6)] = c__51398__auto___54269);

return statearr_53344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51400__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
