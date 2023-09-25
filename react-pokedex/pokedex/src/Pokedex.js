import Pokecard from "./Pokecard";

/**
 *
 * Pokedex:
 *
 * Takes in an array of objects, each holding information about a Pokemon
 *
 * Loops through the list, and calls the Pokecard function for each pokemon
 *
 */
function Pokedex({ pokemonList }) {
  return pokemonList.map((pokemon) => Pokecard(pokemon));
}

export default Pokedex;