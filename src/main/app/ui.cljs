(ns app.ui
    (:require 
        [com.fulcrologic.fulcro.components :as comp :refer [defsc factory]]
        [com.fulcrologic.fulcro.dom :as dom :refer [div p]]))

(defsc Person [this {:person/keys [name age]}]
  (div 
    (p "Name: " name)
    (p "Age:" age)))

(def ui-person (factory Person))

(defsc Root [this props]
  (div {:className "app" :id "app" :style {:color "red"}} "Hello World"
    (ui-person {:person/name "Joe" :person/age 22})))