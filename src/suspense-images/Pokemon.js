import React from "react";
import { unstable_createResource } from "react-cache";
import { PokemonWrapper, Name, ImageWrapper } from "./ui";

function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => resolve(src);
    image.src = src;
  });
}

const { read } = unstable_createResource(loadImage);

const Pokemon = props => (
  <PokemonWrapper>
    <ImageWrapper>
      {/* <img alt="pokemon" src={props.pokemon.src} /> */}
      <img alt="pokemon" src={read(props.pokemon.src)} />
    </ImageWrapper>
    <Name>{props.pokemon.name}</Name>
  </PokemonWrapper>
);

export default Pokemon;
