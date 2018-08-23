import React, { Component, Fragment, Placeholder } from "react";
import { createResource } from "simple-cache-provider";
import ImageList from "./ImageList";
import { withCache } from "../withCache";

// Create our resource
const getImages = createResource(async () => {
  const res = await fetch(
    "http://api.giphy.com/v1/gifs/search?q=trump&api_key=HyIubL700uE92ZMXucZf3mzNmfLi86JI&limit=10"
  );
  return await res.json();
});

// Create our component
const Images = withCache(props => {
  const { data } = getImages.read(props.cache);
  return <ImageList images={data} />;
});

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        <Placeholder delayMs={1000} fallback={<div>🌀 'Loading....'</div>}>
          <Images />
        </Placeholder>
      </Fragment>
    );
  }
}
