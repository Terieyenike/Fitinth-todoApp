import React, { Component } from 'react'
import AddToDo from './input'
import Todos from './todos'

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Find out the bugs',
        completed: true
      },
      {
        id: 2,
        title: 'Enye has pushed me to know more',
        completed: false
      },
      {
        id: 3,
        title: 'Pair programming is the best',
        completed: true
      }
    ]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = title => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className='createItems'>
        <AddToDo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    )
  }
}

export default TodoApp
