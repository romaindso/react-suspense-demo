import React, { Component, Placeholder } from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import { getPokemonList, getPokemonListFull } from "./service";
import { Container, Title } from "./ui";
import PokemonList from "./PokemonList";
import Loader from "../common/Loader";
import pikachu from "../assets/pikachu.gif";

// Create our resource
// const getPokemons = createResource(() => {
//   return new Promise(async resolve => {
//     const pokemonList = await getPokemonList();
//     const pokemonListFull = await getPokemonListFull(pokemonList);
//     resolve(pokemonListFull);
//   });
// });

// Create our component
// const Pokemons = withCache(props => (
//   <PokemonList pokemons={getPokemons.read(props.cache)} />
// ));

export default class App extends Component {
  state = {
    pokemons: [],
    isLoaded: false
  };

  async componentDidMount() {
    const pokemonList = await getPokemonList();
    const pokemonListFull = await getPokemonListFull(pokemonList);
    this.setState({ pokemons: pokemonListFull, isLoaded: true });
  }

  render() {
    return (
      <Container>
        <Title>Pokémon I never caught...</Title>
        {this.state.isLoaded ? (
          <PokemonList pokemons={this.state.pokemons} />
        ) : (
            <Loader type={pikachu} />
          )}
        {/* <Placeholder delayMs={1000} fallback={<Loader type={pikachu} />}>
          <Pokemons />
        </Placeholder> */}
      </Container>
    );
  }
}
