import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Compteur = ({ title, nb, direction }) => {
  return (
    <View style={styles.container}>
      <Text style={direction === 'left' ? styles.nbRight : styles.nbLeft }>{nb}</Text>
      <Text style={direction === 'left' ? styles.titleRight : styles.titleLeft}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '40%'
  },
  titleLeft: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 'auto'
  },
  nbLeft: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 'auto'
  },
  titleRight: {
    fontSize: 16,
    color: 'grey',
  },
  nbRight: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default Compteur