import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition }from 'react-transition-group';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    } 

    render(){
        const { id, name } = this.props.todo;
        return (
            <Container style={{ width: '100%' }}>
                <CSSTransition key={id} timeout={500} classNames="item" >
                    <ListGroup.Item className="todo-item">
                        <div className="row">
                            <div className="col-1">
                                <label className="checkbox">
                                <input onChange={this.props.markComplete.bind(this, id)} type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-10">
                                <p className="todo-title">{name}</p>
                            </div>
                            <div className="col-1">
                                <Button
                                onClick={this.props.delTodo.bind(this, id)}
                                className="remove-btn"
                                variant="danger"
                                size="sm"
                                >&times;</Button>
                            </div>
                        </div>
                    </ListGroup.Item>
                </CSSTransition>
            </Container>
        )
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;