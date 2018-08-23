import React from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../withCache";

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => setTimeout(() => resolve(src), 0);
    image.src = src;
  });
}

const { read } = createResource(loadImage);

const Img = props => {
  return <img alt="trump" src={read(props.cache, props.src)} />;
};

export default withCache(Img);
