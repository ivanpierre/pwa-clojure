// Compiled by ClojureScript 1.10.339 {}
goog.provide('pwa_clojure.navigation');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pwa_clojure.pages');
goog.require('pwa_clojure.routes');
goog.require('pwa_clojure.app_state');
goog.require('pwa_clojure.client.data');
pwa_clojure.navigation.move_to_page = (function pwa_clojure$navigation$move_to_page(var_args){
var G__1886 = arguments.length;
switch (G__1886) {
case 1:
return pwa_clojure.navigation.move_to_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pwa_clojure.navigation.move_to_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('pwa_clojure.navigation.move_to_page', pwa_clojure.navigation.move_to_page);

pwa_clojure.navigation.move_to_page.cljs$core$IFn$_invoke$arity$1 = (function (path){
return pwa_clojure.navigation.move_to_page.call(null,path,cljs.core.constantly.call(null,null));
});

pwa_clojure.navigation.move_to_page.cljs$core$IFn$_invoke$arity$2 = (function (path,callback){
var map__1887 = bidi.bidi.match_route.call(null,pwa_clojure.routes.pwa_routes,path);
var map__1887__$1 = ((((!((map__1887 == null)))?(((((map__1887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1887):map__1887);
var handler = cljs.core.get.call(null,map__1887__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__1887__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var vec__1888 = cljs.core.first.call(null,pwa_clojure.pages.data_requirements.call(null,handler,route_params));
var data_handler = cljs.core.nth.call(null,vec__1888,(0),null);
var data_args = cljs.core.nth.call(null,vec__1888,(1),null);
return pwa_clojure.client.data.load_data.call(null,data_handler,data_args,((function (map__1887,map__1887__$1,handler,route_params,vec__1888,data_handler,data_args){
return (function (data){
cljs.core.reset_BANG_.call(null,pwa_clojure.app_state.app_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"url","url",276297046),path,new cljs.core.Keyword(null,"title","title",636505583),pwa_clojure.pages.title.call(null,handler,data)], null));

return callback.call(null);
});})(map__1887,map__1887__$1,handler,route_params,vec__1888,data_handler,data_args))
);
});

pwa_clojure.navigation.move_to_page.cljs$lang$maxFixedArity = 2;

pwa_clojure.navigation.update_title = (function pwa_clojure$navigation$update_title(title){
return window.location.title = title;
});
pwa_clojure.navigation.replace_state = (function pwa_clojure$navigation$replace_state(url){
return window.history.replaceState(null,null,url);
});
pwa_clojure.navigation.push_state = (function pwa_clojure$navigation$push_state(url){
return window.history.pushState(null,null,url);
});
cljs.core.add_watch.call(null,pwa_clojure.app_state.app_state,new cljs.core.Keyword(null,"set-title-and-url","set-title-and-url",1606528165),(function (key,atom,old,new$){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new$))){
pwa_clojure.navigation.update_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new$));
} else {
}

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new$))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(old))){
return pwa_clojure.navigation.push_state.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new$));
} else {
return pwa_clojure.navigation.replace_state.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new$));
}
} else {
return null;
}
}));
window.onpopstate = (function (event){
return pwa_clojure.navigation.move_to_page.call(null,window.location.pathname);
});

//# sourceMappingURL=navigation.js.map
