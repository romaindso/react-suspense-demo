import React, { Component, Placeholder } from "react";
import { createResource } from "simple-cache-provider";
import { withCache } from "../common/withCache";
import { Container, Title } from "./ui";
import ImageList from "./ImageList";
import Loader from "../common/Loader";
import pikachu from "../assets/pikachu.gif";

// Create our resource
// const getImages = createResource(async () => {
//   const res = await fetch(
//     "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=25"
//   );
//   const data = await res.json();
//   const images = [];
//   async function getImgLink(data) {
//     await Promise.all(
//       data.results.map(async el => {
//         const res = await fetch(el.url);
//         const imageLink = await res.json();
//         images.push(imageLink.sprites.front_default);
//       })
//     );
//     return images;
//   }
//   return getImgLink(data);
// });

// //Create our component
// const Images = withCache(props => {
//   return <ImageList images={getImages.read(props.cache)} />;
// });

export default class App extends Component {
  state = {
    pokemons: [],
    isLoaded: false
  };

  async componentDidMount() {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=2&offset=25"
    );
    const data = await res.json();
    const pokemons = await this.getPokemonWithImage(data);
    this.setState({ pokemons, isLoaded: true });
  }

  async getPokemonWithImage(data) {
    const pokemons = [];
    await Promise.all(
      data.results.map(async el => {
        const res = await fetch(el.url);
        const { id, name, sprites } = await res.json();
        pokemons.push({ id, name, src: sprites.front_default });
      })
    );
    return pokemons;
  }

  render() {
    return (
      <Container>
        <Title>Pokémon I never caught...</Title>
        {this.state.isLoaded ? (
          <ImageList pokemons={this.state.pokemons} />
        ) : (
          <Loader type={pikachu} />
        )}
        {/* <Placeholder delayMs={1000} fallback={<Loader type={pikachu} />}>
          <Images />
        </Placeholder> */}
      </Container>
    );
  }
}
