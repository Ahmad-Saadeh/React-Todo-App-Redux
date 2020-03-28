import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { add_todo } from "./redux/actions/index";

class AddTodo extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  enterPressed = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      if (this.state.value !== "") {
        this.props.add_todo({
          title: this.state.value,
          status: false
        });
        this.setState({ value: "" });
      }
    }
  };
  render() {
    return (
      <div id="add" className="input-group mb-3">
        <div className="col-s-4">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Add a task!"
            onKeyPress={this.enterPressed}
          ></input>
        </div>
        <div className="input-group-append">
          <button
            onClick={() => {
              if (this.state.value !== "") {
                this.props.add_todo({
                  title: this.state.value,
                  status: false
                });
                this.setState({ value: "" });
              }
            }}
            className="btn btn-dark"
            type="button"
          >
            <span className="add">Add</span>
            <FontAwesomeIcon className="plus" icon={faPlusCircle} />
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add_todo: todo => dispatch(add_todo(todo))
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
