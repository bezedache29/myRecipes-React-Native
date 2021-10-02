import { GET_ALL } from "./type"

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

    default:
      return state
  }
}

export default recipesList