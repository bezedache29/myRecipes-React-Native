import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from 'react-native'

import RecipesStack from './RecipesStack'

import TasksList from '../pages/Tasks/TasksList'
import Profil from '../pages/Profil/Profil'

const Tabs = createBottomTabNavigator()

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
        <Tabs.Screen 
          name="Recettes" 
          component={RecipesStack} 
          options={{ 
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/tabs/cook-book.png')}
                  resizeMode="contain"
                  style={{ 
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#028302' : '#748c94'
                  }}
                />
                <Text style={{ color: focused ? '#028302' : '#748c94', fontSize: 12 }}>
                  RECETTES
                </Text>
              </View>
            )
          }}
        />
        <Tabs.Screen 
          name="Liste" 
          component={TasksList} 
          options={{ 
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/tabs/list.png')}
                  resizeMode="contain"
                  style={{ 
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#028302' : '#748c94'
                  }}
                />
                <Text style={{ color: focused ? '#028302' : '#748c94', fontSize: 12 }}>
                  LISTE
                </Text>
              </View>
            )
          }}
        />
        <Tabs.Screen 
          name="Profile" 
          component={Profil} 
          options={{ 
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/tabs/user.png')}
                  resizeMode="contain"
                  style={{ 
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#028302' : '#748c94'
                  }}
                />
                <Text style={{ color: focused ? '#028302' : '#748c94', fontSize: 12 }}>
                  PROFILE
                </Text>
              </View>
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter