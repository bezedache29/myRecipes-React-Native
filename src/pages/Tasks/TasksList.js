import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskTile from './components/TaskTile'
import { useSelector } from 'react-redux'
import { getTasks } from '../../redux/tasks/selectorsTasks'
import Compteur from './components/Compteur/Compteur'

const TasksList = () => {

  const [showForm, setShowForm] = useState(false)

  const tasksList = useSelector(getTasks)

  console.log(tasksList)


  const renderItem = ({item}) => {
    return <TaskTile task={item} />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {showForm && <TaskForm />}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
              <Compteur direction={'left'} title={'Aliments ajoutés'} nb={tasksList.length} />
              <Compteur 
                direction={'right'} 
                title={'Aliments achetés'} 
                nb={tasksList.filter(task => task.isCompleted === true).length}
              />
            </View>
          </>
          }
          contentContainerStyle={{ flexGrow: 1 }}
          data={tasksList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
      />

      <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            width:50,
            height:50,
            position: 'absolute',                                          
            bottom: 20,                                                    
            right: 20,
            backgroundColor:'green',
            borderRadius: 80,
            paddingBottom: 3
          }}
          onPress={() => setShowForm(!showForm)}
      >
        <Text style={{ color: 'white', fontSize: 30 }}>
          {showForm ? '-' : '+'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default TasksList