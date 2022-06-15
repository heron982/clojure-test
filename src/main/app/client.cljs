(ns app.client
    (:require
      [app.application :refer [app]]
      [app.ui :as ui]
      [com.fulcrologic.fulcro.components :as comp]
      [com.fulcrologic.fulcro.application :as app]))

(defn ^:export init
      []
      (app/mount! app ui/Root "app")
      (js/console.log "Loaded"))

(defn ^:export refresh
  []
  (app/mount! app ui/Root "app")
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot Reload"))

