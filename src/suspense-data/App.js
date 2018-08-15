import React, { Component, Fragment, Placeholder } from 'react';
import { createResource } from 'simple-cache-provider';
import TodoList from './TodoList';
import { withCache } from '../withCache';

// Create our resource
const getTodos = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(todos);
      }, 500);
    })
);

// Create our  component
const Todos = withCache(props => {
  const data = getTodos.read(props.cache);
  return <TodoList todos={data} />;
});

// Create loader
const Placeholder = props => {
  return (
    <Timeout ms={1000}>
      {didTimeout => {
        return didTimeout ? <Loading /> : props.children;
      }}
    </Timeout>
  );
};
export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        <Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
          <Todos />
        </Placeholder>
      </Fragment>
    );
  }
}
