import React, { Component, Fragment, Placeholder } from 'react';
import { createResource } from 'simple-cache-provider';
import { withCache } from '../withCache';
import { Container, Title } from './ui';
import TodoList from './TodoList';
import Loader from './Loader';
import todos from './todos-data.js';
import './index.css';

const getTodos = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 3000);
    })
);

const Todos = withCache(props => {
  const data = getTodos.read(props.cache);
  return <TodoList todos={data} />;
});

const App = () => (
  <Container>
    <Title>Todo List</Title>
    <Placeholder delayMs={500} fallback={<Loader />}>
      <Todos />
    </Placeholder>
  </Container>
);

export default App;

