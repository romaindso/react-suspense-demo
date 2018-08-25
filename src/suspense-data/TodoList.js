import React, { Component } from 'react';
import { Todos, Todo } from './ui'

const TodoList = ({ todos }) => {
  return (
    <Todos>
      {todos.map(todo =>
        <Todo key={todo.id}>
          {todo.text}
        </Todo>
      )}
    </Todos>)
}

export default TodoList