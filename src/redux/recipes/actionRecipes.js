import { GET_ALL } from './type'

export const loadAllRecipes = (recipes) => {
  return {
    type: GET_ALL,
    payload: {
      recipes
    }
  }
}