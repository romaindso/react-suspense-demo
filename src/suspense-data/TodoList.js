import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    console.log(this.props.todos);

    return (
      <div>
        {this.props.todos.map(todo => {
          return <Todo todo={todo} />
        })}
      </div>)
  }
}