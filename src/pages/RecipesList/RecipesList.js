import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'
import { getRecipesList } from '../../redux/recipes/selectorsRecipes'
import RecipeTile from './components/RecipeTile'

const RecipesList = ({ navigation }) => {

  // Pagination
  const [page, setPage] = useState(0)

  // Hook perso
  const { getAllRecipes } = useFetchRecipes()

  const allRecipes = useSelector(getRecipesList)

  useEffect(() => {
    getAllRecipes(page)
  }, [page])

  const renderItem = ({item}) => {
    return <RecipeTile item={item} navigation={navigation} />
  }

  const onEndReached = () => {
    // Charger 30 nouvelles recettes
    setPage(currentPage => currentPage + 1)
  }

  return (
    <>
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // Permet de scroll infini
        onEndReached={onEndReached}
        // Permet de mettre un loader en bas de page
        ListFooterComponent={() => <View style={{ padding: 40 }}><ActivityIndicator /></View>}
      />
    </>
  )
}

export default RecipesList