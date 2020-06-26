import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Todos extends Component {
  render() {
      const allCount = this.props.todos.length;
      const activeCount = this.props.todos.reduce((accum, todo) => {
          return todo.isCompleted ? accum : accum + 1;
      }, 0);
      const completedCount = allCount - activeCount;
      return (
          <React.Fragment>
              <div className="countDiv">
                <div className="allDiv">
                    <h3>{allCount}</h3>
                    <p>All Tasks</p>
                </div>
                <div className="activeDiv">
                    <h3>{activeCount}</h3>
                    <p>Active</p>
                </div>
                <div className="completeDiv">
                    <h3>{completedCount}</h3>
                    <p>Completed</p>
                </div>
              </div>
          <div style={{ marginTop: '2rem' }}>
              <ListGroup style={{ marginBottom: '1rem' }}>
                    <TransitionGroup className="todo-list">
                        {this.props.todos.map((todo) =>  (
                            <CSSTransition key={todo.id} timeout={500} classNames="item">
                                <TodoItem todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}  />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
              </ListGroup>
          </div>
          </React.Fragment>
      )
  }
}

//PropTypes
Todos.protoTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;