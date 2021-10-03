import { combineReducers, createStore } from "redux"
import recipesList from "./recipes/reducerRecipes"
import tasksListOnStore from "./tasks/reducerTasks"

const rootReducers = combineReducers({
  recipes: recipesList,
  tasks: tasksListOnStore
})

export const store = createStore(rootReducers)