import { take, put, call, takeEvery } from "redux-saga/effects";

import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETEALL_TODO,
  COMPLETE_TODO,
  GET_TODOS,
} from "../redux/actions";

import { fetchTodos, addTodo,doneTodo,updateTodo,deleteTodo,deleteAllTodo,countAllTodo } from "../api/index";

export const POST_TODO = "POST_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVEALL_TODO = "REMOVEALL_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
export const DONE_TODO = "DONE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const COUNTSAGATODO="COUNTSAGATODO";

function* handleFetchTodos() {
  // api call
  const res = yield call(fetchTodos);

  // status update after api response
  yield put({ type: GET_TODOS, payload: res });
}

function* handleAddTodo(action) {
  const res = yield call(addTodo, action.payload.title, action.payload.desc);
  yield put({
    type: ADD_TODO,
    payload: { title: action.payload.title, desc: action.payload.desc ,id:res.id,status:false},
  });
}

function* handleDoneTodo(action){
  console.log(action,"saga action ")
  const res =yield call(doneTodo,action.payload.id);
  var status=true;
  yield put({
    type:COMPLETE_TODO,
    payload:{id:action.payload.id,title: action.payload.title, desc: action.payload.desc ,status:status},
  })

}
function* handleChangeTodo(action){
  console.log(action.payload.id)
  const res =yield call(updateTodo,action.payload.id,action.payload.title,action.payload.desc );
  var status=false;
  yield put({
    type:UPDATE_TODO,
    payload:{id:action.payload.id,title: action.payload.title, desc: action.payload.desc ,status:status},
  })

}

function* handleDeleteTodo(action){
  console.log(action,"saga action ")
  const res =yield call(deleteTodo,action.payload.id);
  yield put({
    type:DELETE_TODO,
    payload:{id:action.payload.id},
  })}

  function* handleRemoveAllTodo(){
    const res =yield call(deleteAllTodo);
    yield put({
      type:DELETEALL_TODO,
    })}


    // function* handleCountTodo(){
    //   const res =yield call(countAllTodo );
    //   yield put({
    //     type:,
    //     payload:{count:action.payload.ct}
    //   })}
//watcher saga
function* rootSaga() {
  // yield takeEvery(ADD_TODO,handleAddTodo)
  yield takeEvery(FETCH_TODOS, handleFetchTodos);
  yield takeEvery(POST_TODO, handleAddTodo);
  yield takeEvery(DONE_TODO,handleDoneTodo);
  yield takeEvery(REMOVE_TODO,handleDeleteTodo)
  yield takeEvery(CHANGE_TODO,handleChangeTodo);
  yield takeEvery(REMOVEALL_TODO,handleRemoveAllTodo);
  // yield takeEvery(COUNTSAGATODO,handleCountTodo);
}
// watcher saga -> actions -> worker saga
export default rootSaga;
