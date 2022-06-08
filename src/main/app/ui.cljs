(ns app.ui
  (:require 
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defsc HelloComponent
  [this props]
  (dom/div {:className "a" :id "id" :style {:color "red"}}
           (dom/p "Hello World")))

(defsc PropPerson
  [this {:person/keys [name age]}]
  (dom/div 
    (dom/p "Test: " name)
    (dom/p "Age: " age)))

(def ui-hello (comp/factory HelloComponent))
(def ui-person (comp/factory PropPerson))

(defsc Root [this props]
  (dom/div "TODO" 
           (ui-person {:person/name "Joe" :person/age 22})))
