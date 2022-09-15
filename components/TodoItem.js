import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  Pressable,
  Alert,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
// import { deleteTodo, updateTodo, completeTodo } from "../redux/actions";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import {DONE_TODO, CHANGE_TODO, REMOVE_TODO} from '../saga/index';




function TodoItem({todo}) {
  const [st, setSt] = useState(false);
  const [name, setName] = useState(todo.title);
  // name=todo.title;
  // setName(name+"sd")
  // name =+"sd"
  const [desc, setDesc] = useState(todo.desc);
  // const [complt, setComplt] = useState(true);
  let dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  console.log(todo, 'todo in itemlist');

  return (
    <View id="main">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update Todo</Text>
            <TextInput
              style={styles.input}
              onChangeText={val => setName(val)}
              placeholder="Enter the Title Here."
              value={name}
            />
            <TextInput
              style={styles.input}
              onChangeText={val => setDesc(val)}
              value={desc}
              placeholder="Enter the Description Here."
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                {
                  setModalVisible(!modalVisible);
                }
                dispatch({
                  type: CHANGE_TODO,
                  payload: {
                    id: todo.id,
                    title: name,
                    desc: desc,
                  },
                }),
                  setName(name);
                setDesc(desc);
              }}>
              <Text style={styles.textStyle}>Update Todo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {
        <View className="container">
          <View>
            <Card>
              <Card.Content>
                <Title style={styles.showText}> Title: {todo.title}</Title>
                <Paragraph> Desc: {todo.desc}</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.parent}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
              disabled={st}>
              <Text style={styles.textStyle}>Edit Todo</Text>
            </Pressable>
            <Pressable
              className="btn btn-danger m-2"
              onPress={() =>
                dispatch({
                  type: REMOVE_TODO,
                  payload: {
                    id: todo.id,
                  },
                })
              }
              style={[styles.button, {backgroundColor: '#f25551'}]}>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              className="btn btn-danger m-2"
              onPress={() => {
                dispatch({
                  type: DONE_TODO,
                  payload: {
                    status: !todo.status,
                    id: todo.id,
                    title: todo.title,
                    desc: todo.desc,
                  },
                }),
                  setSt(true);
              }}
              style={[
                styles.button,
                {backgroundColor: todo.status ? 'green' : '#67d5ed'},
              ]}
              disabled={todo.status}>
              <Text style={styles.textStyle}>Complete</Text>
            </Pressable>
          </View>
        </View>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F7F7F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    length: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 180,
    elevation: 2,
    //   flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-evenly'
  },
  buttonOpen: {
    backgroundColor: '#4ceed0',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  sbar:{
      flex: 1,
      justifyContent: 'space-between',
  }
});

export default TodoItem;
