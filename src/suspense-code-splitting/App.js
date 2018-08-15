import React, { Component, Fragment, Placeholder } from 'react';
import { createCache, createResource } from 'simple-cache-provider';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const cache = createCache();

// Lazy load!
const getComponent = createResource(
  () => sleep(1000).then(() => import('./BigComponent').then(mod => mod.default)),
  cmp => cmp
);

const BigComponent = props => {
  const Comp = getComponent.read(cache, props);
  return <Comp {...props} />;
};

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        <Placeholder delayMs={2000} fallback={<div>🌀 'Loading....'</div>}>
          <BigComponent />
        </Placeholder>
      </Fragment>
    );
  }
}
