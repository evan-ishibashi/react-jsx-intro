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
function Pokedex(pokemonList) {
  return (<div>
    <h1 className="Pokecard-header">Pokedex</h1>
    <div className="Pokecard-container">
      {pokemonList.map((pokemon) => Pokecard(pokemon))}
    </div>
  </div>);
}

export default Pokedex;