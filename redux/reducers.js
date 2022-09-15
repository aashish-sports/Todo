import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETEALL_TODO,
  COMPLETE_TODO,
  GET_TODOS,
} from './actions';

// export let initState = {
//     todos: [
//         {
//             id:1,
//             name: "One",
//             desc:"hy",
//             complt:false,
//         },
//         {
//             id:2,
//             name: "Two",
//             desc:"hy",
//             complt:false,
//         },
//         {
//             id:3,
//             name: "Three",
//             desc:"hy",
//             complt:false,

//         },
//     ]
// }

export let reducer = (state = {todos: []}, action) => {
  let newTodos = [];
  // console.log(action.payload, "Payload")
  //console.log("NewTodo",[...state])
  switch (action.type) {
    case GET_TODOS:
    //   console.log('GET TODOS REDUCER', action.payload);

      // return {
      //     ...state,
      //     todos: [
      //         ...state.todos,
      //         action.payload
      //     ]
      // }

      return {
        todos: action.payload ? action.payload : [],
      };

    case ADD_TODO:

      console.log(action.payload)
      
      console.log('ADD TODO PAYLOAD', state.todos, action.payload);

      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:

      console.log(action.payload, 'delete todo id')
      
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload.id),
      };

    case DELETEALL_TODO:
      return {
        todos: [],
      };

    case UPDATE_TODO:
      newTodos = [...state.todos];
      console.log(newTodos, 'old');
      console.log('Payload: ', action.payload);
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodos[index] = action.payload;
        console.log(newTodos, 'new');
      }
      return {
        ...state,
        todos: newTodos,
      };

    case COMPLETE_TODO:
      newTodos = [...state.todos];
      let ind = -1;
      console.log(newTodos, 'redux action ');
      console.log(action.payload, 'redux action ');
      for (let i = 0; i < newTodos.length; i++) {
        ind++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (ind != -1) {
        newTodos[ind] = action.payload;
        return {
          ...state,
          todos: newTodos,
        };
      }

    default:
      return state;
  }
};
