import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTaskOnStore } from '../../../redux/tasks/actionTasks'

const RecipeDetailsTile = ({ item }) => {

  const dispatch = useDispatch()

  // Ajoute l'ingredient a la liste des courses
  const addIngredientOnList = () => {
    dispatch(addTaskOnStore(item.name))
  }

  return (
    <View style={styles.ingredient}>
      <TouchableOpacity style={styles.btnAdd} onPress={addIngredientOnList}>
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