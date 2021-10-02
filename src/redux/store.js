import { combineReducers, createStore } from "redux"
import recipesList from "./recipes/reducerRecipes"

const rootReducers = combineReducers({
  recipes: recipesList
})

export const store = createStore(rootReducers)