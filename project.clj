(defproject pwa-clojure "0.1.1-SNAPSHOT"
  :description "A simple example of to build a PWA app with clojurescript"

  :source-paths ["src-clj"]

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [bidi "2.1.4"]
                 [hiccup "1.0.5"]
                 [cheshire "5.8.0"]
                 [ring "1.7.0"]
                 [clj-http "3.9.1"]
                 [com.cemerick/url "0.1.1"]
                 [cljs-ajax "0.7.4"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.6"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-ring "0.8.7"]
            [lein-figwheel "0.5.16"]]

  :figwheel true

  :clean-targets ^{:protect false} [:target-path :compile-path
                                    "resources/public/service-worker.js"
                                    "resources/public/js"]

  :main pwa-clojure.main

  :cljsbuild
  {:builds {:dev
            {:source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/js/main.js"
                        :output-dir "resources/public/js/compiled/out"
                        :asset-path "js/compiled/out" ;; <--- relative URL of output-dir
                        :main pwa-clojure.main
                        :optimizations :none
                        :pretty-print true}}

            :prod
            {:source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/js/main.js"
                        :main pwa-clojure.main
                        :optimizations :advanced
                        :pretty-print false}}

            :worker
            {:source-paths ["src-svc" "src-cljs"]
             :compiler {:output-to "resources/public/service-worker.js"
                        :main pwa-clojure.service-worker
                        :optimizations :advanced
                        :pretty-print false}}}}

  :ring {:handler pwa-clojure.app/app
         :nrepl {:start? true}})
