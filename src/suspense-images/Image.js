import React from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => setTimeout(() => resolve(src), 0);
    image.src = src;
  });
}

const { read } = createResource(loadImage);

const Img = props => {
  return <img alt="pokemon" src={read(props.cache, props.src)} />;
  // return <img alt="pokemon" src={props.src} />;
};

export default withCache(Img);
