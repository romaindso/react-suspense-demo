import React from "react";
import Pokemon from "./Pokemon";
import { PokemonsWrapper } from "./ui";

const PokemonList = ({ pokemons }) => (
  <PokemonsWrapper>
    {pokemons.map(pokemon => {
      return <Pokemon key={pokemon.id} pokemon={pokemon} />;
    })}
  </PokemonsWrapper>
);

export default PokemonList;
