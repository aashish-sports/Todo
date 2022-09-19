import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoUI1 from './components/TodoUI1';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
// const Todo = () => {
//   return <Text>TODO </Text>;
// };
// import { fetchTodos } from './redux/actions';
import {FETCH_TODOS} from './saga';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: FETCH_TODOS})
  }, [])
  const todos = useSelector(state=>state.todos.todos);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.alltodo}>All Todos ({todos.length})</Text>
        <TodoList style={styles.alltodo}></TodoList>
      </ScrollView>
      <TodoUI1></TodoUI1>
      {/* <TodoInput></TodoInput> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // #ffffff
    // '#54BAB9'
    backgroundColor:'#2b2b2b',
  },
  alltodo: {
    textAlign: 'left',
    fontSize: 15,
    color: 'white',
    // backgroundColor: '#ff3ee3',
    // borderColor: 'white',
    // borderWidth: 2,
    fontWeight: 'bold',
    
  },
  title: {
    marginTop: 0,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: '#397afd',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
});

export default App;
