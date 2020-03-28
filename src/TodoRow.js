import React, { Component } from "react";
import { connect } from "react-redux";
import { delete_todo, change_status } from "./redux/actions/index";
import "./style.css";
class TodoRow extends Component {
  render() {
    return (
      <tbody>
        <tr
          style={{
            display: "flex",
            justifyContent: "space-between",
            textTransform: "capitalize"
          }}
        >
          <td>
            <input
              className="check-box"
              type="checkbox"
              checked={this.props.todo.status}
              onChange={() => this.props.change_status(this.props.todo)}
            />
            <span
              style={{
                textDecoration: this.props.todo.status ? "line-through" : ""
              }}
            >
              {" " + this.props.todo.title}
            </span>
          </td>
          <td>
            <p
              // className="btn btn-danger"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.delete_todo(this.props.todo)}
            >
              ✖
            </p>
          </td>
        </tr>
      </tbody>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change_status: todo => dispatch(change_status(todo)),
    delete_todo: todo => dispatch(delete_todo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoRow);
