import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  DELETE_ALL,
  LOCAL_STORAGE
} from "./actionTypes";

export const add_todo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
export const delete_todo = todo => {
  return {
    type: DELETE_TODO,
    payload: todo
  };
};
export const change_status = todo => {
  return {
    type: CHANGE_STATUS,
    payload: todo
  };
};

export const delete_all = () => {
  return {
    type: DELETE_ALL
  };
};

export const local_storage = () => {
  return {
    type: LOCAL_STORAGE
  };
};
