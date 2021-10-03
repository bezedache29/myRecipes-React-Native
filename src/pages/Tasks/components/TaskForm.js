import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTaskOnStore } from '../../../redux/tasks/actionTasks'

const TaskForm = () => {

  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleText = (val) => {
    setTitle(val)
  }

  const onAddTask = () => {
    if (title.length > 0 && title.trim()) {
      // On utilise la fonction des props pour envoyer au parent le title
      // addTask(title)
      // On envoie au store l'ajout de la task
      dispatch(addTaskOnStore(title))
      // On reset la valeur de l'input
      setTitle('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={ styles.input }
        onChangeText={handleText}
        value={title}
        placeholder="Nouvelle tâche"
      />
      {/* <Button 
        onPress={onAddTask}
        title="Ajouter"
        color="green"
      /> */}
      <TouchableOpacity onPress={onAddTask}> 
        <Text style = {styles.btn}>
            Ajouter
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    width: '70%',
    height: 40,
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 22,
    color: 'white'
  }
})

export default TaskForm