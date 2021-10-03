import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RecipesStack from './RecipesStack'

import TasksList from '../pages/Tasks/TasksList'

const Tabs = createBottomTabNavigator()

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }} >
        <Tabs.Screen name="Recettes" component={RecipesStack} />
        <Tabs.Screen name="Liste" component={TasksList} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter