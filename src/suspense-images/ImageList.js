import React from "react";
import Image from "./Image";
import { PokemonsWrapper } from "./ui";

const ImageList = ({ pokemons }) => (
  <PokemonsWrapper>
    {pokemons.map(pokemon => {
      return <Image key={pokemon.id} pokemon={pokemon} />;
    })}
  </PokemonsWrapper>
);

export default ImageList;
