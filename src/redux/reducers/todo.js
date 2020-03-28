import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  DELETE_ALL,
  LOCAL_STORAGE
} from "../actions/actionTypes";
let initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const arr = [action.payload].concat(state.todos);
      localStorage.setItem("items", JSON.stringify(arr));
      return {
        ...state,
        todos: arr
      };

    case DELETE_TODO:
      const arr1 = state.todos.filter(a => a !== action.payload);
      localStorage.setItem("items", JSON.stringify(arr1));
      return {
        ...state,
        todos: arr1
      };
    case CHANGE_STATUS:
      const arr2 = state.todos
        .filter(a => a !== action.payload)
        .concat({
          title: action.payload.title,
          status: !action.payload.status
        });
      localStorage.setItem("items", JSON.stringify(arr2));
      return {
        ...state,
        todos: arr2
      };
    case DELETE_ALL:
      const arr3 = state.todos.filter(a => a.status === false);
      localStorage.setItem("items", JSON.stringify(arr3));
      return {
        ...state,
        todos: arr3
      };

    case LOCAL_STORAGE:
      let items = JSON.parse(localStorage.getItem("items"));
      if (!items) {
        items = [];
      }
      console.log(items);
      return {
        ...state,
        todos: items
      };

    default:
      return state;
  }
};
