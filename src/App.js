import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';

const cache = createCache();

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=trump&api_key=HyIubL700uE92ZMXucZf3mzNmfLi86JI').then(res => res.json()).then(({ data }) => this.setState({ data }))
    // const res = await fetch('http://api.giphy.com/v1/gifs/search?q=trump&api_key=HyIubL700uE92ZMXucZf3mzNmfLi86JI');
    // const imgList = await res.json() ;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Suspense</h1>
        {console.log(this.state.data)}
      </React.Fragment >
    );
  }
}
