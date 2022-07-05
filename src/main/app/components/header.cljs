(ns app.components.header
    (:require 
        [com.fulcrologic.fulcro.dom :as dom]
        [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
        [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]))

(defn HeaderComponent [this props]
    (dom/div {:style {:background-color "red" :width "100%" :height "75px"}}
          (dom/button {:onClick #(dr/change-route this ["homepage"])} "Pagina principal")
          (dom/button {:onClick #(dr/change-route this ["loginpage"])} "Pagina de login")))

