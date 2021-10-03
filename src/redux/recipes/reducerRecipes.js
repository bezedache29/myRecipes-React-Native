import { GET_ALL, GET_ONE } from "./type"

const initialState = {
  list: [],
  selectedRecipe: {}
}

const recipesList = (state = initialState, action) => {
  switch(action.type) {

    case GET_ALL:
      return {
        ...state,
        selectedRecipe: state.selectedRecipe,
        list: action.payload.recipes
      }

    case GET_ONE:
      return {
        ...state,
        selectedRecipe: action.payload.recipe,
        list: state.list
      }

    default:
      return state
  }
}

export default recipesList