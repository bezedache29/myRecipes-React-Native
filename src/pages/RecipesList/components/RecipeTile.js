import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const RecipeTile = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Détails de la recette', {id: item.id})} style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  subContainer: {
    width: "70%",
    padding: 7
  },
  image: {
    width: "30%",
    height: 70
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  }
})

export default RecipeTile