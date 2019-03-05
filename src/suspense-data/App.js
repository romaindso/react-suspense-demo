import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { Container, Title } from "./ui";
import TodoList from "./TodoList";
import Loader from "../common/Loader";
import todos from "./todos-data.js";
import chocolatine from "../assets/chocolatine.gif";

const TodosResource = unstable_createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 2000);
    })
);

const Todos = () => {
  const data = TodosResource.read();
  return <TodoList todos={data} />;
};

export default class TodoListApp extends Component {
  render() {
    return (
      <Container>
        <Title>Todo List</Title>
        <Suspense maxDuration={500} fallback={<Loader type={chocolatine} />}>
          <Todos />
        </Suspense>
      </Container>
    );
  }
}
