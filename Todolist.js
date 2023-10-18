import React, { Component } from 'react';
import './App.css';

class TodoListApp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  }


  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: '',
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
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter a new task"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoListApp;
