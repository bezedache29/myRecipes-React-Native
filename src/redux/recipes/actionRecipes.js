import { GET_ALL, GET_ONE } from './type'

export const loadAllRecipes = (recipes) => {
  return {
    type: GET_ALL,
    payload: {
      recipes
    }
  }
}

export const loadOneRecipe = (recipe) => {
  return {
    type: GET_ONE,
    payload: {
      recipe
    }
  }
}