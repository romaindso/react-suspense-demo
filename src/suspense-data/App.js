import React, { Component, Fragment, Placeholder } from 'react';
import { createResource } from 'simple-cache-provider';
import { withCache } from '../withCache';
import TodoList from './TodoList';
import todos from './todos-data.js';

// Create our resource
const getTodos = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 3000);
    })
);

// Create our  component
const Todos = withCache(props => {
  const data = getTodos.read(props.cache);
  return <TodoList todos={data} />;
});

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        <Placeholder delayMs={2000} fallback={<div>🌀 'Loading....'</div>}>
          <Todos />
        </Placeholder>
      </Fragment>
    );
  }
}
