import React from 'react'
import { Text, Image, StyleSheet, View, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../../../redux/tasks/actionTasks'

const TaskTile = ({ task }) => {

  const dispatch = useDispatch()

  const checked = () => {
    dispatch(toggleTask(task.id))
  }

  const deleted = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={checked}>
        <View style={styles.subContainer}>
          <Image 
            style={styles.icon}
            source={task.isCompleted 
                      ? require('../../../../assets/icons/check-mark.png')  
                      : require('../../../../assets/icons/circle.png')}
          />
          <Text  style={task.isCompleted ? styles.titleCompleted : styles.title}>{task.title}</Text>
        </View>
      </Pressable>
      <Pressable onPress={deleted}>
        <Image 
          style={styles.icon}
          source={require('../../../../assets/icons/trash.png')}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 75
  },
  titleCompleted: {
    marginLeft: 75,
    fontStyle: 'italic',
    color: 'gray'
  },
  icon: {
    width: 23,
    height: 23,
  }
})

export default TaskTile