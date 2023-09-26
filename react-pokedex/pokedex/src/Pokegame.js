import shuffle from "lodash/shuffle";
import Pokedex from './Pokedex';

function Pokegame({ pokemonList }) {

  const shuffledList = shuffle(pokemonList);
  const lists = [shuffledList.splice(0, (shuffledList.length / 2)),
    shuffledList];
  return lists.map(list => Pokedex(list));
}

export default Pokegame;