import React from "react";
import { Todos, Todo } from "../common/ui";

const TodoList = ({ todos }) => {
  return (
    <Todos>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.text}</Todo>
      ))}
    </Todos>
  );
};

export default TodoList;
