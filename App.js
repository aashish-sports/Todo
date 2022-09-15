import React ,{useEffect}from 'react';
import { useDispatch } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { StyleSheet,SafeAreaView, Text, TextInput, ScrollView} from 'react-native';
// const Todo = () => {
//   return <Text>TODO </Text>;
// };
// import { fetchTodos } from './redux/actions';
import { FETCH_TODOS } from './saga';


const App = () => {
  // const name = 'Todo';

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: FETCH_TODOS})
  }, [])


  return (
  
     <SafeAreaView style={styles.container}>
      <ScrollView >

      <Text style={styles.title}>TODO</Text>
        <TodoInput/>
        <Text style={styles.alltodo}>All Todos</Text>
        <TodoList style={styles.alltodo}></TodoList>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
     backgroundColor:"#ffffff"
  },
  alltodo:{
    textAlign: "center",
    fontSize: 20,
    color: "white",
    backgroundColor:"#ff3ee3",
    borderColor: "white",
    borderWidth: 2,
    fontWeight: "bold"
  },
  title: {
    marginTop:0,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 6,
    backgroundColor: "#397afd",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
