import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import Tasks from './components/Tasks'

export default function App() {
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState()

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItem([...taskItem, task])
    setTask(null);
  }
  const completeTask = (item) => {
    let itemCopy = [...taskItem]
    itemCopy.splice(index, 1)
    setTaskItem(itemCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* Houses the tasks */}{
          taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(item)}>
                <Tasks text={item}/>
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={"Write your task"} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20

  },
sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
},
items: {
    marginTop: 30,
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: "row",
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingHorizontal: 15,
  paddingVertical: 15,
  width: 250,
  borderRadius: 60,
  backgroundColor: white,
  borderWidth: 1,
  borderColor: '#C0C0C0'
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: white,
  borderRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  backgroundColor: white
},
addText: {

}
});
