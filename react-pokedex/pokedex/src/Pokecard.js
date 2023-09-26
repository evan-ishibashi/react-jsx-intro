/**
 *
 * Pokecard:
 *
 * Takes in an object with information about a Pokemon
 * TODO: List props in docstring
 *
 * Returns a rendering of the information, including the Pokemon's name, image,
 *
 */

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name"> {name} </h1>
      <br />
      <img className="Pokecard-img" src=
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <br />
      <p className="Pokecard-text">
        Type: {type} <br />
        EXP: {base_experience}
      </p>
    </div>);
}

export default Pokecard;