import React, { Component, Fragment, Placeholder } from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import ImageList from "./ImageList";
import Loader from "../common/Loader";
import pikachu from "../assets/pikachu.gif";

// Create our resource
const getImages = createResource(async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=20"
  );
  const data = await res.json();
  const images = [];
  async function getImgLink(data) {
    await Promise.all(
      data.results.map(async el => {
        const res = await fetch(el.url);
        const imageLink = await res.json();
        images.push(imageLink.sprites.front_default);
      })
    );
    return images;
  }
  return getImgLink(data);
});

//Create our component
const Images = withCache(props => {
  return <ImageList images={getImages.read(props.cache)} />;
});

export default class App extends Component {
  // state = {
  //   images: []
  // };

  // async componentDidMount() {
  //   const res = await fetch(
  //     "https://pokeapi.co/api/v2/pokemon?limit=5offset=20"
  //   );
  //   const data = await res.json();
  //   const images = await this.getImgLink(data);
  //   console.log(images);
  //   this.setState({ images });
  // }

  // async getImgLink(data) {
  //   const images = [];
  //   await Promise.all(
  //     data.results.map(async el => {
  //       const res = await fetch(el.url);
  //       const imageLink = await res.json();
  //       images.push(imageLink.sprites.front_default);
  //     })
  //   );
  //   return images;
  // }

  render() {
    return (
      <Fragment>
        <h1>Suspense</h1>
        {/* <ImageList images={this.state.images} /> */}
        <Placeholder delayMs={1000} fallback={<Loader type={pikachu} />}>
          <Images />
        </Placeholder>
      </Fragment>
    );
  }
}
