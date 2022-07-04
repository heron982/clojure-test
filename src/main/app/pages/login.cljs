(ns app.pages.login
    (:require
      [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
      [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]
      [taoensso.timbre :as log]
      [com.fulcrologic.fulcro.dom :as dom]))


(defsc LoginPage [this props]
    {:ident (fn [] [:component/id ::settings])
        :query [:settings]
        :initial-state {:settings "stuffs"}
        :route-segment ["loginpage"]
        :will-enter (fn [app route-params]
                        (log/info "Will enter settings with route params" route-params)
                        (dr/route-immediate [:component/id ::settings]))
        :will-leave (fn [this props]
                        (js/console.log (comp/get-ident this) "props" props)
                        true)}
    (dom/div "LoginPage"))