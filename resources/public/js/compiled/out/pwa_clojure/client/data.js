// Compiled by ClojureScript 1.10.339 {}
goog.provide('pwa_clojure.client.data');
goog.require('cljs.core');
goog.require('pwa_clojure.routes');
goog.require('bidi.bidi');
goog.require('ajax.core');
pwa_clojure.client.data.data_cache_name = "pwa-clojure-data";
pwa_clojure.client.data.fallback_get = (function pwa_clojure$client$data$fallback_get(route,callback){
return ajax.core.GET.call(null,route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback], null));
});
pwa_clojure.client.data.response__GT_clj = (function pwa_clojure$client$data$response__GT_clj(response){
return response.json().then((function (p1__1875_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__1875_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));
});
pwa_clojure.client.data.cache_response = (function pwa_clojure$client$data$cache_response(route,response){
console.log("Caching Data",route);

var clone = response.clone();
return caches.open(pwa_clojure.client.data.data_cache_name).then(((function (clone){
return (function (p1__1876_SHARP_){
return p1__1876_SHARP_.put(route,clone);
});})(clone))
);
});
pwa_clojure.client.data.cached_get = (function pwa_clojure$client$data$cached_get(route){
return window.caches.match(route).then((function (response){
if(cljs.core.truth_(response)){
return pwa_clojure.client.data.response__GT_clj.call(null,response);
} else {
return fetch(route).then((function (response__$1){
pwa_clojure.client.data.cache_response.call(null,route,response__$1);

return pwa_clojure.client.data.response__GT_clj.call(null,response__$1);
}));
}
}));
});
pwa_clojure.client.data.load_data = (function pwa_clojure$client$data$load_data(handler,args,callback){
var route = cljs.core.apply.call(null,bidi.bidi.path_for,pwa_clojure.routes.api_routes,handler,cljs.core.flatten.call(null,cljs.core.vec.call(null,args)));
if(cljs.core.truth_((function (){var and__3938__auto__ = window.caches;
if(cljs.core.truth_(and__3938__auto__)){
return fetch;
} else {
return and__3938__auto__;
}
})())){
return pwa_clojure.client.data.cached_get.call(null,route).then(callback);
} else {
return pwa_clojure.client.data.fallback_get.call(null,route,callback);
}
});
pwa_clojure.client.data.prefetch = (function pwa_clojure$client$data$prefetch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___1880 = arguments.length;
var i__4532__auto___1881 = (0);
while(true){
if((i__4532__auto___1881 < len__4531__auto___1880)){
args__4534__auto__.push((arguments[i__4532__auto___1881]));

var G__1882 = (i__4532__auto___1881 + (1));
i__4532__auto___1881 = G__1882;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pwa_clojure.client.data.prefetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pwa_clojure.client.data.prefetch.cljs$core$IFn$_invoke$arity$variadic = (function (handler,args){
var route = cljs.core.apply.call(null,bidi.bidi.path_for,pwa_clojure.routes.api_routes,handler,args);
if(cljs.core.truth_(window.caches)){
return window.caches.open(pwa_clojure.client.data.data_cache_name).then(((function (route){
return (function (p1__1877_SHARP_){
return p1__1877_SHARP_.add(route);
});})(route))
);
} else {
return null;
}
});

pwa_clojure.client.data.prefetch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pwa_clojure.client.data.prefetch.cljs$lang$applyTo = (function (seq1878){
var G__1879 = cljs.core.first.call(null,seq1878);
var seq1878__$1 = cljs.core.next.call(null,seq1878);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1879,seq1878__$1);
});


//# sourceMappingURL=data.js.map
