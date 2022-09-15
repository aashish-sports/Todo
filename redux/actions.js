export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETEALL_TODO = "DELETEALL_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const GET_TODOS = "GET_TODOS";

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}
export function deleteAllTodo(todo) {
    return {
        type:DELETEALL_TODO,
        payload: todo,
    }
}

export function completeTodo(todo) {
    return {
        type:COMPLETE_TODO,
        payload: todo,
    }
}

export function fetchTodos() {
    return {
        type:GET_TODOS
    }
}