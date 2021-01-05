import React, { Component } from "react";
import moment from "moment";
class TaskTodo extends Component {
  constructor(props) {
    super(props);
    //this.task = props.task;
    this.getTaskName.bind(this);
  }

  state = {
    edit: false,
    dateClass: "btn btn-dark",
    tableRowClass: "table-light",
    task: this.props.task,
  };

  getTaskName = () => {
    const tEdit = this.state.edit;
    if (tEdit)
      return (
        <input
          type="text"
          className="form-control"
          value={this.state.task.name}
          onChange={this.handleEditChange}
          onClick={this.getTaskName}
          onBlur={this.handleEdit}
        />
      );
    return this.state.task.name;
  };

  handleEditChange = (e) => {
    var _t = this.state.task;
    _t["name"] = e.target.value;
    console.log(_t);
    this.setState({ _t });
  };

  handleEdit = () => {
    const tEdit = !this.state.edit;
    this.setState({ edit: tEdit });
  };
  render() {
    return (
      <tr className={this.state.tableRowClass}>
        <td>{this.state.task.dateAdded}</td>
        <td>
          <button
            type="button"
            className={this.state.dateClass}
            onClick={this.getDateClass.bind(this)}
          >
            {this.formatDateCompleted()}
          </button>
        </td>
        <td>{this.getTaskName()}</td>
        <td>
          <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>
            {this.state.edit && "Save"}
            {!this.state.edit && "Edit"}
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.task.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  formatDateCompleted() {
    return this.state.task.dateCompleted === null
      ? "Mark Complete"
      : this.state.task.dateCompleted;
  }
  getDateClass() {
    var dClass = this.state.dateClass;
    var tClass = this.state.tableRowClass;
    var cDate = this.state.dateCompleted;
    if (this.state.task.dateCompleted === null) {
      dClass = "btn btn-info";
      tClass = "table-success";
      cDate = moment().format("DD/MM/YYYY hh:mm:ss");
    } else {
      dClass = "btn btn-dark";
      tClass = "table-light";
      cDate = null;
    }
    var _t = this.state.task;
    _t["dateCompleted"] = cDate;
    this.setState({
      dateClass: dClass,
      tableRowClass: tClass,
      task: _t,
    });
  }
}

export default TaskTodo;
