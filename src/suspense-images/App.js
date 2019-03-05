import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { getPokemonList, getPokemonListFull } from "./service";
import { Container, Title } from "./ui";
import PokemonList from "./PokemonList";
import Loader from "../common/Loader";
import pikachu from "../assets/pikachu.gif";

const PokemonsResource = unstable_createResource(() => {
  return new Promise(async resolve => {
    const pokemonList = await getPokemonList();
    const pokemonListFull = await getPokemonListFull(pokemonList);
    resolve(pokemonListFull);
  });
});

const Pokemons = () => {
  const data = PokemonsResource.read();
  return <PokemonList pokemons={data} />;
};

export default class PokemonsApp extends Component {
  // state = {
  //   pokemons: [],
  //   isLoaded: false
  // };

  // async componentDidMount() {
  //   const pokemonList = await getPokemonList();
  //   const pokemonListFull = await getPokemonListFull(pokemonList);
  //   this.setState({ pokemons: pokemonListFull, isLoaded: true });
  // }

  render() {
    return (
      <Container>
        <Title>Pokémon I never caught...</Title>
        {/* {this.state.isLoaded ? (
          <PokemonList pokemons={this.state.pokemons} />
        ) : (
            <Loader type={pikachu} />
          )} */}
        <Suspense maxDuration={1000} fallback={<Loader type={pikachu} />}>
          <Pokemons />
        </Suspense>
      </Container>
    );
  }
}
