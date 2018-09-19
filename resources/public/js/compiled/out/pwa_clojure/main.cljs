(ns pwa-clojure.main
  (:require [pwa-clojure.navigation :as navigation]
            [pwa-clojure.components.numpad :as numpad]))

(defn- get-current-path []
  js/window.location.pathname)

(defn- make-progressive! []
  (when js/navigator.serviceWorker
    (.register js/navigator.serviceWorker "/service-worker.js")))

(defonce app-loaded (atom false))
(defn load-app []
  (when-not @app-loaded
    (reset! app-loaded true)
    (numpad/render-numpad)))

(defn ^:export start-cljs-app []
  (navigation/move-to-page (get-current-path) load-app)
  (make-progressive!))

(start-cljs-app)
