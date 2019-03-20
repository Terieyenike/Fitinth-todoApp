import React, { Component } from 'react'

export class AddToDo extends Component {
  state = {
    title: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }


  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={stretch}>
          <input
            type='text'
            name='title'
            value= {this.state.title}
            onChange={this.onChange}
            style={{ flex: '10', padding: '5px' }}
            placeholder='Add to do'
          />
          <input
            type='submit'
            value= 'Add ToDo'
            style={btn}
          />
        </form>
      </div>
    )
  }
}

const btn = {
  flex: 1,
  background: '#555',
  display: 'inline-block',
  padding: '7px 20px',
  cursor: 'pointer',
  color: '#fff'
}

const stretch = {
  display: 'flex'
}

export default AddToDo
