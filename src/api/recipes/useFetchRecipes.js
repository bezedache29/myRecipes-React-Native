import axios from "axios"

// Custom Hooks pour récupérer toute les recettes
// const { getAllRecipes } = useFetchRecipes()

// Les customs Hooks sont des fonctions qui retournent un certains nombre de propriétés

const API_URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "5f573a11810f46c6b85edf648cd715ba"
const MAX_PER_PAGE = 30

export const useFetchRecipes = () => {

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: API_KEY,
          number: MAX_PER_PAGE
        }
      })
      console.log('response', response.data.results)

    } catch (error) {
      console.error('Error in getAllRecipes', error)
    }
  }

  return {
    getAllRecipes
  }
}