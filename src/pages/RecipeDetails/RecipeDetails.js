import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes'
import { getRecipeStore } from '../../redux/recipes/selectorsRecipes'
import RecipeDetailsTile from './components/RecipeDetailsTile'

const RecipeDetails = ({ route, navigation }) => {

  const { id } = route.params
  
  const { getRecipe } = useFetchRecipes()

  const recipe = useSelector(getRecipeStore)

  useEffect(() => {
    getRecipe(id)
  }, [])

  const renderItem = ({item}) => {
    return <RecipeDetailsTile item={item} />
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <Image source={{uri: recipe.image}} style={styles.image}/>
          <Text style={styles.title}>{recipe.title}</Text>
        </>
      )}
      data={recipe.extendedIngredients}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 200,
    margin: 20,
    borderRadius: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  list: {
    marginTop: 20
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  ingredientName: {
    marginLeft: 50,
  },
  btnAdd: {
    marginRight: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

export default RecipeDetails