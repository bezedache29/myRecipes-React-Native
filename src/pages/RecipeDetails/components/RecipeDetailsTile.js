import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const RecipeDetailsTile = ({ item }) => {
  return (
    <View style={styles.ingredient}>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={{ color: 'white' }}>Ajouter</Text>
      </TouchableOpacity>
      <Text style={styles.ingredientName}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  ingredientName: {

  },
  btnAdd: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'green',
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

export default RecipeDetailsTile