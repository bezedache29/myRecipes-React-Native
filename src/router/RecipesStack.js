import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RecipesList from '../pages/RecipesList/RecipesList'
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails'

const Stack = createNativeStackNavigator()

const RecipesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipesList" component={RecipesList} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  )
}

export default RecipesStack