(ns pwa-clojure.components.numpad
  (:require [reagent.core :as r]))

(defn numpad [first-line first-col]
  [:div#numpad
   (first-line)
   [:div#tdel "EFF"]

   (first-col)

   [:div#t1 "1"]
   [:div#t2 "2"]
   [:div#t3 "3"]

   [:div#t4 "4"]
   [:div#t5 "5"]
   [:div#t6 "6"]

   [:div#t7 "7"]
   [:div#t8 "8"]
   [:div#t9 "9"]

   [:div#t0 "0"]
   [:div#tpoint "."]
   [:div#tenter "ENT"]])

(defn first-line-a []
  [:div#tl1 "tl1"]
  [:div#tl2 "tl2"]
  [:div#tl3 "tl3"]

  [:div#tr1 "tr1"]
  [:div#tr2 "tr2"])

(defn first-col-a []
  [:div#tc1 "tc1"]
  [:div#tc2 "tc2"]
  [:div#tc3 "tc3"]
  [:div#tc4 "tc4"]
  [:div#tc5 "tc5"])

(defn render-numpad []
  (r/render [numpad first-line-a first-col-a] (.-body js/document)))

