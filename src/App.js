import NavBar from "./components/navbar";
import "./App.css";
import React, { Component } from "react";
import TableTodo from "./components/table";
//import moment from "moment";

class App extends Component {
  componentDidMount() {
    document.title = "Todo App - React JS";
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <TableTodo></TableTodo>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
