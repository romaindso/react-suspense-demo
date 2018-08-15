import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    console.log(this.props.todo);

    return (
      <div>
        {this.props.todo}
      </div>)
  }
}