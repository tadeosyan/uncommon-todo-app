import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/reducers";

const configureStore = () => {
  const reducers = combineReducers({
    todos: todoReducer,
  });

  const store = createStore(reducers, {}, composeWithDevTools());

  return store;
};

export default configureStore;
