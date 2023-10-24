import React, { Component } from 'react';
import './App.css';

class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      taskDateTime: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addTask = () => {
    if (this.state.newTask.trim() !== '' && this.state.taskDateTime.trim() !== '') {
      const newTask = {
        text: this.state.newTask,
        datetime: new Date(this.state.taskDateTime).toLocaleString(),
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        newTask: '',
        taskDateTime: '',
      }));
    }
  }

  removeTask = (index) => {
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks.splice(index, 1);
      return { tasks: updatedTasks };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter a new task"
          name="newTask"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <input
          type="datetime-local"
          name="taskDateTime"
          value={this.state.taskDateTime}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              Task: {task.text}
              <br />
              Date and Time: {task.datetime}
              <button onClick={() => this.removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoListApp;
