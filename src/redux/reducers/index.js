import { combineReducers } from "redux";

import todoReducer from "./todo";

const rootReducer = combineReducers({
  todoState: todoReducer
});

export default rootReducer;
