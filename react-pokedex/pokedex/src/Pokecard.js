/**
 *
 * Pokecard:
 *
 * Takes in an object with information about a Pokemon
 * TODO: List props in docstring
 *
 * Returns a rendering of the information, including the Pokemon's name, image,
 * type, and experience level
 *TODO: add css file, style cards
 */

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div>
      <h1> {name} </h1>
      <br />
      <img src=
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <br />
      <p>Type: {type}</p>
      <br />
      <p>EXP: {base_experience}</p>
    </div>);
}

export default Pokecard;