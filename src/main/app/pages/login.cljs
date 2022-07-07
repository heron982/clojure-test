(ns app.pages.login
    (:require
      [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
      [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]
      [taoensso.timbre :as log]
      [com.fulcrologic.fulcro.dom :as dom]
      [com.fulcrologic.fulcro.mutations :as m]
      [com.fulcrologic.fulcro.algorithms.react-interop :as interop]))

(defn login [email senha]
  (js/console.log email senha))


(defsc LoginForm [this {:customer/keys [email senha] :as props} {:keys [injected-props] :as computed}]
  {:query         [:customer/email :customer/senha]
   :initial-state {:customer/email "" :customer/senha ""}
   :ident         (fn [] [:component/id ::ccform])}
  (let [stripe (comp/isoget injected-props "stripe")]
    (dom/form :.ui.form
      {:onSubmit (fn [e] (.preventDefault e (login email senha)))}
        (dom/label "Email: ")
        (dom/input {:value email
                    :onChange #(m/set-string! this :customer/email :event %)})
        (dom/label "Senha: ")
        (dom/input {:value senha 
                    :onChange #(m/set-string! this :customer/senha :event %)})
        (dom/input {:type "submit" 
                    :value "Logar"}))))

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
