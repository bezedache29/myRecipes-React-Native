import axios from "axios"
import { useDispatch } from "react-redux"
import { loadAllRecipes, loadOneRecipe } from "../../redux/recipes/actionRecipes"

// Custom Hooks pour récupérer toute les recettes
// const { getAllRecipes } = useFetchRecipes()

// Les customs Hooks sont des fonctions qui retournent un certains nombre de propriétés

const API_URL = "https://api.spoonacular.com/recipes"
const API_KEY = "5f573a11810f46c6b85edf648cd715ba"
const MAX_PER_PAGE = 30

export const useFetchRecipes = () => {

  const dispatch = useDispatch()

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`${API_URL}/complexSearch`, {
        params: {
          apiKey: API_KEY,
          number: MAX_PER_PAGE
        }
      })
      dispatch(loadAllRecipes(response.data.results))

    } catch (error) {
      console.error('Error in getAllRecipes', error)
    }
  }

  const getRecipe = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}/information`, {
        params: {
          apiKey: API_KEY
        }
      })
      dispatch(loadOneRecipe(response.data))

    } catch (error) {
      console.error('Error in getRecipe', error)
    }
  }

  return {
    getAllRecipes,
    getRecipe
  }
}