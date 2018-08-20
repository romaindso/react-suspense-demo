import React, { Component, Fragment, Placeholder, lazy } from 'react';

const BigComponent = lazy(() => import('./BigComponent'));

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        <Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
          <BigComponent />
        </Placeholder>
      </Fragment>
    );
  }
}
