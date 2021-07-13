import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo( this.state.title );
        this.setState({ title: '' });
    }

    getTitle = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form  onSubmit = {this.submit} style = {{ display: 'flex'}} >
                <input  
                    type = 'text'
                    name = 'title'
                    placeholder = 'Add Todo...'
                    style = {{ flex: '10', padding:'5px', }}
                    value = {this.state.title}
                    onChange = {this.getTitle}
                />
                <input 
                    type = 'submit'
                    value = 'submit'
                    className = 'btn'
                    style = {{ flex:'1' }}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
