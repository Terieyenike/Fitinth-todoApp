import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  itemStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      borderBottom: '1px solid #ccc'
    }
  }

  markComplete = (e) => {
    console.log(this.props)
  }

  render() {
    const { id, title  } = this.props.todo
    return (
      <div style={this.itemStyle()}>
        <p>
          <input onChange={this.props.markComplete.bind(this, id)} type='checkbox' /> {' '}
          {title} <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


const btnStyle = {
  backgroundColor: '#ff0000',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 10px',
  color: '#fff',
  float: 'right',
  cursor: 'pointer',

}

export default TodoItem
