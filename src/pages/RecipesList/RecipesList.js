import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'

const RecipesList = () => {

  const { getAllRecipes } = useFetchRecipes()

  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      <Text>Recipes List</Text>
    </>
  )
}

export default RecipesList