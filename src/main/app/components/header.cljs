(ns app.components.header
    (:require 
        [com.fulcrologic.fulcro.dom :as dom]
        [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
        [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]))

(defn HeaderComponent [this]
    (dom/div {:id "header"}
          (dom/button {:onClick #(dr/change-route this ["homepage"])} "Pagina principal")
          (dom/button {:onClick #(dr/change-route this ["loginpage"])} "Pagina de login")))

