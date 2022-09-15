import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button, StatusBar,SectionList,Text ,View} from "react-native";
import TodoItem from './TodoItem.js'
import { useSelector } from 'react-redux'




function TodoList() {
  const todos = useSelector(state=>state.todos.todos);
  console.log(todos, "Todo List")
  return (
      <View className="my-4">
          {todos &&
          todos.map((todo, i)=>   {
              return <TodoItem key={i} todo={todo}/>;
          })}
      
      </View>
  )
}

export default TodoList












// const DATA = [
//     {
//       title: "TODO",
//       data: ["aewefjknwfjknwejkbnfewkjbnefjkfbewjfewn"]
//     },
  
//   ];

//   const Item = ({ title }) => (
//     <SafeAreaView  style={styles.item}>
//       <Text style={styles.title}>{title}</Text>

//     </SafeAreaView >
//   );

//   const TodoList= () => {
  //   return (  <SafeAreaView style={styles.container}>
  //       <SectionList
  //         sections={DATA}
  //         keyExtractor={(item, index) => item + index}
  //         renderItem={({ item }) => <Item title={item} />}
  //         renderSectionHeader={({ section: { title } }) => (
  //           <Text style={styles.header}>{title}</Text>
        
  //         )}
  //       />
  //     </SafeAreaView>)
  
  // };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#FFF9C4",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      color:"#FFF59D",
      backgroundColor: "#263238"
    },
    title: {
      fontSize: 20 ,
      
    }
  });
  
  
  // export default TodoList;
  