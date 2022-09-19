import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {POST_TODO,REMOVEALL_TODO} from "../saga/index";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-paper';
const onSubmit = (name, desc) => {

  // if (name.trim().length < 1 || desc.trim().length < 1) {
  //   Alert.alert('Alert', 'Title and Description not be empty');
  //   return;
  // }
  // dispatch({
  //   type: POST_TODO,
  //   payload: {
  //     title: name,
  //     desc: desc,
  //   },
  // }),
  //   onChangeTitle('');
  // onChangeDesc('');
};
const TodoUI1 = () => {
  let dispatch = useDispatch();
  const [name, onChangeTitle] = React.useState('');
  const [desc, onChangeDesc] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.centeredView} >
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
            <Text style={styles.modalText}>ADD Todo</Text>
            <TextInput
              style={styles.input}
              onChangeText={val => onChangeTitle(val)}
              placeholder="Enter the Title Here."
              value={name}
            />
            <TextInput
              style={styles.input}
              onChangeText={val =>  onChangeDesc(val)}
              value={desc}
              placeholder="Enter the Description Here."
              multiline={true} 
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (name.trim().length < 1 || desc.trim().length < 1) {
                  Alert.alert('Alert', 'Title and Description not be empty');
                  return;
                }
                {
                  setModalVisible(!modalVisible);
                }
                dispatch({
                  type: POST_TODO,
                  payload: {
                    title: name,
                    desc: desc,
                  },
                }),
                  onChangeTitle('');
                onChangeDesc('');
              }}>
              <Text style={styles.textStyle}>ADD TODO</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
      <View styles={styles.parent}>
      <Pressable
          style={styles.add}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>ADD TODO</Text>
      </Pressable>
      <Pressable
 style={styles.delete}
        onPress={() => {
          dispatch(
           {type:REMOVEALL_TODO} 
          );
        }}>
        <Text style={styles.textStyle}>DELETE ALL</Text>
      </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    height: 40,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F7F7F3',
  },
  modalView: {
    margin: 20,
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
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  parent:{
 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
 
  },
  add: {
      position:'absolute',
      marginLeft:40,
    // justifyContent: 'space-between'

     justifyContent: 'flex-end',
    // height:50,
    
  },
  delete:{
    // flex:1,
    marginLeft:200,
    // justifyContent: 'flex-end',
  }
});

export default TodoUI1;
