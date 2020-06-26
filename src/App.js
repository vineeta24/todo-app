import React, { Component} from 'react';
import uuid from 'uuid';

import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        name: 'Create task by tomorrow',
        isCompleted: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }) })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      name: title,
      isCompleted: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ]})
  }

  render() {
      return (
          <div>
              <Header/>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
      )
  }
}

export default App;
