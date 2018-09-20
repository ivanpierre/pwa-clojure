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

  :clean-targets ^{:protect false} [:target-path :compile-path
                                    "resources/public/service-worker.js"
                                    "resources/public/js"]

  :main pwa-clojure.main

  :figwheel {:http-server-root "public" ;; this will be in resources/
             :server-port 5000          ;; default is 3449
             :server-ip   "0.0.0.0"     ;; default is "localhost"

     ;; CSS reloading (optional)
     ;; :css-dirs has no default value 
     ;; if :css-dirs is set figwheel will detect css file changes and
     ;; send them to the browser
             :css-dirs ["resources/public/css"]

     ;; Server Ring Handler (optional)
     ;; if you want to embed a ring handler into the figwheel http-kit
     ;; server
     ;; :ring-handler example.server/handler

     ;; Clojure Macro reloading
     ;; disable clj file reloading
     ; :reload-clj-files false
     ;; or specify which suffixes will cause the reloading
     ; :reload-clj-files {:clj true :cljc false}

     ;; To be able to open files in your editor from the heads up display
     ;; you will need to put a script on your path.
     ;; that script will have to take a file path, a line number and a column
     ;; ie. in  ~/bin/myfile-opener
     ;; #! /bin/sh
     ;; emacsclient -n +$2:$3 $1 
     ;;
             :open-file-command "myfile-opener"

     ;; if you want to disable the REPL
     ;; :repl false

     ;; to configure a different figwheel logfile path
     ;; :server-logfile "tmp/logs/figwheel-logfile.log" 

     ;; Start an nREPL server into the running figwheel process
             :nrepl-port 6000

     ;; Load CIDER, refactor-nrepl and piggieback middleware
             :nrepl-middleware ["cider.nrepl/cider-middleware"
                                "refactor-nrepl.middleware/wrap-refactor"
                                "cemerick.piggieback/wrap-cljs-repl"]}

     ;; if you need to watch files with polling instead of FS events
     ;; :hawk-options {:watcher :polling}     
     ;; ^ this can be useful in Docker environments

     ;; if your project.clj contains conflicting builds,
     ;; you can choose to only load the builds specified
     ;; on the command line
     ;; :load-all-builds false ; default is true


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
