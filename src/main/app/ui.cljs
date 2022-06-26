(ns app.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]
    [com.fulcrologic.fulcro.dom :as dom]
    [taoensso.timbre :as log]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.mutations :as m]
    [app.pages.home :refer [HomePage]]))

(defrouter TopRouter [this {:keys [current-state pending-path-segment]}]
  {:router-targets [HomePage]}
  (case current-state
    :pending (dom/div "Loading...")
    :failed (dom/div "Loading seems to have failed. Try another route.")
    (dom/div "Unknown route")))

(def ui-top-router (comp/factory TopRouter))
    
(defsc Root [this {:root/keys [router]}]
  {:query         [{:root/router (comp/get-query TopRouter)}]
    :initial-state {:root/router {}}}
  (dom/div
    (dom/button {:onClick #(dr/change-route this ["homepage"])} "Pagina principal")
    (ui-top-router router)))
    
