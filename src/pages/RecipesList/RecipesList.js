import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'
import { getRecipesList } from '../../redux/recipes/selectorsRecipes'

const RecipesList = () => {

  const { getAllRecipes } = useFetchRecipes()

  const allRecipes = useSelector(getRecipesList)
  console.log(allRecipes)

  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      <Text>Recipes List</Text>
      {allRecipes.map(recipe => (
        <Text>{recipe.title}</Text>
      ))}
    </>
  )
}

export default RecipesList