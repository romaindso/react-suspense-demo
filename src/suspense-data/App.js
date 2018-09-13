import React, { Placeholder } from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import { Container, Title } from "./ui";
import TodoList from "./TodoList";
import Loader from "../common/Loader";
import todos from "./todos-data.js";
import chocolatine from "../assets/chocolatine.gif";

const getTodos = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 2000);
    })
);

const Todos = withCache(props => {
  const data = getTodos.read(props.cache);
  return <TodoList todos={data} />;
});

const App = () => (
  <Container>
    <Title>Todo List</Title>
    <Placeholder delayMs={1000} fallback={<Loader type={chocolatine} />}>
      <Todos />
    </Placeholder>
  </Container>
);

export default App;
