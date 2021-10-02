import { axios } from "axios"
import {API_URL, API_KEY} from "@env"

// Custom Hooks pour récupérer toute les recettes
// const { getAllRecipes } = useFetchRecipes()

// Les customs Hooks sont des fonctions qui retournent un certains nombre de propriétés


const MAX_RESULTS = 30

export const useFetchRecipes = () => {

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(API_URL, {
        apiKey: API_KEY,
        number: MAX_RESULTS
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