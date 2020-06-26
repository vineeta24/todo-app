import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class AddTodo extends Component {
    state = {
        title: '',
        show: false
    }

    handleClose = () => {
        this.setState({ show: false })
    } 
    handleShow = () => {
        this.setState({ show: true })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '', show: false })
    }

    onChange = (e) => this.setState({ title: e.target.value }) 

    render() {
        return (
            <div>
                <Button className="addBtn" onClick={this.handleShow} >+</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Create Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="title"
                                    placeholder="Enter Task title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button className="submitTodoBtn" type="submit" size="lg" block>Submit</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default AddTodo;