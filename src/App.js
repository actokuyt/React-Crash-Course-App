import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
// import {v4 as uuid} from 'uuid';
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import About from './components/pages/About'
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }) )
  }


  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res =>  this.setState({ todos: [...this.state.todos, res.data] }) )
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
    } ) })  
  }

 delTodo = (id) => {
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res => this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !== id)] }))
  }

  render() {  
      return (
        <Router>
          <div className="App">
            <Header />
            <Route  exact path = '/' render = {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo} />
                <Todos todos = {this.state.todos} 
                markComplete = {this.markComplete} 
                delTodo = {this.delTodo} />
              </React.Fragment>
            ) }/>
            <Route path = '/About' component = {About}  />
          </div>
        </Router>
    );
  }
}


export default App;
