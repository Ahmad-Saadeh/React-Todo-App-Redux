import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";

class App extends Component {
  render() {
    //let hamada = JSON.parse(localStorage.getItem("items"));
    console.log(this.props);
    let todo_list = this.props.todos.filter(todo => todo.status === false);
    let done_list = this.props.todos.filter(todo => todo.status === true);
    // localStorage.setItem("items", JSON.stringify(this.props.todos));
    return (
      <div className="App ">
        <div className="container">
          <AddTodo />
          <div className="row">
            <TodoList
              className="col-6"
              todolist={todo_list}
              status="Done"
              title="To Do ✖"
            />

            <TodoList
              className="col-6"
              todolist={done_list}
              status="Undo"
              title="Done ✔"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todoState.todos
  };
};

export default connect(mapStateToProps, null)(App);
