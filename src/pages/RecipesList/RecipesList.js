import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'
import { getRecipesList } from '../../redux/recipes/selectorsRecipes'
import RecipeTile from './components/RecipeTile'

const RecipesList = () => {

  const { getAllRecipes } = useFetchRecipes()

  const allRecipes = useSelector(getRecipesList)

  useEffect(() => {
    getAllRecipes()
  }, [])

  const renderItem = ({item}) => {
    return <RecipeTile item={item} />
  }

  return (
    <>
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  )
}

export default RecipesList