import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const RecipeTile = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
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