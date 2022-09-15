import { reducer } from "./reducers";
import { pageReducer } from "./pageReducer";
import createSagaMiddleware from 'redux-saga'
// import { persistStore, persistReducer } from "redux-persist";
import { configureStore} from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootSaga from "../saga";
// const persistConfig = {
//    key: "todos",
//   storage
// };

// const rootReducer=combineReducers({
//   // mainPage:reducer,
//   nextPage:pageReducer,

// })


// const persistedReducer = persistReducer(persistConfig,combineReducers);
const sagaMiddleware = createSagaMiddleware()
let store = configureStore({
  reducer: {
    todos: reducer,
  },
  
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)
// let persistor = persistStore(store);
export { store };
// store.dispatch({type:'Login'})
// store.dispatch({type:'Hello'})
// store.dispatch({type:'LOGOUT'})
// import {createStore} from 'redux';
// import {reducer} from './reducers';

// export let store = createStore(reducer);
