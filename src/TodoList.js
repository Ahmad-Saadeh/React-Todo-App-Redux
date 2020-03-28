import React, { Component } from "react";
import "./index.css";
import TodoRow from "./TodoRow";
import { delete_all } from "./redux/actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    filteredTodos: this.props.todolist,
    query: ""
  };
  filterTodos(query) {
    query = query.toLowerCase();
    let filteredTodos = this.props.todolist.filter(todo => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredTodos, query });
  }

  componentDidUpdate(props) {
    if (props.todolist !== this.props.todolist) {
      this.filterTodos(this.state.query);
    }
  }
  render() {
    let todoRows = (
      <thead>
        <tr id="table">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
    );
    if (this.props.todolist.length >= 1) {
      todoRows = this.state.filteredTodos.map(todo => (
        <TodoRow key={todo.title} todo={todo} status={this.props.status} />
      ));
    }

    return (
      <div className="ListTable col-6 mt-3">
        {/* <h3>{this.props.title}</h3> */}
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <td>
                <h3>
                  {" "}
                  {this.props.title}
                  {this.props.status === "Undo" ? (
                    <button
                      style={{
                        position: "absolute",
                        right: "25px",
                        backgroundColor: "#3f77ee",
                        borderColor: "#3f77ee"
                      }}
                      className="btn btn-info"
                      onClick={this.props.delete_all}
                    >
                      Delete All
                    </button>
                  ) : (
                    <></>
                  )}
                </h3>
              </td>
            </tr>
          </thead>
          {todoRows}
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete_all: () => dispatch(delete_all())
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
