import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const RecipeDetails = ({ route, navigation }) => {

  const { id } = route.params
  console.log('ID', id)

  return (
    <View>
      <Text>Details</Text>
      <Text>id : {id}</Text>
      <TouchableOpacity onPress={() => { navigation.goBack()}}>
        <Text>Retour</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RecipeDetails