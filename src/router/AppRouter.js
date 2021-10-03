import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RecipesStack from './RecipesStack'

import TasksList from '../pages/Tasks/TasksList'
import { Icon } from 'react-native-vector-icons/icon'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator()

const AppRouter = () => {
  return (
    <NavigationContainer>
      {/* <Tabs.Navigator screenOptions={{ headerShown: false }} > */}
      <Tabs.Navigator screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Recettes') {
              iconName = focused
                ? 'book-outline'
                : 'book-outline';
            } else if (route.name === 'Liste') {
              iconName = focused ? 'book-outline' : 'book-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }),
        { headerShown: false }
      } >
        <Tabs.Screen name="Recettes" component={RecipesStack} />
        <Tabs.Screen name="Liste" component={TasksList} />
        <Tabs.Screen name="Profile" component={TasksList} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter