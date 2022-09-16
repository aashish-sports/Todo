import React from "react";

import { useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, TextInput,Button ,View,Text,Alert,Pressable,Modal} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {POST_TODO,REMOVEALL_TODO} from "../saga/index";

const UselessTextInput = () => {
  const [name, onChangeTitle] = React.useState('');
  const [desc, onChangeDesc] = React.useState('');
  let dispatch = useDispatch();



  const onSubmit = (name,desc) => {
    if (name.trim().length < 1||desc.trim().length <1) {
        Alert.alert('Alert', 'Title and Description not be empty');
        return;
    }
    dispatch({type:POST_TODO,payload:{
      title:name,
      desc:desc
    }}),
    onChangeTitle("")
    onChangeDesc("")
   
}
  return (
      <SafeAreaView>
 <TextInput
              style={styles.input}
              onChangeText={val =>onChangeTitle(val)}
              placeholder="Enter the Title Here."
              value={name}
            />
            <TextInput
              style={styles.input}
              onChangeText={val =>onChangeDesc(val)}
              value={desc}
              placeholder="Enter the Description Here."
            />
      
          <SafeAreaView  style={styles.fixToText}>
          <Button 
          title="ADD"
          onPress={() =>{
            onSubmit(name,desc)
          }
            
            
            // Alert.alert()
        }
        />
         
    
              <Button 
          title="DELETE ALL"
          onPress={() => {
            dispatch(
             {type:REMOVEALL_TODO} 
            );
          }}
        />
          </SafeAreaView>
      
       </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#F7F7F3"
  },
  fixToText: {
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#FFF176'

    
  },
  
});

export default UselessTextInput;