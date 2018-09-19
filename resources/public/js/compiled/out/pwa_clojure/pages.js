// Compiled by ClojureScript 1.10.339 {}
goog.provide('pwa_clojure.pages');
goog.require('cljs.core');
goog.require('pwa_clojure.components');
pwa_clojure.pages.pages = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"home-page","home-page",1804156194),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-fn","data-fn",777152661),cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.PersistentArrayMap.EMPTY], null)], null)),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Var(function(){return pwa_clojure.components.home_component;},new cljs.core.Symbol("pwa-clojure.components","home-component","pwa-clojure.components/home-component",1317970007,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pwa-clojure.components","pwa-clojure.components",1996826995,null),new cljs.core.Symbol(null,"home-component","home-component",511117826,null),"D:\\pos\\pwa-clojure\\src-clj\\pwa_clojure\\components.cljc",21,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"characters","characters",1476664330,null)], null)], null)], null)),null,(cljs.core.truth_(pwa_clojure.components.home_component)?pwa_clojure.components.home_component.cljs$lang$test:null)])),new cljs.core.Keyword(null,"title-fn","title-fn",-1701019188),cljs.core.constantly.call(null,"Portable POS page :pages/home-page")], null)], null);
pwa_clojure.pages.data_requirements = (function pwa_clojure$pages$data_requirements(handler,params){
var data_fn = cljs.core.get_in.call(null,pwa_clojure.pages.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,new cljs.core.Keyword(null,"data-fn","data-fn",777152661)], null));
return data_fn.call(null,params);
});
pwa_clojure.pages.title = (function pwa_clojure$pages$title(handler,data){
var title_fn = cljs.core.get_in.call(null,pwa_clojure.pages.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,new cljs.core.Keyword(null,"title-fn","title-fn",-1701019188)], null));
return title_fn.call(null,data);
});
pwa_clojure.pages.pwa_component = (function pwa_clojure$pages$pwa_component(handler,data){
var component = cljs.core.get_in.call(null,pwa_clojure.pages.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,new cljs.core.Keyword(null,"component","component",1555936782)], null));
return component.call(null,data);
});

//# sourceMappingURL=pages.js.map
