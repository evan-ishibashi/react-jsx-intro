import Pokedex from './Pokedex';
import './App.css';

const POKEMON_LIST = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];
/**
 * Calls Pokedex to render Pokecards
 *
 */
function App() {
  return <div>
    <h1 className="Pokecard-header">Pokedex</h1>
  <div className="Pokecard-container">
    <Pokedex pokemonList={POKEMON_LIST} />
    </div>
  </div>
}

export default App;
