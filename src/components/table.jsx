import React, { Component } from "react";
import TaskTodo from "./task";
import moment from "moment";
class TableTodo extends Component {
  state = {
    value: "",
    tasks: [
      {
        id: 0,
        dateAdded: moment().format("DD/MM/YYYY hh:mm:ss"),
        dateCompleted: null,
        name: "Programming Fundamentals Assingment # 1.",
      },
      {
        id: 1,
        dateAdded: moment().format("DD/MM/YYYY hh:mm:ss"),
        dateCompleted: null,
        name: "Install Windows.",
      },
      {
        id: 2,
        dateAdded: moment().format("DD/MM/YYYY hh:mm:ss"),
        dateCompleted: null,
        name: "Delete Dota2 obviosuly.",
      },
    ],
  };
  handleDelete = (id) => {
    const temp_tasks = this.state.tasks.filter((_t) => _t.id !== id);
    this.setState({
      tasks: temp_tasks,
    });
  };

  handleAddData = () => {
    const task = {
      id: this.state.tasks[this.state.tasks.length - 1].id + 1,
      dateAdded: moment().format("DD/MM/YYYY hh:mm:ss"),
      dateCompleted: null,
      name: this.state.value,
    };
    const new_list = this.state.tasks.concat(task);
    this.setState({ value: "", tasks: new_list });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <table className="table table-Light">
        <thead>
          <tr>
            <th>Added On</th>
            <th>Completed On</th>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </td>
            <td></td>
            <td>
              <button
                className="btn btn-success"
                onClick={this.handleAddData.bind(this)}
              >
                Add
              </button>
            </td>
          </tr>
          {this.state.tasks.map((_t) => (
            <TaskTodo
              task={_t}
              key={_t.id}
              onDelete={this.handleDelete}
            ></TaskTodo>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableTodo;
