// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1243__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1244__i = 0, G__1244__a = new Array(arguments.length -  0);
while (G__1244__i < G__1244__a.length) {G__1244__a[G__1244__i] = arguments[G__1244__i + 0]; ++G__1244__i;}
  args = new cljs.core.IndexedSeq(G__1244__a,0,null);
} 
return G__1243__delegate.call(this,args);};
G__1243.cljs$lang$maxFixedArity = 0;
G__1243.cljs$lang$applyTo = (function (arglist__1245){
var args = cljs.core.seq(arglist__1245);
return G__1243__delegate(args);
});
G__1243.cljs$core$IFn$_invoke$arity$variadic = G__1243__delegate;
return G__1243;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1246__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1247__i = 0, G__1247__a = new Array(arguments.length -  0);
while (G__1247__i < G__1247__a.length) {G__1247__a[G__1247__i] = arguments[G__1247__i + 0]; ++G__1247__i;}
  args = new cljs.core.IndexedSeq(G__1247__a,0,null);
} 
return G__1246__delegate.call(this,args);};
G__1246.cljs$lang$maxFixedArity = 0;
G__1246.cljs$lang$applyTo = (function (arglist__1248){
var args = cljs.core.seq(arglist__1248);
return G__1246__delegate(args);
});
G__1246.cljs$core$IFn$_invoke$arity$variadic = G__1246__delegate;
return G__1246;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
