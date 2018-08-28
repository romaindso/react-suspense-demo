import React from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import { PokemonWrapper, Name, ImageWrapper } from "./ui";

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => setTimeout(() => resolve(src), 0);
    image.src = src;
  });
}

const { read } = createResource(loadImage);

const Image = ({ pokemon }) => (
  // return <img alt="pokemon" src={read(props.cache, props.src)} />;
  <PokemonWrapper>
    <ImageWrapper>
      <img alt="pokemon" src={pokemon.src} />
    </ImageWrapper>
    <Name>{pokemon.name}</Name>
  </PokemonWrapper>
);

export default withCache(Image);
