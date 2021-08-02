import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [text, onChangeText] = useState("Write a task");
  const [number, onChangeNumber] = useState(null);
  return (

    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's task</Text>
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput onChangeText={onChangeText} value={text} style={styles.input} ></TextInput>

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 24
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 20,
    backgroundColor: '#262929',
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#262929',
    borderRadius: 60,
  },
  addText: {},
});
