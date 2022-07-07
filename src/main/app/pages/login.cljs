(ns app.pages.login
    (:require
      [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
      [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]
      [taoensso.timbre :as log]
      [com.fulcrologic.fulcro.dom :as dom]
      [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
      [com.fulcrologic.fulcro.algorithms.form-state :as fs]))

(defmutation submit-login [{:keys [email senha]}]
  (action [{:keys [state]}]
    (swap! state (fn [s] 
                   (-> s
                       (dissoc :root/login)
                       (fs/entity->pristine* [:login/email email :login/senha senha])))))
  (refresh [env] [:root/login]))


(defsc LoginForm [this {:customer/keys [email senha] :as props} {:keys [injected-props] :as computed}]
  {:query         [:customer/email :customer/senha fs/form-config-join]
   :form-fields   #{:customer/email :customer/senha}}
  (let [stripe (comp/isoget injected-props "stripe")]
    (dom/div :.ui.form
        (dom/label "Email: ")
        (dom/input {:value email
                    :onChange #(m/set-string! this :customer/email :event %)})
        (dom/label "Senha: ")
        (dom/input {:value senha 
                    :onChange #(m/set-string! this :customer/senha :event %)})
        (dom/button :.ui.button {:onClick #(comp/transact! this [(submit-login {:email email :senha senha})])} "Fazer Login"))))

(def ui-login-form (comp/factory LoginForm))

(defsc LoginPage [this props]
    {:ident (fn [] [:component/id ::settings])
        :query [:settings]
        :initial-state {:settings "stuffs"}
        :route-segment ["loginpage"]
        :will-enter (fn [app route-params]
                        (log/info "Pagina de login, com os seguintes parametros:" route-params)
                        (dr/route-immediate [:component/id ::settings]))
        :will-leave (fn [this props]
                        (js/console.log (comp/get-ident this) "props" props)
                        true)}
    (ui-login-form this props))
