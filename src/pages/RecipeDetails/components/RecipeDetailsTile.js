import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const RecipeDetailsTile = ({ item }) => {
  return (
    <View style={styles.ingredient}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={{ color: 'white' }}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    marginRight: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

export default RecipeDetailsTile