export const getPokemonList = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=25"
  );
  return await res.json();
};

export const getPokemonListFull = async data => {
  const pokemons = [];
  await Promise.all(
    data.results.map(async el => {
      const res = await fetch(el.url);
      const { id, name, sprites } = await res.json();
      pokemons.push({ id, name, src: sprites.front_default });
    })
  );
  return pokemons;
};
