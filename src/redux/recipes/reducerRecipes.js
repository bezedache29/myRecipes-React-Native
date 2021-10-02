import { GET_ALL } from "./type"

const initialState = {
  list: [],
  selectedRecipe: {}
}

const recipesList = (state = initialState, action) => {
  switch(action.type) {

    case GET_ALL:
      return {
        selectedRecipe: state.selectedRecipe,
        list: [...state.list, action.payload.recipes]
      }

    default:
      return state
  }
}

export default recipesList