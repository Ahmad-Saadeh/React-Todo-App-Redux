import { createStore, compose } from "redux";
import reducer from "./reducers/";
import { local_storage } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

store.dispatch(local_storage());
export default store;
