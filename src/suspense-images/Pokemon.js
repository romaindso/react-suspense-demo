import React from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import { PokemonWrapper, Name, ImageWrapper } from "./ui";

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => resolve(src);
    image.src = src;
  });
}

const { read } = createResource(loadImage);

const Pokemon = props => (
  <PokemonWrapper>
    <ImageWrapper>
      <img alt="pokemon" src={props.pokemon.src} />
      {/* <img alt="pokemon" src={read(props.cache, props.pokemon.src)} /> */}
    </ImageWrapper>
    <Name>{props.pokemon.name}</Name>
  </PokemonWrapper>
);

export default withCache(Pokemon);
